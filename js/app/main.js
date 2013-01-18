

requirejs.config({
    //Prevents requirejs caching.
    urlArgs: "v" + (new Date()).getTime(),
    baseUrl: 'js/app',
    paths: {
        'templates': '../../templates',
        'models': 'models',
        'router': 'router',
        'utils': 'utils',
        'collections': 'collections',
        'views': 'views',
        'backbone': '../vendor/backbone',
        'jquery': '../vendor/jquery',
        'underscore': '../vendor/underscore',
        'text': '../vendor/text',
        'mediator': 'mediator',
        'handlebars': '../vendor/handlebars',
        'modals': '../vendor/bootstrap-modal',
        'popover': '../vendor/bootstrap-popover',
        'cookie': '../vendor/jquery.cookie',
        'twipsy': '../vendor/bootstrap-twipsy',
        'storage': '../vendor/backbone.localStorage-min'
    },
    shim: {
        'models': {
            deps: ['backbone']
        },
        'jquery': {
            exports: '$'
        },
        'cookie': {
            deps: ['jquery']
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'modals': {
            deps: ['jquery']
        },
        'popover': {
            deps: ['jquery', 'modals', 'twipsy']
        }
    }
});

(function() {
    define(function(require) {
        require('jquery');
        var Router =  require('router');
        var FacebookService = require('models/facebook');
        window.activeSession = new FacebookService();
        $(document).ready(function() {
            $('body').css('background', 'url(img/bg'+Math.floor(Math.random()*10) +".jpg) no-repeat center center fixed");
            var App = new Router();
            Backbone.history.start({pushState: false});
            (function (d) {
                var js, id = 'facebook-jssdk',
                  ref = d.getElementsByTagName('script')[0];
                if (d.getElementById(id)) {
                  return;
                }
                js = d.createElement('script');
                js.id = id;
                js.async = true;
                js.src = "//connect.facebook.net/en_US/all.js";
                ref.parentNode.insertBefore(js, ref);
            }(document));
         
            window.fbAsyncInit = function () {
                FB.init({
                  appId: '378321788920368',
                  channelUrl: '//your/path/to/channel.php',
                  status: true, // check login status
                  cookie: true, // enable cookies to allow the server to access the session
                  xfbml: true // parse XFBML
                });
         
                FB.getLoginStatus(function (response) {
                  console.log('FB resp:', response, response.status);
                  /* Bind event handler only after Facebook SDK had a nice cup of coffee */
                  $('#fbLogin').on('click', function () {
                    window.activeSession.login({
                      before: function () {
                        console.log('before login()')
                      },
                      after: function () {
                        console.log('after login()')
                      }
                    });
                  });
                });

            };
            
        });
    });
})();
