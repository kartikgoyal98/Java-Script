


// //artimetic operateors

// let a= 5;
// let b= 2;
// console.log("a= ",a);//a=  5
// console.log("b = ",b);//b =  2
// console.log("a+b = ",a+b);//a+b =  7
// console.log("a-b = ",a-b);//a-b =  3
// console.log("a*b = ",a*b);//a*b =  10
// console.log("a/b = ",a/b);//a/b =  2.5
// console.log("a%b = ",a%b);//a%b =  1  // Modulus Operators
// console.log("a**b = ",a**b);//a**b =  25  // Exponentiation Operators

//--------------------------------------------
// unary operator

// let a= 5;
// let b= 2;
// console.log("a= ",a);//a=  5
// console.log("b = ",b);//b =  2
// a=a+1;
// console.log(a); // 6
// //in short
// a++;
// console.log(a); // 7


// a=a-1;
// console.log(a); // 6
// // another way
// a--;
// console.log(a); // 5


// console.log("++a = ",++a);//++a =  6
// console.log("a++ = ",a++);//a++ =  6
// console.log("a= ",a);//a=  7



// console.log("--a = ",--a);//--a =  6
// console.log("a--= ",a--);//a-- =  6
// console.log("a= ",a);//a=  5


// //-------------------------------------------
// //Assignment operators

// let a= 5;
// let b= 7;
// let c = 6;
// let d = 8;
// let e = 9;
// let f = 9;
// a += 4; // a =a+ 4;
// // both are same 
// console.log(a); //9

// b -= 4; // b =b- 4;
// // both are same 
// console.log(b); //3

// c *= 4; // c =c* 4;
// // both are same 
// console.log(c); //24

// d /= 4; // d =d/ 4;
// // both are same 
// console.log(d); //2

// e %= 4; // e =e% 4;
// // both are same 
// console.log(e); //1

// f **= 4; // f =f** 4;
// // both are same 
// console.log(f); //6561



//-------------------------------------------
//Comparison operators

// let a= 5;
// let b= 7;
// let c = 6;
// let d = 6;
// console.log(a==b); //false
// console.log(c==d); //true

// console.log(c!=d); //false
// console.log(a!=b); //true


//----------------------------------------------
// == , != are cack only number but === , !== they are check number and data type both
// let a=5;  // number
// let b="5"; // string -> number 
// console.log("a==b",a==b);  //a==b true

// but we have many such cases. in which we do not want string and numbeer are not equal comparison to each other
// for this case we can use stricter version of equal to ,not equal to use

// let a=5;  // number
// let b="5"; // string -> number 
// console.log("a===b",a===b);  //a===b false

// let a=5;  // number
// let b="5"; // string -> number 
// console.log("a!==b",a!==b);  //a!==b true



// let a=5;  
// let b=3; 
// console.log("5>3",a>b);  //5>3 true

// let a=5;  
// let b=6; 
// console.log("6>=5",a>=b);  //6>=5 true


//--------------------------------------------------------
// Logical Operators

// Logical AND &&

// let a = 6;
// let b = 5;
// let cond1 = a > b; // true
// let cond2 = a===6; // true
// console.log("cond1 && cond2 = ",cond1 && cond2);  // cond1 && cond2 =  true


// let a = 6;
// let b = 5;
// let cond1 = a > b; // true
// let cond2 = a===5; // false
// console.log("cond1 && cond2 = ",cond1 && cond2);  // cond1 && cond2 =  false


// let a = 6;
// let b = 5;
// console.log("cond1 && cond2 = ",a > b && a===6);  // cond1 && cond2 =  true

//-----------------------------------------------------------------------------
// Logical OR ||



// let a = 6;
// let b = 5;
// console.log("cond1 || cond2 = ",a < b || a===6);  // cond1 || cond2 =   true


//-----------------------------------------------------------------------------
// Logical not !

// let a = 6;
// let b = 5;
// console.log("!(6<5) = ",!(a < b));  // !(6<5) =  true
