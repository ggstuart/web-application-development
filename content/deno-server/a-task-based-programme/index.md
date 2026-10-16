---
type: exercise
title: A task-based programme
weight: 2
author: Dr Graeme Stuart
draft: false
---

> **TODO: This exercise is a stub.**
> The full exercise will be written later.

In this exercise we will build a more substantial programme, run by a few new tasks.
The code will live in its own **lib** folder, completely separate from the server we will build in later exercises.

<!--more-->

## What this exercise will cover

- Writing several modules in a **lib** folder and importing them with named exports
- Adding a few new tasks to **deno.json**, each pointing to a module in the **tasks** folder
- Keeping the **lib** code independent so that it does not interfere with our server in any way

The project will look something like this.

```plaintext{linenos=false}
deno.json
tasks/
    hello.js
    ...
lib/
    ...
```
