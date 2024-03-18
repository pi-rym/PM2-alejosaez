const Movie = require("../models/Movie");
const axios = require("axios");

class MovieBase {
    constructor({ title, poster, director, year, duration, genre, rate }) {
        if (!title || !poster || !director) {
            throw new Error("Se requieren las propiedades 'title', 'poster' y 'director'");
        }

        this.title = title;
        this.poster = poster;
        this.director = director;
        this.year = year;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
    }
}

module.exports = {
    getAllMovies: async () => {
        try {
            const response = await axios.get('https://students-api.up.railway.app/movies');
            const moviesData = response.data;
            const movies = moviesData.map(movie => new MovieBase(movie));
            return movies;
        } catch (error) {
            throw new Error("Error en la solicitud a la API:", error);
        }
    },
    getAllMoviesDb: async () => {
        const movies = await Movie.find();
        console.log("rn rl servicio de mves recuperasdas", movies)
        return movies;
    },
    create: async (title,year, director, genre, rate, duration, poster) => {
        console.log("Datos recibidos:", { title,year, director, genre, rate, duration, poster });
        try {
            const newMovie = new Movie({
                title,
                year,
                director,
                genre,
                rate,
                duration,
                poster
            });
            const savedMovie = await newMovie.save();
            return savedMovie;
        } catch (error) {
            throw new Error("Error al crear la película:", error);
        }
    }
};
