const {getAllMovies}= require("../services/movieService")

const testController = async (req, res) => {
    try {
        const response = await getAllMovies()
        res.status(200).json(response);
    } catch (error) {
        console.error("Error en la solicitud a la API:", error);
        res.status(400).send("Error en la solicitud a la API");
    }
};


module.exports = {
    testController
};
