const axios = require("axios");
document.addEventListener("DOMContentLoaded", function() {
  
    const enviarFormulario = async (formData) => {
        try {
            const response = await axios.post('http://localhost:3000/movies', formData);
            console.log(response.data);
            
        } catch (error) {
            console.error("Error al enviar los datos al backend:", error.message);
            
        }
    };

   
    document.getElementById("movieForm").addEventListener("submit", async function(event) {
        event.preventDefault(); 

       
        const formData = new FormData(this);

       
        enviarFormulario(formData);
    });

   
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
