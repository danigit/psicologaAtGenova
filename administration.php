<?php

if(!isset($_SESSION))
    session_start();
if(!isset($_SESSION['id'], $_SESSION['secure'], $_SESSION['username']))
    header('Location: login.php');
?>



<!DOCTYPE html>
<html lang="it" xmlns:wmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="author" content="Daniel Surpanu">

        <title>Dott.ssa Simona Bettoli Psicologa</title>

        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- Bootstrap core CSS -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
        <!-- Material Design Bootstrap -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.4/css/mdb.min.css" rel="stylesheet">

        <!--philosopher font CDN-->
        <link href="https://fonts.googleapis.com/css?family=Philosopher" rel="stylesheet">

        <!-- custom css-->
        <link href="css/helper.css" type="text/css" rel="stylesheet">
        <link href="css/topMenu.css" type="text/css" rel="stylesheet">

    </head>
    <body>
        <nav class="navbar navbar-expand-md navbar-light bg-white zero-padding">
            <button class="navbar-toggler collapsed top-menu-button" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <img src="img/default/logo_150.png">
            </button>
            <div class="navbar-collapse collapse menu-nav" id="navbarCollapse">
                <ul class="navbar-nav mr-auto top-menu-list">
                    <li class="top-menu-item">
                        <a id="insert" class="nav-link text-center font-x-large full-width">INSERT</a>
                    </li>

                    <li class="top-menu-item">
                        <a id="logout" class="nav-link text-center font-x-large full-width">LOGOUT</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <!-- Insert article Form-->
            <div class="modal fade" data-backdrop="static" data-keyboard="false" id="modalInsertArticle" tabindex="-1"
                 role="dialog">
                <div class="modal-dialog cascading-modal" role="document">
                    <!--Content-->
                    <div class="modal-content">

                        <!--Header-->
                        <div class="modal-header login-header">
                            <h2>Insert an article</h2>
                        </div>
                        <!--Body-->
                        <form id="insertArticleForm">

                            <div class="modal-body">

                                <p id="formMsgInsertArticle" class="formMsg formMsgText"></p>

                                <div class="md-form form-sm">
                                    <i class="fa fa-pencil-square prefix"></i>
                                    <input type="text" id="type" name="type" class="form-control">
                                    <label for="type">Article type *</label>
                                </div>

                                <div class="md-form form-sm">
                                    <i class="fa fa-pencil-square prefix"></i>
                                    <input type="text" id="title" name="title" class="form-control">
                                    <label for="title">Article title *</label>
                                </div>

                                <div class="md-form form-sm">
                                    <i class="fa fa-pencil-square prefix"></i>
                                    <textarea id="description" name="description" class="form-control"></textarea>
                                    <label for="description">Insert description... *</label>
                                </div>


                                <span class="btn btn-success fileRow">
                                <i class="fa fa-plus"></i>
                                <span>Select files...</span>
                                <input id="fileupload" class="hide-file" type="file" name="files[]" multiple="">
                            </span>


                                <!--

                                <div id="fileUploaderContainer">
                                    <div id="fileRow">
                                        Chose File
                                        <input class="hide-file" type="file" name="files[]" multiple>
                                    </div>
                                </div>
    -->
                                <div class="md-form">
                                    <progress id="insertArticleProgressBar" value="0"></progress>
                                </div>

                                <div class="text-sm-center">I campi contrassegnati con * sono obbligatori</div>

                                <div class="text-center mt-2">
                                    <button type="submit" class="btn btn-info">Insert <i class="fa fa-sign-in ml-1"></i>
                                    </button>
                                </div>

                            </div>
                        </form>

                        <!--Footer-->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-info waves-effect ml-auto modalEditUserClose"
                                    data-dismiss="modal">Close <i class="fa fa-times-circle ml-1"></i></button>
                        </div>
                    </div>
                    <!--/.Content-->
                </div>
            </div>
            <!--/.Edit User Form-->
        </div>

        <!-- jquery -->
        <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
        <!-- Bootstrap tooltips -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.13.0/umd/popper.min.js"></script>
        <!-- Bootstrap core JavaScript -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <!-- MDB core JavaScript -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.4/js/mdb.min.js"></script>

        <script src="js/administration.js"></script>
        <script src="js/helper.js"></script>
    </body>
</html>