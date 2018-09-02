<?php

require_once 'cs_interaction.php';
require_once 'helpers.php';


class get_article_by_title extends cs_interaction
{
    private $title, $result;

    protected function input_elaboration(){
        $this->title = $this->validate_string('title');
    }

    protected function get_db_informations(){

        $connection = $this->get_connection();

        $this->result = $connection->get_article_by_title($this->title);

        if(is_error($this->result))
            $this->json_error("Errore sconosciuto");
    }

    protected function get_returned_data(){
        return $this->result;
    }
}

$articleByTitle = new get_article_by_title();
$articleByTitle->execute();