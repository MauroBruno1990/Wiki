const express = require("express");
const router = express.Router();
const { Page, User } = require("../models");


//PAGINAS

router.get("/", function(req,res,next){
  
  
  Page.findAll()
  .then((pages)=>{
    /* res.send(pages) */
    res.render('index', {
      pages: pages
    })
  })
})

router.get("/add", function (req, res, next) {
  res.render('addpage');
  
});
router.post("/", function (req, res, next) {

  User.findOrCreate({
    where: {
      name: req.body.name,
      email: req.body.email
    }
  })
    .then (data =>{
      const user = data[0]
      Page.create({
        title: req.body.title,
        content: req.body.content,
        status: req.body.status
      })
        .then(page => page.setAuthor(user))
        .then(page => res.redirect("/"))
    })


});



router.get("/:urlTitle", function (req, res, next) {
  Page.findOne({
    where: {
        urlTitle: req.params.urlTitle
    }
  })
  .then((paginaEncontrada)=>{
    res.send(paginaEncontrada)
    
  })
});
module.exports = router;