---
title: "NLP from Sequential to Attention models"
author: "Hamza imloul"
date: 2021-07-28T00:12:00Z
# draft: true
ShowToc: true
tags: ["Machine learning", "Data science" , "NLP"]
---
## Introduction

Having spent approximately a year immersed in the field of Natural Language Processing (NLP), my journey has been both insightful and rewarding. It all began with my exploration of transformer-based models like BERT, just a couple of months prior to the release of ChatGPT. Since then, there has been a surge of interest in Generative AI among developers and businesses alike.

The evolution of NLP over the past decade has been remarkable, largely fueled by the vast amounts of data available on the internet. This article aims to showcase the benefits reaped from this data-driven growth.

The first NLP system, ELIZA: 

Generative AI encompasses a wide array of concepts. In this article, I aim to share my experiences and provide a conceptual approach to NLP projects. Where necessary, I will include relevant code snippets to illustrate key points.

NLP, from a conceptual perspective, plays a crucial role in Artificial Intelligence (AI) by enabling computers to comprehend and effectively utilize language. Notably, Deep Learning approaches have revolutionized NLP, leading to remarkable advancements in language-based tasks. One particularly exciting development is the emergence of Large Language Models (LLMs), which have captured the attention of numerous individuals.

In this article, we will take a "historical" journey through these novel models and approaches, recognizing their relative novelty, while delving deep into their intricacies. Our focus will be on understanding how these methods can aid us in various NLP tasks. Throughout the exploration, we will develop implementations using popular frameworks such as [NLTK](https://www.nltk.org/), [PyTorch](https://pytorch.org/), [TensorFlow](https://www.tensorflow.org/overview), or [Hugging Face](https://huggingface.co/models), and compare their respective outcomes.

By the end of this tutorial, you will gain valuable insights into the workings of NLP applications, including question-answering and sentiment analysis. You will have the knowledge to create language translation tools, text summarization systems, and even construct your own chatbot.

## Capabilities


## Data preparation

Most of the text is not clean, sometimes misspelling, or emojis for instance. 

This step is the most important, to every NLP task, and it's always a good practice to feed clean data to the neural network. 

To start, we’ll pre-process our textual data by removing punctuation, digits, stop words, and other irrelevant information.

Then, we’ll build a supervised learning model for text analysis and split our dataset into a train and test set.

- Removed punctuations and digits characters, lemmatization, Stop words, Stemming, and synonyms.
- Build a supervised learning model for text analysis.
- Split the dataset into a train and test-set.
- Structured the data set of textual strings.
### Text normalization

Text normalization plays a crucial role in Natural Language Processing (NLP) as it transforms textual data into a numerical format that can be effectively processed by machine learning algorithms. In this section, we will explore various techniques for text representation, including statistical methods, encoding, and embedding.

**Tokenization** - Normalizing text means converting it to a more convenient, standard form. For example, most of what we are going to do with language relies on first separating out or tokenizing words from running **tokenization** text, the task of tokenization.
#### Statistical techniques
Next, we want to convert The words into a numerical representation, one is "feature representation".  

**N-gram Language models**: The first method we’ll use is the [Bag of Words](https://himloul.github.io/posts/sentiment_analysis/#method-1-bag-of-words) approach, which represents text as a set of words and counts their occurrence.  
The second method we’ll use is [TF-IDF](https://himloul.github.io/posts/sentiment_analysis/#method-2-tf-idf), which considers the frequency of each word in a document relative to its frequency in the entire dataset. 
#### Encoding
Encoding methods, such as one-hot encoding, label encoding, or ordinal encoding, transform categorical or textual data into a numerical representation. These methods assign numerical values or codes to words or categories.
#### Embedding
On the other hand, embedding methods, such as Word2Vec, GloVe, or BERT, capture the semantic meaning and contextual relationships between words. Embeddings represent words as dense vectors in a continuous vector space, where similar words are closer together based on their semantic similarity.

[BERT](https://himloul.github.io/posts/sentiment_analysis/#method-3-bert) a state-of-the-art transformer-based language model that can understand the context and meaning of words.
## Probabilistic Models

In this section, we will explore the application of probabilistic models in Natural Language Processing (NLP) with simple equations and Python code examples. Let's dive into key techniques:

1. **Auto-correct Algorithm**:

   We can implement a simple auto-correct algorithm using the minimum edit distance and dynamic programming. The minimum edit distance calculates the minimum number of operations (insertion, deletion, substitution) required to transform one word into another.
   
1. **Viterbi Algorithm for POS Tagging**:

   The Viterbi Algorithm is used for part-of-speech (POS) tagging, which assigns the most probable POS tags to words in a given sentence. It utilizes a probabilistic model, such as a Hidden Markov Model (HMM), to find the optimal tag sequence.

3. **N-gram Language Model for Auto-complete**:

   An N-gram language model predicts the next word in a sentence based on the previous N-1 words. It utilizes the probability distribution of word sequences in a large corpus to suggest contextually relevant auto-complete options.

4. **Custom Word2Vec Model**:

   Building a complete Word2Vec model from scratch is beyond the scope of a simple example. However, I can provide a high-level overview of the process. It involves training a neural network, typically using the CBOW or Skip-gram architecture, on a large corpus to learn word embeddings.

These examples provide a glimpse into the application of probabilistic models in NLP. With the help of equations and simplified Python code snippets, we can better understand and implement these techniques for various language-related tasks.
## Sequential models

Solving NLP tasks the old way, was firstly done using Sequential models, and used tools such as [GloVe](https://github.com/stanfordnlp/GloVe), [Word2Vec](https://code.google.com/archive/p/word2vec/).

Trained a Neural Network with GloVe, or Word2Vec.

We can use `NLTK`, which is a good framework dedicated to Natural Language processing.

We ran a lexicon-based sentiment analysis (eg. `NLTK` Vader Sentiment Analyzer) on the textual data. then report and discuss the results. 

Does the lexicon sentiment score associate with the venue ratings provided by the users?

## Attention models

Attention models have emerged as highly capable models in the field of Natural Language Processing (NLP). These models, some comprising billions of parameters, have been trained on vast amounts of textual data.

At their core, language models define a probability distribution over sequences of tokens from a vocabulary set V. A language model p assigns a probability (a value between 0 and 1) to each sequence of tokens $x_1,…,x_L∈V$

Two popular attention-based models are BERT and GPT.

### BERT: Bidirectional Encoder Representations from Transformers

BERT (Bidirectional Encoder Representations from Transformers) is an attention-based model that revolutionized NLP tasks. Its architecture is based on transformers, which excel at capturing contextual relationships between words.

BERT's architecture involves two key steps: pre-training and fine-tuning. In pre-training, BERT learns contextualized word representations by predicting missing words in a given sentence. Fine-tuning involves training BERT on specific downstream tasks, such as text classification or named entity recognition, to adapt it for specific applications.

Several distilled and fine-tuned models have been built upon the BERT architecture. For example, you can experiment with the open-source model called `All-miniLM-v6` from Microsoft, available at Hugging Face, a popular NLP model repository.

### GPT: Generative Pre-trained Transformer

GPT (Generative Pre-trained Transformer) is a powerful language model initially trained for text completion tasks. However, it has demonstrated capabilities beyond text completion, including reasoning and generating human-like responses.

OpenAI has released various versions of GPT, with the most capable ones being `gpt-3.5-turbo` and `gpt-4-8k`. These models incorporate state-of-the-art transformer-based architectures and have been trained on massive datasets to provide advanced language generation capabilities.

By leveraging attention mechanisms, both BERT and GPT have significantly advanced the field of NLP, enabling breakthroughs in tasks such as language understanding, text completion, and context-based reasoning.

### Prompt design with LLM

The power of LLM, tuning the prompt rather than tuning the parameters of the Language model, which is computationally expensive. Specifically, they are called Instruction based LLM.

The implementation is really straightforward as calling a function. with few shot learning or even zero shot learning, we can.

We can use GPT-3.5 model from OpenAI which offers a set of API endpoints for interacting with its LLM, but we can use other open-source models, and in the next few years, we can see a lot of models accessible.

## References

[Introduction | CS324 (stanford-cs324.github.io)](https://stanford-cs324.github.io/winter2022/lectures/introduction/)