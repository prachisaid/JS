// Type conversion and coercion 

let myVar;

myVar = String(23) //connverting into string
console.log(myVar, typeof(myVar))

let boolval = String(true) //converting bool to string
console.log(boolval, typeof(boolval)) 

let date = String(new Date()); //converting obj to string
console.log(date, typeof(date))

let arr = String([1,2,3,5,6])
console.log(arr.length)

// toString() --> to convert into string

let stri = Number("1234"); //converting string into number

let str = Number("a"); // converting a letter into number will give NaN value (when it will have a 
// problem converting into number it'll return NaN)

console.log(Number(true))

let number = parseInt('35') // converts into integer value
console.log(number, typeof(number))

let num = parseFloat('234.90')
console.log(num, typeof(num))

console.log(num.toFixed(20))

// toFixed(number of decimal points)

//Type Coercion
let myStr = "098"
let myNum = 89;

console.log(myStr+myNum)
//converts the number into string and concats it with string 
