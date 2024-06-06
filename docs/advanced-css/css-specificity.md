---
sidebar_position: 1
---

# CSS Intro & Specificity

CSS Specificity digest

## CSS Intro

### What Happens to CSS when we load up a web page?
![image](https://github.com/actionanand/wiki/assets/46064269/ae077af4-f713-4292-a0b2-3d586c7e7d05)

### Quick Review: CSS Terminology
![image](https://github.com/actionanand/wiki/assets/46064269/417f1425-7ca8-4038-b591-903ff5e84b0b)

## CSS Specificity

### Cascading Style Sheets and Specificity

![image](https://github.com/actionanand/wiki/assets/46064269/3588fa28-e00e-4d5e-8766-1b2259d2c140)
![image](https://github.com/actionanand/wiki/assets/46064269/dec1de55-d85f-4ea9-b11b-8725d19902c1)
![image](https://github.com/actionanand/css-uhost/assets/46064269/73fe75ef-1b50-40f4-af07-ef5a1c9f4e5c)

* [Specificity in detail](https://web.dev/learn/css/specificity)

:::info
The universal selector `*` has no specificity value (0, 0, 0, 0);
:::

## Text align and Vertical align

:::tip
The `text-align` property in CSS is used to align the inner content of a `block` element.

:::

* **Content** is used here as as term instead of **text**, because while `text-align` certainly affects **text**, it affects all `inline` or `inline-block` elements in **that container**(container will be `block` element such as paragraphs `<p>...</p>`, divs `<div>...</div>`, sections `<section>...</section>`, articles `<article>...</article>`, and so on..).

* This alignment affects the **horizontal axis** only. So the `text-align` property is different from the `vertical-align` property which we use to set the vertical alignment of an element.

:::tip
You can also use the `vertical-align` property to center `inline`, `inline-block`, or **table cell** elements vertically.
:::

*  One of the many applications for this approach is to vertically align an image with text or to vertically align the content of a table cell.

```css
.element {
  display: inline-block;
  vertical-align: middle;
}
```
* This method(`vertical-align`) **not working with the block element**, could be a deal breaker
* [15 ways to implement vertical alignment with CSS - Log Rocket](https://blog.logrocket.com/15-ways-implement-vertical-alignment-css/)

## Box Shadow

```css
.package {
  box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color];
  box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}
```

1. [box-shadow - CSS-Tricks](https://css-tricks.com/almanac/properties/b/box-shadow/)
2. [Box Shadow - Generator](https://box-shadow.dev/)

## GitHub Repo

* [CSS uHost - GitHub](https://github.com/actionanand/css-uhost)
* [CSS uHost - Demo](https://actionanand.github.io/css-uhost/)
