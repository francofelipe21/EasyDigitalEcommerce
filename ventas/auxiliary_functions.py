from .models import Sales, Phase
from autenticacion.models import UserCustomer
from ventas.models import Sales, Phase
from assessment.models import Score, TypeScore
import datetime

def get_requests_stats(good):
    accept_phase = Phase.objects.get(id=3)
    reject_phase = Phase.objects.get(id=4)
    accepted_requests = len(Sales.objects.filter(good = good, phase=accept_phase))
    rejected_requests = len(Sales.objects.filter(good = good, phase=reject_phase))
    if accepted_requests > 0 or rejected_requests > 0:
        return "Se ha solicitado " + str(accepted_requests + rejected_requests) + " veces , de las cuales "+ str(accepted_requests) + " veces se ha aceptado (" + str( round(accepted_requests*100/(accepted_requests + rejected_requests), 1)) + "%) y "+ str(rejected_requests) + " veces se ha rechazado la entrega(" + str( round(rejected_requests*100/(accepted_requests + rejected_requests), 1)) + "%)"
    return "No se ha solicitado o no ha concluido con una respuesta final ninguna solicitud"

def get_mark(sales, scores):
    scores_selection = []
    for sale in sales:
        filtered_scores = scores.filter(sale=sale)
        for score in filtered_scores:
            scores_selection.append(score)
    if len(scores_selection) > 0:
        length = len(scores_selection)
        total = 0
        for score in scores_selection:
            total = total + score.amount_stars
        average = total / length
        return round(average, 2), "Promedio de evaluaciones: " + str(round(average, 2)), "Cantidad de veces evaluado: " + str(length)
    return "Sin evaluaciones"

def get_quality(good):
    sales = Sales.objects.filter(good= good, quality_evaluated = True)
    scores = Score.objects.filter(type_score = TypeScore.objects.get(id =1))
    return get_mark(sales, scores)

def get_puntuality(shop):
    sales = Sales.objects.filter(shop=shop, puntuality_evaluated = True)
    scores = Score.objects.filter(type_score = TypeScore.objects.get(id = 2))
    return get_mark(sales,scores)

def get_puntuality_good(good):
    sales = Sales.objects.filter(good=good, shop=good.shop, puntuality_evaluated = True)
    scores = Score.objects.filter(type_score = TypeScore.objects.get(id = 2))
    return get_mark(sales,scores)

def time_proximity(request, type):
    purchase_phase = Phase.objects.get(id=1)
    proposal_phase = Phase.objects.get(id=2)
    acceptance_phase = Phase.objects.get(id=3)
    rejection_phase = Phase.objects.get(id=4)
    last = None
    if type == "sale_requests" and len(Sales.objects.filter(shop=request.user.shop, phase = purchase_phase))>0:
        last = Sales.objects.filter(shop=request.user.shop, phase = purchase_phase).order_by("-date_joined")[0].date_joined
    if type == "accepted_sale_requests" and len(Sales.objects.filter(shop=request.user.shop, phase= acceptance_phase)) > 0:
        last = Sales.objects.filter(shop=request.user.shop, phase= acceptance_phase).order_by("-date_joined")[0].date_joined
    if type == "rejected_sale_requests" and len(Sales.objects.filter(shop=request.user.shop, phase= rejection_phase)) > 0:
        last = Sales.objects.filter(shop=request.user.shop, phase= rejection_phase).order_by("-date_joined")[0].date_joined
    if type == "accepted_purchase_requests" and len(Sales.objects.filter(client=request.user, phase= acceptance_phase)) > 0:
        last = Sales.objects.filter(client=request.user, phase= acceptance_phase).order_by("-date_joined")[0].date_joined
    if type == "rejected_purchase_requests" and len(Sales.objects.filter(client=request.user, phase= rejection_phase)) > 0:
        last = Sales.objects.filter(client=request.user, phase= rejection_phase).order_by("-date_joined")[0].date_joined
    if type == "proposal_purchase_requests" and len(Sales.objects.filter(client=request.user, phase= proposal_phase)) > 0:
        last = Sales.objects.filter(client=request.user, phase= proposal_phase).order_by("-date_joined")[0].date_joined
    if last == None:
        return ""
    else:
        answer="Última notificación hace "
        diff = (datetime.datetime.now() - datetime.datetime(last.year,last.month,last.day, last.hour, last.minute, last.second))
        if diff.days > 0:
            answer = answer + str(diff.days) + " días, "
        if diff.seconds >= 3600:
            answer = answer + str(int(diff.seconds/3600)) + " horas y "
        answer = answer + str(int((diff.seconds % 3600)/60)) + " minutos "
        return answer

