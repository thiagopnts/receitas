define(function(require) {
    require('handlebars');
    var RecipeView = require('views/recipe');
    var Backbone = require('backbone');
    var template = require('text!templates/new-recipe.hbs');

    var ResultsView = Backbone.View.extend({
        template: Handlebars.compile(template),
        events: {
            'click #new-recipe': 'newRecipe',
            'click #new-recipe-cancel': '_hide'
        },

        _hide: function(event) {
            $('#new-recipe-modal').modal('hide');
        },
        newRecipe: function() {
            $("#new-recipe-modal").modal('show');
        },
        render: function() {
            this.$el.append(new RecipeView().render().el);
            this.$el.append(template);
            this.$el.find("#new-recipe-modal").modal({keyboard: true, show: false});
            this.$el.find("#new-recipe-cancel").bind('click', this._hide);

            return this;
        }
    });

    return ResultsView;
});
