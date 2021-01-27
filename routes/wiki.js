const express = require("express");
const router = express.Router();
const { Page } = require("../models");
const { User } = require("../models");

router.get("/", function(req,res,next){
    res.redirect("/")
})
router.post("/", function (req, res, next) {
  res.send("funcionó POST /wiki/");
});
router.get("/add", function (req, res, next) {
    res.render('addpage');
});



module.exports = router;