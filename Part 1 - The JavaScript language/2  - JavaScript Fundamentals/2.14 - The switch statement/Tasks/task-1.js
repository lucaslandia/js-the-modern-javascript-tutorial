/* Rewrite the "switch" into an "if"

Write the code using if..else which would correspond to the following switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
} */

const browser = 'Opera'
if (browser == 'Edge') 
    console.log('You\'ve got the Edge!')
else if (['Chrome', 'Firefox', 'Safari', 'Opera'].includes(browser)) 
    console.log('Okay we support these browsers too')
else
    console.log('We hope that this page looks ok!')