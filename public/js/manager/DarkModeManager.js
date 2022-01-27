let darkMode = (function() {

    let darkModeButton = document.getElementById("darkMode");
    let darkModeActivated = true;

    return {
        // Getters
        isEnabled: () => darkModeButton,

        // Setters
        toggle(){
            if(darkModeActivated){
                document.body.setAttribute("class", "light");
                darkModeActivated = false;
            } else {
                document.body.setAttribute("class", "");
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