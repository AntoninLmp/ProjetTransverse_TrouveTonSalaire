from pyexpat import model
from django.db import models
from django.urls import reverse
# Create your models here.
# voir la vidéo à 16min


class Profile(models.Model):
    libelle = models.CharField(max_length=100)
    salaire = models.CharField(max_length=100)
    departement = models.CharField(max_length=100)
    slug = models.SlugField(max_length=128)# identifiant nom sans espace maj etc...

    def __str__(self):
        return self.libelle

    def get_absolute_url(self):
        return reverse("profile_trouve", kwargs={"slug": self.slug})
