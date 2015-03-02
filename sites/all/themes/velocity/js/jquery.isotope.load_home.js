
(function($) {    

  Drupal.behaviors.fullScreenIsotopeBottomPage = {
    attach: function (context) {         
      var $container = $('#content-bottom .region-content-bottom'),
      // object that will keep track of options
      isotopeOptions = {};
      var colWidth = $('#content-bottom .region-content-bottom .block').width();
      $container.imagesLoaded( function(){
        $container.isotope({              
          layoutMode: 'masonry',
          itemSelector : '.block',
          hiddenStyle :     { opacity : 0, scale : 1 }
        });      
      });
    }
  };


  Drupal.behaviors.fullScreenIsotopeHomepage = {
    attach: function (context) {    

      var $container = $('#block-system-main .view-homepage #isotope-container'),
      // object that will keep track of options
      isotopeOptions = {};
      var colWidth = $('#block-system-main .view-homepage .isotope-element').width();
      $container.imagesLoaded( function(){
        $container.isotope({              
          layoutMode: 'customPerfectMasonry',
          itemSelector : '.isotope-element',
          hiddenStyle :     { opacity : 0, scale : 1 } ,      
          customPerfectMasonry: {
            columnWidth: colWidth,
            liquid: true,                
          }
        }); 
      });
              
    }    
  };  


})(jQuery);
jQuery(window).load(function(){
  setTimeout(function(){
    jQuery('#block-system-main .view-homepage').isotope('reLayout');
    jQuery('#content-bottom .region-content-bottom').isotope('reLayout');
  }, 1000);
});