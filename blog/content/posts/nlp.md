---
title: "NLP from Sequential to Attention models"
author: "Hamza imloul"
date: 2021-07-28T00:12:00Z
# draft: true
ShowToc: true
tags: ["Machine learning", "Data science" , "NLP"]
---

## Introduction

Natural Language Processing (NLP) is a vital part of Artificial Intelligence (AI) that helps computers understand and use language effectively. Recently, there have been exciting advancements in NLP using Deep Learning approaches, which has led to impressive performance on language-based tasks. One of the most exciting developments in this field is the creation of Large Language Models (LLMs), which have caught the attention of many people.

In this article, we will explore these models and approaches in-depth, focusing on how they can help us with NLP tasks. We’ll demonstrate how to develop these methods in Python and frameworks like [NLTK](https://www.nltk.org/), [PyTorch](https://pytorch.org/), [TensorFlow](https://www.tensorflow.org/overview) or [Hugging Face](https://huggingface.co/models). and compare their results.
## Sequential models

Solving NLP tasks the old way, was firstly done using Sequential models, and used tools such as [GloVe](https://github.com/stanfordnlp/GloVe), [Word2Vec](https://code.google.com/archive/p/word2vec/).

Trained a Neural Network with GloVe, or Word2Vec.

NLP has evolved a lot during the last decade, and this is due to the increasing amount of data from internet, and the benefit from it.

We can use NLTK, which is a good framework dedicated to Natural Language processing.

We ran a lexicon-based sentiment analysis (eg. `NLTK` Vader Sentiment Analyzer) on the textual data. then report and discuss the results. Does the lexicon sentiment score associate with the venue ratings provided by the users?

## Use case: Sentiment analysis

Sentiment analysis is an exciting field of natural language processing that allows us to understand people’s attitudes and opinions towards different subjects. 

In this section, we selected the Sentiment analysis task, which is easy to digest by novice learners, but the approach can be implemented to different NLP tasks, such as Sentence similarity and Summarization.

Steps

-   Preparing our dataset. we can select this one
-   Pre-processing

### Pre-processing

To start, we’ll pre-process our textual data by removing punctuation, digits, stop words, and other irrelevant information. Then, we’ll build a supervised learning model for text analysis and split our dataset into a train and test set.

-   Pre-process the text review data and create a new column in the data frame which will hold the cleaned review data.
-   Removed punctuations and digits characters, lemmatization, Stop words, Stemming, and synonyms.
-   Built a supervised learning model for text analysis.
-   Split the dataset into a train and test-set.
-   Structured the data set of textual strings.

### Modelling

Next, we’ll apply each method for sentiment analysis. The first method we’ll use is the [Bag of Words](https://himloul.github.io/posts/sentiment_analysis/#method-1-bag-of-words) approach, which represents text as a set of words and counts their occurrence. The second method we’ll use is [TF-IDF](https://himloul.github.io/posts/sentiment_analysis/#method-2-tf-idf), which considers the frequency of each word in a document relative to its frequency in the entire dataset. Finally, we’ll use [BERT](https://himloul.github.io/posts/sentiment_analysis/#method-3-bert) a state-of-the-art transformer-based language model that can understand the context and meaning of words.

## Probabilistic models

1.  Create a simple auto-correct algorithm using minimum edit distance and dynamic programming,
2.  Apply the Viterbi Algorithm for part-of-speech (POS) tagging, which is vital for computational linguistics,
3.  Write a better auto-complete algorithm using an N-gram language model, and
4.  Write your own Word2Vec model that uses a neural network to compute word embeddings using a continuous bag-of-words model.

By the end of this Specialization, you will have designed NLP applications that perform question-answering and sentiment analysis, created tools to translate languages and summarize text, and even built a chatbot!

This Specialization is designed and taught by two experts in NLP, machine learning, and deep learning. Younes Bensouda Mourri is an Instructor of AI at Stanford University who also helped build the Deep Learning Specialization. Łukasz Kaiser is a Staff Research Scientist at Google Brain and the co-author of Tensorflow, the Tensor2Tensor and Trax libraries, and the Transformer paper.

### N-grams

Which is also called the Bag of words

### TF-IDF

Explain the TF-IDF method.

## Attention models

The basic definition of Language models are a probability distribution over sequences of tokens. based on a vocabulary V of a set of tokens. A language model p assigns each sequence of tokens $x1,…,xL∈V$ a probability (a number between 0 and 1).

BERT:

Explain the BERT architecture, and that there are some distilled and fine-tuned models built upon of the BERT architecture, such as `All-miniLM` from Microsoft, which is open-source and publicly available at Hugging Face.

GPT:

This Language model was primarily pretrained for the text completion task.

### Prompt design with LLM

This is the new approach, and is really simple as calling a function. with few shot learning or even zero shot learning, we can.

We can use GPT-3.5 model from OpenAI which offers a set of API endpoints for interacting with its LLM, but we can use other open-source models, and in the next few years, we can see a lot of models accessible.

## References

[Introduction | CS324 (stanford-cs324.github.io)](https://stanford-cs324.github.io/winter2022/lectures/introduction/)