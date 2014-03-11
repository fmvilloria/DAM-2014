// Crear alias de document.querySelectorAll. Se añade al elemento window para poder utilizarlo desde cualquier sitio
window.$ = function(selector){
    var that = (this instanceof Element) ? this: document;
    var elems = that.querySelectorAll(selector);
    return (elems.length===1) ? elems[0] : elems;
};

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
    }

    var changeStyle = function(validated, element){
        if (validated) {
            element.className = "red";
        }else{
            element.className = "white";
        }
    }

    var text2Validate = function(validator){
        var elements = $('[data-validator="' + validator + '"]');
        var numElements = elements.length;

        if (elements.length == undefined) {
            console.log(validateField(elements, validator, elements.dataset.longitud));
            changeStyle(!validateField(elements, validator, elements.dataset.longitud));
        }else{
            for (var i = 0; i < numElements; i++) {
                console.log(validateField(elements[i], validator, elements[i].dataset.longitud));
                changeStyle(!validateField(elements[i], validator, elements[i].dataset.longitud), elements[i]);
            }
        }
    }

    var formOnSubmit = function(e){
        e.preventDefault(); // Para el funcionamiento del elemento
        e.stopPropagation(); // Para la propagacion del evento

        text2Validate("required");
        text2Validate("email");
        text2Validate("max");
        text2Validate("password");
        text2Validate("checked");
    }

    $('form').addEventListener('submit', formOnSubmit);

})();