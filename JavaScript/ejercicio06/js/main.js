var muestra = (function(){
    "use strict"; //Modo estricto de JavaScript

    var muestra = function (){
        var enlace = document.querySelectorAll("a");
        console.log(enlace);

        enlace[0].className = "oculto";

        var parrafo = document.querySelectorAll("p :last-child");
        console.log(parrafo);

        parrafo[0].className = "visible";
    };

    return muestra;

})();
