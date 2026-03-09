---
type: slide
title: Automatic login
classes: [gap]
---

> When we create a new user, the provided credentials are obviously correct.

```js {hl_lines="15-17"}
import { userSchema } from '../schema/users.js';
import { createUser } from '../models/users.js';
import { login } from '../tools/auth.js';
import { render } from '../tools/render.js';
import { redirect } from '../tools/redirect.js';

export async function createUserController(ctx) {
    const { request } = ctx;
    const formData = await request.formData();
    const { isValid, errors, validated } = validateSchema(formData, userSchema);
    if(!isValid) {
        return render(registrationFromView, {errors}, ctx, 400);
    }
    await createUser(validated);
    const headers = new Headers();
    login(headers, validated.username);
    return redirect("/", `user '${validated.username}' created`, headers);
}
```

> So, we can also log the user into our application.
