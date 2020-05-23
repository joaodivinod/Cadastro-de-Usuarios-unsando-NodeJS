const express = require ("express");
const nunjucks = require("nunjucks")

const app = express();

nunjucks.configure("views",{
  autoescape:true,
  express: app,
  watch:true,
})

app.use(express.urlencoded({extend:false}));
app.set("view engine", "njk");

const users = ['João Divino','Ana Luiza', 'Yasmin Rosa','Daniel', 'Flor','Maria']

app.get("/", (req,res)=>{
  return res.render("list" , {users});
});

app.get('/new', (req,res)=>{
  return res.render('new')
})

app.post('/create', (req,res)=>{
  users.push(req.body.user);
  return res.redirect("/")
});

app.listen(3000);
