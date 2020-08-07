---
title: 'Marvel Characters PWA'
date: '2020-07-30'
tags: ['PWA', 'React', 'JavaScript']
excerpt: 'A progressevie web app I am making where useres can search their characters from their favorite Marvel comics.'
links: [
    {
        label: 'github',
        icon: 'fab fa-github',
        path: 'https://github.com/ButlerFuqua/marvel_characters'
    }
]
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.