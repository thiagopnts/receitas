
define(function(require) {
  var Backbone = require('backbone');

  var Sidebar = Backbone.Model.extend({
    promptColor: function() {
      var cssColor = prompt("Enter CSS color:");
      this.set({color: cssColor});
    }
  });

  return Sidebar;
});

