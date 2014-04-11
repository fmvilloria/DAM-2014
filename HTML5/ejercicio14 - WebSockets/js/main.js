$(function () {
    "use strict";

    // Obtener los elementos del DOM

    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;

    // Comprobar la disponibilidad de Web Socket en el navegador
    if (!Modernizr.websockets) {
        return false;
    }

    window.WebSocket = window.WebSocket || window.MozWebSocket;

    // Abrir la conexion con ws://www.arkaitzgarro.com:1337
    // 1. Al abrir la conexión, solicitar el nick.
    // 2. Controlar posibles errores del servidor.
    // 3. Escucar los mensajes del servidor, y mostrarlos en el elemento "content"
    // 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.

    var socket = new WebSocket('ws://www.arkaitzgarro.com:1337');
    //socket.close();
    socket.onopen  = function(e){
        console.log("Welcome - status "+this.readyState);

        $('#status').html("Connected");
        $('#input')[0].disabled = false;

        $('#connect').disabled = true;
        $('#disconnect').disabled = false;
    };

    socket.onclose = function(e){
        console.log("Disconnected - status "+this.readyState);
    };

    socket.onmessage = function(event) {
        var data = JSON.parse(event.data);

        var tipo = data.type;
        var dato = data.data;
console.log(data);
        switch(tipo){
            case 'color':
                            console.log("color");
                            myColor = dato;
                            myName = $('#input').val();

                            $('#status').html(myName);
                            $('#status').css("color", myColor);

                            break;
            case 'history':
                            console.log("history");
                            for (var i = 0; i < dato.length; i++) {
                                addMessage(dato[i].author, dato[i].text, dato[i].color, new Date(dato[i].time));
                            };

                            break;
            case 'message':
                            console.log("message");
                            addMessage(dato.author, dato.text, dato.color, new Date(dato.time));

                            break;

        }

        $('#input').val("");
    };

    $('#connect').click(function(){
        console.log("CONNECT");
        socket = new WebSocket('ws://www.arkaitzgarro.com:1337');
    });

    $('#disconnect').click(function(){
        console.log("DISCONNECT");

        addMessage(myName, myName + " disconnected...", myColor, new Date());

        $('#status').html("Disconnected");
        $('#input')[0].disabled = true;
        $('#disconnect').disabled = true;
        $('#connect').disabled = false;

        socket.close();
    });


    $('#input').keypress(function(e)
    {
       if(e.which == 13)
       {
          console.log("Se ha pulsado Enter");

          var message = $('#input').val();
          socket.send(message);
       }
    });

    /**
     * Añadir el mensaje a la ventana de chat
     */
    function addMessage(author, message, color, dt) {
        $('#content').prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
             + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':'
             + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes())
             + ': ' + message + '</p>');
    }
});