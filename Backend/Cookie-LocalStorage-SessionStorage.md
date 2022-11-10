# How to use Cookie, LocalStorage, SessionStorage



#### How to use localStorage

```javascript
localStorage.setItem('name', 'Justin'); // sets name: Justin`

console.log(localStorage.getItem('name')); // logs Justin`

localStorage.removeItem('name'); // removes name: Justin from the localStorage
```



#### How to use sessionStorage

```javascript
sessionStorage.setItem('name', 'Chihiro'); // sets name: Chihiro`

sessionStorage.setItem('name2', 'Justin'); // sets name2: Justin`

sessionStorage.setItem('name2', 'Chihiro'); // overwrites name2: Chihiro => key must be unique in order to avoid overwriting!`

console.log(sessionStorage.getItem('name')); // logs Chihiro`

sessionStorage.removeItem('name2'); // removes name2: Chihiro
```

![image-20221110073107418](/Users/chihiroshibayama/Library/Application Support/typora-user-images/image-20221110073107418.png)

#### How to create cookies

Cookies are much harder to interact with compared to localStorage and sessionStorage. That is why using a library such as "cookie-parser" is common

Example Code:

```javascript
// 1st argument (key:value string), 2nd argument (expiration date in UTC string)

document.cookie = 'name=Chihiro; expires=' + new Date(2023, 0, 1).toUTCString();

// I can create as many cookies as I want

document.cookie = 'lastname=myLastname; expires=' + new Date(2023, 0, 1).toUTCString();

// The only way to access cookies is to console log.

console.log(document.cookie);
```

![image-20221110072603569](/Users/chihiroshibayama/Library/Application Support/typora-user-images/image-20221110072603569.png)



## Resources:

https://javascript.info/localstorage

https://www.youtube.com/watch?v=GihQAC1I39Q&ab_channel=WebDevSimplified