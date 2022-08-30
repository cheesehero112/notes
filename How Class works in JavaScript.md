# How Class works in JavaScript



1. With constructor functions. Note the upper case first letter

```javascript
function Arr() {
 this.data = {};
  this.push = push;
  this.pop = pop;
  this.unshift = unshift;
// define inner methods here
// don’t return anything
}

// This is how to create a new instance
const customArr = new Arr();

```



2. With classes 

```javascript
class Arr {
	constructor() {
  this.data = {};
	}
  // write methods
  push() {
  // logic
  }
}
// This is how to create a new instance
const myArr = new Arr();
```

