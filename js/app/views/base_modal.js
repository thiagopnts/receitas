define(function(require) {

  var Backbone = require('backbone');
  var template = require('text!templates/base_modal.hbs');

  var config = {
    keyboard: true,
    backdrop: true,
    show: false
  };

  var BaseModal = Backbone.View.extend({
    template: Handlebars.compile(template),

    tagName: 'div',

    className: 'modal hide fade',

    events: {
      'click button' : 'hide'
    },
    
    click: function () {
      console.log('from abse');
    },

    initialize: function(options) {
      this.header = options.header;
      this.body = options.body;
      this.footer = options.footer;
      this.render();
    },

    show: function() {
      this.$el.modal('show');
    },

    hide: function() {
      this.$el.modal('hide');
    },

    render: function() {
      this.$el.append(this.template);
      this.$el.find('.modal-header').append(this.header);
      this.$el.find('.modal-body').append(this.body);
      this.$el.find('.modal-footer').append(this.footer);
      // this.$el.append(this.template({
      //   header: this.header,
      //   body: this.body,
      //   footer: this.footer
      // }));
      this.$el.modal(config);
      return this;
    }

  });

  return BaseModal;

});