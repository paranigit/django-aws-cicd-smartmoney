from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from django.views.decorators.csrf import csrf_exempt

import itertools
import json
import pytz


def index(request):
    content = {}
    return render(request, 'appAccounts/page-accounts-all.html', content)


def statusParameters(request):
    content = {}
    return render(request, 'appAccounts/page-status-parameters.html', content)


def displayGraph(request, graphkey):
    content = {}
    return render(request, 'appAccounts/page-display-graph.html', content)