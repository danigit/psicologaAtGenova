
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