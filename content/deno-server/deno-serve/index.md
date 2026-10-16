---
type: exercise
title: A simple web server
weight: 3
author: Dr Graeme Stuart
---

In this exercise we will create our first HTTP server using deno and the fetch API.
We will create an HTTP request handler function in a new **server** folder and start it with a task.

<!--more-->

> Before you start, make sure everything is committed to your git repository. 
You should have a working **hello** task from the [first exercise]({{< ref "/deno-server/hello-task" >}}).

## Learning objectives

Primarily, we will be exploring the various ways we can use the [Response constructor][response constructor] and the [Headers constructor][headers constructor] to create [Response][response] objects that can be returned to the browser.
We will also see how to keep our server code in a **server** folder and start it with a task.

## Setup

### Install the Deno Extension

Web servers themselves (programmes which listen for HTTP requests) are not built into JavaScript as a language and there is no web standard for them.
However, Deno does provide the non-standard [Deno.serve][deno.serve] API. 

Type **Deno** into your **tasks/hello.js** file and add a dot.

```js {linenos=false}
Deno.
```

Notice that you don't get any autocomplete suggestions for the Deno namespace.
We need to install and activate the deno language server for this.

1. In VSCode, open the Extensions sidebar (**Ctrl + Shift + X**)
2. Search for **"Deno"** 
3. Click the official **Deno** extension (by the Deno Land company) and select **Install**

![deno extension](/images/vscode/deno-extension.png)

> Remember to remove the `Deno.` line from **tasks/hello.js** when you are done.

### Activate the Deno extension

The Deno extension adds knowledge of the APIs and coding conventions from the deno environment to VSCode.
However, installing the deno extension doesn't automatically activate it because if you were writing browser-based JavaScript, you would not want the deno extension activated.

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

The `Deno.serve` API requires that we pass in a request handler.

> A request handler is a function that takes a standard [Request][request] object as an argument and returns a standard [Response][response] object.
> This is exactly what a web server should do.
Deno implements the standard [fetch API][fetch api].

### The **server** folder

All the code for our web application will live in a **server** folder.
Create a **server** folder with a file called **main.js**.

We can begin with the simplest possible valid request handler.
All we do is return a blank response, every time.

**server/main.js**
```JavaScript
export function server() {
    return new Response();
}
```

Notice that we [export][export] the function so it can be imported by other modules.

> We will always use *named exports* like this.

### The **server** task

Our convention is that every task points to a module in the **tasks** folder.
So we need a small entry point which imports our request handler and passes it to `Deno.serve`.

**tasks/server.js**
```JavaScript
import { server } from "../server/main.js";

Deno.serve(server);
```

`Deno.serve` will spin up an infinite loop, continuously listening for incoming requests and passing each one to our function.

> The **tasks/server.js** module only *starts* the server.
> The request handler itself knows nothing about how it is being run.

### Start the server

Execute the programme.

```bash{linenos=false}
deno tasks/server.js
```

You should get the following warning.

```plaintext {linenos=false}
┏ ⚠️  Deno requests net access to "0.0.0.0:8000".
┠─ Requested by `Deno.listen()` API.
┠─ To see a stack trace for this prompt, set the DENO_TRACE_PERMISSIONS environmental variable.
┠─ Learn more at: https://docs.deno.com/go/--allow-net
┠─ Run again with --allow-net to bypass this prompt.
┗ Allow? [y/n/A] (y = yes, allow; n = no, deny; A = allow all net permissions) > 
```

The warning shows that deno wants to get permission from you before it allows the programme to access the network.

#### Give permission to access the network

Type **y** for **"yes, allow"** and press enter, the server should start with this message.

```plaintext {linenos=false}
✅ Granted net access to "0.0.0.0:8000".
Listening on http://0.0.0.0:8000/ (http://localhost:8000/)
```

The server is now running and will continue to run until you close the programme with **Ctrl + C**.

#### Give permission via a task

Stop the server with **Ctrl + C**.
Since we will often need to start our server, we can create a `start` task to make life easier. 

Add a `start` task to **deno.json**.

**deno.json**
```json{hl_lines=[3, 4]}
{
    "tasks": {
        "hello": "deno tasks/hello.js",
        "start": "deno -A tasks/server.js"
    }
}
```

> Make sure you add the comma at the end of the hello task. 

