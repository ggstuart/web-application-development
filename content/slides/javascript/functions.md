---
title: Functions
type: slide
classes: [one-two, gap, p-then-examples]
---

Functions can help to avoid repetition and make code more readable and more maintainable.

> the `function` keyword is followed by a comma-separated argument list in parentheses and a code block with an optional `return` statement.

```js
// The classic form is absolutely fine

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}
```

> A newer syntax (ECMAScript 2015) for more compact functions using [arrow] (=>) notation.

```js
// Arrow functions are more explicitly treated as normal data
// They are essentially identical, though have some restrictions 

const randomBetween = (min, max) => {
  return min + Math.random() * (max - min);
}
```

> Simple one-line arrow functions can be very compact.

```js
// the return statement can be implicit for a one-line function
const randomBetween = (min, max) => min + Math.random() * (max - min);

// Parentheses are not needed when there is exactly one argument 
const doubleIt = value => value * 2;
```

[arrow]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions