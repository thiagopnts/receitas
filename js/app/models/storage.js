define(function(require) {
    require('cookie');
    var mediator = require('mediator');
    var Backbone = require('backbone');
//    var User = require('models/user');

    return {
        getCurrentUser: function() {
            this.storage = localStorage || $.cookie;
            //FIX-ME to use the cookie fallback.
            var name = this.storage.getItem('name');
            var email = this.storage.getItem('email');
            var id = this.storage.getItem('id');
            var url = this.storage.getItem('url');
            if (name && email && id) {
               // var user = User.getInstance();
               // user.set({name: name, email: email, id: id});
               // return user;
                return {name: name, email: email, id: id, url: url === 'undefined' ? undefined : url};
            } else {
                return null;
            }
        },

        setCurrentUser: function(user) {
            this.storage = localStorage || $.cookie;
            this.storage.setItem('name', user.get('name'));
            this.storage.setItem('email', user.get('email'));
            this.storage.setItem('id', user.get('id'));
            this.storage.setItem('url', user.get('url'));
        },

        clear: function() {
            this.storage = this.storage || localStorage || $.cookie;
            this.storage.clear();
        }

    };
});
