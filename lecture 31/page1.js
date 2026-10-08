// lecture 31

// loops

// --------------------------------------------
// for loop

// for (let i = 0; i < 4; i++) {
//   console.log("hello");
// }

// hello
// hello
// hello
// hello

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
// for (let i = 0; i < 5; i++) {
//   console.log(i+1);
// }

// 1
// 2
// 3
// 4
// 5

// --------------------------------------------
// while loop

// let i = 0 ;
// while(i<=6){
//     console.log(i);
//     i++;

// }

// 1
// 2
// 3
// 4
// 5
// 6

// --------------------------------------------
// do while loop
// do while loop are run at lest run one time

// let i = 1;
// do{
//     console.log(i);
//     i++;
// }while(i<5)

// 1
// 2
// 3
// 4

// let i = 1;
// do{
//     console.log(i);
//     i++;
// }while(false)

// 1

// ------------------------------------------------
// break and continue

// break completely stops the loop.
// continue skips the current iteration and moves to the next iteration.

// for (let i = 1; i <= 5; i++) {
//     if (i === 3) break;
//     console.log(i);
// }

// 1
// 2

// for (let i = 1; i <= 5; i++) {
//     if(i==3){
//         continue;
//     }
//   console.log(i);
// }

// 1
// 2
// 4
// 5

// for (let i = 1; i <= 5; i++) {
//     if(i%2 !=0){
//         continue;
//     }
//   console.log(i);
// }

// 2
// 4

// ------------------------------------------------
// functions

// let alokMarks = 46 + 56 + 23;
// let addiMarks = 24 + 24 + 42;
// let karan = 54 + 23 + 65;
// let anu = 54 + 52 + 23;

// console. log("alokMarks" , alokMarks);  //alokMarks 125

// let productPrice = 3000;
// let discountAmount = 3000 * 10 / 100;
// let deliveryCharge = 50;
// let totalAmount = productPrice - discountAmount + deliveryCharge;

// let productPrice = 3000;
// let discountAmount = 3000 * 10 / 100;
// let deliveryCharge = 50;
// let totalAmount = productPrice - discountAmount + deliveryCharge;

// let productPrice = 3000;
// let discountAmount = (3000 * 10) / 100;
// let deliveryCharge = 50;
// let totalAmount = productPrice - discountAmount + deliveryCharge;

// function are incress the reuseableaty of the code

// function totalMarks(){
//     console.log("hii");
// }

// totalMarks();   //hii

// -----------------------------------------------
// arguments and parameters

// Parameters → variables written in the function definition.
// Arguments → actual values passed when calling the function.

// function add(a, b) {   // a, b → parameters
//     console.log(a + b);
// }

// add(10, 20);           // 10, 20 → arguments

// function totalMarks(studentName, mathMarks, sceinceMarks, sanskritMarks) {
//   console.log(
//     `${studentName} total marks :`,
//     mathMarks + sceinceMarks + sanskritMarks,
//   );
// }
// totalMarks("Alok", 46, 56, 23);
// totalMarks("Addi", 24, 24, 42);
// totalMarks("Karan", 54, 23, 65);
// totalMarks("Anu", 54, 52, 23);

// Alok total marks : 125
// Addi total marks : 90
// Karan total marks : 142
// Anu total marks : 129

// function greetingMsg(userName, greetings){
// console.log(`${greetings}, ${userName}`);
// }

// greetingMsg("Priyanshu" , "Hii")
// greetingMsg("Anshika", "Hello")
// greetingMsg("Satyam" , "Namaste")
// greetingMsg("Saif", "Kemcho")

// Hii, Priyanshu
// Hello, Anshika
// Namaste, Satyam
// Kemcho, Saif

// function calculator(num1, num2, operator) {
//     switch (operator) {
//         case "+":
//             console.log(`${num1} ${operator} ${num2} =`, num1 + num2);
//             break;
//         case "-":
//             console.log(`${num1} ${operator} ${num2} =`, num1 - num2);
//     }
// }

// calculator(4 , 5 , "-");    //4 - 5 = -1

// --------------------------------------------------------------
// default parameter
// A default parameter gives a parameter a default value when no argument is provided.

// function greet(name = "Guest") {
//     console.log("Hello " + name);
// }

// greet("Kartik");  // Hello Kartik
// greet();          // Hello Guest

// function greetingMsg(userName = "Guest", greetings = "hi"){
// console.log(`${greetings}, ${userName}`);
// }

// greetingMsg("Priyanshu" , "Hii")
// greetingMsg("Anshika")
// greetingMsg("Satyam" , "nashte")
// greetingMsg("Saif")
// greetingMsg()

