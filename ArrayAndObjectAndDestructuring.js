// Array Methods -->

const students = [ 
    { name: "Chirag", marks: 80 }, 
    { name: "Aman", marks: 55 }, 
    { name: "Neha", marks: 78 }, 
    { name: "Priya", marks: 32 }
];
console.log(students);

// map() --> all elements
const names = students.map(s => s.name); 
console.log("Names:", names);

// filter() (marks >= 50) 
const passed = students.filter(s => s.marks >= 50);
console.log("Passed Students:", passed); 

// reduce() total marks 
const totalMarks = students.reduce((total, s) => total + s.marks, 0);
console.log("Total Marks:", totalMarks);

// Array Initialisation -->

let arr = [1,2,3,4];
let arr1 = new Array(5,7,8);
console.log(arr);
console.log(arr1);

// unshilft() --> Add element at the 1st position of the array

let arr = [1,2,3,4,5];
arr.unshift(6);
console.log(arr);

// For a given array of marks find the avg marks of the student

let arr = [10,20,30,40,50];
let length = arr.length;
let total = 0;
for(let i = 0; i < arr.length; i++){
    total += arr[i];
}
let avg = total / length;
console.log(avg);

// For a given array with prices od 5 items all items have and offer of 10% discount change the array after applying the discount

let arr = [100,200,300,400,500];
let length = arr.length;
let k = 0;
for(let i = 0; i < length; i++){
    let discount = arr[i] * 10 / 100;
    arr[k] = arr[i] - discount;
    k++;
}
console.log(arr);

// Methods -->

let arr = [1,2,3,4,5];

let idx = arr.indexOf(3); // to find the index
console.log(idx);

arr.reverse(); // to reverse the whole array
console.log(arr);

arr.splice(0,1,10); // Add and Remove element --> splice(StartingIndex, countToRemoveElement, addElement)
console.log(arr); // Original Array

let brr = arr.slice(0,3); // subarray lene ke liya
console.log(brr); // New Array

// concat()

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let brr = arr1.concat(arr2);
console.log(brr);

// sort() --> By default - ascending order

let arr3 = [4,6,3,2,1];
arr3.sort();
console.log(arr3);

// shift() and unshilft() -->

let a = []
a.unshift(1); // [1];
a.unshift(22); // [22,1];
a.shift(); // [1];
a.unshift(3,[4,5]); // [3,[4,5],1]
a.shift(); // [[4,5],1]
a.shift(); // [1]

console.log(a); // --> [1]

// Sorting Methods -->

let fruits = ['grapes', 'apple', 'banana'];
let num = [10, 20, 40, 5, 3, 15];

fruits.sort();
console.log(fruits); // ['apple', 'banana', 'grapes']
num.sort((a,b) => b - a); // descending order
console.log(num); // [40, 20, 15, 10, 5, 3]
num.sort((a,b) => a - b); // ascending order
console.log(num); // [3, 5, 10, 15, 20, 40]

// Rest property -->

let num = [1,2,3,4,5];
let [a,b,...rest] = num;
console.log(a);
console.log(b);
console.log(rest); // Baki leftover element comes in rest...

// Swapping -->

let first = "Hello";
let last = "World";

[first, last] = [last, first];
console.log(first); // World
console.log(last); // Hello

// Objects -->

let details = {
    name: 'Chirag',
    age: 18,
    group: 8,
    rollno: 2510991281,
    istudent: true
};

console.log(details); // full object
console.log(details.age); // 18
console.log(details["age"]); // Always in double quotes --> 18
details["age"] = 20; // Updating a value
console.log(details.age); // 20
details.age = 20;
console.log(details.age); // 20

let x = "age"; // Dynamic Property name
console.log(details[x]); // 20

// Object Destructoring --> assign object properties to variables using {}

let {name, age} = details;
console.log(name); // Chirag
console.log(age); // 18

const marks = {
    section1 :  {A: 15, B : 16},
    section2 : {A : 20, B : 18}
}

const {section1 : {A : A1, B :B1}} = marks;
console.log(A1, B1); // 15 16

