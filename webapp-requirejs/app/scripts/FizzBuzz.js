//Patron Modular AMD
define('FizzBuzz', ['Fizz', 'Buzz'], function(f, b) {
    'use strict';

    var separador = " ";

    var fizzbuzz = function(num) {
        var n = num || 1;

        var result = f.fizz(n) + separador + b.buzz(n);

        if (result != "Fizz" + separador + "Buzz") {
            result = "";
        }

        return result;
    };

    return {
        fizzbuzz : fizzbuzz
    };
});