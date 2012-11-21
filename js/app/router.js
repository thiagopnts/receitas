define(function(require) {
    var Backbone = require('backbone');
    var IndexPage = require('views/index');

    var App = Backbone.Router.extend({
        routes: {
            "": "index"
        },
        initialize: function() {
            this.index = new IndexPage();
        },

        index: function() {
            this.index.render();
        }
    });

    return App;

});
