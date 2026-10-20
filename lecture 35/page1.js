// lecture 35

// scope

// scope is releated to variable(assessbality of variable)

// scope are three types
// globle , function , block scope

// -----------------------------------------------------
// Globle Scope

// Globle Scope variable are Globlelly accessable

// let username = "kartik"; // Globle Scope variable

// -----------------------------------------------------
// Block Scope

// block use is multiple js stament are reap in a single block of code

// if (true) {
//   console.log("hello");
// }
//hello

// if (true) console.log("hello");
// console.log("hii");   // hii              // they are not in if block

//hello

// -----------------

// let username = "kartik"; // Globle Scope variable
// {
//   let city = "delhi";
//   console.log(username);
// }

// kartik

// let username = "kartik";
// {
//   let city = "delhi";
//   console.log(username);
// }
// console.log(city);  // give error  // beco city are block scope varible
// // ReferenceError: city is not defined

// let username = "kartik";
// {
//   let city = "delhi";   // city is the block Scope variable,its limit in over block
//   console.log(username);
//   console.log(city);
// }
// kartik
// delhi

// -----------------------------------------------------
// function Scope

// function hello(){
//     let state = "Uttar Pradesh"
// }

// console.log(state); // give error  becos state is the function Scope variable
// ReferenceError: state is not defined

// function hello(){
//     let state = "Uttar Pradesh"
//     console.log(state);
// }
// hello();    //Uttar Pradesh

// for(let i = 0 ; i < 5 ; i++) {
// }
// console.log(i); // give error
// // ReferenceError: i is not defined

// -------------------------------------------------
// what is the difference b/w block and function scope

// {
//     let city = "delhi"
//     var country = "India"
// }
// console.log(country);   //India // they are not give me error
// console.log(city);   //ReferenceError: city is not defined


// for(var i = 0 ; i < 5 ; i++) {
// }
// console.log(i);   //5
// they are not give me error
// but i use let give error

// if(true){
//     var mobile = 92059437034

// }
// console.log(mobile);    //92059437034
// they are not give me error

// if(true){
//     let mobile = 92059437034
// }
// console.log(mobile);    // giev error
// ReferenceError: mobile is not defined

// function hello(){
//     var productName = "Iphone 1000 pro ulta max"
// }
// console.log(productName);   //give error
// ReferenceError: productName is not defined

// in function are not access in var in outside the variable
// it is the difference b/w block and function scope

// var are function scope , i can not access var outside the function scope
// let are block scope , i can not access let outside the block scope
// const are block scope , i can not access const outside the block scope

// variable use in code prority is , const > let > var(not use in code)
// Block scope is let and const
// function scope var

// function counter(){
//     let count = 0
//     count = count + 1
//     console.log(count);
// }

// counter()   //1

// function counter(){
//     let count = 0
//     count = count + 1
//     console.log(count);
// }

// counter()
// counter()

// 1
// 1

// function call(invoke)

// let count = 0
// function counter(){
//     count = count + 1
//     console.log(count);
// }

// counter()
// counter()

// 1
// 2

// let count = 2
// function counter(){
//     let count = 0;
//     count = count + 2
//     console.log(count);
// }

// counter()
// counter()

// 2
// 2

// fist propity is over block then globle




// ------------------------------------------------------------------------------
// What is Scope in JavaScript?

// Scope is the area of a program where a variable or function can be accessed.
// In simple words, scope decides where you can use a variable in your code.

// let name = "Kartik";
// function greet() {
//     console.log(name);
// }
// greet();    //Kartik

// function greet() {
//     let n = "Kartik";
// }
// greet();
// console.log(n); //ReferenceError: name is not defined


// ------------------------------------------------------------------------------
// Types of Scope in JavaScript

// 1. Global Scope
// A variable declared globally can be accessed from many places in the program, subject to how it is declared and the execution environment.

// A variable declared outside functions and blocks is often in the global scope when used in a regular script.

// let username = "Kartik";
// function display() {
//     console.log(username);
// }
// display();
// console.log(username);

// Kartik
// Kartik

// var a = 10;
// let b = 20;
// const c = 30;
// function test() {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// test();

// 10
// 20
// 30

// All three variables are accessible throughout the code in which they are declared globally.
// However, there's an important difference in browser JavaScript.

