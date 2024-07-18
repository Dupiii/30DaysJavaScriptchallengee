// Day 1: Variables and Data Types

// Tasks/Activities:

// Activity 1: Variable Declaration

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var num = 10;
console.log(num)

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let string ="Dupesh"
console.log(string)

// Activity 2: Constant Declaration

//Task 3: Declare a variable using const, assign it a const, and log the value to the console.
const Present = true;
console.log(Present)


// Activity 3: Data Types

// Task 4 :  Create variable of diffrent data types (number,string,boolean,object, array) and log each variable's type using the typeof operator. 
const number =10
const str = "Dupesh"
const boolean = true
const object = {
  name: "Dupesh",
  age: 20
  
}
const array=[1,2,3,4,5]

console.log(typeof(number))
console.log(typeof(str))
console.log(typeof(boolean))
console.log(typeof(object))
console.log(typeof(array))

// Activity 4 : Reassigning Variables

// Task 5 : Declare a variable using let, assign it an intial Value, reassign a new value and log both values to the console.

let variable = 10;
console.log(variable)
  variable =15;
console.log(variable)

// Activity 5: Understanding const

// Task 5 : Try reassigning a variable declared with const and observe the error.

const varii = 15;
console.log(varii)
varii= 17
console.log(varii)