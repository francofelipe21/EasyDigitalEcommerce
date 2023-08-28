from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group
from .models import UserCustomer, Shop, TypeUser, UserManager
from django.contrib.gis import admin

##
# class UserAdmin(BaseUserAdmin):
#     list_display = ('email','is_staff')
#     list_filter = ('is_staff',)
#     fieldsets = ((None,{'fields':('email','password')}), ('Permissions',{'fields':('is_staff',)}),)
#     add_fieldsets = ((None, {'classes': ('wide',), 'fields': ('email', 'password1', 'password2')}),)
#     search_fields =('email',)
#     ordering = ('email',)
#     filter_horizontal = ()
# ##

@admin.register(Shop)
class ShopAdmin(admin.OSMGeoAdmin):
    """Marker admin."""
    list_display = ("name", "locations", "date_joined")

@admin.register(UserCustomer)
class UserCustomerAdmin(admin.OSMGeoAdmin):
    """Marker admin."""
    list_display = ("first_name", "last_name", "type_user","shop","email", "phone_number","location", "date_joined", "is_active", "is_staff", "personal_location_equal_trade_location")

#admin.site.register(UserCustomerAdmin, UserAdmin)
admin.site.register(TypeUser)
#admin.site.unregister(Group)