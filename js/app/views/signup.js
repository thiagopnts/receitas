
define(function(require) {
    var mediator = require('mediator');
 //   var template = require('text!templates/signup.hbs');
    var options = {
        keyboard: true,
        show: true
    };

    var SignupView = Backbone.View.extend({

        el: '#signup-modal',

        events: {
            'click #signup-cancel' : '_hideModal',
            'click #signup' : 'signup'
        },
        initialize: function() {
            mediator.on('signup:error', this._error, this);
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
            alert('pam!');
        },

        _hideModal: function() {
            this.$el.modal('hide');
        },

        signup: function() {
            var data = {
                name: $('input[type=text]').val(),
                email: $('input[type=email]').val(),
                password: $('input[type=password]').val()
            };
            this._showLoading();
            this.model.newSignup(data);
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

    return SignupView;
});
