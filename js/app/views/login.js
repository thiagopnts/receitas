
define(function(require) {
    var mediator = require('mediator');
 //   var template = require('text!templates/signup.hbs');
    var options = {
        keyboard: true,
        show: true
    };

    var LoginView = Backbone.View.extend({

        el: '#login-modal',

        events: {
            'click #login-cancel' : '_hideModal',
            'click #login' : 'login'
        },
        initialize: function() {
            mediator.on('login:error', this._error, this);
            mediator.on('signup:success', this._hideLoading, this);
        },
        _hideLoading: function() {
            this._hideModal();
            console.log('hide loading');
        },
        _showLoading: function() {
            console.log('loding.....');
        },
        _error: function() {
            alert('usuario e/ou senha inválidos!');
            this._clear();
        },

        _hideModal: function() {
            this.$el.modal('hide');
        },

        login: function() {
            var data = {
                email: this.$el.find('input[type=email]').val(),
                password: this.$el.find('input[type=password]').val()
            };
            this._showLoading();
            this.model.doLogin(data);
        },

        _clear: function() {
            _.each($("input"), function(el, i) {
                if(el.type !== 'button')
                    el.value = "";
            });
        },

        render: function() {
            this.$el.modal(options);
            //return this for chaining.
            return this;
        }
    });

    return LoginView;
});

