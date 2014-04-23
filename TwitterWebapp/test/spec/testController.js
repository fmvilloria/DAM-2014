/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl: '../app/scripts'
    });

    describe('Controller module', function(){
        var ctrl;

        var srv;
        var db;

        beforeEach(function(done){
            require(['controller', 'service', 'data'], function(controller, service, data){
                ctrl = controller;
                srv = service;
                db = data;

                sinon.spy(srv, 'getTweets');
                sinon.spy(db, 'insertTweets');

                done();
            });
        });

        afterEach(function(done){
            srv.getTweets.restore();
            db.insertTweets.restore();
            done();
        });

        describe('#getTweetsFromTwitter', function(){
            it('Get all tweets from Twitter and save to DB', function(done){
                ctrl.getTweetsFromTwitter(function(){
                    assert.isTrue(db.insertTweets.calledOnce, 'insertTweets not called');
                    done();
                }, function(err){
                    throw err;
                });
                assert.isTrue(srv.getTweets.calledOnce, 'getTweets not called');
            });
        });
    });
})();