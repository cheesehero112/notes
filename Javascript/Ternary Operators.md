# Ternary Operators

\- Ternary operators are great to use when you have exactly 2 paths, A and B

#### Examples of ternary assignment:

```javascript
const age = 22;
const canDrinkStr = age >= 21 ? "Yes" : "No";
  // if age is >= 21, assign the left part of the ternary. If not, the right part

  // what's really cool is, you'd have to do all of this if you didn't use a ternary

  const age = 22;
  let canDrinkStr;
  if (age >= 22) canDrinkStr = "Yes"
  else canDrinkStr = "No"

  With the ternary you can use const instead of let!
// another example using truthy/falsy
  const bool = true;
  const num = bool ? 3 : 30;
  // if the variable, "bool" truthy? If yes, assign 3. If not, assign 30
```

\- what if you want to refactor something like this?

```javascript
if (today === "wednesday") return A
else return B
```

\- in ternary operators, you can not add the word `return` after the condition. You do it before`return today === "wednesday" ? A: B;`

// same exact thing as the code block above- if you are using arrow function with implicit returns, you can chain that with ternary such that the `return` part before the ternary is omitted

```javascript
// write a function that takes in any type. If it is a string, return "string". If it's not a string, return "not string"

const strOrNah = (any) => typeof any === "string" ? "string" : "not a string";

strOrNah("hey") -> "string"
strOrNah(3) -> "not a string"
strOrNah(null) -> "not a string"
```

 