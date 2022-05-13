from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class utilisateur(AbstractUser):
    salaire = models.IntegerField()
    poste = models.CharField(max_length=300)
    diplome = models.CharField(max_length=300)
    departement = models.CharField(max_length=300)
    entreprise = models.CharField(max_length=300)
    mail = models.EmailField()
    pass