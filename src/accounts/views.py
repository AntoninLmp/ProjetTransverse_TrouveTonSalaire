from django.shortcuts import redirect, render
from django.contrib.auth import get_user_model, login, logout, authenticate

# Create your views here.

User = get_user_model()

def signup(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        salaire = request.POST.get("salaire")
        user = User.objects.create_user(username=username,password=password)
        login(request,user)
        return redirect('index')
    return render(request, "accounts/signup.html")

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