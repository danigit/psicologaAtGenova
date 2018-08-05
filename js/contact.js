function sendMail() {
    console.log(document.querySelector('#send-mail'));
    document.querySelector('#send-mail').onclick = function () {
        console.log('send clicked');
        if(document.getElementById('cbx').checked) {
            let formData = new FormData(document.querySelector('#contactForm'));
            let promise = httpPost('php/ajax/send_email.php', formData);

            promise.then(
                function (data) {
                    if (data.result)
                        showCentralModal('success', 'check', 'E-mail inviata', "L'e-mail è stata inviata con successo, riceverai una copia nella tua casella di posta e verrai ricontattato/a al più presto.");
                    else
                        showCentralModal('warning', 'warning', "Mail non inviata", data.message);
                }
            )
        }else{
            showCentralModal('warning', 'warning', "Mail non inviata", "E' necessario acconsentire al trattamento dei dati");
        }
    };
}