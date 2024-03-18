const {getAllMovies, getAllMoviesDb,create}= require("../services/movieService")

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
        const moviesFromDb = await getAllMoviesDb();
        
        const formattedMovies = moviesFromDb.map(movie => ({
            title: movie.title,
            poster: movie.poster,
            director: movie.director,
            year: movie.year,
            duration: movie.duration,
            genre: movie.genre,
            rate: movie.rate
        }));
        
        res.status(200).json(formattedMovies);
    } catch (error) {
        console.error("Error al obtener películas de la base de datos:", error);
        res.status(500).send("Error al obtener películas de la base de datos");
    }
};


const createMovie = async (req, res) => {
    try {
        console.log("Llegue al POST DEL BACKEND")

        const movieInfo = req.body;

        console.log("recupere del post el objeto", movieInfo)

        const { title,year, director, genre, rate, duration, poster } = movieInfo;
        const response = await create(title,year, director, genre, rate, duration, poster);
        // res.status(201).send("Se creo la pelicula con exito")
        res.status(200).json(response);
    } catch (error) {
        console.error("Error en la solicitud a la DB:", error);
        res.status(400).send("Error al crear una película");
    }
};








module.exports = {
    testController,
    moviesDB,createMovie

};
