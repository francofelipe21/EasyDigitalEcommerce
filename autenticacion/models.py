from __future__ import unicode_literals

from datetime import datetime

from django.db import models
from django.contrib.gis.db import models as geo_models
from django.contrib.auth.models import (AbstractBaseUser, BaseUserManager, PermissionsMixin)
from django.utils import timezone
from django.contrib.gis.geos import Point, MultiPoint
from django.contrib.postgres.fields import ArrayField

class Shop(models.Model):
    name = geo_models.CharField(default="Tienda anónima", max_length=50)
    locations = geo_models.MultiPointField()
    scope = ArrayField(models.IntegerField(), default=list, null=True, blank=True)
    schedule = ArrayField( ArrayField (models.IntegerField(), default=list, null=True, blank=True), default=list, null=True, blank=True)
    date_joined = geo_models.DateTimeField()

class TypeUser(models.Model):
    name = models.CharField(max_length=10)
    date_joined = models.DateTimeField()

class UserManager(BaseUserManager):
    def _create_user(self, email,password, is_staff, is_superuser, **extra_fields):
        now = timezone.now()
        if not email:
            raise ValueError('users must have an email address')
        email = self.normalize_email(email)
        user = self.model(email = email,
                             is_staff = is_staff,
                             is_superuser = is_superuser,
                             last_login = now,
                             date_joined = now,
                             **extra_fields)
        user.set_password(password)
        user.save(using = self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        user = self._create_user(email, password, False, False, **extra_fields)
        return user

    def create_superuser(self, email, password, **extra_fields):
        user = self._create_user(email, password, True, True, **extra_fields)
        return user



class UserCustomer(AbstractBaseUser,PermissionsMixin):
    """My own custom user class"""
    type_user = ArrayField(models.IntegerField(), null=True, blank=True)
    shop = models.ForeignKey(Shop, on_delete=models.SET_NULL, null=True)
    first_name = models.CharField(max_length=50, null=True, blank=True)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    email = models.EmailField(max_length=255, unique=True, db_index=True, verbose_name=('email address'))
    phone_number = models.CharField(max_length=12, null=True)
    location = geo_models.PointField(default=Point(x=0, y=0, srid=4326))
    date_joined = models.DateTimeField(default=datetime.now())
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    personal_location_equal_trade_location = models.BooleanField(default=False)
    objects = UserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = ('user')
        verbose_name_plural = ('users')

    def get_full_name(self):
        """Return the email."""
        return self.email

    def get_short_name(self):
        """Return the email."""
        return self.email##