$(function(){
    $('#enviar').on('click', function(e){
        var $this = $(this);

        //console.log(recurso);

        // Peticion mediante jQuery
        $.get(recurso,
            {},
            function(data, textStatus, jqXHR){
                $('#contenidos').text(data);

                $('#codigo').html(jqXHR.status + "<br/>" + jqXHR.statusText);

                $('#cabeceras').text(jqXHR.getAllResponseHeaders());

                //console.log(data);
                //console.log(textStatus);
                //console.log(jqXHR);
            }
        );
    });

    var recurso = window.location.href;
//    var recurso = 'http://www.arkaitzgarro.com/jquery/data/people.json'; // Error con URLs fuera de nuestro dominio. Para solucionarlo, modificar el origen de la petición o configurar el servidor. Soluciones CORS o JSONP.

    $('#recurso').val(recurso);
});

