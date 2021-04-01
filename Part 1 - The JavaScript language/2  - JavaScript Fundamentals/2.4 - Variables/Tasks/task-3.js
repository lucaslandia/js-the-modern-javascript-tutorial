/* Uppercase const?

Examine the following code:

const birthday = '18.04.1982';
const age = someCode(birthday);

Here we have a constant birthday date and the age is calculated from birthday with the help of some code (it is not provided for shortness, and because details don’t matter here).

Would it be right to use upper case for birthday? For age? Or even for both?

const BIRTHDAY = '18.04.1982'; // make uppercase?
const AGE = someCode(BIRTHDAY); // make uppercase? */

const BIRTHDAY = '09.01.1985'
const age = getAge(BIRTHDAY)

function getAge(birthday) {
    const todayDate = new Date()
    const birthdayDate = new Date(birthday.slice(6, 4), birthday.slice(4, 2), birthday.slice(0, 2))

    return 
}