from django.contrib.gis.geos import Point
from django.db import models
from autenticacion.models import UserCustomer, Shop
from tienda.models import Good, UnitMeasurement
from django.contrib.postgres.fields import ArrayField
from datetime import datetime
from django.contrib.gis.db import models as geo_models

# Create your models here.

class DispatchHelp(models.Model):
    content = models.CharField(max_length=200)
    date_joined = models.DateTimeField()

class Phase(models.Model):
    name = models.CharField(max_length=50)
    date_joined = models.DateTimeField()

class Sales(models.Model):
    client = models.ForeignKey(UserCustomer, on_delete=models.SET_NULL, null=True)
    good = models.ForeignKey(Good, on_delete=models.SET_NULL, null=True)
    shop = models.ForeignKey(Shop, on_delete=models.SET_NULL, null=True)
    phase = models.ForeignKey(Phase, on_delete=models.SET_NULL, null=True)
    unit_measurement = models.ForeignKey(UnitMeasurement, on_delete=models.SET_NULL, null=True)
    dispatch_help = models.ForeignKey(DispatchHelp, on_delete=models.SET_NULL, null=True)
    delivery_point = geo_models.PointField(default=Point(x=0, y=0, srid=4326))
    amount = models.FloatField(null=True)
    price = models.IntegerField(null=True)
    client_viewed = models.BooleanField(default=True)
    provider_viewed = models.BooleanField(default=False)
    puntuality_evaluated = models.BooleanField(default=False)
    quality_evaluated = models.BooleanField(default=False)
    dispatch = models.BooleanField(default=False)
    delivery_time_interval = ArrayField(models.IntegerField(), null=True)
    delivery_date = models.DateTimeField(null=True)
    last_update = models.DateTimeField(null=True)
    date_joined = models.DateTimeField(default=datetime.now())
