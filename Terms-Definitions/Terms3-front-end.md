## Front-End & Browser Terms

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
  - V8 is _Google's open source high-performance JavaScript and WebAssembly engine_, written in C++. It is used in Chrome and in Node.js, among others.
  - SpiderMonkey is the first JavaScript engine, written by Brendan Eich at Netscape Communications, later released as open source and currently maintained by the Mozilla Foundation. It is used in the Firefox web browser.
  - Watched this video > https://mathiasbynens.be/notes/shapes-ics

- What does it mean when a website is `responsive`?
  - Responsive webdesign is the approach that suggests that design and developtment should respond to the user's behavior and environment based on screen size, platform and orientation.



##### DOM, event listeners

- DOM (Document Object Model) is a programming interface (API) for web documents. It converts a web structure into the tree structure and stores it in internal memory. By using the structure, It can access all aspects of HTML or xml objects such as h1 texts, backgroun color, height of an element, etc) and make changes when needed.

  - helpful video: https://www.youtube.com/watch?v=ipkjfvl40s0

- Event Listeneners are a procedure in JavaScript that waits for an event to occur. For example, a user clicking the mouse or pressing a key on the keyboard. (i.e. `addEventListener()`)
