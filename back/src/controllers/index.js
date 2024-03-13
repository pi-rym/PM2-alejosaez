const axios = require("axios");

const testController = async (req, res) => {
    try {
        const response = await axios.get('https://students-api.up.railway.app/movies');
        res.status(200).send(response.data);
    } catch (error) {
        console.error("Error en la solicitud a la API:", error);
        res.status(400).send("Error en la solicitud a la API");
    }
};


module.exports = {
    testController
};
