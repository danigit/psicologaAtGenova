<?php
//getting the url sent from a not existing url
$url = $_SERVER['REQUEST_URI'];
?>

<!DOCTYPE html>
<html lang="it" xmlns:wmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="author" content="Daniel Surpanu">
        <meta property="og:image" content="http://www.psicologaatgenova.it/img/default/profilo_simo.jpg" />
        <meta property="og:title" content="Psicologa a GENOVA" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Psicologa certificata EMDR, riceve su appuntamento a Genova, via XXV Aprile 8/6" />
        <meta property="og:url" content="http://www.psicologaatgenova.it/" />

        <link rel="shortcut icon" href="img/default/logo_150.png">
        <title>Dott.ssa Simona Bettoli Psicologa</title>

        <!-- carousel -->
        <link href="css/default/carusel.css" type="text/css" rel="stylesheet">

        <!-- JQCloud -->
        <link href="css/default/jqcloud.css" rel="stylesheet">

        <!--bootstrap css CDN-->
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- Bootstrap core CSS -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
        <!-- Material Design Bootstrap -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.4/css/mdb.min.css" rel="stylesheet">

        <!--fonts CDN-->
        <link href="https://fonts.googleapis.com/css?family=Philosopher" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Bree+Serif" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">

        <!-- custom css-->
        <link href="css/default/reset.css" type="text/css" rel="stylesheet">
        <link href="css/helper.css" type="text/css" rel="stylesheet">
        <link href="css/homeStyle.css" type="text/css" rel="stylesheet">
        <link href="css/topMenu.css" type="text/css" rel="stylesheet">
        <link href="css/rightColumn.css" type="text/css" rel="stylesheet">
        <link href="css/botomHeader.css" type="text/css" rel="stylesheet">
        <link href="css/contentLayout.css" type="text/css" rel="stylesheet">
        <link href="css/theoryAndPractice.css" type="text/css" rel="stylesheet">
        <link href="css/responsive.css" type="text/css" rel="stylesheet">
        <link href="css/checkbox.css" type="text/css" rel="stylesheet">
        <link href="css/articles.css" type="text/css" rel="stylesheet">

        <!-- facebook script and redirect variable-->
        <script>
            var url = "<?= $url ?>";
            console.log('the url is: ' + url);
            <?php $_SESSION['previous_location'] = ""; ?>
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v3.1';
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
                        <div class="row full-width philosopher-font small-banner">
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
                    <button class="navbar-toggler collapsed top-menu-button auto-margin" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <img src="img/default/logo_150.png" class="menu-collapse-button-immage">
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
                <div id="banner" class="container zero-padding banner">
                    <div class="row full-width auto-margin prevent-pointer">
                        <div class="col col-3 col-lg-3 col-sm-3 banner-immage">
                            <img src="img/default/logo_150.png" class="logo-immage">
                        </div>
                        <div class="col col-lg-9 col-md-9 col-sm-9 banner-text philosopher-font zero-padding" id="banner-text">
                            <div class="container fit-content margin-0-left">
                                <div class="container font-large small-text-banner">
                                    <p>Dott.ssa</p>
                                </div>
                                <div class="container banner-name">
                                    <p class="philosopher-font">Simona Bettoli</p>
                                </div>
                                <div class="container text-lg-right font-large">
                                    <p class="float-right">Psicologa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <!-- main container-->
        <main>
            <div class="container zero-padding">
                <div class="row" id="main-container">
                    <div class="col-12 col-lg-9 col-md-12 col-sm-12" id="carusel-column">
                        <div class="container zero-padding no-margin full-width" id="main-carusel-container">
                            <!-- Slider -->
                            <div class="cd-testimonials-wrapper cd-container z-depth-1 zero-padding" id="carusel-container">
                                <ul class="cd-testimonials">

                                </ul>
                                <!-- Show all slider button -->
                                <button type="button" class="cd-see-all btn btn-primary auto-margin position-absolute color-magenta-white font-large">Vedi tutti</button>
                            </div>
                            <!-- End of Slider -->

                            <!-- Cloud content -->
                            <div class="col col-lg-12 col-md-12 col-sm-12" id="cloud-column">
                                <div id="cloud">

                                </div>
                            </div>
                            <!-- End Cloud content -->

                            <!-- Popup all articols in one page-->
                            <div class="cd-testimonials-all">
                                <div class="cd-testimonials-all-wrapper">
                                    <ul class="cd-testimonials-all-list">

                                    </ul>
                                </div>    <!-- cd-testimonials-all-wrapper -->

                                <a class="close-btn">Close</a>
                            </div>
                            <!-- End Popup all articols in one page -->
                        </div>
                    </div>

                    <!-- Right menu container-->
                    <div id="main-right-column" class="col-12 col-lg-3 col-md-12 col-sm-12 zero-padding">
                        <div class="container zero-padding">
                            <img src="img/default/profilo_simo.jpg" class="right-col-profile-image">
                            <div class="right-col-profile-image-footer philosopher-font">
                            </div>
                            <div id="fast-contact" class="container fast-contact zero-padding philosopher-font font-large">
                                CONTATTAMI PER UN PRIMO COLLOQUIO GRATUITO
                            </div>
                            <div id="side-menu" class="nav-side-menu side-menu">
                                <ul class="menu-content" id="services-menu">
                                    <li id="transactional" class="menu-item font-medium btn btn-primary menu-content-element">
                                        <a class="center-text prevent-pointer">ANALISI TRANSAZIONALE</a>
                                    </li>

                                    <li id="emdr" class="menu-item font-medium btn btn-primary menu-content-element">
                                        <a class="center-text prevent-pointer">EMDR</a>
                                    </li>

                                    <li id="training" class="menu-item font-medium btn btn-primary menu-content-element">
                                        <a class="center-text prevent-pointer">TRAINING AUTOGENO </a>
                                    </li>

                                    <li id="relax" class="menu-item font-medium btn btn-primary menu-content-element">
                                        <a class="center-text prevent-pointer">BENESSERE PSICOLOGICO</a>
                                    </li>

                                    <li id="technique" class="menu-item font-medium btn btn-primary menu-content-element">
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
                            <div id="linkedin" class="col-6 col-lg-6 col-md-6 col-sm-6 social">
                                <img src="img/default/icona_linkedin.png" class="prevent-pointer">
                            </div>

                            <div id="facebook" class="col-6 col-lg-6 col-md-6 col-sm-6 social">
                                <img src="img/default/icona_fb.png" class="prevent-pointer">
                                <div class="facebook">
                                    <div class="fb-like" data-href="https://www.facebook.com/psicologaatgenova/" data-layout="button_count" data-action="like" data-size="large" data-show-faces="false" data-share="false"></div>
                                </div>
                                <div class="share-home-button-container">
                                    <div class="share-home-button" data-href="http://www.psicologaatgenova.it/" data-layout="button" data-size="large" data-mobile-iframe="true">
                                        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=www.psicologaatgenova.it/" class="fb-xfbml-parse-ignore philosopher-font">Condividi</a>
                                    </div>
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
                    <div class="col col-lg-3 col-md-3 bottom-column">
                        <div class="bottom-image-container" id="bottom-contact-immage">
                            <img src="img/default/icona_contatti.png" class="bottom-image prevent-pointer">
                        </div>
                        <div class="bottom-text-container">
                            <h4 class="center-text font-x-large philosopher-font">CONTATTI</h4>

                            <p class="center-text">Tel: 333 87.37.231<br>
                                Email: <a href="mailto:psicologaatgenova@gmail.com?Subject=" target="_top" class="email">
                                    psicologaatgenova@gmail.com</a>
                            </p>
                        </div>
                    </div>
                    <div class="col col-lg-3 col-md-3 bottom-column">
                        <div class="bottom-image-container" id="bottom-where-immage">
                            <img src="img/default/icona_dove_sono.png" class="bottom-image prevent-pointer" id="bottom-dove">
                        </div>
                        <div class="bottom-text-container">
                            <h4 class="center-text font-x-large philosopher-font">DOVE SONO</h4>

                            <p class="center-text">Via XXV Aprile, 8/6<br>
                                Genova, Liguria, CAP 16121
                        </div>
                    </div>
                    <div class="col col-lg-3 col-md-3 bottom-column">
                        <div class="bottom-image-container" id="bottom-about-immage">
                            <img src="img/default/icona_chi_sono.png" class="bottom-image prevent-pointer" id="bottom-chi">
                        </div>
                        <div class="bottom-text-container">
                            <h4 class="center-text font-x-large philosopher-font">CHI SONO</h4>

                            <p class="center-text">Psicologa<br>Analisi Transazionale - EMDR</p>
                        </div>
                    </div>
                    <div class="col col-lg-3 col-md-3 bottom-column">
                        <div class="bottom-image-container" id="bottom-services-immage">
                            <img src="img/default/icona_servizi.png" class="bottom-image prevent-pointer" id="bottom-services">
                        </div>
                        <div class="bottom-text-container">
                            <h4 class="center-text font-x-large philosopher-font">SERVIZI</h4>

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

            <!-- End of Footer container -->
            <div id="botom-footer">
                <div class="row">
                    <div class="col-12 col-lg-12 col-md-12 col-sm-12 text-center botom-footer">
                        <p>Dott.ssa SIMONA BETTOLI - Psicologa iscritta all'albo della Liguria n° 2556 - C.F.: BTTSMN81H43D969Z - P.iva: 02458670995</p>
                    </div>
                </div>
            </div>
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
        <!-- linked in -->
        <script async src="https://static.addtoany.com/menu/page.js"></script>

        <!-- carousel -->
        <script src="js/carusel/main.js"></script>
        <script src="js/carusel/masonry.pkgd.min.js"></script>
        <script src="js/carusel/jquery.flexslider-min.js"></script>
        <script src="js/carusel/modernizr.js"></script>

        <!-- JQCloud -->
        <script src="js/default/jqcloud.min.js"></script>

        <!-- custom js-->
        <script src="js/pageLoad.js"></script>
        <script src="js/menu.js"></script>
        <script src="js/helper.js"></script>
        <script src="js/websiteInformations.js"></script>
        <script src="js/maps.js"></script>
        <script src="js/contact.js"></script>
        <script src="js/theoryAndPractice.js"></script>
        <script src="js/home.js"></script>
    </body>

</html>
