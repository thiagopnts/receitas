define(function(require) {
    var Backbone = require('backbone');

    var FacebookService = Backbone.Model.extend({
        login: function(options) {
            console.log("FacebookService#login");
            var _service = this;

            this._onALWAYS = function() {
                options.after && options.after();
            };

            this._onERROR = function() {
                console.log('ERROR with result:', result);
            };

            this._onSUCCESS = function() {
                console.log("SUCCESS with result:", result);
            };

            this._getuserdata = function(callback) {
                FB.api('/me?fields=third_party_id,email,name', function(response) {
                    if(!response || response.error) {
                        callback(true, response.error);
                    } else {
                        console.log('success username:' + response['name']);
                        Backbone.history.navigate("cozinha", {trigger: true});
                        callback(null, response);
                    }
                });
            };
            //this._savesession = function(user, callback) {
            FB.login(function(response) {
                if(response.authResponse) {
                    console.log('waiting auth response info');
                    console.log(response);
                    _service._getuserdata(function(error, response) {
                        if(error) {
                            console.log(response);
                        } else {
                            console.log("No errors", response);
                        }

                    });

                } else {
                    console.log('FUEEEN');
                }
            }, {scope: 'email, user_likes'});
        }
    });

    return FacebookService;
});
