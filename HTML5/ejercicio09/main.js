(function(){

    var content = document.getElementById('content');

    content.addEventListener('keyup', function(){
        var value = this.value;

        console.log(value);

//        sessionStorage.setItem('content', value);
        localStorage.setItem('content', value);
    });

    var handleStorage = (function(event) {
        console.log(event);
        event = event || window.event; // support IE8
        if (event.newValue === null) { // it was removed (localStorage.removeItem(), localStorage.clear())
            // Do somthing
            console.log("THEN");
        } else {
            // Do somthing else
            console.log("ELSE");
        }

//        content.value = sessionStorage.getItem('content');
        content.value = localStorage.getItem('content');
    });

//    content.value = sessionStorage.getItem('content');
    content.value = localStorage.getItem('content');

    if (window.attachEvent) {
        window.attachEvent('onstorage', handleStorage);
    } else {
        window.addEventListener('storage', handleStorage, false);
    }

    var remove = document.getElementById('remove');
    var clear = document.getElementById('clear');

    var removeStorage = (function(){
//        sessionStorage.removeItem('content');
        localStorage.removeItem('content');
    });

    var clearStorage = (function(){
//        sessionStorage.clear();
        localStorage.clear();
    });

    remove.addEventListener('click', removeStorage);
    clear.addEventListener('click', clearStorage);
})();