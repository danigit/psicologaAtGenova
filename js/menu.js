//TOP MENU
//variables declaration
// let navSideMenu = document.querySelector('.nav-side-menu');
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
    switch (button){
        case 'home':
        case 'about':
        case 'services':
        case 'events':
        case 'contact':
        case 'transactional':
        case 'emdr':
        case 'training':
        case 'relax':
        case 'techmique':
            if(document.querySelector('#carusel-column').classList.contains('col-lg-12')){
                resizeMainPage('small');
                showHideElement(document.querySelector('#main-right-column'), 'show');
            }
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
            setMenuButton(document.querySelector('.top-menu-list'), document.querySelector('#' + button));
            changeLayout(caruselColumn, carusel.outerHTML);
            loadSliderContent();
            populateCloud();
            scrollToTop();
            pushHistory(button, state);
            document.querySelector('.right-col-profile-image-footer').innerHTML = "<p class='gray-text font-large'>" +
                "NON VEDIAMO LE COSE PER COME <b class='porpora-text'>SONO</b> MA PER COME <b class='porpora-text'>SIAMO</b> <br> - A. Nin - </p>";
            break;
        case 'about':
            setMenuButton(document.querySelector('.top-menu-list'), document.querySelector('#' + button));
            changeLayout(caruselColumn, aboutMe);
            scrollToTop();
            pushHistory(button, state);
            document.querySelector('.right-col-profile-image-footer').innerHTML = "<p class='gray-text font-large'>" +
                "DIMMI, COSA PENSI DI FARE DELLA TUA <b class='porpora-text'>UNICA</b> E <b class='porpora-text'>PREZIOSA</b> VITA SELVAGGIA<br> - M. Oliver - </p>";
            break;
        case 'services':
            setMenuButton(document.querySelector('.top-menu-list'), document.querySelector('#' + button));
            changeLayout(caruselColumn, services);
            scrollToTop();
            pushHistory(button, state);
            document.querySelector('.right-col-profile-image-footer').innerHTML = "<p class='gray-text font-large'>- E' GRAVE ESSERE " +
                "<b class='porpora-text'>DIVERSI</b>?<br>- E' GRAVE SFORZARSI DI ESSERE <b class='porpora-text'>UGUALI</b><br> - P. Cohelo - </p>";
            break;
        case 'events':
            setMenuButton(document.querySelector('.top-menu-list'), document.querySelector('#' + button));
            changeLayout(caruselColumn, eventi);
            scrollToTop();
            pushHistory(button, state);
            document.querySelector('.right-col-profile-image-footer').innerHTML = "<p class='gray-text font-large'>" +
                "NON IMPOSSESSARSI DEL <b class='porpora-text'>PROGETTO</b> DELLA PROPRIA VITA SIGNIFICA FARE DELLA PROPRIA ESISTENZA UN <b class='porpora-text'>ACCIDENTE</b><br> - I.D. Yalom - </p>";
            break;
        case 'theory-practice':
            setMenuButton(document.querySelector('.top-menu-list'), document.querySelector('#' + button));
            showHideElement(document.querySelector('#main-right-column'), 'hide');
            resizeMainPage('large');
            changeLayout(caruselColumn, theoryAndPractice);
            createPage();
            scrollToTop();
            pushHistory(button, state);
            break;
        case 'contact':
            setMenuButton(document.querySelector('.top-menu-list'), document.querySelector('#' + button));
            changeLayout(caruselColumn, contact);
            sendMail();
            myMap();
            scrollToTop();
            pushHistory(button, state);
            document.querySelector('.right-col-profile-image-footer').innerHTML = "<p class='gray-text font-large'>" +
                "CI SONO SEMPRE DUE SCELTE NELLA VITA: <b class='porpora-text'>ACCETTARE</b> LE CONDIZIONI IN CUI VIVIAMO O ASSUMERSI LA <b class='porpora-text'>RESPONSABILITA'</b> DI CAMBIARLE<br> - D. Waitley -</p>";
            break;
        case 'fast-contact':
            clickButton('contact', true);
            break;
        case 'transactional':
            setMenuButton(document.querySelector('.top-menu-list'), document.querySelector('#services'));
            setMenuButton(document.querySelector('#services-menu'), document.querySelector('#transactional'));
            changeLayout(caruselColumn, transactional);
            scrollToTop();
            pushHistory(button, state);
            break;
        case 'emdr':
            setMenuButton(document.querySelector('.top-menu-list'), document.querySelector('#services'));
            setMenuButton(document.querySelector('#services-menu'), document.querySelector('#emdr'));
            changeLayout(caruselColumn, emdr);
            scrollToTop();
            pushHistory(button, state);
            break;
        case 'training':
            setMenuButton(document.querySelector('.top-menu-list'), document.querySelector('#services'));
            setMenuButton(document.querySelector('#services-menu'), document.querySelector('#training'));
            changeLayout(caruselColumn, training);
            scrollToTop();
            pushHistory(button, state);
            break;
        case 'relax':
            setMenuButton(document.querySelector('.top-menu-list'), document.querySelector('#services'));
            setMenuButton(document.querySelector('#services-menu'), document.querySelector('#relax'));
            changeLayout(caruselColumn, relax);
            scrollToTop();
            pushHistory(button, state);
            break;
        case 'technique':
            setMenuButton(document.querySelector('.top-menu-list'), document.querySelector('#services'));
            setMenuButton(document.querySelector('#services-menu'), document.querySelector('#technique'));
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

function setMenuButton(menu, button) {
    let children = Array.prototype.slice.call(menu.children);

    if(menu.classList.contains('top-menu-list')){
        let navbar = document.querySelector('#navbarCollapse');
        if(navbar.classList.contains('show'))
            navbar.classList.remove('show');
        children.forEach(function (child) {
            let elem = child.getElementsByTagName('a');
            if(elem[0].classList.contains('top-menu-button-pressed'))
                elem[0].classList.remove('top-menu-button-pressed');
        });

        button.classList.add('top-menu-button-pressed');
    }else{
        children.forEach(function (child) {
            if(child.classList.contains('pressed'))
                child.classList.remove('pressed');
        });
        button.classList.add('pressed');
    }
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
