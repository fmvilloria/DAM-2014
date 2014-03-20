$(function(){
    $('#enviar').on('click', function(e){
        var $this = $(this);

        //console.log(recurso);

        // Peticion mediante jQuery
        $.get(recurso,
            {},
            function(data, textStatus, jqXHR){
                $('#contenidos').text(data);

                $('#codigo').text(jqXHR.status);

                //console.log(data);
                //console.log(textStatus);
                //console.log(jqXHR);
            }
        );
    });

    var recurso = window.location.href;

    $('#recurso').val(recurso);
});

