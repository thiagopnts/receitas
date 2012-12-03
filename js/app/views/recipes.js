define(function(require) {
    var Backbone = require('backbone');
    var RecipeView = require('views/recipe');

    var RecipesView = Backbone.View.extend({
        el: "#recipes",

        addRecipe: function(recipe) {
            this.$el.append(recipe.render());
        }
    });
});
