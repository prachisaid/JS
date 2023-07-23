console.log("Javascript file for form validation")
let validEmail = false;
let validName = false;
let validphone = false;

const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('phoneNo')

// console.log(username)
// console.log(email)
// console.log(phone)

username.addEventListener('blur', function(){
    // console.log("Name is blured")
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/ 
    let str = username.value;

    console.log(regex)
    console.log(str)

    if(regex.test(str)){
        console.log("Name Matched")
        username.classList.remove('is-invalid')
        validName = true;
    }
    else{
        username.classList.add('is-invalid')
        console.log("Name Not matched")
        validName = false;
    }
})

email.addEventListener('blur', function(){
    // console.log("Email is blured")
    // let regex = /^\w+@\w+com$/ 
    let regex = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/
    let str = email.value;

    console.log(regex)
    console.log(str)

    if(regex.test(str)){
        console.log("Email Matched")
        email.classList.remove('is-invalid')
        validEmail = true;
    }
    else{
        email.classList.add('is-invalid')
        console.log("Email Not matched")
        validEmail = false;
    }
})

phone.addEventListener('blur', function(){
    // console.log("Phone is blured")
    let regex = /^[0-9]{10}$/ 
    let str = phone.value;

    console.log(regex)
    console.log(str)

    if(regex.test(str)){
        console.log("Phone Number Matched")
        phone.classList.remove('is-invalid')
        validphone = true;
    }
    else{
        phone.classList.add('is-invalid')
        console.log("Phone Number not matched")
        validphone = false;
    }
})

let submit = document.getElementById('submit')

submit.addEventListener('click', function(e){
    e.preventDefault();
    // url = "FormValidation/index.js";
    // data = {"username" : username.value, "email" : email.value, "phone" : phone.value}
    // params = {
    //     method : "POST",
    //     header : {
    //         'Content-type' : 'application/json'
    //     },
    //     body : data 
    // }

    // fetch(url, params).then(function(response){
    //     return response.json();
    // }).then(function(data){
    //     console.log(data)
    // })

    // let data = new FormData(document.getElementById('form'))
    // console.log(data.get())
    
    
    if(validEmail && validName && validphone){
        let success = document.getElementById('status')
        let str = `<div id="success" class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> Your travel request has been successfully submitted
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`

      success.innerHTML = str;
    }
    else{
        let error = document.getElementById('status')
        let str = `<div id="error" class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Failure!</strong> Your travel request not been submitted
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`

      error.innerHTML = str;
    }

})