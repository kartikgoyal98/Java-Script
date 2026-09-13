// lecture 32

// -----------------------------------------------------------------
// Builtin objects

// function convertToPositiveNumber(num){
//     return num * -1 ;
// }
// let positiveNum = convertToPositiveNumber(-10)

// console.log(positiveNum);   //10

// let positiveNum2 = Math.abs(-10)
// console.log(positiveNum2);      //10

// console.log(Math.PI);   //3.141592653589793

// console.log(Math.pow(2,3));     //8
// console.log(2 ** 3);        //8

// console.log(Math.sqrt(25));     //5

// console.log(Math.min(2,4,1,4,3,5,-6,7));    //-1
// console.log(Math.max(5,2,6,3,6,3,2,6,3,6,79,4));    //79

// console.log(Math.round(5.6));   //6
// console.log(Math.round(3.3));   //3
// console.log(Math.round(7.3));   //7
// console.log(Math.round(8.9));   //9
// console.log(Math.round(1.5));   //2

// console.log(Math.round(2.634345));  //3

// console.log(Math.ceil(4.1));    //5
// console.log(Math.ceil(4.0));    //4
// console.log(Math.ceil(4.7));    //5
// console.log(Math.floor(7.0));   //7
// console.log(Math.floor(7.3));   //7
// console.log(Math.floor(7.9));   //7

// ----------------------------------------------------------
// Math.random()
// they are give value 0(include) to 1(exclude)

// console.log(Math.random());     //0.7434886572003738  // they are give random value

// let min = 1 ;
// let max = 6 ;
// let result = Math.floor(Math.random() * (max - min + 1)) + min

// console.log(result);

// ----------------------------------------------------------
// use in number

// console.log(Number.isFinite(Infinity));     //false
// console.log(Number.isFinite(435));     //true

// console.log("56");      // 56 // they give string
// console.log(Number.parseInt("56")); // 56 // they give number
// console.log(Number.parseInt("a")); // NaN // they give number

// let num1 = "45"; // backend
// let num2 = "75"; // backend is aai hai
// console.log(num1 + num2); // 2 string ko add kar rahe ho    //4575
// console.log(parseInt(num1) + parseInt(num2));   //120

// let num = 49.7524652266
// console.log(num.toFixed());     //50
// console.log(num.toFixed(1));    //49.8

// let num1 = 49.7524652266
// console.log(num1.toPrecision());    //49.7524652266
// console.log(num1.toPrecision(0));    //49.7524652266
// console.log(num1.toPrecision(1));    //5e+1
// console.log(num1.toPrecision(3));    //49.8

// ----------------------------------------------------------
// use in string

// console.log("nishant".toUpperCase());   //NISHANT

// let str = "Hello Dosto"
// console.log(str.includes("ello"));  //true
// console.log(str.includes("Ello"));  //false

// let email = "example@email.com"
// console.log(email.includes("@") && email.includes("."));    //true

// let fileName = "image.pdf"
// console.log(fileName.endsWith(".png") || fileName.endsWith(".jpg"));    //true

// let greet = "hello Dosto, hello bachoo";
// console.log(greet.replace("hello","Hii"));  //Hii Dosto, hello bachoo
// console.log(greet.replaceAll("hello","Hii"));   //Hii Dosto, Hii bachoo

// ----------------------------------------------------------
// use Date functions

// console.log(Date.now()); // to get currect unix timestamp

// let date = new Date();
// console.log(date.getDay());     //5 (friday)
// console.log(date.getMonth());   //8(sept)
// console.log(date.getFullYear());//2026
// console.log(date.toLocaleDateString()); //11/9/2026
// console.log(date.toLocaleTimeString()); //8:31:59 pm
// console.log(date.toDateString());   //Fri Sep 11 2026
