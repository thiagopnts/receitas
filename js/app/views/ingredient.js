define(function(require) {
    var Backbone = require('backbone');
    var template = require('text!templates/ingredient.hbs');

    var IngredientView = Backbone.View.extend({
        el: template,
        render: function() {
            this.$el.addClass('ingredient');
            $('.box.search>.ingredients').append(this.$el);
            return this;
        }
    });

    return IngredientView;
});
