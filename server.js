const express = require('express');
const nunjucks = require('nunjucks');
const receitas = require('./data');

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

/* app.get('/recipes', function(req, res){
  const id = req.query.id;
  const recipe = receitas.find(function(recipe){
    return recipe.id == id;
    
  })

  return res.render("recipes", {item: receitas});
})
 */
app.get("/recipes/:index", function (req, res) {
  const recipe = []; // Array de receitas carregadas do data.js
  const recipeIndex = req.params.index;

  console.log(receitas[recipeIndex]);

  return res.render("recipes", {item: receitas[recipeIndex]});
})

app.use(function(req,res){
  res.status(404).render("not-found");
})

app.listen(8080);