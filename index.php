<?php
//getting the url sent from a not existing url
$url = $_SESSION['REQUEST_URI'];
?>

<!DOCTYPE html>
<html lang="it" xmlns:wmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="author" content="Daniel Surpanu">

        <title>Dott.ssa Simona Bettoli Psicologa</title>

        <!-- carousel -->
        <link href="css/default/carusel.css" type="text/css" rel="stylesheet">

        <!--bootstrap css CDN-->
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- Bootstrap core CSS -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
        <!-- Material Design Bootstrap -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.4/css/mdb.min.css" rel="stylesheet">

        <!--philosopher font CDN-->
        <link href="https://fonts.googleapis.com/css?family=Philosopher" rel="stylesheet">

        <!-- custom css-->
        <link href="css/default/reset.css" type="text/css" rel="stylesheet">
        <link href="css/helper.css" type="text/css" rel="stylesheet">
        <link href="css/homeStyle.css" type="text/css" rel="stylesheet">
        <link href="css/topMenu.css" type="text/css" rel="stylesheet">
        <link href="css/rightColumn.css" type="text/css" rel="stylesheet">
        <link href="css/botomHeader.css" type="text/css" rel="stylesheet">
        <link href="css/contentLayout.css" type="text/css" rel="stylesheet">

        <!-- facebook script and redirect variable-->
        <script>
            var url = "<?= $url ?>";
            <?php $_SESSION['previous_location'] = ""; ?>
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v3.0';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        </script>
    </head>
    <body>
        <header class="line-height-1">
            <!-- First navabar with contact information -->
            <div class="header-container">
                <nav class="navbar top-header">
                    <div class="container">
                        <div class="row full-width philosopher-font">
                            <div class="col col-12 col-lg-6 col-md-12 col-sm-12">
                                <div class="text-xl-lef gray-text">
                                    Dott.ssa <b>Simona Bettoli</b> | Psicologa@Genova - Via XXV Aprile 8/6
                                </div>
                            </div>
                            <div class="col col-12 col-lg-6 col-md-12 col-sm-12">
                                <div class="text-xl-right gray-text">
                                    Telefono: 333 873.72.31 | E-mail:
                                    <a href="mailto:psicologaatgenova@gmail.com?Subject=" target="_top" class="email">
                                        <b>psicologaatgenova@gmail.com</b></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <!-- end first navbar -->

                <!-- menu navbar-->
                <nav class="navbar navbar-expand-md navbar-light bg-white zero-padding">
                    <button class="navbar-toggler collapsed top-menu-button" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <img src="img/default/logo_150.png">
                    </button>
                    <div class="navbar-collapse collapse menu-nav" id="navbarCollapse">
                        <ul class="navbar-nav mr-auto top-menu-list">
                            <li class="top-menu-item">
                                <a id="home" class="nav-link text-center full-width">HOME</a>
                            </li>

                            <li class="top-menu-item">
                                <a id="about" class="nav-link text-center full-width">CHI SONO</a>
                            </li>

                            <li class="top-menu-item">
                                <a id="services" class="nav-link text-center full-width">SERVIZI </a>
                            </li>

                            <li class="top-menu-item">
                                <a id="events" class="nav-link text-center full-width">EVENTI</a>
                            </li>

                            <li class="top-menu-item">
                                <a id="theory-practice" class="nav-link text-center full-width">TEORIA&PRATICA</a>
                            </li>

                            <li class="top-menu-item">
                                <a id="contact" class="nav-link text-center full-width">CONTATTI</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <!-- banner-->
            <nav class="navbar zero-padding no-shadow">
                <div class="container zero-padding">
                    <div class="row auto-margin">
                        <div class="col col-3 col-lg-3 col-md-3 col-sm-3">
                            <img src="img/default/logo_150.png">
                        </div>
                        <div class="col col-lg-9 col-md-9 col-sm-9 banner-text philosopher-font zero-padding" id="banner-text">
                            <div class="container font-x-large">
                                <p>Dott.ssa</p>
                            </div>
                            <div class="container banner-name">
                                <p>Simona Bettoli</p>
                            </div>
                            <div class="container text-lg-right font-x-large">
                                <p>Psicologa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <!-- main container-->
        <main>
            <div class="container zero-padding">
                <div class="row">
                    <div class="col-12 col-lg-9 col-md-9 col-sm-12" id="carusel-column">
                        <div class="container zero-padding">
                            <!-- Slider -->
                            <div class="cd-testimonials-wrapper cd-container z-depth-1" id="carusel-container">
                                <ul class="cd-testimonials">

                                </ul>
                                <!-- Show all slider button -->
                                <button type="button" class="cd-see-all btn btn-primary">Vedi tutti</button>
                            </div>
                            <!-- End of Slider -->

                            <!-- Cloud content -->
                            <div class="row">
                                <div class="col-11 col-lg-11 col-md-11 col-sm-11" id="cloud-column">
                                    <div id="cloud">

                                    </div>
                                </div>
                            </div>
                            <!-- End Cloud content -->
                        </div>
                    </div>

                    <!-- Right menu container-->
                    <div class="col-12 col-lg-3 col-md-3 col-sm-12 zero-padding">
                        <div class="container zero-padding">
                            <img src="img/default/profilo_simo.jpg" class="right-col-profile-image">
                            <div class="right-col-profile-image-footer philosopher-font">
                            </div>
                            <div id="fast-contact" class="container fast-contact zero-padding philosopher-font font-large">
                                CONTATTAMI PER UN PRIMO COLLOQUIO GRATUITO
                            </div>
                            <div id="side-menu" class="nav-side-menu side-menu">
                                <ul class="menu-content">
                                    <li id="transactional" class="menu-item font-medium btn btn-primary">
                                        <a class="center-text prevent-pointer">ANALISI TRANSAZIONALE</a>
                                    </li>

                                    <li id="emdr" class="menu-item font-medium btn btn-primary">
                                        <a class="center-text prevent-pointer">EMDR</a>
                                    </li>

                                    <li id="training" class="menu-item font-medium btn btn-primary">
                                        <a class="center-text prevent-pointer">TRAINING AUTOGENO </a>
                                    </li>

                                    <li id="relax" class="menu-item font-medium btn btn-primary">
                                        <a class="center-text prevent-pointer">BENESSERE PSICOLOGICO</a>
                                    </li>

                                    <li id="technique" class="menu-item font-medium btn btn-primary">
                                        <a class="center-text prevent-pointer">TECNICHE IMMAGINATIVE</a>
                                    </li>
                                </ul>
                        </div>

                        <!-- Search content -->
                        <div class="row">

                        </div>
                        <!-- End of search content -->

                        <!-- Social container -->
                        <div class="row social-container">
                            <div class="col-4 col-lg-4 col-md-4 col-sm-4 social">
                                <img src="img/default/icona_linkedin.png">
                            </div>

                            <div class="col-4 col-lg-4 col-md-4 col-sm-4 social">
                                <img src="img/default/icona_fb.png">
                            </div>

                            <div class="col-4 col-lg-4 col-md-4 col-sm-4 social">
                                <div class="facebook">
                                    <div class="fb-like" data-href="https://www.facebook.com/psicologaatgenova/" data-width="100" data-layout="box_count" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-12 col-md-12 col-sm-12">

                        </div>
                        <!-- End of Social Container -->
                    </div>
                </div>
            </div>
            <div class="container bottom-header-container zero-padding philosopher-font">
                <div class="row" id="bottom-header-row">
                    <div class="col col-lg-3 col-md-3">
                        <div class="bottom-image-container">
                            <img src="img/default/icona_contatti.png" class="bottom-image">
                        </div>
                        <div class="bottom-text-container">
                            <h4 class="center-text font-x-large">CONTATTI</h4>

                            <p class="center-text">Tel: 333 87.37.231<br>
                                Email: <a href="mailto:psicologaatgenova@gmail.com?Subject=" target="_top" class="email">
                                    psicologaatgenova@gmail.com</a>
                            </p>
                        </div>
                    </div>
                    <div class="col col-lg-3 col-md-3">
                        <div class="bottom-image-container">
                            <img src="img/default/icona_dove_sono.png" class="bottom-image" id="bottom-dove">
                        </div>
                        <div class="bottom-text-container">
                            <h4 class="center-text font-x-large">DOVE SONO</h4>

                            <p class="center-text">Via XXV Aprile, 8/6<br>
                                Genova, Liguria, CAP 16121
                        </div>
                    </div>
                    <div class="col col-lg-3 col-md-3">
                        <div class="bottom-image-container">
                            <img src="img/default/icona_chi_sono.png" class="bottom-image" id="bottom-chi">
                        </div>
                        <div class="bottom-text-container">
                            <h4 class="center-text font-x-large">CHI SONO</h4>

                            <p class="center-text">Psicologa<br>Analisi Transazionale - EMDR</p>
                        </div>
                    </div>
                    <div class="col col-lg-3 col-md-3">
                        <div class="bottom-image-container">
                            <img src="img/default/icona_servizi.png" class="bottom-image" id="bottom-services">
                        </div>
                        <div class="bottom-text-container">
                            <h4 class="center-text font-x-large">SERVIZI</h4>

                            <p class="center-text">Colloqui psicologici<br>individuali e di coppia</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Central Modal  -->
            <div class="modal fade" id="centralModal" tabindex="-1" role="dialog">
                <div id="centralModalDialog" class="modal-dialog modal-notify" role="document">
                    <!--Content-->
                    <div class="modal-content">
                        <!--Header-->
                        <div class="modal-header">
                            <p id="centralModalTitle" class="heading lead"></p>

                            <button type="button" class="close" data-dismiss="modal">
                                <span  class="white-text">&times;</span>
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
                            <button type="button" class="btn btn-outline-info waves-effect" data-dismiss="modal">CHIUDI</button>
                        </div>
                    </div>
                    <!--/.Content-->
                </div>
            </div>
            <!-- /.Central Modal -->
        </main>

        <!-- jquery -->
        <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
        <!-- Bootstrap tooltips -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.13.0/umd/popper.min.js"></script>
        <!-- Bootstrap core JavaScript -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <!-- MDB core JavaScript -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.4/js/mdb.min.js"></script>
        <!-- maps-->
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAYoluX3kHHBNEb_bSvSK8ddYf8pWgXVX8&callback=myMap"
                type="text/javascript"></script>

        <!-- carousel -->
        <script src="js/carusel/main.js"></script>
        <script src="js/carusel/masonry.pkgd.min.js"></script>
        <script src="js/carusel/jquery.flexslider-min.js"></script>
        <script src="js/carusel/modernizr.js"></script>

        <!-- custom js-->
        <script src="js/pageLoad.js"></script>
        <script src="js/menu.js"></script>
        <script src="js/helper.js"></script>
        <script src="js/websiteInformations.js"></script>
        <script src="js/maps.js"></script>
        <script src="js/contact.js"></script>
    </body>

</html>
