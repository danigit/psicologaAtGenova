
//adds the content in the main page when the button Chi Sono is pressed

let aboutMe =
    '<br><p style="text-align: center;" xmlns="http://www.w3.org/1999/html"><span style="font-size: 60px;' +
    'color: rgb(0, 153, 255);" class="philosopher-font">Profilo professionale </span></></p>' +
    '<p style="text-align: center;"> <br><br><br> </p>' +
    '<p><span style="font-size: 18px"><strong><em>&lt;&lt;Perch&eacute; hai deciso di fare la psicologa?&gt;&gt; &lt;&lt;Per capire come funziona la ' +
    'mente e aiutare le persone!&gt;&gt;</em></strong></span></p><br>' +
    '<p><span style="font-size: 30px" class="philosopher-font">H</span><span style="font-size: 18px">o sempre avuto una grande curiosit&agrave; ' +
    'verso tutto ci&ograve; che riguarda la psiche: trovare le risposte alle domande su come funziona la mente, ' +
    'perch&eacute; facciamo quello che facciamo e come possiamo smettere di ripetere quello che non ci fa stare ' +
    'bene, comprendere le dinamiche che regolano (e dis-regolano) le emozioni, i pensieri, la comunicazione, ' +
    'le disfunzioni e le psicopatologie.</span></p><p style="text-align: justify;"><span style="font-size: 18px;"><br>' +
    'La mia preparazione inizia con la collaborazione alla ' +
    'cattedra di Psicologia Dinamica dell&#39;Universit&agrave; di Genova: partecipando a ricerche sulla ' +
    '<strong>genitorialit&agrave; adottiva</strong>, sulla <strong>psicologia di coppia</strong> (argomento della ' +
    'mia tesi di laurea dal titolo: &ldquo;Attaccamento e Adattamento Diadico: una ricerca empirica&rdquo;), ' +
    'sulla <strong>psiconcologia</strong>, sono entrata a contatto con realt&agrave; psicologiche complesse, a ' +
    'volte dolorose, a volte conflittuali, sempre intense e arricchenti.</span></p><br>' +
    '<p style="text-align: justify;"><span style="font-size: 18px;">Ho svolto i tirocini formativi presso l&#39;ASL 3 ' +
    'Genovese: al Centro Diurno &quot;Le Peschiere&quot; per l&#39;accoglienza di <strong>pazienti psichiatrici</strong>; ' +
    'al Laboratorio dei Conflitti, per la mediazione nelle <strong>coppie in fase di separazione o divorzio</strong> in ' +
    'presenza di figli minori; attualmente collaboro con il Centro Adozioni e Affidi, in qualit&agrave; di psicologa ' +
    'specializzanda in psicoterapia, per la valutazione dell&#39;idoneit&agrave; delle famiglie all&#39;' +
    'accoglienza di un minore, sostegno alla <strong>genitorialit&agrave; adottiva e affidataria</strong>, ' +
    'sostegno psicologico a minori e adolescenti adottati e loro famiglie, situazioni di trauma, abuso e ' +
    'maltrattamento. Contemporaneamente, ho seguito corsi avanzati sull&#39;adozione nazionale e internazionale, ' +
    'sul <strong>maltrattamento e l&#39;abuso nell&#39;infanzia</strong>, sull&#39;utilizzo dei <strong>test ' +
    'grafici proiettivi</strong>, sulle tecniche di <strong>rilassamento psico-corporeo</strong>, <strong>training ' +
    'autogeno</strong>, <strong>visualizzazione guidata</strong>, <strong>tecniche induttive e immaginative</strong>.</span></p><br>' +
    '<p style="text-align: justify;"><span style="font-size: 18px;">La mia formazione &egrave; proseguita con la ' +
    'frequenza della Scuola di <strong>Specializzazione in Psicoterapia</strong> (ITAT &ndash; Torino) ad orientamento ' +
    '<strong>Analitico-Transazionale</strong>, grazie alla quale ho imparato <strong>tecniche cognitive, comportamentali, ' +
    'psicodinamiche, relazionali e gestaltiche</strong> per affrontare le sfidee gli eventi ai quali la vita ci espone: ' +
    'nel mio studio presso il <a href="https://www.genovapsicologia.it/" rel="noopener noreferrer" target="_blank">' +
    'Centro di Psicoterapia 2.0</a> seguo adolescenti e adulti nell&#39;accompagnamento in <strong>periodi ' +
    'difficili della vita</strong> (lutti, separazioni, malattia propria o di una persona cara, ecc.), nell&#39;' +
    'approfondimento della propria storia, nel disvelamento del proprio <strong>&quot;copione&quot; ' +
    'psicologico</strong>, e nell&#39;affrontare percorsi riabilitativi rispetto a disturbi psicologici ' +
    'complessi come <strong>ansia</strong>, <strong>depressione, attacchi di panico, fobie, disturbi alimentari, ' +
    'disturbi relazionali</strong>, ecc.; mi sono specializzata sul trattamento del <strong>trauma</strong> ' +
    'acquisendo la certificazione <strong>EMDR di I e II livello</strong> e frequentando regolarmente corsi di ' +
    'aggiornamento.</span></p><br>'+
    '<p style="text-align: justify;"><span style="font-size: 18px;">Quello che ho osservato &egrave; che le menti di tutte ' +
    'le persone funzionano complessivamente in modo simile, ma <strong>sono le differenze che ci rendono unici</strong>:' +
    ' l&rsquo;insieme delle esperienze personali, il modo in cui sono state elaborate, gli eventi di vita, le nostre ' +
    'risorse innate o apprese e le nostre fragilit&agrave;, rendono ogni persona unica e irripetibile. Di conseguenza, ' +
    '&ldquo;capire come funziona la mente&rdquo; &egrave; riduttivo, e insufficiente a comprendere e aiutare una persona. ' +
    'I suoi <strong>sintomi</strong> raccontano una storia che sar&agrave; differente dagli stessi sintomi presentati da ' +
    'un&rsquo;altra persona, e andranno capiti e trattati in modo diverso. Per questo ogni terapia verr&agrave; &quot;' +
    'cucita&quot; su quella particolare persona: la base sar&agrave; sempre l&#39;accettazione e <strong>l&rsquo;assenza ' +
    'di giudizio</strong>, le tecniche terapeutiche verranno scelte e combinate in base alle caratteristiche e peculiarit&agrave; ' +
    'dell&rsquo;individuo e del problema che porta.</span></p><br>' +
    '<p style="text-align: justify;"><span style="font-size: 18px;"><strong><em>Oggi, alla domanda &lt;&lt;Perch&eacute; ' +
    'fai la psicologa?&gt;&gt; rispondo: &lt;&lt;Per l&#39;esperienza unica, emozionante, di accompagnare le persone nella ' +
    'scoperta di se stesse&gt;&gt;</em></strong></span></p>'+
    '<p style="text-align: justify;"><span style="font-size: 18px;"><br></span></p>'+
    '<hr style="text-align: justify;" class="horizontal-line">'+
    '<p style="text-align: justify;"><span style="font-size: 18px;"><br></span></p>'+
    '<p style="text-align: justify;"><span style="font-size: 18px; color: rgb(0, 153, 255);"><strong>Ricevo su appuntamento ' +
    'a Genova presso il mio studio nel Centro di Psicoterapia 2.0 situato in Via XXV Aprile 8/6.</strong></span></p>";';

