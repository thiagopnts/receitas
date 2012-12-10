define(function(require){

	var Backbone = require('backbone');

	var Recipe = Backbone.Model.extend({

        validate: function(attrs) {
			if(!this._isValidName(attrs.name))
                return "Nome inválido!";
            else if(attrs.name.trim().length < 3 || attrs.name.trim().length > 30)
                return "A quantidade de caracteres devem ser entre 3 e 30";
            else if(!this._isValidPreparation(attrs.preparation))
                return "Dados incorretos!";
			else if(attrs.preparation.trim().length < 10 || attrs.preparation.trim().length > 2000)
                return "A quantidade de caracteres devem ser entre 10 e 2000";
            else if(!this._isValidDescription(attrs.description))
                return "Dados incorretos!";
			else if(attrs.description.trim().length < 10 || attrs.description.trim().length > 1000)
                return "A quantidade de caracteres devem ser entre 10 e 1000";
        },

        _isValidName: function(name) {
            return name;
        },

        _isValidPreparation: function(preparation) {
            return preparation;
        },

        _isValidDescription: function(description) {
            return description;
        }

	});
	return Recipe;
});