// Day 4: Loops 

// Activity 1: For loop

// Task 1: Write a program to print numbers from 1 to 10 using for loop 

for(let i=1 ; i<=10 ; i++ ){
    console.log(i)
}

// Task 2: Write a program to print the multiplication table of 5 using for loop 

for(let i = 1; i<=10; i++){
    console.log(`5 x ${i} = ${5 * i}`)
}

// Activity 2: While loop 

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop 

let int = 1
let sum = 0
while(int<=10){
    sum += int
    int++
}
console.log(sum)

// Task 4 : Write a program to print number from 10 to 1 using while loop 

let iterator = 10
while(iterator>=1){
    console.log(`${iterator}`)
    iterator--
}

// Activity 3: Do while loop 

// Task 5: Write a program to print numbers from 1 to 5 using a do... while loop 

let it = 1
do{
    console.log(it)
    it++
}while(it<=5)

// Task 6 : Write a program to calculate a factorial of a number using a do.. while loop 

function factorialDoWhile(n) {
    if (n < 0) return -1; 
    if (n === 0 || n === 1) return 1; 
    
    let result = 1;
    let i = n;
    
    do {
        result *= i;
        i--;
    } while (i > 0);
    
    return result;
}

console.log(factorialDoWhile(4)); 

// Activity 4: Nested Loops 

// Task 7 : Write a program to print a pattern using nested for loops

for(let i =1 ; i<= 5; i++){
    let starRow = '';
    for(let j= 1 ; j<=i;j++){
        starRow += '*';
    }
    console.log(starRow);
}

// Activity 5: Loop Control Statements

// Task 8 : Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement 

for(let i =1; i<= 10 ;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}

// Task 9 : Write a program to print numbers from 1 to 10, but stop the loop when number is 7 using the break Statement 

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}