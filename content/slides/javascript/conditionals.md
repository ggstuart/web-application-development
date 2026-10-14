---
title: Conditionals
type: slide
classes: [burger, gap]
params:
    layout:
        cols: 1fr 1fr
        rows: auto 1fr 1fr 1fr auto
---

Use [`if...else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) to execute a block conditionally.

> Whatever you pass into the `if` clause will be converted to boolean.
If its not *truthy*, then the block will be skipped.

```js
let status;

if(length == 10) {
    status = "full";
}
```

> The `else` clause is optional.
> Further `else if()` clauses can be added before the final `else`.

```js
let status;

if(length == 10) {
    status = "full";
} else {
    status = "OK";
}
```
    
> The [`ternary`] operator is often useful as a shorthand conditional statement.

```js
const status = length == 10 ? "full" : "OK";
```

See also [logical OR assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment) and [nullish coalescing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)

[`ternary`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator