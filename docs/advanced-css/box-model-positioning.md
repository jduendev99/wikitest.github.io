---
sidebar_position: 3
sidebar_label: 'Box Model & Positioning el.'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Box Model & Positioning Elements

* [For practice - CSS Position Lab GitHub](https://github.com/actionanand/css-position-lab)
* [Demo - CSS Position Lab](https://actionanand.github.io/css-position-lab/)

## The Box Model
![image](https://github.com/actionanand/wiki/assets/46064269/02cce7c0-d647-4e04-b6b6-bfb5cb317a78)

### The Box Model with `box-sizing: border-box;`
![image](https://github.com/actionanand/wiki/assets/46064269/5cf5b5c0-0216-4fde-903d-9181670fd234)

1. [Positioning theory](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning)
2. [More about the "position" property](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
3. [The z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
4. [The Stacking Context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
5. [Mastering margin collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)

### Deep Dive on **Margin Collapsing**

:::tip[Margin Collapsing]
<Tabs>
  <TabItem value="adj-sibling" label="Adjacent Siblings">
    In this case, the first element might have a margin of 10px  (on all sides let's say) and the second one has 5px  (or 20px  - the values don't matter). **CSS will collapse the margins and only add the bigger one between the elements**. So if we got margins of 10px  and 5px , a 10px  margin would be added between the elements
  </TabItem>
  <TabItem value="parent-with-children" label="A Parent with Children that have a margin">
    * To be precise, the first and/ or last or the only child has to have margins (top and/ or bottom). In that case, the parent elements margin will collapse with the child element(s)' margins. Again, the bigger margin wins and will be applied to the parent element.
    * If the parent element has padding, inline content (other than the child elements) or a border, this behavior should not occur, the child margin will instead be added to the content of the wrapping parent element.
  </TabItem>
  <TabItem value="empty-el" label="An Empty Element with margins">
    This case probably doesn't occur that often but if you got an element with no content, no padding, no border and no height, then the top and bottom margin will be merged into one single margin. Again, the bigger one wins.
  </TabItem>
</Tabs>
:::

### Shorthand Properties
![image](https://github.com/actionanand/wiki/assets/46064269/5b8444e2-2880-4be4-8255-943657a4c193)

### "display: none" vs "visibility: hidden"

:::info
<Tabs>
  <TabItem value="display-none" label="None">
    `display: none;`: This value removes the element to which you apply it from the document flow. This means that the element is not visible and it also doesn't **block its position**. Other elements can (and will) take its place instead. **It's still part of the DOM though**, you can still **access it via JavaScript** for example.
  </TabItem>
  <TabItem value="visibility-hidden" label="Hidden">
    `visibility: hidden;`: There is an alternative to that though. If you only want to hide an element but you want to keep its place (i.e. other elements don't fill the empty spot), you can use `visibility: hidden;`. Here it's not removed from the document flow and of course also not from the DOM.
  </TabItem>
</Tabs>
:::

### Box Types: inline, block-level and inline-block
![image](https://github.com/actionanand/wiki/assets/46064269/d1b72eee-8c45-4c42-95ee-3d5e37a44b83)

## Positioning Schemes: Normal flow, Absolute positioning and Floats
![image](https://github.com/actionanand/wiki/assets/46064269/ef46fe56-e673-4322-9340-4349fc4b23ad)

1. [When Using `!important` is The Right Choice](https://css-tricks.com/when-using-important-is-the-right-choice/)
2. [The `:not()`  pseudo class](https://developer.mozilla.org/en-US/docs/Web/CSS/:not)

### Float and Clear fix

1. [Working With CSS Float And Clear Properties](https://blog.openreplay.com/working-with-css-float-and-clear-properties/)
2. [More on float - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/float)

:::tip
* In CSS, floating elements automatically have a `display: block;` applied to them. Floating elements behave similarly to blocks, and you can set a specific height and width.
* When floating block-level elements, they wrap around their content instead of taking up all available width. This means they behave more like `inline-block` elements, even though their display property remains as block in CSS.
:::