let services =
    '<br><p style="text-align: center;"><span style="font-size: 60px;"><span style="color: rgb(0, 153, 255);" class="philosopher-font">Attivit&agrave; ' +
    'professionale</span></></span> </p><br><br>'+
    '<p><span style="font-size: 30px;" class="philosopher-font">N</span><span style="font-size: 18px;">ella mia pratica clinica mi occupo di ' +
    'adolescenti, adulti e coppie.</span></p><br>' +
    '<p><span style="font-size: 18px;">In particolare mi dedico ai seguenti ambiti:</span></p>'+
    '<ul class="ul-formatting">' +
    '<li><span style="font-size: 18px;"><strong>diagnosi</strong></span></li>' +
    '<li><span style="font-size: 18px;">orientamento e sostegno per chi presenta un&nbsp;<strong>malessere</strong> noto o al quale non riesce a dare un nome</span></li>' +
    '<li><span style="font-size: 18px;">percorsi di riabilitazione per&nbsp;<strong>pazienti psichiatrici</strong> o loro&nbsp;<strong>familiari</strong></span></li>' +
    '<li><span style="font-size: 18px;">problematiche&nbsp;<strong>adolescenziali</strong></span></li>' +
    '<li><span style="font-size: 18px;">relazione di&nbsp;<strong>coppia</strong></span></li>' +
    '<li><span style="font-size: 18px;">sostegno alla&nbsp;<strong>genitorialit&agrave;</strong> naturale, adottiva, affidataria</span></li>' +
    '<li><span style="font-size: 18px;">sostegno nell&rsquo;elaborazione del&nbsp;<strong>lutto</strong></span></li>' +
    '<li><span style="font-size: 18px;">elaborazione&nbsp;<strong>traumi</strong> passati o recenti</span></li>' +
    '<li><span style="font-size: 18px;">percorsi per la&nbsp;<strong>egolazione delle emozioni</strong> (Es. gestione della rabbia, di stati ansiosi, ecc.)</span></li>' +
    '<li><span style="font-size: 18px;">percorsi per l&rsquo;aumento e il mantenimento di una buona&nbsp;<strong>autostima</strong></span></li>' +
    '</ul><br>'+
    '<p style="text-align: justify;"><span style="font-size: 18px;">Considerando che la scelta di intraprendere un ' +
    'percorso psicologico pu&ograve; cambiare la vita, <strong>il primo colloquio &egrave; gratuito</strong>, per ' +
    'conoscerci reciprocamente e valutare, in totale serenit&agrave;, se c&rsquo;&egrave; la sintonia giusta e necessaria ' +
    'per cominciare a lavorare insieme.<br><br>Ogni seduta successiva avr&agrave; un costo di <strong>60&euro;</strong> ' +
    'per i colloqui individuali e <strong>80&euro;</strong> per i colloqui rivolti alle coppie.</span></p>'+
    '<br>'+
    '<hr class="horizontal-line">' +
    '<br>'+
    '<p><span style="font-size: 18px;"><strong>N.B.</strong> Le fatture relative alle prestazioni psicologiche sono fatture ' +
    'sanitarie a tutti gli effetti e, come tali, sono detraibili al momento della dichiarazione dei redditi nella misura ' +
    'del 19%.</span></p>';

