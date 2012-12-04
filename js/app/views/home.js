define(function(require) {
    var Backbone = require('backbone');
    var SearchView = require('views/search');
    var ResultsView = require('views/results');

    var HomePageView = Backbone.View.extend({
        tagName: 'section',

        className: 'home-content',

        initialize: function() {
            this.search = new SearchView();
            this.results = new ResultsView();
        },

        render: function() {
            this.search.render();
            this.$el.append(this.results.render().el);
        }
    });

    return HomePageView;
});
