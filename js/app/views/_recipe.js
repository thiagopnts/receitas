define(function(require) {

  var CRUDView = require('views/crud_view');
  var template = require('text!templates/_recipe.hbs');

  var RecipeView = CRUDView.extend({

    template: Handlebars.compile(template),

    render: function() {
      this.$el.append(this.template({
        id: this.model.get('id'),
        name: this.model.get('name'),
        description: this.model.get('description')
      }));

      return this;
    }

  });

  return RecipeView;

});