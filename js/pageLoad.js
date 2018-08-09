window.onload = function () {
    menuInteraction();
    carusel = document.getElementById('main-carusel-container');
    $('#carusel-container').css('height', 'auto');
    setMenuButton(document.querySelector('.top-menu-list'), document.querySelector('#home'));

    if(url !== ""){
        switch (url){
            case '/home':
                clickButton('home', false);
                break;
            case '/about':
                clickButton('about', false);
                break;
            case '/services':
                clickButton('services', false);
                break;
            case '/events':
                clickButton('events', false);
                break;
            case '/theory-practice':
                clickButton('theory-practice', false);
                break;
            case '/contact':
                clickButton('contact', false);
                break;
            case '/transactional':
                clickButton('transactional', false);
                break;
            case '/emdr':
                clickButton('emdr', false);
                break;
            case '/training':
                clickButton('training', false);
                break;
            case '/relax':
                clickButton('relax', false);
                break;
            case '/technique':
                clickButton('technique', false);
                break;
            case '/emdr_le8fasideltrattamento':
                articlesHistory('EMDR: le 8 fasi del trattamento', true)
                break;
            case '/coppiechefunzionanobenevscoppiedisfunzionali_10indicatori':
                articlesHistory('Coppie che funzionano bene VS coppie disfunzionali: 10 indicatori', true);
                break;
            case '/autobiografiaincinquebrevicapitoli':
                articlesHistory('Autobiografia in cinque brevi capitoli', true);
                break;
            default:
                clickButton('home', false);
        }
        url = '';
    }

    window.addEventListener('popstate', function () {
        let button = location.pathname.split('/').pop();
        if (button === 'home' || button === 'services' || button === 'about' || button === 'contact' || button === 'events'
            || button === 'theory-practice' || button === 'transactional' || button === 'emdr' || button === 'training'
            || button === 'relax' || button === 'technique') {
            clickButton(button, false);
            document.querySelector('.navbar-expand-md').style.display = 'flex';
            if (window.innerWidth > 991)
                showHideElement(document.querySelector('.top-header'), 'show');
            else if (window.innerWidth < 767) {
                showHideElement(document.querySelector('.top-header'), 'hide');
                document.querySelector('.top-menu-button').style.display = 'block';
            }
            document.querySelector('body').style.overflow = 'auto';
        } else {
            document.querySelector('.navbar-expand-md').style.display = 'flex';
            if(window.innerWidth > 992) {
                showHideElement(document.querySelector('.top-header'), 'show');
            }
            else if(window.innerWidth < 992)
                showHideElement(document.querySelector('.top-header'), 'hide');
            openArticle(button.replace(/_/g, ':'));
            showHideElement(document.querySelector('#main-right-column'), 'hide');
            resizeMainPage('large');
            setMenuButton(document.querySelector('.top-menu-list'), document.querySelector('#theory-practice'));
            pushHistory(button.replace(/:/g, '_').replace(/\s/g, '').toLowerCase(), false);
            document.querySelector('body').style.overflow = 'auto';
        }
    });

    populateCloud();

    document.querySelector('#carusel-column').classList.remove('col-md-9');
    document.querySelector('#carusel-column').classList.add('col-md-12');

    window.onresize = function () {
        let immageColumn;
        if (document.querySelector('#articles') !== null && window.innerWidth >= 576) {
            immageColumn = document.querySelectorAll('#article-immage-column');
            immageColumn.forEach(function (elem) {
                if (elem.style.display === 'none')
                    showHideElement(elem, 'show');
            });
        } else if (document.querySelector('#articles') !== null && window.innerWidth < 576) {
            immageColumn = document.querySelectorAll('#article-immage-column');
            immageColumn.forEach(function (elem) {
                if (elem.style.display !== 'none')
                    showHideElement(elem, 'hide');
            });
        }

        if (window.innerWidth > 768){
            document.querySelector('.top-menu-button').style.display = 'none';
            document.querySelector('#carusel-column').classList.remove('col-md-9');
            document.querySelector('#carusel-column').classList.add('col-md-12');
        }
        //TODO questi if window.width devo creare un metodo e raggruparli in modo logico
        else if(window.innerWidth < 767)
            document.querySelector('.top-menu-button').style.display = 'block';

        if(window.innerWidth > 992) {
            showHideElement(document.querySelector('.top-header'), 'show');
        }
        else if(window.innerWidth < 992)
            showHideElement(document.querySelector('.top-header'), 'hide');
    }

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
                    addCarousel(article.title, article.description, article.images_path, article.file_path);
                });
                loadSlider();
            }
        }
    )
}

function articlesHistory(name, state) {
    openArticle(name);
    showHideElement(document.querySelector('#main-right-column'), 'hide');

    resizeMainPage('large');
    setMenuButton(document.querySelector('.top-menu-list'), document.querySelector('#theory-practice'));
    pushHistory(name.replace(/:/g, '_').replace(/\s/g, '').toLowerCase(), state);
}