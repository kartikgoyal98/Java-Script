// hoisting

// let a = 6;
// console.log(a); //6

// console.log(a); // give error
// let a = 6;
// ReferenceError: Cannot access 'a' before initialization

// console.log(a); //undefined
// var a = 6;

// console.log(a); //give error
// const a = 6;
// ReferenceError: Cannot access 'a' before initialization

// -------------------------------
// hoisting me variables & function declaration top per chale jate hai and you can use before declaraction and inalication


// Hoisting is JavaScript's behavior where declarations are processed before the code is executed.
// let , var , const are hoisted variable

// function addNum() {
//     console.log("Hello");
// }
// addNum()
// Hello

// addNum()         // this is hoisting
// function addNum() {
//     console.log("Hello");
// }
// // Hello

// let addTwoNum = function () {
//   console.log("function expression");
// };
// addTwoNum();    //function expression

// addTwoNum();    //give error
// let addTwoNum = function () {
//   console.log("function expression");
// };
// ReferenceError: Cannot access 'addTwoNum' before initialization

// addTwoNum(); //give error   // addTwoNum() are not define ,they are function
// var addTwoNum = function () {   // addTwoNum is varible not function
//   console.log("function expression");
// };
// TypeError: addTwoNum is not a function

// simple explain
// addTwoNum(); //give error   // addTwoNum are undefine and i call this , so they give error
// // console.log(addTwoNum); //undefined // for better understanding
// var addTwoNum = function () {
//   console.log("function expression");
// };

// hoisted mean memory me variable create ho gane
// -------------------------------------------------------
// how is js code executed (revision)

// code are executed two part
// 1. creation phase 2. exection phase

// -------------------------------------------------------
// temporal dead zone
// variable creation se leker initialization tak ke bech ke time ko temporal dead zone kahate ha
// they are mainly let and const

// console.log(a); //undefined
// var a = 5;

// console.log(a); // temporal dead zone
// let a = 5;
// SyntaxError: Identifier 'a' has already been declared

// -------------------------------------------------------

// let x = 6;
// function random(){
//     console.log(x);
//     let x = 3
// }
// random()
// ReferenceError: Cannot access 'x' before initialization

// var x = 6;
// function random(){
//     console.log(x);
//     var x = 3
// }
// random()
// undefined

// ----------------------------------------------
// lexical(sequence) scoping


// let city = "Delhi"

// function printCity() {
//     console.log(city);
// }

// function random(fn) {       // (variable)fn = printCity
//     let city = "Varanasi"
//    fn()
// }

// random(printCity)   // printCity is call back function
// Delhi

// -------------------------------
// let city = "Delhi";

// function random(fn) {
//   let city = "Varanasi";
//   function printCity() {
//     console.log(city);
//   }
//   return printCity  //  they are return function
// }
// console.log(random());

// [Function: printCity]        // they are return function

// -------------------------------

// let city = "Delhi";

// function random(fn) {
//   let city = "Varanasi";
//   function printCity() {
//     console.log(city);
//   }
//   return printCity  //  they are return function
// }
// let printCity = random();
// console.log(printCity); //[Function: printCity]
// printCity() 

// Varanasi

// -------------------------------

// function outter(){

//     function inner(){
//     }
//     inner() // right 
// }

// -------------------------------
// how can use inner() to out side the function

// function outter(){

//     function inner(){
//     }
//     inner() // right 
// }

// inner() 
// ReferenceError: inner is not defined

// -------------------------------

// function outter(){

//     function inner(){
//     }
//     inner() // right 

//     return inner // ??
//     return inner() // ??
// }

// inner() 


// function outter(){
//     function inner(){
//     }
//     return inner 
// }

// const result = outter()
// console.log(result);    //[Function: inner]

// function outter(){
//     function inner(){
//     }
//     return inner()
// }

// const result = outter()
// console.log(result);    //undefined

// function outter(){
//     function inner(){
//         return 10
//     }
//     return inner()
// }

// const result = outter()
// console.log(result);    //10

// function outter(){
//     function inner(){
//         return 10
//     }
//     return inner
// }

// const result = outter()
// console.log(result);    //[Function: inner]

// ---------------------------------------------------
// lexical enviroment
// inner function = variable + parent(outer) ke envirement ke informaction ho te ha

// function outter(){
//     let username = "nishant"   
//     function inner(){         // ye go function ha iske pase inske variable ke informaction ho te and and apne parent envirement ke informaction ho te ha
//         console.log(username);
//     }
//     return inner
// }

// const inner = outter()
// inner()
// nishant

// function outter(){
//     let username = "nishant"   
//     function inner(){         // ye go function ha iske pase inske variable ke informaction ho te and and apne parent envirement ke informaction ho te ha
//         console.log(username);
//     }
//     return inner
// }

// const inner = outter()
// console.log(inner);     //[Function: inner]

// fark nahi karta ke aap function ko kaha call karareho , fark parta ha ham function kaha par return ha ra ha


// function outter(){
//     function inner(){
//         console.log(username);
//     }
//     return inner
// }

// const inner = outter()
// console.log(inner);         //[Function: inner]
// let username = "dhruv"
// inner()
// // dhruv


// function fun1(){
//     let username = "nishant"

//     function fun2(){

//         function fun3(){

//             function fun4(){
//                 console.log(username);
//             }
//             fun4()

//         }

//         fun3()

//     }
//     fun2()

// }

// fun1()
// nishant