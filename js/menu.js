//TOP MENU
//variables declaration
let navSideMenu = document.querySelector('.nav-side-menu');
let caruselColumn = document.querySelector('#carusel-column');
let carusel = '';

function menuInteraction(){
    mouseHover(document.querySelector('.top-menu-list'), 'a');
    mouseHover(document.querySelector('#bottom-header-row'), 'div');
    document.onclick = function (event) {
        let butt = event.target;
        if(event.target.classList.contains('article-row')) {
            //theoryMouseEvents(butt.getAttribute('data-name'));
            openArticle(butt.getAttribute('data-name'));
        }
        else
            clickButton(event.target.id, true);
    }
}

function clickButton(button, state) {
    console.log("button pressed: " + button);
    scrollToTop();

    if((button === 'home' || button === 'about' || button === 'services' || button === 'events' || button === 'contact') &&
        document.querySelector('#carusel-column').classList.contains('col-lg-12')) {
        resizeMainPage('small');
        showHideElement(document.querySelector('#main-right-column'), 'show');
    }

    let fastContact = document.querySelector('#fast-contact');
    if(button === 'contact')
        showHideElement(fastContact, 'hide');
    else if(button === 'home' || button === 'about' || button === 'services' || button === 'events')
        showHideElement(fastContact, 'show');

    let sideMenu = document.querySelector('#side-menu');
    if((button === 'services' || button === 'transactional' || button === 'emdr' || button === 'training' || button === 'relax'
        || button === 'technique'))
        showHideElement(sideMenu, 'show');
    else if(button === 'home' || button === 'about' || button === 'events' || button === 'contact')
        showHideElement(sideMenu, 'hide');

    switch (button){
        case 'home':
            setTopMenu(document.querySelector('#home'));
            changeLayout(caruselColumn, carusel.outerHTML);
            loadSliderContent();
            populateCloud();
            pushHistory(button, state);
            break;
        case 'about':
            setTopMenu(document.querySelector('#about'));
            changeLayout(caruselColumn, aboutMe);
            pushHistory(button, state);
            break;
        case 'services':
            setTopMenu(document.querySelector('#services'));
            changeLayout(caruselColumn, services);
            pushHistory(button, state);
            break;
        case 'events':
            setTopMenu(document.querySelector('#events'));
            changeLayout(caruselColumn, eventi);
            pushHistory(button, state);
            break;
        case 'theory-practice':
            setTopMenu(document.querySelector('#theory-practice'));
            showHideElement(document.querySelector('#main-right-column'), 'hide');
            resizeMainPage('large');
            changeLayout(caruselColumn, theoryAndPractice);
            createPage();
            pushHistory(button, state);
            break;
        case 'contact':
            setTopMenu(document.querySelector('#contact'));
            changeLayout(caruselColumn, contact);
            sendMail();
            myMap();
            pushHistory(button, state);
            break;
        case 'fast-contact':
            fastContact();
            setTopMenu(document.querySelector('#contact'));
            changeLayout(caruselColumn, contact);
            pushHistory(button, state);
            break;
        case 'transactional':
            setTopMenu(document.querySelector('#services'));
            setServicesMenu(document.querySelector('#transactional'));
            changeLayout(caruselColumn, transactional);
            pushHistory(button, state);
            break;
        case 'emdr':
            setTopMenu(document.querySelector('#services'));
            setServicesMenu(document.querySelector('#emdr'));
            changeLayout(caruselColumn, emdr);
            pushHistory(button, state);
            break;
        case 'training':
            setTopMenu(document.querySelector('#services'));
            setServicesMenu(document.querySelector('#training'));
            changeLayout(caruselColumn, training);
            pushHistory(button, state);
            break;
        case 'relax':
            setTopMenu(document.querySelector('#services'));
            setServicesMenu(document.querySelector('#relax'));
            changeLayout(caruselColumn, relax);
            pushHistory(button, state);
            break;
        case 'technique':
            setTopMenu(document.querySelector('#services'));
            setServicesMenu(document.querySelector('#technique'));
            changeLayout(caruselColumn, technique);
            pushHistory(button, state);
            break;
        case 'models':
            articolsCategoryEvents('#models-container', document.querySelector('#models'));
            break;
        case 'couple':
            articolsCategoryEvents('#couple-container', document.querySelector('#couple'));
            break;
        case 'inspiration':
            articolsCategoryEvents('#inspiration-container', document.querySelector('#inspiration'));
            break;
        case 'cloud_word_1':
            clickButton('emdr', true);
            break;
        case 'cloud_word_0':
            clickButton('training', true);
            break;
        case 'bottom-contact-immage':
        case 'bottom-where-immage':
            clickButton('contact', true);
            break;
        case 'bottom-about-immage':
            clickButton('about', true);
            break;
        case 'bottom-services-immage':
            clickButton('services', true);
            break;
    }
}

function setTopMenu(button) {
    let children = Array.prototype.slice.call(document.querySelector('.top-menu-list').children);
    let navbar = document.querySelector('#navbarCollapse');

    if(navbar.classList.contains('show'))
        navbar.classList.remove('show');

    children.forEach(function (child) {
        let elem = child.getElementsByTagName('a');
        if(elem[0].classList.contains('top-menu-button-pressed'))
            elem[0].classList.remove('top-menu-button-pressed');
    });
    button.className += ' top-menu-button-pressed';
}

function setServicesMenu(button) {
    let children = Array.prototype.slice.call(document.querySelector('#services-menu').children);

    children.forEach(function (child) {
        console.log('child: ' + child);
        if(child.classList.contains('pressed'))
            child.classList.remove('pressed');
    });

    button.classList.add('pressed');
}

function articolsCategoryEvents(container, category) {
    let modelContainer = document.querySelector(container);
    if (modelContainer.style.display === 'none') {
        showHideElement(modelContainer, 'show');
        category.getElementsByTagName('img')[0].src = "../psicologaAtGenova/img/default/freccia_up.png";
    }
    else {
        showHideElement(modelContainer, 'hide');
        category.getElementsByTagName('img')[0].src = "../psicologaAtGenova/img/default/freccia_down.png"
    }
}
