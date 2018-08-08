//TOP MENU
//variables declaration
let navSideMenu = document.querySelector('.nav-side-menu');
let caruselColumn = document.querySelector('#carusel-column');
let carusel = '';

function menuInteraction(){
    mouseHover(document.querySelector('.top-menu-list'), 'a');
    mouseHover(document.querySelector('#bottom-header-row'), 'div');
    mouseHover(document.querySelector('#linkedin'), 'img');
    mouseHover(document.querySelector('#facebook'), 'div');
    document.onclick = function (event) {
        if(event.target.classList.contains('article-row')) {
            articlesHistory(event.target.getAttribute('data-name'), true);
        }else if(event.target.classList.contains('carusel-paragraph')){
            document.querySelector('.navbar-expand-md').style.display = 'flex';
            if(window.innerWidth > 992)
                showHideElement(document.querySelector('.top-header'), 'show');
            articlesHistory(event.target.getAttribute('data-name'), true);
            document.querySelector('body').style.overflow = 'auto';
        }else
            clickButton(event.target.id, true);
    }
}

function clickButton(button, state) {
    console.log("button pressed: " + button);

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
            scrollToTop();
            pushHistory(button, state);
            facebookRefresh();
            document.querySelector('.right-col-profile-image-footer').innerHTML = "<p class='gray-text font-large'>" +
                "LA VITA É UN <b class='porpora-text'>VIAGGIO</b> NON UNA <b class='porpora-text'>DESTINAZIONE</b></p>"
            break;
        case 'about':
            setTopMenu(document.querySelector('#about'));
            changeLayout(caruselColumn, aboutMe);
            scrollToTop();
            pushHistory(button, state);
            document.querySelector('.right-col-profile-image-footer').innerHTML = "<p class='gray-text font-large'>" +
                "NON VEDIAMO LE COSE PER COME <b class='porpora-text'>SONO</b> MA PER COME <b class='porpora-text'>SIAMO</b></p>"
            break;
        case 'services':
            setTopMenu(document.querySelector('#services'));
            changeLayout(caruselColumn, services);
            scrollToTop();
            pushHistory(button, state);
            document.querySelector('.right-col-profile-image-footer').innerHTML = "<p class='gray-text font-large'>SE " +
                "<b class='porpora-text'>SAI</b> DI <b class='porpora-text'>NON SAPERE</b>, SAI GIA' MOLTO</p>"
            break;
        case 'events':
            setTopMenu(document.querySelector('#events'));
            changeLayout(caruselColumn, eventi);
            scrollToTop();
            pushHistory(button, state);
            document.querySelector('.right-col-profile-image-footer').innerHTML = "<p class='gray-text font-large'>" +
                "LA VERA FORZA NON SI MISURA DA CHI HAI <b class='porpora-text'>SCONFITTO</b>, MA DA COSA HAI <b class='porpora-text'>PROTETTO</b></p>"
            break;
        case 'theory-practice':
            setTopMenu(document.querySelector('#theory-practice'));
            showHideElement(document.querySelector('#main-right-column'), 'hide');
            resizeMainPage('large');
            changeLayout(caruselColumn, theoryAndPractice);
            createPage();
            scrollToTop();
            pushHistory(button, state);
            break;
        case 'contact':
            setTopMenu(document.querySelector('#contact'));
            changeLayout(caruselColumn, contact);
            sendMail();
            myMap();
            scrollToTop();
            pushHistory(button, state);
            document.querySelector('.right-col-profile-image-footer').innerHTML = "<p class='gray-text font-large'>" +
                "HO PAURA DELLE MIE <b class='porpora-text'>SENSAZIONI</b>, DICONO SEMPRE LA <b class='porpora-text'>VERITA'</b></p>"
            break;
        case 'fast-contact':
            clickButton('contact', true);
            break;
        case 'transactional':
            setTopMenu(document.querySelector('#services'));
            setServicesMenu(document.querySelector('#transactional'));
            changeLayout(caruselColumn, transactional);
            scrollToTop();
            pushHistory(button, state);
            break;
        case 'emdr':
            setTopMenu(document.querySelector('#services'));
            setServicesMenu(document.querySelector('#emdr'));
            changeLayout(caruselColumn, emdr);
            scrollToTop();
            pushHistory(button, state);
            break;
        case 'training':
            setTopMenu(document.querySelector('#services'));
            setServicesMenu(document.querySelector('#training'));
            changeLayout(caruselColumn, training);
            scrollToTop();
            pushHistory(button, state);
            break;
        case 'relax':
            setTopMenu(document.querySelector('#services'));
            setServicesMenu(document.querySelector('#relax'));
            changeLayout(caruselColumn, relax);
            scrollToTop();
            pushHistory(button, state);
            break;
        case 'technique':
            setTopMenu(document.querySelector('#services'));
            setServicesMenu(document.querySelector('#technique'));
            changeLayout(caruselColumn, technique);
            scrollToTop();
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
        case 'banner':
            clickButton('home', true);
            break;
        case 'facebook':
            window.open('https://www.facebook.com/psicologaatgenova/', '_blank');
            break;
        case 'linkedin':
            window.open('https://www.linkedin.com/in/simona-bettoli-738435128', '_blank');
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
        default:
            //TODO trovare un modo piu furbo per creare la cronologia degli articoli
            //openArticle(button.replace('_', ':'));
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
        category.getElementsByTagName('img')[0].src = "../img/default/freccia_up.png";
    }
    else {
        showHideElement(modelContainer, 'hide');
        category.getElementsByTagName('img')[0].src = "../img/default/freccia_down.png";
    }
}
