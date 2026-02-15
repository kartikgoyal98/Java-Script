

// function 

// function myFunction() {
// console. log("Welcome to Apna College!");
// console. log ("We are learning JS ") ;
// }
// myFunction();
// myFunction();

// Welcome to Apna College!
// We are learning JS
// Welcome to Apna College!
// We are learning JS


// function myFunction(msg) { // parameter -> input
// console. log (msg) ;
// }

// myFunction();  // undefined
// myFunction("i love js");  // i love js   // this is called argument


// function myFunction(msg,n) { // parameter -> input
// console. log (msg*n) ;
// }
// myFunction("i love js" , 100);  // NaN // this is error , not a number





// function sum(x,y){
//     console.log(x+y);
// }

// sum(5,4);  //9
// sum(43,65);  //108


// return keyboard are return only one value
// function sum(x,y){
//     s = x+y;
//     return s;
// }

// let val = sum(5,4); 
// console.log(val); //9



// function sum(x,y){  
//     s = x+y;
//     console.log("before return");  // before return
//     return s;
//     console.log("after return");  // they are not esuget ,becouse they are write after the return

// }

// let val = sum(5,4); 
// console.log(val); //9



// function sum(x,y){  // x , y these are local variable of this function
//     s = x+y;
//     console.log(x); // 5
//     console.log("before return");  // before return
//     return s;

// }

// let val = sum(5,4); 
// console.log(val); //9
// console.log(x); // error, x is not defined


//-----------------------------------------------------------
// Arrow Functions 
//  // these function are mainly use in mordern js
// this is function variable , mean variable are stroe function
// generally arrow function are use to small function

// //sum function using normal function
// function sum(a, b) {
// return a + b;
// }


// // this is arrow function
// (a, b) => {
// console.log(a + b);
// };


//------------------------------------------------------------
// they can store the arrow function in a variable

// const arrowSum = (a, b) => {
// console.log(a + b);
// };

// console.log(arrowSum);
// // op 
// // (a, b) => {
// // console.log(a + b);
// // }

// arrowSum(5,4); // 9









// //multiplication function using normal function
// function mul(a, b) {
// return a * b;
// }

// //multiplication function using arrow function
// const arrowMult = (a,b) => {
//     console.log(a*b);
// };

// arrowMult(3,6); // 18



// const arrowMult = (a,b) => {
//     return a*b;
// };
// console.log(arrowMult);
// // op 
// // (a,b) => {
// //     return a*b;
// // }

// arrowMult(3,6); // 18


// const printHello = () =>{
//     console.log("hello");
// };

// printHello(); // hello


// const printHello = () => console.log("hello");
// printHello(); // hello



//-------------------------------------------------------------------------

// Qs. Create a function using the “function” keyword that takes a String as an argument &
// returns the number of vowels in the string.

