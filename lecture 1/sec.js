// // use let keybord

// let fullname = "kartik goyal";
// console.log(fullname);  // op kartik goyal

// let age = 24;
// let totalPrice = 1000;
// console.log(age);  // op 24
// console.log(totalPrice);  // op 1000

// variable cannot be re-decalared but can be updated.

// let age = 24;
// age = 67;
// age = 35;
// console.log(age);   // op 35

//------------------------------
// this conspect only let

// let a;
// console.log(a);   // op undefined

// let a;
// a=10;
// console.log(a);   // op 10

//---------------------------------
// let is a block scope variable

// {
//     let a=5;
//     console.log(a);  // op  5
// }

// {
//     let a=10;
//     console.log(a);  // op  10
// }

// {
//     let a=5;
//     let a=10;  //give error Identifier 'a' has already been declared
//     console.log(a);  // op  5
// }

//-----------------------------------

// use var keybord
// var is not use in modern js

// var fullname = "kartik goyal";
// console.log(fullname);  // op kartik goyal

// var age = 24;
// var totalPrice = 1000;
// console.log(age);  // op 24
// console.log(totalPrice);  // op 1000

//---------------------------------------

// Variable can be re-declared & updated., this is the problem of var
// they are not give me error
// this is not correct way to write code

// var age = 24;
// var age = 67;
// var age = 35;
// console.log(age);   // op 35

//-------------------------------------------

// use const keyboard
// Variable cannot be re-declared or updated.

// const age = 24;
// console.log(age);   // op 24

// const PI = 3.14;
// console.log(PI);  // op 3.14

//--------------------

// const a;
// console.log(a);  // op  give error Missing initializer in const declaration

// const a = 10;
// console.log(a);  // op  10

//---------------------------------------

// Data Types in JS

// (1) Primitive Data type

// // Number data type
// let age = 24;
// console.log(age);  // op  24
// console.log(typeof(age));  //  op number

// let totalPrice = 1000.43;
// console.log(totalPrice);  // op  1000.43
// console.log(typeof(totalPrice));  //  op number

//------------------------------------------------------
// // string data type
// let fullname = "tony start";
// console.log(fullname);  //  op  tony start
// console.log(typeof(fullname));   // op string , mean fullname is the string data type

//-------------------------------------------------------
// //boolean data type
// isfollow = true;
// console.log(isfollow);   // op true
// console.log(typeof(isfollow));   // op  boolean

//--------------------------------------------------------
// // undefined data type
// let x;
// console.log(x); // op undefined
// console.log(typeof(x)); // op undefined

//---------------------------------------------------------
// // NULL data type
// let x = null;
// console.log(x); // op null
// console.log(typeof(x)); // op object

//---------------------------------------------------------
// // BigInt data type
// // they are use to store the big integer
// let x = BigInt("12345678");
// console.log(x); // op 12345678n
// console.log(typeof(x)); // op bigint

//---------------------------------------------------------
// // Symbol data type
// // they are use to store the Symbol

// let x = Symbol("hello!");
// console.log(x); // op Symbol(hello!)
// console.log(typeof(x)); // op symbol

//------------------------------------------------

// (2) NOn-Primitive Data type
// NOn-Primitive Data type are mainly declair to const

// const student = {
//     fullName : "kartik Goyal",
//     age : 20,
//     cgpe : 8.9,
//     ispass : true,
// };
// console.log(student);  // op {fullName: 'kartik Goyal', age: 20, cgpe: 8.9, ispass: true}
// console.log(student.fullName);  // op  kartik Goyal
// //another way
// console.log(student["age"]);  // op  20
// console.log(typeof(student));   // op  object

// student["age"] = student["age"] +1;
// console.log(student["age"]);  // op  21

// student.age = student.age +1;
// console.log(student.age);  // op  22

// student.fullName = "goyal";
// console.log(student.fullName);   // op goyal

// // -------------------------------------------

// const fname = "rahul";
// fname = "kumar";  // op give error Assignment to constant variable.
// // they can not change constant variable  but inside the keys of constant object you if you can change the object

// // but yah error not give
// const student = {
//     fullName : "kartik Goyal",
//     age : 20,
//     cgpe : 8.9,
//     ispass : true,
// };
// student.fullName = "goyal";
// console.log(student.fullName);   // op goyal

// const product = {
//     title : "Ball pen ",
//     rating : 4,
//     offer : 5,
//     price : 270 ,
// };
// console.log(product);  // op {title: 'Ball pen ', rating: 4, offer: 5, price: 270}

// const profile = {
//   username: " @tushare ",
//   isfollow: false,
//   followers: 123,
//   following: 453,
// };
// console.log(profile);  //op {username: ' @tushare ', isfollow: false, followers: 123, following: 453}
// console.log(typeof(profile));  // op  object
// console.log(typeof profile);   // op  object
// console.log(typeof profile.username);  // op string
// console.log(typeof profile["username"]);  // op string
