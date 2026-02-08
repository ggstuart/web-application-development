---
title: Switch statements
type: slide
classes: []
---

> [switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) statements are good when there are many options.

```js
switch(x) {
  case 1:
    console.log("x is 1");
    break;
  case 2:
    console.log("x is 2");
    break;
  case 3:
    console.log("x is 3");
    break;
  default:
    console.log("x is something else");
}
```

> Be careful though, execution will pass through all the subsequent options unless and until you include the `break` statement.