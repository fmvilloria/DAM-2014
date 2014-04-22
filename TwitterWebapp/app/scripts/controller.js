//Patron Modular AMD
define('controller', ['data', 'service'], function(db, service) {
    'use strict';

    var getTweetsFromTwitter = function(){
        service.getTweets({}, processTweets, error);
        //data.addTweets();
    };

    var processTweets = function(data){
        var tweets = [];

        if (data && data.statuses && data.statuses.length > 0){
            for (var i = 0; i < data.statuses.length; i++) {
                console.log(data.statuses[i]);

                var tweet;
                //tweets[i].id = data.statuses[i].id_str;
                //tweets[i].created_at = data.statuses[i].created_at;
                //tweets[i].text = data.statuses[i].text;
                //tweets[i].text = data.statuses[i].text;

                tweets.push(tweet);
            }

            db.insertTweets(tweets);
        }
    };

    var error = function(){

    };

    return{
        getTweetsFromTwitter : getTweetsFromTwitter
    };
});