## Array.reduce()

When using reduce, be aware that this is the MOST flexible and powerful array method, but also (probably) the most difficult array method to understand by a large marginThe first thing to understand is what the other common array methods do:

-  forEach() - doesn’t return anything, but you can do stuff. if you ever `return arr.forEach(() => { // code })`, that will ALWAYS be undefined.
-  map() - returns an array. You can control some logic, but the length of the returned array will always be the same length as the original array.  return [1,2,3].map(() => { return stuff })  will always return another array that has a length of 3!
-  filter() - returns an array. You can control logic, and the length will vary
-  every() / some() - returns a boolean
-  reduce() - can return ANYTHING. number, string, boolean, array, object, function!

So in terms of picking the right tool, go by what you need to be returned. If you need to loop through an array AND return something that’s NOT an array all in one go, that’s when you use reduce

```
const arr = ['a', 'b', 'c'];

// as a reminder, the reduce method takes in 2 args. The first is a function which automatically has 3 parameters (accumulator, current, and index) that you can use inside the function body. The second is a default value of ANY type

arr.reduce((acc, curr, index) => {
  // index is the index of this item. for this example, it will be 0 or 1 or 2
  // curr is the array item on this index. for this example, it will be 'a' or 'b' or 'c'
  // the acc for ONLY index 0 is the optionalStartingVal, which can be ANY DATA TYPE!
    // starting index 1, the acc is whatever that's returned BELOW this 
  return <this becomes the acc when we move to the next index!>
}, <optionalStartingVal>)
```

