define(function(require) {

  var Backbone = require('backbone');
  var BaseModal = require('views/base_modal');
  var headerTemplate = require('text!templates/_list_view_header.hbs');
  var footer = require('text!templates/_list_view_footer.hbs');


  var ListView = Backbone.View.extend({

    initialize: function(options) {
      window.users = this.collection;

      _.bindAll(this, 'render');
      this.collection.bind("add", this.render, this);

      this.SubView = options.subview;

      this.header = Handlebars.compile(headerTemplate)({header: options.header});
      this.template = Handlebars.compile(options.template);
      this.render();
    },

    show: function() {
      this.modal.show();
    },

    hide: function() {
      this.$el.hide();
    },

    render: function() {
      this.$el.empty();
      this.$el.append(this.template);
      this.collection.forEach($.proxy(function(model) {
        this.$el.children().append(new this.SubView({tagName: 'tr', model: model}).render().el);
      }, this));
      this.modal = new BaseModal({
        header: this.header,
        body: this.el,
        footer: footer
      });

      return this;
    }

  });

  return ListView;
});