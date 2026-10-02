"use strict"


// lecture 38

// this keyword

// let student = {
//     name: "kartik",
//     printName: function () {
//         console.log("kartik");
//     }
// }

// student.printName();    //kartik

// let student = {
//     name: "kartik",
//     printName: function () {
//         console.log(name);
//     }
// }

// student.printName();    // give error
// ReferenceError: name is not defined

// let student = {
//     name: "kartik",
//     printName: function () {
//         console.log(this);
//     }
// }

// student.printName();
//{ name: 'kartik', printName: [Function: printName] }

// let student = {
//     name: "kartik",
//     printName: function () {
//         console.log(this.name);
//     }
// }

// student.printName();   //kartik

// let student = {
//     name: "kartik",
//     printName: function () {
//         console.log(this.name);
//     }
// }

// let result = student.printName;
// console.log(result);            //[Function: printName]

// let student = {
//     name: "kartik",
//     printName: function () {
//         console.log(this.name);
//     }
// }

// let result = student.printName;
// result();            //undefined

// let student = {
//     name: "kartik",
//     printName: function () {
//         console.log("hi" , this.name);
//     }
// }

// let result = student.printName;
// result();   //hi undefined

// function fun1() {
//     let name = "Fariha"
//     function fun2() {
//         console.log(name);
//     }
//     return fun2;
// }
// let result2 = fun1()
// result2()   //Fariha

// function fun1() {
//     let name = "Fariha"
//     function fun2() {
//         console.log(name);
//     }
//     name = "Iqra"
//     return fun2;
// }
// let result2 = fun1()
// result2()   //Iqra

// let student = {
//     name: "kartik",
//     printName: function () {
//         console.log("hi" , this.name);
//     }
// }

// let result = student.printName;
// student.printName();    //hi kartik
// result();   //hi undefined

// ------------------------------------------------------
// they have two envirement to run js
// 1. node.js 2. browser

// they run in node.js

// function fun1(){
//     console.log(this);
// }
// fun1()

// <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     Symbol(nodejs.util.promisify.custom): [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     Symbol(nodejs.util.promisify.custom): [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   crypto: [Getter],
//   navigator: [Getter]
// }

// in node
// console.log(this);  //{}

// they run in browser

// function fun1(){
//     console.log(this);
// }
// fun1()

// they give another output
// give window object
// Window

// console.log(this);  // window object

// --------------------------------------
// window object is a globle object

// in node
// console.log(global);
// console.log(global === this);   //false
// console.log(global === globalThis);   //true

// ----------------------
// in browser

// > window
// give window  object

// > window === this
// < true

// > globalThis
// give window object

// > globalThis === window
// < true

// -------------------------------------------

// a = "kartik";
// console.log(a);     //kartik

// "use strict"
// a = "kartik";
// console.log(a);     //give error bcs use "use strict"
// ReferenceError: a is not defined

// "use strict"
// let a = "kartik";
// console.log(a);     //kartik

// -------------------------------------------
// let student = {
//   name: "Aman",
//   printName: function () {
//     console.log("Hii,", student.name);
//   },
// };
// student.printName();

// let student2 = {
//   name: "Pritam",
//   printName: student.printName,
// };

// student2.printName();

// Hii, Aman
// Hii, Aman

// let student = {
//   name: "Aman",
//   printName: function () {
//     console.log("Hii,", this.name);
//   },
// };
// student.printName();

// let student2 = {
//   name: "Pritam",
//   printName: student.printName,
// };

// student2.printName();

// Hii, Aman
// Hii, Pritam

// rule  : function declaraction me . notation ke side me jo thing ha us ke value . ke right me assine ho ge
// ex:
// student2.printName();



// -------------------------------------
