const express = require('express');
const nunjucks = require('nunjucks');
const recipe = require('./data');
const routes = require('./routes');
const methodOverride = require('method-override');
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(routes);

app.set("view engine", "njk");


nunjucks.configure("views", {
  express: app,
  autoescape: false,
  noCache: true
})

app.listen(3333);