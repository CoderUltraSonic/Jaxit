# Jaxit
Jaxit is an easy-to-use library that makes an interactive terminal for your programs.

Jaxit was made by Codeverse, so check on Codeverse's Profile, [CoderUltraSonic](https://github.com/CoderUltraSonic).

---

### Getting Started with Jaxit

To use Jaxit's CSS File, simply type this in the HTML File.

```html 
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/CoderUltraSonic/Jaxit@v3.01.1/jaxit.css">
```
You can also import directly into your existing CSS File.

```css
@import url('https://cdn.jsdelivr.net/gh/CoderUltraSonic/Jaxit@v3.01.1/jaxit.css');
```

You can import Jaxit's JavaScript File like this in HTML.

**Note:** You can use the `jaxit.js` for development, but use the `jaxit.min.js` for production.

```html
<script src="https://cdn.jsdelivr.net/gh/CoderUltraSonic/Jaxit@v3.01.1/jaxit.js"></script>
<script src="https://cdn.jsdelivr.net/gh/CoderUltraSonic/Jaxit@v3.01.1/jaxit.min.js"></script>
```

You can import Jaxit's Javascript File like this directly into your existing JavaScript File.

**Note:** You have to make your existing JavaScript File a module before you import Jaxit like this. 
```html
<script type="module" src="script.js"></script>
```

**Note:** You can use the `jaxit.module.js` for development, but use the `jaxit.module.min.js` for production.

```js 
import {createJaxit} from 'https://cdn.jsdelivr.net/gh/CoderUltraSonic/Jaxit@v3.01.1/jaxit.module.js';
import {createJaxit} from 'https://cdn.jsdelivr.net/gh/CoderUltraSonic/Jaxit@v3.01.1/jaxit.module.min.js';
```

---

### Setting up the Console

Jaxit makes a simple console place which you can style if you want. If you do not want to style, Jaxit will do it for you.

This is what your JavaScript File should look like at the beginning. I am using ES6 modules.

```js
import {createJaxit} from 'https://cdn.jsdelivr.net/gh/CoderUltraSonic/Jaxit@v3.01.1/jaxit.module.js';

//This will put the 'jax' variable as the Jaxit Object.
var jax = createJaxit();

//This will start up the Jaxit Object.
jax.init();

//If you do not want to style the console, you can default style the Jaxit Console using this method.
jax.defaultStyle();

```

Great Job! You just finished setting up your JavaScript File. You are one step closer to learning Jaxit.

---

### Printing a line with Jaxit

Printing a line will write whatever you want into the console.

Here is how to do it.

```js
//The first parameter is the text you want to output.
//The second parameter is the color you want it outputed it. Default is "white".
jax.print('Hello World!', '#FF0000');
```

Simple, right?

---

### Scanning for User Input with Jaxit

Sometimes you want the user to give some kind of an input.

Doing this is very easy with Jaxit.

Here is how to do it.

```js
/*
First parameter: The text you want to output before the scanning. It is like an incentive to give an input.

Second parameter: The color of the pre-scanning text. Default is "white".

Third parameter: The color of the text in the user scanning area. Default is "white".

Fourth parameter: Should be set as "true" if you want the input to be parsed into an integer. Should be set as "false" if you want the input to be parsed into a string. Default is "false".

Fifth parameter: The callback. What will you do with the user input.

*/
jax.scan('What is your name', "white", "white", false, function(userInput) {
  jax.print('Hello, ' + userInput + '!');
});
```

---

### Delaying the Code

Jaxit provides a delay function for your code.

Here is how to do it.

```js
/*
First parameter: The function you want to do.
Second parameter: The duration you want to wait for in seconds. Accepts decimals until three decimal places.
*/
jax.delay(function() {
  jax.print('Hello World!');
}, 3);
```

---

### Clearing the Console

You can clear the console if you want.

Here is how to do it.

```js
jax.clear();
```

---

### Slowprinting the Print Message

Sometimes you want to slowprint the message for added effect. It might seem like a huge struggle to make by yourself, so let Jaxit do the work for you.
If you wanted to do this by yourself, you would need to make asynchronous functions synchronous and make a recursive function. That would make your code very messy and huge. 

