import datetime

from django.contrib.auth.models import AnonymousUser
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.views import View
from tienda.models import Good
from appCentral.auxiliary_functions import create_jsons
from custom_search.auxiliary_functions import json_output_custom_search
# Create your views here.

class CustomSearch(View):
    def get(self, request):
        types_categories_subcategories=create_jsons("search")
        goods = Good.objects.order_by('price')
        min_price = goods[0].price
        max_price = goods[len(goods)-1].price
        current_date, current_time = str(datetime.datetime.now()).split(' ')
        has_personal_location = False
        personal_location_x = None
        personal_location_y = None
        if request.user != AnonymousUser():
            if request.user.location.x != 0 and request.user.location.y != 0:
                has_personal_location = True
                personal_location_x = request.user.location.x
                personal_location_y = request.user.location.y
        return render(request, "custom_search.html", {"types_categories_subcategories": types_categories_subcategories, "min_price":min_price, "max_price":max_price, "current_date":current_date, "current_time":current_time, "has_personal_location" : has_personal_location, "personal_location_x": personal_location_x, "personal_location_y": personal_location_y })

    def post(self, context, **response_kwargs):
        if self.request.headers.get('x-requested-with') == 'XMLHttpRequest':
            return JsonResponse(json_output_custom_search(self))


def leaflet_map_custom_search(request):
    return render(request, 'leaflet_map_custom_search.html')

def leaflet_custom_output_map(request):
    return render(request, 'leaflet_custom_output_map.html')