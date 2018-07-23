document.querySelector('#insert').onclick = function () {
    $('#modalInsertArticle').modal();
};

document.querySelector('#logout').onclick = function() {
  let promise = httpPost('php/ajax/logout.php', '');
  promise.then(
      function (data) {
          if (data.result){
              window.location.replace('index.php');
          }
      }
  )
};

document.querySelector('#insertArticleForm').onsubmit = function (event) {
    event.preventDefault();

    let formMessage = document.querySelector('#formMsgInsertArticle');
    let formInput = new FormData(document.querySelector('#insertArticleForm'));
    let fileExtension = document.querySelector('input[type=file]').split('.').pop();
    console.log('file extension: ' + fileExtension);

    if(!(fileExtension === 'jpg')){
      formMessage.innerHTML = '';
      formMessage.innerHTML = 'Puoi caricare solo file in formato \'jpg\'';
    }else {
        let promise = httpPost('php/ajax/insert-articel.php', formInput);
        promise.then(
            function (data) {
                if(data.result){
                    $('#modalInsertArticle').modal('hide');
                    showCentralModal('success', 'check', 'Articolo inserito', "L'articolo e' stato inserito correttamente");
                    resetForm(document.querySelector('#insertArticleForm'));
                }
                else{
                    formMessage.innerHTML = '';
                    formMessage.innerHTML = data.message;
                }
            }
        )
    }
};


function showCentralModal(type, icon, title, text) {

    let centralModal = document.querySelector('#centralModal');
    let centralModalDialog = document.querySelector('#centralModalDialog');
    let centralModalIcon = document.querySelector('#centralModalIcon');
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
    centralModalIcon.classList.add(faIcon);
    centralModalTitle.innerHTML = '';
    centralModalTitle.innerHTML = title;
    centralModalText.innerHTML = '';
    centralModalText.innerHTML = text

    setTimeout(function(){
        centralModal.modal('show');
    }, 500);
}