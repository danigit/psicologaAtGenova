
function loadSlider() {
    //create the slider
    $('.cd-testimonials-wrapper').flexslider({
        selector: ".cd-testimonials > li",
        animation: "slide",
        controlNav: false,
        slideshow: false,
        smoothHeight: true,
        start: function () {
            $('.cd-testimonials').children('li').css({
                'opacity': 1,
                'position': 'relative'
            });
        }
    });

    //open the testimonials modal page
    $('.cd-see-all').on('click', function () {
        $('.cd-testimonials-all').addClass('is-visible');
        console.log('see all');
        showHideElement(document.querySelector('.navbar-expand-md'), 'hide');
        showHideElement(document.querySelector('.top-header'), 'hide');
        $('body').css('overflow', 'hidden');
    });

    //close the testimonials modal page
    $('.cd-testimonials-all .close-btn').on('click', function () {
        $('.cd-testimonials-all').removeClass('is-visible');
        showHideElement(document.querySelector('.navbar-expand-md'), 'show');
        showHideElement(document.querySelector('.top-header'), 'show');
        $('body').css('overflow', 'auto');
    });

    $(document).keyup(function (event) {
        //check if user has pressed 'Esc'
        if (event.which === '27') {
            $('.cd-testimonials-all').removeClass('is-visible');
        }
    });

    //build the grid for the testimonials modal page
    $('.cd-testimonials-all-wrapper').children('ul').masonry({
        itemSelector: '.cd-testimonials-item'
    });
}