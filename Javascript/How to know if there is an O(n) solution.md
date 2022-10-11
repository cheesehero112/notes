# How to know if there is an O(n) solution

There are several ways to ESTIMATE the optimal (best possible) time complexity. The most intuitive method is by thinking about the minimal amount of effort necessary.



#### Here is an example challenge:

```
Callenge: Exclusive Sum

Given an array of numbers, return an array of sums where the value at each index of the output array is 
the sum of the the values at all other indices of the input array

Ex:

[1, 3, 4, 2] -> [9, 7, 6, 8], since 9 = 3 + 4 + 2, 7 = 1 + 4 + 2, 6 = 1 + 3 + 2, and 8 = 1 + 3 + 4

Bonus 1: Get exclusiveSum to work without nested loops
Bonus 2: Modify this function to be 'exclusive product'

Ex:

[1, 3, 4, 2] -> [24, 8, 6, 12]

Make sure your solution can handle zeros! */
```



In this problem and other array problems, a common trick is to ask yourself, “Do I need to look at every item of the array(s) to get the answer?” Think of an easier algo. What if the algo was “get the total of this number array”. Is it possible to solve this if the array looked like `[1,5,13, ?]` where the last item was hidden? No. Because you need to add that mystery number.

So now you know that AT THE VERY LEAST, you need to look at every item of the array. And if you need to do that, that’s linear time or O(n). Most often, you can get the minimal effort time complexity so asking yourself that question will usually lead to “Oh I can probably solve this with O(n)”.

Then you backtrack, and see how you get your current solution optimized for O(n). So the thought process of improving example solution 1 to `exclusiveSum`, can look like this:

1. The first solution uses reduce inside that `for loop` so this is currently O(n ^ 2).
2. Do I need to look at every item for this? Yes. This is probably doable in O(n)
3. What’s the fix for this? Oh it’s the computation of getting the total inside the for loop



##### Example 1: Original solution with O(N^2) time complexity

```javascript
// Original solution - this one is O(N^2)
// input: array
// output: array
function exclusiveSum(arr) {
    // check to see if inputs are correct 
    if (!Array.isArray(arr)) {
        throw new TypeError('wrong input type, "arr" must an array');
    }
    // make an output array
    const outputArr = [];
    // iterate the input array
    for (let i = 0; i < arr.length; i++) {
        // use reduce to add all the numbers in the array and subtrac current element 
        const sum = arr.reduce((a, b) => a + b) - arr[i];   
        // each result will be added into the output array 
        outputArr.push(sum);
    }
    // return the output array
    return outputArr;
}

function exclusiveSumTests() {
    console.log(exclusiveSum([1,3,4,2]), ' -> ', [9, 7, 6, 8]);
    console.log(exclusiveSum([1,2,5]), ' -> ', [7, 6, 3]);
    console.log(exclusiveSum([1,2,5,0]), ' -> ', [7, 6, 3, 8]);
    console.log(exclusiveSum([1]), ' -> ', [0]);
  }
  
  exclusiveSumTests() // uncomment to test
```





##### Example 2: Improved solution with O(N) time complexity

```javascript
// Bonus 1 : 2nd solution > make it O(n)
function exclusiveSum(arr) {
    // check to see if inputs are correct 
    if (!Array.isArray(arr)) {
        throw new TypeError('wrong input type, "arr" must an array');
    }
    // add every element in the array using reduce
    const sum = arr.reduce((a, b) => a + b);
    const outputArr = [];
    // In each iteration, add sum - current element into the outputArr
    arr.forEach((num) => outputArr.push(sum - num));
       
    return outputArr;
}

```

In this solution, sum of the array is done outside of the `forEach()`, thus making the time complexity O(n).

