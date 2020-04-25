const burgerButton = document.querySelector(".burgerButton");
const menu = document.querySelector("header nav.menu");

burgerButton.addEventListener("click", () => {
  menu.classList.toggle("appear");
});
