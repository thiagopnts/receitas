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
            console.log('show');
            this.$el.find('#recipe-modal').modal('show');
        },

        _hide: function() {
            alert('kjkjs');
            this.$el.find('#recipe-modal').modal('hide');
        },

        render: function() {
            //this.$el.append(this.template(this.model));
            this.$el.append(this.template({
                name: "Feijoada Universitária",
                likes: 10,
                description: "Nossa mto bom",
                ingredients: [{
                    name: "Feijão preto enlatado",
                    quantity: "3 latas"
                },
                {
                    name: "Ervilha enlatada",
                    quantity: "1 lata"
                }
                ]
            }));
            this.$el.find("#recipe-modal").modal(options);

            return this;
        }
    });

    return RecipeDetails;

});
