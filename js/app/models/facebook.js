define(function(require) {
    var Backbone = require('backbone');
    var mediator = require('mediator');
    var FacebookService = Backbone.Model.extend({
        login: function(options) {
            console.log("FacebookService#login");
            var _service = this;

            this._onALWAYS = function() {
                return options.after && options.after();
            };

            this._onERROR = function() {
                console.log('ERROR with result:', result);
            };

            this._onSUCCESS = function() {
                console.log("SUCCESS with result:", result);
            };

            this._getuserdata = function(callback) {
                FB.api('/me?fields=picture,third_party_id,email,name', function(response) {
                    if(!response || response.error) {
                        callback(true, response.error);
                    } else {
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
                            console.log(response);
                            mediator.trigger('login:success', {email: response['email'], id: response['id'], name: response['name'], url: response['picture'].data.url});
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
