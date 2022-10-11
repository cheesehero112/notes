"use strict";
/*
refactor this function so it doesn’t use a counter variable or a for loop or a while loop
hint: you can do this as one statement
*/

// function countEvens(arr) {
//   let counter = 0;
//   for (const num of arr) {
//     if (num % 2 === 0) counter++;
//   }
//   return counter
// }

// I can use a filter?

const countEvents = (arr) => (arr.filter((num) => num % 2 === 0)).length;  

console.log(countEvents([1, 2, 3, 4, 6])); // should log 2

// Hints
// figure out the 1 statement
// refactor with ternary
// refactor again with implicit return
// ++i

// Practice switch statement
const myfavFruit = "blueberry";
switch (myfavFruit) {
    case "apple":
        console.log('I like apple, but not my favorite');
        break;
    case "banana":
        console.log('banana is my favorite!');
        break;
    case "watermelon":
        console.log('I love watermelon in the summer')
        break;
    default:
        console.log('I guess I like most fruits including', myfavFruit);
        break; 
}

// Hideaki slack weekly algo
/*
given an array of strings and a function, make an object that tracks all return value frequencies

There are many ways to do this, but you can probably refactor the first solution you come up with. I refactored mine 4 times!
*/

function answerTracker(arr, func) {
    // create a cache obj
    let cache = {};
    // iterate arr 
    arr.forEach((num) => {
        // invoke func with each num as input
        // check if output(key) exist in cache already
        if (cache[func(num)]) {
            //if it does, update the value + 1
            cache[func(num)] += 1;
             // if not, create a new key(output): value (1) pair in cache
        } else {
            cache[func(num)] = 1;
        }
    })
    // return cache
    return cache;
}

// refactor 1
const answerTrackerTernary = (arr, func) => {
    let cache = {};
    arr.forEach(num => cache[func(num)] ? cache[func(num)] += 1 : cache[func(num)] = 1);
    return cache;
}

// refactor 2 (use reduce)
const answerTrackerReduce = (arr, func) => {
    return arr.reduce((accu, curr) => { 
        return console.log(curr)
    }, {});      
}

// TEST
// ======================
const arr = [1,10,20,30];
const callback = (num) => {
  return num > 20 ? 'over_20' : 'not_over_20';
}

console.log(answerTrackerReduce(arr, callback)) // -> returns { over_20: 1, not_over_20: 3 }
// ======================