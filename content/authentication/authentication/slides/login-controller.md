---
type: slide
title: Login controller
classes: [gap, one-three]
---

> The login controller checks credentials and returns errors if there is a problem.

```js
export async function loginController(ctx) {
    const { request } = ctx;
    const formData = await request.formData();
    const { isValid, validated, errors } = validateSchema(formData, userSchema);
    if (!isValid) {
        return render(loginFormView, {errors}, ctx);
    };
    const {ok, err} = await checkCredentials(validated);
    if (!ok) {
        return render(loginFormView, { errors: { ...err, ...errors } }, ctx);
    }
    const headers = new Headers();
    login(headers, validated.username);
    return redirect("/", `logged in as '${validated.username}'`, headers);    
}
```


> Check the hashed password against the database.

```js
export async function checkCredentials({ username, password }) {
    const user = getUser(username);
    const hashed = await hashPassword(password);
    const ok = user && user.hashedPassword == hashed;
    const err = {
        credentials: !ok && "Problem with username and/or password"
    }
    return { ok, err };
}
```