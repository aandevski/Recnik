import re

from time import time
from nltk.tokenize import sent_tokenize, word_tokenize

SENTENCE_TOKEN_LIMIT = 4
pattern = re.compile(r'\w+')
num_pattern = re.compile(r'\d+')

t = time()
data = open('data/dataset-raw.txt', 'r').readlines()
print('Loaded data in', time() - t)

t = time()
sentences = list()
for entry in data:
    try:
        text = entry.split('\t')[1]
    except Exception as e:
        print('FAILED', e, entry)
        continue
    sentences.extend(sent_tokenize(text))
print('Tokenized sentences in', time() - t)

t = time()
tokenized_sentences = list()
for i, sentence in enumerate(sentences):
    tokenized = word_tokenize(sentence.lower())
    if len(tokenized) > SENTENCE_TOKEN_LIMIT:
        good_words = list(filter(lambda x: pattern.match(x), tokenized))
        good_words = [word
                      if not num_pattern.match(word) else 'NUM'
                      for word in good_words]
        tokenized_sentences.append(good_words)
    if i + 1 % 10000 == 0:
        print('Processed', i, ' in time', time() - t)
print('Tokenized words in', time() - t)

t = time()
output = open('data/sentences-junkless.txt', 'w')
for sentence in tokenized_sentences:
    output.write(','.join(sentence) + '\n')
output.close()
print('Wrote output in', time() - t)
