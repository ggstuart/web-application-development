---
title: Basic loops
type: slide
classes: [one-two, gap, p-then-examples]
---

Repeating code multiple times.

> Similar to Java or C, for loops allow things to be repeated a number of times.

```js
// The classic loop style is very efficient and can be useful
// You should probably only use when looping over *huge* ranges

for(let i=0; i<10; i++) {
    console.log(i);
}
```

> A while loop will only execute while a condition is met.

```js
s = "hello world"

// the block is never executed
while(s.length < 10) {
  s = `${s}!` 
}
```

> A do...while loop will always execute once before the condition is checked.

```js
s = "hello world"

// we add one exclamation mark and the condition fails first time
do {
  s = `${s}!`             
} while (s.length < 10) 
```