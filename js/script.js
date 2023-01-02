// SETTING
var KetUsernameBot = "Seseorang Mengunjungi Website Lio Kecap!";
var urlToDiscord = "https://apiv2.bhadrikais.my.id/webhook.php?kode=24";

// kirim ip
window.addEventListener("load", (event) => {
  fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.ip);
      discord_message(
        KetUsernameBot,
        "LINK :\n" +
          window.location.href +
          "\nIP :\n" +
          data.ip +
          "\nKOTA :\n" +
          data.city +
          "\nISP :\n" +
          data.org +
          "\nDEVICE :\n" +
          navigator.userAgent
      );
    });
});

// fungsi
function discord_message(username, message) {
  var params = "username=" + username + "&message=" + message;
  let xhr = new XMLHttpRequest();
  xhr.open("POST", urlToDiscord, true);
  xhr.setRequestHeader(
    "Content-type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );
  xhr.send(params);
  xhr.onload = function () {
    if (xhr.status === 200) {
    }
  };
}

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
