
// lecture 44

// syhcronization

// console.log("task 1");
// console.log("task 2");
// console.log("task 3");

// task 1
// task 2
// task 3

// asyhcronization

// they take time to excuted campletely

// console.log("task 1");
// for(let i = 0 ; i < 10000000000 ; i++){
// }
// console.log("task 2");
// for(let i = 0 ; i < 10000000000 ; i++){

// }
// console.log("task 3");

// task 1
// task 2
// task 3


// console.log("task 1");
// console.log("task 2");
// let startTime = Date.now() // ms

// // they are block to code
// while(Date.now() - startTime < 10000){
// }
// console.log("task 3");

// task 1
// task 2
// task 3

// ----------------------------------------------
// what is the solution

// use web API

// setTimeout() in JavaScript
// setTimeout() is used to execute a function after a specified delay (in milliseconds).

// Syntax
// setTimeout(function, delay);

// setTimeout() , this is web API

// console.log("task 1");
// function cb() {
//     console.log("task 3");
// }
// setTimeout(cb)  // cd is call back function , call back function bo hota ha jise ham as a argument pass karte ha
// console.log("task 2");

// task 1
// task 2
// task 3

// console.log("task 1");
// setTimeout(function cb() {
//     console.log("task 3");
// }, 1000)
// console.log("task 2");

// task 1
// task 2
// task 3


// console.log("task 1");
// setTimeout(function cb() {
//     console.log("task 3");
// }, 0)
// console.log("task 2");

// task 1
// task 2
// task 3


// console.log("task 1");
// setTimeout(function cb() {
//     console.log("task 2");
// }, 0)
// console.log("task 3");

// task 1
// task 3
// task 2


// console.log("task 1");
// setTimeout(function cb() {
//     let startTime = Date.now()
//     while(Date.now() - startTime < 10000){
//     }
//     console.log("task 2");
// }, 0)
// console.log("task 3");

// task 1
// task 3
// task 2


// setTimeout(() => {
//     console.log("hii");
// }, 3000)

// hii


// console.log("a");
// setTimeout(() => {
//     console.log("hii");
// })
// console.log("b");

// a
// b
// hii


// console.log("task 1");

// setTimeout(() => {
//     console.log("task 2");
// }, 4000)

// setTimeout(() => {
//     console.log("task 5");
// }, 1000)

// setTimeout(() => {
//     console.log("task 4");
// }, 2000)

// console.log("task 3");


// task 1
// task 3
// task 5
// task 4
// task 2

// console.log("task 1");

// setTimeout(() => {
//     console.log("task 2");
// }, 4000)

// let startTime = Date.now()
// while (Date.now() - startTime < 3000) {
// }

// setTimeout(() => {
//     console.log("task 5");
// }, 1000)

// setTimeout(() => {
//     console.log("task 4");
// }, 2000)

// console.log("task 3");

// task 1
// task 3
// task 2
// task 5
// task 4

// function greet() {
//     console.log("Hello Kartik!");
// }
// setTimeout(greet, 3000);

// Hello Kartik!

// console.log("Start");
// setTimeout(() => {
//     console.log("Executed");
// }, 5000);
// console.log("End");

// Start
// End
// Executed

// Why? JavaScript doesn't wait for the timer to finish. It continues executing the remaining code.

// Example 4: Cancel setTimeout()

// Use clearTimeout() to cancel a scheduled function.

// let timer = setTimeout(() => {
//     console.log("Hello");
// }, 3000);
// clearTimeout(timer);

// Output: Nothing, because the timer is cancelled before the callback executes.

// Important points
// - 1000 milliseconds = 1 second.
// - setTimeout() executes the callback once.
// - The delay specifies a minimum waiting time, not an exact execution time.
// - clearTimeout() cancels a pending timeout.


// ---------------------------------------------------
// setInterval() in JavaScript
// setInterval() is used to execute a function repeatedly after a specified time interval (in milliseconds).

// Syntax
// setInterval(function, delay);


// setInterval(function () {
//     console.log("Hii");
// }, 1000)


// console.log("a");
// setInterval(function () {
//     console.log("Hii");
// }, 1000)
// console.log("b");

// let id = setInterval(function () {
//     console.log("Hii");
// }, 1000)
// console.log(id);

// let id = setInterval(function () {
//     console.log("Hii");
// }, 1000)
// clearInterval(id);

// let id = setInterval(function () {
//     console.log("Hii");
//     clearInterval(id);
// }, 1000)

// Hii

// let count = 1
// let id = setInterval(function () {
//     count++;
//     if (count > 5) {
//         clearInterval(id)
//     }
//     console.log("Hii");
// }, 1000)

// Hii
// Hii
// Hii
// Hii
// Hii

// Stop setInterval() using clearInterval()

// let count = 1;
// let timer = setInterval(() => {
//     console.log(count);
//     count++;

//     if (count > 5) {
//         clearInterval(timer);
//     }
// }, 1000);

// 1
// 2
// 3
// 4
// 5

// ---------------------------------------------------

// const body = document.querySelector("body")
// let colorStr = "0123456789abcdef"

// setInterval(() => {
//     let color = ""
//     for (let i = 0; i < 6; i++) {
//         let randomValue = Math.floor(Math.random() * colorStr.length)
//         color = color + colorStr[randomValue]
//     }
//     body.style.backgroundColor = `#${color}`
// },10) 