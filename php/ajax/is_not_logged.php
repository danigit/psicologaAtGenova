<?php

require_once 'cs_interaction.php';

abstract class is_not_logged extends cs_interaction
{
    function __construct(){
        cs_interaction::__construct();

        if ($this->check_session())
            $this->json_error("L'utente e' gia' logato", 1);
    }

    protected function check_session(){
        if (!isset($_SESSION['id'], $_SESSION['secure'], $_SESSION['username']))
            return false;

        return true;
    }
}