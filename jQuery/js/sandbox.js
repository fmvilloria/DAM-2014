$(function(){
    'use-strict';

    // Seleccionar todos los elementos div que poseen la clase "module"
    var $divs = $('div.module');
    console.log($divs);

    // Especificar tres selecciones que puedan seleccionar el tercer ítem de la lista desordenada #myList
    var $li = $('#myList li').eq(2);
    console.log($li[0]);
    $li = $('#myList').find('li').eq(2);
    console.log($li[0]);
    $li = $('#myList li:nth-child(3)');
    console.log($li[0]);
    $li = $('#myListItem'); // La mejor opcion ya que se accede directamente con el id
    console.log($li[0]);

    // Seleccionar el elemento label del elemento input utilizando un selector de atributo
    var $input = $('[name="q"]');
    console.log($input);
    var $label = $input.closest('form').find('label [for="' + $input.attr('name') + '"]');
    console.log($label);

    $input = $('input.input_text');
    console.log($input);
    $label = $input.closest('form').find('label [for="' + $input.attr('name') + '"]');
    console.log($label);

    // Averiguar cuantos elementos en la página están ocultos (ayuda: .length)
    var $ocultos = $(':hidden');

    // Averiguar cuantas imágenes en la página poseen el atributo alt
    var imgs = $('img[alt]');

    // Seleccionar todas las filas impares del cuerpo de la tabla
    var $filas = $('tbody tr:odd');

    // Seleccionar todas las imágenes en la página; registrar en la consola el atributo alt de cada imagen
    var $imgs = $('img[alt]').each(function(idx, el){
        console.log($(el).attr('alt'));
    });

    $imgs = $('img[alt]').each(function(idx, el){
        console.log(el.alt);
    });

    $imgs = $('img[alt]').each(function(){
        console.log(this.alt);
    });

    for (var i = 0; i < $imgs.length; i++) {
        console.log($imgs[i].alt);
    };

    // Seleccionar el elemento input, luego dirigirse hacia el formulario y añadirle una clase al mismo
    $input = $('input');
    console.log($input);
    var form = $input.each(function(idx, el){
        $(el).closest('form').addClass('newClass');
    });

    // Seleccionar el ítem que posee la clase "current" dentro de la lista #myList y remover dicha clase en el elemento; luego añadir la clase "current" al siguiente ítem de la lista
    var $current = $('#myList .current').removeClass('current').next().addClass('current');

    // Seleccionar el elemento select dentro de #specials; luego dirigirse hacia el botón submit
    var $submit = $('#specials select').closest('form').find(':submit');
    console.log($submit);

    // Seleccionar el primer ítem de la lista en el elemento #slideshow; añadirle la clase "current" al mismo y luego añadir la clase "disabled" a los elementos hermanos
    $('#slideshow li:first-child').addClass('current').siblings().addClass('disabled'); // Mejor utilizar selectores de CSS (:first-child) en vez de jQuery (:first) para evitar traducciones de jQuery a CSS

    // Añadir 5 nuevos ítems al final de la lista desordenada #myList
    var start,
        end;

    start = new Date();
//    for (var i = 0; i < 5000; i++) {
    for (var i = 0; i < 5; i++) {
        $('<li>List item ' + i + ' </li>').appendTo($('#myList'));
    }
    end = new Date();
    console.log('appendTo dentro del for: ' + (end-start));

    // Remover los ítems impares de la lista
    $('#myList li:even').remove();

    // Añadir otro elemento h2 y otro párrafo al último div.module
    $('<h2>My H2</h2><p>My paragraph</p>').appendTo($('div.module:last')); //¡¡¡OJO!!! :last-child (CSS3) diferente a :first (jQuery)

    // Añadir otra opción al elemento select; darle a la opción añadida el valor "Wednesday"
    var opt = new Option('Wednesday', 'wednesday');
    $('select[name="day"]')[0].options.add(opt);

    $('select[name="day"]').append($('<option value="wednesday">Wednesday</option>'));

    // Añadir un nuevo div.module a la página después del último; luego añadir una copia de una de las imágenes existentes dentro del nuevo div
    var $div = $('div.module').last();
    var $new = $('<div/>', {
        'class' : 'module',
        'id' : 'myModule'
    });
    $new.append($imgs.first().clone()).insertAfter($div);
});