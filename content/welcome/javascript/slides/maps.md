---
type: slide
title: Maps
classes: [even, p-then-examples, gap]
---

A map is an object type which holds *key-value pairs*.
It is often more efficient than an object.


> Create a map with the `new` keyword and use the `set()` method to store values against keys.
```js
const myMap = new Map();

myMap.set('HTML', 'declarative');
myMap.set('CSS', 'declarative');
myMap.set('JavaScript', 'imperative');
```

> Extract values using the `get()` method.

```js
console.log(myMap.get('CSS'));
```

> Map objects are iterable, yielding key-value pairs.

```js
for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}
```

> Test if items exist with the `has()` method.

```js
myMap.has('CSS');
```

> Remove items with the `delete()` method.

```js
myMap.delete('CSS');
```

> Remove all items with the `clear()` method.

```js
myMap.clear();
```
