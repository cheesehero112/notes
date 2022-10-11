"use strict";
/* 
make a function that takes in an object and returns a boolean
key types can be "string", "number", "boolean", "array", "object"

 tests should print true for all



*/
   // check if the key does NOT matche the typeof value 
            // if it's NOT a match return false (this ends the iteration)    
            // if it is a match, keep searching
            // if it gets to the end of the iteration (this means all of them were a match), return true
function validate(obj) {
    // iterate each item in the obj 
    for (let item in obj) {
        // edge cases: (if the value type is "array", it could be an obj or array, since typeof does not recognize array)
        if (item === "array") {
            if (!Array.isArray(obj[item])) return false;
                return true;
        }
        // check if it's NOT a match > return false 
        if (item !== typeof(obj[item])) {
            return false;  
        } 
    }
    return true;      
}

console.log(validate({ string: 4, number: 4 }) === false);
console.log(validate({ string: "3", number: 3 }) === true);
console.log(validate({ boolean: "false" }) === false);
console.log(validate({ boolean: false }) === true);
console.log(validate({ number: 0 }) === true);
console.log(validate({ array: {}, object: [] }) === false);
console.log(validate({ array: [{}] }) === true);
console.log(validate({ object: { test: true } }) === true);
console.log(
  validate({
    string: "4",
    number: 5,
    boolean: false,
    array: [],
    object: { 3: "hi" },
  }) === true,
);