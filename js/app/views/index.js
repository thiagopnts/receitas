define(function(require) {
    var Backbone = require("backbone");
    var Topbar = require("views/topbar");
    var Content = require("views/content");
    var Footer = require("views/footer");
    require('modals');

    var Index = Backbone.View.extend({
        render: function() {
            new Topbar().render();
            new Content().render();
            new Footer().render();
        }

    });

    return Index;
});