// Hii, Priyanshu
// hi, Anshika
// nashte, Satyam
// hi, Saif
// hi, Guest

// -------------------------------------------------------------------------------

// function greetingMsg(userName, greetings){
// console.log(`${greetings}, ${userName}`);
// }

// greetingMsg("Priyanshu" , "Hii" , 34 ,234)      //Hii, Priyanshu
// // remaning arguments are ignore

// -------------------------------------------------------------------------------
// function totalMarks(mathMarks, scienceMarks, sanskritMarks) {
//   return mathMarks + scienceMarks + sanskritMarks;
// }

// function calPercentage(studentName, mathMarks, scienceMarks, sanskritMarks) {
//   let total = totalMarks(mathMarks, scienceMarks, sanskritMarks);
//   let percentage = (total / 300) * 100;
//   console.log(`${studentName} percentage : ${percentage}`);
//   return percentage;
// }

// let percentage = calPercentage("Alok", 46, 56, 23);
// console.log(percentage);

// Alok percentage : 41.66666666666667
// 41.66666666666667

// ------------------------------------------------------

// function totalMarks(mathMarks, scienceMarks, sanskritMarks) {
//   return mathMarks + scienceMarks + sanskritMarks;
// }

// function calPercentage(studentName, mathMarks, scienceMarks, sanskritMarks) {
//     let total = totalMarks(mathMarks, scienceMarks, sanskritMarks);
//     let percentage = (total / 300) * 100
//     console.log(`${studentName} percentage : ${percentage}`);
// }

// let response = calPercentage("Alok", 46, 56, 23)
// console.log(response);

// Alok percentage : 41.66666666666667
// undefined                // becouse calPercentage function are not return anything

// -------------
// some impurtent conspect

// in node terminal
// > console.log("kartik");
// kartik
// undefined           // by becouse log() function are use and they are not return anything
// The function prints "kartik" but returns nothing, so its return value is:undefined

// -------------------------------------------------------------------------------
// function expression
// A function expression is when we store a function inside a variable.

// question function declaraction and function expression difference

// let add = function (num1, num2) {
//   return num1 + num2;
// };

// let result = add(5, 7);
// console.log(result);    //12

// ---------------
// function expression

// let add = function (num1, num2) {
//   return num1 + num2;
// };

// console.log(add(5, 7));    //12

// -----------------------
// function declaraction
// A function declaration is the normal way of defining a function using the function keyword.

// fun1()                      // in c++  java they are give error    , i use the fun before function declaraction they are not possibse in c++ java
// function fun1(){
//     console.log("function declaration");    //function declaration
// }

// they are posible in function declaraction using hoisting conspect

// but they conspect are not possible in function expression

// console.log(add(5, 7));    //error

// let add = function (num1, num2) {
//   return num1 + num2;
// };

// they are give error
// ReferenceError: Cannot access 'add' before initialization

// -------------------------------------------------------------------------------
// arrow function
// An arrow function is a shorter way to write a function using =>.

// let add = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(add(4, 6));     //10

// --------------------------------------
// console.log(add(4, 6));     //same they are give error

// let add = (num1, num2) => {
// return num1 + num2
// }

// --------------------------------------------------
// three way to write arrow function , shor way

// // syntax 1
// let add = num1 => num1 + 4;
// console.log(add(4, 6));     //8

// // syntax 2
// let add = (num1, num2) => num1 + num2;
// console.log(add(4, 6));     //10

// // synatax 3
// let add = (num1, num2) => {
//     // something
//     // something
//     return num1 + num2
// };
// console.log(add(4, 6));     //10

// If a function does not explicitly return a value, it returns undefined by default.

// function hello() {
//   console.log("Hello");
// }
// let result = hello();
// console.log(result);

// Hello
// undefined

// Why?
// hello()
//    ↓
// console.log("Hello")
//    ↓
// no return statement
//    ↓
// undefined

// function add(a, b) {
//   let sum = a + b;
// }
// console.log(add(5, 7));

// undefined
// Because you calculated sum, but didn't return it.

// If you do:
// function add(a, b) {
//   let sum = a + b;
//   return sum;
// }
// console.log(add(5, 7));

// Output:
// 12

// Important distinction
// console.log() displays something, but return sends a value back from the function.

// function add(a, b) {
//   console.log(a + b);
// }
// let result = add(5, 7);
// console.log(result);

// Output:
// 12
// undefined

// The first 12 is printed by console.log() inside the function.
// The second undefined is because the function didn't return anything.
// So your statement can be written more correctly as:
// "If a JavaScript function does not have a return statement, it returns undefined by default."


// --------------------------------------------------------------
// ctrl +shift +l  select all similer item
