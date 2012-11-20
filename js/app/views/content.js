define(function(require) {
    var template = require("text!templates/content.hbs");
    var Backbone = require("backbone");
    var SignupView = require("views/signup");

    var ContentView = Backbone.View.extend({
        el: "#main",
        events: {
            'click #cad-span': 'showSignupModal'
        },
        render: function() {
            this.$el.html(_.template(template));
        },

        showSignupModal: function() {
            new SignupView().render();
        }
        
    });

    return ContentView;
});
