const router = require("express").Router();

const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model.js")

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




module.exports = router;