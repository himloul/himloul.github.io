---
title: "From Word Counts to World Models"
date: 2022-12-28T00:12:00Z
---


*[Updated on 2025-09-27]*

How did we get from models that could barely check spelling to models that can write poetry, debug code, and reason about the world? This journey wasn't a single breakthrough but a series of profound answers to fundamental questions about the nature of language and meaning.

We will try in this post to explore the evolution of NLP by asking the same questions that drove the research: How do we represent meaning? How does context change meaning? And do we really need to read one word at a time?

## Question 1: How Do We Teach a Machine What a Word Even Is?

Before a machine can understand a sentence, it needs a concept of a "word." But what is a word to an algorithm? A string of characters? A dictionary entry? This leads to the first challenge: representation.

### What if we just count them? The Bag-of-Words hypothesis.

The most straightforward idea is to treat a document as an unordered collection (a "bag") of its words. We can create a vocabulary of all unique words and represent a document with a vector indicating the count of each word.

This approach is simple and effective for tasks like topic classification. But it immediately raises a critical question:

> *Is every word equally important?*

The word "*the*" will appear far more often than the word "*entropy*" but "*entropy*" likely tells us much more about the document's topic. This led to **TF-IDF (Term Frequency-Inverse Document Frequency)**, an interesting heuristic that asks: "How common is this word in this document, relative to how common it is everywhere?" It down-weighs common words and boosts the importance of rare, descriptive terms.

Still, both of these methods treat words as isolated, atomic units. They have no concept that "dog" and "puppy" are related. This is a profound limitation.

## Question 2: How Can We Capture the *Meaning* and *Relationship* Between Words?

Counting words doesn't capture semantics. We need a representation where words with similar meanings have similar representations. This led to a pivotal insight, often summarized by the distributional hypothesis:

> *"You shall know a word by the company it keeps."*

What if a word's meaning is the aggregate of all the contexts it appears in? Models like **Word2Vec** and **GloVe** were designed around this principle. They process billions of words from a massive corpus and learn a vector for each word—an **embedding**. The training objective is designed such that words that appear in similar contexts are pushed closer together in this high-dimensional vector space.

This was a huge leap. These embeddings captured semantic analogies, famously allowing for vector arithmetic like:

```
vector("king") - vector("man") + vector("woman") ≈ vector("queen")
```

But this elegant solution introduced its own, more subtle problem. These embeddings are static. The word "bank" has a single vector, regardless of whether you're at a *river bank* or a *financial bank*. This raises the next critical question.

## Question 3: How Can a Model Understand that Context is Everything?

Meaning is not static; it's fluid and determined by the sequence of words around it. So, how can we build a model that reads a sentence sequentially, updating its understanding as it goes?

### What if a model had a "memory"? The Recurrent Neural Network (RNN).

The **Recurrent Neural Network (RNN)** was designed for this. It processes a sequence one token at a time. At each step, it takes in the current word and its *hidden state* from the previous step. This hidden state acts as a running summary, or memory, of everything seen so far.

$$
h_t = f(W_{hh} h_{t-1} + W_{xh} x_t)
$$

In theory, this memory allows the model's understanding of a word to be influenced by all the words that came before it. But this led to a practical problem:

> *How can this memory hold on to information from many steps ago?*

In practice, the influence of older information would fade as new information was added, a problem known as the **vanishing gradient**. The model might remember the last few words, but it would struggle to connect a pronoun at the end of a long paragraph to the subject at the beginning.

The solution was a more sophisticated memory cell. The **Long Short-Term Memory (LSTM)** network introduced a system of "gates" that allowed the model to learn what to remember, what to forget, and what to output. It was a groundbreaking improvement, but it still relied on a fundamental assumption: that language must be processed sequentially.

## Question 4: Do We Really Need to Read One Word at a Time?

Sequential processing in RNNs was both a strength and a bottleneck. It was slow to train and still struggled with extremely long-range dependencies. This prompted a radical question:

> *What if, instead of compressing all context into a single memory state, a model could look at the entire sentence at once and decide what's important?*

Think about how humans read. We don't just move forward; our eyes dart back and forth, instantly linking pronouns to nouns and understanding relationships across the sentence. The **attention mechanism** was designed to mimic this.

The core idea is to allow the model, when processing a single word, to dynamically calculate an "attention score" for every *other* word in the sequence. It then creates a contextualized representation of the word by taking a weighted average of all other words, where the weights are these attention scores.

This was the central insight of the paper **"Attention Is All You Need,"** which introduced the **Transformer** architecture. The Transformer did away with recurrence entirely. It was built on a mechanism called **self-attention**, which could weigh the relevance of all words in a sequence to all other words, all at once. This design was not only more effective at capturing complex relationships but was also massively parallelizable, unlocking the ability to train on datasets of unprecedented scale.

## Question 5: How Do We Build a Generalist Model that Understands Language?

The Transformer gave us an incredibly capable architecture. But training a giant model from scratch for every specific task (sentiment analysis, summarization, etc.) is prohibitively expensive. This led to the final paradigm shift:

> *Can we first teach a model to understand language in general, and then adapt that knowledge to specific tasks?*

This is the idea behind **pre-training**. We can use a massive, unlabeled dataset (like the entire internet) to teach a model the statistical patterns, grammar, and semantics of language.

Two dominant strategies emerged, each answering the pre-training question in a slightly different way:

1.  **BERT: What if a model learns by "filling in the blanks"?**
    BERT (Bidirectional Encoder Representations from Transformers) is pre-trained by masking out words in a sentence and forcing the model to predict them based on the context from *both sides* (left and right). This objective, called a Masked Language Model (MLM), forces the model to learn a deep, bidirectional understanding of how words fit together.

2.  **GPT: What if a model learns by predicting what comes next?**
    GPT (Generative Pre-trained Transformer) takes a simpler, autoregressive approach. Its sole objective is to predict the next word in a sequence given all the preceding words. By training on this single, fundamental task at a massive scale, GPT models become incredibly powerful generators of coherent and contextually relevant text. This approach also unlocked **in-context learning**, where the model can be guided to perform new tasks simply by providing examples in a prompt, without needing to update its parameters.

This pre-train and fine-tune (including prompt-tuning) paradigm is the foundation of modern NLP. Separating the general understanding of language from task-specific application has enabled the capabilities of today's language models.
