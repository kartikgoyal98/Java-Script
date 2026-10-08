// Conditional Statements

//----------------------------
// if Statement

// let age =25;
// if(age >= 18){
//     console.log("you can vote");  // you can vote
// }

//-----------------
// let age =16;
// if(age >= 18){
//     console.log("you can vote");
// }
// if(age < 18){
//     console.log("you cannot vote");  //you cannot vote
// }

//------------------------
// let mode = "dark";
// let colour;
// if(mode === "dark"){
//     colour = "black";
// }
// if(mode === "light"){
//     colour = "white";
// }
// console.log(colour);   // black

//-------------------------------------
// let mode = "light";
// let colour;
// if(mode === "dark"){
//     colour = "black";
// }
// if(mode === "light"){
//     colour = "white";
// }
// console.log(colour);   // white

//-------------------------------------------
// // if-else Statement

// let mode = "light";
// let colour;

// if(mode === "dark"){
//     colour = "black";
// }
// else{
//     colour = "white";
// }
// console.log(colour);   // white

//----------------------------------
// let mode = "blue";
// let colour;

// if(mode === "dark"){
//     colour = "black";
// }
// else{
//     colour = "white";
// }
// console.log(colour);   // white

//----------------------------------
// let age =25;

// if(age >= 18){
//     console.log("you can vote");
// }
// else{
//     console.log("you cannot vote");  //you can vote
// }

//----------------------------------------------------------
// let num = 10;
// if(num % 2 === 0){
//     console.log(num,"is even");  //10 'is even'
// }
// else{
//     console.log(num,"is odd");
// }

// //-----------------------------------------------------------
// // else-if Statement

// let mode = "dark";
// let color;

// if (mode === "dark") {
//   color = "black";
// } else if (mode === "blue") {
//   color = "blue";
// } else if (mode === "pink") {
//   color = "pink";
// } else {
//   color = "white";
// }

// console.log(color); // black

// if (mode === "dark") {
//   console.log(mode); //dark
// }

//------------------------------------------------------------
// Ternary Operators
// this is simpler , compact if - else

// let age = 25;

// let result = age >= 18 ? "adult" : "not adult";
// console. log(result); //adult

// let age = 16;
// age >= 18 ? console. log("adult") : console. log("not adult");  // not adult

//----------------------------------------------------------------------
// Let‘s Practice

// Qs1. Get user to input a number using prompt(“Enter a number:”).
// Check if the number is a multiple of 5 or not.

// let Name = prompt("hello!");   // prompt is use input to user
// console.log(Name);   //kartik goyal

// let number = prompt("enter the number ");  // 8
// if(number % 5 === 0){
//     console.log(number ,"number is multiple of 5");
// }
// else{
//     console.log(number ,"number is not multiple of 5");  // 8 number is not multiple of 5
// }

//-------------------------------------------------------------------------------------------------
// Qs2. Write a code which can give grades to students according to their scores:
// 90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// let number = Number(prompt("Enter the number"));

// if (number >= 90 && number <= 100) {
//     console.log(number, "Grade A");
// }
// else if (number >= 70 && number <= 89) {
//     console.log(number, "Grade B");
// }
// else if (number >= 60 && number <= 69) {
//     console.log(number, "Grade C");
// }
// else if (number >= 50 && number <= 59) {
//     console.log(number, "Grade D");
// }
// else if (number >= 0 && number <= 49) {
//     console.log(number, "Grade F");
// }
// else {
//     console.log("Invalid marks");
// }

// 89 'Grade B'

// let score = 62;
// let grade;

// if (score >= 90 && score <= 100) {
//   grade = "A";
// } else if (score >= 70 && score <= 89) {
//   grade = "B";
// } else if (score >= 60 && score <= 69) {
//   grade = "C";
// } else if (score >= 50 && score <= 59) {
//   grade = "D";
// } else if (score >= 0 && score <= 49) {
//   grade = "F";
// }

// console.log("according to your scores, your grade was : ", grade);

// // according to your scores, your grade was :  C
