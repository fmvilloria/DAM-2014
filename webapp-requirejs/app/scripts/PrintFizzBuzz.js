//Patron Modular AMD
define('PrintFizzBuzz', ['Fizz', 'Buzz', 'FizzBuzz'], function(f, b, fb) {
    'use strict';

    var separador = ", ";

    var printFizzBuzz = function(num) {
        var result = "";

        for (var i = 1; i <= num; i++) {
            if (fb.fizzbuzz(i) != "") {
                result += fb.fizzbuzz(i);
            } else if (f.fizz(i) != "" || b.buzz(i) != "") {
                result += f.fizz(i) + b.buzz(i);
            } else {
                result += i;
            }

            if (num != i) {
                result += separador;
            }
        }

        return result;
    };

    return {
        printFizzBuzz : printFizzBuzz
    };
});