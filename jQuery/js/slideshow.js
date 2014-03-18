$(document).ready(function(){
    'use-strict';

    var onSlideBefore = function($slideElement, oldIndex, newIndex){
        console.log($slideElement, oldIndex, newIndex);
    }

    var onSlideAfter = function($slideElement, oldIndex, newIndex){
        console.log($slideElement, oldIndex, newIndex);
    }

    var $slider = $('#slideshow').bxSlider({
        'mode': 'fade',
        'controls': false,
        'pager': false,
        'onSlideBefore' : onSlideBefore, // Callback
        'onSlideAfter' : onSlideAfter // Callback
    });

    $(document).on('click', '.prev-slide', function(e) {
        e.preventDefault();

        var target = this.dataset.target;
        var $target = $(this).data('target');

        $slider.goToPrevSlide();
    });

    $(document).on('click', '.next-slide', function(e) {
        e.preventDefault();

        var target = this.dataset.target;
        var $target = $(this).data('target');

        $slider.goToNextSlide();
    });
});
