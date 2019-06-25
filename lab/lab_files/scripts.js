/*===================================
Author       : KlbTheme (Sinan ISIK).
Template Name: Kryplab - Bitcoin & ICO Cryptocurrency Landing Page WordPress Theme
Version      : 1.0
===================================*/

/*===================================*
LANDING PAGE JS
*===================================*/

jQuery.noConflict();
(function($) {
	'use strict';

	//Run function when document ready
	$(document).ready(function () {
		init_wowanimation();
		init_scroll();
		init_steps_carousel();
		init_team_carousel();
		init_advisory_board_carousel();
		init_post_carousel();
		init_klbclass();
		init_popupforms();
		init_magnific_popup();	 
	});
	
	/*===================================*
     Add Sticky
	*===================================*/
    $(window).on('scroll', function () {
        var wSize = $(window).width();
        if (wSize > 767 && $(this).scrollTop() > 1) {
            $('.app-header').addClass("navbar-sticky");
        }
        else {
            $('.app-header').removeClass("navbar-sticky");
        }
    });
	
	/*===================================*
     Wow Animation
	*===================================*/
	function init_wowanimation() {
		new WOW().init();

		if ($(window).width() <= 991){
			$(".wow").removeClass("wow");
		}
	}

	/*===================================*
	 Smooth scrolling using jQuery easing
	*===================================*/
	function init_scroll() {
	    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function() {
	        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	            var target = $(this.hash);
	            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	            if (target.length) {
	                target.css('paddingTop','50px');
	                $('html, body').animate({
	                    scrollTop: (target.offset().top)
	                }, 1000, "easeInOutExpo");
	                return false;
	            }
	        }
	    });

		// Closes responsive menu when a scroll trigger link is clicked
		$('.js-scroll-trigger').on('click', function() {
			$('.navbar-collapse').collapse('hide');
		});

		$('.dropdown-toggle').on('click', function() {
			event.preventDefault();
		});

		$('.menu-item-has-children.dropdown > a').on('click', function() {
			event.preventDefault();
		});



		$('.dropdown-item').on('click', function() {
			$('.dropdown-menu').removeClass('show');
		});

		// Activate scrollspy to add active class to navbar items on scroll
		$('body').scrollspy({
			target: '#mainNav'
		});
	}




	/*===================================*
	 Steps Carousel
	*===================================*/
	function init_steps_carousel() {
		$('.js_steps_carousel').owlCarousel({
			loop: true,
			margin: 0,
			autoplay: true,
			nav:false,
			//navText: ["<a><span></span></a>","<a><span></span></a>"],
			autoHeight:true,
			dots: true,
			dotsData: true,
			//animateOut: 'slideOutUp',
			//animateIn: 'slideInUp',
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
	}

	/*===================================*
	 Team Carousel
	*===================================*/
	function init_team_carousel() {
		$('.js_team_member').owlCarousel({
			items: 4,
			loop: true,
			margin: 5,
			autoplay: true,
			nav:false,
			//navText: ["<a><span></span></a>","<a><span></span></a>"],
			autoHeight:true,
			dots: true,
			//animateOut: 'slideOutUp',
			//animateIn: 'slideInUp',
			responsive: {
				0: {items: 1, margin: 10},
				480: {items: 2, margin: 10, center: true},
				599: {items: 2,  margin: 10},
				768: {items: 3},
				1170: {items: 4}
			}
		});
	}

	
	/*===================================*
	 Advisory Board Carousel
	*===================================*/
	function init_advisory_board_carousel() {
		$('.js_advisory_board').owlCarousel({
			loop: true,
			margin: 0,
			autoplay: true,
			nav:false,
			//navText: ["<a><span></span></a>","<a><span></span></a>"],
			autoHeight:true,
			dots: true,
			dotsData: true,
			//animateOut: 'slideOutUp',
			//animateIn: 'slideInUp',
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
	}


	/*===================================*
	 Blog Post Carousel
	*===================================*/
	function init_post_carousel() {
		$('.js_post_carousel').owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			autoplay: true,
			nav:true,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			autoHeight:true,
			//animateOut: 'slideOutUp',
			//animateIn: 'slideInUp',
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
	}
	
	
	/*===================================*
	 Klb Class
	*===================================*/
	function init_klbclass() {
		$("form.wpcf7-form").addClass( "contact-form" );
		$("form.wpcf7-form input[type='text'], form.wpcf7-form textarea, form.wpcf7-form input[type='email']").addClass( "form-control" );
		$("form.wpcf7-form input[name='your-name'], form.wpcf7-form input[type='email']" ).closest('p').wrapAll( "<div class='row'></div>" );
		$("form.wpcf7-form input[name='your-name'], form.wpcf7-form input[type='email']" ).closest('p').wrap( "<div class='col-md-6'><div class='form-group'></div></div>" );
		$("form.wpcf7-form input[name='your-subject']" ).closest('p').wrap( "<div class='form-group '></div>" );
		$("form.wpcf7-form textarea" ).closest('p').wrap( "<div class='form-group'></div>" );
		$("form.wpcf7-form input[type='submit']").addClass( "btn btn-purple btn-pill text-uppercaset" );
		$("form.wpcf7-form input[type='submit']" ).closest('p').wrap( "<div class='text-center mt-md-5'></div>" );

		$("form.mc4wp-form input[type='email']").addClass( "form-control" );
		$("form.mc4wp-form").addClass( "subscribe-from" );
		$("form.mc4wp-form input[type='submit']").addClass( "btn w-100 text-uppercase btn-primary-solid" );

		$(".comment-form input[type='text'], .comment-form textarea, .comment-form input[type='email']").addClass( "form-control" );
		$(".comment-form input[type='submit']").addClass( "btn btn-purple" );
		
		$("input[type='password']").addClass( "form-control" );
		$(".post-password-form input[type='submit']").addClass( "btn btn-purple btn-pill text-uppercase" );
		
		$(".page img.alignleft[width='160']").closest("p").addClass( "klbclear" );
		
		$('a.lwa-links-register').on('click', function() {
		  $('#registerModal').modal('hide');
		});

		$(".lwa input[type='text'], .lwa textarea, .lwa input[type='email']").addClass( "form-control" );
		$(".lwa input[type='submit']").addClass( "btn btn-purple" );

	}


	/*===================================*
	 Popup Form
	*===================================*/
	function init_popupforms() {

        $(".signUpClick").on('click' , function() {  
            $('.signin-wrapper, .forgetpassword-wrapper').fadeOut(300);
            $('.signup-wrapper').delay(300).fadeIn();
        });
        
        $(".signInClick").on('click' , function() {  
            $('.forgetpassword-wrapper, .signup-wrapper').fadeOut(300);
            $('.signin-wrapper').delay(300).fadeIn();
        });
        
        $(".forgetPasswordClick").on('click' , function() { 
            $('.signup-wrapper, .signin-wrapper').fadeOut(300);
            $('.forgetpassword-wrapper').delay(300).fadeIn();
        });
        
        $(".cancelClick").on('click' , function() { 
            $('.forgetpassword-wrapper, .signup-wrapper').fadeOut(300);
            $('.signin-wrapper').delay(300).fadeIn();
        });
	}


	/*===================================*
	 Magnific Popup
	*===================================*/
	function init_magnific_popup() {
		$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
			disableOn: 700,
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	}



})(jQuery);