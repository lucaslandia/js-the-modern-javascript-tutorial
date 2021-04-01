/* Using "this" in object literal

Here the function makeUser returns an object.

What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // What's the result? */

function makeUser() {
  return {
    name: "John",
    ref: this
  }
}
let user = makeUser()
console.log(user.ref.name) // undefined 