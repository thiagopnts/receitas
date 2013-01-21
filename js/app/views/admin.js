define(function(require) {
    var Backbone = require('backbone');
    var Modal = require('views/modal');
    var UserView = require('views/user');
    var RecipeView = require('views/_recipe');
    var User = require('models/_user');
    var ListView = require('views/list_view');
    var Users = require('collections/users');
    var Ingredients = require('collections/ingredients');
    var Recipes = require('collections/recipes');
    var userTemplate = require('text!templates/new-user.hbs');
    var recipeTemplate = require('text!templates/_new-recipe.hbs');
    var ingredientTemplate = require('text!templates/new-ingredient.hbs');
    var template = require('text!templates/admin.hbs');
    var usersTemplate = require('text!templates/users.hbs');
    var recipesTemplate = require('text!templates/recipes.hbs');

    var AdminView = Backbone.View.extend({
        el: template,
        
        events: {
            "click #new-user" : "showUserModal",
            'click #create-recipe' : 'showRecipeModal',
            'click #new-ingredient' : 'showIngredientModal',
            'click #list-users': 'showUsers',
            'click #list-recipes': 'showRecipes'
        },

        initialize: function(options) {
            this.userModal = new Modal({content: userTemplate, create: this.createUser, context: this});
            this.recipeModal = new Modal({content: recipeTemplate, create: this.createRecipe, context: this});
            this.ingredientModal = new Modal({content: ingredientTemplate, create: this.createIngredient, context: this});
            this.users = new Users();
            this.users.fetch();
            this.recipes = new Recipes();
            this.recipes.fetch();
            this.ingredients = new Ingredients();
            this.listUsers = new ListView({
                header: "Usuários Cadastrados",
                subview: UserView,
                collection: this.users,
                template: usersTemplate
            });
            console.log(RecipeView);
            this.listRecipes = new ListView({
                header: "Receitas Cadastradas",
                subview: RecipeView,
                collection: this.recipes,
                template: recipesTemplate
            });

        },

        showUserModal: function(event) {
            this.userModal.show();
        },

        showRecipeModal: function(event) {
            this.recipeModal.show();
        },

        showIngredientModal: function(event) {
            this.ingredientModal.show();
        },

        createUser: function(event) {
            this.users.add(new User({
                id: _.uniqueId(), name: $('#name').val(), email: $('#email').val(), password: $('#password').val(), pic: undefined
            }));
            this.userModal.hide();
        },

        createRecipe: function(event) {
            this.recipes.add({
                id: _.uniqueId(),
                name: $("#recipe-name").val(),
                description: $("#recipe-description").val(),
                preparation: $("#recipe-preparation").val()
            });
            this.recipeModal.hide();
        },

        createIngredient: function(event) {
            this.ingredients.add({
                name: $("#ingredient-name").val()
            });
            this.ingredientModal.hide();
        },

        showUsers: function(event) {
            this.listUsers.show();
        },

        showRecipes: function() {
            this.listRecipes.show();
        }

    });

    return AdminView;
});
