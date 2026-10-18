
// Optional Chaining (?.) in JavaScript

// Optional chaining (?.) allows you to access properties of an object safely
// without getting an error when an intermediate value is null or undefined.

// --------------------------------------------------------------------------------
// 1. Why do we need Optional Chaining?
// Suppose you have this object:

// const user = {
//     name: "Kartik",
//     address: {
//         city: "Jaipur"
//     }
// };
// console.log(user.address.city); // Jaipur

// This works fine. But what if address does not exist?

// const user = {
//     name: "Kartik"
// };
// console.log(user.address.city);
// TypeError: Cannot read properties of undefined

// Why? Because user.address is undefined, and JavaScript cannot access .city on undefined.

// Solution using Optional Chaining

// const user = {
//     name: "Kartik"
// };
// console.log(user.address?.city);
// undefined

// No error! If user.address is null or undefined, JavaScript stops evaluating the chain and returns undefined.

// --------------------------------------------------------------------------------
// 3. Three types of Optional Chaining

// A. Optional property access

// Use ?. to access a nested property.

// const student = {
//     name: "Kartik",
//     college: {
//         name: "PIET"
//     }
// };
// console.log(student.college?.name);  // PIET
// console.log(student.address?.city);  // undefined

// --------------------------------------------------------------------------------
// B. Optional array access

// Use ?.[index] when an array or object might be missing.

// const user = {};
// console.log(user.skills?.[0]); // undefined

// Without optional chaining, user.skills[0] would throw an error.

// --------------------------------------------------------------------------------
// C. Optional function call

// Use ?.() when a function might not exist.

// const user = {
//     name: "Kartik"
// };
// user.greet?.(); // No error; does nothing


// If greet is a function, it will be called. If it is null or undefined, the call is skipped.
// Note: If the property exists but is not a function, JavaScript still throws a TypeError.

// --------------------------------------------------------------------------------
// Optional Chaining (?.) vs Nullish Coalescing (??) in JavaScript

// These two operators are often used together, but they perform different jobs.

// - Optional Chaining (?.) → Safely access a property that might not exist.
// - Nullish Coalescing (??) → Provide a default value when the result is null or undefined.

// --------------------------------------------------------------------------------
// Nullish Coalescing (??)

// Nullish coalescing provides a default value if the value on its left is null or undefined.

// let username = null;
// console.log(username ?? "Guest");
// Guest

// Because username is null, JavaScript uses "Guest".
// Another example:

// let username = "Kartik";
// console.log(username ?? "Guest");
// Kartik

// Because username already has a value, the default is not used.

// --------------------------------------------------------------------------------

// 3. Using both operators together
// Consider this example:

// const user = {
//     name: "Kartik"
// };
// const city = user.address?.city ?? "Unknown";
// console.log(city);
// Unknown