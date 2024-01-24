'use strict';
// Create a function addS that accepts a string, and returns the string with an "s" added to the end.

// input: string
// output: string with s added to the end

const addS = (string) => `${string}s`;

// TESTS
console.log(addS('apple')); // should log "apples"
console.log(addS('0123')); // should log "0123s"
