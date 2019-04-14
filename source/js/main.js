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
        $('.main-header').addClass('main-header--white');
    });

	
});