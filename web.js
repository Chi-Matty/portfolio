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
