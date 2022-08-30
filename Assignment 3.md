# Assignment 3

#### These are no longer meant to be done in a week as we’re not going at the crazy fast pace anymore. Do this after you’re done with assignment-2!

- Finish FCC html and css sections, continue to JS section and aim to finish `js basics` and `es6` over this and the next assignment period
- finish csx up to recursion (finished May 2022)
- Research the entire system of Browsers, JS Engine, html, css, JS

- The browser is needed to render html, css, and js. Browsers can’t read any other languages.
- html, css, and js languages are being updated every year. Even if the language gets an update, that needs to be implemented by the browser. This is the basic concept of `support`. For ex. CSS added flexbox in 2015 in css 3 as part of the language, but browsers then needed to update their code to support the new syntax. This means the css flexbox syntax worked in Chrome and Safari first, then Firefox, then others (Internet explorer still hasn’t adopted it yet, I think).

check out [caniuse.com](http://caniuse.com/) for browser support in html, css, and js. You will use this a lot.

- How do you connect html, css, and js in an html file?
  - I need to put script tags and source links in my html file for appropriate css & js files

- what does the `defer` keyword do?
  - The defer attribute **tells the browser not to wait for the script**. Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, and then runs when the DOM is fully built

- what is the significance of putting the script tag at the END of the body (if not using `defer`)
  - If <script> tag is not added at end of the <body> tag, DOM may not be ready by that time, thus preventing javascript to work on it, leading to unknown behaviors. Therefore, we should always add <script> tag at the end of the <body> tag **to prevent unknown behaviors and make the webpage load faster**.

- What does the JS engine do exactly? Be familiar with some names like V8, SpiderMonkey. Review the concept of interpretation vs compilation related to this
  - A JavaScript engine is a software component that **executes JavaScript code**. The first JavaScript engines were mere interpreters, but all relevant modern engines use just-in-time compilation for improved performance. JavaScript engines are typically developed by web browser vendors, and every major browser has one.
  - V8 is *Google's open source high-performance JavaScript and WebAssembly engine*, written in C++. It is used in Chrome and in Node.js, among others.
  - SpiderMonkey is the first JavaScript engine, written by Brendan Eich at Netscape Communications, later released as open source and currently maintained by the Mozilla Foundation. It is used in the Firefox web browser.
  - Watched this video > https://mathiasbynens.be/notes/shapes-ics

- What does it mean when a website is `responsive`?
  - Responsive webdesign is the approach that suggests that design and developtment should respond to the user's behavior and environment based on screen size, platform and orientation.

- Andrew Section 9 only

- Do this 4 hour tutorial. Go slow, take notes, ask questions etc.. https://www.youtube.com/watch?v=srvUrASNj0s&t=6478s

resources:
Look for Udemy sales for:

- “JavaScript: The Advanced Concepts (2022 Update)” by Andrei Neagoie,
- “Advanced CSS and Sass: Flexbox, Grid, Animations and ..” by Jonas Schmedtmann,
- “JavaScript Algorithms and Data Structures Masterclass” by Colt Steele,
-  “The complete React Developer course” by Andrew Mead



[![YouTube](https://slack-imgs.com/?c=1&o1=wi32.he32.si&url=https%3A%2F%2Fa.slack-edge.com%2F80588%2Fimg%2Funfurl_icons%2Fyoutube.png)](https://www.youtube.com/)[**YouTube**](https://www.youtube.com/) | [freeCodeCamp.org](https://www.youtube.com/c/Freecodecamp)

**[Introduction To Responsive Web Design - HTML & CSS Tutorial](https://www.youtube.com/watch?v=srvUrASNj0s&t=6478s)** 