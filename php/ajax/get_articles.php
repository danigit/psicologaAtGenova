<?php

require_once 'cs_interaction.php';
require_once 'helpers.php';


class get_articles extends cs_interaction
{
    private $type, $result;

    protected function input_elaboration(){
        $this->type = $this->validate_string('type');
    }

    protected function get_db_informations(){

        $connection = $this->get_connection();

        $this->result = $connection->get_articles($this->type);

        if(is_error($this->result))
            $this->json_error("Errore sconosciuto");
    }

    protected function get_returned_data(){
        return array('data' => $this->result);
    }
}

$value = new get_articles();
$value->execute();