require.config({
    paths: {
//        jquery: '../bower_components/jquery/dist/jquery',
        'ydn-db': '../bower_components/ydn-db/jsc/ydn.db-dev',
        handlebars: '../bower_components/handlebars.js/dist/handlebars',
//        quo: '../bower_components/quojs/quo',
        quo: 'https://raw.githubusercontent.com/arkaitzgarro/EarthQuakeLungo/master/js/vendor/quo.debug',
        lungo: '../bower_components/lungo/lungo'
/*
        ,
        bootstrapAffix: '../bower_components/bootstrap/js/affix',
        bootstrapAlert: '../bower_components/bootstrap/js/alert',
        bootstrapButton: '../bower_components/bootstrap/js/button',
        bootstrapCarousel: '../bower_components/bootstrap/js/carousel',
        bootstrapCollapse: '../bower_components/bootstrap/js/collapse',
        bootstrapDropdown: '../bower_components/bootstrap/js/dropdown',
        bootstrapModal: '../bower_components/bootstrap/js/modal',
        bootstrapPopover: '../bower_components/bootstrap/js/popover',
        bootstrapScrollspy: '../bower_components/bootstrap/js/scrollspy',
        bootstrapTab: '../bower_components/bootstrap/js/tab',
        bootstrapTooltip: '../bower_components/bootstrap/js/tooltip',
        bootstrapTransition: '../bower_components/bootstrap/js/transition'
*/
},
    shim: {
        'ydn-db': { //En realidad no es un modulo AMD
            exports: 'ydn'
        },
        handlebars: { //En realidad no es un modulo AMD
            exports: 'Handlebars'
        },
        quo: { //En realidad no es un modulo AMD
            exports: '$$'
        },
        lungo: { //En realidad no es un modulo AMD
            deps : ['quo'],
            exports: 'Lungo'
        }
/*
        ,
        bootstrapAffix: {
            deps: ['jquery']
        },
        bootstrapAlert: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapButton: {
            deps: ['jquery']
        },
        bootstrapCarousel: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapCollapse: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapDropdown: {
            deps: ['jquery']
        },
        bootstrapModal:{
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapPopover: {
            deps: ['jquery', 'bootstrapTooltip']
        },
        bootstrapScrollspy: {
            deps: ['jquery']
        },
        bootstrapTab: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapTooltip: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapTransition: {
            deps: ['jquery']
        }
*/
    }
});

require(['app'], function (app) {
    'use strict';
    // use app here
    console.log(app);
});
/*
require(['app', 'jquery'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});
*/