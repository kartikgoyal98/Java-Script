//---------------------------------------------------------------------------------------
// string

// let str1 = "kartik goyal";
// console.log(str1);  // kartik goyal

// //another way to inasilise the string
// let str2 = 'computer science';  // computer science
// console.log(str2);

// console.log(str1.length);// 12
// console.log(str2.length);// 16

// console.log(str2[5]);// t

//------------------------------------------------------------------------------------
// // Template Literals in JS

// let specialString = `This is a template literal`;  // This is a template literal
// console. log (specialString);
// console. log (typeof specialString);  // string

// // by use  Template Literals in JS

// let obj = {
// item: "pen",
// price: 10,
// };

// console. log("the cost of", obj.item, "is", obj.price, "rupees");   // the cost of pen is 10 rupees

// let output = `the cost of ${obj.item} is ${obj.price} rupees`;  // better way to write
// console. log (output);  // the cost of pen is 10 rupees

// // when use Template Literals in ove code the are convert all data in string
// // mean String Interpolation calculate then String Interpolation are make the part of the string

// let specialString = `This is a template literal ${1 + 2 + 3}`;
// console. log (specialString);   // This is a template literal 6

//-----------------------------------------------
// escape charecture
// they are the part of the string

// console.log("computer\nscience");
// computer
// science

// console.log("computer\tscience");
// // computer	science

// let str = "Apna\tCollege"; //12
// console. log(str. length);

//----------------------------------------------------------
// String Methods in JS

// use  str.toUpperCase( )

// let str = "Computer Science";
// console.log(str);  // Computer Science
// console.log(str.toUpperCase());  // COMPUTER SCIENCE

// str.toUpperCase( ) they are not change orignal value of the string ,they are creatr a new value , becouse js is immutable

// note this thing
// let str = "Computer Science";
// str.toUpperCase();
// console.log(str);  // Computer Science

// in this case they are print 'Computer Science' this is original string but my o/p is 'COMPUTER SCIENCE'
// becouse we also have methods that are string methods they does not change original string
// string meathod are return the new value

// let str = "Computer Science";
// let newStr = str.toUpperCase();
// console.log(str);  // Computer Science
// console.log(newStr);  // COMPUTER SCIENCE

// let str = "ApnaCollege";
// str = str. toUpperCase();
// console. log(str);  //APNACOLLEGE

// //-------------------------------------------------------------------------------------------------------
// // use str.toLowerCase( )
// let str = "ApnaCollege";
// str = str.toLowerCase();
// console. log(str);  //apnacollege

// //-------------------------------------------------------------------------------------------------------
// use str.trim( ) // removes whitespaces to starting and  end

// let str  ="    computer  Science student     ";
// console.log(str.trim());  // computer  Science student

//-----------------------------------------------------------------------------------------------------------
// use str.slice(start, end?) // returns part of string
// ending value are not inclusibe(included in string)

// let srt = "0123456789";
// console.log(srt.slice(1,4));  // 123

// let str = "computer ";
// console.log(str.slice(1,4));  // omp

// let str = "computer ";
// console.log(str.slice(3));  // puter

// let str = "computer ";
// console.log(str.slice());  // computer

// //--------------------------------------------------------------------------------------------------------------
// // use str1.concat( str2 ) // joins str2 with str1

// let str1 = " hello";
// let str2 = " kartik";

// // let res = str1.concat(str2);
// // console.log(res);  //  hello kartik

// let res = str2.concat(str1);
// console.log(res);  // kartik hello

// let res = str1 + str2;
// console.log(res);  //hello kartik

// let res = "add so many string " + str1 + str2;
// console.log(res);  //add so many string  hello kartik

// //--------------------------------------------------------------------------------------------------------------
// use str.replace( searchVal, newVal )
// they are use to search value in string

// let str = "hello";
// console.log(str.replace("h","y"));  // yello

// let str = "hello";
// console.log(str.replace("he","ma"));  // mallo

// let str = "hellololo";
// console.log(str.replace("lo","ma"));  // helmalolo

// let str = "hellololo";
// console.log(str.replaceAll("lo","ma"));  // helmamama

// //--------------------------------------------------------------------------------------------------------------
// use str.charAt( idx )

// let str = "ilovejs";
// console.log(str.charAt(4));  // e

// let str = "ilovejs";
// str[0] = "s";
// console.log(str);  // ilovejs , not change same resion

// let str = "ilovejs";
// str = str.replace("i","s");
// console.log(str);  // slovejs

//-------------------------------------------------------------------------------------------------------------------
// Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name(not space) and ending with the fullname length.
// “shradhakhapra”, username should be “@shradhakhapra13”

// let fullName = prompt("enter your fullname without spaces");

// let username = "@" + fullName + fullName. length;
// console. log(username);  // @kartikgoyal11
