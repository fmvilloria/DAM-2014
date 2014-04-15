//Patron Modular IIFE
/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl: '../app/scripts',
        nodeRequire: require
    });

    describe('Validate FizzBuzz', function(){
        var fb;

        beforeEach(function(done){
            require(['FizzBuzz'], function(module){
                fb = module;
                done();
            });
        });

        describe('FizzBuzz de 1', function(){
            it('Should return ""', function(){
                assert.equal("", fb.fizzbuzz(1));
            });
        });

        describe('FizzBuzz de 2', function(){
            it('Should return ""', function(){
                assert.equal("", fb.fizzbuzz(2));
            });
        });

        describe('FizzBuzz de 3', function(){
            it('Should return ""', function(){
                assert.equal("", fb.fizzbuzz(3));
            });
        });

        describe('FizzBuzz de 4', function(){
            it('Should return ""', function(){
                assert.equal("", fb.fizzbuzz(4));
            });
        });

        describe('FizzBuzz de 5', function(){
            it('Should return ""', function(){
                assert.equal("", fb.fizzbuzz(5));
            });
        });

        describe('FizzBuzz de 6', function(){
            it('Should return ""', function(){
                assert.equal("", fb.fizzbuzz(6));
            });
        });

        describe('FizzBuzz de 9', function(){
            it('Should return ""', function(){
                assert.equal("", fb.fizzbuzz(9));
            });
        });

        describe('FizzBuzz de 10', function(){
            it('Should return ""', function(){
                assert.equal("", fb.fizzbuzz(10));
            });
        });

        describe('FizzBuzz de 15', function(){
            it('Should return "Fizz Buzz"', function(){
                assert.equal("Fizz Buzz", fb.fizzbuzz(15));
            });
        });

        describe('FizzBuzz de 30', function(){
            it('Should return "Fizz Buzz"', function(){
                assert.equal("Fizz Buzz", fb.fizzbuzz(30));
            });
        });
    });
})();
