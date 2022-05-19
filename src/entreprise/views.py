from django.shortcuts import render, get_object_or_404
from accounts.models import utilisateur

from entreprise.models import Profile

# Create your views here.

def salaire(request):
    if request.method == "POST":
        jobTitle = request.POST.get("jobTitle")
        dep = request.POST.get("villeJob")
        cate = request.POST.get("categorie")
        recrute = request.POST.get("recrute")
            
        if cate != "" and recrute != None and jobTitle != "" : 
            postes = Profile.objects.filter(libelle__icontains=jobTitle,secteur=cate, recrute=True)
        elif cate != "" and recrute != None : 
            postes = Profile.objects.filter(libelle__icontains=jobTitle,secteur=cate, recrute=True)
        elif jobTitle != "" and recrute != None : 
            postes = Profile.objects.filter(libelle__icontains=jobTitle, recrute=True)
        elif cate != "":
            postes = Profile.objects.filter(libelle__icontains=jobTitle,secteur=cate)
        elif recrute != None :
            postes = Profile.objects.filter(libelle__icontains=jobTitle,recrute=True)
        else:
            postes = Profile.objects.filter(libelle__icontains=jobTitle)
        nbr = len(postes)
    else:
        postes = None
        nbr = 0
    return render(request, "salaire.html", context={"postes" : postes,"nbr":nbr})


def profile_trouve(request, slug):
    metier = get_object_or_404(Profile,slug=slug)
    profiles = utilisateur.objects.filter(poste=metier.libelle)
    return render(request, "profile_trouve.html", context={"metier" : metier,"profiles":profiles})
