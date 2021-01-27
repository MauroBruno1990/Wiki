const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const nunjucks = require("nunjucks");
const db = require("./db");
const models = require("./models");
const { Page } = require("./models");
const { User } = require("./models");
const rutas = require("./routes");

//MIDDLEWARES
app.use("/", rutas);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



//
app.engine("html", nunjucks.render); // como renderear templates html
app.set("view engine", "html"); // que extensiones de archivo tienen los templates
nunjucks.configure("views", { noCache: true }); // donde encontrar las views



app.get("/",  (req, res, next)=> {
  res.send("Estamos en la homepage");
});

db.sync().then(() => {
  app
    .listen(3000, ()=> {
      console.log("server funcionando en el puerto 3000");
    })
   /*  .catch((err)=>{
      console.log(err);
    }); */
});