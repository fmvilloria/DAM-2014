(function (){

    console.log("Con javaScript");

    $('.user').each(function(){
        console.log(this.dataset);

        var conJavaScript = "";

        for (var e in this.dataset) {
            console.log(e + " - " + this.dataset[e]);

            conJavaScript += "<li>" + e + " - " + this.dataset[e] + "</li>";
        };

        $("<ul><li>Con javaScript</li><ul>" + conJavaScript + "</ul></ul>").insertAfter(this);
    });

    console.log("Con jQuery");

    $('.user').each(function(){
        console.log($(this).data());

        var conJQuery = "";

        for (var e in $(this).data()) {
            console.log(e + " - " + $(this).data(e));

            conJQuery += "<li>" + e + " - " + $(this).data(e) + "</li>";
        };

        $("<ul><li>Con jQuery</li><ul>" + conJQuery + "</ul></ul>").insertAfter(this);
    });

})();
