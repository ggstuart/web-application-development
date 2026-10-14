---
title: Boolean data
type: slide
classes: [gap, burger]
params:
    layout:
        cols: 1fr 2fr
        rows: auto auto auto auto auto
---

Everything can be coerced to a Boolean, only

> Create Boolean values with literals, the Boolean function or double NOT operator.

```js
const isGood = true;
const isGood = false;
const isGood = Boolean(expression);
const isGood2 = !!expression;
```

> Relational, equality and logical operators return [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) values.


```js
let [a, b] = [1, 2];

a < b;   // true
a > b;   // false
a == b;  // false
a != b;  // true
!a       // false
!b       // false
```

> Comparing numbers with strings, causes an implicit [coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion).
The triple equals operator compares [without type conversion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness). 

```js
let [a, b] = [1, "1"];

a == b;  // true
a != b;  // false
a === b; // false
a !== b; // true
```

Boolean values are fundamental to `if` and `while` statements and e.g. the `Array.filter()` function.