const fs = require('fs');
const recipe = require('../data');

//SHOW
exports.show = function (req, res) {
  const recipeIndex = req.params.index;

  if (!recipe[recipeIndex]) 
    return res.status(404).render("admin/not-found");

  return res.render("admin/recipes", { recipe: recipe[recipeIndex]});
}