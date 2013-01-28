define(function(require) {
  var CRUDView = require('views/crud_view');
  var template = require('text!templates/_ingredient.hbs');

  var IngredientView = CRUDView.extend({

    template: Handlebars.compile(template),

    render: function() {
      this.$el.append(this.template({
        id: this.model.get('id'),
        name: this.model.get('name')
      }));
      return this;
    }
  });

  return IngredientView;
});
