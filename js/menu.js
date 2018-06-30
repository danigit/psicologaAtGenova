//TOP MENU
//variables declaration
let navSideMenu = document.querySelector('.nav-side-menu');

function menuInteraction(){
    document.onclick = function (event) {
        clickButton(event);
    }
}

function clickButton(event) {
    console.log("button pressed: " + event.target.id);
    switch (event.target.id){
        case 'home-button':
            setTopMenu(document.querySelector('#home-button'));
            hideRightMenu();
            break;
        case 'about-me-button':
            setTopMenu(document.querySelector('#about-me-button'));
            hideRightMenu();
            break;
        case 'services':
            setTopMenu(document.querySelector('#services'));
            showRightMenu();
            break;
        case 'events':
            setTopMenu(document.querySelector('#events'));
            hideRightMenu();
            break;
        case 'theory-practice':
            setTopMenu(document.querySelector('#theory-practice'));
            hideRightMenu();
            break;
        case 'contact':
            setTopMenu(document.querySelector('#contact'));
            hideRightMenu();
            break;
        case 'fast-contact':
            fastContact();
            setTopMenu(document.querySelector('#contact'));
            hideRightMenu();
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

function hideRightMenu() {
    let rightMenuContainer = document.querySelector('#side-menu').style.display = 'none';
}

function showRightMenu() {
    var rightMenuContainer = document.querySelector('#side-menu').style.display = 'block';
}
