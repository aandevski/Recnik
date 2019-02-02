from gensim.models import KeyedVectors
import json


SIMILARITY_THRESHOLD = 0.5

model = KeyedVectors.load('models/word2vec_v01.wv')
words = []
for word, values in model.vocab.items():

    word_json = {
        'model': 'backend.word',
        'pk': values.index,
        'fields': {
            'word': word,
            'related_words': []
        }
    }

    for related_word in model.most_similar(word):

        if related_word[1] > SIMILARITY_THRESHOLD:
            word_id = model.vocab[related_word[0]].index
            word_json['fields']['related_words'].append(word_id)

    words.append(word_json)

json.dump(words, open('../backend/fixtures/words.json', 'w'))