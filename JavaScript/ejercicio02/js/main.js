var APP = APP || {}; //Variable aplicación que contiene los módulos

APP.validarDNI = (function(){ //Crear un módulo
    "use strict"; //Modo estricto de JavaScript

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    var validarLongitud = function(dni){
        return dni && dni.length == 9;
    };

    var validarNumero = function(dni){
        var num = dni && parseInt(dni);

        return !isNaN(num) && num >= 0 && num <= 99999999;
    };

    var validarLetra = function(dni){
        var letra = dni.charAt(dni.length-1);
        var num = parseInt(dni);

        var index = num % 23;

        return letras[index] == letra;
    };

    var validarDNI = function (dni) {
        return validarLongitud(dni) && validarNumero(dni) && validarLetra(dni);
    };

    return validarDNI;

})();

console.log(APP.validarDNI('44153570X'));
console.log(APP.validarDNI('44153570Y'));
