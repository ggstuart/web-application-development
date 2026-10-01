---
title: More array methods
type: slide
classes: [p-burger, one-two, h-gap, p-then-examples]
---

Some really useful methods of the `Array` class take callback functions as the main argument.
This is a powerful tool when more complex transformations are needed.


> [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) simply executes the callback for each element.

```js
const doSomething = item => console.log(item.toUpperCase());
const numbers = ['one', 'two', 'three'];
numbers.forEach(doSomething);
// ONE
// TWO
// THREE
```

> [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
will return a new `Array` including only those elements that return true when passed through the provided function.

```js
const lengthThree = item => item.length == 3;
const originals = ['one', 'two', 'three', 'four', 'five', 'six'];
const filtered = originals.filter(lengthThree); 
// ['one', 'two', 'six']
```

> [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
Returns a new `Array` in which each element has been converted by the provided function.

```js
const transformItem = item => `${item.toUpperCase()}!!!`;
const originals = ['one', 'two', 'three']
const transformed = originals.map(transformItem);   
// ['ONE!!!', 'TWO!!!', 'THREE!!!']
```