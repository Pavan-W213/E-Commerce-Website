const bar = document.getElementById("menu");
const nav = document.getElementById("navbar");
const bar2 = document.getElementById("menu2");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (bar2) {
  bar2.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
