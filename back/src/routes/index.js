const {Router}= require("express")
const {testController, moviesDB,createMovie}= require("../controllers/index")
const {validarCampos, validarAnio }= require("../middleware/middlewares")
const router = Router();


router.get("/movies", moviesDB)
router.post("/movies", validarCampos, validarAnio, createMovie)
// router.post("/movies", createMovie)


module.exports= router