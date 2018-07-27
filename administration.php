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

        <!-- Include Editor style. -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/codemirror.min.css">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.8.4/css/froala_editor.pkgd.min.css" rel="stylesheet" type="text/css" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.8.4/css/froala_style.min.css" rel="stylesheet" type="text/css" />

        <!--philosopher font CDN-->
        <link href="https://fonts.googleapis.com/css?family=Philosopher" rel="stylesheet">

        <!-- custom css-->
        <link href="css/helper.css" type="text/css" rel="stylesheet">
        <link href="css/topMenu.css" type="text/css" rel="stylesheet">
        <link href="css/administration.css" type="text/css" rel="stylesheet">

    </head>
    <body>
        <nav class="navbar navbar-expand-md navbar-light bg-white zero-padding navbarFixed">
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

        <!-- Create a tag that we will use as the editable area. -->
        <!-- You can use a div tag as well. -->
        <div class="container" >
            <div class="row" style="padding-top: 40px; height: 100vh;">
                <textarea id="editor" style="width: 100%;"></textarea>
            </div>
        </div>

        <div class="container">
            <!-- Insert article Form-->
            <div class="modal fade" data-backdrop="static" data-keyboard="false" id="modalInsertArticle" tabindex="-1"
                 role="dialog">
                <div class="modal-dialog cascading-modal" role="document">
                    <!--Content-->
                    <div class="modal-content">

                        <!--Header-->
                        <div class="modal-header color-magenta-white">
                            <h2 class="auto-margin philosopher-font">Insert an article</h2>
                        </div>
                        <!--Body-->
                        <form id="insertArticleForm">

                            <div class="modal-body">

                                <p id="formMsgInsertArticle" class="formMsg center-text orange-text formMsgText"></p>

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

                                <div class="md-form form-sm" style="display: none">
                                    <i class="fa fa-pencil-square prefix"></i>
                                    <textarea id="content" name="content" class="form-control"></textarea>
                                    <label for="content">Insert content... *</label>
                                </div>

                                <div class="row">
                                    <span class="btn btn-success selectFile">
                                        <i class="fa fa-plus"></i>
                                        <span>Select files...</span>
                                        <input id="fileUpload" class="hide-file" type="file" name="files[]" multiple="">
                                    </span>
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
                            <button type="button" class="btn btn-outline-info waves-effect ml-auto"
                                    data-dismiss="modal">Close <i class="fa fa-times-circle ml-1"></i></button>
                        </div>
                    </div>
                    <!--/.Content-->
                </div>
            </div>
            <!--/.Edit User Form-->

            <!-- Central Modal  -->
            <div class="modal fade" id="centralModal" tabindex="-1" role="dialog">
                <div id="centralModalDialog" class="modal-dialog modal-notify" role="document">
                    <!--Content-->
                    <div class="modal-content">
                        <!--Header-->
                        <div class="modal-header">
                            <p id="centralModalTitle" class="heading lead"></p>

                            <button type="button" class="close" data-dismiss="modal">
                                <span class="white-text">&times;</span>
                            </button>
                        </div>

                        <!--Body-->
                        <div class="modal-body">
                            <div class="text-center">
                                <i id="centralModalIcon" class="fa fa-4x mb-1 animated rotateIn"></i>
                                <p id="centralModalText"></p>
                            </div>
                        </div>

                        <!--Footer-->
                        <div id="centralModalFooter" class="modal-footer flex-center">
                            <button type="button" class="btn btn-outline-info waves-effect" data-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                    <!--/.Content-->
                </div>
            </div>
            <!-- /.Central Modal -->
        </div>

        <!-- jquery -->
        <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
        <!-- Bootstrap tooltips -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.13.0/umd/popper.min.js"></script>
        <!-- Bootstrap core JavaScript -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <!-- MDB core JavaScript -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.4/js/mdb.min.js"></script>

        <!-- Include external JS libs. -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/codemirror.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/mode/xml/xml.min.js"></script>

        <!-- Include Editor JS files. -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.8.4/js/froala_editor.pkgd.min.js"></script>

        <script src="js/administration.js"></script>
        <script src="js/helper.js"></script>

        <!-- Initialize the editor. -->
        <script> $(function() { $('#editor').froalaEditor() }); </script>
    </body>
</html>