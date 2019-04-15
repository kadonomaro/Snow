$(document).ready(function () {
    //init slider
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

    $(window).scroll(function () { 
        $('.main-header').addClass('main-header--light');
        $('.logo__img').attr('src', './image/logo.svg');
	});
	
	$.each($('[data-filter]'), function (indexInArray, valueOfElement) { 
		$(this).click(function () {
			// console.log($(this).text());
      var elem = $('[data-type=' + $(this).text() + ']');
			$('[data-type=' + $(this).text() + ']').each(function (index, element) {
				// console.log($(this));
				$('[data-type]').each(function () {
					if ($(this).data('type') !== elem.data('type')) {
            $(this).hide(1000);
            // var that = $(this);
            // setTimeout(function () {
            //   $(that).hide(1000);
            // },500);
					}
        });
				elem.show(1200);
			});

		});
	});

    // $('.js-filter').click(function (evt) { 
    // 	evt.preventDefault();
      
    //   	$.each($('[data-type="print"]'), function (indexInArray, valueOfElement) { 
	// 		$(this).fadeOut();
	
    //   	});
      
    // });
	
});