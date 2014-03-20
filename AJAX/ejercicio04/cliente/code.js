$(function(){
    "use strict";

    var recursoProvincias = 'http://localhost/AJAX/ejercicio04/servidor/cargaProvinciasJSON.php';
    var recursoMunicipios = 'http://localhost/AJAX/ejercicio04/servidor/cargaMunicipiosJSON.php';

    $.getJSON(recursoProvincias,
        { },
        function(data, textStatus, jqXHR){
            $.each(data, function(index, item) {
              var $provincias = $('#provincias');

              $provincias.append(new Option(item, index));
              $provincias.trigger('change');
            });
        }
    );

    $('#provincias').on('change', function(e){
        $.post(recursoMunicipios,
            { provincia : $('#provincias').val() },
            function(data, textStatus, jqXHR){
                var dataObj = $.parseJSON(data);

                $('#municipios option').remove();

                $.each(dataObj, function(index, item) {
                  $('#municipios').append(new Option(item, index));
                });
            }
        );
    });

});



