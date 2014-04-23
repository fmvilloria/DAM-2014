//Patron Modular AMD
define('ui', ['jquery', 'handlebars'], function($, handlebars) {
    'use strict';

    console.log('UI module started');

    var showTweets = function(tweets){
        var listTpl = $('#list-tpl').html();
        var template = handlebars.compile(listTpl);

        var html = template({tweets : tweets});
        $('#twitter-list').html(html);
    };

    return {
        showTweets : showTweets
    };
});