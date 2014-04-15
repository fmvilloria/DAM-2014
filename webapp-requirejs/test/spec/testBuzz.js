/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl: '../app/scripts',
        nodeRequire: require
    });

    describe('Validate Buzz', function(){
        var b;

        beforeEach(function(done){
            require(['Buzz'], function(module){
                b = module;
                done();
            });
        });

        describe('Buzz de 1', function(){
            it('Should return ""', function(){
                assert.equal("", b.buzz(1));
            });
        });

        describe('Buzz de 2', function(){
            it('Should return ""', function(){
                assert.equal("", b.buzz(2));
            });
        });

        describe('Buzz de 3', function(){
            it('Should return ""', function(){
                assert.equal("", b.buzz(3));
            });
        });

        describe('Buzz de 4', function(){
            it('Should return ""', function(){
                assert.equal("", b.buzz(4));
            });
        });

        describe('Buzz de 5', function(){
            it('Should return "Buzz"', function(){
                assert.equal("Buzz", b.buzz(5));
            });
        });

        describe('Buzz de 6', function(){
            it('Should return ""', function(){
                assert.equal("", b.buzz(6));
            });
        });

        describe('Buzz de 10', function(){
            it('Should return "Buzz"', function(){
                assert.equal("Buzz", b.buzz(10));
            });
        });

        describe('Buzz de 15', function(){
            it('Should return "Buzz"', function(){
                assert.equal("Buzz", b.buzz(15));
            });
        });
    });
})();
