define(function(require) {
    var Backbone = require('backbone');
    var template = require('text!templates/recipe.hbs');
    var RecipeDetails = require('views/recipe_details');

    var RecipeView = Backbone.View.extend({

        events: {
            'click #like' : '_like',
            'click .recipe-name': '_showDetails'
        },

        template: Handlebars.compile(template),

        _like: function(event) {
            alert('like');
        },

        _showDetails: function(event) {
            //new RecipeDetails({model: this.model})
            this.details = new RecipeDetails().render();
        },

        render: function() {
            this.$el.append(this.template({name: "Feijoada Universitária", likes: 10, description: "Feijoada com feijão enlatado deliciosa!!!!"}));
            return this;
        }
    });

    return RecipeView;
});