let eventi =
    '<br><p style="text-align: center;"><span style="font-size: 60px; color: rgb(0, 153, 255);" class="philosopher-font">Eventi in programma</span></p><br>' +
    '<p style="text-align: center;"><img src="../img/default/prossimi_eventi.jpg" style="width: 926px;" class="fr-fic fr-dib"></p>'+
    '<p style="text-align: center;"><br></p>'+
    '<p style="text-align: justify;"><span style="font-size: 30px;">C</span><span style="font-size: 18px;">onsiderate le ' +
    'numerose richieste pervenute, in autunno verranno riproposti gli incontri su <strong>ansia</strong> e <strong>depressione' +
    '</strong>, arricchiti dalle osservazioni e dagli spunti forniti dai partecipanti all&rsquo;edizione primaverile.</span></p>' +
    '<br><p><span style="font-size: 18px;">Verranno proposti inoltre incontri su altri argomenti di interesse psicologico.</span></p>'+
    '<p><span style="font-size: 18px;">A breve tutte le informazioni!</span></p> <br>'+
    '<p style="text-align: center;"><span style="font-size: 60px; color: rgb(0, 153, 255);" class="philosopher-font">Eventi passati</span></p><br>'+
    '<h2><span style="font-size: 30px;" class="philosopher-font">Praticando la psicologia</span></h2><br>'+
    '<p><span style="font-size: 18px;"><strong>Incontri gratuiti</strong> teorico-pratici sui temi dell&#39;ansia e ' +
    'della depressione</span></p><br>'+
    '<p><span style="font-size: 18px;">SABATO 3 MARZO 2018 - H 15:00</span></p>'+
    '<p><span style="font-size: 18px;">SABATO7 APRILE 2018 - H 15:00</span></p> <br>'+
    '<p><img src="../img/default/praticando.jpg"style="width: 926px;" class="fr-fic fr-dib"></p> <br>'+
    '<p style="text-align: justify;"><span style="font-size: 18px;">Presso il ' +
    '<a href="https://www.genovapsicologia.it/" rel="noopener noreferrer" target="_blank">Centro di Psicoterapia 2.0</a> ' +
    '(Via XXV Aprile 8/6 &ndash; Genova), in collaborazione con la ' +
    '<a href="https://www.facebook.com/milviaspinettapsicologa/" rel="noopener noreferrer" target="_blank">dott. ' +
    'Milvia Spinetta</a>, vengono proposti al pubblico due incontri per conoscere, sfatare qualche mito, e ' +
    'cominciare ad affrontare i due disturbi pi&ugrave; diffusi della nostra epoca: l&rsquo;<strong>ansia</strong> ' +
    'e la <strong>depressione</strong>.</span></p><br>'+
    '<p style="text-align: justify;"><span style="font-size: 18px;">&ldquo;<strong>La vita mi stressa!' +
    '</strong>&rdquo; &ndash; Conoscere e affrontare l&rsquo;ansia</span></p><br>' +
    '<p style="text-align: justify;"><span style="font-size: 18px;">SABATO 3 MARZO vi parler&ograve; di cosa &egrave; ' +
    'l&rsquo;ansia dal punto di vista della psicologia clinica, vedremo che ruolo ha rispetto agli altri stati emotivi, ' +
    'conosceremo i vari disturbi d&rsquo;ansia e l&rsquo;approccio alla cura attraverso l&rsquo;Analisi Transazionale.</span></p>'+
    '<p style="text-align: justify;"><span style="font-size: 18px;">Durante l&rsquo;incontro, per chi ne avr&agrave; ' +
    'piacere, verranno distribuiti test di autovalutazione relativi agli argomenti trattati e verr&agrave; proposta una ' +
    'breve esercitazione di mindfulness guidata per l&rsquo;osservazione delle proprie emozioni.</span></p><br>'+
    '<p style="text-align: justify;"><span style="font-size: 18px;">&ldquo;<strong>Uff... Che fatica la vita...' +
    '</strong>&rdquo; &ndash; Conoscere e affrontare la depressione</span></p><br>'+
    '<p style="text-align: justify;"><span style="font-size: 18px;">SABATO 7 APRILE la collega dott.ssa Spinetta ' +
    'affronter&agrave; il tema della depressione. Attraverso l&rsquo;esemplificazione di un caso clinico verranno ' +
    'illustrati i processi psicologici che sottendono questo disturbo, e il modo in cui viene trattato attraverso la CBT.</span></p>'+
    '<p style="text-align: justify;"><span style="font-size: 18px;">Chi avr&agrave; piacere potr&agrave; presentare ' +
    'riflessioni personali su argomenti specifici introdotti dalla dottoressa per discutere e chiarirne alcuni aspetti, e ' +
    'compilare i test psicologici che verranno proposti.</span></p><br>'+
    '<hr class="horizontal-line"><br>'+
    '<p style="text-align: justify;"><span style="font-size: 18px; color: rgb(0, 153, 255);">Considerato lo spazio limitato,' +
    '&egrave; richista l&rsquo;iscrizione per mail (simona.bettoli@gmail.com) o sms (333 873.72.31), specificando ' +
    'la/ledata/e cui si intende partecipare. Vi aspettiamo!</span></p><br>';

