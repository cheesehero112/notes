'use strict';
// Create a function makePlural that accepts an array argument. makePlural will iterate through the array, add an 's' to the end of each array element, and return the mutated array.

//input: array of strings
//output: array of strings with s at the end (plural)

const makePlural = (strArr) => {
	// create an output array
	const outputArr = [];
	// iterate the strArr
	strArr.forEach((str) => {
		// concat s to each item and push to the output array
		outputArr.push(`${str}s`);
	});
	// return output array
	return outputArr;
};

const arr1 = ['lion', 'tiger', 'bear'];
const arr2 = ['computer', 'video game', 'system'];

// Uncomment these to check your work!
console.log(makePlural(arr1)); // should log: ['lions', 'tigers', 'bears']
console.log(makePlural(arr2)); // should log: ['computers', 'video games', 'systems']
