
// lecture 45

// call back function and call back hell

// -----------------------------------------------------------------------
// call back function

// function fun1() {
//     console.log("Hii");
// }
// fun1()

// Hii

// function fun1(callback) {           // callback = cd()      // callback = variable / parameter
//     console.log("Hii");
//     callback()                  // calling function 
// }
// function cb() {
//     console.log("This is callback function");

// }

// fun1(cb)    // cd = arguments  // passing the reference , not call cd()

// Hii
// This is callback function

// let n = "Nishant"
// function hello(ne) {        // ne = n 
// console. log(ne) ;
// }
// hello(n)

// Nishant

// --------------------------------------
// call back function are two type
// 1. syhchronous 
// 2. asyhchronous 

// 1. Synchronous Callback: A callback function that executes immediately during the current sequence of execution.
// 2. Asynchronous Callback: A callback function that executes later, after an asynchronous operation completes or an event occurs.
// js not block the thread , they excuted in the end of the program
// --------------------------------------
// 1. Synchronous Callback function

// function fun1(callback) {         
//     console.log("Hii");
//     callback()              
// }
// function cb() {
//     console.log("This is callback function");
// }
// fun1(cb) 

// Hii
// This is callback function

// they are Synchronous Callback function

// let arr = ['a','b','c','d'];
// arr.forEach();
// arr.map();

// --------------------------------------
// high order function

// any function that takes a function as a argument 
// or
// any function that return a function 

// ----------------------------------------------------
// any function that takes a function as a argument 
// example

// function fun1(callback) {         
//     console.log("Hii");
//     callback()              
// }
// function cb() {
//     console.log("This is callback function");
// }
// fun1(cb) 

// Hii
// This is callback function

// ---------------------------------------------
// any function that return a function 
// example

// function a(){
//     function b(){

//     }
//     return b;
// }

// ---------------------------------------------
//  2. Asynchronous Callback function

// function searchPizza() {
//     console.log("Pizza searching ... ");
//     setTimeout(function () {
//         console.log("Here is the Pizza's Menu.");
//     }, 2000)

// }
// searchPizza()

// Pizza searching ... 
// Here is the Pizza's Menu.


// function searchPizza(cb1) {
//     console.log("Pizza searching ... ");
//     setTimeout(function () {
//         console.log("Here is the Pizza's Menu.");
//         cb1()
//     }, 2000)
// }

// function addToCart() {
//     console.log("Pizza added to cart");

// }

// searchPizza(addToCart)


// Pizza searching ... 
// Here is the Pizza's Menu.
// Pizza added to cart


// function searchPizza() {
//     console.log("Pizza searching ... ");
//     setTimeout(function () {
//         console.log("Here is the Pizza's Menu.");
//         return 500;
//     }, 2000)
// }

// let output = searchPizza();
// console.log(output);

// Pizza searching ... 
// undefined
// Here is the Pizza's Menu.


// function searchPizza(cb1) {
//     console.log("Pizza searching ... ");
//     setTimeout(function () {
//         console.log("Here is the Pizza's Menu.");
//         let price = 500;
//         cb1(price)
//     }, 2000)
// }
// searchPizza(function (price) {
//     console.log(price);

// })

// Pizza searching ... 
// Here is the Pizza's Menu.
// 500



// function searchPizza(cb1) {
//     console.log("Pizza searching ... ");
//     setTimeout(function () {
//         console.log("Here is the Pizza's Menu.");
//         let price = 500;
//         cb1(price)
//     }, 2000)
// }

// function addToCart(cb2) {
//     console.log("Pizza adding to cart ... ");
//     setTimeout(function () {
//         console.log("Pizza Added to cart");
//         cb2()
//     }, 3000)
// }

// function paymet(price , cd3) {
//     console.log(`Payment Initiated , Amount : ${price}`);
//     setTimeout(function () {
//         console.log(`Payment Completed, Amount : ${price}`);
//         cd3()
//     }, 5000)
// }

// // this is call back hell
// searchPizza(function (price) {
//     addToCart(function () {
//         paymet(price, function () {
//             console.log("Bss aa hee gaya pizza");

//         })
//     })

// })


// // Pizza searching ... 
// // Here is the Pizza's Menu.
// // Pizza adding to cart ... 
// // Pizza Added to cart
// // Payment Initiated , Amount : 500
// // Payment Completed, Amount : 500
// // Bss aa hee gaya pizza

// ------------------------------------------------
// call back hell se ek problem aa te ha 
// inversion of control

// function searchPizza(cd1) {
//     console.log("Pizza searching...");
//     setTimeout(function fun1() {
//         console.log("Here is the Pizza's Menu.");
//         let price = 500;
//         cd1(price)
//     }, 2000)
// }

// function addToCart(cb2) {
//     console.log("Pizza adding to cart...");
//     setTimeout(function fun2() {
//         console.log("Pizza Added to cart");
//         cb2()
//     }, 3000)
// }

// function paymet(price) {
//     console.log(`Payment Initiated , Amount : ${price}`);
//     setTimeout(function fun3() {
//         console.log(`Payment Completed, Amount : ${price}`);
//         console.log("Bss Aa hee gaya Pizza");
//     }, 5000)
// }

// searchPizza(function a(price) {
//     addToCart(function b() {
//     paymet(price)
// })
// })