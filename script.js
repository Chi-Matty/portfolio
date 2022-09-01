const bar = document.querySelector(".bar");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
bar.addEventListener("click", () => {
  menu.classList.add("active");
});
close.addEventListener("click", () => {
  menu.classList.remove("active");
});
const form = document.querySelector("#form");
const name = document.querySelector('input[type="text"]');
const email = document.querySelector('input[type="email"]');
const message = document.querySelector("#contact-message");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Project Sumitted");
  name.value = "";
  email.value = "";
  message.value = "";
});
