/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl: '../app/scripts',
        paths : {
            jquery: '../bower_components/jquery/dist/jquery',
        }
    });

    describe('Event module', function(){
        var ctrl;

        beforeEach(function(done){
            require(['controller'], function(controller){
                ctrl = controller;

                sinon.spy(ctrl, 'showLatestTweets');
                done();
            });
        });

        afterEach(function(done){
            ctrl.showLatestTweets.restore();
            done();
        });

        var error = function(err){
            throw err;
        };

        var eventCallBack = function() {
            assert.isTrue(ctrl.showLatestTweets.calledOnce);
            eventCallBack.done();
        };

        describe('#showLatestTweets', function(){
            it('Event datachange is fired', function(done){

                eventCallBack.done = done;

                var event = new CustomEvent('datachange', {
                    'detail': {
                        'success' : success,
                        'error' : error
                    }
                });

                document.dispatchEvent(event);
            });

/*
        describe('#showLatestTweets', function(){
            it('Event datachange is fired', function(done){
                var errTimeout = setTimeout(function(){
                    assert(false, 'Event never fired');
                    done();
                }, 1000);

                $(document).on('datachange', function(){
                    clearTimeout(errTimeout);
                    assert(true);
                    done();
                });

                document.dispatchEvent(new Event('datachange'));
            });
*/
/*
//No funciona debido al asincronismo del evento
            it('controller.showLatestTweets has been called', function(done){
                // Invoke the private function throwEvent() in data module
                var event = new Event('datachange');
                document.dispatchEvent(event);

                assert.isTrue(ctrl.showLatestTweets.calledOnce);
                done();
            });
*/
        });
    });
})();