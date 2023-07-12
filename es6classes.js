console.log("This is ES6 Classes file")

class Employee {

    constructor(name, experience, division) {
        this.name = name
        this.experience = experience
        this.division = division
    }

    slogan(){
        return `I am ${this.name} and this company is the best`
    }

    experienceFromJoining(){
        return 2023 - this.experience
    }

    static add(a, b){
        return a+b;
    }
}

class Programmer extends Employee{
    constructor(name, experience, division, language, github){
        super(name, experience, division)
        this.language = language
        this.github = github
    }

    favLanguage(){
        if(this.language == 'python'){
            return "Python"
        }
        else{
            return "JavaScript"
        }
    }

    static multiply(a, b){
        return a*b
    }
}

// prachi = new Employee("Prachi", 5, "Division")
// pratham = new Employee("Pratham", 6, "Division")
// console.log(pratham.experienceFromJoining())
// console.log(Employee.add(34, 34))

rohan = new Programmer("Rohan", 3, "Lays", "Go", "rohan420")
console.log(rohan)
console.log(rohan.favLanguage())
console.log(Programmer.multiply(12, 13))