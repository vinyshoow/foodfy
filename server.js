const express = require('express');
const nunjucks = require('nunjucks');
const recipe = require('./data');

const app = express();

app.use(express.static('public'));
app.set("view engine", "njk");

nunjucks.configure("views", {
  express: app,
  autoescape: false,
  noCache: true
})

app.get('/', function(req, res){
  return res.render("home", {items: recipe});
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
  //const recipes = []; // Array de receitas carregadas do data.js
  const recipeIndex = req.params.index;

  if (!recipe[recipeIndex]) 
    return res.status(404).render("not-found");

  return res.render("recipes", { recipe: recipe[recipeIndex]});
})

app.use(function(req,res){
  res.status(404).render("not-found");
})

app.listen(3000);