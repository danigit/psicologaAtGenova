//TOP MENU
//variables declaration
let navSideMenu = document.querySelector('.nav-side-menu');
let caruselColumn = document.querySelector('#carusel-column');
let carusel = '';

function menuInteraction(){
    mouseHover(document.querySelector('.top-menu-list'), 'a');
    mouseHover(document.querySelector('#bottom-header-row'), 'div');
    document.onclick = function (event) {
        clickButton(event);
    }
}

function clickButton(event) {
    console.log("button pressed: " + event.target.id);
    switch (event.target.id){
        case 'home-button':
            setTopMenu(document.querySelector('#home-button'));
            hideElement(document.querySelector('#side-menu'));
            showElement(document.querySelector('#fast-contact'));
            changeLayout(caruselColumn, carusel.outerHTML);
            break;
        case 'about-me-button':
            setTopMenu(document.querySelector('#about-me-button'));
            hideElement(document.querySelector('#side-menu'));
            showElement(document.querySelector('#fast-contact'));
            changeLayout(caruselColumn, aboutMe);
            break;
        case 'services':
            setTopMenu(document.querySelector('#services'));
            showElement(document.querySelector('#side-menu'));
            showElement(document.querySelector('#fast-contact'));
            changeLayout(caruselColumn, services);
            break;
        case 'events':
            setTopMenu(document.querySelector('#events'));
            hideElement(document.querySelector('#side-menu'));
            showElement(document.querySelector('#fast-contact'));
            changeLayout(caruselColumn, eventi);
            break;
        case 'theory-practice':
            setTopMenu(document.querySelector('#theory-practice'));
            hideElement(document.querySelector('#side-menu'));
            showElement(document.querySelector('#fast-contact'));
            break;
        case 'contact':
            setTopMenu(document.querySelector('#contact'));
            hideElement(document.querySelector('#side-menu'));
            hideElement(document.querySelector('#fast-contact'));
            changeLayout(caruselColumn, contact);
            sendMail();
            myMap();
            break;
        case 'fast-contact':
            fastContact();
            setTopMenu(document.querySelector('#contact'));
            hideElement(document.querySelector('#side-menu'));
            break;
        case 'transactional':
            changeLayout(caruselColumn, transactional);
            break;
        case 'emdr':
            changeLayout(caruselColumn, emdr);
            break;
        case 'training':
            changeLayout(caruselColumn, training);
            break;
        case 'relax':
            changeLayout(caruselColumn, relax);
            break;
        case 'technique':
            changeLayout(caruselColumn, technique);
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
