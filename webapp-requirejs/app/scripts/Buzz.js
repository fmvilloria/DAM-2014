//Patron Modular AMD
define('Buzz', [], function() {
    'use strict';

    var isBuzz = function(num){
        return (num % 5 == 0);
    };

    var buzz = function(num) {
        var result = "";

        if (isBuzz(num)) {
            result = "Buzz";
        }

        return result;
    };

    return {
        buzz : buzz
    };
});