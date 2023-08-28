from django.shortcuts import render
from django.views import View
from django.shortcuts import render, redirect
from datetime import datetime
from django.http import JsonResponse
from ventas.models import Sales, Phase
from tienda.models import Good
from .models import Score, TypeScore
from autenticacion.models import UserCustomer, Shop

# Create your views here.

def get_valid_purchases(queries):
    array=[]
    for query in queries:
        date = datetime(query.delivery_date.year, query.delivery_date.month, query.delivery_date.day,
                        query.delivery_date.hour, query.delivery_date.minute)
        diff = date - datetime.now()
        if diff.days < 0:
            if diff.days == -1 and int(86400 - diff.seconds / 60) - query.delivery_time_interval[1] > 0:
                array.append(query)
            else:
                array.append(query)
    return array


def objects_to_jsons_array(objects):
    array=[]
    users= UserCustomer.objects.all()
    for object in objects:
        provider = object.shop.name
        id_shop = object.shop.id
        if provider == "Tienda anónima":
            provider = ""
            persons=users.filter(shop=object.shop)
            for person in persons:
                if len(provider)>0:
                    provider = provider + " - "
                provider = provider + person.first_name + " " + person.last_name
        good=object.good.name
        id_good=object.good.id
        amount = object.amount
        unit = object.unit_measurement.name
        dispatch = object.dispatch
        date_joined = object.date_joined
        delivery_date = object.delivery_date
        time = str(delivery_date.hour) + ":" + str(delivery_date.minute)
        interval = object.delivery_time_interval
        if interval[0] > 0 or interval[1] > 0:
            minutes = int(delivery_date.hour*60 + delivery_date.minute)
            minutes=[minutes - interval[0], minutes + interval[1]]
            time=[str(int(minutes[0]/60))+ ":" + str(minutes[0]%60), str(int(minutes[1]/60)) + ":" + str(minutes[1]%60)]
        array.append({
            "id":object.id,
            "provider":provider,
            "id_shop":id_shop,
            "good":good,
            "id_good":id_good,
            "amount":amount,
            "unit":unit,
            "dispatch":dispatch,
            "date_joined":str(date_joined.year)+"/"+str(date_joined.month)+"/"+str(date_joined.day),
            "delivery_date":str(delivery_date.year)+"/"+str(delivery_date.month)+"/"+str(delivery_date.day),
            "time":time,
        })
    return array

def get_purchases_to_evaluate(request):
    queries = Sales.objects.filter(client=request.user, phase=Phase.objects.get(id=3), puntuality_evaluated=False,quality_evaluated=False)
    purchases_puntuality_quality_array = get_valid_purchases(queries)
    queries = Sales.objects.filter(client=request.user, phase=Phase.objects.get(id=3), puntuality_evaluated=False)
    purchases_puntuality_array = get_valid_purchases(queries)
    queries = Sales.objects.filter(client=request.user, phase=Phase.objects.get(id=3), quality_evaluated=False)
    purchases_quality_array = get_valid_purchases(queries)
    return purchases_puntuality_quality_array, purchases_puntuality_array, purchases_quality_array

class Assessment(View):
    def get(self, request):
        purchases_puntuality_quality_array, purchases_puntuality_array, purchases_quality_array=get_purchases_to_evaluate(request)
        return render(request, "assessment.html",{"purchases_puntuality_quality":objects_to_jsons_array(purchases_puntuality_quality_array), "purchases_quality": objects_to_jsons_array(purchases_quality_array), "purchases_puntuality":objects_to_jsons_array(purchases_puntuality_array)})
    def post(self, context, **response_kwargs):
        if self.request.headers.get('x-requested-with') == 'XMLHttpRequest':
            new_score = Score()
            new_score.amount_stars = self.request.POST["cantidad"]
            sale = Sales.objects.get(id=self.request.POST["id"])
            new_score.sale = sale
            new_score.type_score = TypeScore.objects.get(id=1)
            if self.request.POST["type"] == "puntualidad":
                new_score.type_score = TypeScore.objects.get(id=2)
                sale.puntuality_evaluated = True
            if self.request.POST["type"] == "calidad":
                sale.quality_evaluated = True
            sale.save()
            new_score.date_joined=datetime.now()
            new_score.save()
            purchases_puntuality_quality_array, purchases_puntuality_array, purchases_quality_array= get_purchases_to_evaluate(self.request)
            return JsonResponse({"code":200})
            #return render(request, "assessment.html",{"purchases_puntuality_quality":objects_to_jsons_array(purchases_puntuality_quality_array), "purchases_quality": objects_to_jsons_array(purchases_quality_array), "purchases_puntuality":objects_to_jsons_array(purchases_puntuality_array)})
