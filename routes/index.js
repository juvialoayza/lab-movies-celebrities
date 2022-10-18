const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//traemos las rutas de celebrities y las acortamos
const celebritiesRoutes = require("./celebrities.routes.js")
router.use("/celebrities", celebritiesRoutes)

//traemos las rutas de movies y las acortamos
const moviesRoutes = require("./movies.routes.js")
router.use("/movies", moviesRoutes)


module.exports = router;
