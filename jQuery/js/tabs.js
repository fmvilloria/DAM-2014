$(function(){
    'use-strict';

    // Ocultar todos los elementos div.module
    var $divs = $('div.module').hide();

    // Crear una lista desordenada antes del primer div.module para utilizar como pestañas
    var $ul = $('<ul/>', {
        'id' : 'myTabs'
    }).addClass('tabs');

    // Interactuar con cada div utilizando $.fn.each. Por cada uno, utilizar el texto del elemento h2 como el texto para el ítem de la lista desordenada
    var lis = [];

    $divs.each(function(idx, el){
        var $div = $(this);

        var $li = $('<li/>', {
            'text' : $div.find('h2').first().text()
        });

        $li.data('relatedDiv', $div);

        lis.push($li.get(0)); // get(0) equivale a [0]
    })

    $ul.append(lis).insertBefore($divs.first()); // Aqui se añade realmente la lista antes del primer div.module

    // Vincular un evento click a cada ítem de la lista de forma que:
    // Muestre el div correspondiente y oculte el otro
    $ul.on('click', '.tabs li', function(){
        var $li = $(this);
        var $div = $li.data('relatedDiv');

        $div.show().siblings('div.module').hide();

        // Añada la clase "current" al ítem seleccionado
        // Remueva la clase "current" del otro ítem de la lista
        $li.addClass('current').siblings('.current').removeClass('current');
    });

    // Finalmente, mostrar la primera pestaña
    $divs.eq(0).show();
    $ul.find('li').filter(':first').addClass('current');
});