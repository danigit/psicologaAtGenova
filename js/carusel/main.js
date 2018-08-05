
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
        document.querySelector('#main-right-column').style.zIndex = -1;
        let bottomContainer = document.querySelector('#bottom-header-row').children;
        console.log('header ' + bottomContainer.children);
        Array.from(bottomContainer).forEach(function (child) {
            console.log('child: ' + child);
            child.style.zIndex = -1;
        });
        $('body').css('overflow', 'hidden');
    });

    //close the testimonials modal page
    $('.cd-testimonials-all .close-btn').on('click', function () {
        $('.cd-testimonials-all').removeClass('is-visible');
        document.querySelector('.navbar-expand-md').style.display = 'flex';
        if(window.innerWidth > 991)
            showHideElement(document.querySelector('.top-header'), 'show');
        else if(window.innerWidth < 767){
            showHideElement(document.querySelector('.top-header'), 'hide');
            document.querySelector('.top-menu-button').style.display = 'block';
        }
        document.querySelector('#main-right-column').style.zIndex = 0;
        let bottomContainer = document.querySelector('#bottom-header-row');
        Array.from(bottomContainer).forEach(function (child) {
            child.style.zIndex = 0;
        });
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