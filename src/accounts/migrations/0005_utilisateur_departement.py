# Generated by Django 4.0.3 on 2022-05-13 08:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_utilisateur_diplome'),
    ]

    operations = [
        migrations.AddField(
            model_name='utilisateur',
            name='departement',
            field=models.CharField(default='Ardennes', max_length=300),
            preserve_default=False,
        ),
    ]
