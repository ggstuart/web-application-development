---
type: slide
title: Creating users
classes: [gap, one-three, burger]
---

The **createUserController** handles the form submission in the usual way.

> It grabs the data, validates it and passes it to the `createUser` model function.

```js {hl_lines=8}
export async function createUserController(ctx) {
    const { request } = ctx;
    const formData = await request.formData();
    const { isValid, errors, validated } = validateSchema(formData, userSchema);
    if(!isValid) {
        return render(registrationFormView, {errors}, ctx, 400);
    }
    await createUser(validated);
    return redirect("/", `user '${validated.username}' created`);
}
```

> The createUser function must **hash** the password before storing the data.

```js {hl_lines=2}
export async function createUser({username, password}) {
    const hashedPassword = await hashPassword(password);
    db.prepare(`
        INSERT 
        INTO users (username, hashedPassword) 
        VALUES (:username, :hashedPassword)`
    ).run({ username, hashedPassword });
}
```

The password hashing is the only new aspect.