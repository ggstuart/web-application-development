---
type: slide
title: Validation Schema
---

> Our solution will rely on data structures we define which describe the constraints we want to impose on our user data.

```js
import { isDate, maxLength, minLength, required } from "../tools/validation.js";

export const newItemSchema = {
    'label': {
        validators: [required, minLength(3), maxLength(10)],
        displayName: "Label"
    },
    'due': {
        validators: [required, isDate],
        displayName: "Due date"
    }
};
```

> the validators are simple functions which we can define.