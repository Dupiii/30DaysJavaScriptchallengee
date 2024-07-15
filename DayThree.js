// Day 2: Control Structures

// Tasks/Activities:

// Activity 1: If-else Statements 

// Task 1: Write a program to check if a number is positive, negative or zero, and log the result to console 

let num = 8;

if(num==0){
    console.log(`${num} is zero`)
}
else if(num>0){
    console.log(`${num} is positive`)
}
else{
    console.log(`${num} is negative`)
}

// Task 2: Write a program to check if a person is eligible to vote(Age>= 18) annd log the result to console 

let personAge = 17

if(personAge>= 18){
    console.log("Eligible to Vote")
}
else{
    console.log("Not Eligible to Vote")
}

// Activity 2: Nested If-else Statements 

// Task 3 : Write a program to find the largest of three number using nested if-else statements

let a = 3;
let b = 5;
let c= 9;

if(a>b){
    if(a>c){
        console.log(`${a} is the greatest`)
    }
    else{
        console.log(`${c} is the greatest`)
    }
}
else{
    if(b>c){
        console.log(`${b} is the greatest`)
    }
    else{
        console.log(`${c} is the greatest`)
    }
}

// Activity 3: Switch Case 

// Task 4 : Write a program that uses a switch case to determine the day of the week based on a number(1-7) and log the day name to the console 

function getDayName(dayNumber) {
    let dayName;

    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number";
    }

    return dayName;
}

const dayName = getDayName(5);
console.log("The day of the week is: " + dayName);

// Task 5: Write a program that uses a switch case to assign a Grade ('A','B','C,'D','F') based on score and log the grade to the console 

function getGrade(score) {
    let grade;

    switch (true) {
        case (score >= 90 && score <= 100):
            grade = 'A';
            break;
        case (score >= 80 && score < 90):
            grade = 'B';
            break;
        case (score >= 70 && score < 80):
            grade = 'C';
            break;
        case (score >= 60 && score < 70):
            grade = 'D';
            break;
        case (score >= 0 && score < 60):
            grade = 'F';
            break;
        default:
            grade = 'Invalid score';
    }

    return grade;
}

const grade = getGrade(64);
console.log("The grade is: " + grade);

// Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is odd or even and log the result to the console 

function checkOddEven(number) {
    return (number % 2 === 0) ? "Even" : "Odd";
}

const result = checkOddEven(11);
console.log(`The number is ${result}.`);

// Activity 5 : Combining Conditions 

// Task 7 : Write a program to check if a year is a leap year using multiple conditions (divisible by 4,but not 100 unless also divisibleby 400) and log the result to console 
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
year = 2021;
const Result = isLeapYear(year);
console.log(`The year ${year} is ${Result ? "a leap year" : "not a leap year"}.`);