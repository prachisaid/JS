console.log("Ajax")

let fetchbtn = document.getElementById('fetchbtn')
fetchbtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler(){
    console.log("In btn click")

    // Instantiate an xhr obj
    const xhr = new XMLHttpRequest();

    // Open the Object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)

    // old function

    xhr.onreadystatechange = function(){
        console.log(xhr.readyState)
    }

    // What to do on progress
    xhr.onprogress = function(){
        console.log("On progress")
    }
    
    // What to do when response is ready
    xhr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }

    xhr.send();

    console.log("We are done")
}

// https://dummy.restapiexample.com/api/v1/create

let backupbtn = document.getElementById('backupbtn')
backupbtn.addEventListener('click', function(){
    // Instantiate an xhr obj
    const xhr = new XMLHttpRequest();

    // Open the Object
    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true)
    xhr.getResponseHeader('Content-type', 'application/json');

    // old function

    xhr.onreadystatechange = function(){
        console.log(xhr.readyState)
    }

    // What to do on progress
    xhr.onprogress = function(){
        console.log("On progress")
    }
    
    // What to do when response is ready
    xhr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }

    params = `{"name":"test299","salary":"122","age":"21"}`;

    xhr.send(params);

    console.log("We are done")
})

// https://dummy.restapiexample.com/api/v1/employees

let popBtn = document.getElementById('populate');
popBtn.addEventListener('click', popHandler)

function popHandler(){
    console.log("You've clicked the pop handler")

    // Instantiate an xhr obj
    const xhr = new XMLHttpRequest();

    // Open the Object
    xhr.open('GET', 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001', true)  //calling the api

    // What to do when response is ready
    xhr.onload = function(){
        if(this.status == 200){
            let obj = JSON.parse(this.responseText)
            console.log(obj)
            let list = document.getElementById('list')
            str = ""

            for(key in obj){
                str += `<li>Name: ${obj[key].firstName} ${obj[key].lastName}<br> 
                            Email: ${obj[key].email}</li>`
            }

            list.innerHTML = str
        }
        else{
            console.log("Some error occured")
        }
    }

    xhr.send();
}