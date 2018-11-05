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

- `order`: This is used to order elements. By default it takes the normal HTML source code order. This property takes numbers as values.

- `align-self`: This property allows you to adjust each item's alignment individually, instead of setting them all at once. `align-self` accepts the same values as `align-items` and will override any value set by the `align-items` property.

### Flex Shorthand Property

The `flex-grow`, `flex-shrink` and `flex-basis` properties can be set using a single `flex` rule.

```css
.box {
  flex: 1 0 auto;
}
```

The above rule sets the `flex-grow`,`flex-shrink` and `flex-basis` respectively and that is the default setting. We can alter the values to our needs. i.e. `flex: 1 3 6em`.

## Day87

### Require vs Import

In the past, the function `require()` would be used to import the functions and code in external files and modules. While handy, this presents a problem: some files and modules are rather large, and you may only need certain code from those external resources.

ES6 gives us a very handy tool known as `import`. With it, we can choose which parts of a module or file to load into a given file, saving time and memory.

Consider the following example. Imagine that math_array_functions has about 20 functions, but I only need one, countItems, in my current file. The old `require()` approach would force me to bring in all 20 functions. With this new `import` syntax, I can bring in just the desired function, like so:

```js
import { countItem } from 'math_array_functions'
```

### REGEX

Regex is a pattern match finder, it helps to search for specifics params

Using the `OR` for a more inclusive search

```js
let testString = /yes|no|maybe/
```

To ignore casing we use `i` flag. Like so:

```js
let testString = /inGnoreMe/i
```

### Methods

* __test()__: This allows you to test if a string is part of or is included in a string

* __match()__: This allows you to extract the actual matches you find from testing against a regex.

```js
"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]
```

To search or extract a pattern more than once we use the `g` flag.

```js
let testString = /goglobal go/g
```

### Wildcards

Wildcards help us match every character before or after.

```js
let string = ["match", "patch", "catch", "batch"]
let testString = /.tch/ig  // this will match every letter before the tch.
```

### Character classes

character classes allow you to define a group of characters you wish to match by placing them within a square bracket `[ ]`.

```js
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null
```

We can use the `hyphen` to indicate a range of characters

```js
let bgRegex = /[a-e]at/;
```

### Negated character set

To negate a character set  we use the caret symbol `^`
for example `/[^aeiou]/gi`

To match 1 or more times use `+`
To match 0 or more times use `*`

### Greedy vs Lazy match

A `greedy` match finds the longest possible part of a string that fits the regex pattern and returns it as a match.
A `lazy` match finds the smallest possible part of the string that satisfies the regex pattern.

Regular expressions by default are `greedy`. For example  `/t[a-z]*i/` would return `titani`
To change it to a `lazy` search we use `?`; `/t[a-z]*?i/` returns `ti`

#### Greedy
```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);
```

#### Lazy
```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
```