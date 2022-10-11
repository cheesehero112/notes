// https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

/*
Question 1: Sum all numbers
Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.
*/


/* Write a function 'subsetSum' that is given an array of integers and a target number. 
It should return true if there is a subset of the array that sums up to the target and returns false otherwise. 
A subset can be any size and the elements do not have to appear consecutively in the array.
Examples: 
subsetSum([3, 7, 4, 2], 5) -> true (3 + 2 = 5) 
subsetSum([3, 34, 4, 12, 5, 12], 32) -> true (3 + 12 + 5 + 12 = 32) 
subsetSum([8, 2, 4, 12], 13) -> false 
subsetSum([8, -2, 1, -3], 6) -> true (8 + 1 + (-3) = 6) */

//5
//[3, 7, 4, 2] [2, 3, 4, 7] //5
//arr[0];
//arr[0 + x];

//[3, 34, 4, 12, 5, 12];
//[3, 4, 5, 12, 12, 34];

subsetSum([3, 7, 4, 2], 5) //-> true(3 + 2 = 5)
subsetSum([3, 34, 4, 12, 5, 12], 32) // -> true (3 + 12 + 5 + 12 = 32) 
subsetSum([8, 2, 4, 12], 13) // -> false
subsetSum([8, -2, 1, -3], 6) //-> true (8 + 1 + (-3) = 6) */
