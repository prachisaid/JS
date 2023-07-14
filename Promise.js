console.log("Promises in js")

function func1(){
    return new Promise(function (resolve, reject){
        const error = true;
        if(!error){
            console.log("Your Promise has been resolved")
            resolve();
        }
        else{
            console.log("Promise rejected")
            reject("Sorry Promise Rejected")
        }
    })
}

// let ans = func1().then(function(){
//     console.log("This is called when resolved")
// }).catch(function(param){
//     console.log(param + " This is called when rejected")
// })

const students = [
    {name : "Prachi", subject : "Javascript"},
    {name : "Sanika", subject : "PHP"}
]

function enrollStudent(student){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            let error = false;
            students.push(student);
            console.log("Student added")
            if(!error){
                resolve();
            }
            else{
                reject();
            }
        }, 5000);
    })
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
enrollStudent(data).then(function(){ 
    getStudent()
}).catch(function(){
    console.log("Sorry")
})

// then gets called when resolved
// catch gets called when rejected
