document.querySelector('#login').onclick = function () {
  $('#loginModal').modal();
};

let form = document.querySelector('#loginForm');
form.onsubmit = function (event) {
    event.preventDefault();
    let formInput = new FormData(form);

    let promise = httpPost('php/ajax/login.php', formInput);
    promise.then(
        function (data) {
            if(data.result){
                $('#loginModal').modal('hide');
                window.location.replace('../administration.php');
            } else {
                let formMessage = document.querySelector('#formMsgLogin');
                formMessage.innerHTML = "";
                formMessage.innerHTML = data.message;
            }
        }
    )
};
