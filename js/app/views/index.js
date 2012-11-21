define(function(require) {
    var Backbone = require("backbone");
    var Topbar = require("views/topbar");
    var Content = require("views/content");
    var Footer = require("views/footer");
    require('modals');

    var Index = Backbone.View.extend({
        initialize: function() {
            this.topbar = new Topbar();
            this.content = new Content();
            this.footer = new Footer();
        },
        render: function() {
            this.topbar.render();
            this.content.render();
            this.footer.render();
        }

    });

    return Index;
});
