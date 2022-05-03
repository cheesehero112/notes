# Assignment 2

1. Look up and take notes on these important terms

- ##### CLI (command line interface) or command line tools vs GUI

  - CLI is a command line program that accepts text input to execute operating system functions.

  - Command line tools are scripts, programs, and libraries that have been created with a unique purpose to solve a problem. Most of these tools are open-source projects and free. See the list of 50 Cool Tools to Improve Your Workflow. https://stackify.com/top-command-line-tools/#Productivity

  - GUI (Graphical User Interface) is a system of interactive visual components for computer software. (i.e. - Mac OSX, Microsoft Windows)

- ##### Git vs gitHub and version control

  - Git is an open-source version control system developers install locally to manage source code. It also tracks every changes in computer files and helps coorginating work among several people and tracking progress. No GUI.

  - GitHub is an online (cloud) service to which developers who use Git and connect and upload or download resources. It provides an easy to use GUI.
  - Helpful video on this topic: https://www.simplilearn.com/tutorials/git-tutorial/git-vs-github

- ##### Be familiar with names of other popular computer languages

  - JavaScript (web development, game development, mobile apps, building web servers)
  - Python (backend development, data science, app development)
  - HTML (web doc, web development, web maintenance)
  - CSS (web doc, web development, web design)
  - Java (E-commerce, finance, app development)
  - SQL (database management, sales reports, business management)
  - NoSQL (Non-relational SQL - improvement to SQL's scalability)
  - C# (game development, desktop/web/mobile apps, VR)
  - Rust (operating systems, VR, web browsers)
  - Perl (ststem admin, GUI development, network programming)
  - Go (system/ network programming, audio/video editing, big data)

- ##### Dynamically typed languages vs statically typed languages

  - In Dynamically typed languages, the type of a variable is check during run-time. Example languages include JavaScript, Objective-C, PHP, Python, Ruby, Lisp, and Tcl. 

    For example, dynamically-type languages do not require you to declare the data types of your variables before you use them.

    Python Example:

    ```python
    data = 10;
    data = “Hello World!”; // no error caused
    ```


    

  - In Statically typed languages, the type of a variable is known at compile-time instead of at run time. Example languages include Java, C, C++, FORTRAN, Pascal, and Scala. 

    For example, statically-typed languages require you to declare the data types of your variables before you use them

    Java Example:

    ```java
    int data;
    data = 50;
    data = “Hello World!”; // causes an compilation error
    ```

    

- ##### Bonus: Strongly-typed languages vs Weakly-typed languages

  - Strongly-typed language is one in which variables are bound to specific date types and will result in type errors if types do not match up as expected in the expression, regardless of when type checking occurs. Examples of languages include Python and Java.

    Python Example:

    ```python
    temp = “Hello World!”
    temp = temp + 10; // program terminates with below stated error
    ```

  - Weakly-typed languages is one in which variables are not bound to a specific data type. They still have a type but type safety constraints are lower compared to strongly-type languages. Examples of languages include PHP and C. 

    PHP Example:

    ```php
    $temp = “Hello World!”;
    $temp = $temp + 10; // no error caused
    echo $temp;
    ```

- ##### Function vs Method

- ##### Function Declaration vs Function Expression (specifically in js)

- ##### Front-end vs back-end. Research this for about 30 minutes (no more than that) using multiple resources while writing any questions about this topic

  - Front-end is the user-side requesting information (i.e.- when I go to YouTube using Chrome, I'm on the front-end). CSS, HTML, JavaScript are the common front-end languages. All the code runs on the browser.
  - Back-end is the server-side providing infromation back to the front-end. PHP, Python, Ruby, C#. All the code runs on the server and only the results are return to the front-end (browser)
  - A term full-stack developer is referred to someone who can work on both front-end and back-end.
  - Helpful videos
    - https://www.youtube.com/watch?v=1SwWo0wHx6Q
    - https://www.youtube.com/watch?v=Kl2AXuv6g0M

- ##### DOM, event listeners

  - DOM (Document Object Model) is a programming interface (API) for web documents. It converts a web structure into the tree structure and stores it in internal memory. By using the structure, It can access all aspects of HTML or xml objects such as h1 texts, backgroun color, height of an element, etc) and make changes when needed.

    - helpful video: https://www.youtube.com/watch?v=ipkjfvl40s0

  - Event Listeneners are a procedure in JavaScript that waits for an event to occur. For example, a user clicking the mouse or pressing a key on the keyboard. (i.e. `addEventListener()`)

    

2. In Github, make a new repo.
   Clone that repo to your local machine.
   Push a .txt file with the answers to the 2 questions below to your GitHub only using the git CLI (no GUIs)
   - I will repo this md file once all asslignment 2 is finished.

3. Order the following from low to high level languages [c++, javascript, binary, assembly code]

   - Binary > assembly code > C++ > JavaScript 

4. Which of the following does not belong? C, Python, Go, Git,  Java, Bash

   - Git does not belong on this list because Git is the only software on this list. All others are a computer language. 

5. Javascript is often referred to as a client-side language. Research this in detail until you can briefly explain how js (short for javascript) is compiled OR interpreted by the browser until it turns into binaries for computers to be able to read

   - Client-side is the software that runs on a user's web browser. JavaScript, JQuery, CSS are client-side scripts.
   - JavaScript can be used in both client and server side! JS can be used to developt client application in your browser and also as backent technolofy. 
   - Server-side is the systems that run on the server. Commond languages used for server-side includes, JS, PHP, Python, Ruby, C#

6. Continue freeCodeCamp, Andrew Mead’s course (sections 7 and 8), CSX, and any other coding resources.

   - I have started on CSS Color Markers tutorial as of May 2, 2022
   - I have started section 7 of Andrew's course as of May 3, 2022

7. Share 1 or more “aha” moments you had in this channel. Ex. “I couldn’t get this function to run [show code snippet] and kept getting this error [show error] but after an hour I realized it was because I was using const instead of let and had nothing to do with what the error message was actually displaying”

   