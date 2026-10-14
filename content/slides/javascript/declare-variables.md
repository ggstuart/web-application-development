---
title: Three ways to declare variables
type: slide
classes: [gap, burger]
params: 
    layout:
        cols: 1fr 3fr
        rows: auto 1fr 1fr 1fr auto auto

---

**TL;DR:** use `const` by default. If you need reassignment, use `let`.


> `const` is the most restrictive and usually the best choice.

```js
const myConst = 1;  // Use const by default
let myLet = 1;      // If you need reassignment, use let
var myVar = 1;      // NEVER use var
```

> `const` is *not reassignable*, it will raise an error if you try.

```js
const myConst = 1;
myConst = 2; // Uncaught TypeError: Assignment to constant variable.
```


> `let` is the right choice if you need reassignment

```js
let myVariable = 1; 
myVariable = 2; // No problem
```


> `var` is **never** the right choice.
It is **function-scoped** (EVIL!)

```js
{
    const myConst = 1; 
    let myLet = 1; 
    var myVar = 1; 
}
console.log(myVar); // Data leaks without error
console.log(myLet); // ReferenceError: myLet is not defined
console.log(myConst); // ReferenceError: myConst is not defined
```



Errors are good, declaring variables in the right way is good practice.
