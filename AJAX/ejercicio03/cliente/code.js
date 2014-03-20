$(function(){
    "use strict";

    $('#comprobar').on('click', function(e){
        $.post(recurso,
            { login : $('#login').val() },
            function(data, textStatus, jqXHR){
                var dataObj = $.parseJSON(data);

                if (dataObj.alternativas == undefined) {
                    $('#disponibilidad').text("");
                }else{
                    $('#disponibilidad').text(dataObj.alternativas);
                }

                console.log(dataObj.alternativas);
                console.log(dataObj);
            }
        );
    });

    var recurso = 'http://localhost/AJAX/ejercicio03/servidor/compruebaDisponibilidadJSON.php';

});



