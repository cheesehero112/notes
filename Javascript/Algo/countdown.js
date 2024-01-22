'use strict';
// Using a WHILE loop, write a function imAboutToExplodeWithExcitement
// which prints a countdown from n. When the countdown gets to 5,
// print 'Oh wow, I can't handle the anticipation!' When it's at 3,
// print 'I'm about to explode with excitement!'
// When the counter is finished, print 'That was kind of a let down'.

// input: number
// output: strings - at 5, at 3, and at 0

// create a func
const imAboutToExplodeWithExcitement = (n) => {
	// while loop (condition until n reaches 0)
	while (n > 0) {
		// check if n is 5, then console.log 'Oh wow, I can't handle the anticipation!'
		if (n === 5) {
			console.log("Oh wow, I can't handle the anticipation!");
			// check if n is 3, console.log 'I'm about to explode with excitement!'
		} else if (n === 3) {
			console.log("I'm about to explode with excitement!");
		} else {
			// print n to show countdown
			console.log('current n is: ', n);
		}
		// decrement n by 1
		n--;
	}
	// console.log 'That was kind of a let down'
	console.log('That was kind of a let down');
};

// Uncomment the line below to check your work!
imAboutToExplodeWithExcitement(10);
// expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4,
//I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'
