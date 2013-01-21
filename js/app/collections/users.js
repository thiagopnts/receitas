define(function(require) {
  var Backbone = require('backbone');
  var User = require('models/_user');
  require('storage');

  var Users = Backbone.Collection.extend({
    model: User,
    localStorage: new Backbone.LocalStorage("Users")
  });

  return Users;

});