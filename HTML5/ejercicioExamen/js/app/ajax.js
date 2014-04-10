var APP = APP || {};

// Comunicacion con servidor
APP.Ajax = (function(){
    "use strict";

    var urlShow = "data/show.json";

    var cargarDatosShow = function(){
        $.ajax({
            "url" : urlShow,
            "data" : {},
            "type" : "GET",
            "datatype" : "json",
            "success" : function(json){
                APP.Main.almacenarDatosShow(json);
            },
            "error" : function(jqXHR, status, error){
                console.log("Error AJAX");
            },
            "complete" : function(jqXHR, status) {
                console.log("Peticion realizada");
            }
        });
    };

    return {
        cargarDatosShow : cargarDatosShow
    };
})();