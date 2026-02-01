//-----------------------------------------
// array methods

// // Push( ) : add to end

// let foodItems =["potato","apple","litchi","tomato"];
// console.log(foodItems);  // (4) ['potato', 'apple', 'litchi', 'tomato']
// foodItems.push("chips");
// console.log(foodItems);  // 5) ['potato', 'apple', 'litchi', 'tomato', 'chips']
// foodItems.push("burger","paneer");
// console.log(foodItems);  // (7) ['potato', 'apple', 'litchi', 'tomato', 'chips', 'burger', 'paneer']

//----------------------------------------------------------------------------------------------------------
// Pop( ) : delete from end & return

// let foodItems =["potato","apple","litchi","tomato"];
// console.log(foodItems);  // (4) ['potato', 'apple', 'litchi', 'tomato']
// foodItems.pop();
// console.log(foodItems);  // (3) ['potato', 'apple', 'litchi']

// let deletedItem = foodItems.pop();
// console.log("deleted item is :",deletedItem);  // deleted item is : litchi

//----------------------------------------------------------------------------------------------------------
// toString( ) : converts array to string

// let foodItems = ["potato", "apple", "litchi", "tomato"];
// console. log(foodItems);  // (4) ['potato', 'apple', 'litchi', 'tomato']
// console. log(foodItems.toString());  // potato,apple,litchi,tomato
// console. log(foodItems);  // (4) ['potato', 'apple', 'litchi', 'tomato']

// let marks = [97,45,5,475,35];
// console. log(marks);   // (5) [97, 45, 5, 475, 35]
// console. log(marks.toString());   // 97,45,5,475,35
// console. log(marks);  //  (5) [97, 45, 5, 475, 35]

//---------------------------------------------------------------------------
// Concat( ) : joins multiple arrays & returns result

// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman", "batman"];

// // order are metter to concat the array
// let heroes = marvelHeroes. concat(dcHeroes);
// console. log(heroes);   // (5) ['thor', 'spiderman', 'ironman', 'superman', 'batman']

// // order are change to concat array
// let heroe = dcHeroes. concat(marvelHeroes);
// console. log(heroe);   // (5) ['superman', 'batman', 'thor', 'spiderman', 'ironman']

// // Concat( )  are not change the original array
// console. log(dcHeroes);  // (2) ['superman', 'batman']
// console. log(marvelHeroes);  // (3) ['thor', 'spiderman', 'ironman']

// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman", "batman"];
// let indianHeroes = ["shaktiman", "krish"];

// let heroes = marvelHeroes. concat(dcHeroes,indianHeroes);
// console. log(heroes);  // (7) ['thor', 'spiderman', 'ironman', 'superman', 'batman', 'shaktiman', 'krish']

// ------------------------------------------------------------------------------------------------------------
// Unshift( ) : add to start

// let foodItems =["potato","apple","litchi","tomato"];
// console.log(foodItems);  // (4) ['potato', 'apple', 'litchi', 'tomato']
// foodItems.unshift("chips");
// console.log(foodItems);  // (5) ['chips', 'potato', 'apple', 'litchi', 'tomato']
// foodItems.unshift("burger","paneer");
// console.log(foodItems);  // (7) ['burger', 'paneer', 'chips', 'potato', 'apple', 'litchi', 'tomato']

// ------------------------------------------------------------------------------------------------------------
// shift( ) : delete from start & return

// let foodItems =["potato","apple","litchi","tomato"];
// console.log(foodItems);  // (4) ['potato', 'apple', 'litchi', 'tomato']
// foodItems.shift();
// console.log(foodItems);  //(3) ['apple', 'litchi', 'tomato']

// let deletedItem = foodItems.shift();
// console.log("deleted item is :",deletedItem);  // deleted item is : apple

// ------------------------------------------------------------------------------------------------------------
// Slice( ) : returns a piece of the array
// slice( startIdx, endIdx )

// let foodItems =["potato","apple","litchi","tomato","banana"];
// console.log(foodItems);  // (5) ['potato', 'apple', 'litchi', 'tomato', 'banana']
// console.log(foodItems.slice(1,2));  // ['apple']
// console.log(foodItems.slice(1,3));  //(2) ['apple', 'litchi']
// console.log(foodItems.slice(2));  //(3) ['litchi', 'tomato', 'banana']
// console.log(foodItems.slice());   // (5) ['potato', 'apple', 'litchi', 'tomato', 'banana']

// ------------------------------------------------------------------------------------------------------------
// Splice( ) : change original array (add, remove, replace)
// splice( startIdx, delCount, newEl1... )

// let arr = [1,2,3,4,5,6,7];
// console.log(arr);  // (7) [1, 2, 3, 4, 5, 6, 7]
// arr.splice(2,2,101,102);
// console.log(arr);  // (7) [1, 2, 101, 102, 5, 6, 7]

// // add element using splice
// arr.splice(4,0,103);
// console.log(arr);  // (8) [1, 2, 101, 102, 103, 5, 6, 7]

// // Delete element using splice
// arr.splice(2,1);
// console.log(arr);  //(7) [1, 2, 102, 103, 5, 6, 7]

// // Replace element using splice
// arr.splice(3,1,104);
// console.log(arr);  //(7) [1, 2, 102, 104, 5, 6, 7]

// console.log(arr);  //(7) [1, 2, 102, 104, 5, 6, 7]
// arr.splice(4);
// console.log(arr);  // (4) [1, 2, 102, 104]

// let arr = [1,2,3,4,5,6,7];
// console.log(arr);  //(7) [1, 2, 3, 4, 5, 6, 7]
// console.log(arr.splice(4));   // (3) [5, 6, 7]

// let arr = [1,2,3,4,5,6,7];
// console.log(arr.splice());   // []   // no change in array
// console.log(arr);  // (7) [1, 2, 3, 4, 5, 6, 7]

// Create an array to store companies -> “Bloomberg”,“Microsoft”,“Uber”,“Google”,“IBM”,“Netflix”
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

// let arr = ["Bloomberg","microsoft","uber","Google","IBM","Netflix"];
// console.log(arr);  // (6) ['Bloomberg', 'microsoft', 'uber', 'Google', 'IBM', 'Netflix']

// fist part
// let arr = ["Bloomberg","microsoft","uber","Google","IBM","Netflix"];
// console.log(arr.shift());  // Bloomberg
// console.log(arr);  // (5) ['microsoft', 'uber', 'Google', 'IBM', 'Netflix']

// sec part
// let arr = ["Bloomberg","microsoft","uber","Google","IBM","Netflix"];
// arr.splice(2,1,"Ola");
// console.log(arr);  // (6) ['Bloomberg', 'microsoft', 'Ola', 'Google', 'IBM', 'Netflix']

// three part
// let arr = ["Bloomberg","microsoft","uber","Google","IBM","Netflix"];
// arr.push("Amazon");
// console.log(arr);  // (7) ['Bloomberg', 'microsoft', 'uber', 'Google', 'IBM', 'Netflix', 'Amazon']
