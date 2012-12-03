define(function(require){
    var Backbone = require("backbone");

    var Ingredient = Backbone.Model.extend({
        defaults: {
            name: ""
        },

        validate: function(attrs) {
            if(!this._isValidName(attrs.name))
                return "Nome inválido";
        },

        _isValidName: function(name) {
            return name && name.trim().length >= 4;
        }

    });

    return Ingredient;
});
