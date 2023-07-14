document.getElementById('heading').addEventListener('click', function(e){
    console.log("You have clicked heading")
    // location.href = '//codewithharry.com'
    // console.log(e)

    let variable = e.target
    variable = e.target.className
    variable = e.target.classList
    variable = e.target.id
    // variable = Array.from(variable)
    variable = e.offsetX
    variable = e.offsetY
    variable = e.clientY
    console.log(variable)
})

document.getElementById('heading').addEventListener('mouseover', function(e){
    console.log("Mouse over element")
})