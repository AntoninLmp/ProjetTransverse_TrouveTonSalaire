from pyexpat import model
from django.db import models
from django.urls import reverse
# Create your models here.
# voir la vidéo à 16min

class Profile(models.Model):
    libelle = models.CharField(max_length=100)
    salaire = models.CharField(max_length=300)
    slug = models.SlugField(max_length=128)# identifiant nom sans espace maj etc...
    description = models.TextField(blank=True)
    description_courte = models.TextField(blank=True)
    evolution_carriere = models.TextField(blank=True)
    etudes = models.TextField(blank=True)
    secteur = models.CharField(max_length=100)
    recrute = models.BooleanField()
    def __str__(self):
        return self.libelle

    def get_absolute_url(self):
        return reverse("profile_trouve", kwargs={"slug": self.slug})
