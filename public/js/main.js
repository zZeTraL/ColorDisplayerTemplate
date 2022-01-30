window.onload = function() {

    template.reset();

    let darkModeButton = document.getElementById("darkMode");
    darkModeButton.addEventListener('click', () => darkMode.onClick())
}

document.getElementsByName("hex").forEach(element => {
    element.addEventListener("input", template.onTyping);
})

document.getElementsByName("color").forEach(element => {
    element.addEventListener("input", template.onColorSelected);
})