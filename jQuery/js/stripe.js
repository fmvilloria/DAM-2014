(function($){

    $.fn.stripe = function(color){
        var c = color || '#CCC'; // Parametro por defecto

        return this.filter('table').each(function(){
            var $this = $(this);

            $this.find('tbody tr:odd').css('background-color', c);
        });
    };
})(jQuery);

$('table', 'div').stripe('#F00'); // Esta llamdada debería ir en otro fichero