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
