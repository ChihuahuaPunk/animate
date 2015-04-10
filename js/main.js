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
     var slider = new WallopSlider('.wallop-slider');

});