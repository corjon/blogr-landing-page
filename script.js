const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("primary-nav");
const summary = document.querySelectorAll(".summary");
const dropdown = document.querySelectorAll(".dropdown");

// toggle mobile navigation
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

// expand dropdowns
summary.forEach((item, index) => {
  item.addEventListener("click", () => {
    dropdown[index].classList.toggle("expanded");
  });
});