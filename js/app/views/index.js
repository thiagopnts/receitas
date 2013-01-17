define(function(require) {
    var Backbone = require("backbone");
    var Topbar = require("views/topbar");
    var Content = require("views/content");
    var Footer = require("views/footer");
    var User = require('models/user');
    var Storage = require('models/storage');
    var mediator = require('mediator');
    require('modals');

    var Index = Backbone.View.extend({
        initialize: function() {
            mediator.on('login:success', this.kitchen);
            this.topbar = new Topbar();
            this.content = new Content();
            this.footer = new Footer();
        },

        removeAll: function() {
            this.topbar.remove();
            this.content.removeAll();
            this.footer.remove();
        },

        kitchen: function(values) {
            var user = User.getInstance();
            Storage.setCurrentUser(user.set(values));
            Backbone.history.navigate('cozinha', {trigger: true});
        },

        render: function() {
            this.topbar.render();
            this.content.render();
            this.footer.render();
        }

    });

    return Index;
});
