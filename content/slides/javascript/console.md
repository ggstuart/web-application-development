---
title: The JavaScript console
type: slide
classes: [even, burger, gap]
---

There are several methods of the [console API] that we can use.

> It can be accessed via a script to log messages.
Typically these messages are for the developer.
We can set the visual *level* of our messages.

```js
console.log("hello world!");
console.debug("Is this working?");
console.info('Some information')
console.warn('be aware...')
console.error("Something has failed");
```

> We can optionally log an error with `console.assert`.

```js
// Assert that an expression is true in your code.

console.assert(x > 0, "No more x!!");
// This will log an error if the first argument if false
```

> We can display data with `console.table`.

```js
console.table(document.location);
```

> We can time execution with `console.time` and `console.timeEnd`.

```js
console.time('mycode');
// Do some things
console.timeEnd('mycode');
```

The console in the browser can be used directly as a REPL interface.


[console API]: https://developer.mozilla.org/en-US/docs/Web/API/console