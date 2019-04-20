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
		if ($(this).scrollTop() >= 1) {
			$('.main-header').addClass('main-header--light');
			$('.main-nav').addClass('main-nav--light');
			$('.logo__img').attr('src', './image/logo.svg');
		} else {
			$('.main-header').removeClass('main-header--light');
			$('.main-nav').removeClass('main-nav--light');
			$('.logo__img').attr('src', './image/logo-light.svg');
		}

	});
	
	$('.js-filter-toggle').click(function (evt) { 
		evt.preventDefault();
		$(this).siblings().slideToggle(500);

	});
	
	
  
  /* filter portfolio items */
	$.each($('[data-filter]'), function () { 
		$(this).click(function () {
			if ($(this).data('filter') === 'all') {
				$('[data-type]').each(function () {
					$(this).slideDown(1200);
        		});
			} else {
				var filterElement = $('[data-type=' + $(this).text() + ']');
				filterElement.each(function () {
					$('[data-type]').each(function () {
						if ($(this).data('type') !== filterElement.data('type')) {
							$(this).slideUp(1000);
						}
					});
					filterElement.slideDown(1200);
				});
			}

		});
	});

	/* scroll down */
	// $('.js-scroll-down').click(function () { 
	// 	$('html').animate({
	// 		scrollTop: window.innerHeight - $('.main-header').height()
	// 	},'slow');
	// });
	$('.js-scroll-down').click(function (evt) {
		evt.preventDefault();
		$('html').scrollTop(window.innerHeight - $('.main-header').height());
	});
	
});