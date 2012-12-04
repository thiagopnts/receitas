define(function(require) {
    var Backbone = require('backbone');
    var template = require('text!templates/projeto.hbs');
    var User = Backbone.Model.extend();
    var Users = Backbone.Collection.extend({model: User});
    var Recipe = Backbone.Model.extend();
    var Recipes = Backbone.Collection.extend({model: Recipe});
    var Ingredient = Backbone.Model.extend();
    var Ingredients = Backbone.Collection.extend({model: Ingredient});
    var table = require('text!templates/user-table.hbs');

    var AdminView = Backbone.View.extend({
        el: '.hero',
        users: new Users(),
        recipes: new Recipes(),
        ingredients: new Ingredients(),
        events: {
            'click #user': 'showUserOptions',
            'click #recipe': 'showRecipeOptions',
            'click #ingredient': 'showIngredientOptions',
            'click #new-user': 'newUser',
            'click #user-cancel': '_hideUserModal',
            'click #user-ok': '_newUser',
            'click #list-users': '_listUserModal'
        },
        _listUserModal: function() {
            for(var i = 0; i < this.users.length; i++) {
            }
            $("#list-user-modal").fadeToggle({duration: 200});
        },

        _hideUserModal: function() {
            $("#new-user-modal").fadeOut({duration: 200});
        },

        _newUser: function() {
            var user = new User({
                name: $("#name").val(),
                email: $("#email").val(),
                password: $("#password").val()
            });
            this.users.add(user);
            $("#list-user-modal>table").append("<td>"+user.get('name')+"</td><td>"+user.get('email')+"</td><td>"+user.get('password')+"</td>");
            this._hideUserModal();
        },

        showUserOptions: function() {
            var sel = $("#user-options");
            if(sel.is(":hidden"))
                $("#user-options").slideDown("slow");
            else
                $("#user-options").slideUp("slow");
        },

        showRecipeOptions: function() {
            var sel = $("#recipe-options");
            if(sel.is(":hidden"))
                $("#recipe-options").slideDown("slow");
            else
                $("#recipe-options").slideUp("slow");
        },
        showIngredientOptions: function() {
            var sel = $("#ingredient-options");
            if(sel.is(":hidden"))
                $("#ingredient-options").slideDown("slow");
            else
                $("#ingredient-options").slideUp("slow");
        },

        newUser: function() {
            $("#new-user-modal").fadeToggle({duration: 200});
        },

        render: function() {
            this.$el.html(template);
            $('ul').hide();
        }
    });

    return AdminView;
});
