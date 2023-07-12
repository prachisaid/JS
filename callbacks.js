console.log("Callback functions")

function greet(a, b, operation){
    console.log("Values of A and B are ", a, b);
    operation(a, b);
}

function adddition(a, b){
    console.log(a+b);
}

greet(2, 3, adddition) //windows + .

function getValue(callback){
    setTimeout(function() {
        let cheese = '🧀';
        callback(cheese)
    }, 3000);

    document.body.style.backgroundColor = 'magenta'
}

getValue(function(cheese){
    console.log("Here is your cheese " +cheese)
})

