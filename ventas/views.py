from django.shortcuts import render, redirect
from django.views import View
from tienda.models import Good
from autenticacion.models import UserCustomer
from .models import Phase, Sales
from django.contrib.gis.geos import Point
from datetime import datetime
from autenticacion.models import UserCustomer
from django.contrib.auth.models import AnonymousUser
from django.core.serializers import serialize
from django.http import JsonResponse
from .models import Sales, Phase, DispatchHelp
from ventas.auxiliary_functions import get_requests, mark_as_viewed, time_proximity, get_puntuality, get_puntuality_good, get_quality, get_requests_stats
from django.contrib import messages
# Create your views here.

from django.core.serializers.json import DjangoJSONEncoder


class NotificationView(View):
    def get(self, request):
        purchase_request_array, accepted_purchase_request_array, rejected_purchase_request_array, proposal_interval_purchase_array, sale_request_array, accepted_sale_request_array, rejected_sale_request_array, proposal_interval_sale_array, number_purchase_request, number_accepted_purchase_request, number_rejected_purchase_request, number_proposal_purchase_request, number_sale_request, number_accepted_sale_request, number_rejected_sale_request, number_proposal_sale_request = get_requests(request)
        return render(request, "notification_view.html", {"client":(1 in request.user.type_user),"provider":(2 in request.user.type_user), "purchase_requests": purchase_request_array,  "accepted_purchase_requests": accepted_purchase_request_array, "rejected_purchase_requests":rejected_purchase_request_array, "proposal_interval_purchase":proposal_interval_purchase_array, "sale_requests":sale_request_array, "accepted_sale_requests":accepted_sale_request_array, "rejected_sale_requests":rejected_sale_request_array, "proposal_interval_sale": proposal_interval_sale_array, "number_purchase_request":number_purchase_request , "number_accepted_purchase_request":number_accepted_purchase_request, "number_rejected_purchase_request":number_rejected_purchase_request, "number_proposal_purchase_request":number_proposal_purchase_request, "number_sale_request":number_sale_request, "number_accepted_sale_request":number_accepted_sale_request, "number_rejected_sale_request":number_rejected_sale_request , "number_proposal_sale_request":number_proposal_sale_request, "total_purchase_requests":number_accepted_purchase_request+number_rejected_purchase_request+number_proposal_purchase_request, "total_sale_requests": number_sale_request + number_accepted_sale_request + number_rejected_sale_request, "time_last_sale_request":time_proximity(request, "sale_requests"), "time_last_accepted_sale_request":time_proximity(request, "accepted_sale_requests"), "time_last_rejected_sale_request":time_proximity(request, "rejected_sale_requests"), "time_last_accepted_purchase_request":time_proximity(request, "accepted_purchase_requests"), "time_last_rejected_purchase_request":time_proximity(request, "rejected_purchase_requests"), "time_last_proposal_purchase_request":time_proximity(request, "proposal_purchase_requests")})
    def post(self, request):
        if self.request.headers.get('x-requested-with') == 'XMLHttpRequest':
            if "type_view" in request.POST:
                mark_as_viewed(request)
            else:
                sale_id = request.POST["number_record"]
                sale = Sales.objects.get(id=sale_id)
                if request.POST["sender"] == "provider":
                    sale.client_viewed=False
                    sale.provider_viewed=True
                if request.POST["sender"] == "client":
                    sale.client_viewed=True
                    sale.provider_viewed=False
                if request.POST["type_submit"] == "accept":
                    sale.phase=Phase.objects.get(id=3)
                if request.POST["type_submit"] == "reject":
                    sale.phase=Phase.objects.get(id=4)
                if request.POST["type_submit"] == "propose interval":
                    min=request.POST["time_min"].split(":")
                    min_time=int(min[0])*60+int(min[1])
                    max = request.POST["time_max"].split(":")
                    max_time=int(max[0])*60+int(max[1])
                    time = int(sale.delivery_date.hour)*60 + int(sale.delivery_date.minute)
                    min = time - min_time
                    max = max_time - time
                    sale.delivery_time_interval=[min, max]
                    sale.phase=Phase.objects.get(id=2)
                sale.save()
            return JsonResponse({"code":200})
                #purchase_request_array, accepted_purchase_request_array, rejected_purchase_request_array, proposal_interval_purchase_array, sale_request_array, accepted_sale_request_array, rejected_sale_request_array, proposal_interval_sale_array, number_purchase_request, number_accepted_purchase_request, number_rejected_purchase_request, number_proposal_purchase_request, number_sale_request, number_accepted_sale_request, number_rejected_sale_request, number_proposal_sale_request  = get_requests(request)
                #return render(request, "notification_view.html", {"client":(1 in request.user.type_user), "provider": (2 in request.user.type_user), "purchase_requests": purchase_request_array, "accepted_purchase_requests": accepted_purchase_request_array, "rejected_purchase_requests": rejected_purchase_request_array, "proposal_interval_purchase": proposal_interval_purchase_array, "sale_requests": sale_request_array, "accepted_sale_requests": accepted_sale_request_array, "rejected_sale_requests": rejected_sale_request_array, "proposal_interval_sale": proposal_interval_sale_array, "number_purchase_request": number_purchase_request, "number_accepted_purchase_request": number_accepted_purchase_request, "number_rejected_purchase_request": number_rejected_purchase_request, "number_proposal_purchase_request": number_proposal_purchase_request, "number_sale_request": number_sale_request, "number_accepted_sale_request": number_accepted_sale_request, "number_rejected_sale_request": number_rejected_sale_request, "number_proposal_sale_request": number_proposal_sale_request, "total_purchase_requests": number_accepted_purchase_request + number_rejected_purchase_request + number_proposal_purchase_request, "total_sale_requests": number_sale_request + number_accepted_sale_request + number_rejected_sale_request, "time_last_sale_request":time_proximity(request, "sale_requests"), "time_last_accepted_sale_request":time_proximity(request, "accepted_sale_requests"), "time_last_rejected_sale_request":time_proximity(request, "rejected_sale_requests"), "time_last_accepted_purchase_request":time_proximity(request, "accepted_purchase_requests"), "time_last_rejected_purchase_request":time_proximity(request, "rejected_purchase_requests"), "time_last_proposal_purchase_request":time_proximity(request, "proposal_purchase_requests")})

