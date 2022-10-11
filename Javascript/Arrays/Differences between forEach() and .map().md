# Differences between forEach() and .map()

```javascript
const fruits = ['banana', 'mango', 'apple', 'orange'];

// goal is to add "s" to each word and return a new array

// ['bananas', 'mangos', 'apples', 'oranges']



// using forEach is not ideal for this task

fruits.forEach(function(fruit) {

  let results =[];
  return results.push(fruit + 's');
  console.log(results); 

});

// results will be 4 separate arrays :(
// [ 'bananas' ]
// [ 'mangos' ]
// [ 'apples' ]
// [ 'oranges' ]

// using .map is a better choice for this goal!

const results = fruits.map(function(fruit) {
	return fruit + 's';
})
console.log(results);

// this logs [ 'bananas', 'mangos', 'apples', 'oranges' ]


// forEach also always returns undefined, while map does return 
// a modified array

const numbers = [1, 2, 3];

const plusTwo = numbers.forEach (function(number) {
	return number + 2;
})

console.log(plusTwo); // this will log 'undefined'

// If I use .map()
const plusTwoWithMap = numbers.map (function (number) {
	return number + 2;
}) 

console.log(plusTwoWithMap); // this will log [3, 4, 5]
```

