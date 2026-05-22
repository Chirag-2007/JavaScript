// Variables- var, let, and const (mutability and scope inplications)

// Var has global scope
// Var can be reassigned and redeclared as well
var x = 100;
var x = 200; // re-declare the value
x = 300; // re-assigned the value 
console.log(x);

// let has block scope
{
    let y = 2;
    console.log(y);
}

// const has block scope
// const cannot be re-assigned and re-declared
{
    const y = 5;
    console.log(y);
}

window.alert("Hello"); // alert(pop-up)

let a = 20;
let b = "20";
let x = 10;
let y = 25;

// Comparison operator
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);
console.log(x < y);
console.log(x > y);

// Demonstration of comparision, logical and ternary

// Logical operators

console.log(x < y && y > a); // true
console.log(x > y || y > a); // true

// Ternary operator

let n = 15;
let result = (n % 2 == 0) ? "Even Number" : "Odd number";
console.log(result);

// Question -->

let x = 1;
let y = 2;
let z = 3;
console.log(x > y && y < 3); // false
console.log(x > y || y < 3); // true

// Question -->

let a = 2;
console.log(a); // 2
let b = 3;
console.log(b); // 3
console.log(`${a} + ${b} = ${a+b}`); // 2 + 3 = 5

// Question -->

let a = 2;
let b = 3;
console.log(a + b); // addition
console.log(a - b); // subtraction
console.log(a * b); // multiply
console.log(a / b); // divide
console.log(a ** b); // power
console.log(a % b); // remainder


// if/else -->

// Divisible by 2 -->

let num = Number(prompt("Enter a number: "))
if(num % 2 == 0){
    console.log("Yes");
}
else{
    console.log("No");
}

// Taking Input -->

let n1 = Number(prompt("Enter a number: "))
let n2 = Number(prompt("Enter a number: "))
console.log(n1 + n2)

// Largest of 3 numbers -->

let a = 22;
let b = 35;
let c = 47;

if(a > b && b > c){
    console.log(`${a} is the largest number`);
}
else if(b > c && b > a){
    console.log(`${b} is the largest number`);
}
else{
    console.log(`${c} is the largest number`);
}

// Loops -->

// For Loop -->
// Find the sum of first 50 odd numbers -->

let odd_num = 0;
for(let i = 1; i <= 100; i++){
    if(i % 2 != 0){
        odd_num += i;
    }
}
console.log(`Sum of first 50 odd numbers: ${odd_num}`); // Sum of first 50 odd numbers: 2500

// WAP to swap 2 variables -->

let a = Number(prompt("Enter a: "));
let b = Number(prompt("Enter a: "));

console.log("Original Numbers: ");
console.log(`a = ${a}`);
console.log(`b = ${b}`);
let temp = a;
a = b;
b = temp;

console.log("Swapped Numbers: ");
console.log(`a = ${a}`);
console.log(`b = ${b}`);

// While loop --> 

let a = 1;
let total = 0;
while(a <= 10){
    total += a;
    a++;
}
console.log(total);

// do-while loop -->

let total = 0;
let a = 1;
do{
    total += a;
    a++;
}
while(a <= 10);
console.log(total);

// Switch Statements -->

// Program to display day using switch case

let day = 5;
let result;
switch(day){
    case 1:
        result = "Monday";
        break;
    case 2:
        result = "Tuesday";
        break;
    case 3:
        result = "Wednesday";
        break;
    case 4:
        result = "Thursday";
        break;
    case 5:
        result = "Friday";
        break;
    case 6:
        result = "Saturday";
        break;
    case 7:
        result = "Sunday";
        break;
    default:
        result = "Invalid day";
}
console.log(result);

// for in loop --> Object ma lagta h...

let student = {
    firstname : "Chirag Nagpal",
    age : 20,
    rollno : 1234,
    cgpa : 9.2
};

for(let i in student){
    console.log(student[i]);
}

// for of loop --> Array ma lagta h...

let a = [1,2,3,4];

for(let i of a){
    console.log(i);
}

// Important --> Ternary Operator

let x = 24;
let val = x % 2 == 0 ? "Even Number": "Odd Number";
console.log(val);

// Loop on String -->

let str = prompt(); // String Input
let count = 0;
let length = str.length;
for(let i = 0; i < length; i++){
    count++;
}
console.log(count);

// Logical and Bitwise operator -->

let a = 10;
let b = 20;
let c = 30;

console.log(a || b & c);

// To write on the browser -->
document.write("Hello World");

// Concatenate -->
document.write("My roll number is " + 10);

// To write on the console -->
console.log("Hello Console");

// In table Format

const person = {
    name: 'Chirag',
    rollno: "2510991281"
};
console.table(person);

// Confirm - OK / CANCEL --> true/false

let x = confirm("Do you want to continue?");
console.log(x);

// Typecast to integer format -->
console.log(parseInt(51/2));

// Give a random value between 0 and 1...
const j = Math.random();
console.log(j);