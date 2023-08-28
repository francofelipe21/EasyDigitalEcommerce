# Create your models here.
# This is an auto-generated Django model module created by ogrinspect.
from django.contrib.gis.db import models


class CommunesBorders(models.Model):
    objectid = models.BigIntegerField()
    shape_leng = models.FloatField()
    dis_elec = models.IntegerField()
    cir_sena = models.IntegerField()
    cod_comuna = models.IntegerField()
    codregion = models.IntegerField()
    st_area_sh = models.FloatField()
    st_length_field = models.FloatField()
    region = models.CharField(max_length=60)
    comuna = models.CharField(max_length=60)
    provincia = models.CharField(max_length=60)
    geom = models.MultiPolygonField(srid=4326)


# Auto-generated `LayerMapping` dictionary for CommunesBorders model
communesborders_mapping = {
    'objectid': 'objectid',
    'shape_leng': 'shape_leng',
    'dis_elec': 'dis_elec',
    'cir_sena': 'cir_sena',
    'cod_comuna': 'cod_comuna',
    'codregion': 'codregion',
    'st_area_sh': 'st_area_sh',
    'st_length_field': 'st_length_',
    'region': 'Region',
    'comuna': 'Comuna',
    'provincia': 'Provincia',
    'geom': 'MULTIPOLYGON',
}
