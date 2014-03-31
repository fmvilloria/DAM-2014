
var negrita = function negrita(){
    document.execCommand('bold', false, null);
};

$(document).on('click', '#negrita', negrita);
