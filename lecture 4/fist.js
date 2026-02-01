//--------------------------------------------------
// array

// // to store the 5 different student marks 

// // 1st approh make 5 different variable to store each then
// let marks_student1 = 97;
// let marks_student2 = 82;
// let marks_student3 = 54;
// let marks_student4 = 35;
// let marks_student5 = 34;

// // 2st approh make object  to store each then
// let marks = {
//     stu1: 32,
//     stu2: 34,
//     stu3: 64,
//     stu4: 75,
//     stu5: 46
// }

// // 3st approh make array  to store each then
// let marks = [94,35,74,45,75];
// // this approh is the best arrroh to inalize over data(similear type of date).


// let marks = [94,35,74,45,75];
// console.log(marks);   // (5) [94, 35, 74, 45, 75]

// console.log(marks.length);   // 5   // property

// let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman"];
// console. log (heroes);  // (5) ['ironman', 'thor', 'hulk', 'shaktiman', 'spiderman']
// console. log (typeof heroes);  // object


//---------------------------------------------------------------------------------------------
// Array Indices  -> importent


// let marks = [94,35,74,45,75];
// console.log(marks);   // (5) [94, 35, 74, 45, 75]
// console.log(marks[0]);  //94
// console.log(marks[3]);  //45
// console.log(marks[5]);  //undefined
// console.log(marks[100]);  //undefined

// marks[3] = 64;
// console.log(marks[3]);  //45 -> 64
// console.log(marks);   // (5) [94, 35, 74, 64, 75]

// // this thing are posible for array not string


// // importent

// let str = "hello";
// console.log(str);  // hello
// str[0] = "y";
// console.log(str);  // hello


//--------------------------------------------------------------------
// Looping over an Array

// using for loop

// let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman"];

// for (let i = 0; i < heroes. length; i++) {
// console. log(heroes [i]);
// }

// ironman
// thor
// hulk
// shaktiman
// spiderman


//-------------------------------------------------------------
// using for-of loop
// gernaly use to print array use for-of loop

// let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman"];

// for (let hero of heroes)
// console. log(hero);


// ironman
// thor
// hulk
// shaktiman
// spiderman


// let cities = ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"];

// for (let city of cities){
// console.log(city);
// }


// delhi
// pune
// mumbai
// hyderabad
// gurgaon




// let cities = ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"];

// for (let city of cities){
// console.log(city.toUpperCase());
// }


// DELHI
// PUNE
// MUMBAI
// HYDERABAD
// GURGAON


// // For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// // Find the average marks of the entire class.

// let arr = [85,97,44,37,76,60];
// let sum =0;

// for(let i = 0;i<arr.length;i++){
//         sum = sum +arr[i];
// }
// let avg = sum /arr.length ;
// console.log("average of marks :", avg);   // average of marks : 66.5



// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for (let val of marks) {
// sum += val;

// }

// let avg = sum / marks. length;
// console. log (`avg marks of the class = ${avg}`);  // avg marks of the class = 66.5

//------------------------------------------------------------------------------------------
// For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after
// applying offer.

// let items = [250, 645, 300, 900, 50];

// let i = 0;
// for (let val of items){
// let offer = val / 10;
// items [i] = items[i] - offer;
// console. log(`value after offer = ${items[i]}`);
// i++;
// }
// console.log(items);



// value after offer = 225
// value after offer = 580.5
// value after offer = 270
// value after offer = 810
// value after offer = 45
// (5) [225, 580.5, 270, 810, 45]



// let items = [250, 645, 300, 900, 50];
// for (let i = 0; i < items. length; i++) {
// let offer = items[i] / 10;
// items [i] -= offer;

// }

// console. log(items);  // (5) [225, 580.5, 270, 810, 45]
