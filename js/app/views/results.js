define(function(require) {
    require('handlebars');
    require('popover');
    var RecipeView = require('views/recipe'),
        Backbone = require('backbone'),
        Ingredient = require('models/ingredient'),
        template = require('text!templates/new-recipe.hbs');

    var ResultsView = Backbone.View.extend({
        template: Handlebars.compile(template),
        events: {
            'click #new-recipe': 'newRecipe',
            'click #new-recipe-cancel': '_hide'
            // 'focus #recipe-ingredients': 'showTip'
        },

        initialize: function(values) {
            var that = this;
            this.queries = values.queries;
            this.search(this.queries, function(result) {
                that.result = result;
                console.log(result);
            });
        },

        _hide: function(event) {
            $('#new-recipe-modal').find('#recipe-ingredients').popover('hide');
            $('#new-recipe-modal').modal('hide');
            $('input[data-content]').popover('hide');
        },

        search: function(queries, callback) {
            var result = [],
            that = this;

            _.each(queries, function(query) {
                console.log(query);
                that.collection.each(function(model) {
                    if(model.get('ingredients')) {
                        console.log('has ingredients');
                        _.each(model.get('ingredients'), function(i) {
                            var re = new RegExp(query, 'i');
                            if(re.test(i) && !_.contains(result, model)) {
                                result.push(model);
                            }
                        });
                    }
                });
            });
            callback(result);
        },

        newRecipe: function() {
            $("#new-recipe-modal").modal('show');
            setTimeout(function() {
                $('#new-recipe-modal').find('#recipe-ingredients').popover({trigger: 'manual'}).popover('show');
                $('#new-recipe-modal').css({'z-index': 3});
            }, 400);
        },

        render: function() {
            console.log('render', this.result);
            if(this.result.length > 0) {
                var that = this;
                _.each(this.result, function(model) {
                    that.$el.append(new RecipeView({model: model}).render().el);
                });
            } else {
                this.$el.html('<h2 class="shadow centered">Nenhuma receita foi encontrada!</h2>');
            }
            this.$el.append(template);
            this.$el.find("#new-recipe-modal").modal({keyboard: true, show: false});
            this.$el.find("#new-recipe-cancel").bind('click', this._hide);
            $(document).bind('hide', this._hide);

            return this;
        }
    });

    return ResultsView;
});
