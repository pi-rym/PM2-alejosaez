const renderCard = require("./renderCard");
const axios = require("axios");
$(document).ready(function() {
    const fetchData = async () => {
        try {
            const response = await axios.get('https://students-api.2.us-1.fl0.io/movies');
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

