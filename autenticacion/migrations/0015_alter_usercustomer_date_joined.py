# Generated by Django 4.0.5 on 2022-09-09 23:29

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('autenticacion', '0014_alter_usercustomer_date_joined'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usercustomer',
            name='date_joined',
            field=models.DateTimeField(default=datetime.datetime(2022, 9, 9, 19, 29, 56, 365357)),
        ),
    ]
