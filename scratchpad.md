# Scratch Pad

## Day5 August 6, Monday

While learning **Applied Visual Design** at [FCC](https://freecodecamp.org) I learnt that background color can be set using background like this `background:

### LINEAR-GRADIENTS:

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

### HSL():

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

### USING BACKGROUND TEXTURES:

```css
body {
  background: url('https://i.imgur.com/MJAkxbh.png')
}
```

### Making a Heart with HTML and CSS3

```css
<div class="heart"></div>

.heart {
  background: red;
  width: 100px;
  height: 100px;
  position: absolute;
  margin: auto;
  top: 40%;
  left: 50%;
  transform: rotate(-45deg);
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
```

> live version here at [Codepen](https://codepen.io/phavor/pen/KBBLrr?editors=0100)