var validar = (function(){
    "use strict";
/*
    console.log("required: " + validador.required(""));
    console.log("required: " + validador.required("1"));
    console.log("email: " + validador.email(""));
    console.log("email: " + validador.email("arkaitz.garro@gmail.com"));
    console.log("max: " + validador.max("", 50));
    console.log("max: " + validador.max("1234567890123456789012345678901234567890", 50));
    console.log("max: " + validador.max("12345678901234567890123456789012345678901234567890", 50));
    console.log("max: " + validador.max("123456789012345678901234567890123456789012345678901", 50));
    console.log("password: " + validador.password(""));
    console.log("password: " + validador.password("aB1cde"));
    console.log("checked: " + validador.checked(false));
    console.log("checked: " + validador.checked(true));
*/
    var validatorList = ['required', 'email', 'max', 'password', 'checked'];

    var validatorObject = {};
    validatorObject["blur"] = ['required', 'email', 'max', 'password', 'checked'];

    var validateField = function(fieldType, validator, params){
        var fieldValue = fieldType.value;
        if (fieldType.type == "checkbox") {
            fieldValue = fieldType.checked;
        }

        var validatorParams = "";
        if (params != undefined && params){
            validatorParams = ", '" + params + "'";
        }

        console.log("validador." + validator + "('" + fieldValue + "'" + validatorParams + ")");
        return eval("validador." + validator + "('" + fieldValue + "'" + validatorParams + ")");
        //return validador[validator](fieldValue, validatorParams);
    };

    var changeStyle = function(validated, element){
        if (validated) {
            element.className = "white";
        }else{
            element.className = "red";
        }
    };

    var executeFunctionValidator = function(validator, f){
        var elements = $('[data-validator="' + validator + '"]');
        var numElements = elements.length;

        if (numElements == undefined) {
            f(validateField(elements, validator, elements.dataset.longitud), elements);
        }else{
            for (var i = 0; i < numElements; i++) {
                f(validateField(elements[i], validator, elements[i].dataset.longitud), elements[i]);
            }
        }
    };

    var formOnSubmitListener = function(e){
        e.preventDefault(); // Para el funcionamiento del elemento
        e.stopPropagation(); // Para la propagacion del evento

        for (var i = 0; i < validatorList.length; i++) {
            executeFunctionValidator(validatorList[i], changeStyle);
        }
    };

    var executeFunctionValidatorByElement = function(element, validator, f){
        f(validateField(element, validator, element.dataset.longitud), element);
    };

    var validarRequiredListener = function(){
        executeFunctionValidatorByElement(this, 'required', changeStyle);
    };

    var validarEmailListener = function(){
        executeFunctionValidatorByElement(this, 'email', changeStyle);
    };

    var validarMaxListener = function(){
        executeFunctionValidatorByElement(this, 'max', changeStyle);
    };

    var validarPasswordListener = function(){
        executeFunctionValidatorByElement(this, 'password', changeStyle);
    };

    var validarCheckedListener = function(){
        executeFunctionValidatorByElement(this, 'checked', changeStyle);
    };

    var anadirListeners = function(validator, evento, validador){
        $('[data-validator="' + validator + '"]').on(evento, validador);
    };

    var capitalizeFirstLetter = function(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    var registrarListenersByClass = function(lista){
        for (var i = 0; i < lista.length; i++) {
            anadirListeners(lista[i], 'blur', eval('validar' + capitalizeFirstLetter(lista[i]) + 'Listener'));
        }
    };

    var registrarListenersByEventClass = function(hashtable){
        for (var evento in hashtable) {
            for (var i = 0; i < hashtable[evento].length; i++) {
                anadirListeners(hashtable[evento][i], evento, eval('validar' + capitalizeFirstLetter(hashtable[evento][i]) + 'Listener'));
            }
        }
    };

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

    $('form').on('submit', formOnSubmitListener);

//    registrarListenersByClass(validatorList);

    registrarListenersByEventClass(validatorObject);
})();