define(function(require) {
    require('handlebars');
    var Backbone = require("backbone");
    template = require("text!templates/recipe-details.hbs");
    var options = {
        keyboard: true,
        show: true
    };

    var RecipeDetails = Backbone.View.extend({
        template: Handlebars.compile(template),
        events: {
            'click .modal-section': '_hide'
        },

        _show: function() {
            this.$el.find('#recipe-modal').modal('show');
        },

        _hide: function() {
            this.$el.find('#recipe-modal').modal('hide');
        },

        render: function() {
            //this.$el.append(this.template(this.model));
            this.$el.append(this.template({
                name: this.model.get('name'),
                likes: this.model.get('likes').length,
                preparation: this.model.get('preparation'),
                ingredients: this.model.get('ingredients')
            }));
            this.$el.find("#recipe-modal").modal(options);

            return this;
        }
    });

    return RecipeDetails;

});
