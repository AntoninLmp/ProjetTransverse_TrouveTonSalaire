from django.shortcuts import render

# Create your views here.

def salaire(request):
    return render(request, "salaire.html")
