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
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">

        <!--philosopher font CDN-->
        <link href="https://fonts.googleapis.com/css?family=Philosopher" rel="stylesheet">

        <link href="css/default/reset.css" type="text/css" rel="stylesheet">
        <link href="css/helper.css" type="text/css" rel="stylesheet">
        <link href="css/homeStyle.css" type="text/css" rel="stylesheet">
        <link href="css/topMenu.css" type="text/css" rel="stylesheet">
        <link href="css/rightColumn.css" type="text/css" rel="stylesheet">

        <!-- facebook script and redirect variable-->
        <script>
            let url = "<?= $url ?>";
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
        <header>
            <!-- First navabar with contact information -->
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
            <nav class="navbar navbar-expand-md navbar-light bg-light zero-padding">
                <button class="navbar-toggler collapsed top-menu-button" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="img/default/logo_150.png">
                </button>
                <div class="navbar-collapse collapse menu-nav" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto top-menu-list">
                        <li class="top-menu-item">
                            <a id="home-button" class=" nav-link text-lg-center">HOME</a>
                        </li>

                        <li class="top-menu-item">
                            <a id="about-me-button" class="nav-link text-lg-center">CHI SONO</a>
                        </li>

                        <li class="top-menu-item">
                            <a id="services" class="nav-link text-lg-center">SERVIZI </a>
                        </li>

                        <li class="top-menu-item">
                            <a id="events" class="nav-link text-lg-center">EVENTI</a>
                        </li>

                        <li class="top-menu-item">
                            <a id="theory-practice" class="nav-link text-lg-center">TEORIA&PRATICA</a>
                        </li>

                        <li class="top-menu-item">
                            <a id="contact" class="nav-link text-lg-center">CONTATTI</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <!-- banner-->
            <nav class="navbar zero-padding">
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
                    <div class="col-12 col-lg-9 col-md-9 col-sm-12">
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
                                    <li class="menu-item btn btn-primary">
                                        <a class="center-text">ANALISI TRANSAZIONALE</a>
                                    </li>

                                    <li class="menu-item btn btn-primary">
                                        <a class="center-text">EMDR</a>
                                    </li>

                                    <li class="menu-item btn btn-primary">
                                        <a class="center-text">TRAINING AUTOGENO </a>
                                    </li>

                                    <li class="menu-item btn btn-primary">
                                        <a class="center-text">BENESSERE PSICOLOGICO</a>
                                    </li>

                                    <li class="menu-item btn btn-primary">
                                        <a class="center-text">TECNICHE IMMAGINATIVE</a>
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
        </main>

        <!-- jquery -->
        <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>

        <!-- bootstrap javascript CDN -->
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>

        <!-- carousel -->
        <script src="js/carousel/main.js"></script>
        <script src="js/carousel/masonry.pkgd.min.js"></script>
        <script src="js/carousel/jquery.flexslider-min.js"></script>
        <script src="js/carousel/modernizr.js"></script>

        <!-- custom js-->
        <script src="js/pageLoad.js"></script>
        <script src="js/menu.js"></script>
        <script src="js/helper.js"></script>
    </body>

</html>
