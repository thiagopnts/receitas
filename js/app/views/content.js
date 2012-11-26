define(function(require) {
    var template = require("text!templates/content.hbs");
    var Backbone = require("backbone");
    var SignupView = require("views/signup");
    var SignupService = require('models/signup');
    var LoginView = require('views/login');
    var LoginService = require('models/login');

    var ContentView = Backbone.View.extend({
        el: "#main",
        events: {
            'click #signup-span': 'showSignupModal',
            'click #login-span': 'showLoginModal'

        },
        render: function() {
            this.$el.html(_.template(template));
        },

        showSignupModal: function() {
            this.signup = new SignupView({model: new SignupService()}).render();
        },

        showLoginModal: function() {
            this.login = new LoginView({model: new LoginService()}).render();
        },

        removeAll: function() {
            if(this.login)
                this.login.remove();
            else if(this.signup)
                this.signup.remove();
            this.remove();
        }

        
    });

    return ContentView;
});
