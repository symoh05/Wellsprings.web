// Get the elements for the hamburger menu, overlay, and navigation
const hamburger = document.getElementById("hamburger-menu");
const menu = document.querySelector(".main-nav");
const overlay = document.getElementById("menu-overlay");

// Toggle the menu visibility when the hamburger icon is clicked
hamburger.addEventListener("click", function () {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

// Close the menu when clicking outside of it
overlay.addEventListener("click", function () {
    menu.classList.remove("active");
    overlay.classList.remove("active");
});
function toggleMenu() {
    var nav = document.getElementById('nav');
    if (nav.style.display === "block") {
        nav.style.display = "none"; // Hide the menu
    } else {
        nav.style.display = "block"; // Show the menu
    }
}

function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
}
