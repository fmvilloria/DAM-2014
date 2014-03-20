$(function(){
    $(document).on('change', 'select[name=day]', function(e){
        var $this = $(this);

        console.log($this.val());
/*
        // Peticion mediante jQuery
        var res = $.getJSON('data/specials.json', // Emulamos el servidor
            { data : $this.val() },
            function(data, textStatus, jqXHR){
                console.log(data);
                console.log(textStatus);
                console.log(jqXHR);
//                return data;
            });

//        console.log(res); // Devuelve el objeto de jQuery (this)
*/
        // Peticion mediante AJAX
        $.ajax({
            url : 'data/specials.json', // Emulamos el servidor
            data : { data : $this.val() },
            //dataType : 'json',
            dataType : 'text',
            cache : false,
            success : function(data, textStatus, jqXHR){
                console.log(data);
            },
            error : function(jqXHR, textStatus, errorThrown){
                console.log(errorThrown);
            }
        });
    });
});