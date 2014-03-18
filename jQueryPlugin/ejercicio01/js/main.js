$('#registro').validate({
    'required' : {
        'error' : 'This field should not be blank.',
        'class' : 'error'
    },
    'email' : {
        'error' : 'This field is not a valid email.',
        'class' : 'error'
    },
    'password' : {
        'error' : 'This field is not a valid password',
        'class' : 'error'
    },
    'min' : {
        'error' : 'This field should be at least %1% characters',
        'class' : 'error'
    }
});
