##### binary

Binary is used in digital computers and based on a binary number system. It can only show two states - off and on, and usually symbolized by 0 and 1.

Everything we see in the digital world, including videos, texts, and pictures can be broken down into binary even if we can't see it. 

Side note - the word "bit" stands for binary digits.

##### executable

When a file is executable, it means that it's a file a computer can run as a process. Otherwise known as a "compiled" file. They are usually non-readable, non-editable and in binary format. 

Common file format are, .BAT, .COM, .EXE, .BIN, .DMG, .APP, .ELF, and more.

##### program

Program is a set of instructions that a computer uses to perform a specific function, like a recipe. It contains a list of ingredients (variables), directions (statements) that shows a computer how to make the dish (execute a task).

##### compile vs interpret program language

Compiled languages are converted directly into machine code, and are executable. They tend to be faster and more efficient to execute than interpret languages, but everytime something is changed, the file needs to be re-compiled. It's like a translated recipe book. If author decides to change ingredients, translator has to rewrite the book and republish. 

Examples of pure compiled languages: C, C++, Erland, Haskell, Rust, Go

Interpret languages run through a program line by line and execute each command. In the recipe example, It's like having a live interpretor who can communicate the ingredient change real time. It used to be slower to execute than compiled languages, but the gap is shrinking.

Examples of common interpreted languages: PHP, Ruby, Python, JavaScript

##### unix

UNIX (trademarked) is a multiuser, multitasking operating system designed for flexibility and adaptability. Originally developed in the 1970s with newly invented C language. It inspired many common OS such as Linux and MacOS.

##### command line and PATH

Command Line is a text interface for a computer, such as the Terminal. It allows me to talk directly to my computer. No graphics and mousing available. When I type into the terminal, I'm always issuing commands such as ls, cd, mkdir, that is why it's called the commend line.

Path is a string of characters used to uniquely identify a location in a directory structure. It is compused by following the directory tree hierarchy, and separated by a character such as "/", ":", or ";". 

Bonus: absolute path vs relative path

absolute path starts at the root of the directory tree, and could be lengthy to type. I can use relative path by referencing the current working directly (cwd) using "../foldername",  ''~/foldername/file", or simply typing "foldername" without the slash.

##### command line flags

Command Line flags are a way to set options and pass in arguments to the commands I run. Commands behavior will change based on what flags are set.

Ex.1: `ls -l` in Terminal will include more information in the result. `-l ` is the flag. 

Ex.2: `ls -a` lists all files including hidden files.

Ex.3:`ls -la` will list all files in a single column, including hidden files (*it's a combination of Ex.1 & Ex.2!)

##### bash, zsh

Both bash and zsh are a command language that runs in most terminal immurator. In my own terminal, I am running zsh. (you can check what you are using by typying "echo $0")

##### node

(Not sure if this is the correct "node", but guessing it's referring to Node.js)

Node.js is an open-source, cross-platform, runtime environment for server-side JavaScript applications.

##### brew

BREW (Binary Runtime Environment for Wireless) is a free and open-source software package management system that simplifies the installation of software on Apple's OS, macOS, and Linux.

##### code editor (vs code, atom, sublime, vim) Some of these terms will be defined by 2 or 3 additional terms that you don’t know, so drill into all of those new terms as well.

A code editor, also known as a source-code editor, is a text editor program designed specifically for editing source code of computer programs. It could be a standalone application, or it maybe built into an IDE (integrated development environment), or web browser. 

Examples of standalone app: ??

Examples of IDE: NetBeans, Eclipse, IntelliJ, and Visual Studio Code

Examples of browser-based code editor: PlayCode, JSFiddle, CodePen, StackBlitz, AWS Cloud9, JSBin, WordPress Theme Editor

##### Low-level language vs. high-level language

Low-level language:

It can easily be understood by a computer or a machine. It is difficult to write, understand and debug for humans. It is completely machine/ computer dependent, and highly memory efficient.

​	There are two types of low-level languages:

 1. Assembly language - it is like a bridge between high level language and machine language. It provides commands such as ADD, MUL, and SUB. It requires an assembler to convert into machine language.

 2. Machine language - it is a language that consists of binary code that is understood by CPU.

    

High-level language:

It can easily be understood by a human (programmer or user). It is easier to understand and debug, but retuires a translator to convert the source code to native code that a computer can understand. It is completely machine/conputer independent and the least memory-efficient language.  Examples - Java, Python, JavaScript, C++

##### Assembly code

see Low-Level Language, 1. Assembly Languages above.

##### JavaScript

JavaScript (JS) is a lightweight, iterpreted, or just-in-time complied programming language with first-class functions. JS is best known as a scripting language for Web pages, but it's used in many non-browser environments.

##### JavaScript engine

JavaScript engine is an interpreter that parses and executes a JavaScript program.

##### EcmaScript

ECMA Script is a scripting language specification on which JavaScript is based. ECMA stands for European Computer Manufacturers Association, is in charge of standardizing ECMAScript.

##### Browser

A browser, also known as an internet browser or a web browser, is application software for accessing the World Wide Web or a local website.

##### Babel

Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines.

##### Transpiler

Transpiler, also known as source-to-source compiler, or a transcompiler, is a program that translates a source code from a language to another at the same level of abstraction. (*note the difference with compiler, which outputs a lower level language than its input)