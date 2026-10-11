// lecture 41

// form handling

//  const form = document.querySelector("#form")
// form.addEventListener("submit", (e) => {        //submit is evnt type
//     console. log("Hii");
// })

// const form = document.querySelector("#form")
// form.addEventListener("submit", (e) => {        //submit is evnt type
//     e.preventDefault();     // they are stop default browzer behavir
//     console. log("Hii");
// })

// const btn = document.querySelector("#btn")
// btn.addEventListener("submit", (e) => {        //submit is for form
//     e.preventDefault();     // they are stop default browzer behavir
//     console. log("Hii");
// })

// const btn = document.querySelector("#btn")
// btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     console. log("Hii");
// })

// -------------------------------------------

// const form = document.querySelector("#form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const username = document.querySelector("#username");
//   const password = document.querySelector("#password");
//   const email = document.querySelector("#email");

//   console.log({ username, password, email });
// });

// -------------------------------------------

// const form = document.querySelector("#form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const username = document.querySelector("#username").value;
//   const password = document.querySelector("#password").value;
//   const email = document.querySelector("#email").value;

//   console.log({ username, password, email });
// });

// -------------------------------------------

// const form = document.querySelector("#form");
// const username = document.querySelector("#username");
// const bio = document.querySelector("#bio");
// const charCount = document.querySelector("#char-count");

// const LIMIT = 150;
// charCount.textContent = `${LIMIT} characters remaining`;

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const password = document.querySelector("#password").value;
//   const email = document.querySelector("#email").value;

//   console.log({ username: username.value, password, email });
// });

// bio.addEventListener("input", (e) => {
//   // input is envent
//   const remaining = LIMIT - bio.value.length;

//   charCount.textContent = `${remaining} characters remaining`;
// });

// // -------------------------------------------

// const form = document.querySelector("#form");
// const username = document.querySelector("#username");
// const bio = document.querySelector("#bio");
// const charCount = document.querySelector("#char-count");
// const checkbox = document.querySelector("#checkbox");
// const country = document.querySelector("#country");
// const passwordHint = document.querySelector("#password-hint")
// const password = document.querySelector("#password")

// username.addEventListener("change", (e) => {        // change event fired once
//   console.log("change event", username.value);
// });

// username.addEventListener("input", (e) => {         // input event are every keystroke it will fired
//   console.log("input event", username.value);
// });

// checkbox.addEventListener("input", (e) => {
//     console.log("hello");
// })

// checkbox.addEventListener("change", (e) => {
//     console.log("hello");
// })

// checkbox.addEventListener("change", (e) => {
//     console.log(checkbox.checked);
// });

// // ----
// // they both are work , but what can use
// // like select , radio box , check box use change event other wise input event

// country.addEventListener("change", (e) => {
//     console.log(country.value);
// })

// country.addEventListener("input", (e) => {
//     console.log(country.value);
// });

// username.addEventListener("focus", (e) => {
//     console.log("focus");
// })

// username.addEventListener("blur", (e) => {
//     console.log("blur");
// })

// password.addEventListener("focus", (e) => {
//     passwordHint.classList.remove("hidden")
// })

// password.addEventListener("blur", (e) => {
//     passwordHint.classList.add("hidden")
// })

// -------------------------------------------
// validation

// const form = document.querySelector("#form");
// const username = document.querySelector("#username");
// const bio = document.querySelector("#bio");
// const charCount = document.querySelector("#char-count");
// const checkbox = document.querySelector("#checkbox");
// const country = document.querySelector("#country");
// const passwordHint = document.querySelector("#password-hint");
// const password = document.querySelector("#password");
// const errorMessage = document.querySelector("#error-message");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     //   if (username.value.length === 0) {
//     //     console.log("Enter your name");
//     //   }

//     //   if (username.value.length === 0) {
//     //     console.log("Enter your name");
//     //     return; // erly return
//     //   }

//     // if (username.value.trim().length === 0) {
//     //     console.log("Enter your name");
//     //     return;
//     //   }

//     //   if (username.value.trim().length === 0) {
//     //     console.log("Enter your name");
//     //     alert("please enter your name");
//     //   }

//     // if (username.value.trim().length === 0) {
//     //     errorMessage.textContent = "please enter your name"
//     //     return;
//     // }

//     const email = document.querySelector("#email").value;
//     console.log({ username: username.value, password: password.value, email });
// });

// -------------------------------------------

// const form = document.querySelector("#form");
// const username = document.querySelector("#username");
// const bio = document.querySelector("#bio");
// const charCount = document.querySelector("#char-count");
// const checkbox = document.querySelector("#checkbox");
// const country = document.querySelector("#country");
// const passwordHint = document.querySelector("#password-hint");
// const password = document.querySelector("#password");
// const errorMessage = document.querySelector("#error-message");

// function showError(input, errorMessage) {
//   input.parentElement.querySelector(".error-message").textContent =
//     errorMessage;
// }

// function clearError(input) {
//   input.parentElement.querySelector(".error-message").textContent = "";
// }

// function validUsername(username) {
//   //check 1
//   if (username.value.trim().length === 0) {
//     showError(username, "Please Enter you name");
//     return false;
//   }

//   //check 2
//   if (username.value.trim().length < 3) {
//     showError(username, "username must be at least 3 character");
//     return false;
//   }

//   clearError(username);
//   return true;
// }

// function validPassword(password) {
//   //check 1
//   if (password.value.trim().length === 0) {
//     showError(password, "Please Enter you password");
//     return false;
//   }

//   //check 2
//   if (password.value.trim().length < 8) {
//     showError(password, "password must be at least 8 character");
//     return false;
//   }

//   clearError(password);
//   return true;
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const isUsernameValid = validUsername(username); // passing username element
//   const isPasswordValid = validPassword(password); // passing password element

//   if (isUsernameValid && isPasswordValid) {
//     document.querySelector("h1").classList.remove("hidden");
//   } else {
//     document.querySelector("h1").classList.add("hidden");
//   }
// });
