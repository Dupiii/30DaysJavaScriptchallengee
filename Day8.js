// Day 8 : ES6 + Features 

// Tasks/Activities 
 
// Activity 1 : Template Literals

// Task 1 : Use template literals to create a string that includes variables for person's name and age, and log the string to the console

const name = "Dupesh";
const age = 22;

console.log(`Hello, my name is ${name} and I'm ${age} years old.`);

// Task 2 : Create a multi-line string using template literals and log it to the console

const multiLineString = `
This is a multi-line string.
It can span across several lines
without needing to use escape characters.
    You can even include indentation.
`;

console.log(multiLineString);  

// Activity 2: Destructing 

// Task 1: Use the array destructing to extract the first and second element from an array of numbers and log them to the console 

const numbers = [1,2,3,4,5,6,7,8]

const [first,second] = numbers

console.log(first,second)

// Task 4 : Use object destructing to extract the title and author from a book object and log them to the console

const book = {
    title: "1984",
    author: "George Orwell",
    year: 1949
};
const {title, author} = book
console.log(`${title} and ${author}`);

// Activity 3 : Spread and Rest Operators 

// Task 5 : Use the spread operator to create a new array that includes all elements of an existing array plus additional ElementInternals, and log the new array to the console 

const existingArray = [1, 2, 3];
const newArray = [...existingArray, 4, 5, 6];

console.log(newArray);

// Task 6 : Use the rest operator in a function to accept an arbitrary numbers of arguments , sum them ,and return the result 

function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Activity 4: Default Parameters 

// Task 7 : Write a function that takes two parameters and return their product, with the second parameter having a default value of 1. log the result of calling this function with and without the second parameter  

function multiply(a, b = 1) {
    return a * b;
}
  
console.log(multiply(5, 3)); 
console.log(multiply(7)); 

// Activity 5 : Enhanced Object Literals 

// Task 8 : Use enhanced object literals to create an object with methods and properties, and log the object to the console 


const person = {
  name,
  age,
  greet() {
    return `Hello, I'm ${this.name}!`;
  },
  celebrateBirthday() {
    this.age++;
    return `Happy ${this.age}th birthday!`;
  }
};

console.log(person);

// Task 9 : Create an object with computed propert names based on variables and log the object to the console  

const key1 = 'name';
const key2 = 'age';
const value1 = 'Dupesh';
const value2 = 22;

const individual = {
  [key1]: value1,
  [key2]: value2,
  [`get${key1.charAt(0).toUpperCase() + key1.slice(1)}`]() {
    return this[key1];
  }
};

console.log(individual);