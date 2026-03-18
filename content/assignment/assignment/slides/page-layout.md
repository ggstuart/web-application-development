---
type: slide
title: Page layout
classes: [burger, gap, even]
---
>"Explain **Page layout** including the use of inner and outer display types and responsive/intrinsic design.
Use a complex page as an example. Demonstrate how deeply nested elements are positioned and controlled in layers using a variety of different display types."

A bit more tricky. 
Explain how we control our pages using flow, flex and grid *layouts*.
Each layout system applies its own rules for how elements are positioned. 
Outer display property (inline and block) only apply within flow layouts.
Media queries (and intrinsic layouts) allow our pages to respond to the size of the device viewport.

```css {class="small"}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 0.25rem;

    nav {
        display: flex;
        gap: 0.5rem;
    }
}
```

> Check out the [formatting contexts slides]({{< ref "/application-architecture/formatting-contexts" >}}) (and lecture recording) plus the [flow]({{< ref "/html-basics/default-flow" >}}) [flex]({{< ref "/application-architecture/flex" >}}) and [grid]({{< ref "/application-architecture/grid" >}}) exercises for more details.
>You need a **viewport meta element** to use **browser device emulation**.

