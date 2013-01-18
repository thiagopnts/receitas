define(function(require) {
  var Backbone = require("backbone");

  var config = {
    keyboard: true,
    show: false
  };

  var Modal = Backbone.View.extend({

    initialize: function() {
      this.render();
    },

    show: function() {
      this.$el.modal('show');
    },

    hide: function() {
      this.$el.modal('hide');
    },

    render: function() {
      this.$el.modal(config);
    }

  });
  return Modal;
});