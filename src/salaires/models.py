from pyexpat import model
from django.db import models

# Create your models here.
## voir la vidéo à 16min 
class Entreprise(models.Model):
    nom = models.CharField(max_length=100)