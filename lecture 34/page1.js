// lecture 34

// ----------------------------------------------------------
// destructuring of the object revision

// let student = {
//     name: "varad",
//     rollNo: 34,
//     subjects: ["math", "english", "hindi"],
// }

// jis ke destructuring karne ha do right side jayego
// order meter nahi karta object me

// let {subjects,name,rollNo} = student
// console.log(subjects);      //[ 'math', 'english', 'hindi' ]

// let { ... variable } = student
// console. log(variable);

// {
//   name: 'varad',
//   rollNo: 34,
//   subjects: [ 'math', 'english', 'hindi' ],
// }

// let { ... variable,name } = student
// console. log(variable);     // error

// let { name,...variable } = student
// console. log(variable);

// {
//   rollNo: 34,
//   subjects: [ 'math', 'english', 'hindi' ],
// }

// rest operater in the last

// -------------------------------------------------------
// how to rename key of object

// let student = {
//     name: "varad",
//     rollNo: 34,
//     subjects: ["math", "english", "hindi"],
// }

// let vidhay = student.subjects;
// console.log(vidhay);    //[ 'math', 'english', 'hindi' ]

// another way
// let { subjects,...variable } = student
// let vidhay = subjects;
// console.log(vidhay);    //[ 'math', 'english', 'hindi' ]

// another way
// let { subjects: vidhay,...variable } = student
// console.log(vidhay);    //[ 'math', 'english', 'hindi' ]

// console.log(subjects);    // after updarte varible give error

// -----------------------------------------------------------------
// give default value

// let student = {
//     name: "varad",
//     rollNo: 34,
//     subjects: ["math", "english", "hindi"],
// }

// let { subjects: vidhay,totalMarks,...variable } = student
// console.log(totalMarks);    //undefined

// let { subjects: vidhay,totalMarks = 500,...variable } = student
// console.log(totalMarks);    //500

// let student = {
//     name: "varad",
//     rollNo: 34,
//     subjects: ["math", "english", "hindi"],
//     totalMarks : 600    // over ride
// }

// let { subjects: vidhay,totalMarks = 500,...variable } = student          //totalMarks = 500 , they are set defaultly
// console.log(totalMarks);    //600

// -----------------------------------------------------------------
// how to merge object using sperade operater

// let obj1 = {
//   name: "nishant",
//   phone: 7825763245,
// };

// let india = "jaipur";

// let obj2 = {
//   address: india, // india is the varible
//   adharCard: 5223452345543,
// };

// let obj3 = {...obj1,...obj2}
// console.log(obj3);

// {
//   name: 'nishant',
//   phone: 7825763245,
//   address: 'jaipur',
//   adharCard: 5223452345543
// }

// let obj1 = {
//   name: "nishant",
//   phone: 7825763245,
// };

// let obj2 = {
//   address: "jaipur",
//   adharCard: 5223452345543,
//   name : "kartik"
// };

// let obj3 = {...obj1,...obj2}
// console.log(obj3);
// property are not duplete in object
// in object key are unice

// When spreading objects, if the same property exists in both objects,
// the later object overwrites the earlier value.

// {
//   name: 'kartik',
//   phone: 7825763245,
//   address: 'jaipur',
//   adharCard: 5223452345543
// }

// let obj1 = {
//   name: "nishant",
//   phone: 7825763245,
//   name : "kartik"
// };

// console.log(obj1);
// { name: 'kartik', phone: 7825763245 }


// -----------------------------------------------------------------
// updating the object and array

// for array

// let arr = [1,2,3,4]
// arr = [5,6,7,8]
// console.log(arr);   //[ 5, 6, 7, 8 ]

// const arr = [1,2,3,4]
// arr = [5,6,7,8]
// console.log(arr);   //TypeError: Assignment to constant variable. error

// but i can bo in both let and const
// you can not change complete array in const change one by one
//  but let me complete array ko single time ma update kar sekta ho

// const arr = [1,2,3,4]
// arr[1] = "update"
// console.log(arr);   //[ 1, 'update', 3, 4 ]

// --------------------------------
// for object

// let obj = {
//   name: "kasturi",
//   rollNo: 23,
// };

// obj = {
//   add: "ssdfaf",
// };

// console.log(obj);
// { add: 'ssdfaf' }

// const obj = {
//   name: "kasturi",
//   rollNo: 23,
// };

// obj = {
//   add: "ssdfaf",
// };

