console.log("Fetch Api file")

let myBtn = document.getElementById("myBtn")
let content = document.getElementById("content")

function getData(){
    console.log("Started getData")
    let apiKey = 'b57569316904466785dc7f2dafade2fe';
    let source = 'bbc-news'
    url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`
    url = "https://api.github.com/users"
    
    fetch(url).then((response)=>{  // Fetch data will return new Promise and is asynchronous
        console.log("Inside first then")
        return response.json();  //if used text() -> shows in text format //if used json() -> shows in json format
    }).then((data) => {
        console.log("Inside second then")
        console.log(data[0].organizations_url)
    })
}

function postData(){
    url = "https://dummy.restapiexample.com/api/v1/create"
    data = '{"name":"prachi","salary":"123","age":"23"}'
    params = {
        method : "POST",
        headers : {
            'Content-Type' : 'application/json'
        },
        // body : JSON.stringify(data)  -> data is object use stringify else don't
        body : data
    }
    
    fetch(url, params).then((response)=>{  // Fetch data will return new Promise and is asynchronous
        return response.json();  //if used text() -> shows in text format //if used json() -> shows in json format
    }).then((data) => {
        console.log(data)
    })
}

console.log("Before get data")
postData();
console.log("After get data")