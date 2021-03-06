define(function(require) {

  var template = require('text!templates/user_view.hbs');
  var CRUDView = require('views/crud_view');

  var UserView = CRUDView.extend({

    template: Handlebars.compile(template),

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