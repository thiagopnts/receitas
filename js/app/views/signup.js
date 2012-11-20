
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
            'click .btn.secondary' : 'hideModal',
            'click .btn.success' : 'signup'
        },
        hideModal: function() {
            this.$el.modal('hide');
        },
        signup: function() {
            var data = {
                name: $('input[type=text]').val(),
                email: $('input[type=email]').val(),
                password: $('input[type=password]').val()
            };
            console.log(data);
            //instead of hide, show a loading bar and redirect to new page.
            this.hideModal();
            this._clear();
            mediator.trigger('signup:new', data);
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
