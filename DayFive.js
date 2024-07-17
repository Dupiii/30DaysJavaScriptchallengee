// Day 5 : Functions

// Activity 1: Function Decleration 

// Task 1: Write a function to check if a number is even or odd and log the result to the console 

function evenOdd(num){
    if(num%2==0){
        console.log(`Given number is even`)
    }
    else{
        console.log(`Given number is odd`)
    }
}

// Task 2 : Write a function to calculate the square of a number and return the result 

function sqrOf(num){
    return num * num;
}

// Activity 2:Function Expression

// Task 3 : Write a function expression to find the maximum of two numbers and log the result to the console 

const findMax = function(a, b) {
    const max = (a > b) ? a : b;
    console.log("The maximum number is: " + max);
};

// Task 4 : Write a function expression to concatenate two strings and return the result 

const concatenateStrings = function(string1, string2) {
    return string1 + string2;
};

// Activity 3 : Arrow Functions 

// Task 5 : Write an arrow function to calculate the sum of two numbers and log the result to the console 

const calculateSum = (a, b) => {
    const sum = a + b;
    console.log("The sum is: " + sum);
};

// Task 6 : Write an arrow function to check if a string constains a specific character and return the result to console 

const containsCharacter = (str, char) => {
    const result = str.includes(char);
    console.log(`The string "${str}" ${result ? 'contains' : 'does not contain'} the character "${char}".`);
};

// Activity 4 : Function parameters and Default values 

// Task 7 : Write a function that takes two parameters and return their product . Provide the default value of second parameter 

const multiply = (a, b = 1) => {
    return a * b;
};

// Task 8 : Write a function that takes a person's name and age and returns a greeting message. Provide a default value of age.

const greet = (name, age = 45) => {
    return `Hello, ${name}! You are ${age} years old.`;
};

// Activity 5 : Higher-Order Functions 

// Task 9 : Write a higher-order function that takes a function and number and call the function that many times 

const repeatFunction = (func, times) => {
    for (let i = 0; i < times; i++) {
        func();
    }
};

const sayHello = () => {
    console.log("Hello!");
};

repeatFunction(sayHello, 3);

// Task 10 : Write a higher-order function that takes two functons and value, apply the first function to the value, then apply the second function to the result

const applyFunctions = (func1, func2, value) => {
    const firstResult = func1(value);
    const finalResult = func2(firstResult);
    return finalResult;
};

const double = x => x * 2;
const square = x => x * x;

const result = applyFunctions(double, square, 5); // Output: 100
console.log(result);