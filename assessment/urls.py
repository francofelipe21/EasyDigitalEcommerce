from django.urls import path
from .views import Assessment

urlpatterns = [
    path('', Assessment.as_view(), name="assessment"),
]