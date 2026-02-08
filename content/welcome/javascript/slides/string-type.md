---
title: Strings
type: slide
classes: [two-three, burger, gap]
---

[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) *literals* are specified by single or double quotes.

> Basic string manipulation can be achieved with *concatenation*, though it is annoying and difficult to read.

```js
const code = "CTEC2712";
const name = "Web Application Development";
```

> String *interpolation* with template literals uses backticks and expressions can be included with a dollar sign and curly braces. 

```js
const concatenation = "Welcome to " + code + ": " + name;
```

> String interpolation is intuitive and elegant as well as faster and better, so use it..

```js
const interpolation = `Welcome to ${code}: ${name}`;
```

Strings have loads of useful methods like 
[`includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes),
[`replace`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace),
[`trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim) and
[`split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split).