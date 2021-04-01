/* Show a weekday

Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

For instance:

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU" */

let date = new Date(2012, 0, 3)
console.log(getWeekDay(date))

function getWeekDay(date) {
    switch (date.getDay()) {
        case 0: return 'SU'; break
        case 1: return 'MO'; break
        case 2: return 'TU'; break
        case 3: return 'WE'; break
        case 4: return 'TH'; break
        case 5: return 'FR'; break
        case 6: return 'SA'; break
    }
}

function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']
    return days[date.getDay()]

}