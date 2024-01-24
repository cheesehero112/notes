'use strict';
// Create a function lastLetter that takes a word (string) and returns the last character/letter of that string.

// input: string (a word)
// output: string (the last letter of the input string)

// access the last letter of the word character and return
const lastLetter = (word) => word[word.length - 1];

// TEST
console.log(lastLetter('apple')); // should log 'e';
console.log(lastLetter('ChatGPT')); // should log 'T';
