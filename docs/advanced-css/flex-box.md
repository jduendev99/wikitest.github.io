---
sidebar_position: 9
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Flex Box

:::info
Adding the `z-index`  to an element only has an effect, if the `position`  property with a value different from `static`  was applied to this element.
:::

:::warning
One of the exceptions of the above behaviour is **flexbox**. Applying the `z-index`  to `flex-items` (so the elements inside of the flex-container) will change the order of these items even if **no position property was applied**.
:::

![image](https://github.com/actionanand/css-uhost/assets/46064269/d3d2a89b-8fcd-4e0f-9fd8-1019b42bd092)

![image](https://github.com/actionanand/css-uhost/assets/46064269/a74def38-45f2-4272-97cc-ea4f4a1a9830)

![image](https://github.com/actionanand/css-uhost/assets/46064269/94fcbbda-ffff-48ec-a6d5-4d98a0d0cbc8)

<Tabs>
  <TabItem value="flex" label="Flex">
  ```css showLineNumbers
  .flex-container {
    display: flex;
    // highlight-start
    flex-direction: row;
    flex-wrap: nowrap;
    // highlight-end
    align-items: stretch;
    justify-content: flex-start;
    align-content: normal;
  }
  ```
  </TabItem>
  <TabItem value="flex-short" label="Flex - Shorthand">
    ```css showLineNumbers
    .flex-container {
      display: flex;
      // highlight-start
      /* 
        flex-flow: flex-direction flex-wrap;
      */
      flex-flow: row nowrap;
      // highlight-end
      align-items: stretch;
      justify-content: flex-start;
      align-content: normal;
    }
  ```
  </TabItem>
</Tabs>

<Tabs>
  <TabItem value="flex" label="Flex">
  ```css {6,8-9,12} showLineNumbers
  .item-6 {
    background: #d3c0b1;
    color: white;
    padding: 10px;
    width: 210px;
    order: 0;
    /* 'order below 0' will be placed at the beging & `order above 1` will be placed at the end */
    flex-grow: 0;
    flex-shrink: 1;
    /* If `flex-shrink: 1;` item won't shrink */
    /* flex-basis: auto | content | <width> | <height>; */
    flex-basis: auto;
    /* flex: flex-grow flex-shrink flex-basis; */
    flex: 0 1 auto;
  }
  ```
  </TabItem>
  <TabItem value="flex-short" label="Flex - Shorthand">
  ```css {6,8} showLineNumbers
  .item-6 {
    background: #d3c0b1;
    color: white;
    padding: 10px;
    width: 210px;
    order: 0;
    /* flex: flex-grow flex-shrink flex-basis; */
    flex: 0 1 auto;
  }
  ```
  </TabItem>
</Tabs>


:::info[Flex Basis]
* `flex-basis` is based on the **main axis**. 
    - If `flex-direction: row;`, `flex-basis` will be replace the **width** of the element (X - axis).
    - If `flex-direction: column;`, `flex-basis` will be replaced the **height** of the element (Y - axis).
:::

![image](https://github.com/actionanand/css-uhost/assets/46064269/537ba735-7595-4a4a-a807-c35f99cb26fa)

![image](https://github.com/actionanand/css-uhost/assets/46064269/9d87bd97-0daa-4843-b14a-0e6c9c37cee7)

## GitHub Repo

* [CSS Flex Lab - GitHub](https://github.com/actionanand/css-flex-lab)
* [CSS Flex Lab - Demo](https://actionanand.github.io/css-flex-lab/)
