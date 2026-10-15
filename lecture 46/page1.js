
// lecture 46

// promises in js 

// a promise is an "object" that represents the 
// futuer result of an "aschronous task/operation"

// const p = new Promise() // constructor // create new promise object
// console.log(p); // give error
// TypeError: Promise resolver undefined is not a function

// const p = new Promise(function(){}) 
// console.log(p);     //Promise { <pending> }     // initiale state of the promice
// console.log(typeof p);     //object

// ----------------------------------------------
// promise has three states
// 1. initial 2. fulfilled(completed state) 3. rejected

// initial state se promise always "settled" hoga
// settled -> either fulfilled or rejected

// const p = new Promise(function(resolver , reject){
//     console.log(resolver , reject);                 //[Function (anonymous)] [Function (anonymous)]
    
//     return 1;
// }) 
// console.log(typeof p);     //object
// they allbase return promise object



// const p = new Promise(function(resolver , reject){
//     resolver()    
// }) 

// console.log(p);     //Promise { undefined }


// const p = new Promise(function(resolver , reject){
//     resolver("hello")    
// }) 

// console.log(p);   //Promise { 'hello' }

// same code are check in console

// resolver are use to completed / fullfill


// const p = new Promise(function(resolver , reject){
//     reject("serrver down hai beta")    
// }) 
// console.log(p); 


// -------------------------------------------------------------
// once promise becomes fulfilled/rejectrd , it does not go back to pending .


// console.log("a");

// const p = new Promise(function(resolver , reject){
// console.log("b");

// }) 
// console.log("c");

// a
// b
// c

// creating a promise is synchronous.
// the work insidee it can be asynchronous.

// -------------------------------------------------------------
// how to consume/use promise

// three method
// then() , catch() , finally()


// once promise becomes fulfilled/rejectrd , it does not go back to pending .

// const p = new Promise(function(resolver , reject){
//     resolver("hiii")
//     reject("serrver down hai beta")    
// }) 
// console.log(p);     //Promise { 'hiii' }

// const p = new Promise(function(resolver , reject){
//     reject("serrver down hai beta")    
//     resolver("hiii")
// }) 
// console.log(p);   
