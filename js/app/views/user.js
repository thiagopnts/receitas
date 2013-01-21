define(function(require) {

  var template = require('text!templates/user_view.hbs');

  var UserView = Backbone.View.extend({

  events: {
      'click a': 'deleteUser'
    },

    template: Handlebars.compile(template),

    deleteUser: function() {
      this.remove();
      this.model.destroy();
    },

    render: function() {
      this.$el.append(this.template({
        id: this.model.get('id'),
        name: this.model.get('name'),
        email: this.model.get('email')
      }));

      return this;
    }

  });

  return UserView;
});