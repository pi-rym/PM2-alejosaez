const mongoose= require("mongoose")

const createSchema= new mongoose.Schema({
    title: String,
    director: String,
    genre: String,
    rate: Number,
    duration:Number,
    poster:String
})

const Movie = mongoose.model("Movie", createSchema)

module.exports= Movie;