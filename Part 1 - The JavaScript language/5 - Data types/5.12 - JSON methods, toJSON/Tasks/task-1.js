/* Turn the object into JSON and back

Turn the user into JSON and then read it back into another variable.

let user = {
  name: "John Smith",
  age: 35
}; */

const user = {
  name: "John Smith",
  age: 35
}
const jsonUser = JSON.stringify(user)
console.log(jsonUser)
const parsedUser = JSON.parse(jsonUser)
console.log(parsedUser)