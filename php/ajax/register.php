<?php
/**
 * Created by PhpStorm.
 * User: dani
 * Date: 9/19/17
 * Time: 9:16 PM
 */

require_once 'helpers.php';
require_once 'is_not_logged.php';


class register extends is_not_logged
{
    private $email;
    private $password;

    protected function input_elaboration()
    {
        $this->email = $this->validate_string('email');
        if(!filter_var($this->email, FILTER_VALIDATE_EMAIL))
            $this->json_error("Indirizzo email non valido");

        $this->email = filter_var($this->email, FILTER_SANITIZE_EMAIL);

        $this->password = $this->validate_string('password');
        if(!$this->password)
            $this->json_error("Inserire una password");
    }

    protected function get_db_informations()
    {
        $this->password = password_hash($this->password, PASSWORD_DEFAULT);

        $connection = $this->get_connection();
        $result = $connection->register($this->email, $this->password);

        $this->manage_db_errors($result);
    }

    protected function get_returned_data()
    {
        return array();
    }

    /**
     * Controlla se la variabile passata è di tipo DbError. Se lo è invia il rispettivo messaggio
     * di errore e termina gli script, altrimenti continua l'esecuzione
     *
     * @param DbError | mixed $error variabile da controllare
     */
    private function manage_db_errors($error){

        if(!is_error($error))
            return;

        $error = $error->getError();
        switch ($error):
            case DbError::$EMAIL_ALREADY_REGISTERED:
                $this->json_error("Email gia' registrata");
                break;
            default:
                $this->json_error("Errore durante il processo di registrazione");
        endswitch;
    }


}

$val = new register();
$val->execute();