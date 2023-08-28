from appCentral import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

from .views import NuevoBien, Tienda

urlpatterns = [
    path('sumar_bien/', NuevoBien.as_view(), name="sumar_bien"),
    path('', Tienda.as_view(), name="tienda")
]
