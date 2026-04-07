const btn = document.getElementById("menu-btn");
const nav = document.getElementById("nav-links");

btn.addEventListener("click", () => {
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
});