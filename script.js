document.addEventListener("DOMContentLoaded", () => {

  // navbar shadow
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    navbar.style.boxShadow =
      window.scrollY > 10
        ? "0 5px 15px rgba(0,0,0,0.08)"
        : "none";
  });

});