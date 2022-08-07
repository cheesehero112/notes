### On arrow function returns:

So this may be review, but when using arrow functions, you can shorthand it if you are returning a one liner

```
const long = () => {
return true;
}

const short = () => true;   

// these are exactly the same. In the 2nd one, we removed "return" and the curly braces
// with args now

const longWithArgs = (num1, num2) => {
  const total = num1 + num2;
  return total;
}

const shortWithArgs = (num1, num2) => num1 + num2;

// also the same
```

What’s really important to remember is that the `return` is automatically implied in the shorthand version.

```
// what if the return statement is an object? 
// objects already use curly braces... so do function bodies

const objectReturnLong = (obj) => {
  return obj;
}
const badObjectReturnShort = (obj) => {obj} // will error out!

// here js is confused because the curly braces are being interpreted as the long version.

SOLUTION - add parenthesis if you are short hand returning an OBJECT

const goodObjReturnShort = (obj) => ({obj})   // tells js "hey get ready for an object. I'm not going to use the long hand curly braces!
```

Putting it all together in reduce

```
// some algo that uses reduce

// input is an array of objects.

const long = (arr) => {
  return arr.reduce((acc, curr) => {
    return {...acc, ...curr}; // combine all key-value pairs as one object
}, {})
}

// This is the most readable way in my opinion. but some would short hand the INNER reduce (the part that starts with arr.reduce)

so now it's 

const shorter = (arr) => {
  return arr.reduce((acc, curr) => ({...acc, ...curr}), {});
};

// note that we surrounded the return object with parenthesis. "(acc, curr) => ({obj})" is the 1st arg, and {} is the 2nd arg
// this is shorter but harder to read

// NOW some would even shorten the first outer function so...

const shortest = (arr) => arr.reduce((acc, curr) => ({...acc, ...curr}), {});

// this is pretty impossible to read in my opinion, but you may see this in a codebase!
```