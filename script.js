let menuIcon = document.querySelector(".fa-bars-staggered");
let sidebar = document.querySelector(".sidebar");
let laContainer = document.querySelector(".laContainer");

menuIcon.onclick = function () {
  sidebar.classList.toggle("small-sidebar");
  laContainer.classList.toggle("large-container");
};
