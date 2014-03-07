var APP = APP || {}; //Variable aplicación que contiene los módulos

APP.validarTexto = (function(){ //Crear un módulo
    "use strict"; //Modo estricto de JavaScript

    var validarUpperCase = function(txt){
        return txt && txt == txt.toUpperCase() ? "mayusculas" : undefined;
    };

    var validarLowerCase = function(txt){
        return txt && txt == txt.toLowerCase() ? "minusculas" : undefined;
    };

    var validarTexto = function (txt) {
        return validarUpperCase(txt) || validarLowerCase(txt) || "ambos";
    };

    return validarTexto;

})();

console.log(APP.validarTexto('ABCD'));
console.log(APP.validarTexto('abcd'));
console.log(APP.validarTexto('aBcD'));
