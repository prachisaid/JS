console.log("This is index js")

//Constructor
function Book(title, author, type){
    this.name = title
    this.type = type
    this.author = author
}

function Display(){

}

// Adding methods to display prototype
Display.prototype.add = function(book){
    console.log("Adding to ui")
    let tableBody = document.getElementById('tableBody');
    let uiString = `
    <tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
  </tr>
    `

    tableBody.innerHTML += uiString
}

Display.prototype.clear = function(){
   let libraryForm = document.getElementById('library')
   libraryForm.reset();
}

Display.prototype.validate = function(book){
    if(book.name.length < 2 || book.author.length < 2){
        return false
    }
    else{
        return true
    }
}

Display.prototype.show = function(type, message){
    let alert = document.getElementById('msg')
    alert.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>Message: </strong> ${message}.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`
                
    setTimeout(()=>{
        alert.innerHTML = ''
    }, 2000)
}

// Add submit event listener to form
let libraryForm = document.getElementById('library')
libraryForm.addEventListener('submit', libraryFormSubmit)

function libraryFormSubmit(e){
    console.log("You've submitted")
    let val = document.getElementById('bookName').value
    let author = document.getElementById('author').value
    
    let fiction = document.getElementById('fiction')
    let programming = document.getElementById('programming')
    let cooking = document.getElementById('cooking') 
    let type
    
    if(fiction.checked){
        type = fiction.value
    }

    else if(programming.checked){
        type = programming.value
    }
    
    else if(cooking.checked){
        type = cooking.value
    }

    let book = new Book(val, author, type)
    console.log(book);

    let display = new Display();
    if(display.validate(book)){
        display.add(book)
        display.clear()
        display.show("success", "Book has been successfully added")
    }
    else{
        display.show("danger", "Sorry you cannot add this book")
    }

    e.preventDefault()
}