//! callback = function that is passed as an argument
//!            to another function

//?            used to handle asynchronous operations:
//?            1. Reading a file
//?            2. Network requests
//?            3. Interacting with databases

//*            "Hey, when you,re done, call this next."


//* example1

// function hello(){
//     console.log("Hello!")
// }

// function goodBye(){
//     console.log("Goodbye!")
// }

// hello();
// goodBye();

//* base = hello - 3s

// function hello(){
//     setTimeout(function () {
//         console.log("Hello!")
//     }, 3000);
// }

// function goodBye(){
//     console.log("Goodbye!")
// }

// hello();

//* example2

// function hello(callback){
//     console.log("Hello!")
//     callback();
// }

// function wait(){
//     console.log("Wait!")
// }

// function leave(){
//     console.log("Leave!")
// }

// function goodBye(){
//     console.log("Goodbye!")
// }

// hello(wait);

//* example3

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}

sum(displayPage, 32, 45);