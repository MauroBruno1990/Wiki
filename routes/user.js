const express = require("express");
const router = express.Router();

const { User } = require("../models");



//USUARIOS


router.get("/", (req,res,next)=>{
   
    User.findAll()
    .then(users => {
        res.send(users)
    })
    .catch(next)
})

router.get("/:userId", (req,res,next)=>{
    
    User.findByPk(req.params.userId)
    .then(usuario => {
        res.send(usuario)
    })
})


module.exports = router;