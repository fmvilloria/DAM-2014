$(document).ready(function() {
    // Calcular posición

    function showMap(position) {
        var mapcanvas = document.createElement('div');
        mapcanvas.id = 'mapcanvas';
        mapcanvas.style.height = '400px';
        mapcanvas.style.width = '560px';

        document.querySelector('article').appendChild(mapcanvas);

        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeControl: false,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "¡Usted está aquí!"
        });
    }

    var success = (function(position) {
        console.log('We found you!');

        console.log(position);

        console.log(position.timestamp);

        var coords = position.coords;
        console.log(coords);

        //document.write(coords.latitude);
        console.log(coords.accuracy);
        console.log(coords.latitude);
        console.log(coords.longitude);

        console.log(coords.altitude);
        console.log(coords.altitudeAccuracy);
        console.log(coords.heading);
        console.log(coords.speed);

        showMap(position);
    });

    var error = (function(position) {
        console.log('Error found!');
    });

    if(Modernizr.geolocation) { 
        console.log('El explorador soporta geolocalización'); 

        navigator.geolocation.getCurrentPosition(success, error, {
            enableHighAccuracy: true,
            timeout: 2000,
            maximumAge: 0
        });
/*
        var watch = navigator.geolocation.watchPosition(success, error, {
            enableHighAccuracy: true,
            timeout: 2000,
            maximumAge: 0
        });

        navigator.geolocation.clearWatch(watch);
*/
    } else { 
        console.log('El explorador NO soporta geolocalización'); 
    }
});