# forEach vs. for loop - what is the difference?



### Definitions of both:

- The **`forEach()`** method executes a provided function once for each array element.

  - Syntax: 

    `// Arrow function`
    `forEach((element) => { /* ... */ })
    forEach((element, index) => { /* ... */ })
    forEach((element, index, array) => { /* ... */ })`

    `// Callback function`
    `forEach(callbackFn)`
    `forEach(callbackFn, thisArg)`

    `// Inline callback function`
    `forEach(function(element) { /* ... */ })
    forEach(function(element, index) { /* ... */ })
    forEach(function(element, index, array){ /* ... */ })
    forEach(function(element, index, array) { /* ... */ }, thisArg)`

  - Parameters:

    - callback function: function to execute on each element
    - element: current element being processed in the array
    - Index: the index of element in the array
    - Array: the array `forEach( )` was called upon
    - thisArg (optional): value to use as `this` when executing `callback function`

  - Return value: undefined



- The **for statement** creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a [block statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)) to be executed in the loop.

  

  - Syntax: 

    `for ([initialization]; [condition]; [final-expression])statement`

    - Initialization:
    - Condition:
    - Final expression:
    - Statement: 



### Major Differences 

- `for-loops` do not require an existing array to run, giving for-loops more flexibility
- `for-loops` have access to the break statement to stop the loop, while `.forEach()` does not as it is a function
- `for-loops` has a slightly better performance metrics than `.forEach()`
- `.forEach()` is an alternative to for-loops if you know are iterating over an Array and want to write less code and improve readability



### Conclusion

`for-loops` are a great choice if I'm looking for a better performance as they are more flexible. `.forEach()` is a great alternative when readability and having less code is more important

