from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Word
from gensim.models import KeyedVectors


model = KeyedVectors.load('word2vec/models/word2vec_v01.wv')


def get_word_details(request, word):

    word_entry = get_object_or_404(Word, word=word)
    related_words = []
    for related_word in word_entry.related_words.all():
        related_words.append(related_word.word)

    json_response = {
        'word': word_entry.word,
        'related': related_words,
        'definition': word_entry.definition
    }

    return JsonResponse(json_response)


def get_words(request, query):

    words = Word.objects.filter(word__icontains=query)[:20]

    json_response = {
        'words': [word.word for word in words]
    }

    return JsonResponse(json_response)


def get_word_calculation(request, positives, negatives):

    positives = positives.split(',')
    negatives = negatives.split(',')

    result = model.most_similar(positive=positives, negative=negatives, topn=3)

    json_response = {
        'results': [
            {'word': entry[0],
             'probability': entry[1]}
            for entry in result
        ]
    }

    return JsonResponse(json_response)
