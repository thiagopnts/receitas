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
            'click #search': '_search',
            'click span' : 'removeTag'
        },


        initialize: function() {
            this.results = new ResultsView();
            this.welcome = new WelcomeView();
        },

        _search: function(event) {
            $("body").append(this.results.render().el);
        },

        _buildTag: function(el) {
            var content = $(el).val();
            var escaped = $('<span class="label success ingredient badge">').text(content);
            return escaped.html( '<a href="javascript:void(0);">' + escaped.text() + ' &times</a>');
        },

        removeTag: function(event) {
            $(event.target).parent().remove();
        },

        addIngredient: function(event) {
            var key = event.which ? event.which : event.keyCode;
            var target = $(event.target);
            target.removeClass('error');
            if(key === 13) {
                if(target.val().trim().length > 2) {
                    this.$el.find('.hero>.search>.ingredients').append(new IngredientView()
                                    .render()
                                    .$el
                                    .attr('id', 'ingredient' + this.ingredientId));
                    $('#ingredient' + this.ingredientId).focus();
                    this.ingredientId++;
                    $("#ingredient0").popover('hide');
                    target.replaceWith(this._buildTag(target));
                } else {
                    target.addClass('error');
                }
            }
        },

        removeIngredient: function(event) {
            var key = event.which || event.keyCode;
            var target = $(event.target);
            if(key === 8 && this._isEmpty(event.target) && !this._isUnique()) {
                target.removeClass('error');
                this._removeAbove(target);
            }
        },

        _isUnique: function() {
            return $('.badge').length === 0 && $('input[type=text]').length === 1;
        },

        _isEmpty: function(element) {
            return $(element).val().length === 0;
        },

        _removeAbove: function(element) {
            var list = $('.ingredients').children().not("button");
            $(list.get(list.index($(element)) - 1)).remove();
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
