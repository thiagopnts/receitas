define(function(require) {
    var mediator = require('mediator');
    var Backbone = require('backbone');

    var LoginService = Backbone.Model.extend({

        doLogin: function(values) {
            var email = values.email;
            var password = values.password;
            this._checkLogin(email, password);
        },

        _checkLogin: function(email, password) {
            if(email === 'admin' && password === 'admin')
                mediator.trigger('login:success', {email: 'admin', id: 1, name: 'Administrador'});
            else
                mediator.trigger('login:error');

        }
    });
    return LoginService;
});
