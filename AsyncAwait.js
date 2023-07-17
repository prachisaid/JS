console.log("Async Await")

async function harry(){
    const response = await fetch('https://api.github.com/users')
    console.log("Before response")
    const users = await response.json()
    console.log("users are resolved")
    return users
}

console.log("Before calling harry")
let a = harry()
console.log(a)
a.then((data) =>{
    console.log(data)
})
console.log("After calling harry")
console.log("Last line")