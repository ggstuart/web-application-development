---
type: slide
title: HTTP Semantics
classes: [burger, gap, even]
---
>"Explain **HTTP semantics** including examples of different request methods and response status codes. 
Show user interaction with hypermedia controls and use the browser developer tools to help explain the communication between the client and the server."


The details of the HTTP traffic are the focus here.
Introduce HTTP methods, status codes and headers.
The traffic between browser and server contains key information.
The browser can make GET and POST requests to different resources.
The server returns meaningful responses including HTML pages (with various status codes), static file responses and redirect responses.

```html {class="small"}
<section>
    <p>Don't have an account?<a href="/register">Sign up here</a></p>
    <form action="/sessions" method="POST" class="fancy">
        <label for="username">Username: </label>
        <input type="text" id="username" name="username" required>
        <label for="password">Password: </label>
        <input type="password" id="password" name="password" required>
        <button>sign in</button>
    </form>
</section>
```


> Web applications rely on HTTP traffic for their operation.
This video should demonstrate the basic examples we have covered.
> Check out the [hypermedia controls slides]({{< ref "/application-architecture/hypermedia-controls" >}}) (and lecture recording) for more details.
> You may also want to include stuff about [cookie]({{< ref "/authentication/cookies" >}}) headers for more variety.