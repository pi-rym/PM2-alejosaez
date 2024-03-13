const axios = require("axios");

class Movie {
    constructor({ title, poster, director, year, duration, genre,rate }) {
        if (!title || !poster || !director) {
            throw new Error("Se requieren las propiedades 'title', 'poster' y 'director'");
        }

        this.title = title;
        this.poster = poster;
        this.director = director;
        this.year = year;
        this.duration = duration;
        this.genre = genre;
        this.rate=rate;
    }
}

module.exports ={
    getAllMovies : async() =>{
        try {
            const response = await axios.get('https://students-api.up.railway.app/movies');
            const moviesData = response.data;
            const movies = moviesData.map(movie => new Movie(movie));
            return movies;
        } catch (error) {
            throw new Error("Error en la solicitud a la API:", error);
        }
    }
}
