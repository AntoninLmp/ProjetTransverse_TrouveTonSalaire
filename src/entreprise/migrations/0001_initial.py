# Generated by Django 4.0.3 on 2022-05-07 13:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('enteprise', models.CharField(max_length=100)),
                ('poste', models.CharField(max_length=100)),
                ('salaire', models.IntegerField()),
                ('diplome', models.CharField(max_length=100)),
                ('département', models.CharField(max_length=100)),
                ('slug', models.SlugField(max_length=128)),
            ],
        ),
    ]