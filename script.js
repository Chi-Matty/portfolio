/*const bar = document.querySelector(".bar");
const menu = document.querySelector(".menu");
bar.addEventListener("click", () => {
  menu.classList.toggle("active");
});*/

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
    content.classList.add("for-scroll");
  } else {
    content.classList.remove("for-scroll");
  }
});

window.addEventListener("scroll", () => {
  menu.classList.remove("active");
});
