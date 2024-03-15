require("dotenv").config();
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;

const conDb = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Conectado a la base de datos:", process.env.MONGO_URI);
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
}

module.exports = conDb;
