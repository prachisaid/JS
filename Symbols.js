console.log("Symbols in js")


// Symbols are unique primitive values with same type
const sym1 = Symbol("Identifier");
const sym2 = Symbol("Identifier");
console.log(sym1 == sym2)

let k1 = Symbol("Identifier for k1 ")
let k2 = Symbol("Identifier for k2 ")

let obj = {};

obj[k1] = "String";
obj[k2] = "String2";
obj["name"] = "Prachi"
// console.log(obj)
// console.log(obj[k2])

// Symbols are ignored in for in loop
for(let key in obj){
    console.log(key, obj[key])
}

console.log(JSON.stringify(obj))
