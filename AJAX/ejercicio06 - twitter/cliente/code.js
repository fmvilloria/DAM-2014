$(function(){
    "use strict";

    $('#twitter').on('click', function(e){
        $.ajax({
                url : recurso,
                dataType : 'jsonp',
            });
    });

    var recurso = 'https://api.twitter.com/1.1/account/settings.json?callback=parseJSON';
/*
    var apiKey = '';
    var apiSecret = '';

    var bearerTokenCredentials = apiKey + ":" + apiSecret;
*/
    var bearerTokenCredentials_base64 = '';

    $.ajax({ // No funciona porque el navegador elimina las cabeceras
            url : 'https://api.twitter.com/oauth2/token',
//            url : 'http://localhost/index.html',
            dataType : 'jsonp',
            type : 'POST',
            contentType: 'application/json',
            headers : {
                'Authorization' : 'Basic ' + bearerTokenCredentials_base64,
                'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8',
                'X-Access-Control-Allow-Origin' : 'dev.arkaitzgarro.com'
            },
            crossDomain: true,
            data : 'grant_type=client_credentials',
            success : function(data){
                console.log('OK');
            },
            error : function(){
                console.log('ERR');
            }
        });
});