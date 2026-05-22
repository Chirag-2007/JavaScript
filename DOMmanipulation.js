// HTML wali id ko JS ma fetch karne le kiya use hota h...
const word = document.getElementById("word");

// // innerHTML and innerText

word.innerHTML = "<h2>Sataya hi Shiv Hai</h2>";
// Sataya hi Shiv Hai
word.innerText = "<h2>Sataya hi Shiv Hai</h2>";
// <h2>Sataya hi Shiv Hai</h2>

// onclick button --> alert message will pop up...

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    alert("Hello Guys");
})

// Whenever we move the cursor towards the text then it will disappear and when we remove the mouse out the the text will visivle -->

const text = document.querySelector("#text");
text.addEventListener("mouseover", () => {
    text.style.visibility = "hidden";
});

text.addEventListener("mouseout", () => {
    text.style.visibility = "visible";
});

// createElement and appendChild that in the body of browser...

let div = document.createElement('div');
div.id = 'content';
div.innerHTML = "<p>This is a div made with JS...</p>"
document.body.appendChild(div);

// CSS styling with JS -->

const text = document.getElementById("text");

text.innerHTML = "Hello Guys 😎😎";
text.style.color = "red";
text.style.fontSize = "40px";
text.style.fontWeight = "700";
document.body.style.backgroundColor = "red";

// JS using ClassName -->
const a1 = document.getElementsByClassName("a1");

// JS using querySelectorAll - Take as a nodelist -->

const a1 = document.querySelectorAll(".a1");

a1[0].innerHTML = "First";
a1[1].innerHTML = "Second";

// Acessing nodelist -->

// Using for loop -->

for(let i = 0; i < a1.length; i++){
    a1[i].style.backgroundColor = "red";
}

// Using forEach loop --> 

a1.forEach((elm) => {
    elm.style.color = "white";
});

// createElement and appendChild using JS -->

let heading = document.createElement("h3");
heading.innerHTML = "What's Up";
document.body.appendChild(heading);

// Create button using createElement -->

let btn = document.createElement("button");
btn.innerText = "Agree";
btn.id = "btn";
document.body.appendChild(btn);
btn.style.color = "Red";

// Remove the Element
document.body.removeChild(btn);

// mouseover and mouseout -->

const btnn = document.getElementById("btnn");
btnn.style.backgroundColor = "Red";
btnn.style.color = "white";

btnn.addEventListener("mouseover", () => {
    text.innerHTML = "Hello Brother";
    btnn.style.color = "black";
})

btnn.addEventListener("mouseout", () => {
    text.innerHTML = "Hello Guys";
    btnn.style.color = "white";
})

// keyup and keydown -->

document.addEventListener("keyup", ()=> {
    text.innerHTML = "Hello 😎😎";
})
document.addEventListener("keydown", () => {
    text.innerHTML = "Hi 😎😎";
})

// Type karte hu console pr typing... aaaega -->

const name = document.getElementById("name");

name.addEventListener("input", () => {
    console.log("Typing...");
});

// Click karte hi random value aajaega -->

const randomVal = document.getElementById("random");

randomVal.addEventListener("click", () => {
    console.log(Math.random());
});

// Capturing and bubbling -->

// By default bubbling hota h...
// When capturing is true event capturing if false then bubbling...

const grandparent = document.getElementById("grandparent")
const parent = document.getElementById("parent")
const child = document.getElementById("child")

grandparent.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Grandparent");
}, { capture: false });

parent.addEventListener("click", (e) => {
    console.log("Parent");
}, { capture: false });

child.addEventListener("click", (e) => {
    console.log("Child");
}, { capture: false });

// Button ka text console pr aaega -->

const button = document.querySelectorAll("#random");

button.forEach(button => {
    button.addEventListener("click", (event) => {
        console.log(event.target.innerText);
    });
});

// Agar parent div ma child button hoga to oska text console pr aajaega...

const div = document.querySelector('div');

div.addEventListener("click", (event) => {
    if(event.target.tagName === 'BUTTON'){ // tagName uppercase me return hota hai...
        console.log(event.target.innerText);
    };
});

// Form Validation -->

document.getElementById("myform").addEventListener("submit", function(e){
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let error = "";

    if(name === ""){
        error += "Name is required.\n";
    };
    if(email === ""){
        error += "Email is required.\n";
    }
    else if(!validateEmail(email)){
        error += "Invalid email format.\n";
    }
    if(error !== ""){
        e.preventDefault(); // stop form submission
        alert(error);
    }
    else{
        e.preventDefault();
        console.log("Form Submitted");
    }

function validateEmail(email){ // IMPORTANT
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // Checking email validation...
    return pattern.test(email);
}
});

// /^ start of a string
// [^ ]+ one or more non space characters, where [] indicates character set [^ ] isme ^ and [^ ] space inside is any character except space and + indicated one or more items
// @ for email part
// [^ ]+ represent (domain name)  one or more non space characters
// /. where / escape(literal) and dot .
// [a-z]{2,3} // [a-z] lowercase letters only and {2,3} length of the chacter
// $ end of the string (ensure that nothing will come after this)

// Print BUTTON in the console -->

function myFunction(event){
    let element = event.currentTarget.tagName;
    console.log(element);
}

// currentTarget vs target--> IMPORTANT

// target → jis element par actually click hua.
// currentTarget → jis element par event listener laga hai.

// Html Code
<div onclick="myFunction(event)">
    <button>Click Me</button>
</div>
// JS Code
function myFunction(event){
    console.log(event.target.tagName); // BUTTON
    console.log(event.currentTarget.tagName); // DIV
}

// When we onClick the button the function will evoked -->

function myfunction1(){
    document.getElementById("myDIV").classList.add("myStyle");
}

function myfunction2(){
    document.getElementById("myDIV").classList.remove("myStyle");
}

function myfunction3(){
    document.getElementById("myDIV").classList.toggle("myStyle");
}