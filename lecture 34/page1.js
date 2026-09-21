// lecture 34

// ----------------------------------------------------------
// destructuring of the objectrevision

// let student = {
//     name: "varad",
//     rollNo: 34,
//     subjects: ["math", "english", "hindi"],
// }

// order meter nahi kar ta object me

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

// let { subjects: vidhay,totalMarks = 500,...variable } = student
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

// let obj2 = {
//   address: "jaipur",
//   adharCard: 5223452345543,
// };

// let obj3 = {...obj1,...obj2}

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
// };

// console.log(obj?.address);   //undefined

// let student = {
//     name: "Varad"
// };

// console.log(student.address);//undefined

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

// -------------------------------------------------
// using splice
// they are change in origanal array

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

// arr.splice(2);
// console.log(arr);   //[ 1, 2 ]

// arr.splice(2,2);     // they are use delete
// console.log(arr);   //[ 1, 2, 5, 6 ]

// arr.splice(2,0,1);      // they are use add
// console.log(arr);   //[ 1, 2, 5, 6 ]

// [
//   1, 2, 1, 3,
//   4, 5, 6
// ]

// arr.splice(2,0,"hello");      // they are use add
// console.log(arr);   //[ 1, 2, 'hello', 3, 4, 5, 6 ]

// arr.splice(2,4,"kartik");      // they are use replace
// console.log(arr);   //[ 1, 2, 'hello', 3, 4, 5, 6 ]

// -------------------------------------------------
// using slice
// they are not change in origanal array

// use mutability and immutability conspect

// let arr = [1,2,3,4,5,6]

// let trime =arr.slice(0,4);
// console.log(trime);   //[ 1, 2, 3, 4 ]

// let trime =arr.slice(3,5);
// console.log(trime);   //[ 4, 5 ]

// let trime =arr.slice(0);
// console.log(trime);   //[ 1, 2, 3, 4, 5, 6 ]

// -------------------------------------------------

// let arr = [1,2,3,4,5,6]

// console.log(arr.indexOf(4));    //3
// console.log(arr.indexOf(43));    //-1 // not present in array

// find method
// they are use to find element in array based on condition
// they give fist element to satisy condition

// let arr = [1,2,3,4,5,6 , 3]

// let res = arr.find((value) => {
//     return value
// })
// console.log(res);   //1

// let res = arr.find((value) => {
//     return value === 3;
// })
// console.log(res);   //3

// let res = arr.find((value) => {
//     return value === "3";
// })
// console.log(res);   //undefined

// let resIndex = arr.findIndex((value) => {
//     return value === 3;
// })
// console.log(resIndex);  //2

// let resIndex = arr.findIndex((value) => {
//     return value === "3";
// })
// console.log(resIndex);  //-1

// -------------------------------------------------
// flat

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
//     // let discount = value * 10 / 100
//     // discountedPrices.push(value  - discount) // 10% discount
//     discountedPrices.push(value  * 0.9) // 10% discount
// }

// using for each loop
// // originalPrices.forEach((value) => {
// //     discountedPrices.push(value * 0.9) // 10% discount
// // })

// console.log(originalPrices);
// console.log(discountedPrices);

// [ 463, 654, 2346 ]
// [ 416.7, 588.6, 2111.4 ]

// using map

// let originalPrices = [463, 654, 2346]

// const discountedPrices = originalPrices.map((value) => {
//     return value * 0.9
// })

// console.log(originalPrices);
// console.log(discountedPrices);

// [ 463, 654, 2346 ]
// [ 416.7, 588.6, 2111.4 ]

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

// map are not take condition
// let boostedMarks = students.map(student => student.marks < 33)  // [ false, false, false, true, true ]

// filter are return true value not return false value

// console.log(boostedMarks);

// [
//   { name: 'Ayaan', marks: 66 },
//   { name: 'Mansi', marks: 56 },
//   { name: 'Debadrita', marks: 43 },
//   { name: 'Shivan', marks: 40 },
//   { name: 'Alauddin', marks: 38 }
// ]
