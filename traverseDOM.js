let cont = document.querySelector('.container')
// cont = cont.childNodes
// cont = cont.children

let nodeName = cont.childNodes[1].nodeName
let nodeType = cont.childNodes[0].nodeType

// Nodetypes
// 1 - element
// 2 - attribute
// 3 - text node 
// 8 - Comment
// 9 - document
// 10 - doctype 

// console.log(nodeName)
// console.log(nodeType)

// console.log(cont.childNodes)
// console.log(cont.children)


let container = document.querySelector('div.container')

// console.log(container.children[1].children[0].children)
// console.log(container.firstChild)
// console.log(container.firstElementChild)

// console.log(container.lastChild)
// console.log(container.lastElementChild)

// console.log(container.childNodes)

console.log(container.childElementCount) //count of child element
// console.log(container.parentNode)
// console.log(container.firstElementChild.parentNode)
console.log(container.firstElementChild.nextElementSibling.nextElementSibling)


