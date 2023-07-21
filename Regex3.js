console.log("Regex 3")

// Character Sets
regex = /h[a-z]rry/
regex = /h[ryu]rry/
regex = /h[^ryu]rry/
regex = /h[a-zA-Z]rr[ryz]/

// Quantifiers
regex = /har{2}y/
regex = /har{0,2}y/

// Grouping 
regex = /(har){2}([0-9]r){3}/

let str = "harhar9r"

let result = regex.exec(str)

console.log("The result of regex is " , result)

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`)
}else{
    console.log(`The string "${str}" does not match the expression ${regex.source}`)
}