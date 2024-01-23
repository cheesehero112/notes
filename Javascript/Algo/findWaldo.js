'use strict';
// Challenge: findWaldo
// Create a function findWaldo that accepts an object and returns
// the value associated with the key 'Waldo'.
// If the key 'Waldo' is not found, the function should return 'Where's Waldo?'

// create a function findWaldo - input: object with strings (firstname: lastname)
//                      output: string (print 'Where is Waldo' if key "Waldo" is found)
//                                     (print the value of key('unknown') "Waldo" if found)
// const findWaldo = function (objectOfNames) {
// 	// 1. create a function to return true or false after checking if there is "Waldo" in a given object
// 	const isWaldoHere = function (object) {
// 		// make an array with just keys
// 		const listOfKeys = Object.keys(object);
// 		// iterate listOfKeys and search for "Waldo"
// 		for (let i = 0; i < listOfKeys.length; i++) {
// 			if (listOfKeys[i] === 'Waldo') {
// 				return true;
// 			}
// 		}
// 		return false;
// 	};
// 	// 2. Create an if statement with the function isWaldoHere
// 	if (isWaldoHere(objectOfNames)) {
// 		// 3.if true, console log the value of 'Waldo' key
// 		return objectOfNames.Waldo;
// 		// 4. if not found, console log 'Where's Waldo?'
// 	} else {
// 		return `Where's Waldo?`;
// 	}
// };

const findWaldo = (namesObj) => {
	// create a helper function to see if there is key Waldo
	const isWaldoHere = (obj) => {
		// make a list of keys array
		const nameKeys = Object.keys(obj);
		// iterrate the array to find if there is Waldo
		for (let i = 0; i < nameKeys.length; i++) {
			// return true or false using if statement
			if (nameKeys[i] === 'Waldo') {
				return true;
			}
		}
		return false;
	};

	// invoke the helper function and if true, log 'unknown', if false log 'Where's Waldo?'
	if (isWaldoHere(namesObj) === true) {
		return 'unknown';
	} else {
		return "Where's Waldo?";
	}
};
// Uncomment these to check your work!
const DC = { 'Bruce': 'Wayne', 'Harley': 'Quinn' };
const supernatural = { 'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown' };
console.log(findWaldo(DC)); // should log: 'Where's Waldo?'
console.log(findWaldo(supernatural)); // should log: 'unknown'
