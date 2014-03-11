var validador = (function(){
    "use strict";

    var validador = {
        // Validar campos obligatorios
        "required" : function(campo){
            return campo != undefined && campo.trim() != "";
        },

        // Validar email
        "email" : function(campo){
            var email = /^(\w+)((\.|-|_)(\w+))*@(\w+)(\.\w{2,})+$/;

            return campo != undefined && email.test(campo);
        },

        // Validar máximo 'tamanno' caracteres
        "max" : function(campo, tamanno){
            return campo != undefined && tamanno != undefined && campo.length <= tamanno;
        },

        // Validar password: longitud mínima 6 caracteres, una minúscula, una mayúscula y un dígito
        "password" : function(campo){
            var minuscula = /[a-z]/;
            var mayuscula = /[A-Z]/;
            var digito = /[0-9]/;

            return campo != undefined && campo.length >= 6 && minuscula.test(campo) && mayuscula.test(campo) && digito.test(campo);
        },

        // Validar checkbox
        "checked" : function(campo){
            return campo != undefined && campo;
        }
    };

    return validador;

})();