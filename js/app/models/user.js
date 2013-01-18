define(function(require) {
    var mediator = require('mediator');
    var Storage = require('models/storage');

    var UserModel = Backbone.Model.extend({
        defaults: {
            logged: false
        },
        isLogged: function() {
            return this.logged === true;
        }
    });

    var User = {
        getInstance: function() {
            if (this.user === undefined) {
                this.user = new UserModel();
                return this.user;
            }
            return this.user;
        }
    };

    return User;

});
