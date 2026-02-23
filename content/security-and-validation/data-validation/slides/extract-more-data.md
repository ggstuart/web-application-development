---
type: slide
title: Extracting more information
classes: [gap, burger]
---

> To be really useful, our `validateSchema` function needs to return more information.
We can add `isValid` boolean and `validated` data.

```js {hl_lines=["2-3", "8-12", 16]}
export function validateSchema(formData, schema) { 
    let isValid = true;
    const validated = {};
    const schemaEntries = Object.entries(schema);
    const errorEntries = schemaEntries.map(([key, {validators, displayName}]) => {
        const value = formData.get(key);
        const message = validateField(displayName || key, value, validators) || "";
        if(message) {
            isValid = false;
        } else {
            validated[key] = value;
        }
        return [key, {value, message, error: !!message}];
    });
    const errors = Object.fromEntries(errorEntries);
    return { errors, isValid, validated };
}
```

>Notice that ONLY fields which are present in the schema are being considered.
If the user provides additional fields, they are ignored.