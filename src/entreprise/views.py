from django.shortcuts import render, get_object_or_404

from entreprise.models import Profile

# Create your views here.

def salaire(request):
    if request.method == "POST":
        jobTitle = request.POST.get("jobTitle")
        dep = request.POST.get("villeJob") 
        postes = Profile.objects.filter(libelle__icontains=jobTitle,departement__icontains=dep)
    else:
        postes = None
    return render(request, "salaire.html", context={"postes" : postes})


def profile_trouve(request, slug):
    profile = get_object_or_404(Profile,slug=slug)
    return render(request, "profile_trouve.html", context={"profile" : profile})
