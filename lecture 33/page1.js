// lecture 33

// ----------------------------------------------------------
// Objects

// // in array

// let product1 = [56835, 4.5, 75, 10,"iphone"]
// console.log(product1[0]);   //56835
// console.log(typeof product1);   //object

// in objects

// let product2 = {
//     price: 57633,           // price is key , 57633 are value of key
//     avgRating: 4.5,
//     totalRevies: 75,
//     discount: 50,
//     productName: "iphone 25 pro max",
//     printProductName : function(){
//         console.log(this.productName);
//     },
//     printDiscount(){
//         console.log(this.discount);
//     }
// };

// console.log(product2);

// {
//   price: 57633,
//   avgRating: 4.5,
//   totalRevies: 75,
//   discount: 50,
//   productName: 'iphone 25 pro max',
//   printProductName: [Function: printProductName],
//   printDiscount: [Function: printDiscount]
// }

// console.log(product2.printProductName());   //iphone 25 pro max
// console.log(product2.printDiscount);    //[Function: printDiscount]
// console.log(product2.price);    //57633

// ----------------------------------------------

// let product2 = {
//     price: 57633,
//     avgRating: 4.5,
//     totalRevies: 75,
//     discount: 50,
//     productName: "iphone 25 pro max",
//     4567 : "iphone"                         // 4567 they are number
// };

// console.log(product2);

// {
//   '4567': 'iphone',                      // in output 4567 are make string
//   price: 57633,
//   avgRating: 4.5,
//   totalRevies: 75,
//   discount: 50,
//   productName: 'iphone 25 pro max'
// }

// console.log(product2.productName);  //iphone 25 pro max
// // console.log(product2.4567);  // they give error not correct syntex
// console.log(product2[4567]);    //iphone
// console.log(product2['4567']);    //iphone

// in array

// let product1 = [56835, 4.5, 75, 10,"iphone"]
// console.log(product1[0]);   //56835
// console.log(product1['0']);   //56835
// console.log(product1['4']);   //iphone

// array ke indexs , array ke key hote ha

// ----------------------------------------------

// let product2 = {
//     price: 57633,
//     avgRating: 4.5,
//     first_name : "kartik",   // they are valid syntex
//     // first-name : "kartik"   // they are not valid syntex  , solution is write in ""
//     "last-name" : "goyal"
// };

// console.log(product2);

// {
//   price: 57633,
//   avgRating: 4.5,
//   first_name: 'kartik',
//   'last-name': 'goyal'
// }

// let Math2 = {           // objects
//     abs() {     // methods

//     },
//     ceil() {    // methods

//     },
//     floor() {   // methods

//     }
// }

// Math2.ceil();

// let product2 = {
//     price: 57633,
//     avgRating: 4.5,
//     totalRevies: 75,
//     discount: 10,
//     productName: "iphone",
//     printProductName: function() {         // methods
//         console.log("Iphone 18 pro max");
//     },
//     printDiscount() {                       // methods
//         console.log("10%");
//     }
// }

// product2.printDiscount();  //10%
// product2.printProductName();    //Iphone 18 pro max

// let product2 = {
//     price: 57633,
//     avgRating: 4.5,
//     totalRevies: 75,
//     discount: 10,
//     productName: "iphone",
//     printProductName: function() {         // methods
//         console.log("Iphone 18 pro max");
//         return "345678"
//     },
//     printDiscount() {                       // methods
//         console.log("10%");
//     }
// }

// // outside the object they are function and inside the object they are method.
// let res = product2.printProductName();      // function
// console.log(res);

// Iphone 18 pro max
// 345678

// let product2 = {
//     price: 57633,
//     avgRating: 4.5,
//     totalRevies: 75,
//     discount: 10,
//     productName: "Iphone 18 pro max",
//     printProductName: function() {
//         console.log(productName);
//     },
//     printDiscount() {
//         console.log("10%");
//     }
// }

// let res = product2.printProductName();
// console.log(res);

// ReferenceError: productName is not defined

// when you acces the key inside the object useing method use this keyword

// ----------------------------------------------

