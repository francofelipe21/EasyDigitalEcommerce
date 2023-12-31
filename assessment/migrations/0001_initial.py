# Generated by Django 4.0.5 on 2022-09-17 01:31

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('autenticacion', '0019_alter_usercustomer_date_joined'),
        ('tienda', '0005_alter_good_date_joined'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='TypeScore',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('date_joined', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Score',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount_star', models.IntegerField(null=True)),
                ('date_joined', models.DateTimeField()),
                ('good', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='tienda.good')),
                ('sender', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
                ('shop', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='autenticacion.shop')),
                ('type_score', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='assessment.typescore')),
            ],
        ),
    ]
