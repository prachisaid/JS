console.log("Regex4")

let regex = /\war/  // word character - _ or alphabet or numeric
regex = /\w+d17/ // more than one word character
regex = /\Wbhai/ // matches a non-word character
regex = /\W+/ // more than one non-word characters
regex = /number \d999/ // d means digit
regex = /number \d+999/ // d+ means more than one digit
regex = /\D 999/ // D matches non-digit
regex = /\D+ 000/ // more than one non-digits
regex = /\s/ // match whitespace character same for (s+)
regex = /\S / // matches non-whitespace character same for (S+)
regex = /179r\b/ // word boundary

let str = "harhkj8arhard179r &&&&&&bhai prachi ka number 00099999"

let result = regex.exec(str)

console.log("The result of regex is " , result)

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`)
}else{
    console.log(`The string "${str}" does not match the expression ${regex.source}`)
}