function showHideElement(elem, action) {
    if(action === 'hide')
        elem.style.display = 'none';
    else
        elem.style.display = 'block';
}

function mouseHover(element, tag) {
    let childrens = Array.prototype.slice.call(element.children);
    childrens.forEach(function (child) {
        if(child.firstChild) {
            changePointer(child.getElementsByTagName(tag)[0], '#0099FF', '#808080');
        } else {
            changePointer(child, '#0099ff', '#808080');
        }
    });
    changePointer(document.querySelector('#fast-contact'), '#ffffff', '#ffffff');
}

function changePointer(elem, on, out) {
    elem.onmouseenter = function(){
        elem.style.cursor = 'pointer';
        elem.style.color = on;
    };
    elem.onmouseleave = function () {
        elem.style.color = out;
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
    form[0].reset();
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
    let elem = document.createElement('textarea');
    elem.innerHTML = value;
    return elem.textContent;
}


function decorateString(string) {
    let str;
    str = string.replace(/style="font-size: 48px/g, ' class="philosopher-font title" style="font-size: 48px');
    str = str.replace(/style="font-size: 24px/g, ' class="philosopher-font subtitle" style="font-size: 24px');
    str = str.replace(/<img/g, "<img style='border: 3px solid #0099FF; width: 100%!important'");
    str = str.replace(/<ul/g, "<ul class='ul-formatting'");
    str = str.replace(/<hr>/g, "<hr class='horizontal-line'>");
    str = str.replace(/<a/g, "<a style='color: #0099FF'");

    return str;
}

function resizePageInterraction(element, width) {

}