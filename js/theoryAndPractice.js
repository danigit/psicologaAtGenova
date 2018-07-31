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
    '<div class="category menu-content-element full-width text-center font-x-large prevent-pointer philosopher-font bold-text">' +
    'MODELLI TEORICI <img class="arrow" src="../psicologaAtGenova/img/default/freccia_up.png">' +
    '</div></div> ' +
    //
    '<div class="row">' +
    '<div id="models-container" class="col col-lg-12 col-md-12 col-sm-12">' +

    '</div> ' +
    '</div> ' +
    //
    '<div id="couple" class="row">' +
    '<div class="category menu-content-element full-width center-text font-x-large prevent-pointer philosopher-font bold-text">' +
    'PSICOLOGIA DI COPPIA <img class="arrow" src="../psicologaAtGenova/img/default/freccia_up.png">' +
    '</div></div> ' +
    //
    '<div class="row">' +
    '<div id="couple-container" class="col col-lg-12 col-md-12 col-sm-12">' +

    '</div> ' +
    '</div> ' +
    //
    '<div id="inspiration" class="row">' +
    '<div class="category menu-content-element full-width center-text font-x-large prevent-pointer philosopher-font bold-text">' +
    'ISPIRAZIONI <img class="arrow" src="../psicologaAtGenova/img/default/freccia_up.png">' +
    '</div></div> ' +
    //
    '<div class="row">' +
    '<div id="inspiration-container" class="col col-lg-12 col-md-12 col-sm-12">' +

    '</div> ' +
    '</div> ' +
    //
    '</div></div> ' +
    '</div>';

function createPage() {
    let promise = httpPost('php/ajax/get_all_articles.php', '');
    promise.then(
        function (data) {
            if(data.result){
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
    return '<div class="row bottom-border article-row" data-name="' + article.title.replace(/\s/g, '').toLowerCase() + '">' +
        '<div class="col col-lg-3 col-md-3 col-sm-3 prevent-pointer">' +
        '<img src="' + article.images_path + '" class="blue-border prevent-pointer">' +
        '</div>' +
        //
        '<div class="col col-lg-9 col-md-9 col-sm-9 prevent-pointer">' +
        //
        '<div class="row margin-20-bottom prevent-pointer">' +
        '<div class="col col-lg-1 col-md-1 col-sm-1 prevent-pointer">' +

        '</div> ' +
        '<div class="col col-lg-11 col-md-11 col-sm-11 font-large philosopher-font blue-text prevent-pointer">' +
        '<p class="prevent-pointer philosopher-font bold-text">' + article.title + '</p>' +
        '</div> ' +
        '</div> ' +
        //
        '<div class="row prevent-pointer">' +
        '<p class="prevent-pointer open-font">' + article.description + '</p>' +
        '</div> ' +
        '</div> ' +
        '</div>';
}

function openArticle(title) {
    let form = new FormData;
    form.append('title', title);
    let promise = httpPost('php/ajax/get_article_content.php', form);
    promise.then(
        function (data) {
            if(data.result){
                var html = decodeEntities(data.content);
                var output = decorateString(html);
                var article = '<div class="row" id="article-view">'
                    + '<div class="col-12 col-lg-12 col-md-12 col-sm-12" id="left-column">'
                    + '<div id="content">' + output;
                article += '</div></div></div>';
                console.log('article: ' + article);
                changeLayout(caruselColumn, article);
            }
        }
    )
}