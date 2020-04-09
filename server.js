const express = require('express');
const nunjucks = require('nunjucks');
const receitas = require('./data');
const dataRecipes = require('./dataRecipes');

const app = express();

app.use(express.static('public'));
app.set("view engine", "njk");

nunjucks.configure("views", {
  express: app,
  autoescape: false,
  noCache: true
})




app.get('/', function(req, res){
  return res.render("home", {items: receitas});
});

app.get('/about', function(req, res){
  return res.render("about");
})

app.get('/recipes', function(req, res){
  return res.render("recipes", {items: dataRecipes});
})

app.use(function(req,res){
  res.status(404).render("not-found");
})

app.listen(8080);