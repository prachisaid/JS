// Object literal for creating objects
let car = {
    name : "Maruti 800",
    topSpeed : 89,
    run : function(){
        console.log("Car is running")
    }
}

//Using constructor
// creating a constructor for cars

function generalCar(name, topSpeed){
    this.name = name
    this.topSpeed = topSpeed
    this.run = function(){
        console.log(`${this.name} is running`)
    }
}

car1 = new generalCar("nissan", 180)
car2 = new generalCar("maruti", 189)
console.log(car1)