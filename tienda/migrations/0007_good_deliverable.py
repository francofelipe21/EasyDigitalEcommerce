# Generated by Django 4.0.5 on 2022-11-11 01:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0006_alter_good_description_alter_good_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='good',
            name='deliverable',
            field=models.BooleanField(default=True),
        ),
    ]
