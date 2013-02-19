define(function(require) {
    require('popover');
    var Backbone       = require('backbone'),
        IngredientView = require('views/ingredient'),
        Ingredients    = require('collections/ingredients'),
        Ingredient     = require('models/ingredient'),
        button         = require('text!templates/search.hbs'),
        ResultsView    = require('views/results'),
        WelcomeView    = require('views/welcome'),
        Recipes        = require('collections/recipes');

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
            this.recipes = new Recipes();
            this.recipes.fetch();
            this.welcome = new WelcomeView();
        },

        _search: function(event) {
            $("#ingredient0").popover('hide');
            var queries = [];
            _.each($('.ingredients .label'), function(el) {
                queries.push($(el).text().replace(/×/, '').trim());
            });
            if($('input[type=text]').first().val() !== '') {
                queries.push($('input[type=text]').first().val());
            }
            this.results = new ResultsView({collection: this.recipes, queries: queries});
            $("#results").html(this.results.render().el);
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
            console.log(this._isUnique());
            if(key === 8 && this._isEmpty(event.target) && !this._isUnique()) {
                target.removeClass('error');
                this._removeAbove(target);
            }
        },

        _isUnique: function() {
            return $('.badge').length === 0 && $('.ingredient').not('.badge').length === 1;
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
            $('body').append('<div id="results">');
            this.ingredientId++;

            return this;
        }
    });

    return SearchView;
});
