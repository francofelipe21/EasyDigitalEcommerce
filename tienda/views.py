import datetime

from django.core.paginator import Paginator
from django.http import Http404
from django.shortcuts import render, redirect
from django.views import View
from .forms import AnnadirBienForm
from tienda.models import TypeGood, Category, Subcategory, UnitMeasurement, Good
from autenticacion.models import UserCustomer, Shop
from ventas.auxiliary_functions import get_quality
from ventas.models import Sales
from assessment.models import Score, TypeScore
from django.contrib import messages

# Create your views here.
days_array = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]


class NuevoBien(View):
    def get(self, request):
        return render(request, "sumar_bien.html", {"form": AnnadirBienForm, "type_good": TypeGood.objects.all(),
                                                   "categories": Category.objects.all(),
                                                   "subcategories": Subcategory.objects.all(),
                                                   "units": UnitMeasurement.objects.all()})

    def post(self, request):
        request.POST._mutable = True
        request.POST["shop"] = request.user.shop
        request.POST["subcategory"] = Subcategory.objects.get(id=request.POST["subcategory"])
        request.POST["unit_measurement"] = UnitMeasurement.objects.get(id=request.POST["unit_measurement"])
        request.POST["date_joined"] = datetime.datetime.now()
        AnnadirBienForm(request.POST, request.FILES).save()
        messages.success(request, '¡Bien hecho! Acabaste de añadir el nuevo  ' + TypeGood.objects.get(
            id=request.POST["type"]).name + ' ' + request.POST["name"])
        return redirect("home")


def get_schedule_from_shop(shop):
    array = shop.schedule
    if len(array) > 0:
        output = ["Lunes: ", "Martes: ", "Miércoles: ", "Jueves: ", "Viernes: ", "Sábado: ", "Domingo: "]
        for i in range(len(array)):
            for j in range(0, len(array[i]), 4):
                if array[i][j] != 0 or array[i][j + 1] != 0 or array[i][j + 2] != 0 or array[i][j + 3] != 0:
                    if len(output[i]) > 15:
                        output[i] = output[i] + " y "
                    output[i] = output[i] + str(array[i][j]) + ":" + str(array[i][j + 1]) + " a " + str(
                        array[i][j + 2]) + ":" + str(array[i][j + 3])
        for i in range(len(output)):
            if len(output[i]) <= 10:
                output[i] = output[i] + "Sin atención"
        return output
    return None


def get_cordinates_from_shop(shop):
    offices = shop.locations
    longitudes_array = []
    latitudes_array = []
    for point in offices:
        longitudes_array.append(point.x)
        latitudes_array.append(point.y)
    return longitudes_array, latitudes_array


def get_mark(scores):
    count = len(scores)
    if count > 0:
        amount = 0
        for score in scores:
            amount = amount + score.amount_stars
        average = round(amount / count, 2)
        return average, "Promedio: " + str(average), "Cantidad de evaluaciones: " + str(amount)
    return 0, "Promedio: -.-", "No se ha evaluado esta tienda"

def get_quality_shop(shop):
    sales = Sales.objects.filter(shop = shop)
    scores = Score.objects.filter(sale__in = sales, type_score = TypeScore.objects.get(id=1))
    return get_mark(scores)


def get_puntuality_shop(shop):
    sales = Sales.objects.filter(shop=shop)
    scores = Score.objects.filter(sale__in=sales, type_score=TypeScore.objects.get(id=2))
    return get_mark(scores)


def get_stars_array(n):
    array=[False, False, False, False, False]
    for i in range(0, n):
        array[i]=True
    return array

class Tienda(View):
    def get(self, request):
        id = request.GET.get("id", 0)
        page = request.GET.get("page", 1)
        goods = Good.objects.filter(shop=id).order_by('-date_joined')
        try:
            paginator = Paginator(goods, 300)
            goods = paginator.page(page)
        except:
            raise Http404
        providers = UserCustomer.objects.filter(shop=id)
        providers_array = []
        shop = Shop.objects.get(id=id)
        schedule = get_schedule_from_shop(shop)
        longitudes_array, latitudes_array = get_cordinates_from_shop(shop)
        quality = get_quality_shop(shop)
        puntuality = get_puntuality_shop(shop)
        stars_quality_array = get_stars_array(int(quality[0]))
        stars_puntuality_array = get_stars_array(int(puntuality[0]))
        quality = quality[1:3]
        puntuality = puntuality[1:3]
        shop = {
            "name": shop.name,
            "schedule": schedule,
            "longitudes": longitudes_array,
            "latitudes": latitudes_array,
            "has_schedule": schedule is not None,
            "quality": quality,
            "stars_quality": stars_quality_array,
            "puntuality": puntuality,
            "stars_puntuality": stars_puntuality_array,
            "has_office":len(longitudes_array)>0
        }
        for provider in providers:
            providers_array.append({
                "first_name": provider.first_name,
                "last_name": provider.last_name,
                "email": provider.email,
                "phonenumber": provider.phone_number
            })
        goods_array = []
        for good in goods:
            mark = "-.-"
            stars_quality_good_array = [False, False, False, False, False]
            has_mark = False
            if get_quality(good) != "Sin evaluaciones":
                has_mark = True
                mark = get_quality(good)[0]
                for i in range(0, int(mark)):
                    stars_quality_good_array[i] = True
            url = "/"
            if good.image:
                url = good.image.url
            goods_array.append({
                'id': good.id,
                'type_good': good.subcategory.category.type_good.name,
                'name': good.name,
                'price': good.price,
                'unit_measurement': good.unit_measurement,
                'description': good.description,
                'date_joined': good.date_joined,
                'image': url,
                "has_mark": has_mark,
                'mark': mark,
                "stars":stars_quality_good_array
            })
        return render(request, "tienda.html", {"goods": goods_array, "providers": providers_array, "shop":shop})

    def post(self, request):
        pass
