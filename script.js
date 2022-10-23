const bar = document.querySelector(".bar");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
bar.addEventListener("click", () => {
  menu.classList.add("active");
});
close.addEventListener("click", () => {
  menu.classList.remove("active");
});

// FORM VALIDATION
const form = document.querySelector("#form");
const name = document.querySelector('input[type="text"]');
const email = document.querySelector('input[type="email"]');
const message = document.querySelector("#contact-message");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Project Submitted");
  name.value = "";
  email.value = "";
  message.value = "";
});

// SCROLL VIEW
window.addEventListener("scroll", () => {
  let content = document.querySelector(".first-scroll");
  let contentPosition = content.getBoundingClientRect().top;
  let contentScreen = window.innerHeight / 0.9;
  if (contentPosition < contentScreen) {
    content.classList.add("scroll");
  } else {
    content.classList.remove("scroll");
  }
});

window.addEventListener("scroll", () => {
  let content = document.querySelector(".second-scroll");
  let contentPosition = content.getBoundingClientRect().top;
  let contentScreen = window.innerHeight / 0.9;
  if (contentPosition < contentScreen) {
    content.classList.add("scroll");
  } else {
    content.classList.remove("scroll");
  }
});

window.addEventListener("scroll", () => {
  let content = document.querySelector(".third-scroll");
  let contentPosition = content.getBoundingClientRect().top;
  let contentScreen = window.innerHeight / 0.9;
  if (contentPosition < contentScreen) {
    content.classList.add("scroll");
  } else {
    content.classList.remove("scroll");
  }
});

window.addEventListener("scroll", () => {
  let content = document.querySelector(".fourth-scroll");
  let contentPosition = content.getBoundingClientRect().top;
  let contentScreen = window.innerHeight / 1.1;
  if (contentPosition < contentScreen) {
    content.classList.add("for-scroll");
  } else {
    content.classList.remove("for-scroll");
  }
});

window.addEventListener("scroll", () => {
  let content = document.querySelector(".fifth-scroll");
  let contentPosition = content.getBoundingClientRect().top;
  let contentScreen = window.innerHeight / 0.9;
  if (contentPosition < contentScreen) {
    content.classList.add("scroll");
  } else {
    content.classList.remove("scroll");
  }
});

window.addEventListener("scroll", () => {
  let content = document.querySelector(".sixth-scroll");
  let contentPosition = content.getBoundingClientRect().top;
  let contentScreen = window.innerHeight / 0.9;
  if (contentPosition < contentScreen) {
    content.classList.add("scroll");
  } else {
    content.classList.remove("scroll");
  }
});
