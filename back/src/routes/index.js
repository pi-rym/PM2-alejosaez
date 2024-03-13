const {Router}= require("express")
const {testController}= require("../controllers/index")


const router = Router();

router.get("/movies", testController)

module.exports= router