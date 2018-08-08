# Scratch Pad

## Day6 August 6, Monday

While learning **Applied Visual Design** at [FCC](https://freecodecamp.org) I learnt that background color can be set using background like this `background:

### LINEAR-GRADIENTS

```css
body {
  background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);
}

header {
  background: linear-gradient(35deg, #FFFFCC, #CCFFFF);
}
```

Using `linear-gradient` has always been a challenge.

I also learnt about using `hsl()` specifically when children elements have to inherit and tweak their parent color.

### HSL()

```css
header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {
    background-color: hsl(180, 80%, 25%);
    /* nav element inherits and tweaks the header background-color */
  }
```

### USING BACKGROUND TEXTURES

```css
body {
  background: url('https://i.imgur.com/MJAkxbh.png')
}
```

### Making a Heart with HTML and CSS3

```css
<!-- HTML Part -->
<div class="heart"></div>
<div class="beat"></div>

<!-- CSS Part -->
.beat {
  position: fixed;
  padding: 0;
  margin: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  animation-name: backdiv;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

.heart {
  background: red;
  width: 100px;
  height: 100px;
  position: absolute;
  margin: auto;
  top: 40%;
  left: 50%;
  transform: rotate(-45deg);
  animation-name: beat;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

.heart::before {
  position: absolute;
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  top: -45px;
  left: 0;
  border-radius: 50%;
  background: red;
}

.heart::after {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  top: 0;
  left: 45px;
  border-radius: 50%;
  background: red;
}

@keyframes backdiv {
  50% {
    background-color: #fce8e8;
  }
}

@keyframes beat {
  0% {
    transform: scale(1) rotate(-45deg);
  }
  50% {
    transform: scale(0.6) rotate(-45deg);
  }
}
```

> live version here at [Codepen](https://codepen.io/phavor/pen/KBBLrr?editors=0100)

### ANIMATION-FILL-MODE

**animation-fill-mode:** is used to specify the style applied to a element when the animation has finished. You can set this to `forward`.

To change the speed of an animation, we could:

- **@keyframes:** Alter the positions for animations like `20% { some rules }` `50% { some rules }`.
- **animation-timing-function:** Sets how they animate over the set duration. We could use values like `ease, ease-in, ease-out, ease-in-out, linear, cubic-bezier` etc
- **animation-duration:** Sets the duration length for the animation. Longer duration would animate over a longer period of time.

### Screen Readers Only

When writting code for screen readers only, this is best achieved with:

```css
.sr-only {
  position: absolute;
  top: auto;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
```

## Day7 August 7, Tuesday

### Responsive Web Design Principles

To make images responsive you do this:

```css
img {
  max-width: 100%;
  display: block;
  height: auto;
}
```

## Day8 August 8, Wednessday

### Responsive Web Design Principles Cont'd

> #### Retina Display

The simplest way to make your images appear "retina" (and optimize them for retina displays) is to define their `width` and `height` values as only half of what the original file is. Assuming the value of a given image is `400px` both `width` and `height` then the following would be the style rule

```css
img {
  height: 200px;
  width: 200px;
}
```

> #### Responsive Typography

We can make typo responsive by using `vh` and `vw` which means `viewport height` and `viewport width` respectively rather than using `em`'s and `px`.

- `vw`: 10vw would be 10% of the viewport's width.
- `vh`: 3vh would be 3% of the viewport's height.
- `vmin`: 70vmin would be 70% of the viewport's smaller dimension (height vs. width).
- `vmax`: 100vmax would be 100% of the viewport's bigger dimension (height vs. width).

---

### CSS Flexbox

To use flexbox props, you first set the `display: flex` on the parent element.

- `flex-direction`: can be set to `row` or `column` for vertical or horizontal alignment.
> The default value of `flex-direction` is `row`. Other values incl: `row-reverse` and `column-reverse`.

**NB**: `row-reverse` and `column-reverse` essentially switch the item display positions. i.e. it takes the second element and makes it the 1st.

- `justify-content`: is used to distribute spaces to the flex children. It has different values.
  - `justify-content: center` --> Aligns items to the center of the flex container.
  - `justify-content: flex-start` --> Aligns the items to the start of the flex container. `row` : to the *left*. `column` :  to the *top*
  - `justify-content: flex-end` --> This does the opposite of `flex-start`.
  - `justify-content: space-between` --> aligns items to the center of the main axis, with extra space placed between the items. The first and last items are pushed to the very edge of the flex container.
  - `justify-content: space-around` --> similar to `space-between` but the first and last items are not locked to the edges of the container, the space is distributed around all the items.

- `align-items`: is used to align flex items along the `cross-axis`.
  - `align-items: flex-start` --> Aligns items to the start of the flex container. For `row` - **top** and for `column` - **left**.
  - `align-items: flex-end` --> Aligns items to the end of the flex container. For `row` - **bottom** and for `column` - **right**.
  - `align-items: center` --> Centeralize the items left to right for `column` and top to bottom for `row`.
  - `align-items: stretch` --> stretch the item to fill the flex container.
  - `align-items: baseline` --> align items to their baseline. The line the item sits upon.

- `flex-wrap`: is used to wrap flex items so that their is a breakpoint when items exceed teh width of the container, CSS would create new `row` or `column`.
  - `flex-wrap: nowrap` --> default value which does not engage wrapping.
  - `flex-wrap: wrap` --> wraps items from left to right if in `row` and from top to bottom if in `column`.
  - `flex-wrap: wrap-reverse` --> wraps items from bottom-to-top if they are in a row, or left-to-right if they are in a column.

### Main Axis Vs Cross Axis

When using `justify-content` the items are aligned **wrt** the `main-axis`. In `row` the `main-axis` is `horizontal-line` oriented, while in `column` the `main-axis` is `vertical-line` oriented.

When using `align-items` the items are aligned **wrt** the `cross-axis` which is the opposite of the `main-axis`. In `row` the `cross-axis` is `vertical-line` oriented, while in `column` the `cross-axis` is `horizontal-line` oriented.

### Flex properties for the flex children

All the properties discussed above apply to the parent container.

> These will apply to the flex items (children)

- `flex-shrink`: It allows an item to shrink if the flex container is too small. Items shrink when the width of the parent container is smaller than the combined widths of all the flex items within it. The flex-shrink property takes numbers as values. The higher the number, the more it will shrink compared to the other items in the container. `flex-shrink: 1`

- `flex-grow`: It controls the size of the flex items when the parent container expands. `flex-grow: 2`

- `flex-basis`: Is used to set the initial value of an item before CSS makes adjustments to it using `flex-shrink` or `flex-grow`. The value `auto` sizes items based on the content.