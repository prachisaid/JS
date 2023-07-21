console.log("Regex 2")

let regex = /harry/

regex = /^harrdc/
regex = /ry$/
regex = /h.rry/
regex = /h*rry/
regex = /ha?rry?t/
regex = /h\*rry/

let str = "h*rry"

let result = regex.exec(str)

console.log("The result of regex is " ,result)

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`)
}else{
    console.log(`The string "${str}" does not match the expression ${regex.source}`)

}

// Meta character symbols