var contact = '<div class="container">'
    + '<div class="row">'
    + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 text-center display-4 page-title philosopher-font blue-text">'
    + 'Come e dove trovarmi<br>'
    + '</div> </div>'
    + '<div class="text-center open-font font-large">'
    + '<h4>Per ogni dubbio, richiesta informazioni, o per fissare un primo colloquio gratuito, compila il form qui sotto, ti risponderò al più presto:</h4><br><br>'
    + '</div>'
    + '<p class="open-font" id="forced-fields">I campi contrassegnati con l\'asterisco (*) sono obbligatori.</p><br>'
    + '<form id="contactForm" action="#" method="post" name="contact">'
    + '<div class="md-form">'
    + '<i class="fa fa-user prefix"></i>'
    + '<input type="text" id="form1" class="form-control" name="nome">'
    + '<label for="form1">Nome*</label>'
    + '</div>'
    + '<div class="md-form">'
    + '<i class="fa fa-envelope prefix"></i>'
    + '<input type="text" id="form2" class="form-control" name="email">'
    + '<label for="form2">E-mail*</label>'
    + '</div>'
    + '<div class="md-form">'
    + '<i class="fa fa-tag prefix"></i>'
    + '<input type="text" id="form3" class="form-control" name="oggetto">'
    + '<label for="form3">Oggetto</label>'
    + '</div>'
    + '<div class="md-form">'
    + '<i class="fa fa-pencil prefix"></i>'
    + '<textarea type="text" id="form4" class="md-textarea" name="contenuto"></textarea>'
    + '<label for="form4">Contenuto*</label>'
    + '</div>'
    + '</form>'
    + '<div class="text-center">'
    + '<button class="btn btn-default" id="send-mail">Invia</button>'
    + '<div class="call"><br>'
    + '<h4>Oppure invia un SMS e ti richiamerò non appena mi sarà possibile:<br>'
    + '<span><i class="fa fa-phone"> </i></span> 333 87 37 231</p></h4><br><br>'
    + '</div> </div> </div>'
    + '<div class="row">'
    + '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'
    + '<div id="map" class="mapClass">'
    + '</div> </div> </div>'
    + '</div> </div>';

