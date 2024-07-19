// Day 1: Objects

// Tasks/Activities:

// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console 

const Book = {
    'title': "The Alchemist",
    'author': "Paulo Caelho",
    'year':  1988,
    getSummary: function() {
        return `${this.title} by ${this.author}`;
    },
    updateYear: function(year) {
        this.year = year;
    },
    getTitleYear: function(){
        return `${this.title} and ${this.year}`;
    }

};

console.log(Book);

// Task 2 : Access and log the title and author properties of the book object 

console.log(Book['title'])
console.log(Book.author)

// Activity 2: Object Methods 

// Task 3 : Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method

console.log(Book.getSummary());

// Task 4 : Add a method to the book object that takes a parameter(year) and updates the book's year property, then log the updated object

Book.updateYear(2020);
console.log(Book)

// Activity 3 : Nested objects 

// Task 5 : Create a nested object representing a library with properties like name and books(an array of the objects) and log the object to the console. 

const book1 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};

const book2 = {
    title: "1984",
    author: "George Orwell",
    year: 1949
};

const book3 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};

const library = {
    name: "City Library",
    books: [Book,book1, book2, book3]
};
console.log(library);

// Task 6 : Access and log the name of the library and the titles of all the books in the library

console.log("Library Name:", library.name);
console.log("Books Titles:");
library.books.forEach(book=>{
    console.log(book.title);
});

// Activity 4: the this Keyword

// Task 7 : Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
console.log(Book.getTitleYear());

// Activity 5 : Object Iteration 

// Task 8 : Use a for...in loop to iterate over the properties of the object and log each property and  its value 

for(const key in Book) {
    console.log(`${key}:${Book[key]}`)
}

// Task 9 : Use Object.keys and Object.values methods to log all the keys and values of the book object 

const key = Object.keys(Book);
const values = Object.values(Book);
console.log("Keys:",key);
console.log("Values:", values);