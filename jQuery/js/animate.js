$(function(){
    'use-strict';

    var $boxes = $('.box');
    var $width = $(document).width();

    // Animación javascript consume más recursos que la animación CSS3
//    setInterval(function() {
/*
        $boxes.animate({
            'height' : '50px',
            'width' : '50px',
            'color' : 'yellow',
            'background-color' : 'red',
            'font-size' : '18px',
            'left' : '100%'
        }, 800);
*/
//    }, 1000)

    // Animación css3 no se sigue pintando cuando no se visualiza la pantalla, pero si recalcula el movimiento para pintar la animación cuanso se vuelve a ella
    $boxes.css({
        'width' : '50px',
        'height' : '50px',
        'color' : 'yellow',
        'font-size' : '18px',
        'background-color' : 'blue',
        '-webkit-transform' : 'translateX(' + ($width - 100) + 'px)',
        'webkit-transition-property' : 'all',
        'webkit-transition-duration' : '1s',
    });
});