// Telc B2 Language Elements (Sprachbausteine) Database - Sets 17 to 22
(function() {
  window.languageQuestionsSets = window.languageQuestionsSets || [];

  const newLanguageSets = [
    // ==================== TEST SET 17 ====================
    {
      setId: 17,
      parts: [
        {
          part: "Teil 1",
          title: "Sprachbausteine (Multiple-Choice)",
          description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke passt.",
          passage: "Sehr geehrte Damen und Herren,\n\nich beziehe mich auf die mir zugesandte Heizkosten- und Betriebskostenabrechnung für das vergangene Kalenderjahr. Nach eingehender Prüfung der einzelnen Rechnungsposten muss ich Ihnen leider mitteilen, ___21___ mir die ausgewiesene Nachforderung von 480 Euro fehlerhaft ___22___.\n\nIm Vergleich zum Vorjahr sind die Kosten für die Gartenpflege und den Hausmeisterdienst um mehr als 60 Prozent gestiegen, ___23___ sich am Umfang der erbrachten Dienstleistungen nichts geändert hat. Zudem wurden mir Kosten für die Reparatur des Aufzugs in Rechnung gestellt, ___24___ laut Mietvertrag ausschließlich vom Eigentümer getragen werden müssen.\n\n___25___ dieser Unstimmigkeiten lege ich hiermit form- und fristgerecht Widerspruch gegen die Abrechnung ___26___. Ich bitte Sie höflich, die genannten Positionen nochmals zu überprüfen und mir eine korrigierte Aufstellung ___27___ 14 Tagen zukommen zu lassen.\n\nBis zur Klärung des Sachverhalts behalte ich mir das Recht vor, den geforderten Nachzahlungsbetrag vorerst ___28___.\n\nFür Rückfragen stehe ich Ihnen jederzeit gerne zur ___29___.\n\nMit freundlichen Grüßen\nMarkus Sommer\n\n___30___: Kopie der Abrechnung und Mietvertrag.",
          questions: [
            { id: 21, label: "Lücke 21", options: [{ id: "a", text: "dass" }, { id: "b", text: "weil" }, { id: "c", text: "ob" }], correctAnswer: "a" },
            { id: 22, label: "Lücke 22", options: [{ id: "a", text: "erscheint" }, { id: "b", text: "erscheine" }, { id: "c", text: "erschien" }], correctAnswer: "a" },
            { id: 23, label: "Lücke 23", options: [{ id: "a", text: "obwohl" }, { id: "b", text: "trotzdem" }, { id: "c", text: "deshalb" }], correctAnswer: "a" },
            { id: 24, label: "Lücke 24", options: [{ id: "a", text: "die" }, { id: "b", text: "welcher" }, { id: "c", text: "denen" }], correctAnswer: "a" },
            { id: 25, label: "Lücke 25", options: [{ id: "a", text: "Aufgrund" }, { id: "b", text: "Trotz" }, { id: "c", text: "Anstatt" }], correctAnswer: "a" },
            { id: 26, label: "Lücke 26", options: [{ id: "a", text: "ein" }, { id: "b", text: "vor" }, { id: "c", text: "ab" }], correctAnswer: "a" },
            { id: 27, label: "Lücke 27", options: [{ id: "a", text: "innerhalb von" }, { id: "b", text: "während" }, { id: "c", text: "seit" }], correctAnswer: "a" },
            { id: 28, label: "Lücke 28", options: [{ id: "a", text: "einzubehalten" }, { id: "b", text: "einbehalten" }, { id: "c", text: "einbehaltend" }], correctAnswer: "a" },
            { id: 29, label: "Lücke 29", options: [{ id: "a", text: "Verfügung" }, { id: "b", text: "Aussicht" }, { id: "c", text: "Hand" }], correctAnswer: "a" },
            { id: 30, label: "Lücke 30", options: [{ id: "a", text: "Anlagen" }, { id: "b", text: "Zusatz" }, { id: "c", text: "Kopien" }], correctAnswer: "a" }
          ]
        },
        {
          part: "Teil 2",
          title: "Sprachbausteine (Wortschatz / Zuordnung)",
          description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort aus der Liste (A-O) in die jeweilige Lücke passt. Jedes Wort darf nur einmal verwendet werden. Fünf Wörter bleiben übrig.",
          passage: "Liebe Tanja,\n\nich hoffe, du hattest einen guten Start in die Woche. Wie du weißt, planen wir ___31___ Wochen unseren alljährlichen Betriebsausflug im Spätsommer. Die Geschäftsleitung hat sich nun ___32___ entschieden, eine gemeinsame Kanutour auf dem Fluss zu organisieren.\n\nIch habe mich bereits ___33___ gekümmert, bei einem lokalen Bootsverleih zehn Dreier-Kanus zu reservieren. Der Anbieter stellt uns auch Schwimmwesten und wasserdichte Packsäcke zur ___34___. Allerdings müssen wir noch das anschließende Grillfest am Flussufer ___35___.\n\nKönntest du dir vorstellen, die Organisation des Caterings zu ___36___? Du kennst die Vorlieben unserer Kollegen am besten und weißt genau, wer sich vegetarisch oder vegan ___37___. Wir müssen auch rechtzeitig klären, wer verbindlich an dem Ausflug ___38___ wird.\n\nIch würde mich freuen, ___39___ wir uns morgen in der Mittagspause kurz zusammensetzen könnten, um alle offenen Punkte zu besprechen.\n\nVielen Dank ___40___ deine Unterstützung!\n\nLiebe Grüße\nJens",
          options: [
            { id: "A", text: "seit" },
            { id: "B", text: "dazu" },
            { id: "C", text: "darum" },
            { id: "D", text: "Verfügung" },
            { id: "E", text: "planen" },
            { id: "F", text: "übernehmen" },
            { id: "G", text: "ernährt" },
            { id: "H", text: "teilnehmen" },
            { id: "I", text: "wenn" },
            { id: "J", text: "für" },
            { id: "K", text: "obwohl" },
            { id: "L", text: "damit" },
            { id: "M", text: "vor" },
            { id: "N", text: "über" },
            { id: "O", text: "teilgenommen" }
          ],
          items: [
            { id: 31, correctAnswer: "A" }, // seit
            { id: 32, correctAnswer: "B" }, // dazu (entscheiden dazu)
            { id: 33, correctAnswer: "C" }, // darum (kümmern darum)
            { id: 34, correctAnswer: "D" }, // Verfügung (zur Verfügung stellen)
            { id: 35, correctAnswer: "E" }, // planen
            { id: 36, correctAnswer: "F" }, // übernehmen (Organisation übernehmen)
            { id: 37, correctAnswer: "G" }, // ernährt (ernähren)
            { id: 38, correctAnswer: "H" }, // teilnehmen
            { id: 39, correctAnswer: "I" }, // wenn
            { id: 40, correctAnswer: "J" }  // für
          ]
        }
      ]
    },

    // ==================== TEST SET 18 ====================
    {
      setId: 18,
      parts: [
        {
          part: "Teil 1",
          title: "Sprachbausteine (Multiple-Choice)",
          description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke passt.",
          passage: "Sehr geehrte Frau Dr. Vogt,\n\nmit großem Interesse habe ich Ihre Anzeige auf dem Karriereportal Ihrer Agentur gelesen. Da ich mein Masterstudium im Bereich Medien- und Kommunikationsmanagement vor kurzem mit Bestnote ___21___ habe, bewerbe ich mich hiermit um die Stelle als Social Media Managerin.\n\n___22___ meines zweijährigen Traineeprogramms in einer renommierten Werbeagentur konnte ich bereits praktische Erfahrungen bei der Konzeption und Umsetzung zielgruppenspezifischer Kampagnen ___23___. Ich beherrsche gängige Analyse-Tools und verstehe es, komplexe Inhalte visuell ansprechend aufzubereiten.\n\nIch zeichne mich durch eine kreative und strukturierte Arbeitsweise ___24___ und behalte auch unter hohem Termindruck stets den ___25___. Die Aussicht, in Ihrem dynamischen Team innovative Projekte für internationale Kunden zu ___26___, reizt mich außerordentlich.\n\nIch bin ab dem 1. Oktober verfügbar und stehe Ihnen für ein Vorstellungsgespräch jederzeit gerne zur ___27___.\n\nÜber eine Einladung zu einem persönlichen Kennenlernen ___28___ ich mich sehr.\n\nMit freundlichen Grüßen\nSophie Hoffmann\n\n___29___: Lebenslauf, Arbeitszeugnisse, Portfolio.\n___30___: Gehaltsvorstellung: 45.000 Euro p.a.",
          questions: [
            { id: 21, label: "Lücke 21", options: [{ id: "a", text: "abgeschlossen" }, { id: "b", text: "beschlossen" }, { id: "c", text: "entschlossen" }], correctAnswer: "a" },
            { id: 22, label: "Lücke 22", options: [{ id: "a", text: "Während" }, { id: "b", text: "Trotz" }, { id: "c", text: "Wegen" }], correctAnswer: "a" },
            { id: 23, label: "Lücke 23", options: [{ id: "a", text: "sammeln" }, { id: "b", text: "gesammelt" }, { id: "c", text: "sammelnd" }], correctAnswer: "a" },
            { id: 24, label: "Lücke 24", options: [{ id: "a", text: "aus" }, { id: "b", text: "ab" }, { id: "c", text: "auf" }], correctAnswer: "a" },
            { id: 25, label: "Lücke 25", options: [{ id: "a", text: "Überblick" }, { id: "b", text: "Ausblick" }, { id: "c", text: "Einblick" }], correctAnswer: "a" },
            { id: 26, label: "Lücke 26", options: [{ id: "a", text: "begleiten" }, { id: "b", text: "leiten" }, { id: "c", text: "führen" }], correctAnswer: "a" },
            { id: 27, label: "Lücke 27", options: [{ id: "a", text: "Verfügung" }, { id: "b", text: "Auswahl" }, { id: "c", text: "Aussicht" }], correctAnswer: "a" },
            { id: 28, label: "Lücke 28", options: [{ id: "a", text: "würde" }, { id: "b", text: "wäre" }, { id: "c", text: "hätte" }], correctAnswer: "a" },
            { id: 29, label: "Lücke 29", options: [{ id: "a", text: "Anlagen" }, { id: "b", text: "Kopie" }, { id: "c", text: "Zusatz" }], correctAnswer: "a" },
            { id: 30, label: "Lücke 30", options: [{ id: "a", text: "Angabe" }, { id: "b", text: "Wunsch" }, { id: "c", text: "Hinweis" }], correctAnswer: "a" }
          ]
        },
        {
          part: "Teil 2",
          title: "Sprachbausteine (Wortschatz / Zuordnung)",
          description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort aus der Liste (A-O) in die jeweilige Lücke passt. Jedes Wort darf nur einmal verwendet werden. Fünf Wörter bleiben übrig.",
          passage: "Der Güterverkehr in den Innenstädten steht vor tiefgreifenden Veränderungen. Immer mehr Logistikunternehmen setzen auf der sogenannten 'letzten Meile' bewusst ___31___ schwere Lieferwagen und erproben stattdessen moderne Lastenräder mit elektrischer Unterstützung. Gründe für diesen Wandel gibt es viele: Zum einen leiden Stadtzentren unter verstopften Straßen, ___32___ Paketzusteller oft in zweiter Reihe parken müssen.\n\nZum anderen ermöglichen Lastenräder eine deutlich schnellere Zustellung in Fußgängerzonen und engen Gassen. Die wendigen Fahrzeuge verfügen ___33___ geräumige Transportboxen und können problemlos auf Radwegen fahren. Um den Betrieb zu ___34___, richten Logistiker sogenannte Mikro-Depots am Stadtrand ein, von denen aus die Kuriere ihre Touren ___35___.\n\nExperten weisen jedoch ___36___ hin, dass die Anschaffungskosten für gewerbliche Lastenräder noch hoch sind. Wer sich ___37___ den Umstieg auf die emissionsfreie Flotte entscheidet, profitiert allerdings von staatlichen Fördergeldern und geringen Betriebskosten. Die Zukunft der städtischen Logistik hängt maßgeblich ___38___ ab, wie konsequent die Kommunen sichere Radwege ___39___.\n\nDas Lastenrad leistet somit einen wertvollen Beitrag ___40___ lebenswerteren Stadt.",
          options: [
            { id: "A", text: "gegen" },
            { id: "B", text: "weil" },
            { id: "C", text: "über" },
            { id: "D", text: "optimieren" },
            { id: "E", text: "starten" },
            { id: "F", text: "darauf" },
            { id: "G", text: "für" },
            { id: "H", text: "davon" },
            { id: "I", text: "ausbauen" },
            { id: "J", text: "zur" },
            { id: "K", text: "obwohl" },
            { id: "L", text: "damit" },
            { id: "M", text: "seit" },
            { id: "N", text: "gestartet" },
            { id: "O", text: "wird" }
          ],
          items: [
            { id: 31, correctAnswer: "A" }, // gegen (entscheiden gegen)
            { id: 32, correctAnswer: "B" }, // weil
            { id: 33, correctAnswer: "C" }, // über (verfügen über)
            { id: 34, correctAnswer: "D" }, // optimieren
            { id: 35, correctAnswer: "E" }, // starten
            { id: 36, correctAnswer: "F" }, // darauf (hinweisen auf)
            { id: 37, correctAnswer: "G" }, // für (entscheiden für)
            { id: 38, correctAnswer: "H" }, // davon (abhängen von)
            { id: 39, correctAnswer: "I" }, // ausbauen
            { id: 40, correctAnswer: "J" }  // zur (Beitrag zur Stadt)
          ]
        }
      ]
    },

    // ==================== TEST SET 19 ====================
    {
      setId: 19,
      parts: [
        {
          part: "Teil 1",
          title: "Sprachbausteine (Multiple-Choice)",
          description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke passt.",
          passage: "Sehr geehrte Damen und Herren,\n\nhiermit kündige ich meinen Mitgliedsvertrag (Mitgliedsnummer: 74219) bei Ihrem Fitnessstudio außerordentlich und mit sofortiger Wirkung ___21___ 31. August dieses Jahres. Der Grund für diese vorzeitige Kündigung ist mein berufsbedingter Umzug nach Zürich in die Schweiz.\n\nLaut § 8 Ihrer Allgemeinen Geschäftsbedingungen besteht bei einem Wohnortwechsel von mehr als 50 Kilometern ein Sonderkündigungsrecht, ___22___ ich hiermit Gebrauch mache. Als Nachweis lege ich diesem Schreiben eine Kopie meines neuen Arbeitsvertrags sowie die Abmeldebestätigung des Einwohnermeldeamtes ___23___.\n\nIch bitte Sie höflich, mir die Kündigung sowie das genaue Beendigungsdatum schriftlich zu ___24___. Zudem widerrufe ich mit Wirksamkeit der Kündigung die Ihnen erteilte Einzugsermächtigung ___25___ mein Bankkonto.\n\nSollten noch offene Beträge bestehen, bitte ich Sie, mir eine detaillierte Endabrechnung ___26___, damit ich den Betrag per Überweisung begleichen ___27___.\n\nIch bedanke mich ___28___ die angenehme Zeit und das stets freundliche Trainingsteam in Ihrem Studio.\n\nMit freundlichen Grüßen\nChristian Brand\n\n___29___: Arbeitsvertrag und Meldebescheinigung.\n___30___: Neue Adresse ab 1. September: Bahnhofstr. 12, 8001 Zürich.",
          questions: [
            { id: 21, label: "Lücke 21", options: [{ id: "a", text: "zum" }, { id: "b", text: "am" }, { id: "c", text: "im" }], correctAnswer: "a" },
            { id: 22, label: "Lücke 22", options: [{ id: "a", text: "wovon" }, { id: "b", text: "worüber" }, { id: "c", text: "wodurch" }], correctAnswer: "a" },
            { id: 23, label: "Lücke 23", options: [{ id: "a", text: "bei" }, { id: "b", text: "an" }, { id: "c", text: "vor" }], correctAnswer: "a" },
            { id: 24, label: "Lücke 24", options: [{ id: "a", text: "bestätigen" }, { id: "b", text: "bestätigt" }, { id: "c", text: "bestätigend" }], correctAnswer: "a" },
            { id: 25, label: "Lücke 25", options: [{ id: "a", text: "für" }, { id: "b", text: "über" }, { id: "c", text: "an" }], correctAnswer: "a" },
            { id: 26, label: "Lücke 26", options: [{ id: "a", text: "zuzusenden" }, { id: "b", text: "zusenden" }, { id: "c", text: "gesendet" }], correctAnswer: "a" },
            { id: 27, label: "Lücke 27", options: [{ id: "a", text: "kann" }, { id: "b", text: "muss" }, { id: "c", text: "soll" }], correctAnswer: "a" },
            { id: 28, label: "Lücke 28", options: [{ id: "a", text: "für" }, { id: "b", text: "über" }, { id: "c", text: "an" }], correctAnswer: "a" },
            { id: 29, label: "Lücke 29", options: [{ id: "a", text: "Anlagen" }, { id: "b", text: "Zusatz" }, { id: "c", text: "Kopie" }], correctAnswer: "a" },
            { id: 30, label: "Lücke 30", options: [{ id: "a", text: "Hinweis" }, { id: "b", text: "Notiz" }, { id: "c", text: "Angabe" }], correctAnswer: "a" }
          ]
        },
        {
          part: "Teil 2",
          title: "Sprachbausteine (Wortschatz / Zuordnung)",
          description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort aus der Liste (A-O) in die jeweilige Lücke passt. Jedes Wort darf nur einmal verwendet werden. Fünf Wörter bleiben übrig.",
          passage: "Lieber Florian,\n\nich wollte mich schon längst bei dir melden, aber ich bin ___31___ den letzten Wochen bis über beide Ohren im Renovierungsstress versunken. Wie du weißt, habe ich mir im Frühjahr eine alte Altbauwohnung gekauft, ___32___ die Substanz ziemlich sanierungsbedürftig war.\n\nGemeinsam mit meinem Vater habe ich die alten Holzdielen abgeschliffen und die Wände neu verputzt. Die Arbeit hat sich wirklich gelohnt: Die hohen Decken und der Stuck verleihen den Räumen einen ganz besonderen ___33___. Allerdings gab es im Badezimmer unerwartete Probleme ___34___ den alten Wasserrohren, weshalb wir eine Fachfirma beauftragen mussten.\n\nIch habe mich ___35___ entschieden, im Wohnzimmer eine offene Küche einzubauen. Die Möbel sind bereits geliefert und fachgerecht ___36___. Nun fehlen nur noch ein paar gemütliche Lampen und Vorhänge, ___37___ die Wohnung richtig wohnlich wird.\n\nIch würde mich riesig freuen, ___38___ du am nächsten Samstag Zeit hättest, auf ein Feierabendbier vorbeizukommen. Sag mir einfach Bescheid, ___39___ Uhrzeit dir am besten passt.\n\nViele Grüße und hoffentlich ___40___ bald!\nDein Jonas",
          options: [
            { id: "A", text: "in" },
            { id: "B", text: "obwohl" },
            { id: "C", text: "Charme" },
            { id: "D", text: "mit" },
            { id: "E", text: "dafür" },
            { id: "F", text: "montiert" },
            { id: "G", text: "damit" },
            { id: "H", text: "wenn" },
            { id: "I", text: "welche" },
            { id: "J", text: "bis" },
            { id: "K", text: "weil" },
            { id: "L", text: "seit" },
            { id: "M", text: "vor" },
            { id: "N", text: "über" },
            { id: "O", text: "wäre" }
          ],
          items: [
            { id: 31, correctAnswer: "A" }, // in
            { id: 32, correctAnswer: "B" }, // obwohl
            { id: 33, correctAnswer: "C" }, // Charme
            { id: 34, correctAnswer: "D" }, // mit (Probleme mit)
            { id: 35, correctAnswer: "E" }, // dafür (entscheiden dafür)
            { id: 36, correctAnswer: "F" }, // montiert
            { id: 37, correctAnswer: "G" }, // damit
            { id: 38, correctAnswer: "H" }, // wenn
            { id: 39, correctAnswer: "I" }, // welche
            { id: 40, correctAnswer: "J" }  // bis (bis bald)
          ]
        }
      ]
    },

    // ==================== TEST SET 20 ====================
    {
      setId: 20,
      parts: [
        {
          part: "Teil 1",
          title: "Sprachbausteine (Multiple-Choice)",
          description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke passt.",
          passage: "Sehr geehrte Damen und Herren,\n\nich wende mich an Sie bezüglich des Auftrags Nr. 9814 zur Montage von fünf Schallschutzfenstern in meinem Einfamilienhaus. Die Arbeiten wurden am vergangenen Donnerstag von Ihren Mitarbeitern ___21___. Leider musste ich bei der Abnahme gravierende Mängel ___22___.\n\nZwei Fenster im Obergeschoss lassen sich nur mit erheblichem Kraftaufwand schließen, ___23___ die Rahmen offensichtlich schief eingesetzt wurden. Zudem zieht an den Dichtungen der Terrassentür spürbar kalte Luft ein, was ___24___ der sinkenden Außentemperaturen zu einem hohen Wärmeverlust führt. Ihre Monteure hatten mir zugesichert, dass die Fenster absolut luftdicht ___25___ seien.\n\nIch fordere Sie hiermit auf, die mangelhafte Montage bis zum 15. September fachgerecht nachzubessern und die Fenster ordnungsgemäß ___26___. Sollte die Frist fruchtlos verstreichen, behalte ich mir vor, einen Sachverständigen einzuschalten und die Kosten für eine Ersatzvornahme ___27___ Rechnung zu stellen.\n\nIch hoffe auf eine zügige und einvernehmliche ___28___ der Angelegenheit.\n\nFür Rückfragen stehe ich Ihnen jederzeit gerne zur ___29___.\n\nMit freundlichen Grüßen\nBernhard Krause\n\n___30___: Fotos der beschädigten Fensterdichtungen.",
          questions: [
            { id: 21, label: "Lücke 21", options: [{ id: "a", text: "durchgeführt" }, { id: "b", text: "ausgeführt" }, { id: "c", text: "überführt" }], correctAnswer: "a" },
            { id: 22, label: "Lücke 22", options: [{ id: "a", text: "feststellen" }, { id: "b", text: "festgestellt" }, { id: "c", text: "feststellend" }], correctAnswer: "a" },
            { id: 23, label: "Lücke 23", options: [{ id: "a", text: "weil" }, { id: "b", text: "obwohl" }, { id: "c", text: "denn" }], correctAnswer: "a" },
            { id: 24, label: "Lücke 24", options: [{ id: "a", text: "infolge" }, { id: "b", text: "trotz" }, { id: "c", text: "anstelle" }], correctAnswer: "a" },
            { id: 25, label: "Lücke 25", options: [{ id: "a", text: "eingebaut" }, { id: "b", text: "einbauen" }, { id: "c", text: "einbauend" }], correctAnswer: "a" },
            { id: 26, label: "Lücke 26", options: [{ id: "a", text: "einzustellen" }, { id: "b", text: "einzustellen zu" }, { id: "c", text: "eingestellt" }], correctAnswer: "a" },
            { id: 27, label: "Lücke 27", options: [{ id: "a", text: "in" }, { id: "b", text: "an" }, { id: "c", text: "auf" }], correctAnswer: "a" },
            { id: 28, label: "Lücke 28", options: [{ id: "a", text: "Lösung" }, { id: "b", text: "Entscheidung" }, { id: "c", text: "Abwicklung" }], correctAnswer: "a" },
            { id: 29, label: "Lücke 29", options: [{ id: "a", text: "Verfügung" }, { id: "b", text: "Aussicht" }, { id: "c", text: "Hand" }], correctAnswer: "a" },
            { id: 30, label: "Lücke 30", options: [{ id: "a", text: "Anlagen" }, { id: "b", text: "Kopie" }, { id: "c", text: "Zusatz" }], correctAnswer: "a" }
          ]
        },
        {
          part: "Teil 2",
          title: "Sprachbausteine (Wortschatz / Zuordnung)",
          description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort aus der Liste (A-O) in die jeweilige Lücke passt. Jedes Wort darf nur einmal verwendet werden. Fünf Wörter bleiben übrig.",
          passage: "Der Markt für gebrauchte Kleidung boomt wie nie zuvor. Was früher als verstaubt oder als Zeichen von Geldmangel galt, hat sich ___31___ einem echten Lifestyle-Trend entwickelt. Immer mehr Verbraucher kaufen Kleidung, Schuhe und Accessoires bewusst in Secondhand-Boutiquen oder über Online-Plattformen.\n\nGründe für diesen Wandel liegen vor allem im gestiegenen Umweltbewusstsein. Die Produktion von neuer Kleidung verschlingt enorme Mengen ___32___ Wasser und Energie. Durch den Kauf von gut erhaltener Gebrauchtware lässt sich der persönliche ökologische Fußabdruck spürbar ___33___. Zudem schätzen viele Kunden die Einzigartigkeit der Stücke: Im Vintage-Laden findet man oft zeitlose Klassiker, die sich wohltuend ___34___ der uniformen Massenware herkömmlicher Modeketten abheben.\n\nExperten betonen, dass Secondhand-Mode nur dann nachhaltig ist, ___35___ die Kleidung auch tatsächlich lange getragen wird. Wer ständig neue Vintage-Teile kauft und nach kurzer Zeit wieder wegwirft, trägt kaum ___36___ Ressourcenschonung bei. Wer Wert ___37___ Langlebigkeit legt, sollte beim Kauf auf hochwertige Naturfasern wie Wolle oder Seide ___38___.\n\nDie wachsende Beliebtheit von Re-Commerce beweist eindrucksvoll, dass Mode und Nachhaltigkeit sich keineswegs ___39___.\n\nGebrauchtes zu kaufen bleibt ein zukunftsweisender Schritt ___40___ mehr Umweltverantwortung.",
          options: [
            { id: "A", text: "zu" },
            { id: "B", text: "an" },
            { id: "C", text: "verringern" },
            { id: "D", text: "von" },
            { id: "E", text: "wenn" },
            { id: "F", text: "zur" },
            { id: "G", text: "auf" },
            { id: "H", text: "achten" },
            { id: "I", text: "ausschließen" },
            { id: "J", text: "für" },
            { id: "K", text: "obwohl" },
            { id: "L", text: "seit" },
            { id: "M", text: "vor" },
            { id: "N", text: "ausgeschlossen" },
            { id: "O", text: "damit" }
          ],
          items: [
            { id: 31, correctAnswer: "A" }, // zu (entwickeln zu)
            { id: 32, correctAnswer: "B" }, // an (Mengen an)
            { id: 33, correctAnswer: "C" }, // verringern
            { id: 34, correctAnswer: "D" }, // von (abheben von)
            { id: 35, correctAnswer: "E" }, // wenn
            { id: 36, correctAnswer: "F" }, // zur (beitragen zur)
            { id: 37, correctAnswer: "G" }, // auf (Wert legen auf)
            { id: 38, correctAnswer: "H" }, // achten (achten auf)
            { id: 39, correctAnswer: "I" }, // ausschließen
            { id: 40, correctAnswer: "J" }  // für
          ]
        }
      ]
    },

    // ==================== TEST SET 21 ====================
    {
      setId: 21,
      parts: [
        {
          part: "Teil 1",
          title: "Sprachbausteine (Multiple-Choice)",
          description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke passt.",
          passage: "Sehr geehrte Damen und Herren,\n\nich wende mich an Sie, ___21___ ich mich über die Zulassungsvoraussetzungen für die Fortbildungsprüfung zum Industriemeister im Bereich Elektrotechnik informieren möchte. Vor drei Jahren habe ich meine Ausbildung zum Elektroniker für Betriebstechnik erfolgreich ___22___ und arbeite seither ununterbrochen in einem mittelständischen Produktionsbetrieb.\n\n___23___ meiner mehrjährigen Berufserfahrung konnte ich bereits umfassende Kenntnisse bei der Wartung von automatisierten Fertigungsanlagen ___24___. Nun möchte ich mich fachlich weiterqualifizieren, um Führungsaufgaben in der Instandhaltung zu ___25___.\n\nIch plane, den Vorbereitungslehrgang im kommenden Frühjahr in Teilzeit zu ___26___. Könnten Sie mir bitte mitteilen, welche Nachweise und Zertifikate ich mit dem Zulassungsantrag einreichen ___27___?\n\nZudem wäre ich Ihnen dankbar für Informationen darüber, inwiefern die Lehrgangs- und Prüfungsgebühren über das Aufstiegs-BAföG gefördert werden ___28___.\n\nIch bedanke mich im Voraus ___29___ Ihre Auskunft und verbleibe\n\nmit freundlichen Grüßen\nTobias Richter\n\n___30___: Gesellenbrief und Arbeitszeugnis.",
          questions: [
            { id: 21, label: "Lücke 21", options: [{ id: "a", text: "weil" }, { id: "b", text: "denn" }, { id: "c", text: "deshalb" }], correctAnswer: "a" },
            { id: 22, label: "Lücke 22", options: [{ id: "a", text: "abgeschlossen" }, { id: "b", text: "beschlossen" }, { id: "c", text: "entschlossen" }], correctAnswer: "a" },
            { id: 23, label: "Lücke 23", options: [{ id: "a", text: "Während" }, { id: "b", text: "Trotz" }, { id: "c", text: "Wegen" }], correctAnswer: "a" },
            { id: 24, label: "Lücke 24", options: [{ id: "a", text: "erwerben" }, { id: "b", text: "erwerben zu" }, { id: "c", text: "erworben" }], correctAnswer: "a" },
            { id: 25, label: "Lücke 25", options: [{ id: "a", text: "übernehmen" }, { id: "b", text: "mitnehmen" }, { id: "c", text: "annehmen" }], correctAnswer: "a" },
            { id: 26, label: "Lücke 26", options: [{ id: "a", text: "absolvieren" }, { id: "b", text: "absolviert" }, { id: "c", text: "absolvierend" }], correctAnswer: "a" },
            { id: 27, label: "Lücke 27", options: [{ id: "a", text: "muss" }, { id: "b", text: "darf" }, { id: "c", text: "kann" }], correctAnswer: "a" },
            { id: 28, label: "Lücke 28", options: [{ id: "a", text: "können" }, { id: "b", text: "müssen" }, { id: "c", text: "sollen" }], correctAnswer: "a" },
            { id: 29, label: "Lücke 29", options: [{ id: "a", text: "für" }, { id: "b", text: "über" }, { id: "c", text: "an" }], correctAnswer: "a" },
            { id: 30, label: "Lücke 30", options: [{ id: "a", text: "Anlagen" }, { id: "b", text: "Kopie" }, { id: "c", text: "Zusatz" }], correctAnswer: "a" }
          ]
        },
        {
          part: "Teil 2",
          title: "Sprachbausteine (Wortschatz / Zuordnung)",
          description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort aus der Liste (A-O) in die jeweilige Lücke passt. Jedes Wort darf nur einmal verwendet werden. Fünf Wörter bleiben übrig.",
          passage: "Liebe Vereinsmitglieder,\n\ndie Sommersaison steht vor der Tür und wir freuen uns sehr ___31___, unser diesjähriges traditionelles Tennisturnier ankündigen zu dürfen. Die Wettkämpfe finden am zweiten Juli-Wochenende auf unserer Vereinsanlage ___32___.\n\nMitspielen können alle aktiven Mitglieder unabhängig ___33___ ihrer Spielstärke. Um faire Bedingungen zu ___34___, werden die Teilnehmer in verschiedene Leistungsklassen eingeteilt. Neben den spannenden Einzel- und Doppelbegegnungen planen wir am Samstagabend ein großes Sommerfest mit Live-Musik und Barbecue.\n\nIch habe mich bereits ___35___ gekümmert, die Pokale und Sachpreise für die Siegerehrung zu bestellen. Wer am Turnier teilnehmen möchte, wird gebeten, sich bis zum 25. Juni in die Liste im Clubhaus ___36___.\n\nWir bitten Sie zudem ___37___ Verständnis, dass die Tennisplätze während der Turniertage für das freie Training gesperrt ___38___. Wir hoffen ___39___ viele Anmeldungen und ein sonniges Wochenende voller spannender Matches.\n\nMit sportlichen Grüßen und vielen Dank ___40___ Ihr Engagement!\nDer Vorstand",
          options: [
            { id: "A", text: "darauf" },
            { id: "B", text: "statt" },
            { id: "C", text: "von" },
            { id: "D", text: "garantieren" },
            { id: "E", text: "darum" },
            { id: "F", text: "einzutragen" },
            { id: "G", text: "um" },
            { id: "H", text: "sind" },
            { id: "I", text: "auf" },
            { id: "J", text: "für" },
            { id: "K", text: "obwohl" },
            { id: "L", text: "damit" },
            { id: "M", text: "seit" },
            { id: "N", text: "eingetragen" },
            { id: "O", text: "vor" }
          ],
          items: [
            { id: 31, correctAnswer: "A" }, // darauf (freuen darauf)
            { id: 32, correctAnswer: "B" }, // statt (stattfinden)
            { id: 33, correctAnswer: "C" }, // von (unabhängig von)
            { id: 34, correctAnswer: "D" }, // garantieren
            { id: 35, correctAnswer: "E" }, // darum (kümmern darum)
            { id: 36, correctAnswer: "F" }, // einzutragen (eintragen)
            { id: 37, correctAnswer: "G" }, // um (bitten um)
            { id: 38, correctAnswer: "H" }, // sind
            { id: 39, correctAnswer: "I" }, // auf (hoffen auf)
            { id: 40, correctAnswer: "J" }  // für
          ]
        }
      ]
    },

    // ==================== TEST SET 22 ====================
    {
      setId: 22,
      parts: [
        {
          part: "Teil 1",
          title: "Sprachbausteine (Multiple-Choice)",
          description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke passt.",
          passage: "Sehr geehrte Damen und Herren,\n\nich wende mich an Sie, ___21___ ich Fahrgastrechteansprüche für meine Zugreise am vergangenen Sonntag von Frankfurt nach Hamburg geltend machen möchte. Mein gebuchter ICE 672 hatte wegen eines Oberleitungsschadens mehr als zweieinhalb Stunden ___22___.\n\nInfolgedessen habe ich meinen Anschlusszug in Hannover verpasst und bin erst spät in der Nacht an meinem Zielort ___23___. Gemäß den gesetzlichen Fahrgastrechten steht mir bei einer Verspätung von über 120 Minuten eine Entschädigung von 50 Prozent des gezahlten Fahrpreises ___24___.\n\nIch bitte Sie daher höflich, mir den entsprechenden Betrag in Höhe von 42,50 Euro innerhalb von 14 Tagen ___25___ mein angegebenes Bankkonto zu überweisen. Meine Originalfahrkarte sowie die Bestätigung der Zugbegleiterin habe ich diesem Schreiben ___26___.\n\nSollten Sie noch weitere Auskünfte oder Belege ___27___, stehe ich Ihnen gerne zur Verfügung.\n\nIch hoffe auf eine zügige ___28___ meines Entschädigungsantrags.\n\nMit freundlichen Grüßen\nDaniel Wagner\n\nIBAN: DE45 5001 0517 5412 8900 00\n___29___: Fahrkarte und Verspätungsbescheinigung.\n___30___: Frist bis zum 30. September.",
          questions: [
            { id: 21, label: "Lücke 21", options: [{ id: "a", text: "weil" }, { id: "b", text: "denn" }, { id: "c", text: "deshalb" }], correctAnswer: "a" },
            { id: 22, label: "Lücke 22", options: [{ id: "a", text: "Verspätung" }, { id: "b", text: "Wartezeit" }, { id: "c", text: "Pause" }], correctAnswer: "a" },
            { id: 23, label: "Lücke 23", options: [{ id: "a", text: "eingetroffen" }, { id: "b", text: "eintreffen" }, { id: "c", text: "eintreffend" }], correctAnswer: "a" },
            { id: 24, label: "Lücke 24", options: [{ id: "a", text: "zu" }, { id: "b", text: "an" }, { id: "c", text: "ab" }], correctAnswer: "a" },
            { id: 25, label: "Lücke 25", options: [{ id: "a", text: "auf" }, { id: "b", text: "an" }, { id: "c", text: "in" }], correctAnswer: "a" },
            { id: 26, label: "Lücke 26", options: [{ id: "a", text: "beigelegt" }, { id: "b", text: "beilegen" }, { id: "c", text: "beigelegt zu" }], correctAnswer: "a" },
            { id: 27, label: "Lücke 27", options: [{ id: "a", text: "benötigen" }, { id: "b", text: "benötigt" }, { id: "c", text: "benötigend" }], correctAnswer: "a" },
            { id: 28, label: "Lücke 28", options: [{ id: "a", text: "Bearbeitung" }, { id: "b", text: "Entscheidung" }, { id: "c", text: "Korrektur" }], correctAnswer: "a" },
            { id: 29, label: "Lücke 29", options: [{ id: "a", text: "Anlagen" }, { id: "b", text: "Kopie" }, { id: "c", text: "Zusatz" }], correctAnswer: "a" },
            { id: 30, label: "Lücke 30", options: [{ id: "a", text: "Hinweis" }, { id: "b", text: "Notiz" }, { id: "c", text: "Zusatz" }], correctAnswer: "a" }
          ]
        },
        {
          part: "Teil 2",
          title: "Sprachbausteine (Wortschatz / Zuordnung)",
          description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort aus der Liste (A-O) in die jeweilige Lücke passt. Jedes Wort darf nur einmal verwendet werden. Fünf Wörter bleiben übrig.",
          passage: "Achtsamkeit und Meditation haben in den letzten Jahren ihren Weg aus esoterischen Nischen mitten in die moderne Arbeitswelt gefunden. Immer mehr Unternehmen bieten ihren Beschäftigten spezielle Kurse ___31___ Stressbewältigung und mentalen Gesundheit an. Der Grund für diesen Trend ist einleuchtend: In einer von ständiger Erreichbarkeit geprägten Arbeitswelt fühlen sich viele Arbeitnehmer chronisch ___32___.\n\nWissenschaftliche Studien belegen eindrucksvoll, dass schon wenige Minuten täglicher Achtsamkeitsübungen das Gehirn positiv ___33___. Die Konzentrationsfähigkeit steigt, und das Stresslevel sinkt messbar. Mitarbeiter lernen, in hektischen Situationen innezuhalten, ___34___ voreilig und impulsiv auf E-Mails oder Kundenanfragen zu reagieren.\n\nAllerdings warnen Psychologen auch ___35___ falschen Erwartungen: Meditation kann schlechte Arbeitsbedingungen oder eine personelle Unterbesetzung nicht ___36___. Achtsamkeit darf von Arbeitgebern nicht dazu missbraucht werden, die Verantwortung für Überlastung allein auf das Individuum zu ___37___.\n\nNur wenn betriebliche Gesundheitsförderung Hand in Hand mit fairen Arbeitszeiten geht, können Beschäftigte langfristig gesund ___38___.\n\nAchtsamkeit bleibt dennoch ein wertvolles Werkzeug ___39___ mehr innere Ruhe und Balance ___40___ hektischen Berufsalltag.",
          options: [
            { id: "A", text: "zur" },
            { id: "B", text: "überlastet" },
            { id: "C", text: "verändern" },
            { id: "D", text: "anstatt" },
            { id: "E", text: "vor" },
            { id: "F", text: "kompensieren" },
            { id: "G", text: "schieben" },
            { id: "H", text: "bleiben" },
            { id: "I", text: "für" },
            { id: "J", text: "im" },
            { id: "K", text: "obwohl" },
            { id: "L", text: "damit" },
            { id: "M", text: "seit" },
            { id: "N", text: "geblieben" },
            { id: "O", text: "über" }
          ],
          items: [
            { id: 31, correctAnswer: "A" }, // zur (zur Stressbewältigung)
            { id: 32, correctAnswer: "B" }, // überlastet
            { id: 33, correctAnswer: "C" }, // verändern
            { id: 34, correctAnswer: "D" }, // anstatt (anstatt zu reagieren)
            { id: 35, correctAnswer: "E" }, // vor (warnen vor)
            { id: 36, correctAnswer: "F" }, // kompensieren
            { id: 37, correctAnswer: "G" }, // schieben (Verantwortung schieben)
            { id: 38, correctAnswer: "H" }, // bleiben (gesund bleiben)
            { id: 39, correctAnswer: "I" }, // für
            { id: 40, correctAnswer: "J" }  // im (im Alltag)
          ]
        }
      ]
    }
  ];

  // Append new sets to global array
  newLanguageSets.forEach(s => window.languageQuestionsSets.push(s));
})();
