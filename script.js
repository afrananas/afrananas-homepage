// script.js
document.getElementById("page-location").innerText = window.location.href;
document.getElementById("last-modified").innerText = document.lastModified;

//theme toggle
const toggleButton = document.getElementById("theme-toggle");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});