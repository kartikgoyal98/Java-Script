// lecture 39

// DOM

// when html page are load/render dom is created

// console.log("hello");

// ------------------------------
// in browser
// > console.log(document);
// they give complete html file

// window is the bigest object in js

// > window.document
// they give complete html file

// > document === window.document
// true

// -----------------
// in js

// console.log(document);
// they give complete html file in bowser

// -----------------------------------------------------------

// problem : in html file hello is conver to hi with help of js

// fist to perform some operaction in html file , fist to select element

// let h1 = document.getElementById("h1");
// console.log(h1);

// let h1 = document.querySelector("h1");  // for tag
// let h1 = document.querySelector(".h1"); // for class

// let h1 = document.querySelector("#h1"); // for id
// console.log(h1);

// ------

// let h1 = document.querySelectorAll("#h1"); // for id
// console.log(h1);

// let h1 = document.querySelectorAll("#h1")
// console. log(document.getRootNode());
// console. log(h1);

// ------

// let p = document.querySelector("p");
// console.log(p);

// let p = document.querySelector("p");
// p.textContent = "hello kartik"
// console.log(p);

// let p = document.querySelector("p");
// p.innerHTML = "<h2>hello dostoooo</h2>"     // very very risky
// console.log(p);

// let p = document.querySelector("p");
// console.log(p.textContent);     //Hello dosto kaise ho
// console.log(p);

// let p = document.querySelector("p");
// console.log(p.innerHTML);           //<b>Hello dosto kaise ho</b>

// ------
// let p = document.querySelector("#inerT");
// console.log(p.innerText);

// let p = document.querySelector("#inerT");
// console.log(p.textContent);

// let p = document.querySelector("#inerT");
// console.log(p.innerHTML);

// ------
// how to manage css from js

// let p = document.querySelector("#inerT");
// p.setAttribute("attributeName","value");        // output check in element in inspect

// let p = document.querySelector("#inerT");
// p.setAttribute("style","background-color: pink; font-size : 50px");

// let p = document.querySelector("#inerT");
// let res = p.getAttribute("disabled")
// console.log(res);   //null

// let p = document.querySelector("#inerT");
// let res = p.getAttribute("id")
// console.log(res);   //inerT

// let p = document.querySelector("#inerT");
// p.setAttribute("style","background-color: pink; font-size : 50px");
// let res = p.getAttribute("style")
// console.log(res);   //background-color: pink; font-size : 50px

// let p = document.querySelector("#inerT");
// p.setAttribute("style","background-color: pink; font-size : 50px");
// p.removeAttribute("style")      // output check in element in inspect

// how to manage css from js
// let p = document.querySelector("#inerT");
// p.classList.add("random")
// p.classList.remove("random")
// p.classList.toggle("random")
// console.log(p.classList.contains("random"));    //true  //mean random class are apply or not

// let p = document.querySelector("#inerT");
// p.style.backgroundColor = "red" // camel case

// let p = document.querySelector("#inerT");
// p.dataset.helloDostoHii = "hii"
// console. log(p.dataset.helloDostoHii);  //hii

// // -------------
// let btn = document.querySelector("#btn");
// btn.setAttribute("disabled","true")
// btn.removeAttribute("disabled")
// btn.textContent = "hello"

// let btn = document.querySelector("#btn");
// btn.setAttribute("disabled","true")
// let res = btn.getAttribute("disabled")
// console.log(res);   //true

// -----------------------------------------------------------------
// creating , appending , removing element

// backend se data array of object ke form aa raha hota ha

// ----------------------------------------
// let div = document.createElement("div")
// div.textContent = "Hello"
// console.log(div);

// let body = document.querySelector("body");
// console. log(body);
// // body.appendChild(div);
// // body.append(div);

// -----------
// appendChild and append   differnce
// its append in the last

// let div1 = document.createElement("div")
// let div2 = document.createElement("div")
// div1.textContent = "div 1"
// div2.textContent = "div 2"
// let body = document.querySelector("body");

// body.appendChild(div1);          // only pass node
// body.appendChild(div2);

