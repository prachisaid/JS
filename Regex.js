console.log("Regular expression")

// This is a regular expression literal in js
// let reg = /harry/g
// let reg = /Harry/i
// let reg = /harry/ig
let reg = /harry/gi

console.log(reg.source)

let s = "This is great harry code with harry and also haRry can"

// 1. exec() - Returns an array for match or null for no matcch

let result = reg.exec(s)
console.log(result) // if not matched returns null

// result = reg.exec(s)
// console.log(result)

// result = reg.exec(s)
// console.log(result)


// 2. test() - Returns true if match else false
result = reg.test(s);
console.log(result)

// 3. match() - Returns an array of results or null
result = s.match(reg)
console.log(result)

// 4. search() - Returns index of first match else -1
result = s.search(reg)
console.log(result)

// 5. replace() - Returns new replaced string with all the replacement
result = s.replace(reg, "PRATHAM")
console.log(result)