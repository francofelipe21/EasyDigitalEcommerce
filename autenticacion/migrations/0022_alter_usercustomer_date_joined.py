# Generated by Django 4.0.5 on 2022-09-17 04:34

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('autenticacion', '0021_alter_usercustomer_date_joined'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usercustomer',
            name='date_joined',
            field=models.DateTimeField(default=datetime.datetime(2022, 9, 17, 1, 34, 20, 340883)),
        ),
    ]
