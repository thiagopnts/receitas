define(function(require) {
    var Recipe = require('models/recipe');
    var Backbone = require('backbone');
    require('storage');

    var Recipes = Backbone.Collection.extend({
        model: Recipe,
        localStorage: new Backbone.LocalStorage("Recipes")
    });

    return Recipes;
});
