---
title: Three ways to declare variables
type: slide
classes: [scope]
---

> **TL;DR:** use `const` by default. If you need reassignment, use `let`.


> const


```js
{
    const myConst = 1;
    myConst = 2; 
    // Uncaught TypeError: Assignment to constant variable.
}
console.log(myConst); 
// Uncaught ReferenceError: myConst is not defined
```

- **block-scoped**
-  *not reassignable*

> let


```js
{
    let myVariable = 1; 
    myVariable = 2; // No problem
}
console.log(myVariable); 
// Uncaught ReferenceError: myVariable is not defined
```

- **block-scoped** 
- *reassignable*


> var


```js
{
    var myVariable = 1; 
    myVariable = 2; // No problem
}
console.log(myVariable); // No problem
```

- **globally-scoped** (EVIL!)
- *reassignable*

> Errors are good, declaring variables in the right way is good practice.
