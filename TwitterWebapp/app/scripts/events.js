//Patron Modular AMD
define('events', ['jquery', 'controller'], function($, controller) {
    'use strict';

    console.log('Event module started');

//    $(document).on('datachange', controller.showLatestTweets);

    $(document).on('datachange', '', function(event) {
        event.preventDefault();

        controller.showLatestTweets(event.originalEvent.detail.success, event.originalEvent.detail.error);
    });
});