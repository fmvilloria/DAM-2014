/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl: '../app/scripts',
        paths : {
            handlebars: '../bower_components/handlebars.js/dist/handlebars'
        },
        shim :{
            handlebars: {
                exports: 'Handlebars'
            }
        }
    });

    describe('UI module', function(){
        var ui;

        var db;

        beforeEach(function(done){
            require(['ui', 'data'], function(userinterface, data){
                ui = userinterface;

                db = data;

                done();
            });
        });

        describe('#showTweets', function(){
            it('Show a tweet', function(done){
                var tweets = [
                        {
                            id : '12345',
                            text : 'Tweet text',
                            created_at : '01/01/2014',
                            user : {
                                id : '54321',
                                name : 'User name',
                                image : 'http://www.username.com'
                            }
                        }
                    ];

                ui.showTweets(tweets);

                assert.equal($('#twitter-list').children().length, 1);
                done();
            });
        });

        describe('#showTweetsFromDB', function(){
            it('Show all tweets from DB', function(done){

                db.retrieveAllTweets(function(tweets){
                    ui.showTweets(tweets);

                    assert.equal($('#twitter-list').children().length, 102);
                    done();
                }, function(err){
                    throw err;
                });
            });
        });
    });
})();