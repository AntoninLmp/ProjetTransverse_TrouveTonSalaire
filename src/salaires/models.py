from pyexpat import model
from django.db import models

# Create your models here.
## voir la vidéo à 16min 
class Entreprise(models.Model):
    nom = models.CharField(max_length=100)
    logo = models.ImageField(upload_to = 'LogoEntreprise', blank=True, null=True)
    description = models.TextField(blank=True)
    site_web = models.CharField(max_length=250)