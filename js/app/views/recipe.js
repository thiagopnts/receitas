define(function(require) {
    var Backbone = require('backbone');
    var template = require('text!templates/recipe.hbs');
    var RecipeDetails = require('views/recipe_details');
    var User = require('models/storage');

    var RecipeView = Backbone.View.extend({

        events: {
            'click #like' : '_like',
            'click .recipe-name': '_showDetails'
        },

        template: Handlebars.compile(template),

        _like: function(event) {
            this.model.likeIt(User.getCurrentUser().id);
            this.model.save();
            console.log(this.model.get('likes').length);
            console.log('like');
            this.render();
        },

        _showDetails: function(event) {
            //new RecipeDetails({model: this.model})
            this.details = new RecipeDetails({model: this.model}).render();
        },

        render: function() {
            this.$el.html(this.template({name: this.model.get('name'), likes: this.model.get('likes').length, preparation: this.model.get('preparation')}));
            return this;
        }
    });

    return RecipeView;
});
