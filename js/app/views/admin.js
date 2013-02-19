define(function(require) {
    var Backbone = require('backbone');
    var Modal = require('views/modal');
    var UserView = require('views/user');
    var RecipeView = require('views/_recipe');
    var IngredientView = require('views/_ingredient');
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
    var ingredientsTemplate = require('text!templates/ingredients.hbs');
    require('popover');

    var AdminView = Backbone.View.extend({
        el: template,
        
        events: {
            "click #new-user" : "showUserModal",
            'click #create-recipe' : 'showRecipeModal',
            'click #new-ingredient' : 'showIngredientModal',
            'click #list-users': 'showUsers',
            'click #list-recipes': 'showRecipes',
            'click #list-ingredients': 'showIngredients'
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
            this.ingredients.fetch();
            this.listUsers = new ListView({
                header: "Usuários Cadastrados",
                subview: UserView,
                collection: this.users,
                template: usersTemplate
            });
            this.listRecipes = new ListView({
                header: "Receitas Cadastradas",
                subview: RecipeView,
                collection: this.recipes,
                template: recipesTemplate
            });

            this.listIngredients = new ListView({
                header: "Ingredientes Cadastrados",
                subview: IngredientView,
                collection: this.ingredients,
                template: ingredientsTemplate
            });

        },

        showUserModal: function(event) {
            this.userModal.show();
        },

        showRecipeModal: function(event) {
            this.recipeModal.show();
            this.recipeModal.$el.find('#recipe-ingredients');
            var that = this;
            setTimeout(function() {
                that.recipeModal.$el.find('#recipe-ingredients').popover({trigger: 'manual'}).popover('show');
                that.recipeModal.$el.css({'z-index': 800});
                $('.modal-backdrop').css({'z-index': 700});
            }, 1000);
        },

        showIngredientModal: function(event) {
            this.ingredientModal.show();
        },

        createUser: function(event) {
            this.users.create(new User({
                id: _.uniqueId(), name: $('#name').val(), email: $('#email').val(), password: $('#password').val(), pic: undefined
            }));
            this._clear(['#name', '#email', '#password']);
            this.userModal.hide();
        },

        createRecipe: function(event) {
            var ingredients = $('#recipe-ingredients').val().split(',');
            this.recipes.create({
                id: _.uniqueId(),
                name: $("#recipe-name").val(),
                description: $("#recipe-description").val(),
                preparation: $("#recipe-preparation").val(),
                ingredients: ingredients
            });
            this._clear(['#recipe-name', '#recipe-description', '#recipe-preparation']);
            this.recipeModal.hide();
        },

        _clear: function(ids) {
            _.each(ids, function(id) {
                $(id).val('');
            });
        },

        createIngredient: function(event) {
            this.ingredients.create({
                id: _.uniqueId(),
                name: $("#ingredient-name").val()
            });
            this._clear(['#ingredient-name']);
            this.ingredientModal.hide();
        },

        showUsers: function(event) {
            this.listUsers.show();
        },

        showRecipes: function() {
            this.listRecipes.show();
        },

        showIngredients: function() {
            this.listIngredients.show();
        }

    });

    return AdminView;
});
