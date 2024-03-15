const {getAllMovies, getAllMoviesDb}= require("../services/movieService")

const testController = async (req, res) => {
    try {
        const response = await getAllMovies()
        res.status(200).json(response);
    } catch (error) {
        console.error("Error en la solicitud a la API:", error);
        res.status(400).send("Error en la solicitud a la API");
    }
};

const moviesDB = async (req, res) => {
    try {
        const response = await getAllMoviesDb()
        res.status(200).json(response);
    } catch (error) {
        console.error("Error en la solicitud a la DB:", error);
        res.status(400).send("Error en la solicitud a la API");
    }
};


module.exports = {
    testController,
    moviesDB
};
