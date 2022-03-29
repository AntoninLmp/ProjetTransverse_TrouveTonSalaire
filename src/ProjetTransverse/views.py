
from django.shortcuts import render


def index(request):
    return render(request, "index.html", context={"prenom":"Simon"})

def page(request, numero_page):
    return render(request, f"page{numero_page}.html") 
    #mettre f devant pour convertir en fstring et utiliser les acolades