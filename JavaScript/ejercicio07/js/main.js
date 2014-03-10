// Crear alias de document.querySelectorAll. Se añade al elemento window para poder utilizarlo desde cualquier sitio
window.$ = function(selector){
    var elems = document.querySelectorAll(selector);
    return (elems.length===1) ? elems[0] : elems;
};

var anade = (function(){
    "use strict";

    var lista = $('#lista'),
        lis = lista.children,
        count = lista.children.length;


    var mostrarTexto = function(e) {
        e.preventDefault(); // Para el funcionamiento del elemento
        e.stopPropagation(); // Para la propagacion del evento

        console.log(this); // Se muestra el elemento que tiene el listener
        console.log(e);
    };

    $('#lista a').addEventListener('click', mostrarTexto);
    lista.addEventListener('click', mostrarTexto); // Descomentar para delegar evento al ul

    // Comentar el for para delegar en el ul para un mejor mantenimiento
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('click', mostrarTexto);
        lis[i].addEventListener('mouseover', mostrarTexto);
    };

    var anade = function(){
        var li = document.createElement("li");
        li.innerText = "Elemento " + (++count);

        lista.appendChild(li);
        //li.addEventListener('click', mostrarTexto); // Delegar en el ul para un mejor mantenimiento
    };

    return anade;

})();