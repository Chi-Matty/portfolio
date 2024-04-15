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

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Construct mailto URL
    var mailtoLink =
      "mailto:mathiasmichael2@gmail.com" +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(message);

    // Open default email client with mailto link
    window.location.href = mailtoLink;
  });