let transactional =
    '<br> <p style="text-align: center;"><span style="font-size: 60px; color: rgb(0, 153, 255);" class="philosopher-font">' +
    'Analisi Transazionale</span></p> <br>' +
    '<p style="text-align: justify;"><img src="../img/default/psicoterapia_analitico_transazionale.jpg" style="' +
    'width: 1000px;" class="fr-fic fr-dib"><span style="font-size: 18px;"><br></span></p><br>'+
    '<p style="text-align: justify;"><span style="font-size: 30px;" class="philosopher-font">L</span><span style="font-size: 18px">&rsquo;approccio Analitico Transazionale viene ' +
    'utilizzato nel trattamento di disturbi psicologici di ogni tipo, essendo un metodo di psicoterapia <strong>individuale' +
    '</strong>, di <strong>coppia</strong>, di <strong>gruppo</strong> e <strong>familiare</strong>di comprovata efficacia.' +
    '</span></p><br>'+
    '<p style="text-align: justify;"><span style="font-size: 18px;">Si tratta di una psicoterapia integrata, che attraverso ' +
    'l&rsquo;utilizzo di tecniche <strong>cognitive</strong>, <strong>comportamentali</strong>, <strong>gestaltiche</strong> ' +
    'e <strong>del profondo</strong>, pu&ograve; avere una durata <strong>breve</strong> (<strong>risolvere un sintomo</strong> ' +
    'o problema specifico, con l&rsquo;obiettivo di un cambiamento comportamentale e del suo mantenimento nel tempo) o ' +
    'relativamente <strong>pi&ugrave; lunga</strong> (in questo caso la terapia non &egrave; rivolta solo ad un sollievo ' +
    'dai sintomi, bens&igrave; alla <strong>ristrutturazione della personalit&agrave;</strong>). In ogni caso, paziente e ' +
    'psicologo valuteranno insieme e stabiliranno in accordo il piano terapeutico.</span></p> <br>'+
    '<p style="text-align: justify;"><span style="font-size: 18px;">Come funziona? Attraverso un linguaggio comprensibile e ' +
    'concreto, la persona diviene cosciente dei propri <strong>schemi psicologici</strong>, <strong>emotivi</strong>, ' +
    '<strong>di pensiero e di comportamento</strong> (i propri <strong>giochi</strong> preferiti, il sistema di <strong>' +
    'copione</strong>, l&rsquo;economia di <strong>carezze</strong> ecc.) e pu&ograve; decidere consapevolmente di ' +
    'modificarli per raggiungere gli obiettivi di guarigione, di sviluppo o di miglioramento desiderati.</span> <br><br>'+
    '<hr class="horizontal-line" > <br>'+
    '<p><span style="font-size: 24px;">LINK</span></p> <br>'+
    '<p><span style="font-size: 18px;"><a href="http://www.aiat.it/" rel="noopener noreferrer" target="_blank">' +
    'Associazione Italiana di Analisi Transazionale</a></span></p> <p> <a href="http://www.eatanews.org/" target="_blank"></a> </p>'+
    '<p><span style="font-size: 18px;"><a href="https://www.eatanews.org/" rel="noopener noreferrer" target="_blank">' +
    'European Association for Transactional Analysis</a></span></p>';

var transactio = '<div class="container">'
    + '<div class="row">'
    + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 text-center display-4 page-title philosopher-font blue-text">'
    + 'Analisi Transazionale'
    + '</div></div> '
    + '<div class="row">'
    + '<div class="col-12 col-lg-12 col-md-12 col-sm-12">'
    + '<img src="../img/default/psicoterapia_analitico_transazionale.jpg" class="blue-border"><br><br>'
    + '</div></div> '
    + '<div class="row"> '
    + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 open-font font-large"> '
    + "<h2 class='d-inline philosopher-font'>L</h2><p class='d-inline'>\’approccio Analitico Transazionale viene "
    + "utilizzato nel trattamento di disturbi psicologici di ogni tipo, essendo un metodo di psicoterapia <b>individuale</b>, "
    + "di <b>coppia</b>, di <b>gruppo</b> e <b>familiare</b> di comprovata efficacia.</p><br><br>"
    + "<p>Si tratta di una psicoterapia integrata, che attraverso l’utilizzo di tecniche <b>cognitive</b>, "
    + "<b>comportamentali</b>, <b>gestaltiche</b> e <b>del profondo</b>, può avere una durata <b>breve</b> (<b>risolvere "
    + "un sintomo</b> o problema specifico, con l\’obiettivo di un cambiamento comportamentale e del suo mantenimento nel "
    + "tempo) o relativamente <b>più lunga</b> (in questo caso la terapia non è rivolta solo ad un sollievo dai sintomi, "
    + "bensì alla <b>ristrutturazione della personalità</b>). In ogni caso, paziente e psicologo valuteranno insieme e "
    + "stabiliranno in accordo il piano terapeutico.</p><br>"
    + "<p>Come funziona? Attraverso un linguaggio comprensibile e concreto, la persona diviene cosciente dei propri "
    + "<b>schemi psicologici</b>, <b>emotivi</b>, <b>di pensiero e di comportamento</b> (i propri <b>giochi</b> preferiti, "
    + "il sistema di <b>copione</b>, l\’economia di <b>carezze</b> ecc.) e può decidere consapevolmente di modificarli "
    + "per raggiungere gli obiettivi di guarigione, di sviluppo o di miglioramento desiderati.<br><br>"
    + '</div></div>'
    + "<hr class='horizontal-line'>"
    + '<p class="font-x-large">LINK</p><br>'
    + '<p><a href="http://www.aiat.it/" target="-_blank" class="blue-text">A.I.A.T</a></p>'
    + '<p><a href="http://www.eatanews.org/" target="_blank" class="blue-text" ">EATA</a></p>'
    + '</div> ';

