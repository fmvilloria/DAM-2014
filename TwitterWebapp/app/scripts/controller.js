//Patron Modular AMD
define('controller', ['data', 'service'], function(db, service) {
    'use strict';

    console.log('Controller module started');

    var getTweetsFromTwitter = function(success, error){
        service.getTweets({}, function(data){
            processTweets(data, function(tweets){
                db.insertTweets(tweets, success, error);
            }, error);
        }, error);
    };

    var processTweets = function(data, success, error){
        var tweets = [];

        if (data && data.statuses && data.statuses.length > 0){
            for (var i = 0; i < data.statuses.length; i++) {
                var tweet = {
                    id : data.statuses[i].id_str,
                    text : data.statuses[i].text,
                    created_at : data.statuses[i].created_at,
                    user : {
                        id : data.statuses[i].user.id_str,
                        name : data.statuses[i].user.name,
                        image : data.statuses[i].user.profile_image_url
                    }
                };

                tweets.push(tweet);
            }

            success(tweet);
        }
    };

    var error = function(err){
        throw err;
    };

    return{
        getTweetsFromTwitter : getTweetsFromTwitter
    };
});