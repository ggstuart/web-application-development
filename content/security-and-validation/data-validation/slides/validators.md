---
type: slide
title: Validator functions
classes: [burger, one-two, gap]
---

Our validator functions detect errors and return error messages.

> A simple required function detects whether we have an empty string.

```js
export function required(name, value) { 
    if (!value) return `'${name}' is a required field.`;
}
```

> We can check if the provided string makes a valid Date object
```js
export function isDate(name, value) { 
    if(new Date(value).toString() == "Invalid Date") {
        return `'${name}' must be a valid date.`;
    }
}
```

> We can use closures to return a function for any minimum (or maximum) length.

```js
export function minLength(min) {
    return (name, value) => { 
        if(value.length < min) {
            return `'${name}' must have at least ${min} characters.`
        }
    }
}
```

Returning nothing (`undefined`) means validation passed.