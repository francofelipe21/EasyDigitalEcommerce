from django.db import models
from autenticacion.models import Shop, UserCustomer
from tienda.models import Good
from ventas.models import Sales
# Create your models here.

class TypeScore(models.Model):
    name = models.CharField(max_length=50)
    date_joined = models.DateTimeField()

class Score(models.Model):
    amount_stars = models.IntegerField(null=True)
    sale = models.ForeignKey(Sales, on_delete=models.SET_NULL, null=True)
    type_score = models.ForeignKey(TypeScore, on_delete=models.SET_NULL, null=True)
    date_joined = models.DateTimeField()

