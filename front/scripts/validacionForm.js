
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("poster").addEventListener("input", function(event) {
        let input = event.target;
        let url = input.value;
        let img = new Image();
        img.src = url;
        img.onload = function() {
            if (this.width > 0 && this.height > 0) {
                input.setCustomValidity("");
                document.getElementById("posterFeedback").textContent = "";
            } else {
                input.setCustomValidity("La URL proporcionada no es una imagen válida");
                document.getElementById("posterFeedback").textContent = "La URL proporcionada no es una imagen válida";
            }
        };
        img.onerror = function() {
            input.setCustomValidity("La URL proporcionada no es una imagen válida");
            document.getElementById("posterFeedback").textContent = "La URL proporcionada no es una imagen válida";
        };
    });
});
