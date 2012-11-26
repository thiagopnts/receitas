define(function(require) {
    var mediator = require('mediator');
    var template = require('text!templates/footer.hbs');

    var FooterView = Backbone.View.extend({
        el: "footer",
        render: function() {
            this.$el.html(_.template(template));
        }
    });

    return FooterView;
});