// body.append(div1,div2);  // insert in last of body       // you can pass hole string
// body.append("kartik");  // insert in last of body       // you can pass hole string
// body.prepend(div1,div2); // insert in start of body

// ------------------------

// let they all data are come to backend and show to frantend

// let products = [
//     {
//         name: "Iphone 20",
//         price: 12342,
//         imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg",
//     },
//     {
//         name: "Samsung 15",
//         price: 62324,
//         imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg",
//     },
//     {
//         name: "MI 23",
//         price: 35354,
//         imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg",
//     },
//     {
//         name: "Poco 10",
//         price: 43534,
//         imgUrl:
//             "https://m.media-amazon.com/images/I/41D9TUZxXwL._SY300_SX300_QL70_FMwebp_.jpg",
//     },
//     {
//         name: "Lava 12",
//         price: 53422,
//         imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg",
//     },
// ];

// let productList = document.querySelector("#product-list");
// console. log(productList);

// products.forEach((product) => {
//   console.log(product);
// });

// products.forEach((product) => {
//   const card = document.createElement("p");
//   card.textContent = `${product.name} - ${product.price}`;
//   productList.append(card);
// });

// ------------------------------------------
// let productList = document.querySelector("#product-list");

// products.forEach((product) =>{
// const card = document.createElement("div");
// card.classList.add("singleProduct");

// const upperDiv = document.createElement("div")
// const lowerDiv = document.createElement("div")

// const img = document.createElement("img")

// img.setAttribute("src" , "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg")

// upperDiv.append(img)

// card.append(upperDiv)

// productList.append(card)

// })

// ------------------------------------------
// another way

// let productList = document.querySelector("#product-list");

// products.forEach((product) => {
//     const card = document.createElement("div");
//     card.classList.add("singleProduct");

//     card.innerHTML = `<div>
// <img src="https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg" alt="">
// </div>
// <div class="productDetail">
// <p>Iphone 16 pro</p>
// <p>143243</p>
// </div> `;

//     productList.append(card);
// });

// ------------------------------------------
// how can update the data

// let productList = document.querySelector("#product-list");

// products.forEach((product) => {
//     const card = document.createElement("div");
//     card.classList.add("singleProduct");

//     card.innerHTML = `<div>
// < <img src=${product.imgUrl} alt="">
// </div>
// <div class="productDetail">
//  <p>${product.name}</p>
// <p>${product.price}</p>
// </div> `;

//     productList.append(card);
// });

// ------------------------------------------
// remove element

// fist way
// let h2 = document.querySelector("#h23")
// let body = document.querySelector("body");
// body.removeChild(h2) // you have to perform on parent

// sec way
// let h2 = document.querySelector("#h23")
// h2.remove() // directly on the element you want to remove

// ------------------------------------------
// clone node

// let productList = document.querySelector("#product-list");

// products.forEach((product) => {
//     const card = document.createElement("div");
//     card.classList.add("singleProduct");

//     card.innerHTML = `<div>
// < <img src=${product.imgUrl} alt="">
// </div>
// <div class="productDetail">
//  <p>${product.name}</p>
// <p>${product.price}</p>
// </div> `;

//     productList.append(card);
// });

// let clone = productList.cloneNode();
// console.log(clone);

// let clone = productList.cloneNode(true);
// console.log(clone);

// let clone = productList.cloneNode(true);
// let body = document.querySelector("body");
// body.append(clone)

// ------------------------------------------
// insert

// let productList = document.querySelector("#product-list");

// products.forEach((product) => {
//     const card = document.createElement("div");
//     card.classList.add("singleProduct");

//     card.innerHTML = `<div>
// < <img src=${product.imgUrl} alt="">
// </div>
// <div class="productDetail">
//  <p>${product.name}</p>
// <p>${product.price}</p>
// </div> `;

//     productList.append(card);
// });

// console.log(productList);
// console.log(productList.children);

// const items = productList.children
// let h2 = document.querySelector("#h23")
// productList.insertBefore(h2 , items[2]) // for precise positioning
// items[2].before(h2)
// items[2].after(h2)
