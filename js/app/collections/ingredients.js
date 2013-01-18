define(function(require) {
    var Ingredient = require('models/ingredient');
    var Backbone = require('backbone');
    require('storage');

    var Ingredients = Backbone.Collection.extend({
        model: Ingredient,
        localStorage: new Backbone.LocalStorage("Ingredients")
    });

    return Ingredients;
});
