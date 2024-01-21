'use strict';
// Create a function addWaldo that accepts an object with keys being first names and values being last names.
//For example addWaldo({'Luke': 'Skywalker', 'Harley': 'Quinn', 'Ryan': 'Reynolds'})
//should add the key 'Waldo' with the value 'unknown' to the object and return the mutated object.

// create a function addWaldo
// input: an object of strings (first name & last name pair)
// output: an object of strings with Waldo: 'unknown' added to the end

// const addWaldo = function (object) {
//     // add Waldo: 'unknown' at the end of the object
//     object.Waldo = 'unknown';
//     // return an updated object
//     return object
// }

// ES6 arrow function
const addWaldo = (object) => {
	object.Waldo = 'unknown';
	return object;
};

// Uncomment these to check your work!
const siliconValley = { 'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle' };
console.log(siliconValley.Richard);
console.log(addWaldo(siliconValley));
// should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }
