// Buggy main.js
documment.getElementById("title").innerText = "Welcome";

document.getElementById("menuBtn").addEventListener("click", toggleMenu);

// toggleMenu is not defined

function toggleMenu() {
    // Example toggle logic
    const menu = document.getElementById("menu");
    if (menu) {
        menu.style.display = (menu.style.display === "none" || !menu.style.display) ? "block" : "none";
    } else {
        alert("Menu element not found.");
    }
}
