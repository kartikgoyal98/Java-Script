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


// ------------------------------------------------------------------------
// spread operater

// let product1 = [56835, 4.5, 75, 10, "iphone"]
// const [n,p] = ["iphone", 56835, 4.5, 75, 10]

// let arr = [53, 15, 626, 7, 43, 57, 23, 54, 752, 43]

// console.log(Math.min(53, 15, 626, 7, 43, 57, 23, 54, 752, 43)); //7
// console.log(Math.min([53, 15, 626, 7, 43, 57, 23, 54, 752, 43])); //NaN
// console.log(Math.min(arr)); //NaN

// console.log(arr);
// [
//   53, 15, 626,   7, 43,
//   57, 23,  54, 752, 43
// ]

// apply spread
// console.log(...arr);
// 53 15 626 7 43 57 23 54 752 43

// console.log(Math.min(...arr)); //7
// sperad operater are use when you unbox , unpacking , opening speradeing element

// also use to merge

// let a = [1, 2]
// let b = [3, 4]

// let c = [a,b]
// console.log(c); //[ [ 1, 2 ], [ 3, 4 ] ]

// let c = [...a, ...b] // array merging by spread operator
// console.log(c); //[ 1, 2, 3, 4 ]
// console.log(...c); //1 2 3 4

// ------------------------------------------------------------------------
// rest operator

// they are use to pack , combine the element
// they are return the array

// let product1 = [56835, 4.5, 75, 10, "iphone"]
// let arr = [53, 15, 626, 7, 43, 57, 23, 54, 752, 43]

// const [n,p,...hello] = ["iphone", 56835, 4.5, 75, 10]
// console.log(hello); //[ 4.5, 75, 10 ]// rest operator are combine the remaining iten in the array

// function add(num1, num2) {
// return num1 + num2
// }
// console.log(add(4, 5)); //9

// when i add so many element
// function add(num1, num2) {
// return num1 + num2
// }
// console.log(add(4, 5 ,34,324,53,6,45,345,6435,342)); //9

// function add(numbers) {
// console.log(numbers);
// }
// console.log(add(4, 5 ,34));

// 4
// undefined

// function add(...numbers) {
// console.log(numbers);
// }
// console.log(add(4, 5 ,34));

// [ 4, 5, 34 ]
// undefined

// function add(num1,...numbers) {
//     console.log(num1);

// console.log(numbers);
// }
// console.log(add(4, 5 ,34));

// 4
// [ 5, 34 ]
// undefined

// function add(...numbers,num1) {
//     console.log(num1);

// console.log(numbers);
// }
// console.log(add(4, 5 ,34));

// SyntaxError: Rest parameter must be last formal parameter
// error is Rest parameter can not the last parameter

// function add(...numbers) {
// console.log(numbers);
// }
// console.log(add(4, 5 ,34));

// [ 4, 5, 34 ]
// undefined

// function add(...numbers) {
//     let total = 0;
//     for (value of numbers) {
//         total += value
//     }
//     return total;
// }
// console.log(add(4, 5, 2546, 254, 2));   //2811

// let { price , productName , ... remaining } = product2
// console. log(price , productName , remaining);

// 57633 iphone 25 pro max {
//   avgRating: 4.5,
//   totalRevies: 75,
//   discount: 50,
//   printProductName: [Function: printProductName],
//   printDiscount: [Function: printDiscount]
// }

// let product2 = {
//   price: 57633,
//   avgRating: 4.5,
//   totalRevies: 75,
//   discount: 50,
//   productName: "iphone 25",
//   variants: ["pro", "base", "pro max"],
//   manufacturerDetail: {
//     city: "Dhampur",
//     state: "Up",
//     country: "India",
//     price: 30000,
//   },
//   printProductName: function () {
//     console.log(this.productName);
//   },
//   printDiscount() {
//     console.log(this.discount);
//   },
// };

// let { price , productName , ... privateDetail } = product2
// console. log(price , productName , privateDetail);

// 57633 iphone 25 {
//   avgRating: 4.5,
//   totalRevies: 75,
//   discount: 50,
//   variants: [ 'pro', 'base', 'pro max' ],
//   manufacturerDetail: { city: 'Dhampur', state: 'Up', country: 'India', price:30000 },
//   printProductName: [Function: printProductName],
//   printDiscount: [Function: printDiscount]
// }

// let { manufacturerDetail , ...userKeLiyeDetail } = product2; // rest
// console.log(userKeLiyeDetail);

// {
//   price: 57633,
//   avgRating: 4.5,
//   totalRevies: 75,
//   discount: 50,
//   productName: 'iphone 25',
//   variants: [ 'pro', 'base', 'pro max' ],
//   printProductName: [Function: printProductName],
//   printDiscount: [Function: printDiscount]
// }
