//TOP MENU
//variables declaration
let navSideMenu = document.querySelector('.nav-side-menu');
let caruselColumn = document.querySelector('#carusel-column');
let carusel = '';

function menuInteraction(){
    mouseHover(document.querySelector('.top-menu-list'), 'a');
    mouseHover(document.querySelector('#bottom-header-row'), 'div');
    document.onclick = function (event) {
        clickButton(event.target.id, true);
    }
}

function clickButton(button, state) {
    console.log("button pressed: " + button);
    scrollToTop();
    switch (button){
        case 'home':
            setTopMenu(document.querySelector('#home'));
            hideElement(document.querySelector('#side-menu'));
            showElement(document.querySelector('#fast-contact'));
            changeLayout(caruselColumn, carusel.outerHTML);
            pushHistory('home', state);
            break;
        case 'about':
            setTopMenu(document.querySelector('#about'));
            hideElement(document.querySelector('#side-menu'));
            showElement(document.querySelector('#fast-contact'));
            changeLayout(caruselColumn, aboutMe);
            pushHistory('about', state);
            break;
        case 'services':
            setTopMenu(document.querySelector('#services'));
            showElement(document.querySelector('#side-menu'));
            showElement(document.querySelector('#fast-contact'));
            changeLayout(caruselColumn, services);
            pushHistory('services', state);
            break;
        case 'events':
            setTopMenu(document.querySelector('#events'));
            hideElement(document.querySelector('#side-menu'));
            showElement(document.querySelector('#fast-contact'));
            changeLayout(caruselColumn, eventi);
            pushHistory('events', state);
            break;
        case 'theory-practice':
            setTopMenu(document.querySelector('#theory-practice'));
            hideElement(document.querySelector('#side-menu'));
            showElement(document.querySelector('#fast-contact'));
            pushHistory('theroyAndpractice', state);
            break;
        case 'contact':
            setTopMenu(document.querySelector('#contact'));
            hideElement(document.querySelector('#side-menu'));
            hideElement(document.querySelector('#fast-contact'));
            changeLayout(caruselColumn, contact);
            sendMail();
            myMap();
            pushHistory('contact', state);
            break;
        case 'fast-contact':
            fastContact();
            setTopMenu(document.querySelector('#contact'));
            hideElement(document.querySelector('#side-menu'));
            pushHistory('contact', state);
            break;
        case 'transactional':
            setTopMenu(document.querySelector('#services'));
            setServicesMenu(document.querySelector('#transactional'));
            changeLayout(caruselColumn, transactional);
            showElement(document.querySelector('#side-menu'));
            pushHistory('transactional', state);
            break;
        case 'emdr':
            setTopMenu(document.querySelector('#services'));
            setServicesMenu(document.querySelector('#emdr'));
            changeLayout(caruselColumn, emdr);
            showElement(document.querySelector('#side-menu'));
            pushHistory('emdr', state);
            break;
        case 'training':
            setTopMenu(document.querySelector('#services'));
            setServicesMenu(document.querySelector('#training'));
            changeLayout(caruselColumn, training);
            showElement(document.querySelector('#side-menu'));
            pushHistory('training', state);
            break;
        case 'relax':
            setTopMenu(document.querySelector('#services'));
            setServicesMenu(document.querySelector('#relax'));
            changeLayout(caruselColumn, relax);
            showElement(document.querySelector('#side-menu'));
            pushHistory('relax', state);
            break;
        case 'technique':
            setTopMenu(document.querySelector('#services'));
            setServicesMenu(document.querySelector('#technique'));
            changeLayout(caruselColumn, technique);
            showElement(document.querySelector('#side-menu'));
            pushHistory('technique', state);
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

function fastContact() {
    let button = document.querySelector('#fast-contact');
    if(button.style.display === 'none'){
        button.style.display = 'block';
    }else{
        button.style.display = 'none';
        navSideMenu.style.display = 'none';
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
