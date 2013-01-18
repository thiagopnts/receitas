define(function(require) {
    var Backbone = require('backbone');
    var IndexPage = require('views/index');
    var SearchView = require('views/search');
    var AdminView = require('views/admin');
    var RecipeView = require('views/recipe');
    var HomePageView = require('views/home');


    var App = Backbone.Router.extend({
        routes: {
            "": "index",
            "cozinha": "home",
            "admin": "admin"
        },
        initialize: function() {
            this.index = new IndexPage();
            this.home = new HomePageView();
            this.admin = new AdminView();
            this.recipe = new RecipeView();
        },

        index: function() {
            this.index.render();
        },

        home: function() {
            this.index.removeAll();
            this.home.render();
        },

        admin: function() {
            $("body").html(this.admin.render().el);
        }

    });

    return App;

});
