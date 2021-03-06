from django.db import models
from django.urls import reverse

from accounts.views import User


# Create your models here.
# voir la vidéo à 16min


class Entreprise(models.Model):
    nom = models.CharField(max_length=100)
    slug = models.SlugField(max_length=128)# identifiant nom sans espace maj etc...
    logo = models.ImageField(upload_to='LogoEntreprise', blank=True, null=True)
    description = models.TextField(blank=True)
    site_web = models.CharField(max_length=250)

    def __str__(self):
        return self.nom

    def get_absolute_url(self):
        return reverse("entreprise_trouvee", kwargs={"slug": self.slug})
    
    def get_absolute_url2(self):
        return reverse("comparer_entreprise", kwargs={"slug": self.slug})
    