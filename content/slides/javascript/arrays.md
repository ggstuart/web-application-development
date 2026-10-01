---
title: Arrays
type: slide
classes: [one-three, p-then-examples, gap, arrays]
---

[Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) are ordered collections of data.

> Create them using square bracket notation, they can contain anything.

```js
const tech = ["HTML", "CSS"];
tech.length;        // 2
```

> They are indexed with integers (beginning with zero).

```js
tech[0];            // "HTML"
tech[1];            // "CSS"
```

> Or use the [at](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at) method which also allows negative indices, counting from the end at -1.

```js
tech.at(1)      // "CSS"
tech.at(-1)     // "CSS"
```

> They have built-in methods for basic mutations.

```js
tech.push("JS");    // add to the end - ["HTML", "CSS", "JS"]
tech.pop();         // remove from the end - ["HTML", "CSS"]
tech.unshift("JS")  // add to the start - ["JS", "HTML", "CSS"]
tech.shift()        // remove from the start - ["HTML", "CSS"]
```