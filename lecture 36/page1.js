// lecture 36

// they are importent for interview

// var a = 5;
// console.log(a); //5

// console.log(a); //undefined      // resion is hoisting
// var a = 5;

// let a = 5;
// console.log(a); //5

// console.log(a); // error    // resion is TDZ
// let a = 5;
// ReferenceError: Cannot access 'a' before initialization

// const a = 5;
// console.log(a); //5

// console.log(a); // error    // resion is TDZ
// const a = 5;
// ReferenceError: Cannot access 'a' before initialization

// fun1();
// function fun1() {
//   console.log("Hii");
// }
// Hii

// function fun1() {
//     console.log("Hii");
// }
// fun1();
// Hii

// fun2();
// var fun2 = function () {
//   console.log("hello");
// };
// TypeError: fun2 is not a function

// fun2();
// const fun2 = function () {
//   console.log("hello");
// };
// ReferenceError: Cannot access 'fun2' before initialization

// fun2();
// let fun2 = function () {
//   console.log("hello");
// };
// ReferenceError: Cannot access 'fun2' before initialization

// how js excute internally

// -------------------------------------
// execution context

// var a = 5;
// let b = 10;
// console. log(a + b);

var a = 5;
let b = 10;
console.log(a + b);

function fun1() {
  let num1 = 10;
  let num2 = 20;
  return num1 + num2;
}
const result = fun1();

console.log(result);
