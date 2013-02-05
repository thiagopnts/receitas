define(function(require){

	var Backbone    = require('backbone'),
        Ingredients = require('collections/ingredients');

	var Recipe = Backbone.Model.extend({
        defaults: {
            likes: [],
            ingredients: []
        },

        likeIt: function(userId) {
            if(!_.contains(this.get('likes'), userId)) {
                var clone = _.clone(this.get('likes'));
                clone.push(userId);
                this.set('likes', clone);
            }
        },

        addIngredient: function(arg) {
            if(arg instanceof Array) {
                if(this.get('ingredients').length > 0) {
                    //Merges the current ingredients with the new array.
                    this.set('ingredients', _.union(_.clone(this.get('ingredients')), arg));
                } else
                    this.set('ingredients', arg);
            }
            else {
                var ingredients = _.clone(this.get('ingredients'));
                ingredients.push(arg);
                this.set('ingredients', ingredients);
            }
        },

        validate: function(attrs) {
			if(!this._isValidName(attrs.name))
                return "Nome inválido!";
            else if(!this._isValidPreparation(attrs.preparation))
                return "Preparação inválida!";
            else if(!this._isValidDescription(attrs.description))
                return "Descrição inválida!";
        },

        _isValidName: function(name) {
            return name && name.trim().length > 3 && name.trim().length <= 30;
        },

        _isValidPreparation: function(preparation) {
            return preparation && preparation.trim().length > 10 && preparation.trim().length < 2000;
        },

        _isValidDescription: function(description) {
            return description && description.trim().length > 10 && description.trim().length < 1000;
        }

	});
	return Recipe;
});