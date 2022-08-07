### Looping:

When you have to loop over any iterable data (string, array, objects etc…), think about a flow chart to pick the right looping tool for the task. Think about the simplest tool possible, and also being declarative over imperative. The steps are essentially:

1. Can I get away with using `for` ? If it’s a simple loop that increments/decrements the same number per iteration, probably.

1. Is it an array? If so, think about all the array methods

1. If I just want to loop and do something on each item, use `forEach`
2. If I need to return another array with the same exact size as the original, use `map`
3. If I need to return another array with a smaller size, use `filter`
4. If I need to return a boolean based on the entire array, use `every` or `some`
5. If I need to return something that’s not an array, use `reduce` which is the most flexible

1. If the looping logic is more complex where you need logic to jump in different numbers depending on logic, use a pointer and a while loop instead.

**Example 1:**
“Given an array of numbers, add 10 to all odd numbered indices”
input: [12, 34, 56, 62, 4, 14]
answer output: [12, `38`, 56, `66`, 4, `18`]Thought process - Can I use a “for” type loop? [think ahead about how to solve]. My plan is to increment by 1 and check to see if the index is odd, so yes I can use a `for loop`. Am I returning another array? Yes, I can use a `.map()`

**Example 2:**
“Given a string, console log each character. As exceptions, if you see the letter “a”, skip to the next letter. If you see the letter “A”, skip that letter and the next one. If you see “Z”, skip that letter and the next *two* letters
Input  “ZooAndHang”

Answer Output prints “dHng” (Skip “Z” + 2 more, Skip “A” + 1 more, print “d, H”, skip “a”, print “n, g”Thought process - Can I use a for loop (or any array methods)? Probably not because I’d want to increment by either 1, 2, or 3 depending on the conditions.

Use a pointer and while loop instead like:

```javascript
let i = 0;
while (i < word.length) {
  const currChar = word[i]
  if (currChar === "Z") {
  i += 3;
}  else if (currChar === "A") {
  i += 2;
}  else if (currChar === "a") {
  i++;
}  else {
  // logic for printing
}

}
```



##### Unlike regular for loops, most array methods can NOT be cut short mid-loop. 

It is easy for forget this because `forEach` loops are very similar to for loops, but there are two common gotchas.

1. `break / continue` keywords don’t work

```javascript
function forEachIsUnbreakable(arr) {
  arr.forEach(item => {
     if (item === 1) break;
  }
   return 'exiting function';           
}

// running this will throw Error "Illegal break statement"
```

2. Returning a value in a forEach doesn’t stop the loop

```javascript
function theUnstoppableForeach(arr) {
   arr.forEach((item, idx) => {
     if (idx === 0) return true;
     if (idx === 1) return false;
     else return 0;
   })
    return 'forEach does not care about return values and marches on';
}

// run this 
theUnstoppableForeach([0,1,2]); 
```

3. This concept is not just true for `forEach`, but *most* popular array methods including `map`, `filter`, `array`

All of these methods under a single mission “do something to each array item”The two most common ways of having this logic in an array are `some` and `every` array methods but they only work if you want to return a boolean type



**[Sue Anschutz](https://app.slack.com/team/U0394R56BE1)**[6:01 AM](https://codinggurusak-mxy4323.slack.com/archives/C03L8AE0258/p1657026075243839)

Love this! Yes, #2 is important, and even trickier to really internalize, I think. The thing about forEach is that since it always returns undefined (or throws an error, like in the “break” situation Hideaki described...I didn’t know about that!) it doesn’t even have a place to stash return values. Map and filter at least return arrays, so if you put a return statement in a function that you pass to map for example, at least map will say “fine, for each item I’ll stash that value you asked me to return into an array and you can do what you want with it after I’m done, but I’m still going to keep going until I finish looping through ALL of these items in the array you gave me”. forEach on the other hand, since it doesn’t return an array, doesn’t even have a place to stash all those return values, so they’ll just basically get tossed. Might be helpful to compare these two examples with the above in mind:

```javascript
function theUnstoppableForeach(arr) {
  let answers = arr.forEach((item, idx) => {
   if (idx === 0) return true;
   if (idx === 1) return false;
   else return 0;
  })
  return answers;
}

// run this 
console.log("theUnstoppableForeach return value: ", theUnstoppableForeach([0,1,2])); 


function theUnstoppableMap(arr) {
  let answers = arr.map((item, idx) => {
   if (idx === 0) return true;
   if (idx === 1) return false;
   else return 0;
  })
  return answers;
}

// run this 
console.log("theUnstoppableMap return value: ", theUnstoppableMap([0,1,2]));
```