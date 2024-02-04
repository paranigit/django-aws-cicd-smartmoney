from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='page-accounts-all'),
    path('status-parameters', views.statusParameters, name='page-status-parameters'),
    path('display-graph/<str:graphkey>', views.displayGraph, name='page-display-graph'),
]
