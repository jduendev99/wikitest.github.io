---
sidebar_position: 4
---

import styles from '../../src/css/doc-bg-img-styles.module.css';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Background and Image

### The Background Property
![image](https://github.com/actionanand/wiki/assets/46064269/509f5172-d6b3-4229-b05a-2bf9691e6188)

<Tabs className="unique-tabs" defaultValue="background-short">
  <TabItem value="background" label="Background">
    ```css title="main.css" {2,3-8}
    #product-overview {
      background-image: url("./shared/images/freedom.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: left 15% top 20%;
      background-origin: padding-box;
      background-clip: border-box;
      background-attachment: scroll; 
      width: 100vw;
      height: 33vh;
      position: relative;
    }
    ```
  </TabItem>
  <TabItem value="background-short" label="Background Shorthand">
    ```css
    #product-overview {
      // highlight-next-line
      background: url("./shared/images/freedom.jpg") left 15% top 20%/cover no-repeat padding-box border-box scroll;
      width: 100vw;
      height: 33vh;
      position: relative;
    }
    ```
  </TabItem>
  <TabItem value="background-backup" label="Background with Backup color">
    ```css
    #product-overview {
      // highlight-start
      background: linear-gradient(to top, rgba(80, 68, 18, 0.6) 10%, transparent), url("./shared/images/freedom.jpg") left 15% top 20%/cover no-repeat padding-box border-box scroll, #ff1b68;
      // highlight-end
      width: 100vw;
      height: 33vh;
      position: relative;
    }
    ```
  </TabItem>
</Tabs>

### Linear & Radial gradient - Example

<Tabs>
  <TabItem value="linear" label="Linear Gradient" attributes={{className: styles.redTab}}>
  ```css
  .background {
    background-image: linear-gradient(to bottom left, green, red);
    background-image: linear-gradient(180deg, green, red, #fa923f, transparent);
    background-image: linear-gradient(73deg, green 30%, red 60%, #fa923f, transparent); 
  }
  ```
  </TabItem>
  <TabItem value="radial" label="Radial Gradient" attributes={{className: styles.purpleTab}}>
  ```css
  .background {
    background-image: radial-gradient(red, rgb(49, 108, 49), purple);
    background-image: radial-gradient(circle, red, green, purple);
    background-image: radial-gradient(circle at top left, red, green, purple);
    background-image: radial-gradient(circle at 20% 40%, red, green, purple);
    background-image: radial-gradient(circle 10rem, red, green, purple);
    background-image: radial-gradient(ellipse 27rem 10rem, red, green, purple);
    background-image: radial-gradient(ellipse closest-side at 20% 50%, red 25%, green 30%, purple);
    background-image: radial-gradient(ellipse farthest-side at 20% 50%, red, green, purple);
    background-image: radial-gradient(ellipse closest-corner at 20% 50%, red, green, purple); 
  }
  ```
  </TabItem>
</Tabs>


:::warning
* **Linear and Radial Gradient** will be considered as **Image** in background property. 
* Background property can have more than one Images (Gradient included), but there should be only one color.
:::

1. [The background Property - mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
2. [Styling Images - w3 schools](https://www.w3schools.com/css/css3_images.asp)
3. [Filters - mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)
4. [Styling SVG - mdn](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_and_CSS)

### CSS Filter

```css
img {
  /* <filter-function> values */
  filter: blur(5px);
  filter: brightness(0.4);
  filter: contrast(200%);
  filter: drop-shadow(16px 16px 20px blue);
  filter: grayscale(50%);
  filter: hue-rotate(90deg);
  filter: invert(75%);
  filter: opacity(25%);
  filter: saturate(30%);
  filter: sepia(60%);

  /* Multiple filters */
  filter: contrast(175%) brightness(3%);
  filter: grayscale(80%) blur(5px);
  filter: drop-shadow(3px 3px red) sepia(100%) drop-shadow(-3px -3px blue);

  /* Use no filter */
  filter: none;
}
```

* [A complete guide to using CSS filters with SVGs - Log Rocket](https://blog.logrocket.com/complete-guide-using-css-filters-svgs/)
* [CSS Filters](https://web.dev/learn/css/filters)
* [CSS Filter - mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)
