window.onload = function () {
    menuInteraction();
    document.querySelector('.right-col-profile-image-footer').innerHTML = "<p class='gray-text font-large'>LA VITA É UN <b class='porpora-text'>VIAGGIO</b> NON UNA <b class='porpora-text'>DESTINAZIONE</b></p>"
    carusel = document.getElementById('carusel-container');
    setTopMenu(document.querySelector('#home'));
    pushHistory('home', true);

    if(url != ''){
        console.log(url);
        switch (url){
            case '/home':
                clickButton('home-button');
                break;
            case '/about':
                clickButton('about-me-button');
                break;
            case '/services':
                clickButton('services');
                break;
            case '/events':
                clickButton('events');
                break;
            case '/theoryAndPractice':
                clickButton('theory-practice');
                break;
            case '/contact':
                clickButton('contact');
                break;
            case '/transactional':
                clickButton('transactional');
                break;
            case '/emdr':
                clickButton('emdr');
                break;
            case '/training':
                clickButton('training');
                break;
            case '/relax':
                clickButton('relax');
                break;
            case '/technique':
                clickButton('technique');
                break;
            default:
                clickButton('home');
        }
        url = '';
    }

    window.addEventListener('popstate', function () {
        let button = location.pathname.split('/').pop();
        console.log('button ' + button);
        clickButton(button, false);
    })
};