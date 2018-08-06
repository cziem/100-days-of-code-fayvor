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