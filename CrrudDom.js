let element = document.createElement('li')

let text = document.createTextNode("I am a text node")

//adding class name
element.className = 'childul'
element.id = 'createdLi'
element.setAttribute('title', 'mytitle')
element.appendChild(text)
// element.innerHTML = "<b>Created Li<b>"

let ul = document.querySelector('.this')
ul.appendChild(element)

// console.log(element)

let elem2 = document.createElement('h3')
elem2.id = 'elem2'
elem2.className = 'elem2'
elem2.innerHTML = 'this is a created node for elem2'

// element.replaceWith(elem2)
element = document.querySelector('.this')
element.replaceChild(elem2, document.getElementById('fui')) //new--old(should be child of the element)
element.removeChild(document.getElementById('lui'))

let pr = elem2.getAttribute('id')
pr = elem2.hasAttribute('href')
pr = elem2.removeAttribute('class')
console.log(pr)
console.log(elem2)