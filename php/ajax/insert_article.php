<?php

require_once "cs_interaction.php";
require_once 'helpers.php';
error_reporting(E_ALL);

class insert_article extends cs_interaction
{

    private $type, $name, $description, $content, $image_path, $temp_immage_path, $database_path, $text_path;
    private $id;

    protected function input_elaboration()
    {
        ini_set('display_errors', 1);
        $this->type = $this->validate_string('type');
        if(!$this->type)
            $this->json_error("Inserisci la cattegoria dell'articolo");

        $this->name = $this->validate_string('title');
        if(!$this->name)
            $this->json_error("Inserisci il titolo dell'articolo");

        $this->description = $this->validate_string('description');
        if(!$this->description)
            $this->json_error("Inserisci una descrizione per l'articolo");

        $this->description = mb_substr($this->description, 0, 253) . "...";

        $this->content = $this->validate_string('content');

        $uploaded_files = array($_FILES['files']);

        if(count($_FILES['files']) == 0) {
            $this->json_error("Seleziona un file per carricarlo");
            return;
        }

        $i = 0;
        $folder = str_replace(' ', '_', $this->name);
        $this->image_path = '../../img/articlesImmages/' . $folder . '/';
        $this->text_path = '../../articlesText/'. strtolower(preg_replace('/\s+/', '', $this->name)) . ".txt";
        if(file_exists($this->text_path)) {
            $this->json_error("Un file con questo nome esiste gia'");
        }
        foreach ($uploaded_files as $file) {
            foreach ($file['name'] as $item){

                if(!file_exists('../../img/articlesImmages/'. $folder))
                    mkdir('../../img/articlesImmages/'. $folder);
                $this->temp_immage_path = '';
                $this->temp_immage_path = $this->image_path . $item;
                if($i == 0){
                    $this->database_path = $this->temp_immage_path;
                }
                if(file_exists($this->temp_immage_path)) {
                    $this->json_error("Un file con questo nome esiste gia'");
                }
                else if(!move_uploaded_file($file['tmp_name'][$i], $this->temp_immage_path))
                    $this->json_error("Il file non puo' essere salvato");
                $i++;
            }
        }

        if (!empty($this->content)) {
            $dir = '../../articlesText/';
            $filename = preg_replace('/\s+/', '', $this->name) . '.txt';
            $handle = fopen($dir . strtolower($filename), "w");
            fwrite($handle, $this->content);
            fclose($handle);
        }else{
            $this->json_error("Non hai inserito il contenuto dell'articolo nel editor!");
        }
    }

    protected function get_db_informations()
    {
        $connection = $this->get_connection();

        $this->id = $connection->insert_article($this->type, $this->name, $this->description, $this->text_path, $this->database_path, 0, 0, 0 );
        //$this->id = $connection->insert_article("coppia", "Psicologia di coppia", "Come se fosse antani", "../img/download/servizio.phg", 0, 0, 0 );

        if(is_error($this->id)) {
            unlink($this->text_path);
            $this->deleteDirectory($this->image_path);

            $this->json_error("Errore sconosciuto");
        }
    }

    protected function get_returned_data()
    {
        return array();
    }


    function deleteDirectory($dir) {
        if (!file_exists($dir)) {
            return true;
        }

        if (!is_dir($dir)) {
            return unlink($dir);
        }

        foreach (scandir($dir) as $item) {
            if ($item == '.' || $item == '..') {
                continue;
            }

            if (!$this->deleteDirectory($dir . DIRECTORY_SEPARATOR . $item)) {
                return false;
            }

        }

        return rmdir($dir);
    }
}

$object = new insert_article();
$object->execute();