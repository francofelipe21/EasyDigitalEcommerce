from django.contrib import admin
from .models import TypeGood, Category, Subcategory, UnitMeasurement, Good
# Register your models here.

admin.site.register(TypeGood)
admin.site.register(Category)
admin.site.register(Subcategory)
admin.site.register(UnitMeasurement)
admin.site.register(Good)
