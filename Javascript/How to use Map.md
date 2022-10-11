# How to use .Map() 



`.Map()` is an object that holds key-value pairs and remembers the original insertion order of the keys. Any value may be used as either a key or a value. 



1. How to create a map object => use `.set()`

```javascript
const myMap = new Map();

myMap.set("peanut butter", "bread");
myMap.set("honey", "tea");
myMap.set("pie", "ice cream");
```



2. How to access Map objects

   - `.keys()` will let you access all of the key values

     ```javascript
     console.log(myMap.keys()); 
     // => will log {"peanut butter", "honey", "pie"}
     ```

   - `.has()`will let you search for a certain word, and return a boolean value if there is a match.

     ```javascript
     console.log(myMap.has("cookie"));
     // => will log false;
     ```

   - `.get()`can get the value of the key you search.

     ```javascript
     console.log(myMap.get("honey")); 
     // => will log tea
     ```

   - `for...of` or `forEach()` to access all of the values

     ```javascript
     for (let [key, value]) {
     	console.log(key + " : " + value);
     }
     
     // notice that in forEach, value has to come before key 
     myMap.forEach((value, key) => {
       console.log(key + " : " + value);
     })
     // => both will log 
     // peanut butter : bread
     // honey : tea
     // pie : ice cream
     ```

   - If you declare a new value with the same key, the old one will be over written. 

     ```javascript
     myMap.set("honey", "bee"); 
     // => if you run the above loop again after this line of code, it will log:
     // peanut butter : bread
     // honey : tea
     // pie : ice cream
     ```

     

3. Map() and object{} are essentially the same, but depending on the purpose, you can choose one or the other. 