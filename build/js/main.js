$(document).ready(function () {
    //init sliders
    $('.js-reviews-slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    
    $('.js-partners-slider').slick({
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              	breakpoint: 1023,
              	settings: {
                	slidesToShow: 3,
                	slidesToScroll: 1,
              }
            },
            {
              	breakpoint: 600,
              	settings: {
                	slidesToShow: 2,
                	slidesToScroll: 1
              }
            }]
    });
    
    $('.js-blog-slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                	slidesToShow: 2,
                	slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                	slidesToShow: 1,
                	slidesToScroll: 1
              }
            }]
    });
    

    $('.js-menu-toggle').click(function (evt) { 
        evt.preventDefault();
        $(this).toggleClass('main-nav-toggle--active');
        $('.main-nav').toggleClass('main-nav--active');
    });

  
  /* change header after scroll */
	$(window).scroll(function () {
			
		if ($('.page').hasClass('js-main-page')) {
			if ($(this).scrollTop() >= 1) {
				$('.main-header').addClass('main-header--light');
				$('.main-nav').addClass('main-nav--light');
				$('.logo__img').attr('src', './image/logo.svg');
			} else {
				$('.main-header').removeClass('main-header--light');
				$('.main-nav').removeClass('main-nav--light');
				$('.logo__img').attr('src', './image/logo-light.svg');
			}
		}

	});
	
	
	if ($('.page').hasClass('js-other-page')) {
		$('.main-header').addClass('main-header--light');
		$('.main-nav').addClass('main-nav--light');
		$('.logo__img').attr('src', './image/logo.svg');
	}
	
	/* show/hide filter button */
	$('.js-filter-toggle').click(function (evt) { 
		evt.preventDefault();
		$(this).siblings().slideToggle(500);

	});
	
	
  /* filter portfolio items */
	$.each($('[data-filter]'), function () {

		$(this).on('click tap', function (evt) {
			evt.preventDefault();
			if ($(this).data('filter') === 'all') {
				$('[data-type]').each(function () {
					$(this).slideDown(900);
					// $(this).show(900);
        		});
			} else {
				var filterElement = $('[data-type=' + $(this).text() + ']');
				filterElement.each(function () {
					$('[data-type]').each(function () {
						if ($(this).data('type') !== filterElement.data('type')) {
							$(this).slideUp(700);
							// $(this).hide(700);
						}
					});
					filterElement.slideDown(900);
					// filterElement.show(900);
				});
			}
		});

	});


	/* scroll to 2nd screen */
	$('.js-scroll-down').click(function (evt) {
		evt.preventDefault();
		$('html').scrollTop(window.innerHeight - $('.main-header').height());
	});


	/* custom placeholder with animation */
	$('.js-input').focus(function (evt) { 
		evt.preventDefault();
		$(this).next('span').addClass('contacts-form__placeholder--active');
	});

	$('.js-input').blur(function (evt) { 
		evt.preventDefault();
		if ($(this).val() === '') {
			$(this).next('span').removeClass('contacts-form__placeholder--active');
		}
		
	});


	
});

