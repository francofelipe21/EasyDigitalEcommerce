# Generated by Django 4.0.5 on 2022-08-25 22:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0003_alter_good_last_update'),
    ]

    operations = [
        migrations.AlterField(
            model_name='good',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='products_photos'),
        ),
    ]
