/* How many seconds have passed today?

Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

For instance, if now were 10:00 am, and there was no daylight savings shift, then:

getSecondsToday() == 36000 // (3600 * 10)

The function should work in any day. That is, it should not have a hard-coded value of “today”. */

console.log(getSecondsToday())

function getSecondsToday() {
    const now = new Date(), today = new Date().setHours(0, 0, 0, 0)
    return (now - today) / 1000
}

function getSecondsToday() {
    const now = new Date()
    return now.getHours() * 60 * 60 + 
        now.getMinutes() * 60 + 
        now.getSeconds() + 
        now.getMilliseconds() / 1000
}