from django.contrib.auth.models import AnonymousUser
from django.contrib.gis.geos import MultiPoint, Point
from django.http import Http404
from django.shortcuts import render
from tienda.models import Good
from ventas.models import Sales
from appCentral.auxiliary_functions import create_jsons
from django.core.paginator import Paginator
# Create your views here.

def calculate_amount_notifications_not_viewed(request):
    if request.user != AnonymousUser():
        return len(Sales.objects.filter(client=request.user, client_viewed=False)) + len(Sales.objects.filter(shop=request.user.shop, provider_viewed=False))
    return 0

def home(request):
    page = request.GET.get("page",1)
    goods=Good.objects.filter(available=True).order_by('-date_joined')
    try:
        paginator = Paginator(goods,6)
        goods = paginator.page(page)
    except:
        raise Http404
    geo_jsons_shops=create_jsons("shop")
    return render(request,"appCentral/home.html",{"goods":goods,"shops":geo_jsons_shops,"amount_notifications":calculate_amount_notifications_not_viewed(request), "number_goods":len(Good.objects.all())})

def arrive_home(request, context):
    page = 1
    goods=Good.objects.filter(available=True).order_by('-date_joined')
    try:
        paginator = Paginator(goods,6)
        goods = paginator.page(page)
    except:
        raise Http404
    geo_jsons_shops=create_jsons("shop")
    context.update({"goods":goods,"shops":geo_jsons_shops,"amount_notifications":calculate_amount_notifications_not_viewed(request), "number_goods":len(Good.objects.all())})
    return render(request,"appCentral/home.html",context)
