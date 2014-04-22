//Patron Modular AMD
define('service', ['jquery'], function($) {
    'use strict';

    var getTweets = function(config, success, error){
        $.ajax({
            url : '/app/data/tweets.json', //Independiente del dominio porque se ha habilitado un nuevo site en apache, sino el path seria diferente para testing que para produccion
            dataType : 'json',
            success : success,
            error : error
        });
    };

    return {
        getTweets : getTweets
    };
});