# Generated by Django 4.0.5 on 2022-09-16 17:39

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ventas', '0005_alter_sales_client_viewed_alter_sales_date_joined'),
    ]

    operations = [
        migrations.AddField(
            model_name='sales',
            name='puntuality_evaluated',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='sales',
            name='quality_evaluated',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='sales',
            name='date_joined',
            field=models.DateTimeField(default=datetime.datetime(2022, 9, 16, 14, 39, 15, 550946)),
        ),
    ]