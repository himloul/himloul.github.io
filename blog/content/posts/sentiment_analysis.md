---
title: "Sentiment Analysis with NLTK"
author: "Hamza imloul"
date: 2021-07-28T00:12:00Z
# draft: true
ShowToc: true
tags: ["Machine learning", "Data science" , "NLP"]
---

## Methodology

We ran a lexicon-based sentiment analysis (eg. NLTK Vader Sentiment Analyser) on the textual data. then report and discuss the results. Does the lexicon sentiment score associate with the venue ratings provided by the users?

## Pre-processing

* Pre-process the text review data and create a new column in the data frame which will hold the cleaned review data.
* Removed ponctuations and digits characters, lemmatization, Stopwords, Stemming, and synonyms.
* Built a supervised learning model for text analysis.
* Splited the dataset into a train and test-set.
* Structured the data set of textual strings.

## Modelling

Method 1 : Bag of Words.
Method 2 : TF-IDF (term frequency–inverse document frequency).

## Result

the result is visualized in the heatmap below:

<p align="center">
<img src="/images/nlp_score.png" width="50%"/>
</p>  