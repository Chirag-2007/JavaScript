// Functions & Scoping -->

// Function Declarations vs Expression -->
// (1)
function greet(){
    let name = "Chirag";
    console.log(`${name}, Consistency is the Key to Success`);
}
greet();

// (2)

function numSum(x,y,z){ // parameters
    let total = x + y + z;
    return total;
}
let total = numSum(2,3,4); // arguments
console.log(total);

// (3)

function sum(a = 2,b = 3){ // Default Parameters
    console.log(a + b)
}
sum(6,6);
sum(1,2,3,4);
sum(7,-90);
sum();
sum(10);

// (4) --> Arrow Function...

let sum = (a,b) => {
    return a + b;
}
let add = sum(5,10);
console.log(add);

// Function declaration

function showSquare(num) {
    console.log("Square is:", num * num);
}
let n=Number(prompt("Enter Number to Square:")); // Input
showSquare(n);

// Function expression

var showCube = function(num) {
    console.log("Cube is:", num * num * num);
};
let c = Number(prompt("Enter Number to Cube:"));
console.log("Input =",c);
showCube(c);

// Variable Hoisting

console.log("Value of a before declaration:", a); // undefined
var a = 20;
console.log("Value of a after declaration:", a); // 20

// Function Hoisting

display();
function display(){
    console.log("Function called before its definition due to hoisting");
}

// Number Input --> By default String hota h...

let n = Number(prompt()) // Typecast into number
for(let i = 1; i <= n; i++){
    console.log(i);
}

// Arrow Function -->

let add = (a,b) => { 
    return a + b; 
}
console.log("Sum:", add(3,4));

// Object example for lexical this -->

const student = { 
    name: "Chirag Nagpal", 
    marks: 90, 
    normalFunction: function(){ 
        function details() { 
            console.log("Normal Function:",this.name, this.marks);
        } 
        details(); 
    }, 
    arrowFunction: function () { 
        const details = () => { 
            console.log("Arrow Function:",this.name, this.marks);
        }; 
        details(); 
    }
};

student.normalFunction(); // Normal Function:  undefined
student.arrowFunction(); // Arrow Function: Chirag Nagpal 90

// Call by Value 

function number(x) { 
    x = x + 10; 
    console.log("Inside function:", x); 
} 

let num = 10;
number(num);
console.log("Outside function:", num);

// Call by Reference

function object(age) { 
    age.value = age.value + 10; 
    console.log("Inside function:", age.value); 
}
let data = {
    value: 18
};

object(data); 
console.log("Outside function:", data.value);

// Lambda-style function 

const square = (num) => num * num; // 1 line function...
console.log("Square:", square(4));

// Closure example (Counter)

function counter(){ 
    let count = 0; // private variable 
    return function(){ 
    count++; 
    console.log("Count:", count); 
    }
} 
const count = counter();
count();
count();
count();