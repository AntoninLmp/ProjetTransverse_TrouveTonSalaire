from django.shortcuts import redirect, render
from django.contrib.auth import get_user_model, login, logout, authenticate

from entreprise.models import Profile

# Create your views here.

User = get_user_model()

def signup(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        poste = request.POST.get("poste")
        salaire = request.POST.get("salaire")
        diplome = request.POST.get("diplome")
        departement = request.POST.get("region")
        entreprise = request.POST.get("entreprise")
        mail = request.POST.get("mail")
        user = User.objects.create_user(username=username,password=password,salaire=salaire,
                                        poste=poste,diplome=diplome,departement=departement,entreprise=entreprise,email=mail)
        login(request,user)
        return redirect('index')
    postes = Profile.objects.all()
    return render(request, "accounts/signup.html",context={"postes": postes})


def login_user(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            return redirect('index')
    return render(request, "accounts/login.html")
        

def logout_user(request):
    logout(request)
    return redirect('index')

def compte(request):
    return render(request,"accounts/information_perso.html")