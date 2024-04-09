# searchapp/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),  # Ensure there is a corresponding view function 'index' in views.py
]
