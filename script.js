//Self Typing
const text = "I'm Michael";
let index = 0;
let timer;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(index);
    index++;
    timer = setTimeout(typeWriter, 150); // Adjust typing speed (milliseconds)
  } else {
    clearTimeout(timer); // Stop typing
    setTimeout(resetText, 2000); // Wait 2 seconds before resetting (milliseconds)
  }
}

function resetText() {
  document.getElementById("typed-text").innerHTML = ""; // Clear text
  index = 0; // Reset index to start typing again
  setTimeout(typeWriter, 1500); // Wait 1.5 seconds before starting again (milliseconds)
}

typeWriter(); // Start typing

// SCROLL VIEW
window.addEventListener("scroll", () => {
  let content = document.querySelector(".first-scroll");
  let contentPosition = content.getBoundingClientRect().top;
  let contentScreen = window.innerHeight / 0.9;
  if (contentPosition < contentScreen) {
    content.classList.add("for-scroll");
  } else {
    content.classList.remove("for-scroll");
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
    content.classList.add("for-scroll");
  } else {
    content.classList.remove("for-scroll");
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

document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".navbar-nav .nav-link");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      // Close the navbar menu when a link is clicked
      var navbarCollapse = document.querySelector(".navbar-collapse");
      var bootstrapNavbar = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bootstrapNavbar.hide();
    });
  });
});
