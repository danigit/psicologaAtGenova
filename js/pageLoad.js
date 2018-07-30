window.onload = function () {
    menuInteraction();
    document.querySelector('.right-col-profile-image-footer').innerHTML = "<p class='gray-text font-large'>LA VITA É UN <b class='porpora-text'>VIAGGIO</b> NON UNA <b class='porpora-text'>DESTINAZIONE</b></p>"
    carusel = document.getElementById('carusel-column');
    setTopMenu(document.querySelector('#home'));

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
        clickButton(button, false);
    });

    populateCloud();
};

function populateCloud() {
    $('#cloud').jQCloud(words, {
        shape: 'elliptic',
        autoResize:true
    });
}

function loadSliderContent() {
    let promise = httpPost('php/ajax/get_all_articles.php', '');
    promise.then(
        function (data) {
            if(data.result){
                let i = 0;
                Array.from(data.articles).forEach(function (article) {
                    addCarousel(article.title, article.description, article.images_path);
                });
                loadSlider();
            }
        }
    )
}