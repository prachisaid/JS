console.log("Dictionary")

let btn = document.getElementById('fetchbtn');
btn.addEventListener('click', btnHandler);

function btnHandler(){
    let input = document.getElementById('word').value
    console.log(input)

    const xhr = new XMLHttpRequest();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`

    xhr.open('GET', url, true);

    xhr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText)
            let obj = JSON.parse(this.responseText)

            let list = document.getElementById('list')
            let str = "";

            for(key in obj){
                str += `${input} : ${obj[key].meanings[0].definitions[0].definition}`;
                console.log(obj[key].meanings[0].definitions[0].definition)
            }

            list.innerHTML = str
        }
        else{
            console.log("error")
        }
    }

    xhr.send()
}