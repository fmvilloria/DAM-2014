//Patron Modular AMD
define('ui', ['quo', 'handlebars'], function($, handlebars) {
    'use strict';

    console.log('UI module started');

    var showTweetsList = function(tweets){
        var listTpl = $('#list-tpl').html();
        var template = handlebars.compile(listTpl);

        var html = template({tweets : tweets});
        $('#twitter-list').html(html);
    };

    return {
        showTweetsList : showTweetsList
    };
});