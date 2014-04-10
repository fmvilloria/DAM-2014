var APP = APP || {};

// Acceso a almacenamiento local
APP.Data = (function(){
    "use strict";

    // Actions
    var A_ALMACENAR_DATOS_SHOW = 1;

    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

    var db = null;

    var onerror = function(e){
        console.log(e);
    };

    var onsuccess = function(e){
        console.log("Sucessful add: " + e);
    };

    var open = function(action, param) {
        var version = 5;
        var request = indexedDB.open("juego", version);

        request.onupgradeneeded = function(e) {
            console.log("onupgradeneeded");
            db = e.target.result;

            if (db.objectStoreNames.contains("show")) {
                db.deleteObjectStore("show");
            }

            var store = db.createObjectStore("show", { keyPath: "id" });

            if (db.objectStoreNames.contains("player")) {
                db.deleteObjectStore("player");
            }

            store = db.createObjectStore("player", { keyPath: "id" });

            if (db.objectStoreNames.contains("challenge")) {
                db.deleteObjectStore("challenge");
            }

            store = db.createObjectStore("challenge", { keyPath: "id" });

            if (db.objectStoreNames.contains("place")) {
                db.deleteObjectStore("place");
            }

            store = db.createObjectStore("place", { keyPath: "id" });

            if (db.objectStoreNames.contains("option")) {
                db.deleteObjectStore("option");
            }

            store = db.createObjectStore("option", { keyPath: "id" });
        };

        request.onerror = onerror;

        request.onsuccess = function(e) {
            console.log("DB opened");

            db = e.target.result;

            if (action == A_ALMACENAR_DATOS_SHOW) {
                var transaction = db.transaction(["show"], "readwrite");
                var store = transaction.objectStore("show");

                var show = APP.Model.getShow(param);

                var requestShow = store.put(show);

                requestShow.onsuccess = function (event) {
                    APP.Ui.mostrarShow(event.target.result);
                };

                requestShow.onerror = onerror;

                transaction = db.transaction(["player"], "readwrite");
                store = transaction.objectStore("player");

                var players = APP.Model.getPlayers(param, show.id);

                var request;

                for (var i = 0; i < players.length; i++) {
                    request = store.put(players[i]);
                };

                request.onsuccess = function (event) {
                    request.onerror = onerror;

                    var requestGet = store.get(0);

                    requestGet.onsuccess = function (e) {
                        APP.Ui.mostrarPlayer(e.target.result);
                    };
                };
            }
        };
    };

    var almacenarDatosShow = function(json){
        open(A_ALMACENAR_DATOS_SHOW, json);
        //indexedDB.deleteDatabase("juego");
    };

    return {
        almacenarDatosShow : almacenarDatosShow
    };
})();