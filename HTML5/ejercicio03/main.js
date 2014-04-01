var progress = function (){
    var filledElements = 0;
    var totalElements = 0;

    $('input[id], progress, meter').each(function(){

        totalElements++;

        if(this.value != ""){ //inputs[i].validity.valid (true/false)
            filledElements++;
        }
    });

    $('progress')[0].setAttribute('max', totalElements);
    $('progress')[0].setAttribute('value', filledElements);
};

$(document).on('change', progress);