// loops

// console.log("hello what are you doing .");
// console.log("hello what are you doing .");
// console.log("hello what are you doing .");
// console.log("hello what are you doing .");
// console.log("hello what are you doing .");

// hello what are you doing .
// hello what are you doing .
// hello what are you doing .
// hello what are you doing .
// hello what are you doing .

//-----------------------------------------------
// using for loop

// for (let count =1;count<=5;count++){
//     console.log("hello what are you doing .");   // hello what are you doing .  // they are execute 5 times

// }
// console.log("loop has ended");   // loop has ended

// //Calculate sum of 1 to 5
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
// sum = sum + i;
// }
// console. log ("sum = ", sum);  // sum =  15

//--------------------------------------------
// for (let i = 1; i <= 5; i++) {
//   console.log("i =", i);
// }

// i = 1
// i = 2
// i = 3
// i = 4
// i = 5

// console.log(i); // give error // i is not defined

//-------------------------------------------------
// Infinite Loop : A Loop that never ends
// never do in it over program

// //----------------------------------------------------------
// // while Loop

// let i = 1;
// while (i <= 5) {
//   console.log("i=", i);
//   i++;
// }

// i = 1
// i = 2
// i = 3
// i = 4
// i = 5

// let i = 1;
// while (i <= 5) {
//   console.log("learn loops");  // 5 learn loops
//   i++;
// }

//----------------------------------------------------
// do-while Loop

// let i = 20;
// do {
// console. log("Apna College");  // Apna College
// i++;
// } while (i <= 10);

// let i = 1;
// do {
// console. log("Apna College");  // 10 Apna College
// i++;
// } while (i <= 10);

//-----------------------------------------------------
// for-of Loop

// let str = "ApnaCollege";

// for (let i of str) {
// console.log("i=", i);  // i = iterator -> characters

// }

// i= A
// i= p
// i= n
// i= a
// i= C
// i= o
// i= l
// i= e
// i= e
// i= g

// let str = "JavaScript";

// let size = 0;
// for (let val of str) {
// console. log("i=", i);
// size++;

// }

// console. log("string size = ", size); //10

//-----------------------------------------------------
// for-in Loop

// let student = {
// name: "Rahul Kumar",
// age: 20,
// cgpa: 7.5,
// isPass: true,

// };

// for (let key in student) {
// console. log (key) ;
// }

// name
// age
// cgpa
// isPass

// let student = {
//   name: "Rahul Kumar",
//   age: 20,
//   cgpa: 7.5,
//   isPass: true,
// };

// for (let key in student) {
//   console.log("key=", key, " value=", student[key]);
// }

// key= name  value= Rahul Kumar
// key= age  value= 20
// key= cgpa  value= 7.5
// key= isPass  value= true

//-------------------------------------------------------------------
// Print all even numbers from 0 to 100.

// for(let i = 0;i<=100;i++){
//     if(i%2===0){
//         console.log(i); // Print all even numbers from 0 to 100.
//     }
// }

//---------------------------------------------------------------------------------------
// Create a game where you start with any random game number. Ask the user to keep
// guessing the game number until the user enters correct value.

// let gameNum = 25;
// let userNum = prompt("Guess the game number : ");

// while (userNum != gameNum) {
// userNum = prompt("You entered wrong number. Guess again : ");
// }
// console. log("congratulations, you entered the right number");

//op= congratulations, you entered the right number
