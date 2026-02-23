---
type: slide
title: Escaping with HTML character references
classes: [burger, gap, one-two]
---

Special characters such as &lt; and &gt; are meaningful to the HTML parser. 

> HTML [named character references](https://html.spec.whatwg.org/multipage/named-characters.html) are escape sequences that render as special characters in HTML.


| Character reference | Renders as |
| ----- | ----- |
| `&copy;` | &copy; |
| `&amp;` | &amp; |
| `&lt;`| &lt; |
| `&gt;`| &gt; |

> Passing strings through the [escape](https://jsr.io/@std/html/doc/~/escape) function converts these active HTML characters into harmless character references.

```js
import { escape } from '@std/html';

const badString = "<p>Nasty</p>";
const safeString = escape(badString); 
// %lt;p&gt;Nasty%lt/;p&gt;
```

Keep safe, escape user content.