The only permission our server actually needs is network access, so `deno --allow-net tasks/server.js` would be enough.
We have used `-A` (short for `--allow-all`) which grants **every** permission.
This keeps our tasks simple as the project grows, but it means the script now has permission to do bad things, so make sure you know what code you are executing.

Now you should be able to start the server like this.

```bash{linenos=false}
deno task start
```

Notice, you were not prompted for permission because you gave explicit permission within the command.

### Make a request with the browser

The server should be running again. 
So we can see the result by visiting [http://localhost:8000/][localhost].
You should see a completely blank page. 
No errors. 
Just a blank page.

{{<iframe src="examples/hello-server/blank.html" width="800" height="200">}}{{</iframe>}}

> Visiting the link causes your browser to issue an HTTP GET request which will be received by our server and passed into our function.

To see what happened, we can look a bit deeper.

#### Inspecting the network traffic

Open up the developer tools in your browser and view the network panel.
Click on the **localhost** entry and it should look something like this, although yours will be somewhat different.

![the network panel shows a blank response](/images/blank-response.png)

My browser issued the following HTTP request. 
Understanding all this is not necessary.

```http {hl_lines=[1, 6]}
GET / HTTP/1.1
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: en-GB,en-US;q=0.9,en;q=0.8,la;q=0.7
Connection: keep-alive
Host: localhost:8000
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: none
Sec-Fetch-User: ?1
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/154.0.0.0 Safari/537.36
```

> Check the "raw" option in the devtools to see this version. 

The key points to note are that it is a `GET` request to the path `/` on the host `localhost:8000`.

Our server generated an extremely minimal response.

```http
HTTP/1.1 200 OK
content-length: 0
date: Fri, 02 Oct 2026 13:30:30 GMT
```

We got an **OK** status code with zero content.

### Change the response

Let's give the browser something more interesting by passing a [body][response body] to the [Response constructor][response constructor].

**server/main.js**
```JavaScript {hl_lines=2}
export function server() {
    return new Response("hello world");
}
```

Refresh the browser and... nothing happens?

The problem here is that the server is still running the old version of the code. 
In order to update the server with the new code, we need to stop the programme and restart.
You can do this with *Ctrl + C* in the terminal and restarting the server with:

```bash{linenos=false}
deno task start
```

> Hint: press the up arrow in the terminal to bring up previous commands and press enter to execute them. 

However, to make our life easier, we can enable watch mode.

#### Enable watch mode

Watch mode will stop and restart the server if we change a file.
To enable it, we need to add the `--watch` flag.

We can add a new task **dev** for development, in which we switch on the watch flag.

**deno.json**
```json{hl_lines="4-5"}
{
    "tasks": {
        "hello": "deno tasks/hello.js",
        "start": "deno -A tasks/server.js",
        "dev": "deno --watch -A tasks/server.js"
    }
}
```

> Again, the dev task only needs `--allow-net`, i.e. `deno --watch --allow-net tasks/server.js`.

Now starting the server in developer mode is easy.

```bash {linenos=false}
deno task dev
```

Any changes we make from now on will cause the server to restart.

```plaintext {linenos=false}
Task dev deno --watch -A tasks/server.js
Watcher Process started.
Listening on http://0.0.0.0:8000/ (http://localhost:8000/)
```

> Watch mode follows our imports, so changes to **server/main.js** also cause a restart.

Of course, we can also run the server in production mode with the `start` task.

#### Hello world!

You should now see our message appears in the browser!

The HTTP response is a bit more interesting.

```http
HTTP/1.1 200 OK
content-type: text/plain;charset=UTF-8
content-length: 11
date: Fri, 02 Oct 2026 13:56:21 GMT
```

We now have a `content-length` of **11** and a `content-type` of **text/plain;charset=UTF-8**.
These were added automatically.

> The body of the response can be viewed by switching from the **headers** panel (within the network panel) to the **response** panel.
You should see the raw plaintext string we returned.

### An HTML response?

We might think we can just give the browser HTML code and it will render a page for us.
Unfortunately, its not quite as easy as that. 
We need to set the **content-type** header to tell the browser how the body of the response should be interpreted.

We can demonstrate this with a minor change.

**server/main.js**
```JavaScript {hl_lines=2}
export function server() {
    return new Response("<h1>hello world</h1>");
}
```

The browser should show that our response body is still being interpreted as plain text.
We can see the heading tags in the browser viewport.

{{<iframe src="examples/hello-server/plaintext.html" width="800" height="200">}}{{</iframe>}}

The HTTP response looks like this.

```http
HTTP/1.1 200 OK
content-type: text/plain;charset=UTF-8
content-length: 20
date: Fri, 02 Oct 2026 14:11:32 GMT
```

Still clearly showing plain text, this time with 20 characters.

### Setting the **content-type** header

For the browser to understand that the response body should be interpreted as an HTML document, we need to set the [**content-type**][content-type] header to `text/html`.
We can use the [headers] API for this.

**server/main.js**
```JavaScript{hl_lines=[2, 3]}
export function server() {
    const headers = new Headers({ "content-type": "text/html" });
    return new Response("<h1>hello world</h1>", { headers });
}
```

We create a headers object and [initialise][headers init] it with an object literal containing the header data we want.
We then pass the headers object as a property (the "headers" property) on the [options][response options] object we pass into the Response constructor as a second argument after our html string which represents the [body][response body] of the Response.

> Make sure that makes sense to you.
> Passing an object as a "bag of options" is a common JavaScript pattern.
> Study the linked MDN documentation for details.

You should now see that the browser is properly interpreting our HTML fragment as an HTML document.

{{<iframe src="examples/hello-server/hello.html" width="800" height="200">}}{{</iframe>}}

The response we are giving the browser should indicate the correct headers have been used.

```http
HTTP/1.1 200 OK
content-type: text/html
content-length: 20
date: Fri, 02 Oct 2026 14:21:49 GMT
```

### Setting the status code

We can also set the status code for the response. 
Just add a [status][response status] property to the Response options.

**server/main.js**
```JavaScript{hl_lines=3}
export function server() {
    const headers = new Headers({ "content-type": "text/html" });
    return new Response("<h1>hello world</h1>", { headers, status: 404 });
}
```

> We wouldn't normally do this without a good reason, but we are just experimenting.

The page looks exactly the same, but the network panel should show the new status code.

```http
HTTP/1.1 404 Not Found
content-type: text/html
content-length: 20
date: Fri, 02 Oct 2026 14:25:12 GMT
```

> The status code tells the browser (and any other client) what happened.
> The body is just for humans.

Remove the status property again before moving on, so our server returns the default **200 OK**.

### Looking at the request

`Deno.serve` passes the incoming [Request][request] object into our function, but we have been ignoring it until now.
Let's add a `request` parameter and log the request method and URL.

**server/main.js**
```JavaScript{hl_lines="1-2"}
export function server(request) {
    console.log(request.method, request.url);
    const headers = new Headers({ "content-type": "text/html" });
    return new Response("<h1>hello world</h1>", { headers });
}
```

Refresh the page and look at the terminal.

```plaintext{linenos=false}
GET http://localhost:8000/
GET http://localhost:8000/favicon.ico
```

> You may not get the same result. 
> The browser cache can mean some files are only requested occasionally.

Loading the page once can result in multiple requests.
Every request receives the same response from our server.
We will deal with this in the next exercise.

## Challenge: Experiment with responses

Try a few experiments with the Response and Headers constructors.

- Set the status to 500 to indicate an unknown server error.
- Try various [4xx] codes to indicate client errors
- Return a [JSON][response json] response using the static `Response.json()` method and see how the **content-type** changes.
- Add a custom header of your own to the Headers object and find it in the network panel.

> Make sure your server returns the simple HTML response above before moving on.

## Conclusion

We have created a **server** folder containing a request handler which receives a **Request** object and returns a **Response** object.
The **tasks/server.js** module imports our request handler and passes it to `Deno.serve`.
We have `start` and `dev` tasks to run the server.

Our project now looks like this.

```plaintext{linenos=false}
.vscode/
    settings.json
deno.json
server/
    main.js
tasks/
    hello.js
    server.js
```

[response]: https://developer.mozilla.org/en-US/docs/Web/API/Response
[deno.serve]: https://docs.deno.com/api/deno/~/Deno.serve
[request]: https://developer.mozilla.org/en-US/docs/Web/API/Request
[fetch api]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[export]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
[localhost]: http://localhost:8000/
[response body]: https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#body
[response constructor]: https://developer.mozilla.org/en-US/docs/Web/API/Response/Response
[headers constructor]: https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers
[content-type]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Type
[headers]: https://developer.mozilla.org/en-US/docs/Web/API/Headers
[headers init]: https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers#init
[response options]: https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#options
[response status]: https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#status
[response json]: https://developer.mozilla.org/en-US/docs/Web/API/Response/json_static
[4xx]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status#client_error_responses
