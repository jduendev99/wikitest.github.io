---
slug: text-align-center-in-button
title: Centering a Text Inside a Button
authors:
  - name: Anand Raja
    title: Software Developer
    url: https://github.com/actionanand
    image_url: https://github.com/actionanand.png
  - name: Anand Techie
    title: Software Developer, JS Specialist
tags: [css, center-css]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Instead of centering headings and paragraphs, let’s center text inside another element (`<button> </button>`). Aligning the button, and the text inside the button, would differ slightly from the examples.

That’s because the text-align property only works on the content inside block-level elements, such as headings and paragraphs, and not inline elements, such as buttons.

So here's what we'll do instead:

* Wrap the button in a `div`
* Then, add an inline style declaration to the div, i.e. `<div style="text-align:center">`.


<Tabs>
  <TabItem value="html" label="HTML">
    ```html
    <div style="text-align:center">
      <button type="button" class="btn btn-primary">Click Me</button>
    </div>
    ```
  </TabItem>
  <TabItem value="css" label="CSS">
    ```css
    .btn{
      background-color: #0068B1; 
      font-family: 'Lexend Deca', sans-serif;
      text-transform: uppercase;
      color: white;
      padding: 20px; 
      width: 200px;
      border-radius: 10px;
    }

    .btn:hover{
      background-color: #408EC5;
    }
    ```
  </TabItem>
</Tabs>
