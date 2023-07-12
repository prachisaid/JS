let today = new Date()
let otherDate = new Date('8-4-2003 04:54:08')
console.log(today) // gives today's date

// otherDate = new Date('June 13 1972')
// otherDate = new Date('09/16/1988')

let a  = otherDate.getDay()
a = otherDate.getDate()

a = otherDate.getHours()
a = otherDate.getMinutes()
a = today.getTime()  // Number of seconds since 1 jan 1970

a = today.getFullYear()
a = today.getMonth()

otherDate.setDate(6);

console.log(otherDate)
console.log(a)