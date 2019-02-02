from django.db import models


class Word(models.Model):

    word = models.TextField(max_length=100)
    related_words = models.ManyToManyField("self")
    definition = models.TextField(null=True, blank=True)