// console.log(obj);
// TypeError: Assignment to constant variable. give error

// const obj = {
//   name: "kasturi",
//   rollNo: 23,
// };
// obj["name"] = "kartik"
// console.log(obj);

// { name: 'kartik', rollNo: 23 }

// const obj = {
//   name: "kasturi",
//   rollNo: 23,
// };
// obj["name"] = "kartik";
// console.log(obj);   //{ name: 'kartik', rollNo: 23 }
// obj.name = "goyal";
// console.log(obj);   //{ name: 'goyal', rollNo: 23 }

// ------------------------------------------------------------------
// how to delete key in object

// const obj = {
//   name: "kasturi",
//   rollNo: 23,
// };

// delete obj.rollNo   // property deleted
// console.log(obj);   //{ name: 'kasturi' }

// const obj = {
//   name: "kasturi",
//   rollNo: 23,
//   address : null,
// };

// console.log(obj);   //{ name: 'kasturi', rollNo: 23, address: null }
// console.log(obj.address);   //null

// -------------------------------------------------
// Optional Chaining (?.)

// const obj = {
//   name: "kasturi",
//   rollNo: 23,
//   address : null,
// };

// console.log(obj.address);   //null
// console.log(obj.address.loc);   //give error
// console.log(obj.address?.loc);   //undefined

// const obj = {
//   name: "kasturi",
//   rollNo: 23,
// };

// console.log(obj?.address);   //undefined

// let student = {
//     name: "Varad"
// };

// console.log(student.address);//undefined

// let student = {
//     name: "Varad"
// };

// console.log(student.address.hh);//give error

// let student = {
//     name: "Varad"
// };

// console.log(student.address?.hh);//undefined

// let student = {
//     name: "Varad"
// };

// console.log(student.address.city);//error
// TypeError: Cannot read properties of undefined (reading 'city')

// use Optional Chaining
// they are work in thired levle
// console.log(student.address?.city);//undefined

// let student = {
//     name: "Varad",
//     address: {
//         city: "Jaipur"
//     }
// };

// console.log(student.address?.city); //Jaipur

// let student = {
//     name: "Varad",
//     address: {
//         city: "Jaipur",
//     }
// };

// console.log(student.address?.pin); //undefined

// let student = {
//     name: "Varad",
//     address: {
//         city: "Jaipur",
//     }
// };

// console.log(student.address?.pin??"hello"); //hello

// -------------------------------------------------
// using splice

// In JavaScript, the splice() method is used to add, remove, or replace elements in an array.
// The most important thing to remember is that splice() changes the original array.

// Syntax of splice()
// array.splice(start, deleteCount, item1, item2, ...);

// Parameter	  Meaning
// start	     : Index where the operation begins
// deleteCount	 : Number of elements to remove
// item1, item2, : New elements to insert (optional)



// let arr = [1,2,3,4,5,6]
// console.log(arr);   //[ 1, 2, 3, 4, 5, 6 ]
// arr.pop();
// console.log(arr);   //[ 1, 2, 3, 4, 5 ]
// arr.push(6);
// console.log(arr);   //[ 1, 2, 3, 4, 5, 6 ]
// arr.shift();
// console.log(arr);   //[ 2, 3, 4, 5, 6 ]
// arr.unshift(1);
// console.log(arr);   //[ 1, 2, 3, 4, 5, 6 ]

// let arr = [1,2,3,4,5,6]
// arr.splice(2);
// console.log(arr);   //[ 1, 2 ]

// let arr = [1,2,3,4,5,6]
// arr.splice(2,2);     // they are use delete
// console.log(arr);   //[ 1, 2, 5, 6 ]

// let arr = [1,2,3,4,5,6]
// arr.splice(2,0,1);      // they are use add
// console.log(arr);   

// [
//   1, 2, 1, 3,
//   4, 5, 6
// ]

// let arr = [1,2,3,4,5,6]
// arr.splice(2,0,"hello");      // they are use add
// console.log(arr);   //[ 1, 2, 'hello', 3, 4, 5, 6 ]

// let arr = [1,2,3,4,5,6]
// arr.splice(2,4,"kartik");      // they are use replace
// console.log(arr);   //[ 1, 2, 'kartik' ]

// let arr = [10, 20, 30, 40];
// arr.splice(1, 2);
// console.log(arr);     // [10, 40]
// ---------------------------------------------------------
// What does splice() return?

// An important interview concept: splice() returns 
// the elements that were removed, not the modified array.

