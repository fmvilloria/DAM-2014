var APP = APP || {};

// Mostrar interfaz grafica
APP.Ui = (function(){
    "use strict";

    var mostrarShow = function(json){
        var content = "Id: " + json.id + "</br>";
        content += "Date: " + json.date + "</br>";
        content += "Hour: " + json.hour + "</br>";

        $('#content').html(content);
    };

    var mostrarPlayer = function(json){
        var content = "Name: " + json.name + "</br>";
        content += "Age: " + json.age + "</br>";
        content += "Description: " + json.description + "</br>";
        content += "<img src='" + json.photo + "' /></br>";

        $('#content').html(content);
    };

    return {
        mostrarShow : mostrarShow,
        mostrarPlayer : mostrarPlayer
    };

})();