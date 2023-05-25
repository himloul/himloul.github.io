---
title: "Make a game for GBA using C++"
author: "Hamza imloul"
date: 2023-01-14T20:45:56Z
ShowToc: true
# katex: true
math: true
comments: trues
tags: ["Game developement", "Portfolio", "GBA"]
---

<span style="color: blue;">[🚧 Draft]</span>

I have an appreciation for retro games, particularly **Nintendo** games. The gameplay of The Legend of Zelda and the pixel art and environment of Wario Land 3 and 4 always leave me feeling hooked. Whenever I spent time playing pixel art games, I get that same sensation of being transported back to the golden age of handheld game consoles.

In this demo, we will take on the challenge of building a game for Game Boy Advance. It promises to be a fun project, and we will focus on using frameworks rather than vanilla C++. [Butano](https://github.com/GValiente/butano) seems like a good option since it is tailored for GBA game development using C++.

Developing software with C++ can be a challenging task, especially for those without prior experience in software development. Although I am familiar with Python, we are limited to using low-end programming languages such as C++ or Nim for GBA game development. Luckily, we have found frameworks like Butano that can make the process easier.
## Design

To get started, we need to prepare a **Game Design Document (GDD)**. This document outlines the game's concept, mechanics, and features.

In addition to creating the GDD, we will also learn the basics of game design and explore the features of Butano. By doing so, we can better understand how Butano can simplify the development and compilation of games for the GBA.
## Code

We will try to compile `Butano`, which is the easiest compiler to get started with.

You can refer also to this Video [Compile C++ for GBA in under an hour! (using Butano + devkitPro + WSL2) - YouTube](https://www.youtube.com/watch?v=EMeie_gSgDU&t=389s&ab_channel=CinemintTechTips)

First install WSL to use Linux commands, otherwise, you can use VS Code IDE terminal, which has `Bach` terminal.

Go to the chosen directory, where you would like to store the repo content, then type in the CLI:

```bash
git clone https://github.com/GValiente/butano
```

Second, you will want to install a development library call DevKitPro.

### Install `devkitPro`

## Release