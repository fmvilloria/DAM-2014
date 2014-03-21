$(function(){
    "use strict";

    $('#municipio').on('keyup', function(e){
        $.post(recurso,
            { municipio : $('#municipio').val() },
            function(data, textStatus, jqXHR){
                var dataObj = $.parseJSON(data);

                $('#sugerencias').text(dataObj);
            }
        );
    });

    var recurso = 'http://localhost/AJAX/ejercicio05/servidor/autocompletaMunicipios.php';

    $('#municipio').focus();
});