// JSON --> Javascript Object Notation

// FEATURES -->
// It is a light weight data format
// Easy to read and write
// It is langauge independent 
// It is generally used in API communication restAPI, request, response
// Configuration files
// Data is in key-value pair
// All keys are always in string and in double quotes
// Values can be string(doubles quotes), number, boolean, array, object, null
// No comments are allowed, no trilling commas are allowed
// JSONLint --> To check the json code (for validation)

// Java Object VS JSON Object -->

// Only Strings and double quotes are allowed
// Java object is flexible but json is more strict

// JSON Handling -->

const json = {
    "name" : "abc",
    "age" : 20,
    "isStudent" : true,
    "address" : {
        "city" : "Patiala",
        "Pincode" : 101100
    },
    "str" : null,
    "language" : ["Python","Java"]
}

console.log(json); // full data
const str = JSON.stringify(json); // object -> string
console.log(typeof str); // string

const obj = JSON.parse(str); // string -> object
console.log(typeof obj); // object

console.log(obj.name); // abc
console.log(obj.address.city); // Patiala
console.log(obj.language[0]); // Python
console.log(obj.language); // ['Python', 'Java']
console.log(obj.address); // {city: 'Patiala', Pincode: 101100}

// JSON.parse() --> JSON.stringify()

const book = {
    title: "sys",
    author: "abc"
};

const jsonbook = JSON.stringify(book); 
console.log(jsonbook);

// Strings Transform -->

let str = "hello";
let str1 = str.toUpperCase(); //  we need to store the value of string in str1 as strings are immutable
console.log(str1); // HELLO
let str2 = str1.toLowerCase();

console.log(str2); // hello

// trim() --> remove starting and ending space

let str = "    Hello! Welcome";
console.log(str.trim());

// slice() --> str.slice(start, end)

let str = "Hello! welcome";
let str1 = str.slice(1,4);
let str2 = str.slice(0,3);
console.log(str1); // ell
console.log(str2); // Hel

// Arrays Methods

const numbers = [1, 2, 3, 4];

numbers.push(5);
console.log("Push :",numbers);
numbers.pop();
console.log("Pop :",numbers);

const doubled = numbers.map(n => n * 2);
console.log("Map :",doubled);

const evens = numbers.filter(n => n % 2 === 0);
console.log("Filter :",evens);

const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Reduce :",sum);

const found = numbers.find(n => n > 2);
console.log("Find :",found);

// Object Methods

const user = {
  name: "Chirag",
  age: 19,
  greet(){
    return `Hi, I'm ${this.name}`;
  }
};

console.log(user.name);
console.log(user["age"]);
console.log(user.greet());

console.log("Keys :",Object.keys(user));
console.log("Values :",Object.values(user));
console.log("Entries :",Object.entries(user));

// Destructuring

const colors = ["red", "yellow", "black"];

const [a,b] = colors;
console.log(a);

const person = {
  name: "Chirag",
  age: 19
};

const { name, age } = person;
console.log(name);

// JSON.stringify & JSON.parse

const obj = { name: "Chirag", age: 19 };

const json = JSON.stringify(obj);
console.log("JSON stringify :",json); // JSON stringify : {"name":"Chirag","age":19}

const parsed = JSON.parse(json);
console.log("JSON parsed :",parsed); // JSON parsed : {name: 'Chirag', age: 19} (full object)

// Array using for of loop -->

const fruits = ['apple','banana','grapes'];
for(const id of fruits.keys()){
    console.log(id);
}

// 0 'apple'
// 1 'banana'

const fruits1 = ['apple','banana'];
for(const [index, element] of fruits1.entries()){
    console.log(index, element);
}

// Array element update using with() -->

const original = [1,2,3];
const updated = original.with(0, 10);

console.log(original); // [1, 2, 3]
console.log(updated); // [10, 2, 3]

// Convert the string to array -->

const result = Array.from('hello',x => x.toUpperCase());
console.log(result); // ['H', 'E', 'L', 'L', 'O']