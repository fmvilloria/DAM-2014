
var negrita = function(){
    document.execCommand('bold', false, null);
};

$(document).on('click', '#negrita', negrita);
