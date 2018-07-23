
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
            <ul class="navbar-nav mr-auto top-menu-list">
                <li class="top-menu-item">
                    <a id="login" class="nav-link text-center full-width font-x-large">LOGIN</a>
                </li>
            </ul>
        </nav>
        <div class="container">

            <!-- Login Form-->
            <div class="modal fade" data-backdrop="static" data-keyboard="false" id="loginModal" tabindex="-1" role="dialog">
                <div class="modal-dialog cascading-modal" role="document">
                    <!--Content-->
                    <div class="modal-content">

                        <!--Header-->
                        <div class="modal-header color-magenta-white">
                            <h2 class="auto-margin philosopher-font">Login</h2>
                        </div>
                        <!--Body-->
                        <form id="loginForm" method="post" enctype="multipart/form-data">

                            <div class="modal-body">

                                <p id="formMsgLogin" class="formMsg center-text orange-text formMsgText"></p>

                                <div class="md-form form-sm">
                                    <i class="fa fa-envelope prefix"></i>
                                    <input type="text" id="email" name="email" class="form-control">
                                    <label for="email">Insert email *</label>
                                </div>

                                <div class="md-form form-sm">
                                    <i class="fa fa-key prefix"></i>
                                    <input type="password" id="password" name="password" class="form-control">
                                    <label for="password">Insert password *</label>
                                </div>

                                <div class="text-sm-center">I campi contrassegnati con * sono obbligatori</div>

                                <div class="text-center mt-2">
                                    <button type="submit" class="btn btn-info">Login <i class="fa fa-sign-in ml-1"></i></button>
                                </div>

                            </div>
                        </form>

                        <!--Footer-->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-info waves-effect ml-auto modalEditUserClose" data-dismiss="modal">Close <i class="fa fa-times-circle ml-1"></i></button>
                        </div>
                    </div>
                    <!--End of Content-->
                </div>
            </div>
            <!-- End of Login Form -->
        </div>

        <!-- jquery -->
        <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
        <!-- Bootstrap tooltips -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.13.0/umd/popper.min.js"></script>
        <!-- Bootstrap core JavaScript -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <!-- MDB core JavaScript -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.4/js/mdb.min.js"></script>

        <script src="js/login.js"></script>
        <script src="js/helper.js"></script>
    </body>
</html>