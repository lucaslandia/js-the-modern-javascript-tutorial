/* Can I add a string property?

Consider the following code:

let str = "Hello";

str.test = 5;

alert(str.test);
How do you think, will it work? What will be shown? */

let str = "Hello"
str.test = 5
console.log(str.test) // undefined