---
title: "From Word Counts to World Models"
date: 2022-12-28T00:12:00Z
---

*[Updated on 2025-09-27]*

## TL;DR

A short history of how NLP moved from simple word counts to models that build contextual "world models." We trace five questions that guided the field: what is a word, how do we represent meaning, how do we handle context, must we process sequentially, and how do we build generalist models.

## Introduction

How did we get from models that could barely check spelling to models that can write poetry, debug code, and reason about the world? There wasn't one single breakthrough but a sequence of conceptual and engineering shifts that answered a few core questions about language and meaning.

We'll explore the evolution of NLP by following those questions: *How do we represent meaning?* *How does context change meaning?* and *Do we need to read one word at a time?*

## Q1 - How do we teach a machine what a "word" even is?

Before a model can understand a sentence, it needs a concept of a "word." For an algorithm a word might be a string of characters, a token, or a dictionary entry — the choice matters because it determines how language gets represented.

> *What if we just count them? The bag-of-words hypothesis*

A straightforward idea is to treat a document as an unordered collection — a **bag** — of words. Build a vocabulary of unique tokens and represent a document as a vector of word counts.

This is simple and works surprisingly well for tasks like topic classification. But it raises an important question: *Is every word equally important?*

The word *the* appears far more often than *entropy*, yet *entropy* tells us more about a document's topic. That motivated **TF–IDF** (term frequency–inverse document frequency), a heuristic that downweights very common words and boosts rarer, more informative ones.

Still, both bag-of-words and TF–IDF treat words as atomic symbols with no notion of similarity — *dog* and *puppy* are unrelated in that representation. That limitation pushed researchers toward distributed representations.

## Q2 - How can we capture meaning and relationships between words?

Counting doesn't capture semantics. The distributional hypothesis — *you shall know a word by the company it keeps* — suggests a different path: represent words by the contexts they appear in.

**Word2Vec** and **GloVe** implement this idea. They scan massive corpora and learn a dense vector (an *embedding*) for each word. Training objectives encourage words that appear in similar contexts to have similar vectors.

This unlocked semantic structure: analogous relationships can be expressed with vector arithmetic:

```text
vector("king") - vector("man") + vector("woman") ≈ vector("queen")
```

But these embeddings are **static**: every sense of *bank* shares the same vector, whether it's a *river bank* or a *financial bank*. That pushed the field toward context-sensitive representations.

## Q3 - How can a model understand that context is everything?

Meaning depends on context. RNNs (recurrent neural networks) process tokens sequentially and maintain a hidden state — a running memory summarizing what the model has seen so far:

$$
h_t = f(W_{hh} h_{t-1} + W_{xh} x_t)
$$

In principle, RNNs let a word's representation depend on previous words. In practice, though, they struggled with long-range dependencies due to vanishing gradients.

**LSTMs (long short-term memory networks)** introduced gates that learn what to remember, forget, or output. That largely solved short-term memory problems and improved performance on many sequence tasks — but RNNs still process tokens one at a time, which creates both computational and modeling bottlenecks.

## Q4 - Do we really need to read one word at a time?

Sequential processing is natural, but it can be slow to train and hard to scale to long-range dependencies. What if a model could look at the whole sentence at once and decide what matters?

The **attention mechanism** answers this by letting a token attend to (i.e., compute a weighted combination of) other tokens in the sequence. The model computes attention scores between every pair of tokens and uses them to create contextualized token representations.

The paper *Attention Is All You Need* introduced the **Transformer**, an architecture built on **self-attention**. Transformers remove recurrence entirely, enabling massive parallelism and better capture of complex, long-range relationships.

## Q5 - How do we build a generalist model that understands language?

Transformers are a powerful architecture, but training separate models for every task is impractical. The solution is **pre-training**: teach a model general language knowledge on huge unlabeled corpora, then adapt it to downstream tasks.

Two dominant pre-training strategies emerged:

1. **BERT** (masked language modeling: What if a model learns by "filling in the blanks"?) — mask tokens and train the model to predict them using both left and right context. This yields strong bidirectional representations.

2. **GPT** (autoregressive language modeling: What if a model learns by predicting what comes next?) — predict the next token given previous tokens. This simple objective scales well and produces powerful generative models that exhibit *in-context learning* — they can perform new tasks when provided examples in the prompt.

Separating general language learning (pre-training) from task-specific adaptation (fine-tuning or prompting) is the foundation of modern NLP.

## Short conclusion

From counting words to learning distributed, contextual representations and then building massive, pre-trained transformers, NLP's progress has been a sequence of shifts in representation, architecture, and training paradigm. Each step answered a concrete question and opened new possibilities for what language models can do.
