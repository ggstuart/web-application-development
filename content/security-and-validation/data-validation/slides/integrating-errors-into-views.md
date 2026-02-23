---
type: slide
title: Integrating errors into views
classes: [tight-quotes]
---

> The form integrates errors using [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).

```js {hl_lines=[6, "13-14", "16-17"]}
function itemToHTML(item) {
    return `<li><span class="label">${item.label}</span>
        <span>Due ${item.due.toLocaleDateString("en-gb", fmt)}</span>
        <form method="POST" action="/items/${item.id}/delete"><button>&times;</button></form></li>`;
}
export function itemsView({ items, errors = {} }) {    
    return `<section aria-labelledby="items-heading" id="items">
        <h2 id="items-heading">Items</h2>
        <ul class="items">${items.map(itemToHTML).join("\n")}</ul>
        <form method="POST" id="new-item">
            <h3>Create new item</h3>
            <label for="label">Label: </label>
            <input id="label" name="label" placeholder="e.g. 'apples'" value="${errors.label?.value || ""}">
            <span class="error">${errors.label?.message || ""}</span>
            <label for="due">Due date: </label>
            <input id="due" name="due" type="datetime-local" value="${errors.due?.value || ""}">
            <span class="error">${errors.due?.message || ""}</span>
            <button>add</button>
        </form>
    </section>`
} 
```
> Use the CSS [:empty](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:empty) pseudoclass to set the error messages to [display: none](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/display#display_none) when no message is provided.

