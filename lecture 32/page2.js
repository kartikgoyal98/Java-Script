// array

// let pro1Name = "tshirt"
// let pro1Price = 5234

// console.log(pro1Name , pro1Price);  //tshirt 5234

// let pro2Name = "lower"
// let pro2Price = 532

// let pro3Name = "cap"
// let pro3Price = 54

// let products = ["tshirt", "lower", "cap", "shoes" ]
// console.log(products);  //[ 'tshirt', 'lower', 'cap', 'shoes' ]

// console.log(products[2], products[3]);  //cap shoes
// console.log(typeof(products));  //object
// console.log(products.length);   //4

// let str ="kartik"
// console.log(str.length);    //6

// let lastIndex = products.length - 1;
// console.log(products[lastIndex]);   //shoes

// console.log(products.at(-4));   //tshirt

// for(let i=0; i < products.length; i++){
// console. log(products[i]);
// }

// tshirt
// tshirt
// lower
// cap
// shoes

// --------------------------------------------------

// let products = [["tshirt", 566], ["lower", 543], ["cap", 53], ["shoes", 673]]

// let firstProduct = products[0]
// console.log(firstProduct[0]);   //tshirt
// console.log(products[0]);   //[ 'tshirt', 566 ]

// console.log(products[0][0]); // order depend    //tshirt

// for (let i = 0; i < products.length; i++) {
//     console.log(products[i][0] ,products[i][1]);
// }

// tshirt 566
// lower 543
// cap 53
// shoes 673

// for (let i = 0; i < products.length; i++) {
//     console.log(products[i][1]); // wrong tarika -> kal mtlb lec 33 mai hoga sahi tarika
// }

// 566
// 543
// 53
// 673

// ---------------------------------------------------------------
// let products = ["tshirt", "lower", "cap", "shoes"]

// products.push("hello") // last mai add krta hai
// console.log(products);  //[ 'tshirt', 'lower', 'cap', 'shoes', 'hello' ]

// products.pop() // last se delete karo
// console.log(products);  //[ 'tshirt', 'lower', 'cap', 'shoes' ]

// products.unshift("hello") // start mai add krta hai
// console.log(products);    // [ 'hello', 'tshirt', 'lower', 'cap', 'shoes' ]

// products.shift() // start se delete krta hai
// console.log(products);  //[ 'tshirt', 'lower', 'cap', 'shoes' ]
