---
title: Data types
type: slide
classes: [even, gap]
---

> Data types in Javascript are pretty simple. 
The basic data types are *Boolean*, *Number* and *String*. 

```js
const a = true;     // Boolean
const b = 2.6;      // Number
const c = 'hello';  // String
```
> There is also a Bigint data type for when values greater than 2<sup>53</sup> are reasonably expected.
```js
const d = 1n;       // Bigint
```

> As a dynamically typed language, JavaScript attaches type information to the data, not the variable. 
>
>Reassigning values to variables creates new objects in memory and old values are garbage collected.

```js
let foo = 42;               // foo is now a number
foo = 'bar';                // foo is now a string
foo = true;                 // foo is now a boolean
foo = ['hello', 'world'];   // foo is now an Array
foo = {'hello': 'world'};   // foo is now an Object
foo = (a, b) => a + b;      // foo is now a function
foo = undefined;            // foo is now undefined
foo = null;                 // foo is now null
```
