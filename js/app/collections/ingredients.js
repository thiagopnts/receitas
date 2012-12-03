define(function(require) {
    var Ingredient = require('models/ingredient');
    var Backbone = require('backbone');

    var Ingredients = Backbone.Collection.extend({
        model: Ingredient
    });

    return Ingredients;
});
