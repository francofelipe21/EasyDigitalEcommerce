from appCentral import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

from .views import login, logout, Autenticacion, leaflet_map_personal_location, leaflet_map_trade_locations

urlpatterns = [
    path('', Autenticacion.as_view(), name="autenticacion"),
    path('cerrar_sesion', logout, name="cerrar_sesion"),
    path('iniciar_sesion', login, name="iniciar_sesion"),
    path('leaflet_map_personal_location', leaflet_map_personal_location, name="leaflet_map_personal_location"),
    path('leaflet_map_trade_locations', leaflet_map_trade_locations, name="leaflet_map_trade_locations")
]
