var APP = APP || {}; //Variable aplicación que contiene los módulos

APP.validarPalindromo = (function(){ //Crear un módulo
    "use strict"; //Modo estricto de JavaScript

    var validarPalindromo = function (txt) {
        txt = txt.trim().replace(/ /gi, "").toLowerCase();

        var txtAux = txt.split("").reverse().join("");

//Código equivalente a la linea anterior
/*
        var palindromo = txt && true;

        for (var i = 0; i < txt.length / 2; i++) {
            palindromo = palindromo && txt[i] == txt[txt.length - 1 - i];
        };

        return palindromo;
*/

        return txt == txtAux;
    };

    return validarPalindromo;

})();

console.log(APP.validarPalindromo('abcba'));
console.log(APP.validarPalindromo('abba'));
console.log(APP.validarPalindromo('asdf'));
