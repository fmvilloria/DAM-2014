//Patron Modular AMD
define('data', ['ydn-db'], function(ydn) {
    'use strict';

    console.log('Database module started');

    var DB_NAME = 'TwitterDB';
    var TWEETS_STORAGE = 'tweet';

    var schema = {
        stores: [{
            name: TWEETS_STORAGE,    // required. object store name or TABLE name
            keyPath: 'id'    // keyPath.
        }]
    };

    var options = {
        mechanisms: ['indexeddb', 'websql', 'localstorage', 'sessionstorage', 'userdata', 'memory'], // default ordering
    };

    var db = new ydn.db.Storage(DB_NAME, schema, options);
//    var db = new ydn.db.Storage(DB_NAME, , options);

    var insertTweet = function(tweet, success, error){
        var request = db.put({name: TWEETS_STORAGE, keyPath: 'id'}, tweet);
        request.done(success);
        request.fail(error);
    };

    var insertTweets = function(tweets, success, error){
        var request = db.put({name: TWEETS_STORAGE, keyPath: 'id'}, tweets);
        request.done(success);
        request.fail(error);
    };

    var retrieveTweet = function(id, success, error){
        var request = db.get(TWEETS_STORAGE, id);
        request.done(success);
        request.fail(error);
    };

    var retrieveAllTweets = function(success, error){
        var request = db.count(TWEETS_STORAGE);
        request.done(function(number){
            var req = db.executeSql('SELECT * FROM ' + TWEETS_STORAGE + ' LIMIT ' + number);
            //var request = db.values(TWEETS_STORAGE);
            req.done(success);
            req.fail(error);
        });
        request.fail(error);
    };

    var updateTweet = function(tweet, success, error){
        insertTweet(tweet, success, error);
    };

    var deleteTweet = function(id, success, error){
        var request = db.remove(TWEETS_STORAGE, id);
        request.done(success);
        request.fail(error);
    };

    return {
        insertTweet : insertTweet,
        insertTweets : insertTweets,
        retrieveTweet : retrieveTweet,
        retrieveAllTweets : retrieveAllTweets,
        updateTweet : updateTweet,
        deleteTweet : deleteTweet
    };
});