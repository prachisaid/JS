let btn = document.getElementById('btn')

btn.addEventListener('click', func1)
btn.addEventListener('dblclick', func2)
btn.addEventListener('mousedown', func3)
btn.addEventListener('mouseenter', func4)

function func1(e){
    // console.log("Thanks", e)
    e.preventDefault()
}

function func2(e){
    // console.log("Thanks is a double click", e);
    e.preventDefault()
}

function func3(e) {
    // console.log("Its a mouse down")
}

// document.getElementById('heading').addEventListener('mouseenter', func4)

// document.getElementById('heading').addEventListener('mouseleave', function(e){
//     console.log("Mouse leave")
// })

function func4(e){
    console.log("Mouse enter event")
}

document.querySelector('.container').addEventListener('mousemove', function(e){
    // console.log(e.offsetX, e.offsetY)
    document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX / e.offsetY})`
    console.log("You triggered mouse move event")
})
