# Staircase Problem Notes:

//Challenge 

- Write a function that console logs a staircase of any given height where 1 <= N <= 100. 

- The staircase must climb up from left to right. 

- The last line should only consist of asterisks, without any leading/trailing spaces.

- Example of how it should look like if N is 5:

  ![staircaseEx](/Users/chihiroshibayama/Desktop/staircaseEx.png)

### Solution 1)

Although this solution is shorter, it is more complicated to understand why & how it's working.

```javascript
"use strict";
// function drawStairs
// input: a number
// output: strings (in staircase shape)

function drawStairs(n) {
    // create a condition to check if the input n is within the range
    if (n > 100 || n < 1) {
        console.log("Please put a different number. Input range: 1 - 100");
    } else {
      // using an outer loop, keep track of how many rows are needed 
			for (let i = n; i > 0; i--) {
        let output = '';
    	// using an inner loop, draw space or star
  		for (let j = 1; j <= n; j++) {
        if (j < i) {
          output += ' ';
        } else {
            output += '*';
        }
    }
   // console.log the current output inside the loop
   console.log(output);
	}
      
    }

}

drawStairs(5);
```



### Solution 2)

```javascript
// take 2 on the same challenge:

// how can I create a function to draw each line based on number of spaces and stars?

function lineMaker(spaceCount, inputNum) {
    let output = '';
        for(let i = 0; i < spaceCount; i++) {
            output = output + '-';          
        }
        for(let j = 0; j < inputNum - spaceCount; j++) {
            output = output + '*'
        }
    return output;    
}
//this is a test console.log for lineMaker function
//console.log(lineMaker(4, 5)); // logs ---** as expected

//now write a function drawStairs that calls lineMaker n times
function drawStairs(n) {
  // create a condition to check if the input n is within the range
    if (n > 100 || n < 1) {
        console.log("Please put a different number. Input range: 1 - 100");
    } else {
        for (let i = 1; i <= n; i++) {
            console.log(lineMaker(n-i, n));
        }
    }
      
}

drawStairs(5); // this draws the stairs as pictured above
drawStairs(101); // this will log Please put a different number. Input range: 1 - 100"
```



