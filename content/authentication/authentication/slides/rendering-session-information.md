---
type: slide
title: Rendering session information
classes: [gap, auto-one, burger]
---

> With the session in the render function, we can display the username and e.g choose links to display.

```js{class="small", hl_lines=[1, 8, 9, 18, 23]}
export default function render(viewFn, data, { request, session }, status=200) { 
    const headers = new Headers({"content-type": "text/html"});
    const content = viewFn(data);

    const msg = getFlash(request.headers, headers);
    const flash = `<aside id="flash"><p>${escape(msg)}</p></aside>`;

    const myFooter = footer(session);
    const myMenu = menu(session);

    const html = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>My web application</title>
            </head>
            <body>
                <header><h1>My web application</h1>${menu}</header>
                <main>
                    ${msg ? flash : ""}
                    ${content}
                </main>
                ${myFooter}
            </body>
        </html>`
    return new Response(html, { headers, status });
}
```

```js{class="small"}
function footer(session) {
    const username = session && escape(session.username);
    const msg = session && `logged in as ${username}`;
    return `<footer>
        <p>${msg || ""}</p>
        <p>&copy; application developers</p>
    </footer>`
}

function menu(session) {
    const logout = `<form action="/logout" method="POST">
        <button>logout</button>
    </form>`;
    const login = `<a href="/login">login</a>`;
    return `<nav>
        <a href="/">home</a>
        ${session ? logout : login}
    </nav>`
}
```

> The application template will get more complex as you add features.