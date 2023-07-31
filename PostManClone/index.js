console.log("PostMan Clone")

// Utility Function
// 1. Utility function to get DOM elements from string

function getElementFromString(string){
    let div = document.createElement('div')
    div.innerHTML = string
    return div.firstElementChild;
}

//Initialize no of parameters
let addedParamsCount = 1;

// Hide the parameters box initially
let parametersBox = document.getElementById('parametersBox')
parametersBox.style.display = 'none'

let paramsRadio = document.getElementById('paramsRadio').addEventListener('click', function(){
    document.getElementById('requestJsonBox').style.display = 'none'
    document.getElementById('parametersBox').style.display = 'block'
})

let jsonRadio = document.getElementById('jsonRadio').addEventListener('click', function(){
    document.getElementById('parametersBox').style.display = 'none'
    document.getElementById('requestJsonBox').style.display = 'block'
})

// If the user clicks on + button add more parameters

let addParam = document.getElementById('addParam').addEventListener('click', function(){
    let params = document.getElementById('params')
    let string = `<div class="form-row my-3">
                    <legend class="col-form-label col-sm-2 float-sm-left pt-0">
                        Parameter ${addedParamsCount+1}
                    </legend>
                    <div class="col-md-4">
                        <input type="text" id = "parameterKey${addedParamsCount+1}" class="form-control" placeholder="Enter Parameter ${addedParamsCount+1} key" />
                    </div>
                    <div class="col-md-4">
                        <input type="text" id = "parameterValue${addedParamsCount+1}" class="form-control" placeholder="Enter Parameter ${addedParamsCount+1} value" />
                    </div>
                    <button id="addParam" class="btn btn-secondary deleteParam"> - </button>
                </div>`

    // Convert the element string to dom node
    let paramElement = getElementFromString(string)
    // console.log(paramElement)
    params.appendChild(paramElement)

    // Add an event listener to remove the parameter on clicking element
    let deleteParam = document.getElementsByClassName('deleteParam')
    for(let item of deleteParam){
        item.addEventListener('click', function(element){
            element.target.parentElement.remove()
        })
    }
    addedParamsCount++;
})

// If user clicks on submit button
let submit = document.getElementById('submit').addEventListener('click', function(){
    // Show please wait in the response box to request patience from user
    document.getElementById('responseJsonText').value = "Please wait fetching your response..."

    let url = document.getElementById('urlField').value;
    let requestType = document.querySelector("input[name='requestType']:checked").value
    let contentType = document.querySelector("input[name='contentType']:checked").value

    // If user has used params option instead json collect all params
    if(contentType == 'params'){
        data = {}

        for(i = 0; i < addedParamsCount+1; i++){
            if(document.getElementById('parameterKey' + (i+1)) != undefined){
                let key = document.getElementById('parameterKey' + (i+1)).value
                let value = document.getElementById('parameterValue' + (i+1)).value
                data[key] = value;
            }
        }
        data = JSON.stringify(data);
    }
    else{
        data = document.getElementById('requestJsonText').value
    }

    console.log(url)
    console.log(requestType)
    console.log(contentType)
    console.log(data)

    // if the request type is get invoke fetch api to create get request
    if(requestType == 'GET'){
        fetch(url, {
            method : 'GET',
        }).then((response) =>{
            return response.json();
        }).then((data) => {
            document.getElementById('responseJsonText').value = data
        })
    }
})