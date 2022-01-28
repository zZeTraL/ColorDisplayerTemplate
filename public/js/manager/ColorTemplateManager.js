let template = (function() {

    // Registering all inputs
    let backgroundColorInput = document.getElementById("main-background-color");

    // Registering all value which can be modified

    return {
        // Getters

        // Setters
        setValue(){

        },

        // Listeners
        onTyping(element){
            console.log("USER IS TYPING FROM AN INPUT")
        }

    }

})();