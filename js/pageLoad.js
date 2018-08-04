window.onload = function () {
    menuInteraction();
    carusel = document.getElementById('main-carusel-container');
    setTopMenu(document.querySelector('#home'));

    if(url !== ""){
        console.log(url);
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

    document.querySelector('#carusel-column').classList.remove('col-md-9');
    document.querySelector('#carusel-column').classList.add('col-md-12');

    window.onresize = function () {
        let immageColumn;
        let content;
        if (document.querySelector('#articles') !== null && window.innerWidth >= 576){
            console.log('inside if');
            immageColumn = document.querySelectorAll('#article-immage-column');
            immageColumn.forEach(function (elem) {
                if(elem.style.display === 'none')
                    showHideElement(elem, 'show');
            });

            content = document.querySelectorAll('#article-logo');
            content.forEach(function (elem) {
                if(elem.style.display === 'none')
                    showHideElement(elem, 'show')
            })
        }else if(document.querySelector('#articles') !== null && window.innerWidth < 576){
            console.log('inside else');
            immageColumn = document.querySelectorAll('#article-immage-column');
            immageColumn.forEach(function (elem) {
                if(elem.style.display !== 'none')
                    showHideElement(elem, 'hide');
            });

            content = document.querySelectorAll('#article-logo');
            content.forEach(function (elem) {
                if(elem.style.display !== 'none')
                    showHideElement(elem, 'hide')
            })
        }
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
                    addCarousel(article.title, article.description, article.images_path);
                });
                loadSlider();
            }
        }
    )
}

function smallDevicesArticleListDisplay() {
    let immageColumn;
    let content;
    let mutationManager = function(mutationRecords) {
        mutationRecords.forEach(function (elem) {
            console.log('Elem id: ' + elem.target.id);
            if(window.innerWidth < 576 && elem.target.id === 'models-container'){
                immageColumn = document.querySelectorAll('#article-immage-column');
                content = document.querySelectorAll('#article-logo');
                immageColumn.forEach(function (elem) {
                    showHideElement(elem, 'hide');
                });

                content.forEach(function (elem) {
                    showHideElement(elem, 'hide')
                });
            }
        })
    };

    let observer = new MutationObserver(mutationManager);

    observer.observe(document.querySelector('#carusel-column'), { childList: true, subtree: true });
}