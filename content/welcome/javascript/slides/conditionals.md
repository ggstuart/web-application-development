---
title: Conditionals
type: slide
classes: [even, burger, gap, conditionals]
---

Use [`if...else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) to execute a block conditionally.

> Whatever you pass into the `if` clause will be converted to boolean.
If its not *truthy*, then the block will be skipped.

> The `else` clause is optional.
> Further `else if()` clauses can be added before the final `else`.

```js
let status;

if(length == 10) {
    status = "full";
}
```

```js
let status;

if(length == 10) {
    status = "full";
} else {
    status = "OK";
}
```
    

```js
const status = length == 10 ? "full" : "OK";
```
The [`ternary`] operator is often useful as a shorthand conditional statement.


[`ternary`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator