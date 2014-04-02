(function(){
    var $video = $('#video');
    var video = $video[0];

    $("#play").click(function () {
        video.play();
    });

    $("#pause").click(function () {
        video.pause();
    });

    $("#stop").click(function () {
        video.pause();
        video.currentTime = 0;
    });

    $("#avanzar").click(function () {
        video.currentTime += 10;
    });

    $("#retroceder").click(function () {
        video.currentTime -= 10;
    });

    $("#inicio").click(function () {
        video.currentTime = 0;
    });

    $("#fin").click(function () {
        video.currentTime = video.duration;
    });

    $("#volumen").change(function () {
        video.volumen = this.value / 100;
    });

    /* REVISAR */
    video.addEventLister('canplay', function(){
        $('#volumen').val(this.volume*100);
        $('#progreso').val(0);
        $('#progreso').attr('max', this.duration);
    });

    video.addEventLister('timeupdate', function(){
        $('#progreso').val(this.currentTime);
    });
    /* FIN REVISAR */

    $("#full-screen").click(function () {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen();
        } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        }

    });
})();