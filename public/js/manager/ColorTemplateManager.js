let template = (function() {

    // Constant
    let hexLength = 7;

    // Registering all root vars
    let root = document.documentElement.style;

    //
    let validParameter = ["main-bg-color", "header-bg-color", "hx-color"]

    return {
        // Getters
        /**
         * Check si le name du color picker et l'id de l'input match (afin de set la variable)
         *
         * @param elementId
         * @returns {number}
         */
        isIdMatching(elementId){
            return validParameter.findIndex(element => {
                if (element.includes(elementId)) {
                    return true;
                }
            });
        },

        // Setters
        /**
         * Reset tous les inputs
         */
        reset(){
            for (let elementsByTagNameElement of document.getElementsByTagName("input")) {
                elementsByTagNameElement.value = "";
            }
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
            let result = template.isIdMatching(elementId);
            if(result !== -1){
                console.log("--dark-" + validParameter[result])
                template.setColorByHex(element, "--dark-" + validParameter[result], element.value);
            }
        },

        onColorSelected(event){
            let element = event.target;
            let inputValue = element.value;

            // C'est l'input associé au color picket
            let previousElement = element.parentElement.parentElement.childNodes[1].childNodes[0];

            let result = template.isIdMatching(previousElement.getAttribute("id"));
            if(result !== -1){
                console.log("--dark-" + validParameter[result])
                template.setColorByHex(element, "--dark-" + validParameter[result], inputValue);
                previousElement.value = inputValue;
            }

        }

    }

})();