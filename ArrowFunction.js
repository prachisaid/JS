console.log("Arror functions")

const harry = () => {
    console.log("Harry function")
}

let greet = () => "Good Morning" // one liners do not require braces

greet = () => ({name : "harry"})

// harry();
console.log(greet())

// Passing parameters
greet = name => "Good Morning "+name

//multiple parameters require brackets
greet = (name, ending) => "Good Morning "+name+ending

console.log(greet("Prachi", " Said"))