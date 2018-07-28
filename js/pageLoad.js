console.log('before load');
window.onload = function () {
    console.log('load');
    menuInteraction();
    document.querySelector('.right-col-profile-image-footer').innerHTML = "<p class='gray-text font-large'>LA VITA É UN <b class='porpora-text'>VIAGGIO</b> NON UNA <b class='porpora-text'>DESTINAZIONE</b></p>"
    carusel = document.getElementById('carusel-container');
    setTopMenu(document.querySelector('#home'));

    console.log('before url: ' + url);
    if(url !== ""){
        console.log(url);
        switch (url){
            case '/psicologaAtGenova/home':
                clickButton('home');
                break;
            case '/psicologaAtGenova/about':
                clickButton('about');
                break;
            case '/psicologaAtGenova/services':
                clickButton('services');
                break;
            case '/psicologaAtGenova/events':
                clickButton('events');
                break;
            case '/psicologaAtGenova/theoryAndPractice':
                clickButton('theory-practice');
                break;
            case '/psicologaAtGenova/contact':
                clickButton('contact');
                break;
            case '/psicologaAtGenova/transactional':
                clickButton('transactional');
                break;
            case '/psicologaAtGenova/emdr':
                clickButton('emdr');
                break;
            case '/psicologaAtGenova/training':
                clickButton('training');
                break;
            case '/psicologaAtGenova/relax':
                clickButton('relax');
                break;
            case '/psicologaAtGenova/technique':
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