// let arr = [10, 20, 30, 40];
// let removed = arr.splice(1, 2);

// console.log(removed); // [20, 30]
// console.log(arr);     // [10, 40]

// If no elements are removed, it returns an empty array.

// let arr = [10, 20, 30, 40];
// let removed = arr.splice(1, 0, 99);

// console.log(removed);
// console.log(arr);

// []                  // No elements were removed
// [10, 99, 20, 30, 40] // Original array is modified

// -------------------------------------------------
// slice()
// they are not change in origanal array
// In JavaScript, the slice() method is used to extract a portion 
// of an array or a string without changing the original array or string.

// Syntax
// array.slice(start, end);

// start: The index from which extraction begins (included).
// end: The index where extraction stops (excluded).
// Both parameters are optional.

// let arr = [10, 20, 30, 40, 50];
// let result = arr.slice(1, 4);
// console.log(result);
// console.log(arr);

// [20, 30, 40]
// [10, 20, 30, 40, 50]

// use mutability and immutability conspect

// let arr = [1,2,3,4,5,6]

// let trime =arr.slice(0,4);
// console.log(trime);   //[ 1, 2, 3, 4 ]
// console.log(arr);   //[ 1, 2, 3, 4, 5, 6 ]

// let trime =arr.slice(3,5);
// console.log(trime);   //[ 4, 5 ]

// let trime =arr.slice(0);
// console.log(trime);   //[ 1, 2, 3, 4, 5, 6 ]

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.slice(2));  //[30, 40, 50]

// let arr = [10, 20, 30];
// let result = arr.slice();
// console.log(result); // [10, 20, 30]

// Negative indexes
// Negative indexes count backward from the end of the array. index are start to -1 .

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.slice(-3));     //[30, 40, 50]
// Here, -3 means start from the third element counting backward from the end.

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.slice(-4, -1)); // [20, 30, 40]

// let arr = [10, 20, 30, 40];
// console.log(arr.slice(2, 2));   []

// let arr = [10, 20, 30, 40];

// let a = arr.slice(1, 3);
// console.log(a);   // [20, 30]
// console.log(arr); // [10, 20, 30, 40]

// let b = arr.splice(1, 2);
// console.log(b);   // [20, 30]
// console.log(arr); // [10, 40]

// -------------------------------------------------
// let arr = [1,2,3,4,5,6]
// console.log(arr.indexOf(4));    //3
// console.log(arr.indexOf(43));    //-1 // not present in array

// -------------------------------------------------
// find method

// In JavaScript, the find() method is used to find the "first element" in an array that satisfies a condition.
// If no element matches the condition, find() returns undefined.

// Syntax
// array.find(function(element) {
//     return condition;
// });

// element — the current array element being checked.
// condition — the condition that must be true.


// they are use to find element in array based on condition
// they give fist element to satisy condition

// Example 1: Find a number
// let arr = [10, 20, 30, 40, 50];

// let result = arr.find(function(num) {
//     return num > 25;
// });
// console.log(result);     //30

// Example 2: Using arrow function

// let arr = [10, 20, 30, 40, 50];
// let result = arr.find(num => num > 25);
// console.log(result);    //30

// Example 3: If nothing is found

// let arr = [10, 20, 30];
// let result = arr.find(num => num > 100);
// console.log(result);    //undefined

// find() with objects

// let students = [
//     { name: "Rahul", age: 20 },
//     { name: "Kartik", age: 21 },
//     { name: "Aman", age: 22 }
// ];

// let student = students.find(s => s.name === "Kartik");
// console.log(student);   //{ name: 'Kartik', age: 21 }

// let arr = [1,2,3,4,5,6,3]
// let res = arr.find((value) => {
//     return value
// })
// console.log(res);   //1

// let arr = [1,2,3,4,5,6,3]
// let res = arr.find((value) => {
//     return value === 3;
// })
// console.log(res);   //3

// let arr = [1,2,3,4,5,6,3]
// let res = arr.find((value) => {
//     return value === "3";       // 3 are string
// })
// console.log(res);   //undefined
// they give fist element 

// -----------------------------------------------
// findIndex() Method

// The findIndex() method returns the index of the first element that satisfies a given condition.

// - If a matching element is found, it returns its index.
// - If no element matches, it returns -1.
// - It does not modify the original array.

// Syntax
// array.findIndex((element) => condition);

// let arr = [1,2,3,4,5,6,3]
// they give fist element index

