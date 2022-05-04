from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render

from salaires.models import Entreprise



# Create your views here.

def accueil_entreprise(request):
    entreprises = Entreprise.objects.all()
    return render(request, "salaires/accueil_entreprise.html", context={"entreprises" : entreprises})

def entreprise_trouvee(request, slug):
    entreprise = get_object_or_404(Entreprise,slug=slug)
    return render(request, "salaires/entreprise_trouvee.html", context={"entreprise" : entreprise})

def orientation(request):
    return render(request, "salaires/orientation.html")
