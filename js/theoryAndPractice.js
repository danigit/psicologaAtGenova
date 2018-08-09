let theoryAndPractice =
    '<div id="cantainer" >' +
    '<div class="row">' +
    '<div class="col-12 col-lg-12 col-md-12 col-sm-12 text-center page-title philosopher-font blue-text" style="font-size: 45px;">' +
    'ARTICOLI' +
    '</div></div>' +
    //
    '<div class="row">' +
    '<div id="articles" class="col col-lg-12 col-md-12 col-sm-12">' +
    //
    '<div id="models" class="row">' +
    '<div class="category menu-content-element full-width text-center font-x-large prevent-pointer philosopher-font bold-text">' +
    'MODELLI TEORICI <img class="arrow" src="../img/default/freccia_up.png">' +
    '</div></div> ' +
    //
    '<div class="row">' +
    '<div id="models-container" class="col col-lg-12 col-md-12 col-sm-12">' +

    '</div> ' +
    '</div> ' +
    //
    '<div id="couple" class="row">' +
    '<div class="category menu-content-element full-width center-text font-x-large prevent-pointer philosopher-font bold-text">' +
    'PSICOLOGIA DI COPPIA <img class="arrow" src="../img/default/freccia_up.png">' +
    '</div></div> ' +
    //
    '<div class="row">' +
    '<div id="couple-container" class="col col-lg-12 col-md-12 col-sm-12">' +

    '</div> ' +
    '</div> ' +
    //
    '<div id="inspiration" class="row">' +
    '<div class="category menu-content-element full-width center-text font-x-large prevent-pointer philosopher-font bold-text">' +
    'ISPIRAZIONI <img class="arrow" src="../img/default/freccia_up.png">' +
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
                console.log('all articles: ' + data.articles);
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
    return '<div class="row bottom-border article-row" data-name="' + article.title + '">' +
        '<div id="article-immage-column" class="col col-lg-3 prevent-pointer">' +
        '<img src="' + article.images_path + '" class="blue-border prevent-pointer">' +
        '</div>' +
        //
        '<div id="article-content" class="col col-lg-9 col-md-12 col-sm-12 prevent-pointer">' +
        //
        '<div class="row prevent-pointer">' +
        '<div class="col col-lg-11 col-md-12 col-sm-12 font-large philosopher-font blue-text prevent-pointer">' +
        '<p class="prevent-pointer philosopher-font text-center bold-text font-x-large">' + article.title + '</p>' +
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
    let formatedTitle = title.replace(/\s/g, '').toLowerCase();
    form.append('title', formatedTitle);
    let promise = httpPost('php/ajax/get_article_content.php', form);
    promise.then(
        function (data) {
            if(data.result){
                //changeFacebookTag(title);
                let html = decodeEntities(data.content);
                let output = decorateString(html);
                let article = '<div class="row" id="article-view">'
                    + '<div class="col-12 col-lg-12 col-md-12 col-sm-12" id="left-column">'
                    + '<div id="content">' + output;
                article += '</div></div></div>';
                article += '<div class="fb-share-button" data-href="http://www.psicologaatgenova.it/' + formatedTitle + '" ' +
                    'data-layout="button" data-size="large" data-mobile-iframe="true">' +
                    '<a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=www.psicologaatgenova.it/' + formatedTitle + '"' +
                    ' class="fb-xfbml-parse-ignore philosopher-font">Condividi su facebook</a></div>';
                changeLayout(caruselColumn, article);
            }
        }
    );
    //changeFacebookTag(title);
}

function changeFacebookTag(title) {
    let formData = new FormData;
    formData.append('title', title);
    let promiseData = httpPost('php/ajax/get_article_by_title.php', formData);
    promiseData.then(
        function (data) {
            if(data.result){
                document.querySelector('meta[property="og:image"]').setAttribute('content', data[0].images_path);
                document.querySelector('meta[property="og:title"]').setAttribute('content', title);
                document.querySelector('meta[property="og:description"]').setAttribute('content', data[0].description);
                document.querySelector('meta[property="og:url"]').setAttribute('content', 'http://www.psicologaatgenova.it/' + title.replace(/\s/g, '').replace(/:/g, '_').toLowerCase());
            }
        }
    )

    //facebookRefresh();
}

function facebookRefresh() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', 'https://graph.facebook.com/?ids=https://www.psicologaatgenova.it/&scrape=true', false);
    xmlhttp.send(null);
    console.log(xmlhttp.responseText);
}