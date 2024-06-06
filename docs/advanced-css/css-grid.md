---
sidebar_position: 10
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CSS Grid

![image](https://github.com/actionanand/css-uhost/assets/46064269/1b4eff98-edcb-4379-8865-56261417efc9)

![image](https://github.com/actionanand/css-uhost/assets/46064269/ad588a70-27dc-436f-b869-78561ee607fd)

![image](https://github.com/actionanand/css-uhost/assets/46064269/aaf07043-831a-4582-b4a4-70da247df3b3)

![image](https://github.com/actionanand/css-uhost/assets/46064269/580f45b6-0438-4643-869e-ac1adaa15b42)

![image](https://github.com/actionanand/css-uhost/assets/46064269/79854f82-936b-459a-872f-22434218ad3a)

![image](https://github.com/actionanand/css-uhost/assets/46064269/c7bd6b0d-7b48-487c-a376-a1a4ae50caa7)

<Tabs>
  <TabItem value="grid" label="Grid">
  ```css
  .container {
    margin: 20px;
    display: grid;
    height: 100vh;
    /* grid-template-columns: 200px 2fr 20% 1fr; */
    grid-template-columns: repeat(4, [col-start] 20% [col-end]);
    /* grid-template-rows: 5rem minmax(3rem, 5.5rem); */
    /* rows with names */
    grid-template-rows: [row-1-start] 5rem [row-1-end row-2-start] minmax(3rem, 5.5rem) [row-2-end];
    // highlight-start
    column-gap: 10px;
    row-gap: 10px;
    // highlight-end 
    /* justifying inner items in grid */
    justify-items: stretch;
    align-items: stretch;
    /* justifying the grid */
    justify-content: center;
    align-content: center;
  }
  ```
  </TabItem>
  <TabItem value="grid-short" label="Grid - Shorthand">
  ```css
  .container {
    margin: 20px;
    display: grid;
    height: 100vh;
    /* grid-template-columns: 200px 2fr 20% 1fr; */
    grid-template-columns: repeat(4, [col-start] 20% [col-end]);
    /* grid-template-rows: 5rem minmax(3rem, 5.5rem); */
    /* rows with names */
    grid-template-rows: [row-1-start] 5rem [row-1-end row-2-start] minmax(3rem, 5.5rem) [row-2-end];
    // highlight-next-line
    gap: 10px;
    /* justifying inner items in grid */
    justify-items: stretch;
    align-items: stretch;
    /* justifying the grid */
    justify-content: center;
    align-content: center;
  }
  ```
  </TabItem>
</Tabs>

<Tabs>
  <TabItem value="grid-item" label="Grid Item">
  ```css
  .el3 {
    background: rgba(0, 128, 0, 0.5);
    // highlight-start
    grid-column-start: 3;
    grid-column-end: 5; 
    /* grid-row-start: 1; */
    grid-row-start: row-1-start;
    grid-row-end: row-2-end;
    // highlight-end
    justify-self: center;
    align-self: center; 
  }
  ```
  </TabItem>
  <TabItem value="grid-item-short" label="Grid Item - Shorthand">
  ```css {3-5}
  .el3 {
    background: rgba(0, 128, 0, 0.5);
    grid-column: 3 / 5;
    grid-row: row-1-start / row-2-end;
    grid-area: row-1-start / 3 / row-2-end / 5;
    justify-self: center;
    align-self: center;
  }
  ```
  </TabItem>
</Tabs>

## GitHub Repo

* [CSS Grid Lab - GitHub](https://github.com/actionanand/css-grid-lab)

1. To view [normal page - Demo](https://actionanand.github.io/css-grid-lab/) : `http://localhost:5173/`
2. To view [home page - Demo](https://actionanand.github.io/css-grid-lab/home/) : `http://localhost:5173/home/`
3. To view [media-query page - Demo](https://actionanand.github.io/css-grid-lab/media-query/) : `http://localhost:5173/media-query/`
4. To view [autoflow page - Demo](https://actionanand.github.io/css-grid-lab/autoflow/) : `http://localhost:5173/autoflow/`
