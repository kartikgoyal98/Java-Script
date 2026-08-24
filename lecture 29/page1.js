// console.log("hello kartik");    //hello kartik
// console.log(4+3);   // 7

// another way to run js in ternimal

// gaura@DESKTOP-JIG37LE MINGW64 ~/Documents/Java-Script (main)
// $ node -v
// v24.18.1

// gaura@DESKTOP-JIG37LE MINGW64 ~/Documents/Java-Script (main)
// $ node
// Welcome to Node.js v24.18.1.
// Type ".help" for more information.
// > console.log("hello kartik");
// hello kartik
// undefined
// > 352+23332
// 23684

// crtl + c
// they are use to exit the terminal

// another way to use the js in the browser
// press F12 key
// to open the inspect , using console

// --------------------------------------------------------
// how can use index.js file using cli(commend line interface)

// using cli / terminal

// use ls commend to find path for current folder
// use parent forder(of the js file ) open integrage terminal

// gaura@DESKTOP-JIG37LE MINGW64 ~/Documents/Java-Script/lecture 29 (main)
// $ node page1.js
// hello kartik
// 7

// -----------------------------------------------------------------

// console.log("hello kartik");    //hello kartik
// console.log("hello kartik")    //hello kartik
// console , they are printing area
// log , are use to print

// console.log(3+4);   //7
// console.log("39+2");    //39+2
// console.log("39+32 = ",39+32);    //39+32 =  71

// ----------------------------------
// variable

// age = 24;
// console.log(age); // 24
// name = "kartik ";
// console.log(name); // kartik
// console.log(age,name); //24 kartik

// ----------------------------------
// keywords

// var age; // declaration
// age =23; // initialization
// var age = 23;    // declaration and initialization both together

// var , let , const

// var age = 23;
// console. log(age)   //23
// var age = 24; // re-declaration allowed
// console. log(age);  //24

// age = 25;   // updation  allowed
// console. log(age);  //25

// let name = "nishant";
// console. log(name); //nishant
// // let name = "saini"; // re-declaration not allowed
// name = "saini" // updation allowd
// console.log(name);  //saini

// const aadharCard = 9879862345689;
// console. log(aadharCard);   //9879862345689

// const aadharCard = 74656354463; // re-declaration not allowed // give error
// aadharCard = 62546246464; // updation not allowed
// console. log(aadharCard);

// ----------------------------------
// variable naming rules

// correct variable name
// let $price = 5000;
// let _crazy = "nishant";
// let age = 23;

// let if = "nishant"; // reserved keyword not allowed

// naming are use in camelCase

// ----------------------------------
// datatype

// let collegeName = "London Academy"
// console. log(typeof collegeName);   //string

// let mobileNumber = 523452354;
// console. log(typeof mobileNumber);  //number
// console.log(typeof(mobileNumber)); //number

// let discount = 56.23
// console.log(typeof(discount)); //number
// discount = "off"
// console.log(typeof(discount)); //string

// const doubleQuote = "hiiiii dostooo";
// console. log(doubleQuote);//hiiiii dostooo

// const singleQuote = 'hi my name is nishant';
// console. log(singleQuote);  //hi my name is nishant

// const templateLiteral = `Hello dosto
// Hii Addi`;
// console. log(templateLiteral);

// Hello dosto
// Hii Addi

// const userName = "Manu"
// const greetingMessage = `Hii, ${userName}`
// console. log(greetingMessage);  //Hii, Manu

// const userName = "Manu"
// const greetingMessage = `Hii, ${ console. log("nested console. log") }`
// console. log(greetingMessage);

// nested console. log
// Hii, undefined

// let user;
// console.log(user); // undefined
// console.log(typeof user); // undefined

// let products = null ;
// console. log(products); //null
// console. log(typeof products); //object

// let isLoggedIn = true
// console.log(isLoggedIn);    //true
// console.log(typeof isLoggedIn); //boolean