let emdr =
    '<br><p style="text-align: center;"><span style="font-size: 60px; color: rgb(0, 153, 255);" class="philosopher-font">EMDR</span></p> <br>'+
    '<p style="text-align: center;"><img data-fr-image-pasted="true" src="../img/default/EMDR.jpg" class="fr-fic fr-dii"></p><br>'+
    '<p style="text-align: justify;"><span style="font-size: 30px;" class="philosopher-font">L</span><span style="font-size: 18px;">&rsquo;EMDR ' +
    '(Eye Movement Desensitization and Reprocessing, in italiano: Desensibilizzazione e Rielaborazione attraverso i ' +
    'Movimenti Oculari) &egrave; un metodo psicoterapico strutturato che facilita il trattamento di diverse psicopatologie ' +
    'e problemi legati sia ad <strong>eventi traumatici</strong>, che a esperienze pi&ugrave; comuni ma <strong>' +
    'emotivamente stressanti</strong>.</span></p><br>'+
    '<p style="text-align: justify;"><span style="font-size: 18px;">&Egrave; un approccio psicoterapico interattivo ' +
    'e standardizzato, scientificamente comprovato da pi&ugrave; di 20 studi randomizzati controllati condotti ' +
    'su pazienti traumatizzati e documentato in centinaia di pubblicazioni che ne riportano l&rsquo;efficacia ' +
    'nel trattamento di numerose psicopatologie inclusi la depressione, l&rsquo;ansia, le fobie, il lutto acuto, ' +
    'i sintomi somatici e le dipendenze.</span></p><br>'+
    '<p style="text-align: justify;"><span style="font-size: 18px;">L&rsquo;Organizzazione Mondiale della ' +
    'Sanit&agrave; nel 2013 ha riconosciuto l&rsquo;EMDR come trattamento d&rsquo;elezione (<em>evidence-based' +
    '</em>) per i disturbi legati allo stress e a esperienze traumatiche.</span></p><br>'+
    '<p style="text-align: justify;"><span style="font-size: 18px;">La terapia EMDR ha come base teorica il modello AIP' +
    '(Adaptive Information Processing) che affronta i <strong>ricordi non elaborati</strong> che possono dare ' +
    'origine a molte disfunzioni. Numerosi studi neurofisiologici hanno documentato i&nbsp;<strong>rapidi ' +
    'effetti post-trattamento</strong> EMDR.</span></p> <br>'+
    '<hr class="horizontal-line" ><br>'+
    '<p><span style="font-size: 24px;">LINK</span></p>'+
    '<p> <a href="http://emdr.it/" target="_blank"></a></p>'+
    '<p><a href="http://emdr.it/" rel="noopener noreferrer" target="_blank"><span style="font-size: 18px;">Eye Movement ' +
    'Desensitization and Reprocessing</span></a></p>';

