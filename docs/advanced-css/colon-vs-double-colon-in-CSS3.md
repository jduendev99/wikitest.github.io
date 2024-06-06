---
sidebar_position: 14
sidebar_label: ': vs :: in CSS3'
---

<!-- import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'; -->

# : vs :: in CSS3

## The Difference

`:` precedes and identifies the state of an element while `::` creates elements. The difference between `:` and `::` is that the former describes the state of a selected element usually involving user interaction while the latter is used to create element(s) as a part of the selected element and/or used to target elements using the selected element as reference.

* It is important to note that `:` creates pseudo-classes, some examples are
    1. `:hover` - to style an element when user is on it without selecting ie hovers over an element
    2. `:active` - to style an element when clicked ie when element is active
    3. `:visited` - to style anchor tags (links) when a user has clicked on it.
    4. `:focus` - to style an input field that user clicked on.

* Some examples of pseudo-elements (created using `::`) are:
    1. `::before` - targets created element that precedes selected element
    2. `::after` - targets created element that succeeds selected element
    3. `::placeholder` - targets placeholder atrribute value

## How to Use

A good rule of thumb is to only use `::` when it is necessary as this got introduced with CSS3 meaning `:before` is valid CSS and compatible with older browsers that haven’t fully adopted the changes introduced by CSS3. Following this rule makes your CSS backward-compatible.

It is also good practice to only use CSS-generated content when necessary as CSS-generated elements do not appear on the DOM and therefore cannot be parsed by accessibility tools.
