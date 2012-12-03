

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
        'twipsy': '../vendor/bootstrap-twipsy'
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
            deps: ['jquery'],
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
        $(document).ready(function() {
            $('body').css('background', 'url(img/bg'+Math.floor(Math.random()*10) +".jpg) no-repeat center center fixed");
            var App = new Router();
            Backbone.history.start({pushState: false});
        });
    });
})();