// let resIndex = arr.findIndex((value) => {    
//     return value === 3;
// })
// console.log(resIndex);  //2

// let resIndex = arr.findIndex((value) => {
//     return value === "3";
// })
// console.log(resIndex);  //-1

// let resIndex = arr.findIndex((value) => {    
//     if(value === 3){
//         return value
//     }
// })
// console.log(resIndex);  //2

// Example with objects
// let students = [
//     { name: "Aman", marks: 65 },
//     { name: "Kartik", marks: 90 },
//     { name: "Rahul", marks: 80 }
// ];

// let index = students.findIndex(student => student.name === "Kartik");

// console.log(index); //1

// -------------------------------------------------
// flat method

// The flat() method is used to remove nested arrays and create a single-level array.

// let arr = [1,2,3,4,5,6];
// console.log(arr);   //[ 1, 2, 3, 4, 5, 6 ]

// let arr = [1,2,3,[4,5,6]];
// console.log(arr);   //[ 1, 2, 3, [ 4, 5, 6 ] ]

// flat by default single levle flat kar ta h
// console.log(arr.flat());   //[ 1, 2, 3, 4, 5, 6 ]

// let arr1 = [1,2,3,[4,5,6,[7,8,9,10]]]
// console.log(arr1.flat());  //[ 1, 2, 3, 4, 5, 6, [ 7, 8, 9, 10 ] ]

// let arr1 = [1,2,3,[4,5,6,[7,8,9,10]]]
// console.log(arr1.flat(0));  //[ 1, 2, 3, [ 4, 5, 6, [ 7, 8, 9, 10 ] ] ]

// let arr1 = [1,2,3,[4,5,6,[7,8,9,10]]]
// console.log(arr1.flat(1));  //[ 1, 2, 3, 4, 5, 6, [ 7, 8, 9, 10 ] ]

// let arr1 = [1,2,3,[4,5,6,[7,8,9,10]]]
// console.log(arr1.flat(2));

// [
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
// ]

// let arr1 = [1,2,3,[4,5,6,[7,8,9,10]]]
// console.log(arr1.flat(Infinity));

// [
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
// ]

// Does flat() modify the original array?
// No. The flat() method returns a new array and leaves the original array unchanged.

// let arr = [1, [2, 3], 4];
// let result = arr.flat();

// console.log(result); // [1, 2, 3, 4]
// console.log(arr);    // [1, [2, 3], 4]

// -------------------------------------------------
// mutability and immutability

// mutability = they are change in origanal varible
// splice,pop,unshift ,shift push

// immutability
// slice
// /they are return new array

// let arr4 = [4, 5, 6, 62, 213, 13]
// let arrCopy = arr4;
// arrCopy.pop()

// console.log("arr4",arr4);
// console.log("arrCopy",arrCopy);

// arr4 [ 4, 5, 6, 62, 213 ]
// arrCopy [ 4, 5, 6, 62, 213 ]

// solution of the mutability is sperade

// let arr4 = [4, 5, 6, 62, 213, 13]
// let arrCopy = [...arr4];
// arrCopy.pop()

// console.log("arr4",arr4);
// console.log("arrCopy",arrCopy);

// arr4 [ 4, 5, 6, 62, 213, 13 ]
// arrCopy [ 4, 5, 6, 62, 213 ]

// -------------------------------------------------
// map , filter , reduce methods
// they all are immutable , all are array methods

// -------------------------------------------------
// map method
// map return new array of n length

// let originalPrices = [463, 654, 2346]
// let discountedPrices = []

// for(value of originalPrices){
//     discountedPrices.push(value  * 0.9) // 10% discount
// }

// using for each loop
// originalPrices.forEach((value) => {
//     discountedPrices.push(value * 0.9) // 10% discount
// })

// console.log(originalPrices);
// console.log(discountedPrices);

// [ 463, 654, 2346 ]
// [ 416.7, 588.6, 2111.4 ]

// using map
// The map() method is used to create a new array by changing each element of an existing array.
// It does not modify the original array when used normally with a callback that doesn't mutate the original data.

// Basic syntax:
// let newArray = array.map(function(element) {
//     return something;
// });

// let arr = [1, 2, 3, 4, 5];
// let result = arr.map(function(num) {
//     return num * 2;
// });
// console.log(result);        //[ 2, 4, 6, 8, 10 ]
// console.log(arr);        //[ 1, 2, 3, 4, 5 ]
// Important: Original array is not changed

