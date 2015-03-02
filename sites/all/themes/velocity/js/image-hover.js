
(function($) {


  Drupal.behaviors.fullScreenImageHover = {
    attach: function (context) {	
	$('.view-homepage .isotope-element, .view-portfolios-grid .isotope-element').hover(
        function () {
		  $('img', this).animate({
            'opacity': 1
          }, 200);
		  
		  $('.field-title-image-hover', this).animate({
            'margin-left': 35,
			 'opacity': 1
          }, 250);
		  		  
		  $('.field-subtitle-image-hover', this).delay(150).animate({
			 'opacity': 1
          }, 0);
		  
		  $('.field-subtitle-image-hover', this).animate({
            'margin-left': 35
          }, 250);
        },
        function () {
		  $('img', this).animate({
            'opacity': 0.4
          }, 200);		  
		  
		  $('.field-title-image-hover', this).animate({
            'margin-left': -500,
			 'opacity': 0
          }, 400);
		  
		  $('.field-subtitle-image-hover', this).animate({
            'margin-left': 600,
			 'opacity': 0
          }, 400);
        }
      );
	
	$('.view-row-image-hover').hover(
        function () {
		  $('.field-title-image-hover', this).animate({
            'margin-left': 35,
			 'opacity': 1
          }, 250);
		  		  
		  $('.field-subtitle-image-hover', this).delay(150).animate({
			 'opacity': 1
          }, 0);
		  
		  $('.field-subtitle-image-hover', this).animate({
            'margin-left': 35
          }, 250);
        },
        function () {		  
		  $('.field-title-image-hover', this).animate({
            'margin-left': -500,
			 'opacity': 0
          }, 400);
		  
		  $('.field-subtitle-image-hover', this).animate({
            'margin-left': 600,
			 'opacity': 0
          }, 400);
        }
      );
	
    }
  };
})(jQuery);