(function(){
    "use strict"; //Modo estricto de JavaScript

    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre"];
    meses.push("Noviembre");
    meses.push("Diciembre");

    console.log(meses);

    for (var i = 0; i < meses.length; i++) {
        console.log(meses[i]);
    }
})();