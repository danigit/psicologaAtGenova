document.querySelector('#login').onclick = function () {
  $('#loginModal').modal();
};

document.querySelector('#loginForm').onsubmit = function (event) {
    event.preventDefault();
    let formInput = new FormData(document.querySelector('#loginForm'));

    let promise = httpPost('php/ajax/login.php', formInput);
    promise.then(
        function (data) {
            if(data.result){
                $('#loginModal').modal('hide');
                window.location.replace('../psicologaAtGenova/administration.php');
            } else {
                console.log('receving message: ' + data.message);
                let formMessage = document.querySelector('#formMsgLogin');
                formMessage.innerHTML = "";
                formMessage.innerHTML = data.message;
            }
        }
    )
};
