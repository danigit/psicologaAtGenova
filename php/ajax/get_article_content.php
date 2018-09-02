<?php
require_once "helpers.php";
require_once "cs_interaction.php";

class get_article_content extends cs_interaction
{
    private $title, $content;

    protected function input_elaboration(){
        $this->title = $this->validate_string('title');
        if(!$this->title)
            $this->json_error("Impossibile reccuperare il titolo dell'articolo: " . $this->title);
    }

    protected function get_db_informations(){

        $this->content = file_get_contents("../../articlesText/" . $this->title . '.txt');

        if(is_error($this->content))
            $this->json_error("Errore sconosciuto");

    }

    protected function get_returned_data(){
        return array("content" => $this->content);
    }
}

$get_article = new get_article_content();
$get_article->execute();