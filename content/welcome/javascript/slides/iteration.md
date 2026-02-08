---
title: Looping over iterables
type: slide
classes: []
---

> Built-in *iterables* such as [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) follow the [iterable protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#built-in_iterables).
This allows them to define a sequence which can be iterated using a [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop.


```js
                                              // "Gimme a 'C'!
const code = "CTEC3705";                      // "Gimme a 'T'!
                                              // "Gimme a 'E'!
for (const character of code) {               // "Gimme a 'C'!
    console.log(`Gimme a '${character}'!`);   // "Gimme a '3'!
}                                             // "Gimme a '7'!
                                              // "Gimme a '0'!
                                              // "Gimme a '5'!
```

> Example with an Array

```js
const technologies = ["HTML", "CSS", "JS"];

for (const technology of technologies) {    // "learn HTML!"
    console.log(`learn ${technology}!`);    // "learn CSS!"
}                                           // "learn JS!"
```

> This is a great way to iterate over things like elements extracted from the DOM.