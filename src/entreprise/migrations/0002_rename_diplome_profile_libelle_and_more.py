# Generated by Django 4.0.3 on 2022-05-08 21:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('entreprise', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='diplome',
            new_name='libelle',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='enteprise',
        ),
        migrations.AlterField(
            model_name='profile',
            name='salaire',
            field=models.CharField(max_length=100),
        ),
    ]
