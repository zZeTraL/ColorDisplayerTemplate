let darkMode = (function() {

    let darkModeButton = document.getElementById("darkMode");
    let darkModeActivated = true;

    return {
        // Getters
        isEnabled: () => darkModeButton,

        // Setters
        toggle(){
            console.log(document.documentElement.style);
            if(darkModeActivated){
                document.documentElement.style.setProperty("--main-background-color", "white");
                document.documentElement.style.setProperty("--h1-color", "#FF6D33");
                darkModeActivated = false;
            } else {
                document.documentElement.style.setProperty("--main-background-color", "#393545");
                document.documentElement.style.setProperty("--h1-color", "white");
                darkModeActivated = true;
            }
        },

        onClick(){
            let i = document.createElement("i");
            darkModeButton.childNodes[0].remove();
            i.setAttribute("class", darkModeActivated ? "bx bx-moon" : "bx bxs-moon");
            darkModeButton.appendChild(i);

            this.toggle();
        }
    }

})();