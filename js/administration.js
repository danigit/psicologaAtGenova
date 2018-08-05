//TODO remove messages and clean modal if is not successfull

let string = '';

document.querySelector('#insert').onclick = function () {
    resetModal();
    if(document.querySelector('.fr-box').classList.contains('fr-code-view')){
        $('#modalInsertArticle').modal();
        Array.from(document.querySelectorAll('.CodeMirror-line')).forEach(function (line) {
            console.log('line: ' + line);
            string += line.textContent;
        })
    }else{
        showCentralModal( 'warning', 'warning', "Il testo deve essere prima formatato", "Eseguire la formatazione premendo il tasto \'&lt;&#47;&gt;\'");
    }
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
    let form = document.querySelector('#insertArticleForm');
    document.querySelector('#content').value = string;
    let formInput = new FormData(form);
    let fileTypeOk = true;
    Array.from(document.querySelector('#fileUpload').files).forEach(function (file) {
        if(file.name.split('.').pop() !== 'jpg') {
            fileTypeOk = false;
           formMessage.innerHTML = '';
           formMessage.innerHTML = 'Puoi caricare solo file in formato \'jpg\'';
        }
    });

    if(fileTypeOk) {
        let promise = httpPost('php/ajax/insert_article.php', formInput);
        promise.then(
            function (data) {
                if (data.result) {
                    $('#modalInsertArticle').modal('hide');
                    showCentralModal('success', 'check', 'Articolo inserito', "L'articolo e' stato inserito correttamente");
                    resetForm(document.querySelector('#insertArticleForm'));
                }
                else {
                    formMessage.innerHTML = '';
                    formMessage.innerHTML = data.message;
                }
            }
        )
    }
};

function resetModal() {
    let formMessage = document.querySelector('#formMsgInsertArticle');
    formMessage.innerHTML = '';
    let form = document.querySelector('#insertArticleForm');
    Array.from(form).forEach(function (item) {
        if(item.classList.contains('form-control'))
            item.value = '';
    })
}