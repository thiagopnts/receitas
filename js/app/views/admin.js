define(function(require) {
    var Backbone = require('backbone');
    var Modal = require('views/modal');
    var userTemplate = require('text!templates/new-user.hbs');
    var recipeTemplate = require('text!templates/new-recipe.hbs');
    var ingredientTemplate = require('text!templates/new-ingredient.hbs');
    var template = require('text!templates/admin.hbs');

    var AdminView = Backbone.View.extend({
        el: template,
        
        events: {
            "click #new-user" : "newUser",
            'click #create-recipe' : 'newRecipe',
            'click #new-ingredient' : 'newIngredient'
        },

        initialize: function(options) {
            this.userModal = new Modal({el: userTemplate});
            this.recipeModal = new Modal({el: recipeTemplate});
            this.ingredientModal = new Modal({el: ingredientTemplate});
        },

        newUser: function(event) {
            this.userModal.show();
        },

        newRecipe: function(event) {
            this.recipeModal.show();
        },

        newIngredient: function(event) {
            this.ingredientModal.show();
        }

    });

    return AdminView;
});
