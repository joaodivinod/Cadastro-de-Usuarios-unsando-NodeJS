const express = require ("express");
const nunjucks = require("nunjucks")

const app = express();

nunjucks.configure("views",{
  autoescape:true,
  express: app,
  watch:true,
})

app.set("view engine", "njk");

const users = ['João Divino','Ana Luiza', 'Yasmin Rosa','Daniel', 'Flor']

app.get("/", (req,res)=>{
  return res.render("list" , {users});
});

app.get('/new', (req,res)=>{
  return res.render('new')
})

app.listen(3000);