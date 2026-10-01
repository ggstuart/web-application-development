---
title: Boolean data
type: slide
classes: []
---


> Relational, equality and logical operators return [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) values.

```js
let [a, b] = [1, "1"];

a < b;   // false
a > b;   // false
a == b;  // true
a != b;  // false
a === b; // false
a !== b; // true
!a       // false
!b       // false
```

> Create Boolean values with literals, the Boolean function or double NOT operator.

```js
const isGood = true;
const isGood = false;
const isGood = Boolean(expression);
const isGood2 = !!expression;
```

> Boolean values are fundamental to `if` and `while` statements and e.g. the `Array.filter()` function, 