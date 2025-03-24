---
title: "NLP from Sequential to Attention models"
date: 2022-12-28T00:12:00Z
---
## Introduction

Large Language models demonstrated to be a standalone system, performing multiple text-based tasks like question-answering, text summarization, and chatbots, which is by the way a cool concept and making them statistically efficient, and building software on top of them is a lot easier now.

Let's review the evolution of NLP, their applications. The article is an introdcution, and not requiring advanced knowledge since we are covering the high-level information.

## Capabilities

The primary objective of Natural Language Processing (NLP) is to **bridge the gap between human language and machines**. NLP techniques allow computers to understand and process information conveyed through text, enabling a wide range of applications. Here's a glimpse into some of the remarkable tasks NLP can perform:

* **Text generation:**  Create human-quality text formats,  like summaries of factual topics,  different creative text formats of stories or poems, or even realistic dialogue for chatbots. 

* **Part-of-Speech tagging:** Identify the grammatical function of each word in a sentence (noun, verb, adjective, etc.) This is foundational for many other NLP tasks.

* **Sentence similarity:**  Determine how similar two sentences are in meaning, even if they use different phrasing. This is useful for tasks like plagiarism detection or finding duplicate information.

* **Sentiment classification:** Analyze the emotional tone of a piece of text and categorize it as positive, negative, or neutral. This is  used in social media monitoring,  customer reviews analysis,  and more.

* **Intent classification:** Identify the underlying purpose or goal expressed in a text.  For instance, in a customer service chat, it can reveal if a customer is requesting a refund or reporting a technical issue.

* **Entity extraction:** Recognize and extract specific pieces of information from text,  like names, locations, dates, or organizations. This can be  used to populate databases or create summaries of factual topics. 


## Data preparation

Understanding how language models work begins with the **training data**. Unlike traditional machine learning methods that use separate training and testing sets, language models rely solely on raw text data for training. This is where data preparation becomes crucial, and the specific steps involved depend on the desired NLP task. 

**For general large language models, training data should encompass a wide variety of domains and languages.** This diversity helps the model develop a broad understanding of language. Data can be collected from various web sources, but important questions arise:

- **Do we need to preprocess, clean, and label the raw text before training the language model or embedding model?** (Yes, data preprocessing is essential for effective training.)
- **Are there tasks for which this dataset should not be used?** (The suitability of the data depends on the specific NLP task.) 
- **Is there a data governance strategy to maintain data quality and security?** (A robust data governance strategy is crucial to ensure the integrity and security of the training data.)

## Text Normalization

**Text normalization**, also known as **text representation**, is a fundamental step in NLP. It involves transforming textual data into a format that machine learning algorithms can understand and process effectively. We can think of it as data preprocessing specifically for language models. 

### Data Cleaning 

Most raw text data isn't clean. It may contain misspellings, emojis, or other irrelevant information. Cleaning this data is crucial for most NLP tasks, as it ensures the neural network receives high-quality input. Common steps include:

- **Removing punctuation, digits, and stop words:** Punctuation and digits often don't hold significant meaning, while stop words like "the" and "a" appear frequently but convey little information.
- **Splitting the data:** The cleaned data is then split into training and testing sets for model development and evaluation.

### Tokenization

**Tokenization** is the process of splitting text into smaller units, typically words or sentences. This is a fundamental step for many NLP tasks because it allows us to analyze the individual components of the text. However, it's important to perform data cleaning before tokenization to avoid introducing errors.

**Lemmatization and Stemming**

**Lemmatization** and **stemming** are techniques that reduce words to their base form. Lemmatization considers the grammatical context of the word to choose the correct base form (e.g., "running" becomes "run"). Stemming, on the other hand, uses a simpler approach to remove suffixes (e.g., "running" becomes "runn").

### Other Techniques

- **Sentence segmentation:** Divides text into individual sentences for separate analysis.
- **Spelling correction:** Identifies and corrects spelling errors using techniques like the Edit distance algorithm. This can also be helpful for string similarity comparisons.
- **Regular expressions:** Powerful tools for searching, extracting, and manipulating text based on specific patterns. 

By combining these techniques, we can effectively normalize text data and prepare it for various NLP tasks. 

### Text representation

Next, we want to convert The words into a numerical representation, one is “feature representation”. because it’s easier to work with numeric data. but how we do this, from simple binary numbers to high-dimensional vectors. for example there are models with 768-dimension embeddings, which covers the complexity of the Natural languages.

### Statistical techniques

