setMode();

document.getElementById("toggleButton").addEventListener("click", function () {
  
  if (localStorage.theme === "dark") {
    localStorage.theme = "light"; 
  } else {
    localStorage.theme = "dark"; 
  }

  setMode(); 
});

// Function that applies dark or light mode and updates button text
function setMode() {
  const isDarkMode =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  document.documentElement.classList.toggle("dark", isDarkMode);

  // Update button text based on the mode
  document.getElementById("toggleButton").innerText = isDarkMode
    ? "Light Mode"
    : "Dark Mode";
}

