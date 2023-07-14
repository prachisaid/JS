console.log("Callback functions")

function greet(a, b, operation){
    console.log("Values of A and B are ", a, b);
    operation(a, b);
}

function adddition(a, b){
    console.log(a+b);
}

greet(2, 3, adddition) //windows + .

function getCheese(callback){
    setTimeout(function() {
        let cheese = '🧀';
        callback(cheese)
    }, 3000);

    // document.body.style.backgroundColor = 'magenta'
}

function makeDough(cheese, callback){
    setTimeout(function(){
        let dough = cheese + '🍞'
        callback(dough)
    }, 2000)
}

function bakePizza(dough, callback){
    setTimeout(() => {
        let pizza = dough + '🍕';
        callback(pizza)
    }, 2000);
}

// getCheese(function(cheese){
//     console.log("Here is your cheese " +cheese)
// })

getCheese(function(cheese){
    makeDough(cheese, function(dough){
        bakePizza(dough, function(pizza){
            console.log("Got the cheese " + " and dough "+ " and made the pizza "+pizza)
        })
    })
})


const students = [
    {name : "Prachi", subject : "Javascript"},
    {name : "Sanika", subject : "PHP"}
]

function enrollStudent(student){
    setTimeout(function() {
        students.push(student);
        console.log("Student added")
    }, 5000);
}

function getStudent(){
    setTimeout(function() {
        students.forEach(function(element){
            console.log(element.name)
            console.log(element.subject)
        })
    }, 1000);
}


function enrollStudent(student, callback){
    setTimeout(function() {
        students.push(student);
        console.log("Student added")
        callback();
    }, 5000);
}

function getStudent(){
    setTimeout(function() {
        students.forEach(function(element){
            console.log(element.name)
            console.log(element.subject)
        })
    }, 1000);
}

let data = {name : "x", subject: "xyz"}
enrollStudent(data, getStudent)