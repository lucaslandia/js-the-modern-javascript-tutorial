/* A question about "if"

Which of these alerts are going to execute?

What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' ); */

if (-1 || 0) console.log('first') // Yes.
if (-1 && 0) console.log('second') // No.
if (null || -1 && 1) console.log('third') // Yes.