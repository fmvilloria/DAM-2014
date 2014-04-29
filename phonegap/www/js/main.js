(function(){
    'use-strict';

    document.getElementById('dialog').addEventListener('click', function(){
        navigator.notification.alert('My alert', function(){
            console.log("Callback alert...");
        });
    });

    document.getElementById('beep').addEventListener('click', function(){
        navigator.notification.beep(3);
    });

    document.getElementById('vibration').addEventListener('click', function(){
        navigator.notification.vibrate(1000);
    });

    document.getElementById('camera').addEventListener('click', function(){
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        });

        function onSuccess(imageData) {
            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + imageData;
        }

        function onFail(message) {
            navigator.notification.alert('Failed because: ' + message);
        }
    });

    document.getElementById('geolocation').addEventListener('click', function(){
        var onSuccess = function(position) {
            navigator.notification.alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
        };

        function onError(error) {
            navigator.notification.alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    });

})();