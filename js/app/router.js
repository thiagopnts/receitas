define(function(require) {
    var Backbone = require('backbone');
    var IndexPage = require('views/index');
    var SearchView = require('views/search');
    var ProjetoView = require('views/projeto');
    var RecipeView = require('views/recipe');

    var App = Backbone.Router.extend({
        routes: {
            "": "index",
            "cozinha": "home",
            "projeto": "projeto"
        },
        initialize: function() {
            this.index = new IndexPage();
            this.home = new SearchView();
            this.projeto = new ProjetoView();
            this.recipe = new RecipeView();
        },

        index: function() {
            this.index.render();
        },

        home: function() {
            this.index.removeAll();
            this.home.render();
            //cuidado :
            $('.hero').append(this.recipe.render().el);
        },

        projeto: function() {
            this.index.removeAll();
            this.projeto.render();
        }

    });

    return App;

});
