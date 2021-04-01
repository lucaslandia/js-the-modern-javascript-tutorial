/* Rewrite the function using '?' or '||'

The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

1. Using a question mark operator ?
2. Using OR || */

function checkAge(age) { return age > 18 ? true : 'Did parents allow you?' }
function checkAgeVariant(age) { return age > 18 || 'Did parents allow you?' }
console.log(checkAge(15))
console.log(checkAgeVariant(15))
