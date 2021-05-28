# Jaxit
Jaxit is an easy-to-use library that makes an interactive terminal for your programs.

## Jaxit Tutorial for Absolute Beginners

_**We will first learn about Jaxit.**_

Jaxit is a lightweight, easy-to-use library. It is not in any way
dependent on any library such as Xterm.JS. 

Jaxit was made by Codeverse. It has a MIT License so you can make copies of it.
Jaxit is not yet in Github, but check on Codeverse's Profile, [CoderUltraSonic](https://github.com/CoderUltraSonic).

---

### Getting Started with Jaxit

To use Jaxit's CSS File, simply type this in the HTML File.

```html 
<link rel="stylesheet" type="text/css" href="https://jaxit.codeverse.repl.co/lib/jaxit.css">
```
You can also import directly into your existing CSS File.

```css
@import url('https://jaxit.codeverse.repl.co/lib/jaxit.css');
```

You can import Jaxit's JavaScript File like this in HTML.

**Note:** You can use the `jaxit.js` for development, but use the `jaxit.min.js` for production.

```html
<script src="https://jaxit.codeverse.repl.co/lib/jaxit.js"></script>
<script src="https://jaxit.codeverse.repl.co/lib/jaxit.min.js"></script>
```

You can import Jaxit's Javascript File like this directly into your existing JavaScript File.

**Note:** You have to make your existing JavaScript File a module before you import Jaxit like this. 
```html
<script type="module" src="script.js"></script>
```

**Note:** You can use the `jaxit.module.js` for development, but use the `jaxit.module.min.js` for production.

```js 
import {createJaxit} from 'https://jaxit.codeverse.repl.co/lib/jaxit.module.js';
import {createJaxit} from 'https://jaxit.codeverse.repl.co/lib/jaxit.module.min.js';
```

---

### Setting up the Console

Jaxit makes a simple console place which you can style if you want. If you do not want to style, Jaxit will do it for you.

This is what your JavaScript File should look like at the beginning. I am using ES6 modules.

```js
import {createJaxit} from 'https://jaxit.codeverse.repl.co/lib/jaxit.module.js';

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