var em = '<div class="container">'
    + '<div class="row">'
    + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 text-center display-4 page-title philosopher-font blue-text">'
    + 'EMDR'
    + '</div></div> '
    + '<div class="row">'
    + '<div class="col-12 col-lg-12 col-md-12 col-sm-12">'
    + '<img src="../img/default/EMDR.jpg" class="blue-border"><br><br>'
    + '</div></div> '
    + '<div class="row"'
    + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 open-font font-large"> '
    + "<h2 class='d-inline philosopher-font'>L</h2><p class='d-inline'>’EMDR (Eye Movement Desensitization "
    + "and Reprocessing, in italiano: Desensibilizzazione e Rielaborazione attraverso i Movimenti Oculari) è un metodo psicoterapico "
    + "strutturato che facilita il trattamento di diverse psicopatologie e problemi legati sia ad <b>eventi traumatici</b>, "
    + "che a esperienze più comuni ma <b>emotivamente stressanti</b>.</p><br>"
    + "<p>È un approccio psicoterapico interattivo e standardizzato, scientificamente comprovato da più di 20 studi "
    + "randomizzati controllati condotti su pazienti traumatizzati e documentato in centinaia di pubblicazioni che ne "
    + "riportano l\’efficacia nel trattamento di numerose psicopatologie inclusi la depressione, l\’ansia, le fobie, il "
    + "lutto acuto, i sintomi somatici e le dipendenze.</p><br>"
    + "<p>L\’Organizzazione Mondiale della Sanità nel 2013 ha riconosciuto l\’EMDR come trattamento d\’elezione "
    + "(<i>evidence-based</i>) per i disturbi legati allo stress e a esperienze traumatiche.</p><br>"
    + "<p>La terapia EMDR ha come base teorica il modello AIP (Adaptive Information Processing) che affronta i "
    + "<b>ricordi non elaborati</b> che possono dare origine a molte disfunzioni. Numerosi studi neurofisiologici hanno "
    + "documentato i <b>rapidi effetti post-trattamento</b> EMDR.</p><br><br>"
    + '</div></div>'
    + "<hr class='horizontal-line'>"
    + '<p class="font-x-large">LINK</p><br>'
    + '<p><a href="http://emdr.it/" target="_blank" class="blue-text">EMDR</a></p>'
    + '</div>';

var training = '<div class="container">'
    + '<div class="row">'
    + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 text-center display-4 page-title philosopher-font blue-text">'
    + 'Training Autogeno'
    + '</div></div> '
    + '<div class="row">'
    + '<div class="col-12 col-lg-12 col-md-12 col-sm-12" id="analisi-image">'
    + '<img src="../img/default/training_autogeno.jpg" class="blue-border"><br><br>'
    + '</div></div> '
    + '<div class="row"> '
    + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 open-font font-large"> '
    + "<h2 class='d-inline philosopher-font'>I</h2><p class='d-inline'>l Training Autogeno è una tecnica "
    + "di auto-distensione psicofisiologica, mirata alla gestione dello stress e delle emozioni, utile nel miglioramento "
    + "del benessere, di performance sportive, ma anche nel trattamento dei disturbi d\’ansia e psicosomatici. Si basa "
    + "sull\’apprendimento (training) di una serie di esercizi di concentrazione psichica, e sul concetto di \“autogenicità\”,"
    + " cioè la capacità di indurre determinate modificazioni di funzioni involontarie a livello dell\’apparato respiratorio, "
    + "dell\’apparato muscolare, del sistema cardiovascolare e del sistema neurovegetativo.</p><br><br>"
    + "<p>Una volta sperimentata e appresa, tale tecnica può essere utilizzata autonomamente in qualsiasi momento di "
    + "bisogno, al fine di alleviare stati di ansia e stress e recuperare energie e concentrazione.</p><br><br>"
    + '</div></div>'
    + "<hr class='horizontal-line'>"
    + '</div> ';

