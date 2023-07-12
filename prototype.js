// with the help of object.prototype we created this object (by default template)
let obj = { 
    name : "Harry",
    channel : "codewithharry",
    adress : "Mars"
}

console.log(obj)

// It has its own prototype (new prototype) --> inherited from the object prototype chaining type
function Obj(name){
    this.name = name;
}

//Chnaging the prototype of object -- we cant change object literal prototype
Obj.prototype.getName = function(){
    return this.name
}

Obj.prototype.setName = function(newName){
    this.name = newName
}

// Object.prototype.getName = function(){
//     return this.name
// }

let obj1 = new Obj("Prachi")
console.log(obj1)

let obj2 = new Obj("Rohan Das")
obj2.setName("Pratham")
console.log(obj2)
