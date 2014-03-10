(function(){
    "use strict"; //Modo estricto de JavaScript

    // Número de enlaces de la página
    var enlaces = document.getElementsByTagName('a');
    console.log(enlaces.length);

    enlaces = document.querySelectorAll('a');
    console.log(enlaces.length);

    console.log(enlaces);

    // Dirección a la que enlaza el penúltimo enlace
    var enlace = enlaces[enlaces.length - 2];
    console.log(enlace.href);

    enlace = document.querySelectorAll("p:nth-last-of-type(2) a:nth-last-child(2)"); //No funciona
    console.log(enlace);
    if (enlace.length > 0 ) {
        console.log(enlace[0].href);
    };

    // Obtener los enlaces que apunten a http://prueba
    var count = 0;
    for (var i = 0; i < enlaces.length; i++) {
        if (enlaces[i].href === "http://prueba/") {
            count++;
        };
    };
    console.log(count);

    enlaces = document.querySelectorAll('a[href="http://prueba"]');
    console.log(enlaces.length);

    // Número de enlaces del tercer párrafo
    var parrafos = document.querySelectorAll("body > p");
    if (parrafos.length >= 3) {
        enlaces = parrafos[2].querySelectorAll("a");
        console.log(enlaces.length);
    };

    enlaces = document.querySelectorAll("body > p:nth-last-of-type(3) a"); //No funciona
    console.log(enlaces.length);

})();
