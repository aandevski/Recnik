from time import time
from gensim.models import Word2Vec


FILENAME = 'data/sentences-junkless.txt'
NUM_EXAMPLES = 2105329
# FILENAME = 'data/sentences-junkless-small.txt'
# NUM_EXAMPLES = 1000


def data_generator(filename):

    f = open(filename, 'r')
    for line in f:
        result_line = line.strip().split(',')
        yield result_line


w2v_model = Word2Vec(min_count=50,
                     window=3,
                     size=150,
                     sample=0.001,
                     alpha=0.03,
                     min_alpha=0.000299,
                     negative=20,
                     workers=5)

t = time()
w2v_model.build_vocab(data_generator(FILENAME), progress_per=10000)
print('Time to build vocab: {} mins'.format(round((time() - t) / 60, 2)))

t = time()
w2v_model.train(data_generator(FILENAME), total_examples=NUM_EXAMPLES,
                epochs=100)
print('Time to train model: {} mins'.format(round((time() - t) / 60, 2)))

w2v_model.wv.save("models/word2vec_v01.wv")
