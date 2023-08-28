from appCentral import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

from .views import CustomSearch, leaflet_map_custom_search, leaflet_custom_output_map

urlpatterns = [
    path('busqueda_personalizada/', CustomSearch.as_view(), name="custom_search"),
    path('busqueda_personalizada/leaflet_map_custom_search/', leaflet_map_custom_search ,name="leaflet_map_custom_search"),
    path('busqueda_personalizada/leaflet_custom_output_map',leaflet_custom_output_map, name='leaflet_custom_output_map')
]
