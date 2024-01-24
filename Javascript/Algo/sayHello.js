'use strict';
// Create a function sayHello that accepts a string argument and returns the string 'Hi, ' with the passed-in string added to the end.

// input: string
// output: string -> "Hi, (string arg)"

const sayHello = (string) => `Hi, ${string}`;

// TESTS
console.log(sayHello('Bob')); // should log "Hi, Bob"
console.log(sayHello('elephant')); // should log "Hi, elephant"
