/* Which values get shown by the "for" loop?

For each loop write down which values it is going to show. Then compare with the answer.

Both loops alert same values or not?

The postfix form:

for (let i = 0; i < 5; i++) alert( i );
The prefix form:

for (let i = 0; i < 5; ++i) alert( i ); */

for (let i = 0; i < 5; i++) console.log(i) // 0, 1, 2, 3, 4

console.log()

for (let j = 0; j < 5; ++j) console.log(j) // 0, 1, 2, 3, 4