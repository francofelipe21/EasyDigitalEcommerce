# Generated by Django 4.0.5 on 2022-09-17 01:31

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ventas', '0006_sales_puntuality_evaluated_sales_quality_evaluated_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sales',
            name='date_joined',
            field=models.DateTimeField(default=datetime.datetime(2022, 9, 16, 22, 31, 17, 196684)),
        ),
    ]