def mark_as_viewed(request):
    type = request.POST["type_view"]
    purchase_phase = Phase.objects.get(id=1)
    proposal_phase = Phase.objects.get(id=2)
    acceptance_phase = Phase.objects.get(id=3)
    rejection_phase = Phase.objects.get(id=4)
    if type == "proposal_purchase_requests":
        queries = Sales.objects.filter(client=request.user, client_viewed=False, phase=proposal_phase)
    if type == "accepted_purchase_requests":
        queries = Sales.objects.filter(client=request.user, client_viewed=False, phase=acceptance_phase)
    if type == "rejected_purchase_requests":
        queries = Sales.objects.filter(client=request.user, client_viewed=False, phase=rejection_phase)
    if type == "sale_requests":
        queries = Sales.objects.filter(shop=request.user.shop, provider_viewed=False, phase=purchase_phase)
    if type == "accepted_sale_requests":
        queries = Sales.objects.filter(shop=request.user.shop, provider_viewed=False, phase=acceptance_phase)
    if type == "rejected_sale_requests":
        queries = Sales.objects.filter(shop=request.user.shop, provider_viewed=False, phase=rejection_phase)
    for query in queries:
        query.client_viewed=True
        query.provider_viewed=True
        query.save()

def extract_time_from_request(query):
    date = str(query.delivery_date.date())
    if len(str(query.delivery_date.minute)) > 1:
        time = str(query.delivery_date.hour) + ":" + str(query.delivery_date.minute)
    else:
        time = str(query.delivery_date.hour) + ":0" + str(query.delivery_date.minute)
    if query.delivery_time_interval[0] + query.delivery_time_interval[1] == 0:
        datetime = date + " a las " + time
    else:
        interval_proposed = [
            int(time.split(":")[0]) * 60 + int(time.split(":")[1]) - int(query.delivery_time_interval[0]),
            int(time.split(":")[0]) * 60 + int(time.split(":")[1]) + int(query.delivery_time_interval[1])]
        interval_proposed[0] = str(int(interval_proposed[0] / 60)) + ":" + str(interval_proposed[0] % 60)
        interval_proposed[1] = str(int(interval_proposed[1] / 60)) + ":" + str(interval_proposed[1] % 60)
        datetime = date + " entre las " + interval_proposed[0] +" y las " + interval_proposed[1]
    return datetime, date, time

