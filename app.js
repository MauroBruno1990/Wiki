const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const nunjucks = require("nunjucks");
const db = require("./db");
const models = require("./models");
const rutas = require("./routes");
const { asyncAll } = require("nunjucks/src/runtime");
const volleyball = require("volleyball")
const path = require("path");


//MIDDLEWARES
app.use(volleyball);
app.use(express.static(path.join(__dirname, '/public')))

app.engine("html", nunjucks.render); // como renderear templates html
app.set("view engine", "html"); // que extensiones de archivo tienen los templates
nunjucks.configure("views", { noCache: true }); // donde encontrar las views

 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




app.use("/", rutas);

// error Middleware
app.use((err,req,res,next)=>{
  res.sendStatus(404).send(err)
})




db.sync().then(() => {
  app
    .listen(3000, ()=> {
      console.log("server funcionando en el puerto 3000");
    })
   /*  .catch((err)=>{
      console.log(err);
    }); */
});