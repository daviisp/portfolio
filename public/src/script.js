let openButton = document.getElementById("open-button");
let closeButton = document.getElementById("close-button");
let overlayMenu = document.getElementById("overlay-menu");
let menu = document.getElementById("menu-mobile");

openButton.addEventListener("click", () => {
  menu.classList.add("menu-mobile-show");
});

closeButton.addEventListener("click", () => {
  menu.classList.remove("menu-mobile-show");
});

overlayMenu.addEventListener("click", () => {
  menu.classList.remove("menu-mobile-show");
});
