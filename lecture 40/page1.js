// lecture 40

// ----------------------------------------------------------
//  events

// let btn = document.querySelector("#reveal-gift")

// btn.addEventListener('click', function () {
//     console.log("hellooo hello miccccc checkkk");
// })

// another way
// btn.addEventListener('click', () => console.log("hellooo hello miccccc checkkk"))
// hellooo hello miccccc checkkk

// let btn = document.querySelector("#reveal-gift")
// btn.addEventListener('dblclick', function () {
//     console.log("hellooo hello miccccc checkkk");
// })

// another way
// let btn = document.querySelector("#reveal-gift")

// function revealGift() {
//     console.log("iphone 10000 pro max");
// }

// btn.addEventListener('click',revealGift);   // pass the reference
// btn.addEventListener('click',revealGift());     // do not pass this way

// -------------

// let btn = document.querySelector("#reveal-gift")
// function revealGift() {
//     console.log("iphone 10000 pro max");
// }
// btn.addEventListener('mouseover',revealGift);

// -------------
// let btn = document.querySelector("#reveal-gift");
// let h1 = document.querySelector("#gift");

// function revealGift() {
// //   h1.classList.remove("hidden");
// //   h1.classList.add("visible");

// h1.classList.toggle("hidden");
// }
// btn.addEventListener('click',revealGift);   // pass the reference

// -------------
// another way but old way

// let btn = document.querySelector("#reveal-gift");
// let h1 = document.querySelector("#gift");

// function revealGift() {
// h1.classList.toggle("hidden");
// }

// ------------------------------------
// event object

// let btn = document.querySelector("#reveal-gift");
// let h1 = document.querySelector("#gift");

// function revealGift(event) {
//     console.log(event);
//     console.log(event.type);    //click
//     console.log(event.target);
//     console.log(event.currentTarget);

//     h1.classList.toggle("hidden");
// }
// btn.addEventListener("click", revealGift);

// ------------------------------------

// let div = document.querySelector("#reveal-gift");
// let h1 = document.querySelector("#gift");

// function revealGift(event) {
//     console.log("target",event.target);
//     console.log("currentTarget" ,event.currentTarget);

//     h1.classList.toggle("hidden");
// }
// div.addEventListener("click", revealGift);

// ------------------------------------

// let btn = document.querySelector("#btn")

// btn.addEventListener('click' , (e) => {        // e is a event short way to write
//     console.log(e);
//     console.log(e.key);
//     console.log(e.clientX);         // give mouse position in screen in x axis
//     console.log(e.clientY);
// })

// ------------------------------------
// remove event listener

// in this
// let btn = document.querySelector("#btn")

// btn.addEventListener('click' , (e) => {        // e is a event short way to write
//     console.log(e);
// })

// both function are differenrt in memory
// // they both pasing function are same , so they are not remove
// btn. removeEventListener('click' , (e) => {
//     console. log(e);
// })

// ---------------------
// they are coorrect way

// let btn = document.querySelector("#btn");

// function fun(e) {
//   console.log(e);
// }

// // pasing the saame reference of function
// // btn.addEventListener("click", fun);
// // btn.removeEventListener("click", fun);

// // they run one time than remove
// btn.addEventListener("click", fun , {once:true});

// ----------------
// let btn = document.querySelector("#btn");

// let counter = 0;

// function fun1(e) {
//   if (counter < 3) {
//     console.log(e);
//     counter++;
//   } else {
//     btn.removeEventListener("click", fun1);
//   }
// }

// btn.addEventListener("click", fun1);

// --------------------------------------------
// Bubbling vs Capturing

// this conspect is event Bubbling
// check output in console

// let outter = document.querySelector("#outter")
// let inner = document.querySelector("#inner")
// let btn2 = document.querySelector("#btn2")

// outter.addEventListener('click', (e) => {
//     console.log("Outter");
// })

// inner.addEventListener('click', (e) => {
//     console.log("Inner");
// })

// btn2.addEventListener('click', (e) => {
//     console.log("Btn2");
// })

// --------------------------------------------

// let outter = document.querySelector("#outter")
// let inner = document.querySelector("#inner")
// let btn2 = document.querySelector("#btn2")
// let body = document.querySelector("body")

// body.addEventListener('click', (e) => {
//     console.log("body");
// })

// outter.addEventListener('click', (e) => {
//     console.log("Outter");
// } , {capture : true})

// inner.addEventListener('click', (e) => {
//     console.log("Inner");
// })

// btn2.addEventListener('click', (e) => {
//     console.log("Btn2");
// })

// --------------------------------------------

// stopPropagation() is stop event bubbling

// let outter = document.querySelector("#outter")
// let inner = document.querySelector("#inner")
// let btn2 = document.querySelector("#btn2")
// let body = document.querySelector("body")

// body.addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log("body");
// })

// outter.addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log("Outter");
// })

// inner.addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log("Inner");
// })

// btn2.addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log("Btn2");
// })

// --------------------------------------------
// prevent Default

// --------------------------------------------
// Event Delegation

// how can remove product

// let products = [
//     {
//         id: "1",
//         name: "Iphone 20",
//         price: 12342,
//         imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg",
//     },
//     {
//         id: "2",
//         name: "Samsung 15",
//         price: 62324,
//         imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg",
//     },
//     {
//         id: "3",
//         name: "MI 23",
//         price: 35354,
//         imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg",
//     },
//     {
//         id: "4",
//         name: "Poco 10",
//         price: 43534,
//         imgUrl:
//             "https://m.media-amazon.com/images/I/41D9TUZxXwL._SY300_SX300_QL70_FMwebp_.jpg",
//     },
//     {
//         id: "5",
//         name: "Lava 12",
//         price: 53422,
//         imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg",
//     },
// ];

