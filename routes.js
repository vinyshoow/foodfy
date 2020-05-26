const express = require('express');
const routes = express.Router();
const recipes = require('./controllers/recipes');
const recipe = require('./data');

routes.get('/', function(req, res){
  return res.render("admin/home", {items: recipe});
});
routes.get('/about', function(req, res){
  return res.render("admin/listagem");
});


routes.get("/admin/recipes/:index", recipes.show);

routes.use(function(req,res){
  res.status(404).render("admin/not-found");
})

module.exports = routes;