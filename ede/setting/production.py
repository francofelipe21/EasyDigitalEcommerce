from .base import *
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['titleworkede.herokuapp.com']

import dj_database_url

DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': 'd4isrmahd95170',
        'HOST': 'ec2-3-219-19-205.compute-1.amazonaws.com',
        'USER': 'rnjkvyvnstfitd',
        'PASSWORD': '60368370cb451a81941e87a75c348b41bda1afa6921a2a1345069be01a3bc68d',
        'POST':5432
    }
}

GDAL_LIBRARY_PATH = os.environ.get('GDAL_LIBRARY_PATH')

#GDAL_LIBRARY_PATH = "../../../app/.apt/usr/bin/" if os.environ.get('ENV') == 'HEROKU' else os.getenv('GDAL_LIBRARY_PATH')
#GEOS_LIBRARY_PATH = "../../../app/.apt/usr/bin/" if os.environ.get('ENV') == 'HEROKU' else os.getenv('GEOS_LIBRARY_PATH')

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATIC_URL='/static/'
STATICFILES_DIRS = os.path.join(BASE_DIR, 'static')
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'