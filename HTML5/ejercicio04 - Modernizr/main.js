(function (){
    console.log(Modernizr);

    console.log(Modernizr.inputtypes);

    $.each(Modernizr.inputtypes, function(index, value){
        console.log(index + ": " + value);
        console.log($('input[type="' + index + '"]'));

        $("<span>" + value + "</span>").insertAfter('input[type="' + index + '"]');
    });
})();

