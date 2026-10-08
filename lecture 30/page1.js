// lecture 30

// operators
// arithmetic operater

// let num1 = 2;
// let num2 = 4;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num2 / num1);
// console.log(num2 % num1);
// console.log(num1 ** num2);

// 6
// -2
// 8
// 2
// 0
// 16

// -----------------------------------------
// case sensitive
// teeno variable different hai

// let NAME = "saif"
// let name = "juhi"
// let Name = "karan"

// -----------------------------------------

// let num = 32;
// num++;      // post increment
// console.log(num);   //  33

// let num = 32;
// ++num;      // pre increment
// console.log(num);   //  33
// console.log(++num);   //  34
// console.log(num++);   //  34
// console.log(num);   //  35

// -----------------------------------------
// assignment operater

// let num = 2;
// num += 5;
// console. log(num);  //7
// num -= 5;
// console. log(num);  //2
// num *= 5;
// console. log(num);  //10
// num /= 5;
// console. log(num);  //2
// num %=5;
// console. log(num);  //2
// num **= 5 ;
// console. log(num);  //32

// -----------------------------------------
// comparison operater

// const num1 = 3;
// const num2 = 6;

// console.log(3 > 6)
// console.log(3 < 6)
// console.log(3 >= 6)
// console.log(3 <= 6)
// console. log(3 == 6)
// console.log(3 != 6)

// -----------------------------------------

// // loose equality
// console.log(5==5);  //true
// console.log("5"==5);  //true

// // strict equality(give prority)
// console.log(5===5);  //true
// console.log("5"===5); //false

// -----------------------------------------
// logical operator

// console.log(true && true);
// console.log(true && false);
// console.log(true || false);
// console.log(false || false);

// const age = 18;
// const hasId = true;
// const canEnterClub = age >= 18 && hasId === true;
// console. log(canEnterClub); // true

// const age = 17;
// const hasId = true;
// const canEnterClub = age >= 18 && hasId === true;
// console. log(canEnterClub); // false

// console.log(!true)  //false
// console.log(!false) //true
// console.log(!43)    //false
// console.log(!0)     //true

// truthy values , falsy value ko chode kar all are truthy values

// --------------------------
// not a number (NAN)

// console.log("hello"/5); //NaN
// console.log(typeof NaN); //number

// ----------------------------------------------------------------
// conditionals

// const isLoggedIn = true;

// if (isLoggedIn) {
//   console.log("You can like, comment");
// } else {
//   console.log("Please first login");
// }

// You can like, comment

// let temp = 40;

// if (temp >= 25) {
//   console.log("Ac chala do");
// } else {
//   console.log("Acc mat chalao");
// }

// Ac chala do

// let day = "monday";

// if (day === "monday") {
//   console.log("1st day of the week");
// } else if (day === "tuesday") {
//   console.log("2nd day of the week");
// } else if (day === "wed") {
//   console.log("3rd day of the week");
// } else if (day === "thu") {
//   console.log("4th day of the week");
// } else if (day === "fri") {
//   console.log("5th day of the week");
// } else if (day === "sat") {
//   console.log("6th day of the week");
// } else if (day === "sun") {
//   console.log("7th day of the week");
// } else {
// console. log("Wrong day");
//  }

// 1st day of the week

// ----------------------------------------------------------------
// nested if else jio hotstar

// const isLoggedIn = true;
// const isSubscribed = false;

// if (isLoggedIn) {
//   if (isSubscribed) {
//     console.log("You can access premium content.");
//   } else {
//     console.log("You dont have anu premium plan to access this content.");
//   }
// } else {
//   console.log("Please login");
// }

// You dont have anu premium plan to access this content.

// ----------------------------------------------------------------
// switch case

// switch (exprection not condtion)

// const day = "fri";

// switch (day) {
//   case "mon":
//     console.log("1st day of the week");
//   case "tue":
//     console.log("2nd day of the week");
//   case "wed":
//     console.log("3rd day of the week");
//   case "thu":
//     console.log("4th day of the week");
//   case "fri":
//     console.log("5th day of the week");
//   case "sat":
//     console.log("6th day of the week");
//   case "sun":
//     console.log("7th day of the week");
//   default:
//     console.log("Wrong day");
// }

// 5th day of the week
// 6th day of the week
// 7th day of the week
// Wrong day

// use brack in this code

// const day = "fri";

// switch (day) {
//   case "mon":
//     console.log("1st day of the week");
//     break;
//   case "tue":
//     console.log("2nd day of the week");
//     break;
//   case "wed":
//     console.log("3rd day of the week");
//     break;
//   case "thu":
//     console.log("4th day of the week");
//     break;
//   case "fri":
//     console.log("5th day of the week");
//     break;
//   case "sat":
//     console.log("6th day of the week");
//     break;
//   case "sun":
//     console.log("7th day of the week");
//     break;
//   default:
//     console.log("Wrong day");
// }

// 5th day of the week
