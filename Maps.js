console.log("Maps in js")

const map = new Map()
// console.log(map)

const key1 = 'mystr', key2 = {}, key3 = function(){}

// Setting map values
map.set(key1, "This is a string")
map.set(key2, "This is a blank obj")
map.set(key3, "This is a function")
// console.log(map)

// Getting the values from a map
// console.log(map.get('mystr'))
// console.log(map.get(key2))
// console.log(map.size)

// for(let [key, value] of map){
//     console.log(key + " " + value)
// }

// for(let key of map.keys()){
//     console.log(key)
// }

// for(let key of map.values()){
//     console.log(key)
// }

map.forEach(function(value, key){
    console.log("Key is " , key)
    console.log("Value is ", value)
})

//Converting map to array
let arr = Array.from(map) // for values = map.values() & for keys = map.keys()
console.log(arr)