require.config({
    urlArgs: "v" + (new Date()).getTime(),
    baseUrl: '/js/app',
    paths: {
        'spec': '../../spec',
        'models': 'models',
        'views': 'views',
        'templates': '../../templates',
        'underscore': '../vendor/underscore',
        'backbone': '../vendor/backbone',
        'jquery': '../vendor/jquery',
        'text': '../vendor/text',
        'modals': '../vendor/bootstrap-modal',
        'handlebars': '../vendor/handlebars'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'modals': {
            deps: ['jquery'],
        },
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        }
    }
});

define(function(require) {
    require('spec/views/index_spec');
    require('spec/models/signup_spec');

    jasmine.getEnv().addReporter(new jasmine.HtmlReporter());
    jasmine.getEnv().execute();
});
