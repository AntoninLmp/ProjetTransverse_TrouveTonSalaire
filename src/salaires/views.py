from django.shortcuts import render

from salaires.models import Entreprise

# Create your views here.

def accueil(request):
    entreprises = Entreprise.objects.all()
    return render(request, "salaires/accueil.html", context={"entreprises" : entreprises})
