<?php

require_once 'cs_interaction.php';
require_once 'helpers.php';


class get_all_articles extends cs_interaction
{
    private $result;

    protected function input_elaboration(){}

    protected function get_db_informations(){

        $connection = $this->get_connection();
        $this->result = $connection->get_all_articles();

        if(is_error($this->result))
            $this->json_error("Errore sconosciuto");
    }

    protected function get_returned_data(){
        return array('articles' => $this->result);
    }
}

$value = new get_all_articles();
$value->execute();