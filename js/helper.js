
function hideElement(elem) {
    elem.style.display = 'none';
}

function showElement(elem) {
    elem.style.display = 'block';
}

function mouseHover(element, tag) {
    let childrens = Array.prototype.slice.call(element.children);
    childrens.forEach(function (child) {
        changePointer(child.getElementsByTagName(tag)[0])
    });
    changePointer(document.querySelector('#fast-contact'));
}

function changePointer(elem) {
    elem.onmouseenter = function(){
        elem.style.cursor = 'pointer';
        elem.style.color = '#0099FF';
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
