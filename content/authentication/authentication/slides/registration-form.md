---
type: slide
title: Registration form
classes: [gap, auto-one, burger, tight-quotes]
---

> The registration form is served at **/register**.

```js
export function registrationFormView({ errors = {} }) { 
    return `
<section class="center">
    <h2>Create an account</h2>
    <p>
        Already have an account? <a href="/login">Sign in here</a>
    </p>
    <form action="/users" method="POST" class="fancy">
        <label for="username">Username: </label>
        <input id="username" name="username"
            value="${errors.username?.value || ""}" required>
        <span class="error">${errors.username?.message || ""}</span>
        <label for="password">Password: </label>
        <input type="password" id="password" name="password"
            value="${errors.password?.value || ""}" required>
        <span class="error">${errors.password?.message || ""}</span>
        <label for="confirm">Confirm password: </label>
        <input type="password" id="confirm">
        <button>register</button>
    </form>
</section>`    
}
```

{{<iframe src="examples/auth-ui/register.html" width="1000" height="600">}}{{</iframe>}}

> It POSTs a **username** and a **password** to **/users**.