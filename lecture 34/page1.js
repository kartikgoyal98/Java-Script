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