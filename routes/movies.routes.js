const router = require("express").Router();

const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model.js")

//ruta para crear pelicula

router.get("/create", async (req, res, next)=>{
    
    
    try{
        const celebritiesList = await Celebrity.find()
        res.render("movies/new-movie.hbs",{
            celebritiesList
        })       

    }
    catch(error){
        next(error)
    }
})

//ruta para añadir la pelicula

router.post("/create", async (req, res, next)=>{

    const{title, genre, plot, cast} = req.body

    try{
        await Movie.create({title, 
            genre, 
            plot, 
            cast})
        
        res.redirect("/movies")
    }
    catch(error){
        next(error)
    }

})

//ruta para ver listado peliculas

router.get("/", async(req,res,next)=>{

    try{
        const moviesList = await Movie.find()
        res.render("movies/movies.hbs", {
            moviesList
        })
    }
    catch(err){
        next(err)
    }

    

})

//ruta para ver detalles de peliculas

router.get("/:movieId/details", async(req, res, next)=>{

    let {movieId} = req.params

    try{
        const movieDetails = await Movie.findById(movieId)
        .populate("cast")
        res.render("movies/movie-details.hbs", {
            movieDetails
        })

    }
    catch(error){
        next(error)
    }
})




module.exports = router;