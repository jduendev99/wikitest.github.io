---
sidebar_position: 11
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Transitions & Animations

### Simple animation

```css
  .modal {
    /* animation css - `ease-in` -> starts slower & ends faster; `ease-out` -> reverse of the prior */
    opacity: 0;
    transform: translateY(-3rem);
    transition: opacity 200ms, transform .5s;
  }

  .open {
    opacity: 1;
    transform: translateY(0);
  }
```

```css
/* transition: WHAT DURATION DELAY TIMING-FUNCTION; */
transition: opacity 200ms 1s ease-out;
```

The above line can be translated to: "Animate any changes in the `opacity`  property (for the element to which the `transition`  property is applied) over a duration of **200ms**. Start fast and end slow, also make sure to wait **1s** before you start".

1. [transition-property](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property)
2. [transition-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration)
3. [transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
4. [transition-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay)
5. [MDN article on CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
6. [Easing Functions Cheat Sheet](https://easings.net/)

```css
/* animation: NAME DURATION DELAY TIMING-FUNCTION ITERATION DIRECTION FILL-MODE PLAY-STATE; */
animation: wiggle 200ms 1s ease-out 8 alternate forwards running;
```

```css
@keyframes wiggle {
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(10deg);
  }
}
```

The above line Can be translated to: "Play the **wiggle keyframe** set (animation) over a duration of **200ms**. Between two keyframes **start fast and end slow**, also make sure to **wait 1s before you start**. Play **8 animations** and **alternate** after each animation. Once you're done, **keep the final value** applied to the element. Oh, and you should be **playing the animation - not pausing**."

1. [animation-name](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name)
2. [animation-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration)
3. [animation-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)
4. [animation-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay)
5. [animation-iteration-count](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count)
6. [animation-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)
7. [animation-fill-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode)
8. [animation-play-state](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state)
9. [MDN article on CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

* [List of "transitionable" Properties](https://www.w3.org/TR/css-transitions-1/#animatable-properties)

## GitHub Repo

* [CSS Animation - GitHub](https://github.com/actionanand/css-3d-transform-lab)
* [CSS Animation - Demo](https://actionanand.github.io/css-3d-transform-lab/)
