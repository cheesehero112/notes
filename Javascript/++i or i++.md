# ++i or i++??

Difference of `i--` and `--i` (or `++`). When the `--` operator is used *postfix*, or after the variable, then the value is returned **BEFORE** decrementing.

When the `--` operator is used *prefix*, or before the variable, then the value is returned **AFTER** decrementing.

```
let i = 3;
let j = 3;

y = i--;  //y = 3, i = 2
x = --j;  //x = 2, j = 2
```