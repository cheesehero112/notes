'use strict';
//function holidays takes an array of strings and iterates through the array
// check to see if the array contains the string "October"
// Yes - return "Happy Halloween"
// No - return "have a great day!"

const holidays = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 'October') {
			return 'Happy Halloween';
		}
	}
	return 'Have a great day!';
};

// Uncomment these to check your work!
const months = ['April', 'May', 'June', 'October'];
const animals = ['Cats', 'Dogs', 'Pigs'];
console.log(holidays(months)); // should return: "Happy Halloween"
console.log(holidays(animals)); // should return: "Have a great day!"
