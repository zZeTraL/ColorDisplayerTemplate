let template = (function() {

    // Constant
    let hexLength = 7;

    // Registering all root vars
    let backgroundColorInput = document.getElementById("main-bg-color").value;
    let root = document.documentElement.style;

    return {
        // Getters

        // Setters
        setValue(){

        },

        // Methods
        /**
         * Permet de change le code HEX d'une property CSS
         *
         * @param element
         * @param {string} property
         * @param {string} hex
         */
        // XXX SHOULD BE CLEANER
        setColorByHex(element, property, hex){
            if(hex.startsWith("#") && hex.length === hexLength){
                console.log("ARRAY CONTAIN # and length is 7");
                element.classList.remove("p-form-invalid");
                element.classList.add("p-form-valid");
                root.setProperty(property, hex);
            } else {
                element.classList.remove("p-form-valid");
                element.classList.add("p-form-invalid");
            }
        },

        // Listeners
        onTyping(event){
            let element = event.target;
            let elementId = element.getAttribute("id");
            let inputValue = element.value;
            switch (elementId){
                case "main-bg-color":
                    template.setColorByHex(element, "--dark-main-bg-color", inputValue);
                    break;
                case "header-bg-color":
                    template.setColorByHex(element, "--dark-header-bg-color", inputValue);
                    break;
                default:
                    break;
            }
        }

    }

})();