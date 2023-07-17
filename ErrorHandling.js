console.log("Error handling")

// Pretend coming from a server
let a = "Harry"
a = undefined
if(a != undefined){
    throw new Error("This is not undefined")
    console.log("This is not undefined")
}
else{
    console.log("This is undefined")
}

try {
    // djojdiooihfhf
    console.log("We are inside try block")
    harry()
} catch (error) {
    console.log(error)
}