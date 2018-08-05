let words = [
    {text: "Emozioni", weight: 3},
    {text: "EMDR", weight: 10.5, handlers: {
            mouseover: function () {
                this.style.color = '#0099FF';
                this.style.cursor = 'pointer';
            },
            mouseout: function () {
                this.style.color = '#6666CC';
            },
            click: function () {
                articlesHistory('emdr:le8fasideltrattamento', true);
            }
        }},
    {text: "Copione", weight: 1.4},
    {text: "Driver", weight: 2.1},
    {text: "Ingiunzioni", weight: 2.2},
    {text: "Consulenza di coppia", weight: 3.8},
    {text: "Sessuologia", weight: 5},
    {text: "Sessualità", weight: 2.2},
    {text: "Controingiunzioni", weight: 1},
    {text: "Stati dell’Io", weight: 1.5},
    {text: "Psicosomatica", weight: 1.7},
    {text: "Depressione", weight: 2},
    {text: "Ansia", weight: 6.8},
    {text: "Fobie", weight: 0.9},
    {text: "Attacchi di panico", weight: 2.4},
    {text: "Relazioni", weight: 1.3},
    {text: "Genitorialità", weight: 1.4},
    {text: "Adozione e Affido", weight: 2.1},
    {text: "Regolazione emotiva", weight: 2.2},
    {text: "Errori", weight: 3.1},
    {text: "Mindfulness", weight: 6.3, handlers:{
            mouseover: function () {
                this.style.color = '#0099FF';
                this.style.cursor = 'pointer';
            },
            mouseout: function () {
                this.style.color = '#6666CC';
            },
            click: function () {
                clickButton('relax', true);
            }
        }},
    {text: "Disturbi di personalità", weight: 2.4},
    {text: "Disturbo da stress post-traumatico", weight: 1.3},
    {text: "Tristezza", weight: 1.4},
    {text: "Rabbia", weight: 2.1},
    {text: "Stili di attaccamento", weight: 2.2},
    {text: "Stili cognitivi", weight: 3.1},
    {text: "Disturbi di personalità", weight: 2.1},
    {text: "Narcisismo", weight: 2.2},
    {text: "Co-dipendenza", weight: 3.8},
    {text: "Analisi Transazionale", weight: 5.0, handlers:{
            mouseover: function () {
                this.style.color = '#0099FF';
                this.style.cursor = 'pointer';
            },
            mouseout: function () {
                this.style.color = '#6666CC';
            },
            click: function () {
                clickButton('transactional', true);
            }
        }},
    {text: "Disturbi alimentari", weight: 2.2},
    {text: "Rilassamento", weight: 1},
    {text: "Imagery", weight: 7.0,handlers:{
            mouseover: function () {
                this.style.color = '#0099FF';
                this.style.cursor = 'pointer';
            },
            mouseout: function () {
                this.style.color = '#6666CC';
            },
            click: function () {
                clickButton('technique', true);
            }
        }},
    {text: "Training autogeno", weight: 6.0, handlers:{
            mouseover: function () {
                this.style.color = '#0099FF';
                this.style.cursor = 'pointer';
            },
            mouseout: function () {
                this.style.color = '#6666CC';
            },
            click: function () {
                clickButton('training', true);
            }
        }},
    {text: "Respirazione", weight: 2},
    {text: "Dipendenza affettiva", weight: 2.4},
    {text: "Adolescenti", weight: 0.9},
    {text: "Simbiosi", weight: 2.4},
    {text: "Psicodiagnosi", weight: 1.3},
    {text: "Anoressia", weight: 1.4},
    {text: "Bulimia", weight: 2.1},
    {text: "Disfunzioni sessuali", weight: 2.2},
    {text: "Disturbo bipolare", weight: 3.1},
    {text: "Psicologia di coppia", weight: 10.9, handlers:{
            mouseover: function () {
                this.style.color = '#0099FF';
                this.style.cursor = 'pointer';
            },
            mouseout: function () {
                this.style.color = '#6666CC';
            },
            click: function () {
                articlesHistory('coppiechefunzionanobenevscoppiedisfunzionali:10indicatori', true);
            }
        }},
    {text: "Attaccamento disorganizzato", weight: 2.4},
    {text: "Paura", weight: 1.3},
    {text: "Attaccamento evitante", weight: 1.4},
    {text: "Attaccamento ambivalente", weight: 2.1},
    {text: "Psicopatologia", weight: 2.2},
    {text: "Difese", weight: 3.1},
    {text: "Apprendimento", weight: 2.1},
    {text: "Centratura", weight: 2.2},
    {text: "Elaborazione del lutto", weight: 3.8},
    {text: "Intimità", weight: 5},
    {text: "Creatività", weight: 2.2},
    {text: "Problemi relazionali", weight: 1},
    {text: "Attaccamento sicuro", weight: 1.5},
    {text: "Attaccamento insicuro", weight: 1.7},
    {text: "Autonomia", weight: 2},
    {text: "Trauma", weight: 6.8},
    {text: "Sogni", weight: 0.9},
    {text: "Cambiamento", weight: 6.8, handlers:{
            mouseover: function () {
                this.style.color = '#0099FF';
                this.style.cursor = 'pointer';
            },
            mouseout: function () {
                this.style.color = '#6666CC';
            },
            click: function () {
                articlesHistory('autobiografiaincinquebrevicapitoli', true);
            }
        }},
    {text: "Separazione/divorzio", weight: 1.3},
    {text: "Transessualità", weight: 1.4},
    {text: "Bisessualità", weight: 2.1},
    {text: "Omosessualità", weight: 2.2}
    /* ... */
];


function addCarousel(title, content, immage, url) {
    console.log('URL file: ' + url);

    var slide = '<li><img src="' + immage + '" class="carusel-immage"><p class="carusel-paragraph open-font" data-name="' +
        title.replace(/\s/g, "").toLowerCase() + '">' +
        '<a href="' + url + '" class="black-text prevent-pointer"><span id="carousel-title" class="philosopher-font black-text">' + title + '</span><br><br>'
        + content + '</a></p></li>';

    var allArticles = '<li class="cd-testimonials-item" id="' + title + '" >'
        + '<a href="' + url + '" ><p>' + title + '<br><br>' + content + '</p></a>'
        + '<div class="cd-author">'
        + '<img src="' + immage + '" alt="Author image"></div> </li>';


    // $('.cd-testimonials').append(slide);
    document.querySelector('.cd-testimonials').innerHTML += slide;
    document.querySelector('.cd-testimonials-all-list').innerHTML += allArticles;
}