var relax = '<div class="container">'
    + '<div class="row">'
    + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 text-center display-4 page-title philosopher-font blue-text">'
    + 'Tecniche di rilassamento psico-corporeo'
    + '</div></div> '
    + '<div class="row">'
    + '<div class="col-12 col-lg-12 col-md-12 col-sm-12" id="analisi-image">'
    + '<img src="../img/default/psi_benessere.jpg" class="blue-border"><br><br>'
    + '</div></div> '
    + '<div class="row"> '
    + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 open-font font-large"> '
    + "<h2 class='d-inline philosopher-font'>S</h2><p class='d-inline'>pesso, sono proprio le persone "
    + "che avrebbero maggior bisogno di lavorare con tecniche di rilassamento psico-corporeo (perché stressate o vittime "
    + "di ansia e panico) che non si sentono a loro agio nell\’usare queste tecniche, poiché credono che sia importante "
    + "essere sempre vigili e in allerta per guardarsi da eventuali pericoli. Hanno paura di perdere il controllo e di "
    + "lasciarsi andare.</p><br><br>"
    + "<p>Ogni individuo, inoltre, attribuisce al termine rilassamento un significato assolutamente personale: un "
    + "trattamento può essere ottimo per una persona ma risultare di difficile accettazione per un\’altra.</p><br>"
    + "<p>Per questi motivi le tecniche di rilassamento che propongo sono molteplici, scelte accuratamente in base alle "
    + "necessità, caratteristiche e desideri della persona:</p><br>"
    + '<ul class="ul-formatting">'
    + '<li><b>mindfulness</b> (tecnica meditativa che infonde un senso di rilassamento, pienezza e benessere, riduce '
    + 'l\’ansia, regola le emozioni)</li>'
    + '<li><b>osservazione guidata del respiro e tecniche di respirazione</b> (respirazione quadrata, diaframmatica, '
    + 'toracica, frenata, controllata “4-7-8” ecc.; le tecniche di respirazione risultano fondamentali nella gestione di '
    + 'disturbi d\’ansia e attacchi di panico)</li>'
    + '<li><b>rilassamento progressivo di Jacobson</b> (contrazione/decontrazione volontaria di fasci muscolari)</li>'
    + '<li><b>rilassamento frazionato di Vogt</b> (interessa l’apparato muscolare, vascolare e respiratorio, e favorisce '
    + 'la visualizzazione di immagini)</li>'
    + '<li><b>body scanner</b> (rilassamento progressivo mirato a facilitare un processo di consapevolezza delle '
    + 'percezioni che derivano da tutto il corpo)</li>'
    + '</ul>'
    + '<br><p><b class="blue-text">Obiettivo</b>: ristabilire un contatto sano di comunicazione '
    + 'mente-corpo per migliorare il benessere in generale o attivando un lavoro su problemi specifici.</b><br><br><br>'
    + '</div></div>'
    + "<hr class='horizontal-line'>"
    + '</div>';

var technique = '<div class="container">'
    + '<div class="row">'
    + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 text-center display-4 page-title philosopher-font blue-text">'
    + 'Tecnniche Induttive e Immaginative'
    + '</div></div> '
    + '<div class="row">'
    + '<div class="col-12 col-lg-12 col-md-12 col-sm-12" id="analisi-image">'
    + '<img src="../img/default/immagination.jpg" class="blue-border"><br><br>'
    + '</div></div> '
    + '<div class="row"> '
    + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 open-font font-large"> '
    + "<h2 class='d-inline philosopher-font'>T</h2><p class='d-inline'>ali tecniche mirano a riattivare "
    + "la percezione e le risorse interiori orientando la mente al corpo e alle immagini interiori, stimolando la "
    + "<b>creatività</b> e la <b>consapevolezza di sé</b>, delle proprie emozioni e delle proprie risorse.</p><br><br>"
    + "<p>Nel creare un\’immagine, mnemonica o irreale, il cervello causa cambiamenti corporei concreti e cambiamenti "
    + "comportamentali: in funzione del cambiamento desiderato sarà possibile costruire immagini e suggestioni ad hoc.</p><br>"
    + "<p>Queste tecniche risultano essere utili per indurre dei cambiamenti:</p><br>"
    + '<ul class="ul-formatting" ">'
    + '<li>sull\'umore</li>'
    + '<li>sulla salute</li>'
    + '<li>per il successo professionale</li>'
    + '<li>per rafforzare la sicurezza di sé e l\'autostima</li>'
    + '<li>per rafforzare la memoria e la capacità di concentrazione</li>'
    + '<li>per visualizzare e risolvere problemi</li>'
    + '<li>per pensarsi in contesti e modi diversi</li>'
    + '<li>per accedere a risorse interne di cui non si è consapevoli</li>'
    + '</ul><br>'
    + '<p>Il <b>Sogno guidato</b> è uno stato mentale semi-ipnoide, a metà fra la veglia ed il sonno,  caratterizzato '
    + 'da rilassamento globale.</p> <br>'
    + '<p>La guida del terapeuta è direttiva, e accompagna il paziente in modo preciso per costruire immagini e suggestioni'
    + ' in funzione dell\’obiettivo desiderato.</p><br>'
    + '<p>La <b>Visualizzazione Guidata</b> lascia più spazio al paziente nella produzione di immagini proprie, facendo '
    + 'emergere contenuti personali grazie ad un accompagnamento che lascia spazio alla fantasia e creatività spontanea '
    + 'della persona.</p><br><br>'
    + '</div></div>'
    + "<hr class='horizontal-line'>"
    + '</div> </div>'
    + '</div></div>';
