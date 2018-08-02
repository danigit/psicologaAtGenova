function showHideElement(elem, action) {
    if(action === 'hide')
        elem.style.display = 'none';
    else
        elem.style.display = 'block';
}

function mouseHover(element, tag) {
    let childrens = Array.prototype.slice.call(element.children);
    childrens.forEach(function (child) {
        if(child.firstChild)
            changePointer(child.getElementsByTagName(tag)[0], '#0099FF');
        else
            changePointer(child);
    });
    changePointer(document.querySelector('#fast-contact'), '#6666CC');
}

function changePointer(elem, color) {
    elem.onmouseenter = function(){
        elem.style.cursor = 'pointer';
        elem.style.color = color;
    };
    elem.onmouseleave = function () {
        elem.style.color = "#808080"
    }
}

function changeLayout(element, content) {
    let childrens = [].slice.call(element.children);
    element.removeChild(childrens[0]);
    element.innerHTML = content;
}


function httpPost(url, input) {
    return new Promise(function (resolve, reject) {
        let httpReq = new XMLHttpRequest();

        httpReq.open('POST', url, true);
        httpReq.onreadystatechange = function () {
            if(httpReq.readyState === 4){
                if(httpReq.status === 200){
                    resolve(JSON.parse(httpReq.responseText));
                }else{
                    reject(httpReq.statusText);
                }
            }
        };
        httpReq.send(input);
    });
}

function resetForm(form){
    form[0].reset();blu
    form.find('label').classList.remove('active');
    form.find('i').classList.remove('active').css.color = '';
}

function showCentralModal(type, icon, title, text) {

    let centralModal = $('#centralModal');
    let centralModalDialog = document.querySelector('#centralModalDialog');
    let centralModalIcon = $('#centralModalIcon');
    let centralModalTitle = document.querySelector('#centralModalTitle');
    let centralModalText = document.querySelector('#centralModalText');

    let typeClass,
        faIcon = "fa fa-4x mb-1 animated rotateIn fa-" + icon;

    switch(type) {
        case 'info':
            typeClass = 'modal-info';
            break;

        case 'success':
            typeClass = 'modal-success';
            break;

        case 'danger':
            typeClass = 'modal-danger';
            break;

        case 'warning':
            typeClass = 'modal-warning';
            break;

        default:
            typeClass = 'info';
    }

    centralModalDialog.classList.add(typeClass);
    centralModalIcon.addClass(faIcon);
    centralModalTitle.innerHTML = '';
    centralModalTitle.innerHTML = title;
    centralModalText.innerHTML = '';
    centralModalText.innerHTML = text;

    setTimeout(function(){
        centralModal.modal('show');
    }, 500);
}

function pushHistory(historyStr, state) {
    if(state)
        history.pushState(null, null, historyStr);
}

let timeOut;
function scrollToTop() {
    if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0){
        window.scrollBy(0, -50);
        timeOut = setTimeout('scrollToTop()', 20);
    }
    else clearTimeout(timeOut);
}

function resizeMainPage(type) {
    let caruselColumn = document.querySelector('#carusel-column');
    switch (type){
        case 'large':
            caruselColumn.classList.remove('col-lg-9', 'col-md-9', 'col-sm-12');
            caruselColumn.classList.add( 'col-lg-12', 'col-md-12', 'col-sm-12');
            break;
        case 'small':
            caruselColumn.classList.remove( 'col-lg-12', 'col-md-12', 'col-sm-12');
            caruselColumn.classList.add('col-lg-9', 'col-md-9', 'col-sm-12');
    }

}

function decodeEntities(value){
    return $('<div/>').html(value).text();
}


function decorateString(string) {
    var position = 0;
    var str;
    str = string.replace(/<img/g, "<img style='border: 3px solid #0099FF; width: 100%!important'");
    str = str.replace(/<ul/g, "<ul class='activity-list ulist'");
    str = str.replace(/<hr>/g, "<hr class='horizontal-line'>");
    str = str.replace(/<a/g, "<a style='color: #0099FF'");
    str = str.replace('font-size: 48px', 'font-size: 48px; font-family: Philosopher');
    str = str.replace(/font-size: 30px/g, 'font-size: 30px; font-family: Philosopher');
    //console.log(str)

    return str;
}