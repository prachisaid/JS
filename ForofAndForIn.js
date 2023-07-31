console.log("For of and for in loop")

people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"]

// Traditional for loop
// for (let i = 0; i < people.length; i++) {
    // const element = people[i];
    // console.log(element)
// }

let obj = {
    name : {fname : "Harry", lname : "Said"},
    language : "JavaScript",
    hobbies : "Android app development"
}

// Iterating an Object
// console.log(obj)
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element)
    
// }

// for in loop
for(let key in obj){
    console.log(obj[key])
}

let myString = "This is my string"
// for(let char in myString){
//     console.log(myString[char])
// }

// for(let i = 0; i < myString.length; i++){
//     console.log(myString[i])
// }

for(let name of people){
    console.log(name)
}

// Give anything that is iterable
for(let name of myString){
    console.log(name)
}