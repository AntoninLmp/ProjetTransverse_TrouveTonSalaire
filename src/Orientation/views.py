from django.shortcuts import render

# Create your views here.


def orientation(request):
    return render(request, "orientation.html")
