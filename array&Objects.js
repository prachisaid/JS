const marks = [3, 67, 89, 100]
const fruits = ["Mango", "Apple", "Orange"]
const mix = ["Str", 90, 89, [34, 23]]
console.log(mix)

const arr = new Array(12, 13, "lll");
console.log(mix.length)
console.log(Array.isArray(arr))
console.log(marks.indexOf(99))

//Mutating
marks.push(80)
marks.unshift(1009)
marks.pop()
marks.shift()
marks.sort()
console.log(marks)
