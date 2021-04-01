/* Is "else" required?

The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
} */

function checkAge(age) {
  if (age > 18) {
    return true
  } else {
    // ...
    return confirm('Did parents allow you?')
  }
}

function checkAge1(age) {
  if (age > 18) {
    return true
  }
  // ...
  return confirm('Did parents allow you?')
}

function confirm(message) { return message }

const age = 15
console.log(checkAge(age))
console.log(checkAge1(age))