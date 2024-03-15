const app= require("./src/server")
const conDb = require("./src/config/conDb")
conDb ().then((res)=>{
  app.listen(3000, () => {
    console.log(`Servidor escuchando en el puerto 3000`);
  });
})
.cathch((err)=>{
  console.log("Error al conectar la BDD")
})






