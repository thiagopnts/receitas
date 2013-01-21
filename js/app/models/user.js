define(function(require) {
    var mediator = require('mediator');
    var Storage = require('models/storage');
    var UserModel = require('models/_user');

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
