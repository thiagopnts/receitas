define(function(require) {
  var Backbone = require("backbone");
  var template = require('text!templates/modal.hbs');
  require('popover');

  var config = {
    keyboard: true,
    backdrop: true,
    show: false
  };

  var Modal = Backbone.View.extend({

    events: {
      'click #ok': 'create',
      'click #cancel': 'hide'
    },

    template: Handlebars.compile(template),

    initialize: function(options) {
      this.customCreate = $.proxy(options.create, options.context);
      this.modalContent = options.content;
      this.setElement(this.template({content: this.modalContent}));

      this.render();
    },

    show: function() {
      this.$el.modal('show');
    },

    hide: function() {
      this.$el.find('input[data-content]').popover('hide');
      this.$el.modal('hide');
    },

    create: function() {
      this.customCreate(this.context);
    },

    render: function() {
      $(document).bind('hide', function() {
        console.log('here');
        console.log($('input[data-content]').popover('hide'));
      });
      this.$el.modal(config);
      return this;
    }

  });
  return Modal;
});