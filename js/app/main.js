

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
        'modals': '../vendor/bootstrap-modal'
    },
    shim: {
        'jquery': {
            exports: '$'
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
        }
    }
});

(function() {
    define(function(require) {
        $(document).ready(function() {
        $('body').css('background', 'url(img/bg'+Math.floor(Math.random()*10) +".jpg) no-repeat center center fixed");
        });
        var Index = require('views/index');
        var index = new Index();
        index.render();
    });
})();
