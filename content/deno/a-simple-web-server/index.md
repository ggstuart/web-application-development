---
type: exercise
title: A deno web server
author: Dr Graeme Stuart
weight: 3
---

In this exercise we will create our first HTTP server using deno.
We will create an HTTP request handler function that accepts a request and returns a response.

<!--more-->

## Install the Deno Extension

Web servers themselves (programmes which listen for HTTP requests) are not build into JavaScript as a language and there is no web standard for them.
However, Deno does provide the non-standard [Deno.serve](https://docs.deno.com/api/deno/http-server/#Deno.serve) API. 

Type **Deno** into your `main.js` file and add a dot.

```js {linenos=false}
Deno.
```

Notice that you don't get any autocomplete suggestions for the Deno namespace.
We need to install and activate the deno language server for this.

1. In VSCode, open the Extensions sidebar (**Ctrl + Shift + X**)
2. Search for **"Deno"** 
3. Click the official **Deno** extension (by the Deno Land company) and select **Install**

![deno extension](/images/vscode/deno-extension.png)

### Activate the Deno extension

Installing the deno extension doesn't activate it. 

> This is an option because if you were writing browser-based JavaScript, you would not want the deno extension activated.

Activate it by typing **Ctrl + Shift + P** to open the VSCode command palette and search for **Deno: Enable**.
Select the enable option.

You should see a new file has been created at *.vscode/settings.json* with the following content.

```json
{
    "deno.enable": true
}
```

This indicates that the deno extension is active.
You should now have autocompletion activated.

> The `Deno.serve` API **will** work without the extension.
> The extension just provides a better developer experience. 

## Create our first web server

The `Deno.serve` API requires that we pass in a function that takes a standard [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) object as an argument and returns a standard [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object.
> This is exactly what a web server should do.
Deno implements the standard [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).