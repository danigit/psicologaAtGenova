window.onload = function () {
    menuInteraction();
    carusel = document.getElementById('main-carusel-container');
    setTopMenu(document.querySelector('#home'));

    if(url !== ""){
        console.log(url);
        switch (url){
            case '/psicologaAtGenova/home':
                clickButton('home', false);
                break;
            case '/psicologaAtGenova/about':
                clickButton('about', false);
                break;
            case '/psicologaAtGenova/services':
                clickButton('services', false);
                break;
            case '/psicologaAtGenova/events':
                clickButton('events', false);
                break;
            case '/psicologaAtGenova/theory-practice':
                clickButton('theory-practice', false);
                break;
            case '/psicologaAtGenova/contact':
                clickButton('contact', false);
                break;
            case '/psicologaAtGenova/transactional':
                clickButton('transactional', false);
                break;
            case '/psicologaAtGenova/emdr':
                clickButton('emdr', false);
                break;
            case '/psicologaAtGenova/training':
                clickButton('training', false);
                break;
            case '/psicologaAtGenova/relax':
                clickButton('relax', false);
                break;
            case '/psicologaAtGenova/technique':
                clickButton('technique', false);
                break;
            case '/psicologaAtGenova/emdr_le8fasideltrattamento':
                openArticle('emdr:le8fasideltrattamento');
                showHideElement(document.querySelector('#main-right-column'), 'hide');
                resizeMainPage('large');
                setTopMenu(document.querySelector('#theory-practice'));
                break;
            default:
                clickButton('home', false);
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