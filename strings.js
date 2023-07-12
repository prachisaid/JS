const name = "Prachi "
const greet = "Good Morning"

console.log(greet +" "+ name) //concats the string using + operator

let html = '';
html = html.concat(name, greet);
console.log(html)

console.log(html.length)
console.log(html.toLocaleLowerCase())
console.log(html[0]) 
console.log(html.indexOf("achi")) // first occurence of the given string
console.log(html.lastIndexOf("o")) // last occurence of the given string
console.log(html.charAt(3)) // character at the given place
console.log(html.endsWith("ing")) // does the string end with the given string
console.log(html.includes("ng")) // does our string include this
console.log(html.substring(1, 3)) // returns the letters starting from index 1 to 3-1
console.log(html.slice(2)) // starting from the given index return the string
console.log(html.split("o"))
console.log(html.replace("oo", "ii"))

// Template literals
let fruit1 = "Apple"
let fruit2 = "Mango"

let myHtml = `Hello ${name}
              <h1>Thiss is heading </h1>
              <p> You like ${fruit1} and ${fruit2}</p>`

document.body.innerHTML = myHtml