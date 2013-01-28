define(function(require) {

  var Backbone = require('backbone');

  var CRUDView = Backbone.View.extend({
    
    events: {
      'click a': 'deleteModel',
      'click td.editable': 'edit',
      'focusout td': 'focusout',
      'keydown td': 'update'
    },

    deleteModel: function() {
      this.remove();
      this.model.destroy();
    },

    edit: function(event) {
      $(event.target).attr('contenteditable', 'true').focus();
    },

    _updateModel: function(target) {
      var field = _.last($(target).attr('id').split('-'));
      var value = $(target).html();
      this.model.set(field, value);
      this.model.save();
      this.model.collection.update(this.model);
    },
    
    _keyPressed: function(event) {
      var code = event.keyCode ? event.keyCode : event.which;
      if(code === 13) {
        event.preventDefault();
        $(event.target).attr('contenteditable', 'false');
        $(event.target).focusout();
        $("#back").focus();
        this._updateModel(event.target);
      }
    },

    update: function(event) {
      this._keyPressed(event);
    },

    focusout: function(event) {
      this._updateModel(event.target);
    }

  });

  return CRUDView;

});