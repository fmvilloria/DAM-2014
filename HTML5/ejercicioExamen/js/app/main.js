var APP = APP || {};

// Controlador
APP.Main = (function(){
    "use strict";

    var almacenarDatosShow = function(json){
        APP.Data.almacenarDatosShow(json);
    };

//    window.addEventListener("DOMContentLoaded", APP.Data.init, false);

    APP.Ajax.cargarDatosShow();

//    APP.Ui.mostrarShow(APP.Data.getShow(0));
//    APP.Ui.mostrarPlayer(APP.Data.getPlayer(0));

/*
    var idPartida = 1;
    var jugadorActual = 0;
    var timeout = 30000; // 30 segundos

    var cargarTablero = function(data){
        APP.Ui.cargarTablero(data);
    };

    var inicializarTablero = function(idJugador){
        //APP.Ajax.cargarTablero();
console.log("inicializarTablero: " + idJugador);
        APP.Data.ponerBarcosTablero(0);
        APP.Data.ponerBarcosTablero(1);
        APP.Ajax.enviarDatos({estado : APP.Status.E_BARCOS, accion : APP.Status.A_FIN}, function() {});
    };

    var realizarJugada = function(obj){

        var $this = $(obj);

        var fila = $this[0].dataset.row;
        var columna = $this[0].dataset.column;

        var tocado = APP.Ajax.estadoJugada(idPartida, jugadorActual, fila, columna);

        APP.Ui.cambiarEstadoCelda(tocado, $this);

    };

    //Se conecta el primer jugador
    APP.Ajax.enviarDatos({estado : APP.Status.E_INICIAR, accion : APP.Status.A_CONSULTAR}, APP.Status.comprobar);
    //Se conecta el otro jugador

    //APP.Ajax.cargarTablero();
    //APP.Data.ponerBarcosTablero(idPartida);
*/
    return {
        almacenarDatosShow : almacenarDatosShow
    };
})();