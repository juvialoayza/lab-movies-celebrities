const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model.js")


//crear celebrity

router.get("/create", (req, res, next) => {
    res.render("celebrities/new-celebrity.hbs")
})

router.post("/create", async (req, res, next) => {

const {name, occupation, catchPhrase} = req.body

try {
    await Celebrity.create({
        name,
        occupation,
        catchPhrase
    })

    res.redirect("/")

}   catch(error){
    res.render("celebrities/new-celebrity.hbs")
}
})

//listado de celebrities

router.get("/", async(req,res,next)=>{

    try{
        const celebritiesList =  await Celebrity.find()

        res.render("celebrities/celebrities.hbs",{
            celebritiesList
        })

    }catch(err){
        next (err)
    }
    



})





module.exports = router;