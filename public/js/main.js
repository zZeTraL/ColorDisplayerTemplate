window.onload = function() {
    let darkModeButton = document.getElementById("darkMode");
    darkModeButton.addEventListener('click', () => darkMode.onClick())
}

console.log(document.getElementsByTagName("input"))

for (let elementsByTagNameElement of document.getElementsByTagName("input")) {
    elementsByTagNameElement.addEventListener("input", template.onTyping);
}