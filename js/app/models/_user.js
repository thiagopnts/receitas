define(function(require) {

  var Backbone = require('backbone');

  var UserModel = Backbone.Model.extend({
    defaults: {
        logged: false
    },
    isLogged: function() {
        return this.logged === true;
    }
  });

  return UserModel;

});
