import profile
from django.shortcuts import render, get_object_or_404

from entreprise.models import Profile

# Create your views here.

def salaire(request):
    return render(request, "salaire.html")

def profile_trouve(request, slug):
    profile = get_object_or_404(Profile,slug=slug)
    return render(request, "entreprise/profile_trouve.html", context={"profile" : profile})
