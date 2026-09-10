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

// console. log("alokMarks" , alokMarks);

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


// ctrl +shift +l  select all similer item


// --------------------------------------------------------------
// default parameter


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
//     return mathMarks + scienceMarks + sanskritMarks;
// }

// function calPercentage(studentName, mathMarks, scienceMarks, sanskritMarks) {
//     let total = totalMarks(mathMarks, scienceMarks, sanskritMarks);
//     let percentage = (total / 300) * 100
//     console.log(`${studentName} percentage : ${percentage}`);
//     return percentage
// }

// let percentage = calPercentage("Alok", 46, 56, 23)
// console.log(percentage);


// // Alok percentage : 41.66666666666667
// // 41.66666666666667


// ------------------------------------------------------

// function totalMarks(mathMarks, scienceMarks, sanskritMarks) {
//     return mathMarks + scienceMarks + sanskritMarks;
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

// -------------------------------------------------------------------------------
// 