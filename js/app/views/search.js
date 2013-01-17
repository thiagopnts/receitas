define(function(require) {
    var Backbone       = require('backbone');
    var IngredientView = require('views/ingredient');
    var Ingredients    = require('collections/ingredients');
    var Ingredient     = require('models/ingredient');
    var button         = require('text!templates/search.hbs');
    var ResultsView    = require('views/results');
    var WelcomeView    = require('views/welcome');
    require('popover');

    var SearchView = Backbone.View.extend({
        tagName: "section",

        className: "box search",

        ingredientId: 0,

        collection: new Ingredients(),

        events: {
            'keypress input[type=text]' : "addIngredient",
            'keyup input[type=text]' : 'removeIngredient',
            'click #search': '_search'
        },


        initialize: function() {
            this.results = new ResultsView();
            this.welcome = new WelcomeView();
        },

        _search: function(event) {
            $("body").append(this.results.render().el);
        },

        addIngredient: function(event) {
            var key = event.which ? event.which : event.keyCode;
            if(key === 13) {
                this.$el.find('.hero>.search>.ingredients').append(new IngredientView()
                                .render()
                                .$el
                                .attr('id', 'ingredient' + this.ingredientId));
                $('#ingredient' + this.ingredientId).focus();
                this.ingredientId++;
                $("#ingredient0").popover('hide');
            }
        },

        removeIngredient: function(event) {
            var key = event.which || event.keyCode; 
            if(key === 8 && this._isEmpty(event.target) && !this._isUnique()) {
                this._focusUp(event.target);
                $(event.target).remove();
            }
        },

        _isUnique: function() {
            return $(".ingredients input[type=text]").length <= 1;
        },

        _isEmpty: function(element) {
            return $(element).val().length === 0;
        },

        _focusUp: function(element) {
            var list = $('.ingredients input[type=text]');
            var b = $(list.get(list.index($(element)) - 1)).focus();
        },

        //FIXME refactoring ftw
        render: function() {
            $('.hero').html(this.el);
            this.$el.before(this.welcome.render().el);
            $('.hero>.search').append($('<section class="ingredients">'));
            new IngredientView().render().$el.attr({id: 'ingredient' + this.ingredientId, 'data-original-title': 'Dica!', 'data-content': 'Aperte ENTER para ir adicionando novos ingredientes!'}).focus().popover({trigger: 'manual'}).popover('show');
            this.$el.append(button);
            this.ingredientId++;

            return this;
        }
    });

    return SearchView;
});
