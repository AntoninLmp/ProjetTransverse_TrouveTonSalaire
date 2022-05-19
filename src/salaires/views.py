from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render
from accounts.models import utilisateur
from accounts.views import User

from salaires.models import Entreprise



# Create your views here.

def accueil_entreprise(request):
    if request.method == "POST":
        nom = request.POST.get("entrepriseLibelle")
        loca = request.POST.get("localisation")
        if nom != "" and loca != "":
            entreprises = Entreprise.objects.filter(description__icontains=loca,nom__icontains=nom)
        elif nom != "":
            entreprises = Entreprise.objects.filter(nom__icontains=nom)
        elif loca != "":
            entreprises = Entreprise.objects.filter(description__icontains=loca)
        else :
            entreprises = Entreprise.objects.all()
        num = len(entreprises)
    else:
        entreprises = None
        num = 0
    return render(request, "salaires/accueil_entreprise.html", context={"entreprises" : entreprises,"nbr":num})

def entreprise_trouvee(request, slug):
    entreprise = get_object_or_404(Entreprise,slug=slug)
    profiles = utilisateur.objects.filter(entreprise=entreprise.nom)
    return render(request, "salaires/entreprise_trouvee.html", context={"entreprise" : entreprise,"profiles":profiles})

def comparer_entreprise(request, slug):
    entreprise1 = get_object_or_404(Entreprise,slug=slug)
    slug2 = "thales"
    entreprise2 = get_object_or_404(Entreprise,slug=slug2)
    profiles = utilisateur.objects.filter(entreprise=entreprise1.nom)
    return render(request, "salaires/comparer_entreprise.html", context={"entreprise1" : entreprise1,"entreprise2" : entreprise2,"profiles":profiles})

def orientation(request):
    return render(request, "salaires/orientation.html")
