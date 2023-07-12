// 1. Single element selector 
// 2. Multi element selector

let element = document.getElementById('child1')
// element = element.className
// element = element.childNodes
// element = element.parentElement
// element.style.color = 'red'
// We can style our document by using style attribute
// console.log(element.innerHTML)
// console.log(element.innerText)

let sel = document.querySelector('#child2')
sel = document.querySelector('.container')
sel = document.querySelector('.child')
sel = document.querySelector('h1') // gives the first occurence of the given element
sel.style.color = 'blue'

// console.log(sel)

let elems = document.getElementsByClassName('child')
elems = document.getElementsByClassName('container')
elems = elems[0].getElementsByClassName('child')
// console.log(elems)

elems = document.getElementsByTagName('div')

Array.from(elems).forEach(function(element){
    element.style.color = "green"
})

// console.log(elems)