[TF-IDF](https://himloul.github.io/posts/sentiment_analysis/#method-2-tf-idf) - which considers the frequency of each word in a document relative to its frequency in the entire dataset.

Here's the corrected and improved section on Encoding:

### Encoding Text for Machines

Encoding techniques are fundamental methods for converting text into a numerical format that machines can understand and process. Some common encoding approaches include:

- **One-hot encoding:** Assigns a unique binary vector to each word in the vocabulary. Each element in the vector is 0 except for the position corresponding to the word, which is set to 1.
- **Label encoding:** Represents each word with a unique integer based on its position in a predefined vocabulary list.
- **Ordinal encoding:** Similar to label encoding, but assigns integers based on the order or rank of the word in the vocabulary (e.g., "first word" gets 1, "second word" gets 2).

These encoding methods are often used as a first step in tasks like embedding sentences, where each sentence is represented by a matrix based on the encoded words it contains.

**Word Embeddings**:  Encoding goes beyond just assigning a number to a word. Ideally, we want the numerical representation to capture the semantic meaning and relationships between words. This is achieved through word embeddings, where each word is represented by a vector of real numbers in a high-dimensional space. Similar words will have vectors closer together in this space.

**Vocabulary Building:**  Encoding techniques typically require a predefined vocabulary (corpus) of strings. This vocabulary can be built by splitting text data and storing unique sequences of characters, not limited to standard dictionary words. The size of the vocabulary can significantly impact the effectiveness of the encoding. 

For instance, GPT-3 leverages the  [Byte Pair Encoding](https://en.wikipedia.org/wiki/Byte_pair_encoding) (BPE) algorithm to build its vocabulary. BPE starts with individual characters and iteratively merges the most frequent character pairs to create new vocabulary entries. This allows for efficient encoding while adapting to the specific data it's trained on. 

### Word Embedding

On the other hand, embedding methods, such as **Word2Vec**, **GloVe**, or **BERT**, capture the semantic meaning and contextual relationships between words. Embeddings represent words as dense vectors in a continuous vector space, where similar words are closer together based on their semantic similarity.

$$
W(``\text{camel}\!") = (0.41,~ \text{-}0.24,~ 0.83,~ ...)
$$

Typically, the function is a lookup table, parameterized by a matrix, $\theta$, with a row for each word: $W_\theta(w_n) = \theta_n$.

> Okay, for words it’s clear, but what about sentences, how they are represented in the high dimensional vector space.

**Word2Vec**: Building a complete Word2Vec model from scratch is beyond the scope of a simple example. However, I can provide a high-level overview of the process. It involves training a neural network, typically using the CBOW or Skip-gram architecture, on a large corpus to learn word embeddings.

**GloVe**

**Fast2Text**

> Note that Word embedding methods does not consider context, Language Models does.

So in the other hand, we can use Language models to generate embeddings.

[BERT](https://himloul.github.io/posts/sentiment_analysis/#method-3-bert) - a state-of-the-art transformer-based language model (encoder-only) that can understand the context and meaning of words, producing **Contextual embeddings**. which are used for classification tasks, such as sentiment classification, sentence similarity, etc.

### Language models

The general idea, is that language models are the ones powering LLM serices such as ChatGPT, However we can design a language model using shallow or deep learning models.

**N-gram Language models**: The first method we can use is the [Bag of Words](https://himloul.github.io/posts/sentiment_analysis/#method-1-bag-of-words) approach, which is a statistical method to represents text as a set of words and counts their occurrence.

In an n-gram model, the prediction of a token xi only depends on the last $n−1$ characters $x_{i−(n−1):i−1}$ rather than the full history.

$$
p(x_i∣x_{1:i−1})=p(x_i∣x_{i−(n−1):i−1})
$$

These probabilities are computed based on the number of times various n-grams occur in a large corpus of text, and appropriately smoothed to avoid overfitting (e.g., Kneser-Ney smoothing).

N-gram models are useful for short context lengths in conjunction with another model (acoustic model for speech recognition or translation model for machine translation)

Some downsides of N-gram models, they are extremely computationally efficient and statistically inefficient. Neural language models in the other hand are statistically efficient but computationally inefficient.

**LSTM** - (Long Short Term Memory) which are Recurrent Neural Networks, allowed the conditional distribution of a token xi to depend on the entire context $x_{1:i−1}$ (effectively $n=\infty$), but these were hard to train, and requiring a lot of Memory availability.

**Transformers** - are a more recent architecture (first developed for machine translation in 2017) that again returned to having fixed context length $n$, but were much **easier to train** (and exploited the parallelism of GPUs). Also, $n$ could be made “large enough” for many applications (GPT-3 used $n = 2048$).

## Probabilistic Models

Probabilistic models are the base of the Language models, and when talking about GPT, we are refering to Autoregressive models.

### Algorithms

But first, Let’s start by the most simple ones: N-gram language model.

Let’s dive into some key example techniques for these NLP tasks:

**Spell cheking**: The simplest method is the the Auto-correct Algorithm using the minimum edit distance and dynamic programming. The minimum edit distance calculates the minimum number of operations (insertion, deletion, substitution) required to transform one word into another.

**POS Tagging**: The Viterbi Algorithm is used for part-of-speech (POS) tagging, which assigns the most probable POS tags to words in a given sentence. It utilizes a probabilistic model, such as a Hidden Markov Model (HMM), to find the optimal tag sequence.

**Auto-complete**: An N-gram language model predicts the next word in a sentence based on the previous N-1 words. It utilizes the probability distribution of word sequences in a large corpus to suggest contextually relevant auto-complete options.

These examples provide a glimpse into the application of probabilistic models in NLP. With the help of equations and simplified Python code snippets, we can better understand and implement these techniques for various language-related tasks.
Here's the corrected and improved section on Sequential Models, incorporating insights from an NLP expert:

## Sequential Models: A Stepping Stone in NLP

Early NLP tasks often relied on **sequential models**, which process text data sequentially, one word at a time. These models leverage pre-trained word embeddings, like those generated by popular tools such as [GloVe](https://github.com/stanfordnlp/GloVe) and [Word2Vec](https://code.google.com/archive/p/word2vec). These embeddings capture semantic relationships between words, providing a richer representation than simple one-hot encoding.

One common approach with sequential models involves training a neural network (e.g., Recurrent Neural Networks - RNNs) on these pre-trained word embeddings.  

Libraries like `NLTK` offer tools for working with NLP tasks, including pre-trained embeddings and sentiment analysis models like VADER.  Using VADER, you can perform lexicon-based sentiment analysis on your textual data. This involves checking if words in your text match pre-defined sentiment lexicons (positive, negative, neutral) and assigning a sentiment score based on those matches.

The key question then becomes:  

> *Does the sentiment score derived from the lexicon-based approach correlate with the actual venue ratings provided by users?*

## Attention models

Attention models have emerged as highly capable models in the field of Natural Language Processing (NLP). These models, some comprising billions of parameters, have been trained on vast amounts of textual data.

At their core, language models define a probability distribution over sequences of tokens from a vocabulary set V. A language model p assigns a probability (a value between 0 and 1) to each sequence of tokens $x_1,x_L \in V$

Two popular attention-based models are BERT and GPT.

## BERT

**BERT (Bidirectional Encoder Representations from Transformers)** is a deep learning NLP model that leverages transformers architecture, a which adept at capturing the relationships between words within a sentence. This contextual understanding is key to unlocking the semantic meaning of language.

BERT's effectiveness lies in its two-step approach:

1. **Pre-training:** BERT was trained on massive amounts of text data, learning to predict missing words and capture the context in which words appear.

2. **Fine-tuning:** Once pre-trained, BERT can be adapted for specific tasks. By fine-tuning on a labeled dataset for tasks like text classification or named entity recognition, BERT becomes a specialist in that domain. For instance, you can explore the open-source model [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2), available through Hugging Face, a popular repository for exploring NLP and vision models as well.

## GPT

**Generative Pre-trained Transformer (GPT)** is a powerful language model that initially gained recognition for its text completion abilities. However, its capabilities extend far beyond that, including tasks like reasoning and generating human-like responses –  valuable for building chatbots and creating structured outputs.

These models leverage state-of-the-art transformer-based architectures and are trained on massive datasets, enabling them to generate sophisticated text formats.

Similar to BERT, GPT utilizes attention mechanisms, a significant advancement in NLP. This architecture has led to breakthroughs in various tasks, including language comprehension, text completion, and context-based reasoning.

A significant advantage of GPT-based models lies in their ability to perform in-context learning. This approach allows you to adapt the model's behavior for a specific task without directly modifying its internal parameters.  Traditionally, fine-tuning a large language model involves significant computational resources. In-context learning, however, achieves similar results by carefully crafting prompts that guide the model towards the desired outcome.  These prompts can include examples, instructions, or desired outputs, effectively "teaching" the model how to perform the task at hand.

While powerful models like GPT-3.5 from OpenAI offer APIs for in-context learning, there's a growing ecosystem of open-source alternatives.  As this field advances, we can expect even more accessible models in the coming years, making in-context learning a valuable tool for a wider range of developers and applications.