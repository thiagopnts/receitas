define(function(require) {
  var Backbone = require('backbone');
  var template = require('text!templates/_recipe.hbs');

  var RecipeView = Backbone.View.extend({
    events: {
      'click a': 'deleteRecipe'
    },

    template: Handlebars.compile(template),

    deleteRecipe: function() {
      this.model.destroy();
      this.remove();
    },

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