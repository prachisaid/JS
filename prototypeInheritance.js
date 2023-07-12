const proto = {
    name : "Harry",

    role : "Programmer",

    slogan : function(){
        return "This company is the best"
    },

    changeName : function(name){
        this.name = name
    }
}

//This creates harry object
// const harry = Object.create(proto)
const harry1 = proto
// harry.name = "harry"
// harry.role = "Programmer" // we can add from here
// harry.changeName("Hello")

// This creates harry object
// const harry1 = Object.create(proto, {
//     name : {value: "harry", writable:true},
//     role : {value: "programmer"}
// })

harry1.changeName("Hello")

// console.log(harry1)

function Employee(name, salary, experience){
    this.name = name
    this.salary = salary;
    this.experience = experience
}

Employee.prototype.slogan = function(){
    return `This company is best. Regards ${this.name}`
}

let harry = new Employee("Harry", 245500, 87)
// console.log(harry.slogan())

function Programmer(name, salary, experience, language){
    Employee.call(this, name, salary, experience)
    this.language = language
}

//Inherit the prototye
Programmer.prototype = Object.create(Employee.prototype)

//Manually set the constructor
Programmer.prototype.constructor = Programmer

let rohan = new Programmer("Rohan", 23444, 12, "JavaScript")
// console.log(rohan)


function Flour(egg, flour){
    this.egg = egg
    this.flour = flour;
    // this. = cocoPowder;
}

Flour.prototype.display = function(){
    return "This is flour class";
}

let flour = new Flour(2, "Maida")
console.log(flour.display())

function Cake(egg, flour, flavor){
    Flour.call(this, egg, flour)
    this.flavor = flavor
}

//Inheriting the prototype
Cake.prototype = Object.create(Flour.prototype)

//Manually setting the constructor 
Cake.prototype.constructor = Cake

Cake.prototype.cakeFlavor = function(){
    return `The flavor of this cake is ${this.flavor}`
}

let vanilla = new Cake(4, "BakingPowder", "Vanilla");
console.log(vanilla.cakeFlavor())
console.log(vanilla)

