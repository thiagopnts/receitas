define(function(require){
    var template = require("text!templates/hello.hbs");
    var mediator = require('mediator');
    
    var HelloView = Backbone.View.extend({
        el: 'body',

        render: function() {
            this.$el.html(_.template(template));
        }

    });
    return HelloView;
});
