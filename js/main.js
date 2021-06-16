(function ($) {
    
    	    /*---------------------------
        Preloader
    -----------------------------*/
	$(document).ready(function() {
  
	  setTimeout(function() {
		$('#ctn-preloader').addClass('loaded');
		// Una vez haya terminado el preloader aparezca el scroll
		$('body').removeClass('no-scroll-y');

		if ($('#ctn-preloader').hasClass('loaded')) {
		  // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
		  $('#preloader').delay(1000).queue(function() {
			$(this).remove();
		  });
		}
	  }, 3000);
	  
	});
    //Navbar Fixed
    $(window).on('scroll', function () {
        if ($(document).scrollTop() > 85) {
            $('.navbar').addClass('navcolor');
        } else {
            $('.navbar').removeClass('navcolor');
        }
    });

    // Form
    $(".seo-form input.input").on('focus',function(){
        var placeholder = $(this).attr("placeholder");
        $(this).before('<label>'+placeholder+'</label>');
        console.log(placeholder);
    });

    $(".seo-form input.input").focusout(function(){
        $('label').hide();
    });

    // 
    $('.single_item_content a').magnificPopup({
        type: 'image',
    });
    

    // WoW JS
    new WOW().init();


    // Move shape
    var lFollowX = 0,
        lFollowY = 0,
        x = 0,
        y = 0,
    friction = 1 / 30;

    function moveBackground() {
      x += (lFollowX - x) * friction;
      y += (lFollowY - y) * friction;
      
      translate = 'translate(' + x + 'px, ' + y + 'px)';

      $('.banner-shape-animate img').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate,
      });

      window.requestAnimationFrame(moveBackground);
    }

    $(window).on('mousemove', function(e) {

      var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
      var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
      lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
      lFollowY = (10 * lMouseY) / 100;

    });

    moveBackground();

    // Banner Height
    function bannerHeight() {
        $('.banner').css({
            "height": $(window).height() + "px"
        });
    }
    bannerHeight();
    $(window).on('resize', bannerHeight);

    //progress
    $(".progress-circle").circliful({
        animation: 1,
        animationStep: 5,
        animateInView: true,
        foregroundBorderWidth: 10,
        backgroundBorderWidth: 10,
        percent: 38,
        textSize: 28,
        textStyle: 'font-size: 12px;',
        backgroundColor: "rgba(225,225,255,0.5)",
        foregroundColor: "#fff",
        fontColor: '#fff',
    });

    // Portfolio
    $(window).on("load", function () {
        if ($('.isotope_items').length) {
            var $container = $('.isotope_items');
            $container.isotope();

            $('.portfolio-filter ul li').on("click", function () {
                $(".portfolio-filter ul li").removeClass("select-cat");
                $(this).addClass("select-cat");
                var selector = $(this).attr('data-filter');
                $(".isotope_items").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        }

        $('.isotope_items').isotope({
            itemSelector: '.single_item',
            masonry: {
                columnWidth: 100
            }
        });


    }); // window load end 

    //testimonials
    $('.testimonials').slick({
        dots: true,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
    });

    //testimonials-2
    $('.testimonials-2').slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 300,
        responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // portfolio
    $('.portfolio').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: $('.prevPortfolio'),
      nextArrow: $('.nextPortfolio'),
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

	// popup video
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade'
	});
    //Tilt
    $('.js-tilt').tilt({
        glare: true,
        maxGlare: .5
    });

    //Counter

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //Backtotop
    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 700) {
            $('#backtotop').fadeIn(500);
        } else {
            $('#backtotop').fadeOut(500);
        }
    });

    $('#backtotop').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });


})(jQuery);