Here is how to do it.

```js
/*
First parameter: The text you want to slowprint.
Second parameter: The duration for the entire string to be printed out. This is in milliseconds and does not support decimals.
Third parameter: The color of the text. (Rainbow colors are not supported.)
Fourth parameter: Since this code is asynchronous, Jaxit has a callback to do after the message is slowprinted.
*/
jax.slowprint('Hello World', 400, "green", function() {
  jax.print('Finished the slowprint!');
});
```

---

### Jaxit's Color Scheme

Jaxit has a color scheme that is usuable. 

It supports these following colors. (More will be added in future updates.)

- red
- lightgreen
- blue
- white
- gray
- green
- purple
- pink
- yellow
- lightblue
- yellowgreen
- cyan
- teal
- hotpink

To get these colors, simply type wherever you need a color the following line (The $color$ portion will be filled 
with the color in Jaxit's color scheme list.)

Here is how to do it.

`jax.colors.$color$`

---

### Styling the Console using CSS

Here is how to do it.

```css
/* First, get the Jaxit's console's class. And if you want, take out jax.defaultStyle() */

.jaxit-console {
  /* You can put whatever you want here. */
  opacity: 0.5;
}
```

---

### Styling the Console using JS

Here is how to do it.

```js
jax.jaxconsole.style.opacity = "0.5";
```

### Styling the Console using Built-in Functions

You can use:

```js
jax.changeConsoleFont(newfont);
// Remember that you have to put the new font in your html file. You can use Google Fonts for this.

jax.changeConsoleColor(newcolor);
//This changes the background color of the console.

jax.changeConsoleColorGradient(arr, type, direction);
/*
First parameter: The array of colors you want to use.
Second parameter: The type of gradient; this is default to linear but also supports radial.
Third parameter: This only applies to linear gradient; the direction of the linear gradient.
*/

jax.changeConsoleSize(wantedwidth, wantedHeight, width_measurement_type, height_measure_type);
//If you don't want to change something, leave it as an empty string.

jax.changeLocation(loc);
//Changes the location of the console.
//You can do: top, bottom, left, right, or fullscreen.
```

---

### Example JavaScript File

```js
import {createJaxit} from 'https://cdn.jsdelivr.net/gh/CoderUltraSonic/Jaxit@v3.01.1/jaxit.module.js';

let jax = createJaxit();

jax.init();
jax.defaultStyle();
jax.changeLocation('fullscreen');

questions = [
  ['What is Jaxit?', 'library'],
  ['Jaxit makes a ___ console.', 'interactive'],
  ['Who made Jaxit?', 'coderultrasonic'],
  ['Can you delay a function in Jaxit? (y/n)', 'y'],
  ['Which Jaxit version was made in May 2021?', 'v3.01.1'
]

jax.print('This is a test.', jax.colors.white);
jax.print('');

let curques = 0;
let correct = 0;
let incorrect = 0;

function askQuestion() {
  if (curques < questions.length) {
    jax.scan(questions[curques][0], jax.colors.lightgreen, jax.colors.white, false, res => {
      if (res.toLowerCase() == questions[curques][1]) {
        jax.print('Great Job!', jax.colors.green);
        correct += 1;
      } else {
        jax.print('Aww... You missed that!', jax.colors.red);
        incorrect += 1;
      }
      curques += 1;
      askQuestion();
    });
  } else {
    jax.print(`You got ${correct} question(s) correct, and you missed ${incorrect} question(s). There was a total of ${questions.length} questions on the test.`, jax.colors.lightblue);

    jax.scan('Do you want to take the test again? (y/n)', jax.colors.lightgreen, "white", false, res => {
      if (res == 'y') {
        jax.clear();
        curques = 0;
        correct = 0;
        incorrect = 0;

        jax.print('This is a text', jax.colors.white);
        jax.print('');

        askQuestion();
      } else {
        jax.print('Goodbye!', jax.colors.red);
      }
    });
  }
}

askQuestion();
```

---

### Thank you for reading!
