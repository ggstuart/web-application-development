---
type: slide
title: Object literals
classes: [one-two, gap, p-then-examples]
---

Objects can be treated as key/value pairs.
Though they are far more than that.

> Objects are defined with curly braces containing comma-separated key/value pairs.
Each key/value pair is separated with a colon.

```js
myObject = {
    key1: "value",
    key2: 12
};
```

> They can be modified using *square bracket notation*.

```js
// Reading and writing properties

const oldValue = myObject["key1"]; 
myObject["key1"] = "new value";
myObject["new key"] = false;

```

> Though *dot notation* is more convenient, it is limited (e.g. no spaces in keys).

```js
// try to access a proporty that hasn't been defined
console.log(myObject.missingValue); // undefined

// Add new properties
myObject.missingValue = "no longer missing";
```

> [`for...in`] loops iterate over the key values.
This is the same for arrays (where the keys are integers).

```js
for(const key in myObject) {
    console.log(`${key}: ${myObject[key]}`);
}
// Try console.table(myObject) instead!
```

[`for...in`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in