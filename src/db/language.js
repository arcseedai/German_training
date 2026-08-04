// Telc B2 Language Elements (Sprachbausteine) Database
window.languageQuestionsSets = [
  // ==================== TEST SET 1 ====================
  {
    setId: 1,
    parts: [
      {
        part: "Teil 1",
        title: "Sprachbausteine (Multiple-Choice)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke passt.",
        passage: "Sehr geehrte Damen und Herren,\n\nich schreibe Ihnen, ___21___ ich mich über Ihren Service beschweren möchte. Letzte Woche habe ich bei Ihnen einen Laptop bestellt, ___22___ gestern geliefert wurde. Leider musste ich beim Auspacken feststellen, ___23___ das Display einen Riss hat. \n\nZudem entspricht die Farbe nicht der Beschreibung ___24___ Ihrer Webseite. Ich hatte ein dunkelgraues Modell gewählt, erhalten habe ich jedoch ein silbernes. ___25___ dieser Mängel möchte ich das Gerät nicht behalten. Ich bitte Sie daher, mir umgehend ein neues Gerät ___26___ oder mir den Kaufpreis zurückzuerstatten.\n\nIch hoffe ___27___ eine schnelle Abwicklung meines Anliegens. Bitte teilen Sie mir ___28___, wie ich bei der Rücksendung vorgehen soll. Sollte ich innerhalb einer Woche keine Antwort erhalten, werde ich rechtliche Schritte ___29___. \n\nMit freundlichen Grüßen\nMax Mustermann\n\n___30___: Eine Kopie der Rechnung liegt diesem Schreiben bei.",
        questions: [
          { id: 21, label: "Lücke 21", options: [{ id: "a", text: "weil" }, { id: "b", text: "denn" }, { id: "c", text: "deshalb" }], correctAnswer: "a" },
          { id: 22, label: "Lücke 22", options: [{ id: "a", text: "der" }, { id: "b", text: "welches" }, { id: "c", text: "den" }], correctAnswer: "a" },
          { id: 23, label: "Lücke 23", options: [{ id: "a", text: "weil" }, { id: "b", text: "dass" }, { id: "c", text: "ob" }], correctAnswer: "b" },
          { id: 24, label: "Lücke 24", options: [{ id: "a", text: "auf" }, { id: "b", text: "in" }, { id: "c", text: "an" }], correctAnswer: "a" },
          { id: 25, label: "Lücke 25", options: [{ id: "a", text: "Wegen" }, { id: "b", text: "Trotz" }, { id: "c", text: "Obwohl" }], correctAnswer: "a" },
          { id: 26, label: "Lücke 26", options: [{ id: "a", text: "zusenden" }, { id: "b", text: "zuzusenden" }, { id: "c", text: "gesendet" }], correctAnswer: "b" },
          { id: 27, label: "Lücke 27", options: [{ id: "a", text: "auf" }, { id: "b", text: "über" }, { id: "c", text: "an" }], correctAnswer: "a" },
          { id: 28, label: "Lücke 28", options: [{ id: "a", text: "mit" }, { id: "b", text: "zu" }, { id: "c", text: "an" }], correctAnswer: "a" },
          { id: 29, label: "Lücke 29", options: [{ id: "a", text: "machen" }, { id: "b", text: "einleiten" }, { id: "c", text: "tun" }], correctAnswer: "b" },
          { id: 30, label: "Lücke 30", options: [{ id: "a", text: "Anhang" }, { id: "b", text: "Betreff" }, { id: "c", text: "Anlage" }], correctAnswer: "c" }
        ]
      },
      {
        part: "Teil 2",
        title: "Sprachbausteine (Wortzuordnung)",
        description: "Lesen Sie den folgenden Brief und entscheiden Sie, welches Wort aus der Liste (A-O) in die jeweilige Lücke (31-40) passt. Jedes Wort kann nur einmal verwendet werden. Fünf Wörter bleiben übrig.",
        options: [
          { id: "A", text: "seit" }, { id: "B", text: "auf" }, { id: "C", text: "obwohl" }, { id: "D", text: "dafür" }, { id: "E", text: "gefördert" },
          { id: "F", text: "ob" }, { id: "G", text: "interessiert" }, { id: "H", text: "teilnehmen" }, { id: "I", text: "wenn" }, { id: "J", text: "für" },
          { id: "K", text: "Trotz" }, { id: "L", text: "über" }, { id: "M", text: "um" }, { id: "N", text: "mit" }, { id: "O", text: "nach" }
        ],
        passage: "Liebe Anna,\n\nwie du weißt, suche ich ___31___ einigen Monaten nach einer neuen beruflichen Herausforderung. Nun habe ich endlich eine Zusage bekommen! Ich werde ab dem nächsten Monat als Marketing-Managerin arbeiten.\n\nIch freue mich riesig ___32___ diese neue Aufgabe, ___33___ die Einarbeitung sicher nicht einfach sein wird. Das Unternehmen verlangt viele Vorkenntnisse. Ich habe mich bereits ___34___ entschieden, an einem Online-Fortbildungskurs teilzunehmen. Der Kurs wird glücklicherweise vom Staat ___35___, sodass ich fast nichts selbst bezahlen muss.\n\nIch wollte dich fragen, ob du Lust hast, am kommenden Wochenende mit mir zu feiern. Ich lade dich herzlich zu mir ein. Sag mir bitte Bescheid, ___36___ du Zeit hast. Solltest du am Samstag keine Zeit haben, können wir uns auch am Sonntag treffen. Ich bin sehr an deinen Neuigkeiten ___37___. Hast du eigentlich dein Studium schon abgeschlossen?\n\nÜbrigens, weißt du, ob Felix auch an unserer Feier ___38___ möchte? Er hatte vor ein paar Tagen Geburtstag, aber ich habe ihn nicht erreicht. Ich würde mich freuen, ___39___ wir uns alle bald wiedersehen könnten. \n\nSchreib mir bald! Vielen Dank ___40___ deine Unterstützung in den letzten Wochen.\n\nLiebe Grüße\nLaura",
        items: [
          { id: 31, correctAnswer: "A" }, { id: 32, correctAnswer: "B" }, { id: 33, correctAnswer: "C" }, { id: 34, correctAnswer: "D" }, { id: 35, correctAnswer: "E" },
          { id: 36, correctAnswer: "F" }, { id: 37, correctAnswer: "G" }, { id: 38, correctAnswer: "H" }, { id: 39, correctAnswer: "I" }, { id: 40, correctAnswer: "J" }
        ]
      }
    ]
  },

  // ==================== TEST SET 2 ====================
  {
    setId: 2,
    parts: [
      {
        part: "Teil 1",
        title: "Sprachbausteine (Multiple-Choice)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke passt.",
        passage: "Sehr geehrte Damen und Herren,\n\nmit großem Interesse habe ich Ihre Anzeige für ein Praktikum im Bereich Marketing gelesen. ___21___ ich mich im letzten Semester meines Studiums befinde, möchte ich nun praktische Erfahrungen sammeln. Ihr Unternehmen genießt einen hervorragenden Ruf, ___22___ ich mich bei Ihnen bewerbe.\n\nIch bringe bereits theoretische Kenntnisse ___23___ den Bereichen SEO und Social Media mit. Im Rahmen meines Studiums habe ich an mehreren Projekten gearbeitet, bei ___24___ ich kreative Kampagnen entwickeln durfte. Ich arbeite sehr strukturiert und behalte auch in stressigen Situationen ___25___ Überblick.\n\nEin Praktikum in Ihrem Hause würde mir die Möglichkeit bieten, meine Fähigkeiten unter Beweis ___26___ stellen. Da ich flexibel einsetzbar bin, ___27___ ich das Praktikum ab dem 1. Oktober beginnen. Über die Arbeitszeiten können wir uns gerne persönlich ___28___.\n\nIch freue mich über die Gelegenheit, mich Ihnen in einem persönlichen Gespräch ___29___.\n\nMit freundlichen Grüßen\nSarah Bergmann\n\nAnlagen: Lebenslauf ___30___ Zeugnisse.",
        questions: [
          { id: 21, label: "Lücke 21", options: [{ id: "a", text: "Da" }, { id: "b", text: "Deshalb" }, { id: "c", text: "Obwohl" }], correctAnswer: "a" },
          { id: 22, label: "Lücke 22", options: [{ id: "a", text: "warum" }, { id: "b", text: "weshalb" }, { id: "c", text: "darum" }], correctAnswer: "b" },
          { id: 23, label: "Lücke 23", options: [{ id: "a", text: "in" }, { id: "b", text: "an" }, { id: "c", text: "auf" }], correctAnswer: "a" },
          { id: 24, label: "Lücke 24", options: [{ id: "a", text: "denen" }, { id: "b", text: "welchen" }, { id: "c", text: "ihnen" }], correctAnswer: "a" },
          { id: 25, label: "Lücke 25", options: [{ id: "a", text: "einen" }, { id: "b", text: "den" }, { id: "c", text: "dem" }], correctAnswer: "b" },
          { id: 26, label: "Lücke 26", options: [{ id: "a", text: "zu" }, { id: "b", text: "um" }, { id: "c", text: "for" }], correctAnswer: "a" },
          { id: 27, label: "Lücke 27", options: [{ id: "a", text: "müsste" }, { id: "b", text: "könnte" }, { id: "c", text: "hätte" }], correctAnswer: "b" },
          { id: 28, label: "Lücke 28", options: [{ id: "a", text: "unterhalten" }, { id: "b", text: "besprechen" }, { id: "c", text: "abstimmen" }], correctAnswer: "a" },
          { id: 29, label: "Lücke 29", options: [{ id: "a", text: "vorzustellen" }, { id: "b", text: "darzustellen" }, { id: "c", text: "einzustellen" }], correctAnswer: "a" },
          { id: 30, label: "Lücke 30", options: [{ id: "a", text: "sowie" }, { id: "b", text: "oder" }, { id: "c", text: "aber" }], correctAnswer: "a" }
        ]
      },
      {
        part: "Teil 2",
        title: "Sprachbausteine (Wortzuordnung)",
        description: "Lesen Sie den folgenden Brief und entscheiden Sie, welches Wort aus der Liste (A-O) in die jeweilige Lücke (31-40) passt. Jedes Wort kann nur einmal verwendet werden. Fünf Wörter bleiben übrig.",
        options: [
          { id: "A", text: "seit" }, { id: "B", text: "dafür" }, { id: "C", text: "obwohl" }, { id: "D", text: "Trotz" }, { id: "E", text: "entsprochen" },
          { id: "F", text: "gefordert" }, { id: "G", text: "wenn" }, { id: "H", text: "auf" }, { id: "I", text: "um" }, { id: "J", text: "damit" },
          { id: "K", text: "zurück" }, { id: "L", text: "über" }, { id: "M", text: "gemietet" }, { id: "N", text: "ausgestattet" }, { id: "O", text: "enttäuscht" }
        ],
        passage: "Sehr geehrte Damen und Herren,\n\nich wende mich heute an Sie, ___31___ mich über die Ferienwohnung 'Seeblick' zu beschweren, die ich über Ihr Portal für die letzte Woche ___32___ habe. Leider entsprachen die Bedingungen vor Ort überhaupt nicht den Angaben in Ihrer Ausschreibung.\n\nIn der Beschreibung stand, die Wohnung sei mit einer Klimaanlage ___33___. Dies war jedoch nicht der Fall. ___34___ der hohen Temperaturen im August war es unmöglich, nachts zu schlafen. Zudem war die Wohnung bei unserer Ankunft nicht sauber. Wir mussten die Küche erst selbst reinigen, ___35___ wir sie nutzen konnten. Wir sind von Ihrem Service zutiefst ___36___.\n\nIch hatte mich ___37___ Ihre Agentur verlassen, da wir bisher immer gute Erfahrungen gemacht hatten. Ich erwarte daher, dass Sie mir einen Teil des Mietpreises erstatten. ___38___ Sie mir nicht entgegenkommen, werde ich diesen Fall an meinen Anwalt übergeben. Ich fordere 30 Prozent der Kosten ___39___.\n\nBitte informieren Sie mich innerhalb der nächsten drei Tage ___40___ Ihre Entscheidung.\n\nMit freundlichen Grüßen\nPeter Müller",
        items: [
          { id: 31, correctAnswer: "I" }, { id: 32, correctAnswer: "M" }, { id: 33, correctAnswer: "N" }, { id: 34, correctAnswer: "D" }, { id: 35, correctAnswer: "J" },
          { id: 36, correctAnswer: "O" }, { id: 37, correctAnswer: "H" }, { id: 38, correctAnswer: "G" }, { id: 39, correctAnswer: "K" }, { id: 40, correctAnswer: "L" }
        ]
      }
    ]
  },

  // ==================== TEST SET 3 ====================
  {
    setId: 3,
    parts: [
      {
        part: "Teil 1",
        title: "Sprachbausteine (Multiple-Choice)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke passt.",
        passage: "Hallo Jonas,\n\nwie du weißt, hat unsere Mutter nächste Woche Geburtstag. Ich plane eine Überraschungsparty ___21___ sie und wollte dich fragen, ob du mir dabei helfen kannst. Ich habe mir überlegt, ___22___ wir das Fest in unserem Garten feiern könnten. Das Wetter soll ja sehr schön ___23___. \n\nIch habe bereits einige Freunde und Verwandte ___24___. Fast alle haben zugesagt, ___25___ Tante Klara leider keine Zeit hat. Für das Essen möchte ich grillen. Könntest du dich vielleicht ___26___ die Getränke kümmern? Es wäre toll, ___27___ du auch ein paar Salate mitbringen könntest. \n\nWir müssen auch noch ein Geschenk kaufen. Ich weiß, dass Mama sich ___28___ ein neues Buch über Fotografie wünschen würde. Wollen wir das zusammen ___29___? \n\nGib mir bitte bald Bescheid, damit ich die Einkäufe planen ___30___.\n\nLiebe Grüße\nLisa",
        questions: [
          { id: 21, label: "Lücke 21", options: [{ id: "a", text: "für" }, { id: "b", text: "zu" }, { id: "c", text: "nach" }], correctAnswer: "a" },
          { id: 22, label: "Lücke 22", options: [{ id: "a", text: "ob" }, { id: "b", text: "dass" }, { id: "c", text: "wenn" }], correctAnswer: "b" },
          { id: 23, label: "Lücke 23", options: [{ id: "a", text: "werden" }, { id: "b", text: "sein" }, { id: "c", text: "wäre" }], correctAnswer: "a" },
          { id: 24, label: "Lücke 24", options: [{ id: "a", text: "eingeladen" }, { id: "b", text: "geladen" }, { id: "c", text: "gerufen" }], correctAnswer: "a" },
          { id: 25, label: "Lücke 25", options: [{ id: "a", text: "obwohl" }, { id: "b", text: "trotzdem" }, { id: "c", text: "während" }], correctAnswer: "a" },
          { id: 26, label: "Lücke 26", options: [{ id: "a", text: "um" }, { id: "b", text: "für" }, { id: "c", text: "an" }], correctAnswer: "a" },
          { id: 27, label: "Lücke 27", options: [{ id: "a", text: "dass" }, { id: "b", text: "wenn" }, { id: "c", text: "falls" }], correctAnswer: "b" },
          { id: 28, label: "Lücke 28", options: [{ id: "a", text: "sehr" }, { id: "b", text: "gern" }, { id: "c", text: "schon" }], correctAnswer: "a" },
          { id: 29, label: "Lücke 29", options: [{ id: "a", text: "besorgen" }, { id: "b", text: "kaufen" }, { id: "c", text: "holen" }], correctAnswer: "a" },
          { id: 30, label: "Lücke 30", options: [{ id: "a", text: "kann" }, { id: "b", text: "könnte" }, { id: "c", text: "muss" }], correctAnswer: "a" }
        ]
      },
      {
        part: "Teil 2",
        title: "Sprachbausteine (Wortzuordnung)",
        description: "Lesen Sie den folgenden Brief und entscheiden Sie, welches Wort aus der Liste (A-O) in die jeweilige Lücke (31-40) passt. Jedes Wort kann nur einmal verwendet werden. Fünf Wörter bleiben übrig.",
        options: [
          { id: "A", text: "da" }, { id: "B", text: "deshalb" }, { id: "C", text: "denn" }, { id: "D", text: "obwohl" }, { id: "E", text: "Trotz" },
          { id: "F", text: "viele" }, { id: "G", text: "wenige" }, { id: "H", text: "nutzen" }, { id: "I", text: "besitzen" }, { id: "J", text: "an" },
          { id: "K", text: "auf" }, { id: "L", text: "wenn" }, { id: "M", text: "mit" }, { id: "N", text: "ohne" }, { id: "O", text: "um" }
        ],
        passage: "Das Konzept des Carsharings gewinnt in deutschen Großstädten immer mehr ___31___ Beliebtheit. Viele junge Menschen verzichten bewusst darauf, ein eigenes Auto zu ___32___, da die Unterhaltskosten hoch sind und Parkplätze in den Innenstädten Mangelware darstellen. ___33___ bietet Carsharing eine flexible Alternative: Man bucht ein Fahrzeug einfach per App, nutzt es für die gewünschte Zeit und stellt es danach wieder ___34___ einem dafür vorgesehenen Parkplatz ab.\n\n___35___ der zahlreichen Vorteile gibt es jedoch auch Kritik. In Stoßzeiten sind oft keine Fahrzeuge in der Nähe verfügbar, ___36___ man dringend einen Termin wahrnehmen muss. Zudem sind die Tarife für längere Fahrten oft teurer als ein Bahnticket.\n\nFür den Umweltschutz ist Carsharing nur dann sinnvoll, ___37___ dadurch die Gesamtzahl der Fahrzeuge in den Städten sinkt. Experten weisen darauf hin, dass viele Nutzer ___38___ Auto eigentlich gar kein Fahrzeug bräuchten, da sie Strecken auch ___39___ dem Fahrrad oder den öffentlichen Verkehrsmitteln zurücklegen könnten. Die Entwicklung bleibt also spannend, ___40___ die Anbieter ihr Netz weiter ausbauen.",
        items: [
          { id: 31, correctAnswer: "J" }, { id: 32, correctAnswer: "I" }, { id: 33, correctAnswer: "B" }, { id: 34, correctAnswer: "K" }, { id: 35, correctAnswer: "E" },
          { id: 36, correctAnswer: "D" }, { id: 37, correctAnswer: "L" }, { id: 38, correctAnswer: "N" }, { id: 39, correctAnswer: "M" }, { id: 40, correctAnswer: "A" }
        ]
      }
    ]
  },

  // ==================== TEST SET 4 ====================
  {
    setId: 4,
    parts: [
      {
        part: "Teil 1",
        title: "Sprachbausteine (Multiple-Choice)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke passt.",
        passage: "Sehr geehrter Herr Kowalski,\n\nich wende mich heute an Sie, ___21___ ich ein Anliegen bezüglich unserer Wohnung habe. Meine Tochter wünscht sich schon seit Langem ein Haustier, und wir möchten nun einen kleinen Hund ___22___. \n\nIch versichere Ihnen, ___23___ wir uns voll und ganz um das Tier kümmern werden. Der Hund wird stubenrein sein und nicht lange allein in der Wohnung bleiben. Da ich im Homeoffice arbeite, bin ich fast immer ___24___ Ort, sodass das Tier kaum bellen wird. Zudem werden wir eine Hundehaftpflichtversicherung ___25___, um eventuelle Schäden abzusichern.\n\nIch habe mich bereits bei den Nachbarn erkundigt, und niemand hat Einwände ___26___ die Haltung eines kleinen Hundes. Im Mietvertrag steht, dass die Tierhaltung der ___27___ des Vermieters bedarf. Daher bitte ich Sie höflich um Ihre Erlaubnis.\n\nIch hoffe sehr, dass Sie unserem Wunsch ___28___ und stehe Ihnen für eventuelle Fragen gerne zur ___29___. Über eine positive Rückmeldung ___30___ ich mich sehr freuen.\n\nMit freundlichen Grüßen\nFamilie Wagner",
        questions: [
          { id: 21, label: "Lücke 21", options: [{ id: "a", text: "weil" }, { id: "b", text: "denn" }, { id: "c", text: "daher" }], correctAnswer: "a" },
          { id: 22, label: "Lücke 22", options: [{ id: "a", text: "anschaffen" }, { id: "b", text: "kaufen" }, { id: "c", text: "mitnehmen" }], correctAnswer: "a" },
          { id: 23, label: "Lücke 23", options: [{ id: "a", text: "weil" }, { id: "b", text: "dass" }, { id: "c", text: "wenn" }], correctAnswer: "b" },
          { id: 24, label: "Lücke 24", options: [{ id: "a", text: "vor" }, { id: "b", text: "an" }, { id: "c", text: "in" }], correctAnswer: "a" },
          { id: 25, label: "Lücke 25", options: [{ id: "a", text: "abschließen" }, { id: "b", text: "unterschreiben" }, { id: "c", text: "machen" }], correctAnswer: "a" },
          { id: 26, label: "Lücke 26", options: [{ id: "a", text: "gegen" }, { id: "b", text: "an" }, { id: "c", text: "für" }], correctAnswer: "a" },
          { id: 27, label: "Lücke 27", options: [{ id: "a", text: "Zustimmung" }, { id: "b", text: "Erlaubnis" }, { id: "c", text: "Bestätigung" }], correctAnswer: "a" },
          { id: 28, label: "Lücke 28", options: [{ id: "a", text: "entsprechen" }, { id: "b", text: "nachkommen" }, { id: "c", text: "erfüllen" }], correctAnswer: "a" },
          { id: 29, label: "Lücke 29", options: [{ id: "a", text: "Verfügung" }, { id: "b", text: "Antwort" }, { id: "c", text: "Stelle" }], correctAnswer: "a" },
          { id: 30, label: "Lücke 30", options: [{ id: "a", text: "würde" }, { id: "b", text: "werde" }, { id: "c", text: "hätte" }], correctAnswer: "a" }
        ]
      },
      {
        part: "Teil 2",
        title: "Sprachbausteine (Wortzuordnung)",
        description: "Lesen Sie den folgenden Brief und entscheiden Sie, welches Wort aus der Liste (A-O) in die jeweilige Lücke (31-40) passt. Jedes Wort kann nur einmal verwendet werden. Fünf Wörter bleiben übrig.",
        options: [
          { id: "A", text: "nach" }, { id: "B", text: "seit" }, { id: "C", text: "vor" }, { id: "D", text: "obwohl" }, { id: "E", text: "trotzdem" },
          { id: "F", text: "an" }, { id: "G", text: "auf" }, { id: "H", text: "wenn" }, { id: "I", text: "wegen" }, { id: "J", text: "neben" },
          { id: "K", text: "durch" }, { id: "L", text: "wann" }, { id: "M", text: "bestehen" }, { id: "N", text: "besteht" }, { id: "O", text: "knüpfen" }
        ],
        passage: "Lieber Paul,\n\nich hoffe, es geht dir gut. Ich habe ___31___ zwei Wochen meine neue Wohnung in München bezogen und wollte mich endlich mal bei dir melden. Der Umzug war extrem anstrengend, ___32___ mir viele Freunde geholfen haben. Es gab einfach zu viele Kisten!\n\nDie neue Wohnung ist wirklich toll. Sie liegt direkt ___33___ einem Park, sodass ich abends oft joggen gehen kann. Die Miete ist zwar hoch, aber das war mir ___34___ der Lage schon vorher klar. Ich habe mich bereits gut ___35___ die neue Umgebung gewöhnt. \n\nAn der Universität gefällt es mir ebenfalls sehr gut. Mein Studium ___36___ hauptsächlich aus Seminaren und Vorlesungen zur Medienwissenschaft. Ich muss sehr viel lesen, aber die Themen sind hochinteressant. Ich hoffe, dass ich bald neue Kontakte ___37___ werde. Bisher kenne ich leider noch fast niemanden.\n\nIch würde mich freuen, ___38___ du mich bald mal besuchen kommst. Ich habe ein Gästebett, sodass die Unterkunft kein Problem ist. Sag mir einfach Bescheid, ___39___ du Zeit hast. Dann können wir gemeinsam ___40___ die Stadt ziehen und ein Bier trinken.\n\nSchreib mir bald!\nDein Lukas",
        items: [
          { id: 31, correctAnswer: "C" }, { id: 32, correctAnswer: "D" }, { id: 33, correctAnswer: "J" }, { id: 34, correctAnswer: "I" }, { id: 35, correctAnswer: "F" },
          { id: 36, correctAnswer: "N" }, { id: 37, correctAnswer: "O" }, { id: 38, correctAnswer: "H" }, { id: 39, correctAnswer: "L" }, { id: 40, correctAnswer: "K" }
        ]
      }
    ]
  },

  // ==================== TEST SET 5 ====================
  {
    setId: 5,
    parts: [
      {
        part: "Teil 1",
        title: "Sprachbausteine (Multiple-Choice)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke passt.",
        passage: "Sehr geehrte Damen und Herren,\n\nich wende mich heute an Sie, ___21___ ich mich über eine Fehlbuchung auf meinem Konto beschweren möchte. Gestern stellte ich fest, ___22___ Sie mir den Betrag für die monatliche Gebühr doppelt abgebucht haben. \n\nIm Vertrag steht, dass die Gebühr am ersten Werktag ___23___ Monats fällig ist. Dies war ___24___ nicht der Fall. Ich bitte Sie daher, mir die zu viel gezahlte Gebühr ___25___ zu erstatten.\n\nSollte dies nicht geschehen, werde ich mich ___26___ meine Bank wenden. Bitte informieren Sie mich ___27___ die getroffenen Schritte.\n\nIch hoffe auf eine schnelle Klärung ___28___ Angelegenheit.\n\nMit freundlichen Grüßen\nPeter Müller\n\nKonto: DE12 3456 7890\nKundennummer: ___30___",
        questions: [
          { id: 21, label: "Lücke 21", options: [{ id: "a", text: "weil" }, { id: "b", text: "denn" }, { id: "c", text: "deshalb" }], correctAnswer: "a" },
          { id: 22, label: "Lücke 22", options: [{ id: "a", text: "dass" }, { id: "b", text: "weil" }, { id: "c", text: "wenn" }], correctAnswer: "a" },
          { id: 23, label: "Lücke 23", options: [{ id: "a", text: "des" }, { id: "b", text: "dem" }, { id: "c", text: "den" }], correctAnswer: "a" },
          { id: 24, label: "Lücke 24", options: [{ id: "a", text: "jedoch" }, { id: "b", text: "obwohl" }, { id: "c", text: "trotzdem" }], correctAnswer: "a" },
          { id: 25, label: "Lücke 25", options: [{ id: "a", text: "umgehend" }, { id: "b", text: "schnell" }, { id: "c", text: "bald" }], correctAnswer: "a" },
          { id: 26, label: "Lücke 26", options: [{ id: "a", text: "an" }, { id: "b", text: "zu" }, { id: "c", text: "bei" }], correctAnswer: "a" },
          { id: 27, label: "Lücke 27", options: [{ id: "a", text: "über" }, { id: "b", text: "an" }, { id: "c", text: "für" }], correctAnswer: "a" },
          { id: 28, label: "Lücke 28", options: [{ id: "a", text: "dieser" }, { id: "b", text: "jener" }, { id: "c", text: "solcher" }], correctAnswer: "a" },
          { id: 29, label: "Lücke 29", options: [{ id: "a", text: "zu" }, { id: "b", text: "an" }, { id: "c", text: "für" }], correctAnswer: "a" },
          { id: 30, label: "Lücke 30", options: [{ id: "a", text: "12345" }, { id: "b", text: "Name" }, { id: "c", text: "Nummer" }], correctAnswer: "a" }
        ]
      },
      {
        part: "Teil 2",
        title: "Sprachbausteine (Wortzuordnung)",
        description: "Lesen Sie den folgenden Brief und entscheiden Sie, welches Wort aus der Liste (A-O) in die jeweilige Lücke (31-40) passt. Jedes Wort kann nur einmal verwendet werden. Fünf Wörter bleiben übrig.",
        options: [
          { id: "A", text: "weil" }, { id: "B", text: "vor" }, { id: "C", text: "dafür" }, { id: "D", text: "wenn" }, { id: "E", text: "zu" },
          { id: "F", text: "wann" }, { id: "G", text: "auf" }, { id: "H", text: "über" }, { id: "I", text: "bei" }, { id: "J", text: "an" },
          { id: "K", text: "obwohl" }, { id: "L", text: "mit" }, { id: "M", text: "nach" }, { id: "N", text: "durch" }, { id: "O", text: "seit" }
        ],
        passage: "Liebe Julia,\n\nich hoffe, du hast eine schöne Woche. Ich schreibe dir, ___31___ ich deine Hilfe bei der Vorbereitung für meinen Vortrag nächste Woche brauche. Wie du weißt, bin ich ___32___ solchen Auftritten immer sehr nervös.\n\nIch habe mich ___33___ entschieden, eine Präsentation über Umweltschutz im Alltag zu halten. Ich würde mich freuen, ___34___ du mal einen Blick auf meine Folien werfen könntest. Ich möchte sichergehen, dass die Folien nicht mit Text überladen sind und die Grafiken ___35___ den Inhalten passen.\n\nDer Vortrag findet am Donnerstag statt. Bitte sag mir Bescheid, ___36___ du Zeit hast, damit wir uns treffen können. Gerne lade ich dich als Dankeschön ___37___ ein Stück Kuchen in mein Lieblingscafé ein. \n\nIch freue mich schon ___38___ deine Rückmeldung. Ich hoffe, dass du mir ___39___ der Vorbereitung ein paar gute Tipps geben kannst.\n\nBis bald und liebe Grüße ___40___ die Familie!\nDeine Marie",
        items: [
          { id: 31, correctAnswer: "A" }, { id: 32, correctAnswer: "B" }, { id: 33, correctAnswer: "C" }, { id: 34, correctAnswer: "D" }, { id: 35, correctAnswer: "E" },
          { id: 36, correctAnswer: "F" }, { id: 37, correctAnswer: "G" }, { id: 38, correctAnswer: "H" }, { id: 39, correctAnswer: "I" }, { id: 40, correctAnswer: "J" }
        ]
      }
    ]
  },

  // ==================== TEST SET 6 ====================
  {
    setId: 6,
    parts: [
      {
        part: "Teil 1",
        title: "Sprachbausteine (Multiple-Choice)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke passt.",
        passage: "Sehr geehrte Damen und Herren,\n\nich wende mich heute an Sie, ___21___ ich mich über den Zustand der Mietwohnung beschweren möchte. Bei der Besichtigung sah alles gut aus, ___22___ haben sich kurz nach dem Einzug erhebliche Mängel gezeigt. \n\nDie Heizung im Wohnzimmer funktioniert überhaupt nicht. ___23___ der kühlen Herbsttemperaturen ist es in der Wohnung unerträglich kalt. Ich habe bereits versucht, den Hausmeister ___24___ kontaktieren, leider ohne Erfolg. Er war telefonisch nicht erreichbar und hat auch ___25___ meine Nachrichten nicht reagiert.\n\nZudem gibt es im Badezimmer einen kleinen Wasserschaden ___26___ der Decke. Ich bitte Sie daher dringend, eine Fachfirma mit der Reparatur der Heizung zu ___27___. Sollte der Schaden bis Ende nächster Woche nicht behoben sein, werde ich die Miete für den nächsten Monat ___28___ 20 Prozent mindern.\n\nIch hoffe ___29___ eine schnelle Behebung dieser Probleme und erwarte Ihre schriftliche ___30___ innerhalb von drei Tagen.\n\nMit freundlichen Grüßen\nChristian Wagner",
        questions: [
          { id: 21, label: "Lücke 21", options: [{ id: "a", text: "weil" }, { id: "b", text: "denn" }, { id: "c", text: "deshalb" }], correctAnswer: "a" },
          { id: 22, label: "Lücke 22", options: [{ id: "a", text: "jedoch" }, { id: "b", text: "obwohl" }, { id: "c", text: "trotzdem" }], correctAnswer: "a" },
          { id: 23, label: "Lücke 23", options: [{ id: "a", text: "Wegen" }, { id: "b", text: "Trotz" }, { id: "c", text: "Obwohl" }], correctAnswer: "a" },
          { id: 24, label: "Lücke 24", options: [{ id: "a", text: "zu" }, { id: "b", text: "um" }, { id: "c", text: "an" }], correctAnswer: "a" },
          { id: 25, label: "Lücke 25", options: [{ id: "a", text: "auf" }, { id: "b", text: "für" }, { id: "c", text: "an" }], correctAnswer: "a" },
          { id: 26, label: "Lücke 26", options: [{ id: "a", text: "an" }, { id: "b", text: "auf" }, { id: "c", text: "in" }], correctAnswer: "a" },
          { id: 27, label: "Lücke 27", options: [{ id: "a", text: "beauftragen" }, { id: "b", text: "schicken" }, { id: "c", text: "anrufen" }], correctAnswer: "a" },
          { id: 28, label: "Lücke 28", options: [{ id: "a", text: "um" }, { id: "b", text: "für" }, { id: "c", text: "an" }], correctAnswer: "a" },
          { id: 29, label: "Lücke 29", options: [{ id: "a", text: "auf" }, { id: "b", text: "über" }, { id: "c", text: "an" }], correctAnswer: "a" },
          { id: 30, label: "Lücke 30", options: [{ id: "a", text: "Antwort" }, { id: "b", text: "Frage" }, { id: "c", text: "Zustimmung" }], correctAnswer: "a" }
        ]
      },
      {
        part: "Teil 2",
        title: "Sprachbausteine (Wortzuordnung)",
        description: "Lesen Sie den folgenden Brief und entscheiden Sie, welches Wort aus der Liste (A-O) in die jeweilige Lücke (31-40) passt. Jedes Wort kann nur einmal verwendet werden. Fünf Wörter bleiben übrig.",
        options: [
          { id: "A", text: "besitzen" }, { id: "B", text: "Trotz" }, { id: "C", text: "um" }, { id: "D", text: "Deshalb" }, { id: "E", text: "damit" },
          { id: "F", text: "dass" }, { id: "G", text: "sodass" }, { id: "H", text: "Wenn" }, { id: "I", text: "ohne" }, { id: "J", text: "darunter" },
          { id: "K", text: "an" }, { id: "L", text: "mit" }, { id: "M", text: "von" }, { id: "N", text: "nach" }, { id: "O", text: "seit" }
        ],
        passage: "Das Internet hat den Lebensalltag von Kindern und Jugendlichen nachhaltig verändert. Fast alle Teenager ___31___ heute ein Smartphone und nutzen es täglich mehrere Stunden. ___32___ der Warnungen von Experten vor Risiken wie Mediensucht ist das Handy aus dem Alltag nicht mehr wegzudenken. Die Jugendlichen nutzen soziale Netzwerke, ___33___ mit Freunden in Kontakt zu bleiben oder Videos anzusehen.\n\n___34___ bietet das Netz auch Chancen für die Bildung. Schulen nutzen vermehrt digitale Medien, ___35___ der Unterricht interaktiver wird. Viele Lernplattformen helfen Schülern, schwierige Themen selbstständig zu wiederholen. \n\nDie Verantwortung liegt letztlich bei den Eltern. Sie müssen darauf achten, ___36___ ihre Kinder nicht zu viel Zeit vor dem Bildschirm verbringen. Eine gesunde Mischung aus digitaler Aktivität und Hobbys an der frischen Luft ist wichtig, ___37___ die Entwicklung nicht beeinträchtigt wird. ___38___ die Eltern klare Regeln aufstellen, lässt sich das Smartphone sinnvoll in den Alltag integrieren, ___39___ dass die schulischen Leistungen oder sozialen Kontakte ___40___ leiden müssen.",
        items: [
          { id: 31, correctAnswer: "A" }, { id: 32, correctAnswer: "B" }, { id: 33, correctAnswer: "C" }, { id: 34, correctAnswer: "D" }, { id: 35, correctAnswer: "E" },
          { id: 36, correctAnswer: "F" }, { id: 37, correctAnswer: "G" }, { id: 38, correctAnswer: "H" }, { id: 39, correctAnswer: "I" }, { id: 40, correctAnswer: "J" }
        ]
      }
    ]
  },

  // ==================== TEST SET 7 ====================
  {
    setId: 7,
    parts: [
      {
        part: "Teil 1",
        title: "Sprachbausteine (Multiple-Choice)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke passt.",
        passage: "Sehr geehrte Damen und Herren,\n\nich schreibe Ihnen, ___21___ ich mich über den Zustand der Mietwohnung beschweren möchte, die ich seit letztem Monat bei Ihnen gemietet habe. Bei der Besichtigung sah alles gut aus, ___22___ haben sich kurz nach dem Einzug erhebliche Mängel gezeigt. \n\nDie Heizung im Wohnzimmer funktioniert überhaupt nicht. ___23___ der kühlen Herbsttemperaturen is es in der Wohnung unerträglich kalt. Ich habe bereits versucht, den Hausmeister ___24___ kontaktieren, leider ohne Erfolg. Er war telefonisch nicht erreichbar und hat auch ___25___ meine Nachrichten nicht reagiert.\n\nZudem gibt es im Badezimmer einen kleinen Wasserschaden ___26___ der Decke. Ich bitte Sie daher dringend, eine Fachfirma mit der Reparatur der Heizung zu ___27___. Sollte der Schaden bis Ende nächster Woche nicht behoben sein, werde ich die Miete für den nächsten Monat ___28___ 20 Prozent mindern.\n\nIch hoffe ___29___ eine schnelle Behebung dieser Probleme und erwarte Ihre schriftliche ___30___ innerhalb von drei Tagen.\n\nMit freundlichen Grüßen\nChristian Wagner",
        questions: [
          { id: 21, label: "Lücke 21", options: [{ id: "a", text: "weil" }, { id: "b", text: "denn" }, { id: "c", text: "deshalb" }], correctAnswer: "a" },
          { id: 22, label: "Lücke 22", options: [{ id: "a", text: "jedoch" }, { id: "b", text: "obwohl" }, { id: "c", text: "trotzdem" }], correctAnswer: "a" },
          { id: 23, label: "Lücke 23", options: [{ id: "a", text: "Wegen" }, { id: "b", text: "Trotz" }, { id: "c", text: "Obwohl" }], correctAnswer: "a" },
          { id: 24, label: "Lücke 24", options: [{ id: "a", text: "zu" }, { id: "b", text: "um" }, { id: "c", text: "an" }], correctAnswer: "a" },
          { id: 25, label: "Lücke 25", options: [{ id: "a", text: "auf" }, { id: "b", text: "für" }, { id: "c", text: "an" }], correctAnswer: "a" },
          { id: 26, label: "Lücke 26", options: [{ id: "a", text: "an" }, { id: "b", text: "auf" }, { id: "c", text: "in" }], correctAnswer: "a" },
          { id: 27, label: "Lücke 27", options: [{ id: "a", text: "beauftragen" }, { id: "b", text: "schicken" }, { id: "c", text: "anrufen" }], correctAnswer: "a" },
          { id: 28, label: "Lücke 28", options: [{ id: "a", text: "um" }, { id: "b", text: "für" }, { id: "c", text: "an" }], correctAnswer: "a" },
          { id: 29, label: "Lücke 29", options: [{ id: "a", text: "auf" }, { id: "b", text: "über" }, { id: "c", text: "an" }], correctAnswer: "a" },
          { id: 30, label: "Lücke 30", options: [{ id: "a", text: "Antwort" }, { id: "b", text: "Frage" }, { id: "c", text: "Zustimmung" }], correctAnswer: "a" }
        ]
      },
      {
        part: "Teil 2",
        title: "Sprachbausteine (Wortzuordnung)",
        description: "Lesen Sie den folgenden Brief und entscheiden Sie, welches Wort aus der Liste (A-O) in die jeweilige Lücke (31-40) passt. Jedes Wort kann nur einmal verwendet werden. Fünf Wörter bleiben übrig.",
        options: [
          { id: "A", text: "weil" }, { id: "B", text: "in" }, { id: "C", text: "über" }, { id: "D", text: "obwohl" }, { id: "E", text: "trotzdem" },
          { id: "F", text: "wann" }, { id: "G", text: "damit" }, { id: "H", text: "welche" }, { id: "I", text: "auf" }, { id: "J", text: "inmitten" },
          { id: "K", text: "neben" }, { id: "L", text: "seit" }, { id: "M", text: "vor" }, { id: "N", text: "mit" }, { id: "O", text: "nach" }
        ],
        passage: "Liebe Sabine,\n\nich hoffe, es geht dir gut. Ich schreibe dir, ___31___ ich deine Hilfe bei der Planung für unsere nächste Wanderung brauche. Wir haben uns ja vorgenommen, am kommenden Sonntag ___32___ die Berge zu fahren.\n\nIch habe mich bereits ___33___ zwei mögliche Routen informiert. Die erste Route führt zu einer urigen Hütte, ___34___ die Wanderzeit dort mit vier Stunden recht lang ist. Die zweite Route ist kürzer, bietet aber ___35___ eine wunderschöne Aussicht auf den See.\n\nWir müssen uns entscheiden, ___36___ wir starten wollen. Ich schlage vor, sehr früh am Morgen abzufahren, ___37___ wir die Mittagshitze vermeiden können. Bitte sag mir Bescheid, ___38___ Route dir besser gefällt.\n\nIch freue mich schon sehr ___39___ den Ausflug mit dir. Ich hoffe, dass das Wetter hält und wir einen tollen Tag ___40___ der Natur verbringen werden.\n\nBis bald!\nDeine Claudia",
        items: [
          { id: 31, correctAnswer: "A" }, { id: 32, correctAnswer: "B" }, { id: 33, correctAnswer: "C" }, { id: 34, correctAnswer: "D" }, { id: 35, correctAnswer: "E" },
          { id: 36, correctAnswer: "F" }, { id: 37, correctAnswer: "G" }, { id: 38, correctAnswer: "H" }, { id: 39, correctAnswer: "I" }, { id: 40, correctAnswer: "J" }
        ]
      }
    ]
  },

  // ==================== TEST SET 8 ====================
  {
    setId: 8,
    parts: [
      {
        part: "Teil 1",
        title: "Sprachbausteine (Multiple-Choice)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke passt.",
        passage: "Sehr geehrte Damen und Herren,\n\nich schreibe Ihnen, ___21___ ich mich über das fehlerhafte Verhalten Ihrer Lieferabteilung beschweren möchte. Gestern habe ich ein Regal bei Ihnen bestellt, ___22___ heute geliefert werden sollte. Leider musste ich beim Auspacken feststellen, ___23___ zwei Schrauben fehlen. \n\nZudem entspricht das Regal nicht den Maßen ___24___ Ihrer Webseite. Ich hatte ein breiteres Modell gewählt, erhalten habe ich jedoch ein schmaleres. ___25___ dieser Fehler möchte ich das Regal umtauschen. Ich bitte Sie daher, mir umgehend die fehlenden Teile ___26___ oder mir den Kaufpreis zu erstatten.\n\nIch hoffe ___27___ eine schnelle Behebung dieses Problems. Bitte teilen Sie mir ___28___, wie ich bei der Rücksendung vorgehen soll. Sollte ich innerhalb einer Woche keine Antwort erhalten, werde ich die Verbraucherzentrale ___29___. \n\nMit freundlichen Grüßen\nThomas Schmidt\n\n___30___: Die Rechnung liegt bei.",
        questions: [
          { id: 21, label: "Lücke 21", options: [{ id: "a", text: "weil" }, { id: "b", text: "denn" }, { id: "c", text: "deshalb" }], correctAnswer: "a" },
          { id: 22, label: "Lücke 22", options: [{ id: "a", text: "das" }, { id: "b", text: "welches" }, { id: "c", text: "den" }], correctAnswer: "a" },
          { id: 23, label: "Lücke 23", options: [{ id: "a", text: "weil" }, { id: "b", text: "dass" }, { id: "c", text: "ob" }], correctAnswer: "b" },
          { id: 24, label: "Lücke 24", options: [{ id: "a", text: "auf" }, { id: "b", text: "in" }, { id: "c", text: "an" }], correctAnswer: "a" },
          { id: 25, label: "Lücke 25", options: [{ id: "a", text: "Wegen" }, { id: "b", text: "Trotz" }, { id: "c", text: "Obwohl" }], correctAnswer: "a" },
          { id: 26, label: "Lücke 26", options: [{ id: "a", text: "zusenden" }, { id: "b", text: "zuzusenden" }, { id: "c", text: "gesendet" }], correctAnswer: "b" },
          { id: 27, label: "Lücke 27", options: [{ id: "a", text: "auf" }, { id: "b", text: "über" }, { id: "c", text: "an" }], correctAnswer: "a" },
          { id: 28, label: "Lücke 28", options: [{ id: "a", text: "mit" }, { id: "b", text: "zu" }, { id: "c", text: "an" }], correctAnswer: "a" },
          { id: 29, label: "Lücke 29", options: [{ id: "a", text: "informieren" }, { id: "b", text: "kontaktieren" }, { id: "c", text: "rufen" }], correctAnswer: "b" },
          { id: 30, label: "Lücke 30", options: [{ id: "a", text: "Anhang" }, { id: "b", text: "Betreff" }, { id: "c", text: "Anlage" }], correctAnswer: "c" }
        ]
      },
      {
        part: "Teil 2",
        title: "Sprachbausteine (Wortzuordnung)",
        description: "Lesen Sie den folgenden Brief und entscheiden Sie, welches Wort aus der Liste (A-O) in die jeweilige Lücke (31-40) passt. Jedes Wort kann nur einmal verwendet werden. Fünf Wörter bleiben übrig.",
        options: [
          { id: "A", text: "dafür" }, { id: "B", text: "nutzen" }, { id: "C", text: "Trotz" }, { id: "D", text: "um" }, { id: "E", text: "Neben" },
          { id: "F", text: "wenn" }, { id: "G", text: "weil" }, { id: "H", text: "ohne" }, { id: "I", text: "da" }, { id: "J", text: "zum" },
          { id: "K", text: "an" }, { id: "L", text: "mit" }, { id: "M", text: "von" }, { id: "N", text: "nach" }, { id: "O", text: "seit" }
        ],
        passage: "Das Fahrrad hat als umweltfreundliches Verkehrsmittel in deutschen Großstädten an Bedeutung gewonnen. Viele Menschen entscheiden sich ___31___, ihr Auto stehenzulassen und das Rad für den täglichen Arbeitsweg zu ___32___. ___33___ dieser positiven Entwicklung gibt es auch Probleme: Die Radwege sind oft überfüllt und in schlechtem Zustand. Die Städte müssen investieren, ___34___ die Sicherheit der Radfahrer zu garantieren.\n\n___35___ den Vorteilen des Radfahrens im Alltag gibt es Kritik. In Stoßzeiten sind oft keine Stellplätze an Bahnhöfen frei, ___36___ man das Rad dort abstellen will. Zudem sind die Radwege im Winter oft nicht geräumt.\n\nFür den Umweltschutz ist das Fahrrad besonders sinnvoll, ___37___ dadurch Autofahrten vermieden werden. Experten betonen, dass viele Menschen ___38___ Rad auch kürzere Strecken problemlos zu Fuß gehen könnten. Die Entwicklung bleibt also spannend, ___39___ immer mehr Menschen das Rad im Alltag für kurze Wege als echte Alternative ___40___ Auto ansehen.",
        items: [
          { id: 31, correctAnswer: "A" }, { id: 32, correctAnswer: "B" }, { id: 33, correctAnswer: "C" }, { id: 34, correctAnswer: "D" }, { id: 35, correctAnswer: "E" },
          { id: 36, correctAnswer: "F" }, { id: 37, correctAnswer: "G" }, { id: 38, correctAnswer: "H" }, { id: 39, correctAnswer: "I" }, { id: 40, correctAnswer: "J" }
        ]
      }
    ]
  }
];
