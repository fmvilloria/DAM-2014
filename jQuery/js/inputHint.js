$(function(){
    'use-strict';

    // Establecer el valor del elemento input igual al valor del elemento label
    var $input = $('[name=q]').first();
    var $label = $input.closest('form').find('label[for="' + $input.attr('name') + '"]');
    var $hint = $label.text();

    $input.val($hint);

    // Añadir la clase "hint" al elemento input
    $input.addClass('hint');

    // Remover el elemento label
    $label.hide();

    // Vincular un evento focus en el input para remover el texto de sugerencia y la clase "hint"
    $input.on('focus', function(){
        if ($input.val() == $hint) {
            this.value = '';
            $input.removeClass('hint');
        };
    });

    // Vincular un evento blur en el input para restaurar el texto de sugerencia y la clase "hint" en caso que no se haya ingresado algún texto
    $input.on('blur', function(){
        console.log($input[0].value);
        if (!$input.val().trim()) {
            this.value = $hint;
            $input.addClass('hint');
        };
    });
});