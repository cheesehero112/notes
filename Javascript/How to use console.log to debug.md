# How to use console.log properly to debug



Think of console.log as a key-value pair. Right now you’re only printing out the value, so it’s hard to see what’s happening. If you see:

```
34
"hi"
undefined
```

This is still very mysterious and doesn’t help much. 



Instead, use `console.log("line 12 newSum is: ", newSome);`.

You’d be able to debug in just a few seconds if you saw instead something like:

```
line 12 newSum is: 34
line 24 strLower is: "hi"
line 26 strUpper is: undefined
```