def get_requests(request):
    phases = Phase.objects.all()
    phase_purchase_request = phases.get(id=1)
    phase_proposal_interval_request = phases.get(id=2)
    phase_accepted_request = phases.get(id=3)
    phase_rejected_request = phases.get(id=4)
    query_purchases = Sales.objects.filter(client=request.user)
    query_sales = Sales.objects.filter( shop=request.user.shop)
    purchase_request_array = []
    number_purchase_request=len(query_purchases.filter(phase=phase_purchase_request, client_viewed=False))
    accepted_purchase_request_array = []
    number_accepted_purchase_request=len(query_purchases.filter(phase=phase_accepted_request, client_viewed=False))
    rejected_purchase_request_array = []
    number_rejected_purchase_request=len(query_purchases.filter(phase=phase_rejected_request, client_viewed=False))
    proposal_interval_purchase_array=[]
    number_proposal_purchase_request=len(query_purchases.filter(phase=phase_proposal_interval_request, client_viewed=False))
    sale_request_array = []
    number_sale_request=len(query_sales.filter(phase=phase_purchase_request, provider_viewed=False))
    accepted_sale_request_array = []
    number_accepted_sale_request=len(query_sales.filter(phase=phase_accepted_request, provider_viewed=False))
    rejected_sale_request_array = []
    number_rejected_sale_request=len(query_sales.filter(phase=phase_rejected_request, provider_viewed=False))
    proposal_interval_sale_array = []
    number_proposal_sale_request=len(query_sales.filter(phase=phase_proposal_interval_request, provider_viewed=False))
    users = UserCustomer.objects.all()
    help = None
    for query in query_purchases:
        datetime, date, time = extract_time_from_request(query)
        trade_name = ""
        if query.shop.name == 'Tienda anónima':
            for user in users.filter(shop=query.shop):
                if user.first_name is not None and user.last_name is not None:
                    if len(trade_name) > 0:
                        trade_name = trade_name + " - "
                    trade_name = trade_name + user.first_name + " " + user.last_name
        else:
            trade_name = query.shop.name
        if query.dispatch_help != None:
            help = query.dispatch_help.content
        if query.phase == phase_purchase_request:
            purchase_request_array.append({"trade_name": trade_name, "good_name": query.good.name, "amount": query.amount, "unit_measurement": query.unit_measurement.name, "dispatch": query.dispatch, "longitude" : query.delivery_point.x, "latitude" : query.delivery_point.y, "datetime" : datetime, "id" : query.id, "time": time , "dispatch_help":help, "client_viewed": query.client_viewed, "provider_viewed": query.provider_viewed})
        if query.phase == phase_accepted_request:
            accepted_purchase_request_array.append({"trade_name":trade_name, "good_name" : query.good.name, "amount": query.amount, "unit_measurement": query.unit_measurement.name, "dispatch": query.dispatch, "longitude": query.delivery_point.x, "latitude": query.delivery_point.y, "datetime":datetime, "id" : query.id, "time": time, "dispatch_help":help, "client_viewed": query.client_viewed, "provider_viewed": query.provider_viewed})
        if query.phase == phase_rejected_request:
            rejected_purchase_request_array.append({"trade_name":trade_name, "good_name":query.good.name, "amount":query.amount, "unit_measurement":query.unit_measurement.name, "dispatch":query.dispatch, "longitude":query.delivery_point.x, "latitude":query.delivery_point.y, "datetime":datetime, "id":query.id, "time":time, "dispatch_help":help, "client_viewed": query.client_viewed, "provider_viewed": query.provider_viewed})
        if query.phase == phase_proposal_interval_request:
            interval_proposed = [
                int(time.split(":")[0]) * 60 + int(time.split(":")[1]) - int(query.delivery_time_interval[0]),
                int(time.split(":")[0]) * 60 + int(time.split(":")[1]) + int(query.delivery_time_interval[1])]
            interval_proposed[0] = str(int(interval_proposed[0] / 60)) + ":" + str(interval_proposed[0] % 60)
            interval_proposed[1] = str(int(interval_proposed[1] / 60)) + ":" + str(interval_proposed[1] % 60)
            proposal_interval_purchase_array.append({"trade_name":trade_name, "good_name":query.good.name, "amount":query.amount, "unit_measurement":query.unit_measurement.name, "dispatch":query.dispatch, "longitude":query.delivery_point.x, "latitude":query.delivery_point.y, "datetime":datetime, "id":query.id, "time":time, "lower":interval_proposed[0], "higher":interval_proposed[1], "dispatch_help":help, "client_viewed": query.client_viewed, "provider_viewed": query.provider_viewed})
    for query in query_sales:
        datetime, date, time = extract_time_from_request(query)
        client_name = query.client.first_name + " " + query.client.last_name
        if query.dispatch_help != None:
            help = query.dispatch_help.content
        if query.phase == phase_purchase_request:
            sale_request_array.append({"client":client_name, "good_name":query.good.name, "amount":query.amount, "unit_measurement":query.unit_measurement.name, "dispatch":query.dispatch, "longitude":query.delivery_point.x, "latitude":query.delivery_point.y, "datetime":datetime, "id":query.id, "time":time, "dispatch_help":help, "client_viewed": query.client_viewed, "provider_viewed": query.provider_viewed})
        if query.phase == phase_accepted_request:
            accepted_sale_request_array.append({"client":client_name, "good_name":query.good.name, "amount":query.amount, "unit_measurement":query.unit_measurement.name, "dispatch":query.dispatch, "longitude":query.delivery_point.x, "latitude":query.delivery_point.y, "datetime":datetime, "id":query.id, "time":time, "dispatch_help":help, "client_viewed": query.client_viewed, "provider_viewed": query.provider_viewed})
        if query.phase == phase_rejected_request:
            rejected_sale_request_array.append({"client":client_name, "good_name":query.good.name, "amount":query.amount, "unit_measurement":query.unit_measurement.name, "dispatch":query.dispatch, "longitude":query.delivery_point.x, "latitude":query.delivery_point.y, "datetime":datetime, "id":query.id, "time":time, "dispatch_help":help, "client_viewed": query.client_viewed, "provider_viewed": query.provider_viewed})
        if query.phase == phase_proposal_interval_request:
            interval_proposed = [
                int(time.split(":")[0]) * 60 + int(time.split(":")[1]) - int(query.delivery_time_interval[0]),
                int(time.split(":")[0]) * 60 + int(time.split(":")[1]) + int(query.delivery_time_interval[1])]
            interval_proposed[0] = str(int(interval_proposed[0] / 60)) + ":" + str(interval_proposed[0] % 60)
            interval_proposed[1] = str(int(interval_proposed[1] / 60)) + ":" + str(interval_proposed[1] % 60)
            proposal_interval_sale_array.append({"client":client_name, "good_name":query.good.name, "amount":query.amount, "unit_measurement":query.unit_measurement.name, "dispatch":query.dispatch, "longitude":query.delivery_point.x, "latitude":query.delivery_point.y, "datetime":datetime, "id":query.id, "time":time, "lower":interval_proposed[0], "higher":interval_proposed[1], "dispatch_help":help, "client_viewed": query.client_viewed, "provider_viewed": query.provider_viewed})
    return purchase_request_array, accepted_purchase_request_array, rejected_purchase_request_array, proposal_interval_purchase_array, sale_request_array, accepted_sale_request_array, rejected_sale_request_array, proposal_interval_sale_array, number_purchase_request, number_accepted_purchase_request, number_rejected_purchase_request, number_proposal_purchase_request, number_sale_request, number_accepted_sale_request, number_rejected_sale_request, number_proposal_sale_request
