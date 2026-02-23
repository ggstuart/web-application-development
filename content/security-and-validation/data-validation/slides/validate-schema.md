---
type: slide
title: Validating fields and schema
classes: [one-three, gap, burger]
---

In our schema, each field can be given many validator functions.


> Validating a field, the first error message is returned or we implicitly return `undefined`.

```js
export function validateField(name, value, validators) {
    for (const validator of validators) {
        const error = validator(name, value);
        if (error) return error;
    }
}
```

> Validating our `formData` against an entire `schema` is a bit more complex. 
Relying on `Object.entries` and `Object.fromEntries` to convert our schema object into an array and back to an object.

```js
export function validateSchema(formData, schema) { 
    const schemaEntries = Object.entries(schema);
    const errorEntries = schemaEntries.map(([key, {validators, displayName}]) => {
        const value = formData.get(key);
        const message = validateField(displayName || key, value, validators) || "";
        return [key, {value, message, error: !!message}];
    });
    const errors = Object.fromEntries(errorEntries);
    return errors;
}
```

The `validateSchema` function can be expanded to provide whatever data we need.