def make_schedule(shop):
    array = shop.schedule
    if len(array)>0:
        output = ["Lunes: ", "Martes: ", "Miércoles: ", "Jueves: ", "Viernes: ", "Sábado: ", "Domingo: "]
        for i in range(len(array)):
            for j in range(0,len(array[i]),4):
                if array[i][j]!=0 or array[i][j+1]!=0 or array[i][j+2]!=0 or array[i][j+3]!=0:
                    if len(output[i]) > 15:
                        output[i] = output[i] + " y " + str(array[i][j]) + ":"+ str(array[i][j+1]) + " a "+ str(array[i][j+2]) + ":"+ str(array[i][j+3])
                    else:
                        output[i] = output[i] + str(array[i][j]) + ":" + str(array[i][j + 1]) + " a " + str(array[i][j + 2]) + ":" + str(array[i][j + 3])
        for i in range(len(output)):
            if len(output[i]) <= 10:
                output[i] = output[i] + "Sin atención"
        return output
    return None

class SalesProcess(View):
    def get(self, request):
        id_good = request.GET.get("good", 0)
        phase = int(request.GET.get("phase", 1))
        good = Good.objects.get(id=id_good)
        locations=[]
        shop=good.shop
        for location in shop.locations:
            locations.append(location.x)
            locations.append(location.y)
        providers=UserCustomer.objects.filter(shop=shop)[0]
        puntuality = get_puntuality_good(good)
        quality = get_quality(good)
        puntuality_stars_array = []
        quality_stars_array = []
        current_date = str(datetime.now().year)
        if datetime.now().month < 10:
            current_date = current_date + "-0" + str(datetime.now().month)
        else:
            current_date = current_date + "-" + str(datetime.now().month)
        if datetime.now().day < 10:
            current_date = current_date + "-0" + str(datetime.now().day)
        else:
            current_date = current_date + "-" + str(datetime.now().day)
        if puntuality != "Sin evaluaciones":
            average=int(puntuality[0])
            for i in range(average):
                puntuality_stars_array.append(True)
            for i in range(average, 5):
                puntuality_stars_array.append(False)
        if quality != "Sin evaluaciones":
            average = int(quality[0])
            for i in range(average):
                quality_stars_array.append(True)
            for i in range(average, 5):
                quality_stars_array.append(False)
        schedule = make_schedule(shop)
        if quality != "Sin evaluaciones":
            quality = quality[1:3]
        if puntuality != "Sin evaluaciones":
            puntuality = puntuality[1:3]
        requests_stats = get_requests_stats(good)
        min_hour = str(datetime.now()).split(' ')[1].split(':')[0]+":"+str(datetime.now()).split(' ')[1].split(':')[1]+":00"
        return render(request, "sales_process.html", {"min_hour":min_hour, "schedule":schedule , "has_schedule": schedule is not None, "good": good, "shop":shop, "provider": providers, "puntuality" : puntuality, "quality" : quality, "locations":locations, "phase":phase, "puntuality_stars_array":puntuality_stars_array, "quality_stars_array": quality_stars_array, "current_date":current_date, "requests_stats":requests_stats})
    def post(self, request):
        sale = Sales()
        sale.delivery_time_interval=[0,0]
        sale.client = UserCustomer.objects.get(email=request.user)
        sale.good = Good.objects.get(id=request.GET.get("good", 0))
        sale.unit_measurement = sale.good.unit_measurement
        sale.amount = request.POST["amount"]
        sale.price = int(int(sale.good.price) * float(sale.amount))
        date=request.POST["date"].split('-')
        hour=request.POST["hour"].split(':')
        sale.delivery_date=datetime(int(date[0]),int(date[1]),int(date[2]),int(hour[0]),int(hour[1]),0,0)
        sale.shop= sale.good.shop
        sale.phase = Phase.objects.get(id=1)
        sale.dispatch=False
        sale.delivery_point = Point(x=0, y=0, srid=4326)
        if sale.shop.locations.num_points > 0:
            if request.POST["local-dispatch"] == 'dispatch':
                sale.dispatch=True
                help = DispatchHelp()
                help.content = request.POST["help_location"]
                help.date_joined = datetime.now()
                help.save()
                sale.dispatch_help = help
                if request.user.location.x != 0 or request.user.location.y != 0:
                    if request.POST["personal-other"]=='personal':
                        sale.delivery_point = request.user.location
                    if request.POST["personal-other"]=='other':
                        sale.delivery_point = Point(x=float(request.POST["longitude"]), y=float(request.POST["latitude"]), srid=4326)
                else:
                    sale.delivery_point = Point(x=float(request.POST["longitude"]), y=float(request.POST["latitude"]), srid=4326)
        else:
            sale.dispatch = True
            help = DispatchHelp()
            help.content = request.POST["help_location"]
            help.date_joined = datetime.now()
            help.save()
            sale.dispatch_help = help
            if request.user.location.x == 0 and request.user.location.y == 0:
                sale.delivery_point = Point(x=float(request.POST["longitude"]), y=float(request.POST["latitude"]), srid=4326)
            else:
                if request.POST["personal-other"] == 'personal':
                    sale.delivery_point = request.user.location
                else:
                    sale.delivery_point = Point(x=float(request.POST["longitude"]), y=float(request.POST["latitude"]), srid=4326)
        sale.save()
        messages.success(request, '¡Acabaste de solicitar el ' + Good.objects.get(id=request.GET.get("good", 0)).subcategory.category.type_good.name.lower() + ' ' + Good.objects.get(id=request.GET.get("good", 0)).name + ' !')
        return redirect('home')

def leaflet_other_location_map(request):
    return render(request,"leaflet_other_location_map.html")