// contact
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzI_OC6ylKmwC9aZXlS6U9M0z97SHOz5MPNBSxEXbu5V4j-13b2KzcWYDag1RibxH3w/exec";
const form = document.forms["project1-contact-form"];
const btnKirim = document.querySelector(".submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// navigation
const menuToggle = document.querySelector(".menu-toggle input");
const menuToggle1 = document.querySelector(".nav-list ul");
const nav = document.querySelector(".nav-list");
const nava = document.querySelector(".nav-list");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
menuToggle1.addEventListener("click", function () {
  nav.classList.toggle("slide");
  document.getElementById("checkbox").checked = false;
});
