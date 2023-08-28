from django.db import models
from autenticacion.models import Shop
# Create your models here.
class TypeGood(models.Model):
    name = models.CharField(max_length=20)
    date_joined = models.DateTimeField()

class Category(models.Model):
    type_good= models.ForeignKey(TypeGood, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=20)
    date_joined = models.DateTimeField()

class Subcategory(models.Model):
    category= models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=20)
    date_joined = models.DateTimeField()

class UnitMeasurement(models.Model):
    name = models.CharField(max_length=15)
    category= models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    date_joined = models.DateTimeField()

class Good(models.Model):
    subcategory= models.ForeignKey(Subcategory, on_delete=models.SET_NULL, null=True)
    shop= models.ForeignKey(Shop, on_delete=models.SET_NULL, null=True)
    unit_measurement = models.ForeignKey(UnitMeasurement, on_delete=models.SET_NULL, null=True)
    image= models.ImageField(upload_to="products_photos", null=True, blank=True)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    price= models.IntegerField(default=0)
    available = models.BooleanField(default=True)
    allows_fraction = models.BooleanField(default=False)
    deliverable = models.BooleanField(default= True)
    takeable = models.BooleanField(default= True)
    last_update = models.DateTimeField(null=True)
    date_joined = models.DateTimeField(null=True)
