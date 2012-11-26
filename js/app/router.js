define(function(require) {
    var Backbone = require('backbone');
    var IndexPage = require('views/index');

    var App = Backbone.Router.extend({
        routes: {
            "": "index",
            "cozinha": "home"
        },
        initialize: function() {
            this.index = new IndexPage();
        },

        index: function() {
            this.index.render();
        },

        home: function() {
            this.index.removeAll();
        }
    });

    return App;

});
