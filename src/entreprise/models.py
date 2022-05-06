from django.db import models
from django.urls import reverse
# Create your models here.
# voir la vidéo à 16min


class Profile(models.Model):
    enteprise = models.CharField(max_length=100)
    poste = models.CharField(max_length=100)
    salaire = models.IntegerField()

    def __str__(self):
        return self.nom

    def get_absolute_url(self):
        return reverse("entreprise_trouvee", kwargs={"slug": self.slug})
