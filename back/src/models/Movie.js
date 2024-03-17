const mongoose= require("mongoose")

const createSchema= new mongoose.Schema({
    title: String,
    poster:String,
    director: String,
    year: Number,
    duration: String,
    genre: Array,
    rate: Number
})

const Movie = mongoose.model("Movie", createSchema)

module.exports= Movie;