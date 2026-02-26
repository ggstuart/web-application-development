---
type: slide
title: Serving files
classes: [gap, burger, one-three]
---

Images are served as image files.

> The response object is clever enough to add the correct headers. 

```js
export function imageController({ imageId }) {
    const file = getFile(imageId);
    return new Response(file);
}
```

> We can route requests to the controller to give each file a URL.
```js
const uploadPattern = new URLPattern({pathname: "/"})
const imagePattern = new URLPattern({pathname: "/images/:imageId"})

function server(request) { 
    const url = new URL(request.url);
    const { method } = request;

    if (uploadPattern.test(url) && method == "GET") return uploadFormController({});
    if (uploadPattern.test(url) && method == "POST") return uploadController({request});
    if (imagePattern.test(url) && method == "GET") {
        const { imageId } = imagePattern.exec(url).pathname.groups;        
        return imageController({imageId});
    }
}
```

Each individual image record has a unique route. 