const {Router}= require("express")
const {testController, moviesDB,createMovie}= require("../controllers/index")


const router = Router();

// router.get("/movies", testController)
router.get("/movies", moviesDB)
router.post("/movies",createMovie )

module.exports= router