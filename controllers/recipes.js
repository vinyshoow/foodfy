const fs = require('fs');
const recipe = require('../data');

//INDEX
exports.index = function (req, res) {
  return res.render("admin/listagem", {items: recipe});
};

//CREATE
exports.create = function (req,res) {
  return res.render("admin/create");
};

//SHOW
exports.show = function (req, res) {
  const recipeIndex = req.params.index;

  if (!recipe[recipeIndex]) 
    return res.status(404).render("admin/not-found");

  return res.render("admin/recipes", { recipe: recipe[recipeIndex]});
};

//POST
exports.post = function(req, res) {
  
}