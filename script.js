const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");

const toggleNav = () => {
  menuBars.classList.toggle("change");
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.add("overlay-slide-right");
    overlay.classList.remove("overlay-slide-left");
  } else {
    overlay.classList.add("overlay-slide-left");
    overlay.classList.remove("overlay-slide-right");
  }
};
//Event listeners
menuBars.addEventListener("click", toggleNav);
nav1.addEventListener("click", toggleNav);
nav2.addEventListener("click", toggleNav);
nav3.addEventListener("click", toggleNav);
nav4.addEventListener("click", toggleNav);
nav5.addEventListener("click", toggleNav);
