
(function($) {
  /**
   * @todo
   */
   
   
  
  Drupal.behaviors.velocityPreloader = {
    attach: function (context) {
		$(window).load(function() { // makes sure the whole site is loaded
			$('#status').fadeOut(); // will first fade out the loading animation
			$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
			$('body').delay(350).css({'overflow':'visible'});
		})
    }
  };
   
/*  Drupal.behaviors.velocityAnimations = {
    attach: function (context) {
      $('.animated').appear();

      $(document.body).on('appear', '.fade', function() {
        $(this).each(function() {
          $(this).addClass('ae-animation-fade')
        });
      });
      $(document.body).on('appear', '.slide', function() {
        $(this).each(function() {
          $(this).addClass('ae-animation-slide')
        });
      });
      $(document.body).on('appear', '.hatch', function() {
        $(this).each(function() {
          $(this).addClass('ae-animation-hatch')
        });
      });
      $(document.body).on('appear', '.entrance', function() {
        $(this).each(function() {
          $(this).addClass('ae-animation-entrance')
        });
      });
	 
    }
  }; */
  
  
  Drupal.behaviors.velocityGalleryPage = {
    attach: function (context) {
      $('.block-latest-portfolio .views-field-field-portfolio-images, .view-list-portfolio .views-field-field-portfolio-images, .view-list-articles .views-field-field-image, .block-latest-from-blog .views-field-field-image, .view-blog .isotope-element .views-field-field-image, .view-list-members .views-field-field-member-image').hover(
        function () {
	      $('.field-more-link', this).show();
		  $(this).addClass('hover');
        },
        function () {
	      $('.field-more-link', this).hide();
		  $(this).removeClass('hover');
        }
      );
    }
  };
  
  Drupal.behaviors.velocityAccordion = {
    attach: function () {
	   $('.block-accordion').accordion({
          heightStyle: 'content',
		  autoHeight: false
       });
    }
  };
  
  Drupal.behaviors.velocityTabs = {
    attach: function () {
	   $('.block-tabs').tabs();
    }
  };
  
  Drupal.behaviors.velocityToggle = {
    attach: function () {
        $('div.toggle_area').find('div.toggle_content').hide().end();
	  
	    $('div.toggle_label').click(function() {
          $(this).next().slideToggle();
	  	  if($(this).hasClass('active')) {
	        $(this).removeClass('active');
		  } else {
	        $(this).addClass('active');
		  }
        });
    }
  };
  
  Drupal.behaviors.velocityProgressbar = {
    attach: function () {
				
		$('.progressbar').each(function() {
            var value = parseInt($(this).find('.value').html());
			//alert($(this).find('.value').html());
            $(this).progressbar({value: value});
        });
      
    }
  };
  
  
  /*
  Drupal.behaviors.velocityVideoBG = {
    attach: function () {
		$('#div-video-bg').videoBG({
          position:"fixed",
          zIndex:0,
          mp4:'drupal7/velocity/sites/default/files/videoBG/assets/christmas_snow.mp4',
          ogv:'drupal7/velocity/sites/default/files/videoBG/assets/christmas_snow.ogg',
          webm:'drupal7/velocity/sites/default/files/videoBG/assets/christmas_snow.webm',
          poster:'drupal7/velocity/sites/default/files/videoBG/assets/christmas_snow.jpg',
          opacity:1,
          height: '100%',
          width:'100%',
        }); 
    }
  };
  
  Drupal.behaviors.velocityKnob = {
    attach: function () {
	  $('.input-knob').knob({
        readOnly: true,
		width: '200',
		height: '220',
		thickness: '0.1',
		color: '#000',
		fgColor: '#ae351d'
      });
    }
  */
  Drupal.behaviors.velocityEqualHeights = {
    attach: function (context) {
      $('body', context).once('views-row-equalheights', function () {
        $(window).bind('load', function () {
          $($('.view-list-portfolio .view-content, .view-testimonials .view-content, .block-latest-from-blog .view-content').not('.view-list-portfolio.list-portfolio-grid .view-content, .view-list-portfolio.list-portfolio-grid-text .view-content, .view-list-portfolio.list-portfolio-1-column-text .view-content, .view-list-portfolio.list-portfolio-1-column .view-content').get().reverse()).each(function () {
            var elements = $(this).children('.views-row').css('height', '');
            
            if (!Drupal.behaviors.hasOwnProperty('omegaMediaQueries') || Drupal.omega.getCurrentLayout() != 'mobile') {
              var tallest = 0;
              elements.each(function () {    
                if ($(this).height() > tallest) {
                  tallest = $(this).height();
                }
              }).each(function() {
                if ($(this).height() < tallest) {
                  $(this).css('height', tallest);
                }
              });
            }
          });
        });
      });
    }
  };
  
  Drupal.behaviors.velocityThemeColors = {
    attach: function (context) {
      $('body', context).once('block-theme-colors-showhide', function () {													   
        jQuery('.block-theme-colors .close').click(function(e){
		  e.preventDefault();
		  jQuery('.block-theme-colors .block-theme-color-content ').hide();
		  jQuery(this).hide();
		  jQuery('.block-theme-colors .open').show();
		});
		jQuery('.block-theme-colors .open').click(function(e){
          e.preventDefault();
		  jQuery('.block-theme-colors .block-theme-color-content ').show();
		  jQuery(this).hide();
		  jQuery('.block-theme-colors .close').show();
		});  
      });
    }
  };
  
  
  Drupal.behaviors.velocityPortlofioSliderCaption = {
    attach: function (context) {
      // script for caption to follow mouse
     var mouseX = 0, mouseY = 0;
     $(document).mousemove(function(e){
        mouseX = e.pageX + 35;
        mouseY = e.pageY + 35; 
     });

     // cache the selector
     var follower = $(".caption");
     var xp = 0, yp = 0;
     var loop = setInterval(function(){
         // change 12 to alter damping, higher is slower
         xp += (mouseX - xp) / 12;
         yp += (mouseY - yp) / 12;
         follower.css({left:xp, top:yp});

     }, 30);
    }
  };
  
  
})(jQuery);

