// destructuring

// destructuring of array

// let product1 = [56835, 4.5, 75, 10,"iphone"]
// const [a,b,c] = [56835, 4.5, 75, 10,"iphone"]
// console.log(a); //56835
// console.log(b); //4.5
// console.log(c); //75

// const [a,b,c,d,e,f,g] = [56835, 4.5, 75, 10,"iphone"]
// console.log(g); //undefined

// let product1 = [56835, 4.5, 75, 10,"iphone"]

// const [name , price ,c ,d] = ["iphone",56835, 4.5, 75, 10]
// console.log(price); //56835
// console.log(name); //iphone
// // console.log(name);       // this syntex are 'name' is deprecated.

// ------------------------------------------------------------------------
// destructuring of object

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

// let { price, printDiscount, avgRating } = product2
// console.log(price ,printDiscount() ,  avgRating);

// undefined        // by undefined , resion this , learn this leacture
// 57633 undefined 4.5          //Function has no return → returns undefined

// let { price, printDiscount, avgRating } = product2
// console.log(price , avgRating); //57633 4.5

// for ( value of Object.keys(product2) ) {
// console. log(value);
// }

// price
// avgRating
// totalRevies
// discount
// productName
// printProductName
// printDiscount

// for ( value of Object.values(product2) ) {
// console. log(value);
// }

// 57633
// 4.5
// 75
// 50
// iphone 25 pro max
// [Function: printProductName]
// [Function: printDiscount]

// for ( value of Object.entries(product2) ) {
// console. log(value);
// }

// [ 'price', 57633 ]
// [ 'avgRating', 4.5 ]
// [ 'totalRevies', 75 ]
// [ 'discount', 50 ]
// [ 'productName', 'iphone 25 pro max' ]
// [ 'printProductName', [Function: printProductName] ]
// [ 'printDiscount', [Function: printDiscount] ]

// for ([key, value] of Object.entries(product2)) {
//     console.log(value);
// }

// 57633
// 4.5
// 75
// 50
// iphone 25 pro max
// [Function: printProductName]
// [Function: printDiscount]

// for ([key, value] of Object.entries(product2)) {
//     console.log(key,value);
// }

// // for ([a, b] of Object.entries(product2)) {
// //     console.log(a,b);
// // }

// price 57633
// avgRating 4.5
// totalRevies 75
// discount 50
// productName iphone 25 pro max
// printProductName [Function: printProductName]
// printDiscount [Function: printDiscount]
