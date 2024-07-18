// Day 6: Arrays 

// Tasks/Activities:

// Activity 1 : Array Creation and Access

// Task 1 : Create an array of numbers 1 to 5  and log the array to the console 

const numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray);

// Task 2 : Access the first and the last element of the array and log them in the console

console.log(numbersArray[0]);
console.log(numbersArray[numbersArray.length-1]);

// Activity 2 : Array Method(Basics)

// Task 3 : Use the push method to add a new number to the end of array and log the updated array 

numbersArray.push(6)
console.log(numbersArray);

// Task 4 : Use the pop method to remove a number from the last of array and log the updated array 

numbersArray.pop()
console.log(numbersArray);

// Task 5: Use the shift method to remove the first element from the array and log the updated array

numbersArray.shift()
console.log(numbersArray);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array

numbersArray.unshift(6)
console.log(numbersArray);

// Activity 2 : Array Method(Intermediate)

// Task 7: Use the map method to create a new Array where each number is doubled and log the new array 

const doubledArray = numbersArray.map(num => num * 2);
console.log(doubledArray);

// Task 8: Use the filter method to create a new Array with only even number and log the new array 

const evenNumbersArray = numbersArray.filter(num => num % 2 === 0);
console.log(evenNumbersArray);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result

const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

// Activity 3: Array Iteration

// Task 10 : Use a for loop to iterate over the array and log each element to the console 

for (let i = 0; i < numbersArray.length; i++) {
    console.log(numbersArray[i]);
}

// Task 11 : Use a forEach method to iterate over the array and log each element to the console 

numbersArray.forEach(element => {
    console.log(element);
});

// Activity 4: MultiDimensional Array 

// Task 12 : Create a two dimensional Array(matrix) and log the entire array to the console

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);

// Task 13: Access and log a specific element from two dimension array  

const element = matrix[0][2]; // matrix[row index][column index]
const element1 = matrix[1][2];
console.log(element); 
console.log(element1);