// let product2 = {
//     price: 57633,
//     avgRating: 4.5,
//     totalRevies: 75,
//     discount: 50,
//     productName: "iphone 25 pro max",
//     printProductName : function(){
//         console.log(this.productName);
//     },
//     printDiscount(){
//         console.log(this.discount);
//     }
// }

// product2.printDiscount();   //50
// product2.printProductName() //iphone 25 pro max

// this keybord current object ko batata ha

// let product2 = {
//     price: 57633,
//     avgRating: 4.5,
//     totalRevies: 75,
//     discount: 50,
//     productName: "iphone 25 pro max",
//     printProductName : function(){
//         console.log(product2.productName);
//     },
//     printDiscount(){
//         console.log(product2.discount);
//     }
// }

// product2.printDiscount();   //50
// product2.printProductName() //iphone 25 pro max

// ----------------------------------------------

// let product2 = {
//     price: 57633,
//     avgRating: 4.5,
//     totalRevies: 75,
//     discount: 50,
//     productName: "iphone 25 pro max",
//     printProductName: function () {
//         console.log(this.productName);
//     },
//     printDiscount() {
//         console.log(this.discount);
//     }
// }

// product2.printDiscount();   //50
// product2.printProductName() //iphone 25 pro max

// console.log(Object.keys(product2));
// [
//   'price',
//   'avgRating',
//   'totalRevies',
//   'discount',
//   'productName',
//   'printProductName',
//   'printDiscount'
// ]

// console.log(Object.values(product2));
// [
//   57633,
//   4.5,
//   75,
//   50,
//   'iphone 25 pro max',
//   [Function: printProductName],
//   [Function: printDiscount]
// ]

// console.log(Object.entries(product2));
// [
//   [ 'price', 57633 ],
//   [ 'avgRating', 4.5 ],
//   [ 'totalRevies', 75 ],
//   [ 'discount', 50 ],
//   [ 'productName', 'iphone 25 pro max' ],
//   [ 'printProductName', [Function: printProductName] ],
//   [ 'printDiscount', [Function: printDiscount] ]
// ]

// uses of object.value/keys/entries
// ------------------------------------------------------------------------
// for of loop      // used for array

// let product1 = [56835, 4.5, 75, 10, "iphone"]     // array

// for( value of product1){
//     console.log(value);
// }

// 56835
// 4.5
// 75
// 10
// iphone

// using for loop , more complex than for of loop // shortcut is use for of loop
// for( let  i = 0 ; i < product1.length; i++){
//     console.log(product1[i]);
// }

// 56835
// 4.5
// 75
// 10
// iphone

// ------------------------------------------------------------------------
// for each method  // used for array

// product1.forEach(function(value , index){
//     console.log(value , index);
// })

// 56835 0
// 4.5 1
// 75 2
// 10 3
// iphone 4

// for each method , callback function leta ha

// --------------------------------------------------

// function b(num) {
//     console.log(num);
//     num()
//     console.log("b");
// }

// b(function a() {            // this is callback function
//     console.log("a");
// })

// a
// b
// ------------------------------------

// function b(fun) {
//         console.log("b");
//         console.log(fun);
// }

// b(function() {            // this is callback function
//     console.log("a");
// })

// b
// [Function (anonymous)]

// ------------------------------------
// function b(fun){
//     console.log("b");
//     console.log(fun);
//     fun()
// }

// let a = function(){
//     console.log("a");
// }

// b(a)

// b
// [Function: a]
// a

// ------------------------------------------------------------------------
// for in loop  // used for objects // they are return keys

// for ( value in product2){
//     console.log(value);
// }

// price
// avgRating
// totalRevies
// discount
// productName
// printProductName
// printDiscount

// for ( value in product1){       // product1 are array but loop are return the key of the array(index)
//     console.log(value);
// }

// 0
// 1
// 2
// 3
// 4

// for ( value in product1){
//     console.log(product1[value]);
// }

// 56835
// 4.5
// 75
// 10
// iphone

// product1. forEach((value , index) => console. log(value , index))

// 56835 0
// 4.5 1
// 75 2
// 10 3
// iphone 4
