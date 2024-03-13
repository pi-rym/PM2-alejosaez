const axios = require("axios");

module.exports ={
    getAllMovies : async() =>{
        try {
            const response = await axios.get('https://students-api.up.railway.app/movies');
            return response.data
        } catch (error) {
            return ("Error en la solicitud a la API:", error);
            
        }
    }
}