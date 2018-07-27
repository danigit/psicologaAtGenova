<?php

require_once 'helpers.php';
require_once 'is_not_logged.php';

class login extends is_not_logged
{

    private $email;
    private $password;

    private $id;

    protected function input_elaboration()
    {
        $this->email = $this->validate_string('email');
        $this->email = filter_var($this->email, FILTER_SANITIZE_EMAIL);

        if(!$this->email)
            $this->json_error("Indirizzo email non valido");

        $this->password = $this->validate_string('password');
        if(!$this->password)
            $this->json_error("Inserire una password");
    }

    protected function get_db_informations()
    {
        $connection = $this->get_connection();

        $this->id = $connection->login($this->email, $this->password);

        if(is_error($this->id))
            $this->json_error("Username o password non validi");

        $username = $connection->get_username_by_id($this->id);

        set_session_variables($this->id, $username, true );

    }

    protected function get_returned_data()
    {
        $result = array();
        $result['username'] = $_SESSION['username'];
        $result['userid'] = get_user_id();

        return $result;
    }



}

$val = new login();
$val->execute();