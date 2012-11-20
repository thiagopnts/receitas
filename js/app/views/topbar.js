define(function(require) {
    var template = require('text!templates/topbar.hbs');
    var mediator = require('mediator');
    var Topbar = Backbone.View.extend({
        el: 'header',
        render: function() {
            this.$el.html(_.template(template));
        }
    });

    return Topbar;
});
