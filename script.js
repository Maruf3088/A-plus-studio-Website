const menuBar = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const liList = document.querySelectorAll(".mobile-menu li");
console.log(menuBar);
let i = 0;
menuBar.addEventListener("click", () => {
  if (i == 0) {
    mobileMenu.classList.remove("opacity-0");
    mobileMenu.classList.add("opacity-1");
    mobileMenu.classList.remove("scale-0");
    mobileMenu.classList.add("scale-100");
    i = 1;
  } else if (i == 1) {
    mobileMenu.classList.add("opacity-0");
    mobileMenu.classList.remove("opacity-1");
    mobileMenu.classList.add("scale-0");
    mobileMenu.classList.remove("scale-100");

    i = 0;
  }
});
liList.forEach((li) => {
  li.addEventListener("click", () => {
    mobileMenu.classList.add("opacity-0");
    mobileMenu.classList.remove("opacity-1");
    mobileMenu.classList.add("scale-0");
    mobileMenu.classList.remove("scale-100");

    i = 0;
  });
});
