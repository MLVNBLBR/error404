// Buggy main.js
document.getElementById("title").innerText = "Welcome";

document.getElementById("menuBtn").addEventListener("click", toggleMenu);

// toggleMenu is not defined
function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu) {
        menu.style.display = (menu.style.display === "none" || !menu.style.display) ? "block" : "none";
    }
}
