# Generated by Django 4.0.5 on 2022-11-04 16:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0005_alter_good_date_joined'),
    ]

    operations = [
        migrations.AlterField(
            model_name='good',
            name='description',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='good',
            name='name',
            field=models.CharField(max_length=100),
        ),
    ]