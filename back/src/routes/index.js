const {Router}= require("express")
const {testController, moviesDB}= require("../controllers/index")


const router = Router();

router.get("/movies", testController)
router.get("/moviesdb", moviesDB)


module.exports= router