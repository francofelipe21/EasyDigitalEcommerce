from pathlib import Path
from django.contrib.gis.utils import LayerMapping
from .models import CommunesBorders

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

communes_shp = Path(__file__).resolve().parent / 'data' / 'comunas.shp'

def run(verbose=True):
    lm = LayerMapping(CommunesBorders, communes_shp, communesborders_mapping, transform=True)
    lm.save(strict=True, verbose=verbose)
