<?php

require_once "../mailer/PHPMailerAutoload.php";
require_once "cs_interaction.php";
error_reporting(E_ALL);
ini_set('display_errors', 1);

class send_email extends cs_interaction
{
    private $name, $email, $object, $content;

    protected function input_elaboration(){
        $this->name = $this->validate_string("nome");
        if (!$this->name)
            $this->json_error("Il campo NOME è obbligatorio");

        $this->email = $this->validate_string( "email");
        if(!$this->email)
            $this->json_error("Il campo EMAIL è obbligatorio");

        if(!filter_var($this->email, FILTER_VALIDATE_EMAIL))
            $this->json_error("EMAIL non valida");

        $this->email = filter_var($this->email, FILTER_SANITIZE_EMAIL);

        $this->object = $this->validate_string( "oggetto");

        $this->content = $this->validate_string( "contenuto");
        if(!$this->content)
            $this->json_error("Il campo CONTENUTO è obbligatorio");
    }

    protected function get_db_informations(){
        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->Host = 'tls://smtp.gmail.com';
        $mail->Port = 587; //587; // 465;
        $mail->SMTPSecure = 'tls';
        $mail->SMTPAuth = true;
        $mail->Username = "psicologaatgenova@gmail.com";
        $mail->Password = "877330as";
        $mail->setFrom('psicologaatgenova@gmail.com', 'dot.ssa Simona Bettoli, PsicologaAtGenova');
        $mail->addAddress("psicologaatgenova@gmail.com");
        //$mail->addAddress($this->email);
        $mail->Subject = $this->object;
        $mail->msgHTML("Sei stata contattata da: <br><br> Nome: " . $this->name . "<br>Email: "  . $this->email . "<br><br><br><br>Contenuto email: <br>" . $this->content);
        if(!$mail->send()) //telnet smtp.aruba.it 587
            $this->json_error("Mail non spedita per motivo sconosciuto" . $mail->ErrorInfo );
    }

    protected function get_returned_data(){
        return array();
    }
}

$email = new send_email();
$email->execute();