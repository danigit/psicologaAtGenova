let theoryAndPractice =
    '<div id="cantainer" >' +
    '<div class="row">' +
    '<div class="col-12 col-lg-12 col-md-12 col-sm-12 text-center display-4 page-title philosopher-font blue-text">' +
    'ARTICOLI' +
    '</div></div>' +
    //
    '<div class="row">' +
    '<div id="articles" class="col col-lg-12 col-md-12 col-sm-12">' +
    //
    '<div id="models" class="row">' +
    '<div class="category menu-content-element full-width text-center font-x-large prevent-pointer">' +
    'MODELLI TEORICI <img class="arrow" src="../psicologaAtGenova/img/default/freccia_up.png">' +
    '</div></div> ' +
    //
    '<div class="row">' +
    '<div id="models-container" class="col col-lg-12 col-md-12 col-sm-12">' +

    '</div> ' +
    '</div> ' +
    //
    '<div id="couple" class="row">' +
    '<div class="category menu-content-element full-width center-text font-x-large prevent-pointer">' +
    'PSICOLOGIA DI COPPIA <img class="arrow" src="../psicologaAtGenova/img/default/freccia_up.png">' +
    '</div></div> ' +
    //
    '<div class="row">' +
    '<div id="couple-container" class="col col-lg-12 col-md-12 col-sm-12">' +

    '</div> ' +
    '</div> ' +
    //
    '<div id="inspiration" class="row">' +
    '<div class="category menu-content-element full-width center-text font-x-large prevent-pointer">' +
    'ISPIRAZIONI <img class="arrow" src="../psicologaAtGenova/img/default/freccia_up.png">' +
    '</div></div> ' +
    //
    '<div id="inspiration-container" class="row">' +

    '</div> ' +
    //
    '</div></div> ' +
    '</div>';

function createPage() {
    let promise = httpPost('php/ajax/get_all_articles.php', '');
    promise.then(
        function (data) {
            if(data.result){
                console.log(data.articles);
                createArticleRows(data.articles);
            }
        }
    )
}

function createArticleRows(articles) {
    let models = document.querySelector('#models-container');
    let couple = document.querySelector('#couple-container');
    let inspiration = document.querySelector('#inspiration-container');

    Array.from(articles).forEach(function (article) {
        switch (article.type.toLowerCase()){
            case 'modelli teorici':
                models.innerHTML += createArticleRow(article);
                break;
            case 'psicologia di coppia':
                couple.innerHTML += createArticleRow(article);
                break;
            case 'ispirazioni':
                inspiration.innerHTML += createArticleRow(article);
                break;
        }
    })
}

function createArticleRow(article) {
    return '<div class="row bottom-border article-row">' +
        '<div class="col col-lg-3 col-md-3 col-sm-3">' +
        '<img src="' + article.images_path + '" class="blue-border">' +
        '</div>' +
        //
        '<div class="col col-lg-9 col-md-9 col-sm-9">' +
        //
        '<div class="row margin-20-bottom">' +
        '<div class="col col-lg-1 col-md-1 col-sm-1">' +

        '</div> ' +
        '<div class="col col-lg-11 col-md-11 col-sm-11 font-large philosopher-font blue-text">' +
        '<p>' + article.title + '</p>' +
        '</div> ' +
        '</div> ' +
        //
        '<div class="row">' +
        '<p>' + article.description + '</p>' +
        '</div> ' +
        '</div> ' +
        '</div>';
}