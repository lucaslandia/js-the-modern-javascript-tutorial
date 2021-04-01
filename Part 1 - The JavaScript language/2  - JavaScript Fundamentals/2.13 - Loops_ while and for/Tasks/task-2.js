/* Which values does the while loop show?

For every loop iteration, write down which value it outputs and then compare it with the solution.

Both loops alert the same values, or not?

The prefix form ++i:

let i = 0;
while (++i < 5) alert( i );
The postfix form i++

let i = 0;
while (i++ < 5) alert( i ); */

let i = 0
while (++i < 5) console.log(i) // 1, 2, 3, 4

console.log()

let j = 0
while (j++ < 5) console.log(j) // 1, 2, 3, 4, 5