// // Using arrow function
// let arr = [1, 2, 3, 4, 5];
// let result = arr.map(num => num * 2);
// console.log(result);        //[ 2, 4, 6, 8, 10 ]

// ------------------------------------------------------
// map() with objects      

// let students = [                             // this is array of object
//     { name: "Kartik", marks: 80 },
//     { name: "Rahul", marks: 90 },
//     { name: "Aman", marks: 70 }
// ];
// let names = students.map(student => student.name);
// console.log(names);     //[ 'Kartik', 'Rahul', 'Aman' ]

// let originalPrices = [463, 654, 2346]
// let discountedPrices = []

// const discountedPrices = originalPrices.map((value) => {
//     return value * 0.9
// })

// console.log(originalPrices);
// console.log(discountedPrices);

// [ 463, 654, 2346 ]
// [ 416.7, 588.6, 2111.4 ]

// let arr = [10, 20, 30];
// let result = arr.map((num, index) => num + index);
// console.log(result);    //[10, 21, 32]

// -------------------------------------------
// this is array of object

// let students = [
//     {
//         name: "Ayaan",
//         marks: 56,
//     },
//     {
//         name: "Mansi",
//         marks: 46,
//     },
//     {
//         name: "Debadrita",
//         marks: 33,
//     },
//     {
//         name: "Shivan",
//         marks: 30,
//     },
//     {
//         name: "Alauddin",
//         marks: 28
//     }
// ]

// let studentNames = []

// students. forEach((value) => {
// studentNames.push(value.name)
// })
// console.log(studentNames);
// [ 'Ayaan', 'Mansi', 'Debadrita', 'Shivan', 'Alauddin' ]

// short way

// const studentNames = students.map((student) => {
// return student. name
// })

// console.log(studentNames);
// // [ 'Ayaan', 'Mansi', 'Debadrita', 'Shivan', 'Alauddin' ]

// const studentMarks = students.map((student) => student.marks)
// console.log(studentNames, studentMarks);
// // [ 'Ayaan', 'Mansi', 'Debadrita', 'Shivan', 'Alauddin' ] [ 56, 46, 33, 30, 28 ]

// // rest operater ko last me write karte ha , splite ko phale use karshate ha

// let boostedMarks = students.map((student) => {
//     return {...student , marks : student.marks + 10}
// })
// // let boostedMarks = students.map(student => ({ ...student, marks: student.marks + 10 }))

// console.log(boostedMarks);

// [
//   { name: 'Ayaan', marks: 66 },
//   { name: 'Mansi', marks: 56 },
//   { name: 'Debadrita', marks: 43 },
//   { name: 'Shivan', marks: 40 },
//   { name: 'Alauddin', marks: 38 }
// ]

// map are not take condition
// let boostedMarks = students.map(student => student.marks < 33)  // [ false, false, false, true, true ]

// map are return n length array , but filtur are not , in this code i give condition so condtion are true return true , false return false


// -----------------------------------------------------------
// filter

// let students = [
//   {
//     name: "Ayaan",
//     marks: 56,
//   },
//   {
//     name: "Mansi",
//     marks: 46,
//   },
//   {
//     name: "Debadrita",
//     marks: 33,
//   },
//   {
//     name: "Shivan",
//     marks: 30,
//   },
//   {
//     name: "Alauddin",
//     marks: 28,
//   },
// ];

// using for each method

// let failedStudents = [];
// students.forEach((student) => {
//   if (student.marks < 33) {
//     failedStudents.push(student);
//   }
// });

// console.log(failedStudents);
// [ { name: 'Shivan', marks: 30 }, { name: 'Alauddin', marks: 28 } ]

// let failedStudents = [];
// students.forEach((student) => {
//   if (student.marks < 33) {
//     // failedStudents.push(student.marks); //[ 30, 28 ]
//     // failedStudents.push(student.name); //[ 'Shivan', 'Alauddin' ]
//   }
// });
// console.log(failedStudents);

// ----------------------------------------------
// using filter

// The filter() method is used to select elements from an array based on a condition.
// It creates a new array containing only the elements for which the condition is true.

// filter are take n length array and return new array according to condition

// Basic syntax
// let newArray = array.filter(function(element) {
//     return condition;
// });

// const failedStudents = students.filter((student) => student.marks < 33);
// console.log(failedStudents);

// [ { name: 'Shivan', marks: 30 }, { name: 'Alauddin', marks: 28 } ]

