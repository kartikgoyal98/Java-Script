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

// block use is multiple js stement are reap in a single block of code

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

// let username = "kartik"; // Globle Scope variable
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

// they all are same
// what is the difference b/w block and function scope

// for(let i = 0 ; i < 5 ; i++) {
// }
// console.log(i); // give error
// // ReferenceError: i is not defined

// -------------------------------------------------
// what is the difference b/w block and function scope

// {
//     let city = "delhi"
//     // console.log(username);
//     var country = "India"
// }
// console.log(country);   //India
// they are not give me error

// for(var i = 0 ; i < 5 ; i++) {
// }
// console.log(i);   //5
// they are not give me error

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

// variable use in code prority is , const -> let -> var(not use in code)

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
