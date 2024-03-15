// hacer la conexion a la base de datos en una FUNCIOn
// exportar esta funcion
require("dotenv").config();

const mongoose=require("mongoose")
const conDb=async ()=>{
    console.log(process.env.MONGO_URI)
// aca hacemos la concexion a la base de datos con la url  que nos da mongoDB

}

module.exports = conDb