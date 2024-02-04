from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


def home(request):
    return render(request, 'app/page-home.html')