console.log("Sets in js")

// Set stores unique values
let set = new Set();

set.add('this')
set.add('myname')
set.add('myname')
set.add('that')
set.add(90)
set.add({name : "Prachi"})
set.add(false)

// console.log(set.has('this'))
console.log(set)

// set = new Set([10, 2, 21, 2, 3, 8, 90])
// console.log(set)

console.log(set.size)
console.log(set.delete('myname'))
console.log(set)

// Truncates the entire array
console.log(set.clear('that'))

let arr = [1, 2, 2, 3, 10, 22, 2, 5];
console.log(arr)

set = new Set(arr)
arr = Array.from(set)
console.log(arr)

// ITERATING A SET

for(let key of set){
    console.log(key)
}

set.forEach(function(value){
    console.log(value)
})