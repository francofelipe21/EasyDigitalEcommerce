# Generated by Django 4.0.5 on 2022-09-17 04:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('assessment', '0002_remove_score_good_remove_score_sender_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='score',
            old_name='amount_star',
            new_name='amount_stars',
        ),
    ]
