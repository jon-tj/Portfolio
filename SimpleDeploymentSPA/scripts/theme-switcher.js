
const themeStylesheet = document.getElementById("theme-stylesheet");
const toggleButton = document.getElementById("theme-toggle");

// Check saved preference
if (localStorage.getItem("theme") === "light") {
    toggleTheme();
}
updateButtonText();

toggleButton.addEventListener("click", () => {
    document.body.classList.add("color-transition");
    toggleTheme();
    updateButtonText();
});

function toggleTheme() {
    const currentTheme = themeStylesheet.getAttribute("href");
    if (currentTheme === "theme.light.css") {
        themeStylesheet.href = "theme.dark.css";
        localStorage.setItem("theme", "dark");
    } else {
        themeStylesheet.href = "theme.light.css";
        localStorage.setItem("theme", "light");
    }
}

function updateButtonText() {
    const currentTheme = themeStylesheet.getAttribute("href");
    if (currentTheme === "theme.light.css") {
        toggleButton.textContent = "☀️ Light Mode";
    } else {
        toggleButton.textContent = "🌙 Dark Mode";
    }
}