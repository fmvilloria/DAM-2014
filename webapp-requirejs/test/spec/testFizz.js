//Patron Modular IIFE
/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl: '../app/scripts',
        nodeRequire: require
    });

    describe('Validate Fizz', function(){
        var f;

        beforeEach(function(done){
            require(['Fizz'], function(module){
                f = module;
                done();
            });
        });

        describe('Fizz de 1', function(){
            it('Should return ""', function(){
                assert.equal("", f.fizz(1));
            });
        });

        describe('Fizz de 2', function(){
            it('Should return ""', function(){
                assert.equal("", f.fizz(2));
            });
        });

        describe('Fizz de 3', function(){
            it('Should return "Fizz"', function(){
                assert.equal("Fizz", f.fizz(3));
            });
        });

        describe('Fizz de 4', function(){
            it('Should return ""', function(){
                assert.equal("", f.fizz(4));
            });
        });

        describe('Fizz de 5', function(){
            it('Should return ""', function(){
                assert.equal("", f.fizz(5));
            });
        });

        describe('Fizz de 6', function(){
            it('Should return "Fizz"', function(){
                assert.equal("Fizz", f.fizz(6));
            });
        });

        describe('Fizz de 9', function(){
            it('Should return "Fizz"', function(){
                assert.equal("Fizz", f.fizz(9));
            });
        });

        describe('Fizz de 15', function(){
            it('Should return "Fizz"', function(){
                assert.equal("Fizz", f.fizz(15));
            });
        });
    });
})();
