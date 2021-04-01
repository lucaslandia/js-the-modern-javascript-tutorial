/* How many seconds till tomorrow?

Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

For instance, if now is 23:00, then:

getSecondsToTomorrow() == 3600

P.S. The function should work at any day, the “today” is not hardcoded. */

console.log(getSecondsToTomorrow())

function getSecondsToTomorrow() {
    const now = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(-~now.getDate())
    tomorrow.setHours(0, 0, 0, 0)
    return (tomorrow - now) / 1000
}

function getSecondsToTomorrow() {
    const now = new Date()
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), -~now.getDate())
    const diff = tomorrow - now
    return diff / 1000
}

function getSecondsToTomorrow() {
    const totalSecondsInAnyDay = 24 * 60 * 60
    const now = new Date()
    const totalSecondsToday = now.getHours() * 60 * 60 + 
        now.getMinutes() * 60 + 
        now.getSeconds() + 
        now.getMilliseconds() / 1000
    return totalSecondsInAnyDay - totalSecondsToday
        
}