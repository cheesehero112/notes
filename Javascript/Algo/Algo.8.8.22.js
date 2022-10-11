"use strict"

/*
twistedReduce:
write a function that takes in an array
return an array of only even numbers
use reduce
*/

// input: array of nums
// output: array of only even nums
function getEvenNumArr(array) {
    // use reduce => for each num, determine if it's an even number
    return array.reduce((allNums, currNum) => {
        if (currNum % 2 === 0) {
            allNums.push(currNum);
        }
        return allNums;
    }, []);
};

console.log(getEvenNumArr([1, 2, 3, 4, 5, 6, 7, 8, -4])); // => [2, 4, 6, 8, -4]