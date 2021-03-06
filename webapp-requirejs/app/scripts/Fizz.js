//Patron Modular AMD
define('Fizz', [], function() {
    'use strict';

    var isFizz = function(num){
        var n = num || 1;

        return (n % 3 == 0);
    };

    var fizz = function(num) {
        var result = "";

        if (isFizz(num)) {
            result = "Fizz";
        }

        return result;
    };

    return {
        fizz : fizz
    };
});