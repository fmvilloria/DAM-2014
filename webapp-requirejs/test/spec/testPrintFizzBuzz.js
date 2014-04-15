/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl: '../app/scripts',
        nodeRequire: require
    });

    describe('Validate PrintFizzBuzz', function(){
        var pfb;

        beforeEach(function(done){
            require(['PrintFizzBuzz'], function(module){
                pfb = module;
                done();
            });
        });

        describe('PrintFizzBuzz de 1', function(){
            it('Should return "1"', function(){
                assert.equal("1", pfb.printFizzBuzz(1));
            });
        });

        describe('PrintFizzBuzz de 2', function(){
            it('Should return "1, 2"', function(){
                assert.equal("1, 2", pfb.printFizzBuzz(2));
            });
        });

        describe('PrintFizzBuzz de 3', function(){
            it('Should return "1, 2, Fizz"', function(){
                assert.equal("1, 2, Fizz", pfb.printFizzBuzz(3));
            });
        });

        describe('PrintFizzBuzz de 4', function(){
            it('Should return "1, 2, Fizz, 4"', function(){
                assert.equal("1, 2, Fizz, 4", pfb.printFizzBuzz(4));
            });
        });

        describe('PrintFizzBuzz de 5', function(){
            it('Should return "1, 2, Fizz, 4, Buzz"', function(){
                assert.equal("1, 2, Fizz, 4, Buzz", pfb.printFizzBuzz(5));
            });
        });

        describe('PrintFizzBuzz de 6', function(){
            it('Should return "1, 2, Fizz, 4, Buzz, Fizz"', function(){
                assert.equal("1, 2, Fizz, 4, Buzz, Fizz", pfb.printFizzBuzz(6));
            });
        });

        describe('PrintFizzBuzz de 7', function(){
            it('Should return "1, 2, Fizz, 4, Buzz, Fizz, 7"', function(){
                assert.equal("1, 2, Fizz, 4, Buzz, Fizz, 7", pfb.printFizzBuzz(7));
            });
        });

        describe('PrintFizzBuzz de 8', function(){
            it('Should return "1, 2, Fizz, 4, Buzz, Fizz, 7, 8"', function(){
                assert.equal("1, 2, Fizz, 4, Buzz, Fizz, 7, 8", pfb.printFizzBuzz(8));
            });
        });

        describe('PrintFizzBuzz de 9', function(){
            it('Should return "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz"', function(){
                assert.equal("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz", pfb.printFizzBuzz(9));
            });
        });

        describe('PrintFizzBuzz de 10', function(){
            it('Should return "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz"', function(){
                assert.equal("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz", pfb.printFizzBuzz(10));
            });
        });

        describe('PrintFizzBuzz de 15', function(){
            it('Should return "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz"', function(){
                assert.equal("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz", pfb.printFizzBuzz(15));
            });
        });

        describe('PrintFizzBuzz de 30', function(){
            it('Should return "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz"', function(){
                assert.equal("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz", pfb.printFizzBuzz(30));
            });
        });
    });
})();
