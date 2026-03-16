---
type: slide
title: Validation middleware
classes: [gap]
---

> We can use middleware to extract and validate formData.

```js
import { validateSchema } from "../tools/validation.js";

export function validate(schema) {
    return async (ctx, next) => {
        const { request } = ctx;
        const formData = await request.formData();
        const validation = validateSchema(formData, schema);
        if (validation.isValid) {
            console.log("Validation: OK");
        } else {
            console.log("Validation: Errors");
            console.log(validation.errors);
            ctx.status = 400;
        }
        return next({ ...ctx, ...validation });
    };
}
```

> The validation data are added to the context, along with the status code.