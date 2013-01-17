define(function(require) {

  var Backbone = require('backbone');
  var User = require('models/user');
  var Storage = require('models/storage');
  var template = require('text!templates/welcome.hbs');

  var WelcomeView = Backbone.View.extend({

    className: 'welcome',

    template: Handlebars.compile(template),

    render: function() {
      var user = User.getInstance();
      user.set(Storage.getCurrentUser());

      this.$el.append(this.template({name: user.get('name'), url: user.get('url')}));
      return this;
    }

  });

  return WelcomeView;

});