// Declaration	Global  scope	Becomes a property of window?
// var	        Yes	    Yes, when declared at the top level of a classic script
// let	        Yes	    No
// const	    Yes	    No

// For example, in a browser's classic script:

// var x = 100;
// let y = 200;
// console.log(window.x); // 100
// console.log(window.y); // undefined

// Note: These window results apply to classic browser scripts, not necessarily ES modules or Node.js.

// ----------------------------------
// Global Scope vs Local Scope

// Global Scope

// let age = 21;
// function showAge() {
//     console.log(age);
// }
// showAge() // 21

// Local (Function) Scope

// function test() {
//     let marks = 90;
//     console.log(marks); // 90
// }
// test();
// console.log(marks); // ReferenceError

// ----------

// let count = 10;
// function updateCount() {
//     count = 50;
// }
// updateCount();
// console.log(count); // 50

// let count = 10;
// function test() {
//     let count = 50;
//     console.log(count);
// }
// test();
// console.log(count);
// 50
// 10

// Variables declared with let and const inside a block {} are block-scoped, even when the block is at the top level.

// {
//     let a = 10;
//     var b = 20;
// }

// console.log(b); // 20
// console.log(a); // ReferenceError


// ------------------------------------------------------------------------------
// Function Scope

// Function scope means a variable declared inside a function is accessible only within that function.

// var is function-scoped.
// let and const are block-scoped, but if declared inside a function, they are also limited to that function and its inner scopes.

// function calculate() {
//     let marks = 90;
//     console.log(marks);
// }
// calculate();
// console.log(marks);

// 90
// ReferenceError: marks is not defined

// function test() {
//     var x = 10;
//     let y = 20;
//     const z = 30;

//     console.log(x, y, z);
// }
// test(); //10 20 30

// function test() {
//     var x = 10;
//     console.log(x);
// }

// test();
// console.log(x); // ReferenceError

// function demo() {
//     if (true) {
//         var a = 10;
//         let b = 20;
//         const c = 30;
//     }

//     console.log(a); // 10
//     console.log(b); // ReferenceError
//     console.log(c); // ReferenceError
// }

// demo();

// let x = 100;
// function show() {
//     let y = 200;

//     console.log(x);
//     console.log(y);
// }
// show();
// console.log(x);
// console.log(y); // ReferenceError

// 100
// 200
// 100
// ReferenceError

// function test() {
//     var a = 10;

//     if (true) {
//         var a = 20;
//     }

//     console.log(a);
// }

// test();     //20

// ------------------------------------------------------------------------------
// Block Scope

// Variables declared with let and const inside a block {} are accessible only within that block.

// {
//     let a = 10;
//     const b = 20;

//     console.log(a);
//     console.log(b);
// }
// console.log(a);
// console.log(b);

// 10
// 20
// ReferenceError: a is not defined

// {
//     var a = 10;
//     let b = 20;

//     console.log(a);
//     console.log(b);
// }

// console.log(a);
// console.log(b);

// 10
// 20
// 10
// ReferenceError: b is not defined

// if (true) {
//     let marks = 90;
//     const name = "Kartik";

//     console.log(marks); // 90
//     console.log(name);  // Kartik
// }

// console.log(marks); // ReferenceError

// let x = 100;

// {
//     let y = 200;

//     {
//         let z = 300;
//         console.log(x); // 100
//         console.log(y); // 200
//         console.log(z); // 300
//     }

//     console.log(y); // 200
//     console.log(z); // ReferenceError
// }

// let a = 10;

// if (true) {
//     let a = 20;
//     console.log(a);
// }

// console.log(a);
// 20
// 10



// Difference between var, let, and const
// Feature	                                                                var	                              let	                                    const
// Scope	                                                                Function-scoped	                  Block-scoped	                            Block-scoped
// Redeclaration in the same scope	                                        Allowed	                          Not allowed	                            Not allowed
// Reassignment	                                                            Allowed	                          Allowed	                                Not allowed
// Hoisting	                                                                Yes; initialized with undefined   Yes; inaccessible before initialization	Yes; inaccessible before initialization
// Must initialize at declaration?	                                        No	                              No	                                    Yes
// Global window property in a classic browser script	                    Yes, at top level	              No	                                    No
// Temporal Dead Zone (TDZ)	                                                No	                              Yes	                                    Yes

