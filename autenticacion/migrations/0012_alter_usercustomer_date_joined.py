# Generated by Django 4.0.5 on 2022-09-08 18:09

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('autenticacion', '0011_alter_usercustomer_date_joined'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usercustomer',
            name='date_joined',
            field=models.DateTimeField(default=datetime.datetime(2022, 9, 8, 14, 9, 19, 603776)),
        ),
    ]
