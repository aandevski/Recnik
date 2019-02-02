from django.urls import path
from . import views

urlpatterns = [
    path('word/<str:word>', views.get_word_details),
    path('words/<str:query>', views.get_words),
    path('calculate/<str:positives>/<str:negatives>', views.get_word_calculation)
]