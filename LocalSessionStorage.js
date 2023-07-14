console.log("Local Storage")

localStorage.setItem("Name", "Harry")
localStorage.setItem("RollNo", [12, 13, 13])
localStorage.setItem("Array", JSON.stringify([12, 13, 14]))

let name = localStorage.getItem("Name")
// localStorage.clear(); clears entire storage from localstorage

// Clearing particular key value pair
localStorage.removeItem("Name")
console.log(typeof(localStorage.getItem("RollNo")))

// console.log(name)
console.log(JSON.parse(localStorage.getItem("Array")))

// sessionStorage.setItem("SessionName", "Harry")
// sessionStorage.setItem("SessionRollNo", 21473)
// sessionStorage.setItem("SessionArray", JSON.stringify([12, 13, 14]))