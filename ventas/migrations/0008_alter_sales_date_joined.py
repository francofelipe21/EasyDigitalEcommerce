# Generated by Django 4.0.5 on 2022-09-17 04:15

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ventas', '0007_alter_sales_date_joined'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sales',
            name='date_joined',
            field=models.DateTimeField(default=datetime.datetime(2022, 9, 17, 1, 15, 27, 130839)),
        ),
    ]
