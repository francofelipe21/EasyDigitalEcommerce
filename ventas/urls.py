from appCentral import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

from .views import SalesProcess, leaflet_other_location_map, NotificationView

urlpatterns = [
    path('', SalesProcess.as_view(), name="proceso_de_venta"),
    path('leaflet_other_location_map', leaflet_other_location_map, name="leaflet_other_location_map"),
    path('notification_view', NotificationView.as_view() , name="notification_view")
]
