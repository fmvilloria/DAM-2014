// Crear alias de document.querySelectorAll. Se añade al elemento window para poder utilizarlo desde cualquier sitio
window.$ = function(selector){
    var that = (this instanceof Element) ? this: document;
    var elems = that.querySelectorAll(selector);
    return (elems.length===1) ? elems[0] : elems;
};

var anade = (function(){
    "use strict";

//    var fecha = /\d{2}\/\d{2}\/\d{4}/;
    var fecha = /(0[1-9]|[1-2][0-9]|30|31)\/(0[1-9]|1[0-2])\/(\d{4})/;

    console.log(fecha.test("Nací en donosti el 05/04/1982"));
    console.log(fecha.test("Nací en donosti el 30/02/1982"));
    console.log(fecha.test("Nací en donosti el 30/13/1982"));
    console.log(fecha.test("Nací en donosti el 30/00/1982"));
    console.log(fecha.test("Nací en donosti el 99/99/1982"));
    console.log(fecha.test("Nací en donosti el 00/99/1982"));

    console.log("Nací en donosti el 05/04/1982".match(fecha)); // Devuelve la expresion regular, a continuación la información de los grupos representados por los paréntesis, después el índice de la posición en la que encontró la información

    var email = /^(\w+)((\.|-|_)(\w+))*@(\w+)(\.\w{2,})+$/;
//    var email = /^([a-zA-Z0-9]+)((\.|-|_)(\w+))*@(\w+)(\.\w{2,})+$/; // Para evitar que los emails empiecen por guión bajo

    console.log(email.test("arkaitz.garro@gmail.com"));
    console.log(email.test("a@a.es"));
    console.log(email.test("arkaitz.garro@gmail.com.es"));
    console.log(email.test("__garro@gmail.com"));
    console.log(email.test(".garro@gmail.com"));
    console.log(email.test("ark@gmail.z"));

})();