$(function(){
    "use strict";

    var frases = [];
    var index = -1;
    var detener = false;
    var intervalo = 1000;

    $('#detener').on('click', function(e){
        if (!detener) {
            clearInterval(peticionPeriodica);
        }else{
            peticionPeriodica = setInterval(ajaxRequest, intervalo);
        }

        detener = !detener;
    });

    $('#anterior').on('click', function(e){
        if (index > 0) {
            clearInterval(peticionPeriodica);

            $('#ticker').text(frases[--index]);
        };
    });

    $('#siguiente').on('click', function(e){
        if (index < frases.length - 1) {
            clearInterval(peticionPeriodica);

            $('#ticker').text(frases[++index]);
        };
    });

    var recurso = 'http://localhost/AJAX/ejercicio02/servidor/generaContenidos.php';
    var ajaxRequest = function(){
        $.get(recurso,
            {},
            function(data, textStatus, jqXHR){
                var d = new Date();
                var timeStamp = d.getHours() + ":" + d.getMinutes();

                var formatedData = timeStamp + ": " + data;

                $('#ticker').text(formatedData);
                frases.push(formatedData);
                index = frases.length - 1;

                console.log(jqXHR);
            }
        );
    };

    var peticionPeriodica = setInterval(ajaxRequest, intervalo);
});



