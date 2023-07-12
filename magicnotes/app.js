console.log("Welcome to notes app")
showNotes()

// if user adds a note add it to the local Storage
let addBtn = document.getElementById('addBtn')

addBtn.addEventListener('click', function(e){

    let addTitle = document.getElementById('addTitle');
    let addTxt = document.getElementById('addTxt');
    let titles = localStorage.getItem('titles')
    let notes = localStorage.getItem('notes') // we took the values from localstorage in string form

    if(notes == null){
        titleObj = [];
        notesObj = []; // and then we created a notes object to push new notes
    }
    else{
        titleObj = JSON.parse(titles)
        notesObj = JSON.parse(notes) // convert the notes in the form of array
    }

    titleObj.push(addTitle.value)
    notesObj.push(addTxt.value)
    localStorage.setItem("titles", JSON.stringify(titleObj))
    localStorage.setItem("notes", JSON.stringify(notesObj))
    addTitle.value = ""
    addTxt.value = ""
    // console.log(notes)
    showNotes()
})

function showNotes(){
    let notes = localStorage.getItem('notes')
    let titles = localStorage.getItem('titles')

    if(notes == null){
        titleObj = [];
        notesObj = []; // and then we created a notes object to push new notes
    }
    else{
        titleObj = JSON.parse(titles)
        notesObj = JSON.parse(notes) // convert the notes in the form of array
    }

    let html = "";

    notesObj.forEach(function(element, index){
        html += `
        <div class="noteCard my-2 mx-4 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${titleObj[index]}</h5>
          <p class="card-text">${element}</p>
          <button class="btn btn-primary" id="${index}" onclick="deleteNode(this.id)">Delete</button>
        </div>
      </div>
        
        `
    })

    let noteElem = document.getElementById('notes')

    if(notesObj.length == 0){
        noteElem.innerHTML = `<h6>Nothing to show</h6>`
    } 

    else{
        noteElem.innerHTML = html
    }
}

function deleteNode(index){
    let notes = localStorage.getItem('notes')

    if(notes == null){
        notesObj = []
    }
    else{
        notesObj = JSON.parse(notes) // convert the notes in the form of array
    }

    
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    showNotes()

    console.log(notesObj)

}

let search = document.getElementById('searchTxt')

search.addEventListener('input', function(e){
    let inputVal = search.value.toLowerCase()
    // inputVal.toLowerCase()
    console.log("Input event fired ", inputVal)
    let nodeCards = document.getElementsByClassName('noteCard')
    console.log(nodeCards)
    Array.from(nodeCards).forEach(function(element){
        // console.log(element)
        let cardTxt = element.getElementsByTagName('p')[0].innerText.toLowerCase()

        if(cardTxt.includes(inputVal)){
            element.style.display = "block"
        }else{
            element.style.display = "none"
        }
    })
})