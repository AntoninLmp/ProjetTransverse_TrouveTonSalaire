# Generated by Django 4.0.3 on 2022-05-11 13:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='utilisateur',
            name='salaire',
            field=models.IntegerField(default=20000),
            preserve_default=False,
        ),
    ]
