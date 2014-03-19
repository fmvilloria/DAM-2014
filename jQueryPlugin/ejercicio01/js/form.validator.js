(function($){
    'use strict';

    var errors = [],
      $submit;

    $.fn.validate = function(options){
        var opts = $.extend($.fn.validate.defaults, options);

        return this.filter('form').each(function(){
            var $form = $(this);
            $submit = $form.find('input[type="submit"]'),

            $form.on('submit', opts, validateForm);
            $form.on('blur validate', ':input[data-validator]', opts, validateField); // El tercer parametro evita el uso de variables globales
        });
    };

    $.fn.validate.defaults = { // Para que el que llame al 'validate' acceda a sus funciones por defecto de forma publica. var defaults sería una variable privada.
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
          'error' : 'This field should be at least %1% character(s)',
          'class' : 'error'
      }
    };

    var disableSubmit = function() {
        if($submit) {
            $submit.value = "Validating...";
            $submit.disabled = true;
        }
    };

    var enableSubmit = function() {
        if($submit) {
            $submit.value = "Send";
            $submit.disabled = false;
        }
    };

    var validateField = function(e) {
        if(validator[this.dataset.validator]) {
            if(!validator[this.dataset.validator](this.value)) {
                console.log(this, e.data[this.dataset.validator].error); // e.data = opts
                errors.push([this, e.data[this.dataset.validator].error]);
                $(this).css('background-color', '#F00');
            }else{
                $(this).css('background-color', '#FFF');
            }
        }
    };

    var validateForm = function(e) {
        var $form = $(this);
        var $inputs = $form.find(':input[data-validator]');

        errors = [];
        disableSubmit();

        for (var i = $inputs.length - 1; i >= 0; i--) {
            $($inputs[i]).trigger('validate');
        }

        if(errors.length > 0) {
            e.preventDefault();

            enableSubmit();
            console.log(errors);
        }
    };

    var validator = (function(){

      var required = function(value) {
          return !(value === undefined || value === null || value.length === 0 || /^\s+$/.test(value));
      };

      var email = function(value) {
          return /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(value);
      };

      var password = function(value) {
          var may = /[A-Z]/;
          var min = /[a-z]/;
          var dig = /[0-9]/;

          return (value.length >= 6) && may.test(value) && min.test(value) && dig.test(value);
      };

      var max = function(value, top) {
          return value === undefined || value === null || value.length <= top;
      };

      var min = function(value, bottom) {
          return required(value) && value.length >= bottom;
      };

      return {
          required : required,
          email    : email,
          password : password,
          max      : max,
          min      : min
      };
    })();

/*
    var _showEror = function(el, options){
      var $el = $(el);

      var $target = sel.data('target');
      if (!$target) {
        $target = $('<span/>', {
          'class' : options.class,
          'text' : options.text
        })
      };
    }

    var _hideError = function(el){
      var $el = $(el);
    };
*/

})(jQuery);