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
    });
    
    $('.js-blog-slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    });
    

    $('.js-menu-toggle').click(function (evt) { 
        evt.preventDefault();
        $(this).toggleClass('main-nav-toggle--active');
        $('.main-nav').toggleClass('main-nav--active');
        
    });
	
});