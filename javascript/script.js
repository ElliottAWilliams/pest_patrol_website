const hamburger = document.querySelector("#hamburgerBtn");
const menu = document.querySelector("#primaryNav");
let menuOpen = false;

function toggleMenu() {
  if (menuOpen) {
    menu.style.display = "none";
    menuOpen = false;
  } else {
    menu.style.display = "contents";
    menuOpen = true;
  }
}
hamburger.addEventListener("click", toggleMenu);


