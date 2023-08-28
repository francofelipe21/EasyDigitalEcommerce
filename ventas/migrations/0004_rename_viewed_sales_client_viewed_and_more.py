# Generated by Django 4.0.5 on 2022-09-15 16:22

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ventas', '0003_remove_sales_provider_sales_delivery_point_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='sales',
            old_name='viewed',
            new_name='client_viewed',
        ),
        migrations.AddField(
            model_name='sales',
            name='provider_viewed',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='sales',
            name='date_joined',
            field=models.DateTimeField(default=datetime.datetime(2022, 9, 15, 13, 22, 39, 729692)),
        ),
    ]