define('FizzBuzz', ['Fizz', 'Buzz'], function(f, b) {
    'use strict';

    var separador = " ";

    var fizzbuzz = function(num) {
        var result = f.fizz(num) + separador + b.buzz(num);

        if (result != "Fizz" + separador + "Buzz") {
            result = "";
        }

        return result;
    };

    return {
        fizzbuzz : fizzbuzz
    };
});