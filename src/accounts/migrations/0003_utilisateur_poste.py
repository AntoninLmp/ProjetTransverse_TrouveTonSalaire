# Generated by Django 4.0.3 on 2022-05-13 08:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_utilisateur_salaire'),
    ]

    operations = [
        migrations.AddField(
            model_name='utilisateur',
            name='poste',
            field=models.CharField(default='manager', max_length=300),
            preserve_default=False,
        ),
    ]
