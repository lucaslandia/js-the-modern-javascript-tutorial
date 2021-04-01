/* Array operations.

Let’s try 5 array operations.

1. Create an array styles with items “Jazz” and “Blues”.
2. Append “Rock-n-Roll” to the end.
3. Replace the value in the middle by “Classics”. Your code for finding the middle value should work 
for any arrays with odd length.
4. Strip off the first value of the array and show it.
5. Prepend Rap and Reggae to the array.

The array in the process:

Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll */

const styles = ['Jazz', 'Blues']
styles.push('Rock-n-Roll')
styles[Math.trunc(styles.length / 2)] = 'Classics'
console.log(styles.shift())
styles.unshift('Rap', 'Reggae')
console.log(styles)