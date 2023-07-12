console.log("Library class")

class Library{
    constructor(name, bookList){
        this.name = name
        this.bookList = bookList
    }

    BookList(){
        this.bookList.forEach(element => {
            console.log(element)
        });
    }

    IssueBook(bookname){
        this.bookList.push(bookname)
        console.log("Book issued successfully")
    }

    ReturnBook(bookname){
        let ind = this.bookList.indexOf(bookname)
        this.bookList.splice(ind);
    }
}

// let arr = ["Harry Potter", "Ikigai"]
// let harry = new Library("Harry", arr)
// harry.BookList()
// harry.IssueBook("James Bond")
// harry.BookList()

// arr = ["The Secret", "Adventure", "Hench"]
// let pratham = new Library("Pratham", arr)
// pratham.BookList()
// pratham.IssueBook("Flash")
// pratham.BookList()

class Lib1{
    constructor(bookList){
        this.bookList = bookList
        this.issuedBooks = {}
    }

    getBookList(){
        this.bookList.forEach(element => {
            console.log(element)
        });
    }

    issueBook(bookname, user){
        if(this.issuedBooks[bookname] == undefined){
            this.issuedBooks[bookname] = user
        }else{
            console.log("Book is already issued")
        }
    }

    returnBook(bookname){
        delete this.issuedBooks[bookname]
    }
}