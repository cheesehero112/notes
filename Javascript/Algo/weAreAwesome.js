'use strict';
// Write a function weAreAwesome that takes you and your pair programming partner's name and returns the string "[your buddy's name] and [you] are awesome!"

// inputs: strings (1. buddy's name, 2. your name)
// output: string "[your buddy's name] and [you] are awesome!"

const weAreAwesome = (buddy, me) => `${buddy} and ${me} are awesome!`;

// TEST
console.log(weAreAwesome('Justin', 'Chihiro')); // should log "Justin and Chihiro are awesome!"
