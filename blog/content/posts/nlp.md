---
title: "NLP from Sequential to Attention models"
author: "Hamza imloul"
date: 2022-10-28T00:12:00Z
# draft: true
ShowToc: true
tags: ["Machine learning", "Data science" , "NLP"]
---
## Introduction

This article explores the evolution of NLP driven by data availability. It covers generative AI concepts and provides a practical approach to NLP projects with code snippets. Deep Learning has significantly advanced NLP, especially with Large Language Models (LLMs). The article delves into these models, their applications, and implementation using popular frameworks like [NLTK](https://www.nltk.org/), [PyTorch](https://pytorch.org/), [TensorFlow](https://www.tensorflow.org/overview), or [Hugging Face](https://huggingface.co/models). The tutorial aims to equip readers with insights to create NLP applications like question-answering, sentiment analysis, translation tools, text summarization, and chatbots.

## Capabilities

Discussing Motivation, Use cases, challenges.

Large Language models demonstrated to be a standalone system, performing multiple NLP tasks, making them statistically efficient, and building software on top of them is a lot easier now.

NLP tasks:

- Text generation
- Part-of-Speech tagging
- Sentence similarity
- Sentiment classification
- Intent classification
- Entity extraction

## Data preparation

To understand how language models works, the starting point is training data.

Unlike standard machine learning approaches, where we would have the training and testing sets, in Language models, the training data is just raw text, so we will dive into data preparation.

Normally the collected data should be done after specifying the NLP task we want to perform. Usually for General large language models, data should span a broad range of domains, languages, and so on.

Data is collected from various sources on the web,

- Do we need to preprocess/clean/label raw text before training language model or embedding model?
- Are there tasks for which the dataset should not be used?
- Is there any Data governance strategy to maintain the quality and security of the data.

## Text normalization

### Data preparation

Text normalization (a.k.a Text representation) plays a crucial role in Natural Language Processing (NLP) as it transforms textual data into a numerical format that can be effectively processed by machine learning algorithms. so it’s like data preprocessing for Language models.

In this section, we will explore various techniques for text representation, including statistical methods, encoding, and embedding.

**Data preparation** - Most of the text is not clean, sometimes misspelling, or emojis for instance. This step is the most important, to every NLP task, and it’s always a good practice to feed clean data to the neural network. To start, we’ll pre-process our textual data by removing punctuation, digits, stop words, and other irrelevant information. Then, we’ll build a supervised learning model for text analysis and split our dataset into a train and test set.

**Tokenization** - Normalizing text means converting it to a more convenient, standard form. For example, most of what we are going to do with language relies on first separating out or tokenizing words from running **tokenization** text, the task of tokenization.

Before that, it’s always necessary to clean the textual data.

**lemmatization** - Removed punctuations and digits characters, **lemmatization**, Stemming, Stop words, Stemming, and synonyms. and also Sentence segmentation, and Spelling correction using Edit distance algorithm which is useful also for comparing similarity between strings.

**Regular expressions** - are good to capture information from text, and structure the raw data. basically, regular expressions are used to process and validate strings.

### Text representation

Next, we want to convert The words into a numerical representation, one is “feature representation”. because it’s easier to work with numeric data. but how we do this, from simple binary numbers to high-dimensional vectors. for example there are models with 768-dimension embeddings, which covers the complexity of the Natural languages.

### Statistical techniques

[TF-IDF](https://himloul.github.io/posts/sentiment_analysis/#method-2-tf-idf) - which considers the frequency of each word in a document relative to its frequency in the entire dataset.

### Encoding

Encoding methods, such as one-hot encoding, label encoding, or ordinal encoding, transform categorical or textual data into a numerical representation. These methods are used in embedding sentences.

Is a vector representation of words in a “Corpora” or vocabulary, each word in the vocabulary is represented by a vector of size $n$.

Some encoding techniques are developed for data compression.

So this techniques needs a corpus (vocabulary of strings), and to build the vocabulary, we start splitting by frequency, then storing unique sequences of characters (it doesn’t need to be as the usual english dictionary).

For instance, GPT-3 uses [Byte Pair Encoding](https://en.wikipedia.org/wiki/Byte_pair_encoding) algorithm, with a vocabulary size of 50k.

### Word Embedding

On the other hand, embedding methods, such as Word2Vec, GloVe, or BERT, capture the semantic meaning and contextual relationships between words. Embeddings represent words as dense vectors in a continuous vector space, where similar words are closer together based on their semantic similarity.

$$ W(``\text{camel}\!") = (0.41,~ \text{-}0.24,~ 0.83,~ ...) $$

Typically, the function is a lookup table, parameterized by a matrix, $\theta$, with a row for each word: $W_\theta(w_n) = \theta_n$.

> Okay, for words it’s clear, but what about sentences, how they are represented in the high dimensional vector space.

**Word2Vec** - Building a complete Word2Vec model from scratch is beyond the scope of a simple example. However, I can provide a high-level overview of the process. It involves training a neural network, typically using the CBOW or Skip-gram architecture, on a large corpus to learn word embeddings.

**GloVe** -

**Fast2Text** -

> Note that Word embedding methods does not consider context, Language Models does.

So in the other hand, we can use Language models to generate embeddings.

[BERT](https://himloul.github.io/posts/sentiment_analysis/#method-3-bert) - a state-of-the-art transformer-based language model (encoder-only) that can understand the context and meaning of words, producing **Contextual embeddings**. which are used for classification tasks, such as sentiment classification, sentence similarity, etc.

### Language models

Yes, we can design a language model using shallow or deep learning models.

**N-gram Language models**: The first method we’ll use is the [Bag of Words](https://himloul.github.io/posts/sentiment_analysis/#method-1-bag-of-words) approach, which represents text as a set of words and counts their occurrence.

In an n-gram model, the prediction of a token xi only depends on the last $n−1$ characters $x_{i−(n−1):i−1}$ rather than the full history.

$$ p(x_i∣x_{1:i−1})=p(x_i∣x_{i−(n−1):i−1}) $$

These probabilities are computed based on the number of times various n-grams occur in a large corpus of text, and appropriately smoothed to avoid overfitting (e.g., Kneser-Ney smoothing).

**LSTM** - (Long Short Term Memory) which are Recurrent Neural Networks, allowed the conditional distribution of a token xi to depend on the entire context $x_{1:i−1}$ (effectively $n=∞$ ), but these were hard to train.

**Transformers** - are a more recent architecture (developed for machine translation in 2017) that again returned to having fixed context length $n$, but were much **easier to train** (and exploited the parallelism of GPUs). Also, $n$ could be made “large enough” for many applications (GPT-3 used $n = 2048$).

N-gram models are extremely computationally efficient and statistically inefficient.

N-gram models are useful for short context lengths in conjunction with another model (acoustic model for speech recognition or translation model for machine translation)

Neural language models in the other hand are statistically efficient but computationally inefficient.

## Probabilistic Models

Probabilistic models are the base of the Language models, and when talking about GPT, we are refering to Autoregressive models.

### Algorithms

But first, Let’s start by the most simple ones: N-gram language model.

Let’s dive into some key example techniques for these NLP tasks:

**Spell cheking** - The simplest method is the the Auto-correct Algorithm using the minimum edit distance and dynamic programming. The minimum edit distance calculates the minimum number of operations (insertion, deletion, substitution) required to transform one word into another.

**POS Tagging -** The Viterbi Algorithm is used for part-of-speech (POS) tagging, which assigns the most probable POS tags to words in a given sentence. It utilizes a probabilistic model, such as a Hidden Markov Model (HMM), to find the optimal tag sequence.

**Auto-complete -** An N-gram language model predicts the next word in a sentence based on the previous N-1 words. It utilizes the probability distribution of word sequences in a large corpus to suggest contextually relevant auto-complete options.

These examples provide a glimpse into the application of probabilistic models in NLP. With the help of equations and simplified Python code snippets, we can better understand and implement these techniques for various language-related tasks.

## Sequential models

Solving NLP tasks the old way, was firstly done using Sequential models, and used tools such as [GloVe](https://github.com/stanfordnlp/GloVe), [Word2Vec](https://code.google.com/archive/p/word2vec/).

Trained a Neural Network with GloVe, or Word2Vec.

We can use `NLTK`, which is a good framework dedicated to Natural Language processing.

We ran a lexicon-based sentiment analysis (eg. `NLTK` Vader Sentiment Analyzer) on the textual data. then report and discuss the results.

Does the lexicon sentiment score associate with the venue ratings provided by the users?

## Attention models

Attention models have emerged as highly capable models in the field of Natural Language Processing (NLP). These models, some comprising billions of parameters, have been trained on vast amounts of textual data.

At their core, language models define a probability distribution over sequences of tokens from a vocabulary set V. A language model p assigns a probability (a value between 0 and 1) to each sequence of tokens �1,…,��∈�_x_1,…,_xL_∈_V_

Two popular attention-based models are BERT and GPT.

## BERT

BERT (Bidirectional Encoder Representations from Transformers) is an attention-based model that revolutionized NLP tasks. Its architecture is based on transformers, which excel at capturing contextual relationships between words.

BERT’s architecture involves two key steps: pre-training and fine-tuning. In pre-training, BERT learns contextualized word representations by predicting missing words in a given sentence. Fine-tuning involves training BERT on specific downstream tasks, such as text classification or named entity recognition, to adapt it for specific applications.

Several distilled and fine-tuned models have been built upon the BERT architecture. For example, you can experiment with the open-source model called `All-miniLM-v6` from Microsoft, available at Hugging Face, a popular NLP model repository.

## GPT

GPT (Generative Pre-trained Transformer) is a powerful language model initially trained for text completion tasks. However, it has demonstrated capabilities beyond text completion, including reasoning and generating human-like responses.

OpenAI has released various versions of GPT, with the most capable ones being `gpt-3.5-turbo` and `gpt-4-8k`. These models incorporate state-of-the-art transformer-based architectures and have been trained on massive datasets to provide advanced language generation capabilities.

By leveraging attention mechanisms, both BERT and GPT have significantly advanced the field of NLP, enabling breakthroughs in tasks such as language understanding, text completion, and context-based reasoning.

## In-context learning

The power of LLM, tuning the prompt rather than tuning the parameters of the Language model, which is computationally expensive. Specifically, they are called Instruction based LLM.

The implementation is really straightforward as calling a function. with few shot learning or even zero shot learning, we can.

We can use GPT-3.5 model from OpenAI which offers a set of API endpoints for interacting with its LLM, but we can use other open-source models, and in the next few years, we can see a lot of models accessible.

## References

[1] - [Introduction | CS324 (stanford-cs324.github.io)](https://stanford-cs324.github.io/winter2022/lectures/introduction/)

[2] - [comparison - What is the difference between a language model and a word embedding? - Artificial Intelligence Stack Exchange](https://ai.stackexchange.com/questions/26739/what-is-the-difference-between-a-language-model-and-a-word-embedding)

[3] - [Deep Learning, NLP, and Representations - colah's blog](http://colah.github.io/posts/2014-07-NLP-RNNs-Representations/)