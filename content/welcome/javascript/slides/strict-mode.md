---
title: Strict mode vs. sloppy mode
type: slide
classes: [strict, h-gap, one-three, p-burger]
---

Adding `"use strict"` to your code will catch errors before they cause you problems.
Strict mode will *raise more errors* and enforce better habits.



> In *sloppy mode* (the default) this mistake would not be picked up.

```js


let myVariable;

myVarible = 17;

// The mistake is allowed to pass silently
```

> Activating [`strict mode`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) ensures this line throws a `ReferenceError`

```js
"use strict"; // Adding this raises the error

let myVariable;

myVarible = 17; 

// Uncaught ReferenceError: myVarible is not defined
```

Luckily, **JS modules always use strict mode by default!**