const renderCard = require("./renderCard");
const validacionForm= require("./validacionForm")
const axios = require("axios");
$(document).ready(function() {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/movies');
            console.log(response)
            const data = response.data; 
            renderCard(data);
        } catch (err) {
            alert("Error: " + err.message); 
            // No se hace nada en caso de error, no se renderiza nada
        }
    };

    fetchData(); 
});

