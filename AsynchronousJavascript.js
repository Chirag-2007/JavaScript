// // Asynchronous Behaviuor of JS --> sabse pahale synchronous wala part execute hoga and after that async code execute hoga

function first(){
    console.log("First");
}
function second(){
    setTimeout(() => {         // async code
        console.log("Second");
    },2000);
}
function third(){
    console.log("Third");
}

first();
second();
third();

// setTimeout() delayed message 
 
setTimeout(() => { 
    console.log("Result processing complete!"); 
}, 4000);

// Callback functions

function fetchData(callback){
    console.log("Data fectched");
    callback();
}
function processData(callback){
    console.log("Data processed");
    callback();
}
function displayData(){
    console.log("Data displayed");
}
// Callback Hell
fetchData(function(){
    processData(function(){
        displayData();
    });
});

// Promises - Promise lifecycle

const promise1 = new Promise((resolve, reject) => {
    let success = false;
    if(success){
        resolve("Task completed");
    }
    else{
        reject("Task failed");
    }
});

console.log(promise1);

// Chaining with .then() -->

const promise2 = new Promise((resolve, reject) => {
    resolve("Data received");
});

promise2.then((result) => {
    console.log(result);
});

console.log(promise2);

// Promise catch() -->

const promise3 = new Promise((resolve, reject) => {
    reject("Something went wrong");
});

promise3.catch((error) => { // catch to handle the error
    console.log(error);
});

console.log(promise3);

// Promise .finally() -->

const promised = new Promise((resolve, reject) => {
    resolve("Done");
});
promised
    .then((result) => {
        console.log(result);
    })
    .finally(() => {
        console.log("Cleaned completed");
    });

// race --> settled problem 
// any -->  return 1st fullfilled promise

// Qutput -->  2 4 8

new Promise((resolve, reject) => {
    resolve(2);
})
.then((num) => {
    console.log(num);
    return num * 2;
})
.then((num) => {
    console.log(num);
    return num * 2;
})
.then((num) => {
    console.log(num);
});

// Helper methods like Promise.all() -->

const p1 = Promise.resolve("First");
const p2 = Promise.resolve("Second");
const p3 = Promise.resolve("Third");

Promise.all([p1, p2, p3])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log(error);
    });

// Promise.race(). -->

const p1 = new Promise((resolve) => {
    setTimeout(() => resolve("First"), 1000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => resolve("Second"), 500);
});

Promise.race([p1, p2])
    .then((result) => {
        console.log(result);
    });

// Question -->

const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Error");

Promise.allSettled([p1, p2])
    .then((results) => {
        console.log(results);
    });

// Output --> Success from p2

const p1 = Promise.reject("Error 1");
const p2 = new Promise((resolve) => {
    setTimeout(() => resolve("Success from p2"), 1000);
});
const p3 = Promise.reject("Error 3");

Promise.any([p1, p2, p3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });