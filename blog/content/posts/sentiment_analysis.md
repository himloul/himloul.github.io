---
title: "From TF-IDF to Transformers - Sentiment Analysis as a use case"
author: "Hamza imloul"
date: 2021-07-28T00:12:00Z
# draft: true
ShowToc: true
tags: ["Machine learning", "Data science" , "NLP"]
---

Sentiment analysis is an exciting field of natural language processing that allows us to understand people's attitudes and opinions towards different subjects. In this blog, we'll explore three popular methods for sentiment analysis: Bag of Words, TF-IDF, and BERT. We'll demonstrate how to use these methods in Python and compare their results.

## Methodology

We ran a lexicon-based sentiment analysis (eg. `NLTK` Vader Sentiment Analyser) on the textual data. then report and discuss the results. Does the lexicon sentiment score associate with the venue ratings provided by the users?

## Pre-processing

To start, we'll pre-process our textual data by removing punctuation, digits, stop words, and other irrelevant information. Then, we'll build a supervised learning model for text analysis and split our dataset into a train and test set.

* Pre-process the text review data and create a new column in the data frame which will hold the cleaned review data.
* Removed ponctuations and digits characters, lemmatization, Stopwords, Stemming, and synonyms.
* Built a supervised learning model for text analysis.
* Splited the dataset into a train and test-set.
* Structured the data set of textual strings.

## Modelling

Next, we'll apply each method for sentiment analysis. The first method we'll use is the [Bag of Words](#method-1-bag-of-words) approach, which represents text as a set of words and counts their occurrence. The second method we'll use is [TF-IDF](#method-2-tf-idf), which considers the frequency of each word in a document relative to its frequency in the entire dataset. Finally, we'll use [BERT](#method-3-bert) a state-of-the-art transformer-based language model that can understand the context and meaning of words.

### Method 1: Bag of words

### Method 2: TF-IDF

### Method 3: BERT

## Result

the result is visualized in the heatmap below:

<p align="center">
<img src="/images/nlp_score.png" width="50%"/>
</p>  