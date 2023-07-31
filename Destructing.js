console.log("Destructuring in JS")

let a, b
[a, b] = [20, 234]

console.log(a, b);

[a, b, c, ...d] = [12, 13, 13, 14, 15, 17, 19, 20];
// console.log(a, b, c, d)
({a, b, c, ...d} = {a : 30, b : 40, c:40, d:38, e:60});
console.log(a, b, c, d)

const fruits = ['Apple', 'Banana', 'Mangoes'];
[a, b, c] = fruits;
console.log(a, b, c)

// Object Destructuring

laptop = {
    model : "Hp Pavilion",
    age : "23 days",
    gender : "Male",
    net : 1234,
    start : function(){
        console.log("Started")
    }
};

const {model, age, gender, net, start} = laptop
console.log(model, age, gender, net, )