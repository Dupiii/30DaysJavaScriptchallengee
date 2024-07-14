// Day 1: Operators

// Tasks/Activities:

// Activity 1 : Arithmetic operations

// Task 1: Write a program to add two numbers and log the result to the console
let val1 = 15
let val2 = "15"


function addValues(val1,val2){
    return val1 + val2
}
console.log(addValues(val1,val2))

// Task 2: Write a program to subtract two numbers and log the result to the console

function subtractValues(val1,val2){
    return val1 - val2
}

console.log(subtractValues(val1,val2))

// Task 3: Write a program to multiply two numbers and log the result to the console

function multiplyValues(val1,val2){
    return val1 * val2
}

console.log(multiplyValues(val1,val2))


// Task 4: Write a program to divide two numbers and log the result to the console

function divideValues(val1,val2){
    return val1 / val2
}

console.log(divideValues(val1,val2))

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console

function findRemainder(val1,val2){
    return val1 % val2
}
console.log(findRemainder(val1,val2))

// Activity 2 : Assignment operators

// Task 6: Use a += operator to add a number to a variable and log the result to the console

function addNumber(val1){
    return val1 += 1
}
console.log(addNumber(val1))

// Task 7: Use a -= operator to add a number to a variable and log the result to the console

function subtractNumber(val1){
    return val1 -= 1
}
console.log(subtractNumber(val1))

// Activity 3: Comparison Operator

// Task 8: Write a program to compare a two numbers using > and < and log the result to the console

function greaterValue(val1,val2){
    if(val1 > val2){
        return val1
    }
    return val2
}
console.log(greaterValue(val1,val2))

// Task 8: Write a program to compare a two numbers using >= and <= and log the result to the console

let result1 = val1 >= val2;
let result2 = val1 <= val2;

console.log(`${val1} >= ${val2}:`, result1);
console.log(`${val1} <= ${val2}:`, result2);

// Task 9: Write a program to compare a two numbers using == and === and log the result to the console

let result_1 = val1 == val2;
let result_2 = val1 === val2;

console.log(`${val1} == ${val2}:`, result_1);
console.log(`${val1} === ${val2}:`, result_2);

// Activity 4: Logical Operator
  
// Task 10 : Write a program that uses the && operator to combine two conditions and log the result to the console 

let condition1 = val1 < val2; // True if val1 is less than val2
let condition2 = val1 % 2 === 0; // True if val1 is an even number

let result = condition1 && condition2;

console.log(`val1 < val2 && val1 % 2 === 0:`, result);

// Task 11 : Write a program that uses the || operator to combine two conditions and log the result to the console 

let conditionn1 = val1 > val2; // True if val1 is greater than val2
let conditionn2 = val1 % 2 === 0; // True if val1 is an even number

let Result = conditionn1 || conditionn2;

console.log(`val1 > val2 || val1 % 2 === 0:`, result);

// Task 12 : Write a program that uses the ! operator to combine two conditions and log the result to the console 

let conditionOne = val1 > val2; // True if val1 is greater than val2
let conditionTwo = val1 % 2 !== 0; // True if val1 is an odd number

let negatedConditionOne = !conditionOne;
let negatedConditionTwo = !conditionTwo;

let combinedResult = negatedConditionOne && negatedConditionTwo;

console.log(`!(${val1} > ${val2}):`, negatedConditionOne);
console.log(`!(${val1} % 2 !== 0):`, negatedConditionTwo);
console.log(`!(${val1} > ${val2}) && !(${val1} % 2 !== 0):`, combinedResult);

// Activity 5 : Ternary Operator 

// Task 13 : Write a program that uses a ternary operator to check if a number is postivie or negative and log the result to the console 

let resul = val1 >= 0 ? "positive" : "negative";

console.log(`The number ${val1} is ${resul}.`);