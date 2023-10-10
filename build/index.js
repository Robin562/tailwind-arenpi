const year = new Date().getFullYear();
const footerYear = document.getElementById("year-el");
footerYear.textContent = year;
const dragableArea = document.querySelector(".dragable");

let isDown = false;
let startX;
let formerScrollValue = 0;

dragableArea.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX;
});
dragableArea.addEventListener("mouseleave", () => {
  isDown = false;
  formerScrollValue = dragableArea.scrollLeft;
});
dragableArea.addEventListener("mouseup", () => {
  isDown = false;
  formerScrollValue = dragableArea.scrollLeft;
});

dragableArea.addEventListener("mouseover", (e) => {
  if (!isDown) return;
  const walk = startX - e.pageX;
  dragableArea.scrollLeft = walk + formerScrollValue;
});

// Sidebar setup

const sidebarOpen = document.getElementById("sidebar-open");
const sidebarClose = document.getElementById("sidebar-close");
const sidebar = document.getElementById("sidebar");
const body = document.querySelector("body");

sidebarOpen.addEventListener("click", () => {
  sidebar.classList.remove("w-0");
  sidebar.classList.add("w-full");
  body.classList.add("overflow-hidden");
});
sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("w-0");
  sidebar.classList.remove("w-full");
  body.classList.remove("overflow-hidden");
});
