---
type: slide
title: Validating files
classes: [gap, burger, one-three]
---

The formData will include a [file object](https://developer.mozilla.org/en-US/docs/Web/API/File) which can be extracted in the normal way.

>A simple validation function.
```js
export function isImageFile(name, value) { 
    if (!(value instanceof File)) return `${name} must be a file.`;
    if (!value.type.startsWith('image/')) return `${name} must be an image file.`;
}
```

>Schema for a simple file upload.
```js
export const imageUploadSchema = { 
    title: [required, minLength(6)],
    file: [required, isImageFile]
}
```

>Grab the validated file and pass it to a model.
```js
async function uploadController({ request }) {
    const formData = await request.formData();
    const { isValid, errors, validated } = validateSchema(formData, newImageSchema);
    if (isValid) {
        createImage(validated)
        return redirect('/');
    } else {
        return uploadFormController({errors});
    }    
}
```

Handling the file is just the same as a string, except it is a File object.