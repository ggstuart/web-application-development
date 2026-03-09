---
type: slide
title: Password hashing
classes: [gap]
---

> Creating a user requires us to hash the password.
It's a bit involved and the details are outside of the scope of this module.

```js
const secret = "A secret value that nobody can guess.";
const options = {
    name: "PBKDF2",
    hash: "SHA-256",
    iterations: 5000,
    salt: new Uint8Array(Array.from(new TextEncoder().encode(secret)))
}

export async function hashPassword(password) {
    const inputBytes = new TextEncoder().encode(password);
    const key = await crypto.subtle.importKey("raw", inputBytes, "PBKDF2", false, ["deriveBits"]);
    const buffer = await crypto.subtle.deriveBits(options, key, 256);
    const padded = Array.from(new Uint8Array(buffer)).map(byte => byte.toString(16).padStart(2, 0));
    return padded.join("");
};
```

> Here we use the [crypto.subtle](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) API to hash the password.
The API requires that we prepare the data in a particular way.
We use [deriveBits](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/deriveBits) to apply the [PBKDF2](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2) algorithm.
