$(function() {
     $('#animate').fullpage({
        navigation: true,
        loopBottom: true,
        recordHistory: true,
        // sectionsColor : ['#F0EEBD', '#F7F1E5', '#F0CEBD'],
        verticalCentered: false,
        fixedElements: '.navigation',
        anchors: ['presentacion', 'catalogo', 'contacto']
     });
     $('#select').change(function(){
        var laVariable = $(this).val();
        var losElementos = $('.elementos div')

         console.log(laVariable);
         losElementos.fadeOut();
         $('.' + laVariable).fadeIn();
         if (laVariable === 'todos') {
          losElementos.fadeIn();
         }
       });
      if ($('#select').val() === 'todos') {
       $('.elementos div').fadeIn();
     }
     $('#select').chosen();
});