//filter ak use krke agar hmko names hi dikhane h marks nhi to sir

// const failedStudentsName  = failedStudents.map((student) => student.name)
// console.log(failedStudents,failedStudentsName);

// [ { name: 'Shivan', marks: 30 }, { name: 'Alauddin', marks: 28 } ] [ 'Shivan', 'Alauddin' ]


// let arr = [1, 2, 3, 4, 5, 6];
// let result = arr.filter(function(num) {
//     return num > 3;
// });
// console.log(result);     //[4, 5, 6]

// filter are return true value not return false value

// Using arrow function
// let arr = [1, 2, 3, 4, 5, 6];
// let result = arr.filter(num => num > 3);
// console.log(result);

// [4, 5, 6]

// let arr = [1, 2, 3, 4, 5, 6];
// let even = arr.filter(num => num % 2 === 0);
// console.log(even);       //[2, 4, 6]

// let names = ["Kartik", "Rahul", "Aman", "Raj"];
// let result = names.filter(name => name.length > 4);
// console.log(result);        //[ 'Kartik', 'Rahul' ]

// ----------------------------------------
// chaining
// process = filter -> map -> reduce

// const failedStudents = students.filter((student) => student.marks < 33).map((student) => student.name)
// console.log(failedStudents);    //[ 'Shivan', 'Alauddin' ]

// -----------------------------------------------------------
// reduce

// they are take n length array and return single value(array , number , object, boolean)

// The reduce() method is used to combine all elements of an array into a single value.
// For example:
// - Add all numbers → one total
// - Find maximum → one number
// - Count something → one value
// - Build an object → one object

// Basic syntax

// let result = arr.reduce(function(accumulator, currentValue) {
//     return updatedValue;
// }, initialValue);


// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce(function(acc, num) {
//     return acc + num;
// }, 0);
// console.log(sum);   //15

// Using arrow function
// The same code can be written more shortly:

// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((acc, num) => acc + num, 0);
// console.log(sum);   //15


// let arr = [1, 2, 3, 4];
// let result = arr.reduce((acc, num) => {
//     return acc * num;
// }, 1);
// console.log(result);    24

// let arr = [1, 2, 3, 4, 5];

// let a = arr.map(x => x * 2);
// let b = arr.filter(x => x > 3);
// let c = arr.reduce((acc, x) => acc + x, 0);

// console.log(a); // [2, 4, 6, 8, 10]
// console.log(b); // [4, 5]
// console.log(c); // 15

// let marks = [56, 24, 62, 73, 78]
// let totalMarks = 0

// marks.forEach((mark) => totalMarks += mark)
// console.log(totalMarks); //293

// using reduce

// syntex
// const totalMarks = marks.reduce( (accumulator , currentValue) => {}, 0)

// 0 is the default value , accumulator value = 0 , initial value

// let marks = [56, 24, 62, 73, 78];

// const totalMarks = marks.reduce((accumulator, currentValue) => {
//   accumulator = accumulator + currentValue;
//   return accumulator;
// }, 0);

// console.log(totalMarks); //293

// let marks = [56, 24, 62, 73, 78];

// const totalMarks = marks.reduce((totalMarks, mark) => {
//     return totalMarks + mark
// }, 0)

// const totalMarks = marks.reduce((totalMarks , mark) =>   totalMarks + mark)     // they are set by defalt assine  0 value , they are only array not object
// console.log(totalMarks); //293

// let students = [
//   {
//     name: "Ayaan",
//     marks: 56,
//   },
//   {
//     name: "Mansi",
//     marks: 46,
//   },
//   {
//     name: "Debadrita",
//     marks: 33,
//   },
//   {
//     name: "Shivan",
//     marks: 30,
//   },
//   {
//     name: "Alauddin",
//     marks: 28,
//   },
// ];

// const totalMarks = students.reduce((totalMarks, student) => totalMarks + student.marks, 0)
// console.log(totalMarks); //193

// const attendence = ["present", "present", "absent", "present", "absent"];

// let obj = {}
// attendence.forEach((value) => {

//     if (obj[value]) {
//         obj[value] = obj[value] + 1
//     } else {
//         obj[value] = 1
//     }

// })

// console.log(obj);   //{ present: 3, absent: 2 }

// by reduce

// const obj = attendence.reduce((acc, value) => {
//   acc[value] = (acc[value] || 0) + 1;
//   return acc;
// }, {});

// console.log(obj); //{ present: 3, absent: 2 }