// let productList = document.querySelector("#product-list");

// products.forEach((product) => {
//     const card = document.createElement("div");
//     card.classList.add("singleProduct");

//     const dltBtn = document.createElement("button");
//     dltBtn.textContent = "Remove product"

//     // your code is correct but you put EventListener in every item , solution is Event Delegation
//     dltBtn.addEventListener("click", (e) => {
//         e.stopPropagation()
//         card.remove()
//     })

//     card.innerHTML = `<div>
// <img src="${product.imgUrl}" alt="${product.name}">
// </div>
// <div class="productDetail">
//  <p>${product.name}</p>
// <p>${product.price}</p>
// </div> `;

//     card.append(dltBtn);
//     productList.append(card);
// });

// --------------------------------------------

// let productList = document.querySelector("#product-list");

// products.forEach((product) => {
//     const card = document.createElement("div");
//     card.classList.add("singleProduct");

//     const dltBtn = document.createElement("button");
//     dltBtn.textContent = "Remove product";

//     card.innerHTML = `<div>
// <img src="${product.imgUrl}" alt="${product.name}">
// </div>
// <div class="productDetail">
//  <p>${product.name}</p>
// <p>${product.price}</p>
// </div> `;

//     card.append(dltBtn);
//     productList.append(card);
// });

// // productList.addEventListener("click", (e) => {
// //   e.stopPropagation();
// // //   console.log("hii");
// // //   console.log(e.target);
// // //   console.log(e.target.parentElement);
// // });

// productList.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log(e.target.parentElement);
//     console.log(e.target.tagName);
//     if (e.target.tagName === "BUTTON") {
//         e.target.parentElement.remove();
//     }
// });

// // --------------------------------------------

// let productList = document.querySelector("#product-list");

// products.forEach((product) => {
//     const card = document.createElement("div");
//     card.classList.add("singleProduct");

//     const dltBtn = document.createElement("button");
//     const addToCartBtn = document.createElement("button");
//     dltBtn.textContent = "Remove product";
//     addToCartBtn.textContent = "Add to cart"

//     card.innerHTML = `<div>
// <img src="${product.imgUrl}" alt="${product.name}">
// </div>
// <div class="productDetail">
//  <p>${product.name}</p>
// <p>${product.price}</p>
// </div> `;

//     card.append(dltBtn);
//     card.append(addToCartBtn)
//     productList.append(card);
// });

// productList.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log(e.target.parentElement);
//     console.log(e.target.tagName);
//     console.log(e.target.textContent);
//     // if (e.target.tagName === "BUTTON") {
//     //     e.target.parentElement.remove();
//     // }

//     // if (e.target.textContent === "Remove product") {
//     //     e.target.parentElement.remove()
//     // }

//      if (e.target.textContent === "Remove product" && e.target.tagName === "BUTTON") {
//         e.target.parentElement.remove()
//     }
// });

// --------------------------------------------

// let productList = document.querySelector("#product-list");

// products.forEach((product) => {
//     const card = document.createElement("div");
//     card.classList.add("singleProduct");

//     card.dataset.productId = product.id;
//     const dltBtn = document.createElement("button");
//     const addToCartBtn = document.createElement("button");
//     dltBtn.textContent = "Remove product";
//     addToCartBtn.textContent = "Add to cart"

//         card.innerHTML = `<div>
//     <img src="${product.imgUrl}" alt="${product.name}">
//     </div>
//     <div class="productDetail">
//     <p>${product.name}</p>
//     <p>${product.price}</p>
//     </div> `;

//     card.append(dltBtn);
//     card.append(addToCartBtn)
//     productList.append(card);
// });

// productList.addEventListener("click", (e) => {
//     e.stopPropagation();

//     const dltBtn = e.target;
//     console.log(dltBtn.parentElement);
//     console.log(dltBtn.tagName);
//     console.log(dltBtn.textContent);

//      console.log(dltBtn.parentElement.dataset.productId);
//     if (dltBtn.textContent === "Remove product" && dltBtn.tagName === "BUTTON") {
//         dltBtn.parentElement.remove()
//     }
// });

// --------------------------------------------

// let productList = document.querySelector("#product-list");

// products.forEach((product) => {
//     const card = document.createElement("div");
//     card.classList.add("singleProduct");

//     card.dataset.productId = product.id;
//     const dltBtn = document.createElement("button");
//     const addToCartBtn = document.createElement("button");
//     dltBtn.textContent = "Remove product";
//     addToCartBtn.textContent = "Add to cart"

//         card.innerHTML = `<div>
//     <img src="${product.imgUrl}" alt="${product.name}">
//     </div>
//     <div class="productDetail">
//     <p>${product.name}</p>
//     <p>${product.price}</p>
//     </div> `;

//     card.append(dltBtn);
//     card.append(addToCartBtn)
//     productList.append(card);
// });

// productList.addEventListener("click", (e) => {
//     e.stopPropagation();

//     const dltBtn = e.target;

//     if (dltBtn.textContent === "Remove product" && dltBtn.tagName === "BUTTON") {
//         dltBtn.closest(".singleProduct").remove();
//     }

//     console.log(dltBtn.closest(".singleProduct"));

// });
