define(function(require){

	var Backbone = require('backbone');

	var Recipe = Backbone.Model.extend({
        defaults: {
            'likes': []
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