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
          { id: "A", text: "seit" }, { id: "B", text: "dafür" }, { id: "C", text: "obwohl" }, { id: "D", text: "Wegen" }, { id: "E", text: "entsprochen" },
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
          { id: 25, label: "Lücke 25", options: [{ id: "a", text: "nur dass" }, { id: "b", text: "trotzdem" }, { id: "c", text: "während" }], correctAnswer: "a" },
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
          { id: "A", text: "da" }, { id: "B", text: "deshalb" }, { id: "C", text: "denn" }, { id: "D", text: "gerade wenn" }, { id: "E", text: "Trotz" },
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
        passage: "Sehr geehrte Damen und Herren,\n\nich wende mich heute an Sie, ___21___ ich mich über eine Fehlbuchung auf meinem Konto beschweren möchte. Gestern stellte ich fest, ___22___ Sie mir den Betrag für die monatliche Gebühr doppelt abgebucht haben. \n\nIm Vertrag steht, dass die Gebühr am ersten Werktag ___23___ Monats fällig ist. Dies war ___24___ nicht der Fall. Ich bitte Sie daher, mir die zu viel gezahlte Gebühr ___25___ zu erstatten.\n\nSollte dies nicht geschehen, werde ich mich ___26___ meine Bank wenden. Bitte informieren Sie mich ___27___ die getroffenen Schritte.\n\nIch hoffe auf eine schnelle Klärung ___28___ Angelegenheit und stehe Ihnen für Rückfragen gerne ___29___ Verfügung.\n\nMit freundlichen Grüßen\nPeter Müller\n\nKonto: DE12 3456 7890\nKundennummer: ___30___",
        questions: [
          { id: 21, label: "Lücke 21", options: [{ id: "a", text: "weil" }, { id: "b", text: "denn" }, { id: "c", text: "deshalb" }], correctAnswer: "a" },
          { id: 22, label: "Lücke 22", options: [{ id: "a", text: "dass" }, { id: "b", text: "weil" }, { id: "c", text: "wenn" }], correctAnswer: "a" },
          { id: 23, label: "Lücke 23", options: [{ id: "a", text: "des" }, { id: "b", text: "dem" }, { id: "c", text: "den" }], correctAnswer: "a" },
          { id: 24, label: "Lücke 24", options: [{ id: "a", text: "jedoch" }, { id: "b", text: "obwohl" }, { id: "c", text: "trotzdem" }], correctAnswer: "a" },
          { id: 25, label: "Lücke 25", options: [{ id: "a", text: "umgehend" }, { id: "b", text: "schnell" }, { id: "c", text: "bald" }], correctAnswer: "a" },
          { id: 26, label: "Lücke 26", options: [{ id: "a", text: "an" }, { id: "b", text: "zu" }, { id: "c", text: "bei" }], correctAnswer: "a" },
          { id: 27, label: "Lücke 27", options: [{ id: "a", text: "über" }, { id: "b", text: "an" }, { id: "c", text: "für" }], correctAnswer: "a" },
          { id: 28, label: "Lücke 28", options: [{ id: "a", text: "dieser" }, { id: "b", text: "jener" }, { id: "c", text: "solcher" }], correctAnswer: "a" },
          { id: 29, label: "Lücke 29", options: [{ id: "a", text: "zur" }, { id: "b", text: "an" }, { id: "c", text: "für" }], correctAnswer: "a" },
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
        passage: "Liebe Julia,\n\nich hoffe, du hast eine schöne Woche. Ich schreibe dir, ___31___ ich deine Hilfe bei der Vorbereitung für meinen Vortrag nächste Woche brauche. Wie du weißt, bin ich ___32___ solchen Auftritten immer sehr nervös.\n\nIch habe mich ___33___ entschieden, eine Präsentation über Umweltschutz im Alltag zu halten. Ich würde mich freuen, ___34___ du mal einen Blick auf meine Folien werfen könntest. Ich möchte sichergehen, dass die Folien nicht mit Text überladen sind und die Grafiken ___35___ den Inhalten passen.\n\nDer Vortrag findet am Donnerstag statt. Bitte sag mir Bescheid, ___36___ du Zeit hast, damit wir uns treffen können. Gerne lade ich dich als Dankeschön ___37___ ein Stück Kuchen in mein Lieblingscafé ein. \n\nIch würde mich sehr ___38___ eine Rückmeldung von dir freuen. Ich hoffe, dass du mir ___39___ der Vorbereitung ein paar gute Tipps geben kannst.\n\nBis bald und liebe Grüße ___40___ die Familie!\nDeine Marie",
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
          { id: "A", text: "besitzen" }, { id: "B", text: "Trotz" }, { id: "C", text: "um" }, { id: "D", text: "Außerdem" }, { id: "E", text: "damit" },
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
        passage: "Sehr geehrte Frau Müller,\n\nich wende mich heute an Sie, ___21___ ich Sie um einen Gefallen bitten möchte. Wie Sie vielleicht bereits wissen, plane ich, mein Studium im kommenden Semester im Ausland fortzusetzen. ___22___ dieses Ziels habe ich mich für ein Stipendium an der Universität in Barcelona beworben.\n\nFür die vollständigen Bewerbungsunterlagen ___23___ ich noch ein akademisches Empfehlungsschreiben. Da ich in Ihrem Seminar im letzten Semester sehr viel gelernt habe und ___24___ meine Hausarbeit eine sehr gute Note erhalten habe, würde ich mich freuen, ___25___ Sie dieses Schreiben für mich verfassen könnten.\n\nDas Gutachten sollte idealerweise bis zum 15. Mai bei der Stiftung ___26___. Ich weiß, dass Sie derzeit sehr beschäftigt sind, ___27___ hoffe ich, dass Sie die Zeit für mein Anliegen finden. Gerne lasse ich Ihnen meinen aktuellen Lebenslauf sowie ein Motivationsschreiben ___28___, damit Sie alle wichtigen Informationen zur Verfügung haben.\n\nIch bedanke mich im Voraus für Ihre Mühe und ___29___ mich auf eine positive Rückmeldung.\n\nMit freundlichen Grüßen\nLukas Weber\n\n___30___: Lebenslauf und Motivationsschreiben",
        questions: [
          { id: 21, label: "Lücke 21", options: [{ id: "a", text: "weil" }, { id: "b", text: "obwohl" }, { id: "c", text: "damit" }], correctAnswer: "a" },
          { id: 22, label: "Lücke 22", options: [{ id: "a", text: "Wegen" }, { id: "b", text: "Trotz" }, { id: "c", text: "Zwecks" }], correctAnswer: "c" },
          { id: 23, label: "Lücke 23", options: [{ id: "a", text: "benötige" }, { id: "b", text: "brauche" }, { id: "c", text: "verlange" }], correctAnswer: "a" },
          { id: 24, label: "Lücke 24", options: [{ id: "a", text: "für" }, { id: "b", text: "auf" }, { id: "c", text: "über" }], correctAnswer: "a" },
          { id: 25, label: "Lücke 25", options: [{ id: "a", text: "wenn" }, { id: "b", text: "dass" }, { id: "c", text: "ob" }], correctAnswer: "a" },
          { id: 26, label: "Lücke 26", options: [{ id: "a", text: "eingehen" }, { id: "b", text: "ankommen" }, { id: "c", text: "abgeben" }], correctAnswer: "a" },
          { id: 27, label: "Lücke 27", options: [{ id: "a", text: "deshalb" }, { id: "b", text: "dennoch" }, { id: "c", text: "außerdem" }], correctAnswer: "b" },
          { id: 28, label: "Lücke 28", options: [{ id: "a", text: "zukommen" }, { id: "b", text: "zuschicken" }, { id: "c", text: "bringen" }], correctAnswer: "a" },
          { id: 29, label: "Lücke 29", options: [{ id: "a", text: "freue" }, { id: "b", text: "hoffe" }, { id: "c", text: "warte" }], correctAnswer: "a" },
          { id: 30, label: "Lücke 30", options: [{ id: "a", text: "Anhang" }, { id: "b", text: "Anlagen" }, { id: "c", text: "Anlage" }], correctAnswer: "b" }
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
  ,
  // ==================== TEST SET 9 ====================
  {
    setId: 9,
    parts: [
      {
        part: "Teil 1",
        title: "Sprachbausteine (Multiple-Choice)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke passt.",
        passage: "Sehr geehrte Damen und Herren,\n\nich wende mich heute an Sie, ___21___ ich mich über eine unberechtigte Stornogebühr auf meiner Kreditkartenabrechnung beschweren möchte. Vor zwei Wochen hatte ich über Ihr Portal ein Hotelzimmer in Hamburg gebucht, ___22___ mir von Kollegen empfohlen worden war. \n\nLeider musste ich die Reise aus dringenden geschäftlichen Gründen absagen. Laut Ihren Buchungsbedingungen war eine kostenfreie Stornierung bis 48 Stunden vor Anreise möglich. Ich habe die Stornierung drei Tage ___23___ Reiseantritt online durchgeführt, sodass mir eigentlich keine Kosten entstehen ___24___.\n\nDennoch wurden meiner Karte 180 Euro belastet. ___25___ dieses Fehlers habe ich bereits mehrfach versucht, Ihren Kundenservice telefonisch zu ___26___, leider ohne Erfolg. Niemand konnte mir eine befriedigende Auskunft ___27___.\n\nIch fordere Sie daher auf, den unberechtigt abgebuchten Betrag innerhalb von sieben Werktagen ___28___ mein Konto zurückzuerstatten. Sollte die Frist fruchtlos verstreichen, werde ich rechtliche Schritte ___29___.\n\nMit freundlichen Grüßen\nMarkus Eder\n\n___30___: Buchungsbestätigung und Stornierungsbeleg.",
        questions: [
          { id: 21, label: "Lücke 21", options: [{ id: "a", text: "weil" }, { id: "b", text: "denn" }, { id: "c", text: "deshalb" }], correctAnswer: "a" },
          { id: 22, label: "Lücke 22", options: [{ id: "a", text: "das" }, { id: "b", text: "dem" }, { id: "c", text: "dessen" }], correctAnswer: "a" },
          { id: 23, label: "Lücke 23", options: [{ id: "a", text: "nach" }, { id: "b", text: "vor" }, { id: "c", text: "seit" }], correctAnswer: "b" },
          { id: 24, label: "Lücke 24", options: [{ id: "a", text: "sollten" }, { id: "b", text: "dürften" }, { id: "c", text: "müssten" }], correctAnswer: "b" },
          { id: 25, label: "Lücke 25", options: [{ id: "a", text: "Wegen" }, { id: "b", text: "Trotz" }, { id: "c", text: "Anstatt" }], correctAnswer: "a" },
          { id: 26, label: "Lücke 26", options: [{ id: "a", text: "erreichen" }, { id: "b", text: "erreicht" }, { id: "c", text: "erreichend" }], correctAnswer: "a" },
          { id: 27, label: "Lücke 27", options: [{ id: "a", text: "machen" }, { id: "b", text: "geben" }, { id: "c", text: "bringen" }], correctAnswer: "b" },
          { id: 28, label: "Lücke 28", options: [{ id: "a", text: "an" }, { id: "b", text: "auf" }, { id: "c", text: "in" }], correctAnswer: "b" },
          { id: 29, label: "Lücke 29", options: [{ id: "a", text: "einleiten" }, { id: "b", text: "unternehmen" }, { id: "c", text: "durchführen" }], correctAnswer: "a" },
          { id: 30, label: "Lücke 30", options: [{ id: "a", text: "Anlagen" }, { id: "b", text: "Anhang" }, { id: "c", text: "Kopien" }], correctAnswer: "a" }
        ]
      },
      {
        part: "Teil 2",
        title: "Sprachbausteine (Wortschatz / Zuordnung)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort aus der Liste (A-O) in die jeweilige Lücke passt. Jedes Wort darf nur einmal verwendet werden. Fünf Wörter bleiben übrig.",
        passage: "Lieber Tobias,\n\nich hoffe, es geht dir gut. Wie du weißt, organisiere ich ___31___ einigen Wochen die diesjährige Jahreskonferenz unseres Unternehmens. Die Vorbereitungen laufen auf Hochtouren, ___32___ es noch einige offene Fragen gibt.\n\nIch habe mich bereits ___33___ gekümmert, einen passenden Konferenzraum im Stadtzentrum zu reservieren. Der Raum bietet Platz für über 100 Gäste und ist technisch hervorragend ___34___. Allerdings müssen wir noch das Catering planen. Ich erinnere mich ___35___, dass du letztes Jahr einen exzellenten Partyservice beauftragt hattest. Könntest du mir bitte den Kontakt ___36___?\n\nWir müssen auch festlegen, wer von unserer Abteilung an dem Workshop zum Thema Digitalisierung ___37___ wird. Der Geschäftsführer legt großen Wert ___38___, dass alle Teamleiter anwesend sind. Ich würde mich freuen, ___39___ du kurzfristig Zeit für ein kurzes Abstimmungsgespräch hättest.\n\nVielen Dank ___40___ deine Unterstützung!\n\nBeste Grüße\nMartin",
        options: [
          { id: "A", text: "daran" },
          { id: "B", text: "darauf" },
          { id: "C", text: "darum" },
          { id: "D", text: "ausgestattet" },
          { id: "E", text: "weiterleiten" },
          { id: "F", text: "teilnehmen" },
          { id: "G", text: "obwohl" },
          { id: "H", text: "wenn" },
          { id: "I", text: "für" },
          { id: "J", text: "seit" },
          { id: "K", text: "vor" },
          { id: "L", text: "teilgenommen" },
          { id: "M", text: "über" },
          { id: "N", text: "damit" },
          { id: "O", text: "abgesagt" }
        ],
        items: [
          { id: 31, correctAnswer: "J" }, // seit
          { id: 32, correctAnswer: "G" }, // obwohl
          { id: 33, correctAnswer: "C" }, // darum (kümmern darum)
          { id: 34, correctAnswer: "D" }, // ausgestattet
          { id: 35, correctAnswer: "A" }, // daran (erinnern an)
          { id: 36, correctAnswer: "E" }, // weiterleiten
          { id: 37, correctAnswer: "F" }, // teilnehmen
          { id: 38, correctAnswer: "B" }, // darauf (Wert legen auf)
          { id: 39, correctAnswer: "H" }, // wenn
          { id: 40, correctAnswer: "I" }  // für
        ]
      }
    ]
  },

  // ==================== TEST SET 10 ====================
  {
    setId: 10,
    parts: [
      {
        part: "Teil 1",
        title: "Sprachbausteine (Multiple-Choice)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke passt.",
        passage: "Sehr geehrte Frau Dr. Keller,\n\nich beziehe mich auf unser angenehmes Telefonat vom vergangenen Dienstag und möchte mich ___21___ für das informative Gespräch bedanken. Wie vereinbart, sende ich Ihnen anbei meine vollständigen Bewerbungsunterlagen ___22___ die Stelle als Projektleiter im Bereich erneuerbare Energien.\n\n___23___ meiner fünfjährigen Berufstätigkeit in einem mittelständischen Ingenieurbüro konnte ich bereits umfangreiche Fachkenntnisse bei der Planung von Photovoltaikanlagen ___24___. Ich zeichne mich durch eine zielorientierte Arbeitsweise aus und habe mehrfach bewiesen, dass ich auch komplexe Projekte erfolgreich zum Abschluss ___25___ kann.\n\nDa ich mich beruflich weiterentwickeln möchte, reizt mich die ausgeschriebene Position bei Ihnen ___26___. Ich bin überzeugt, dass ich mein Know-how gewinnbringend in Ihr Team ___27___ werde.\n\nFür ein persönliches Vorstellungsgespräch stehe ich Ihnen jederzeit gerne zur ___28___.\n\nÜber eine positive Rückmeldung würde ich mich sehr ___29___.\n\nMit freundlichen Grüßen\nStefan Becker\n\n___30___: Lebenslauf, Zeugnisse, Zertifikate.",
        questions: [
          { id: 21, label: "Lücke 21", options: [{ id: "a", text: "nochmals" }, { id: "b", text: "wieder" }, { id: "c", text: "erstmals" }], correctAnswer: "a" },
          { id: 22, label: "Lücke 22", options: [{ id: "a", text: "um" }, { id: "b", text: "für" }, { id: "c", text: "über" }], correctAnswer: "b" },
          { id: 23, label: "Lücke 23", options: [{ id: "a", text: "Während" }, { id: "b", text: "Trotz" }, { id: "c", text: "Wegen" }], correctAnswer: "a" },
          { id: 24, label: "Lücke 24", options: [{ id: "a", text: "erwerben" }, { id: "b", text: "erwerben zu" }, { id: "c", text: "erworben" }], correctAnswer: "a" },
          { id: 25, label: "Lücke 25", options: [{ id: "a", text: "führen" }, { id: "b", text: "bringen" }, { id: "c", text: "leiten" }], correctAnswer: "b" },
          { id: 26, label: "Lücke 26", options: [{ id: "a", text: "außerordentlich" }, { id: "b", text: "ziemlich" }, { id: "c", text: "überhaupt" }], correctAnswer: "a" },
          { id: 27, label: "Lücke 27", options: [{ id: "a", text: "einbringen" }, { id: "b", text: "mitbringen" }, { id: "c", text: "anbringen" }], correctAnswer: "a" },
          { id: 28, label: "Lücke 28", options: [{ id: "a", text: "Verfügung" }, { id: "b", text: "Auswahl" }, { id: "c", text: "Aussicht" }], correctAnswer: "a" },
          { id: 29, label: "Lücke 29", options: [{ id: "a", text: "freuen" }, { id: "b", text: "gefreut" }, { id: "c", text: "freute" }], correctAnswer: "a" },
          { id: 30, label: "Lücke 30", options: [{ id: "a", text: "Anlagen" }, { id: "b", text: "Kopie" }, { id: "c", text: "Zusatz" }], correctAnswer: "a" }
        ]
      },
      {
        part: "Teil 2",
        title: "Sprachbausteine (Wortschatz / Zuordnung)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort aus der Liste (A-O) in die jeweilige Lücke passt. Jedes Wort darf nur einmal verwendet werden. Fünf Wörter bleiben übrig.",
        passage: "Liebe Kolleginnen und Kollegen,\n\nwie Sie sicherlich schon erfahren haben, wird unsere Firmenzentrale im kommenden Monat ___31___ moderne Büroräume am Stadtrand umziehen. Dieser Schritt ist notwendig geworden, ___32___ unser Unternehmen in den vergangenen zwei Jahren stark gewachsen ist.\n\nDas neue Gebäude verfügt ___33___ modernste Arbeitsplätze und hervorragend ausgestattete Besprechungsräume. Um den Umzug so reibungslos wie möglich zu ___34___, bitten wir Sie, Ihre persönlichen Arbeitsunterlagen bis zum 25. dieses Monats in die bereitgestellten Kartons zu ___35___.\n\nSollten Sie Fragen ___36___ Ablauf haben, wenden Sie sich bitte direkt an das Organisationsteam. Wir bitten Sie ___37___ Verständnis, dass es während der Umzugstage zu kurzzeitigen Unterbrechungen der IT-Systeme kommen kann. Wir freuen uns ___38___, die neuen Räumlichkeiten gemeinsam mit Ihnen zu beziehen und laden Sie schon jetzt herzlich ___39___ Einweihungsfeier ein.\n\nVielen Dank ___40___ Ihre Kooperation!\n\nDie Geschäftsleitung",
        options: [
          { id: "A", text: "in" },
          { id: "B", text: "nach" },
          { id: "C", text: "weil" },
          { id: "D", text: "über" },
          { id: "E", text: "gestalten" },
          { id: "F", text: "packen" },
          { id: "G", text: "zum" },
          { id: "H", text: "um" },
          { id: "I", text: "darauf" },
          { id: "J", text: "zur" },
          { id: "K", text: "für" },
          { id: "L", text: "seit" },
          { id: "M", text: "obwohl" },
          { id: "N", text: "gestellt" },
          { id: "O", text: "damit" }
        ],
        items: [
          { id: 31, correctAnswer: "A" }, // in
          { id: 32, correctAnswer: "C" }, // weil
          { id: 33, correctAnswer: "D" }, // über (verfügen über)
          { id: 34, correctAnswer: "E" }, // gestalten
          { id: 35, correctAnswer: "F" }, // packen
          { id: 36, correctAnswer: "G" }, // zum (Fragen zum Ablauf)
          { id: 37, correctAnswer: "H" }, // um (bitten um)
          { id: 38, correctAnswer: "I" }, // darauf (freuen auf)
          { id: 39, correctAnswer: "J" }, // zur (einladen zu)
          { id: 40, correctAnswer: "K" }  // für
        ]
      }
    ]
  },

  // ==================== TEST SET 11 ====================
  {
    setId: 11,
    parts: [
      {
        part: "Teil 1",
        title: "Sprachbausteine (Multiple-Choice)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke passt.",
        passage: "Sehr geehrte Damen und Herren,\n\nhiermit kündige ich meinen bestehenden Internet- und Festnetzvertrag (Kundennummer: 894521) fristgerecht ___21___ nächstmöglichen Zeitpunkt. Laut den Vertragsunterlagen beträgt die Kündigungsfrist drei Monate zum Ende der Mindestvertragslaufzeit, ___22___ am 30. November dieses Jahres endet.\n\nIch bitte Sie höflich, mir den Eingang dieses Schreibens sowie das genaue Vertragsende schriftlich zu ___23___. Bitte sehen Sie von telefonischen Rückwerbeversuchen ___24___, da meine Entscheidung endgültig ist. \n\nZudem widerrufe ich mit sofortiger Wirkung die Ihnen erteilte Einzugsermächtigung ___25___ mein Bankkonto. Zukünftige Rechnungsbeträge bis zum Vertragsende werde ich per Einzelüberweisung ___26___.\n\nSollten Sie noch Leihgeräte wie den Router zurückfordern, teilen Sie mir dies bitte zeitnah mit, ___27___ ich die Geräte rechtzeitig an Sie zurücksenden kann. Eine entsprechende Rücksende-Paketmarke bitte ich mir per E-Mail ___28___ zur Verfügung zu stellen.\n\nIch bedanke mich ___29___ die bisherige Zusammenarbeit.\n\nMit freundlichen Grüßen\nHelena Fischer\n\n___30___: Keine.",
        questions: [
          { id: 21, label: "Lücke 21", options: [{ id: "a", text: "zum" }, { id: "b", text: "am" }, { id: "c", text: "im" }], correctAnswer: "a" },
          { id: 22, label: "Lücke 22", options: [{ id: "a", text: "welche" }, { id: "b", text: "die" }, { id: "c", text: "welcher" }], correctAnswer: "a" },
          { id: 23, label: "Lücke 23", options: [{ id: "a", text: "bestätigen" }, { id: "b", text: "bestätigt" }, { id: "c", text: "bestätigend" }], correctAnswer: "a" },
          { id: 24, label: "Lücke 24", options: [{ id: "a", text: "ab" }, { id: "b", text: "aus" }, { id: "c", text: "an" }], correctAnswer: "a" },
          { id: 25, label: "Lücke 25", options: [{ id: "a", text: "für" }, { id: "b", text: "über" }, { id: "c", text: "an" }], correctAnswer: "a" },
          { id: 26, label: "Lücke 26", options: [{ id: "a", text: "begleichen" }, { id: "b", text: "bezahlen" }, { id: "c", text: "ausgleichen" }], correctAnswer: "a" },
          { id: 27, label: "Lücke 27", options: [{ id: "a", text: "damit" }, { id: "b", text: "sodass" }, { id: "c", text: "obwohl" }], correctAnswer: "a" },
          { id: 28, label: "Lücke 28", options: [{ id: "a", text: "kostenlos" }, { id: "b", text: "teuer" }, { id: "c", text: "befristet" }], correctAnswer: "a" },
          { id: 29, label: "Lücke 29", options: [{ id: "a", text: "für" }, { id: "b", text: "über" }, { id: "c", text: "an" }], correctAnswer: "a" },
          { id: 30, label: "Lücke 30", options: [{ id: "a", text: "Anlagen" }, { id: "b", text: "Zusatz" }, { id: "c", text: "Anhang" }], correctAnswer: "a" }
        ]
      },
      {
        part: "Teil 2",
        title: "Sprachbausteine (Wortschatz / Zuordnung)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort aus der Liste (A-O) in die jeweilige Lücke passt. Jedes Wort darf nur einmal verwendet werden. Fünf Wörter bleiben übrig.",
        passage: "Liebe Miriam,\n\nich hoffe, du hattest ein schönes Wochenende. Ich schreibe dir, ___31___ ich deinen Rat bei der Auswahl einer Weiterbildung brauche. Mein Chef hat mir vorgeschlagen, an einem Zertifikatslehrgang im Bereich Online-Marketing ___32___.\n\nIch zweifle jedoch noch ___33___, ob ich den zusätzlichen Arbeitsaufwand neben meinem Vollzeitjob bewältigen kann. Der Kurs erstreckt sich ___34___ sechs Monate und verlangt wöchentlich etwa zehn Stunden Selbststudium. Andererseits könnte mir dieser Abschluss neue berufliche Chancen ___35___.\n\nDu hast doch letztes Jahr eine ähnliche Fortbildung ___36___. Warst du mit den Dozenten und den Inhalten ___37___? Konntest du das Gelernte direkt in deinem Berufsalltag ___38___?\n\nLass uns doch die Tage mal zum Mittagessen treffen, ___39___ wir in Ruhe darüber sprechen können. Sag mir einfach Bescheid, ___40___ Tag dir am besten passt.\n\nHerzliche Grüße\nKatharina",
        options: [
          { id: "A", text: "weil" },
          { id: "B", text: "teilzunehmen" },
          { id: "C", text: "daran" },
          { id: "D", text: "über" },
          { id: "E", text: "eröffnen" },
          { id: "F", text: "absolviert" },
          { id: "G", text: "zufrieden" },
          { id: "H", text: "anwenden" },
          { id: "I", text: "damit" },
          { id: "J", text: "welcher" },
          { id: "K", text: "obwohl" },
          { id: "L", text: "darauf" },
          { id: "M", text: "seit" },
          { id: "N", text: "begeistert" },
          { id: "O", text: "teilnehmen" }
        ],
        items: [
          { id: 31, correctAnswer: "A" }, // weil
          { id: 32, correctAnswer: "B" }, // teilzunehmen
          { id: 33, correctAnswer: "C" }, // daran (zweifeln an)
          { id: 34, correctAnswer: "D" }, // über
          { id: 35, correctAnswer: "E" }, // eröffnen (Chancen eröffnen)
          { id: 36, correctAnswer: "F" }, // absolviert
          { id: 37, correctAnswer: "G" }, // zufrieden (zufrieden mit)
          { id: 38, correctAnswer: "H" }, // anwenden
          { id: 39, correctAnswer: "I" }, // damit
          { id: 40, correctAnswer: "J" }  // welcher
        ]
      }
    ]
  },

  // ==================== TEST SET 12 ====================
  {
    setId: 12,
    parts: [
      {
        part: "Teil 1",
        title: "Sprachbausteine (Multiple-Choice)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke passt.",
        passage: "Sehr geehrte Damen und Herren,\n\nich wende mich an Sie bezüglich des Mietvertrags für die Gewerberäume in der Schillerstraße 14. Vor zwei Monaten haben wir die Räume bezogen, um dort ein Architekturbüro zu ___21___. Leider mussten wir feststellen, dass der Zustand des Gebäudes erhebliche Mängel ___22___.\n\nInsbesondere die Fenster im ersten Obergeschoss schließen nicht dicht, ___23___ bei starkem Regen Wasser in den Konferenzraum eindringt. Zudem ist die Heizungsanlage defekt, was ___24___ der sinkenden Außentemperaturen zu einer unzumutbaren Arbeitsatmosphäre führt. Wir haben den Hausmeister bereits mehrfach ___25___ diese Missstände hingewiesen.\n\nDa bisher keine Reparaturmaßnahmen ergriffen wurden, fordern wir Sie hiermit auf, die Schäden bis zum 15. des Monats fachgerecht zu ___26___. Sollte die Frist ohne Ergebnis verstreichen, behalten wir uns das Recht ___27___, die Miete um 25 Prozent zu mindern.\n\nWir hoffen jedoch auf eine einvernehmliche und zügige ___28___ der Probleme.\n\nFür Rückfragen stehen wir Ihnen gerne ___29___ Verfügung.\n\nMit freundlichen Grüßen\nBauplan GmbH\n\n___30___: Fotos der Wasserschäden.",
        questions: [
          { id: 21, label: "Lücke 21", options: [{ id: "a", text: "eröffnen" }, { id: "b", text: "eröffnet" }, { id: "c", text: "eröffnend" }], correctAnswer: "a" },
          { id: 22, label: "Lücke 22", options: [{ id: "a", text: "aufweist" }, { id: "b", text: "ausweist" }, { id: "c", text: "hinweist" }], correctAnswer: "a" },
          { id: 23, label: "Lücke 23", options: [{ id: "a", text: "sodass" }, { id: "b", text: "obwohl" }, { id: "c", text: "weil" }], correctAnswer: "a" },
          { id: 24, label: "Lücke 24", options: [{ id: "a", text: "infolge" }, { id: "b", text: "trotz" }, { id: "c", text: "anstelle" }], correctAnswer: "a" },
          { id: 25, label: "Lücke 25", options: [{ id: "a", text: "auf" }, { id: "b", text: "über" }, { id: "c", text: "an" }], correctAnswer: "a" },
          { id: 26, label: "Lücke 26", options: [{ id: "a", text: "beheben" }, { id: "b", text: "beseitigt" }, { id: "c", text: "erneuern" }], correctAnswer: "a" },
          { id: 27, label: "Lücke 27", options: [{ id: "a", text: "vor" }, { id: "b", text: "an" }, { id: "c", text: "bei" }], correctAnswer: "a" },
          { id: 28, label: "Lücke 28", options: [{ id: "a", text: "Lösung" }, { id: "b", text: "Entscheidung" }, { id: "c", text: "Abwicklung" }], correctAnswer: "a" },
          { id: 29, label: "Lücke 29", options: [{ id: "a", text: "zur" }, { id: "b", text: "an" }, { id: "c", text: "in" }], correctAnswer: "a" },
          { id: 30, label: "Lücke 30", options: [{ id: "a", text: "Anlagen" }, { id: "b", text: "Kopie" }, { id: "c", text: "Zusatz" }], correctAnswer: "a" }
        ]
      },
      {
        part: "Teil 2",
        title: "Sprachbausteine (Wortschatz / Zuordnung)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort aus der Liste (A-O) in die jeweilige Lücke passt. Jedes Wort darf nur einmal verwendet werden. Fünf Wörter bleiben übrig.",
        passage: "Das Handwerk erlebt in Deutschland derzeit eine bemerkenswerte Renaissance. Immer mehr junge Menschen entscheiden sich nach dem Abitur bewusst ___31___ ein klassisches Universitätsstudium und beginnen stattdessen eine handwerkliche Lehre. Gründe für diesen Trend gibt es viele: Zum einen locken glänzende Zukunftsaussichten, ___32___ Handwerksbetriebe händeringend nach qualifizierten Fachkräften suchen.\n\nZum anderen schätzen viele Auszubildende das Gefühl, am Ende des Tages das sichtbare Ergebnis ihrer Arbeit in den Händen zu ___33___. Ob als Tischler, Dachdecker oder Elektroniker: Moderne Handwerker arbeiten heute mit hochmodernen Werkzeugen und digitalen Planungssoftwares, was den Berufen ein innovatives Image ___34___.\n\nWer seine Meisterprüfung erfolgreich ___35___ hat, kann sich oft schon in jungen Jahren selbstständig machen oder einen bestehenden Traditionsbetrieb ___36___. Experten weisen jedoch ___37___ hin, dass die Arbeitsbelastung in vielen Gewerken nach wie vor hoch ist. Wer sich ___38___ diesen Weg entscheidet, sollte neben handwerklichem Geschick auch unternehmerisches Denken ___39___.\n\nDas Handwerk beweist damit eindrucksvoll, dass es auch im digitalen Zeitalter unverzichtbar ___40___.",
        options: [
          { id: "A", text: "gegen" },
          { id: "B", text: "weil" },
          { id: "C", text: "halten" },
          { id: "D", text: "verleiht" },
          { id: "E", text: "abgelegt" },
          { id: "F", text: "übernehmen" },
          { id: "G", text: "darauf" },
          { id: "H", text: "für" },
          { id: "I", text: "mitbringen" },
          { id: "J", text: "bleibt" },
          { id: "K", text: "obwohl" },
          { id: "L", text: "gehalten" },
          { id: "M", text: "worauf" },
          { id: "N", text: "seit" },
          { id: "O", text: "wird" }
        ],
        items: [
          { id: 31, correctAnswer: "A" }, // gegen (entscheiden gegen)
          { id: 32, correctAnswer: "B" }, // weil
          { id: 33, correctAnswer: "C" }, // halten (in den Händen halten)
          { id: 34, correctAnswer: "D" }, // verleiht (Image verleiht)
          { id: 35, correctAnswer: "E" }, // abgelegt (Prüfung abgelegt)
          { id: 36, correctAnswer: "F" }, // übernehmen (Betrieb übernehmen)
          { id: 37, correctAnswer: "G" }, // darauf (hinweisen auf)
          { id: 38, correctAnswer: "H" }, // für (entscheiden für)
          { id: 39, correctAnswer: "I" }, // mitbringen
          { id: 40, correctAnswer: "J" }  // bleibt (unverzichtbar bleibt)
        ]
      }
    ]
  },

  // ==================== TEST SET 13 ====================
  {
    setId: 13,
    parts: [
      {
        part: "Teil 1",
        title: "Sprachbausteine (Multiple-Choice)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke passt.",
        passage: "Sehr geehrte Frau Sommer,\n\nich bedanke mich herzlich für die Einladung zum Vorstellungsgespräch für die Stelle als Vertriebsassistentin am kommenden Donnerstag. Leider muss ich Ihnen mitteilen, ___21___ ich den vorgeschlagenen Termin aus familiären Gründen nicht wahrnehmen ___22___.\n\nMein Sohn ist plötzlich erkrankt und benötigt in den nächsten Tagen meine persönliche Betreuung. Da mir die ausgeschriebene Position bei Ihnen jedoch außerordentlich am Herzen liegt, möchte ich mich ___23___ für diese Unannehmlichkeit entschuldigen. Ich wäre Ihnen sehr dankbar, ___24___ wir das Gespräch auf einen späteren Zeitpunkt verschieben könnten.\n\nAb dem darauffolgenden Montag stehe ich Ihnen zeitlich flexibel zur ___25___. Ein Termin am Dienstag oder Mittwochvormittag würde mir besonders gut ___26___.\n\nIch hoffe sehr ___27___ Ihr Verständnis für meine persönliche Situation und freue mich darauf, mich Ihnen bald persönlich ___28___.\n\nBitte teilen Sie mir kurz ___29___, ob ein Ausweichtermin möglich ist.\n\nMit freundlichen Grüßen\nJulia Neumann\n\n___30___: Keine.",
        questions: [
          { id: 21, label: "Lücke 21", options: [{ id: "a", text: "dass" }, { id: "b", text: "weil" }, { id: "c", text: "wenn" }], correctAnswer: "a" },
          { id: 22, label: "Lücke 22", options: [{ id: "a", text: "kann" }, { id: "b", text: "muss" }, { id: "c", text: "soll" }], correctAnswer: "a" },
          { id: 23, label: "Lücke 23", options: [{ id: "a", text: "vielmals" }, { id: "b", text: "oft" }, { id: "c", text: "sehr" }], correctAnswer: "a" },
          { id: 24, label: "Lücke 24", options: [{ id: "a", text: "wenn" }, { id: "b", text: "falls" }, { id: "c", text: "obwohl" }], correctAnswer: "a" },
          { id: 25, label: "Lücke 25", options: [{ id: "a", text: "Verfügung" }, { id: "b", text: "Aussicht" }, { id: "c", text: "Hand" }], correctAnswer: "a" },
          { id: 26, label: "Lücke 26", options: [{ id: "a", text: "passen" }, { id: "b", text: "passen zu" }, { id: "c", text: "passen an" }], correctAnswer: "a" },
          { id: 27, label: "Lücke 27", options: [{ id: "a", text: "auf" }, { id: "b", text: "über" }, { id: "c", text: "für" }], correctAnswer: "a" },
          { id: 28, label: "Lücke 28", options: [{ id: "a", text: "vorzustellen" }, { id: "b", text: "vorstellen" }, { id: "c", text: "vorgestellt" }], correctAnswer: "a" },
          { id: 29, label: "Lücke 29", options: [{ id: "a", text: "mit" }, { id: "b", text: "an" }, { id: "c", text: "ab" }], correctAnswer: "a" },
          { id: 30, label: "Lücke 30", options: [{ id: "a", text: "Anlagen" }, { id: "b", text: "Kopie" }, { id: "c", text: "Anhang" }], correctAnswer: "a" }
        ]
      },
      {
        part: "Teil 2",
        title: "Sprachbausteine (Wortschatz / Zuordnung)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort aus der Liste (A-O) in die jeweilige Lücke passt. Jedes Wort darf nur einmal verwendet werden. Fünf Wörter bleiben übrig.",
        passage: "Klimaschutz und Nachhaltigkeit sind längst im Alltag vieler Menschen angekommen. Immer mehr Verbraucher achten beim Einkaufen ___31___, möglichst plastikfrei und regional einzukaufen. Sogenannte Unverpackt-Läden bieten eine umweltfreundliche Alternative ___32___ herkömmlichen Supermarkt: Kunden bringen ihre eigenen Behälter mit und füllen Nudeln, Hülsenfrüchte oder Waschmittel nach Bedarf ___33___.\n\nDieser Verzicht auf Plastikverpackungen schont die Umwelt und trägt aktiv ___34___ bei, das weltweite Müllaufkommen zu verringern. Allerdings stehen viele Unverpackt-Geschäfte vor wirtschaftlichen Herausforderungen, ___35___ die Preise für Bio-Waren oft höher sind als bei Discountern.\n\nExperten betonen, dass ein Wandel im Konsumverhalten nur dann gelingt, ___36___ die Politik faire Rahmenbedingungen schafft. Dazu gehört beispielsweise eine stärkere Besteuerung von Einwegverpackungen, ___37___ nachhaltige Mehrwegsysteme finanziell attraktiver werden. Jeder Einzelne kann durch sein Kaufverhalten Einfluss ___38___ den Markt nehmen und einen wichtigen Beitrag zum Schutz der natürlichen Ressourcen ___39___.\n\nDie Zukunft unseres Planeten hängt maßgeblich ___40___ ab, wie verantwortungsvoll wir mit Rohstoffen umgehen.",
        options: [
          { id: "A", text: "darauf" },
          { id: "B", text: "zum" },
          { id: "C", text: "ab" },
          { id: "D", text: "dazu" },
          { id: "E", text: "da" },
          { id: "F", text: "wenn" },
          { id: "G", text: "damit" },
          { id: "H", text: "auf" },
          { id: "I", text: "leisten" },
          { id: "J", text: "davon" },
          { id: "K", text: "obwohl" },
          { id: "L", text: "über" },
          { id: "M", text: "machen" },
          { id: "N", text: "seit" },
          { id: "O", text: "zur" }
        ],
        items: [
          { id: 31, correctAnswer: "A" }, // darauf (achten darauf)
          { id: 32, correctAnswer: "B" }, // zum (Alternative zum)
          { id: 33, correctAnswer: "C" }, // ab (abfüllen)
          { id: 34, correctAnswer: "D" }, // dazu (beitragen zu)
          { id: 35, correctAnswer: "E" }, // da
          { id: 36, correctAnswer: "F" }, // wenn
          { id: 37, correctAnswer: "G" }, // damit
          { id: 38, correctAnswer: "H" }, // auf (Einfluss nehmen auf)
          { id: 39, correctAnswer: "I" }, // leisten (Beitrag leisten)
          { id: 40, correctAnswer: "J" }  // davon (abhängen von)
        ]
      }
    ]
  },

  // ==================== TEST SET 14 ====================
  {
    setId: 14,
    parts: [
      {
        part: "Teil 1",
        title: "Sprachbausteine (Multiple-Choice)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke passt.",
        passage: "Sehr geehrte Damen und Herren,\n\nich schreibe Ihnen, ___21___ ich mich über den Lieferservice Ihrer Online-Apotheke beschweren möchte. Am vergangenen Montag habe ich dringend benötigte Medikamente bei Ihnen bestellt, ___22___ laut Ihrer Liefergarantie innerhalb von 24 Stunden zugestellt werden sollten.\n\nLeider ist das Paket erst nach fünf Werktagen bei mir eingetroffen. ___23___ dieser massiven Verzögerung musste ich am Wochenende einen ärztlichen Notdienst aufsuchen, um ein Ersatzrezept zu ___24___. Dies war mit erheblichen Kosten und Unannehmlichkeiten verbunden.\n\nIch habe mich bereits schriftlich an Ihren Support gewandt, jedoch bisher keine Antwort ___25___. Ein solches Verhalten gegenüber schwerkranken Kunden halte ich für absolut ___26___.\n\nIch fordere Sie daher auf, mir die gezahlten Express-Versandkosten in Höhe von 12,90 Euro unverzüglich zu ___27___. Sollte der Betrag nicht innerhalb einer Woche auf meinem Bankkonto gutgeschrieben sein, werde ich mich an die Verbraucherschutzzentrale ___28___.\n\nIch erwarte Ihre zeitnahe schriftliche ___29___.\n\nMit freundlichen Grüßen\nThomas Brand\n\n___30___: Kopie der Bestellbestätigung.",
        questions: [
          { id: 21, label: "Lücke 21", options: [{ id: "a", text: "weil" }, { id: "b", text: "denn" }, { id: "c", text: "deshalb" }], correctAnswer: "a" },
          { id: 22, label: "Lücke 22", options: [{ id: "a", text: "die" }, { id: "b", text: "welche" }, { id: "c", text: "denen" }], correctAnswer: "a" },
          { id: 23, label: "Lücke 23", options: [{ id: "a", text: "Infolge" }, { id: "b", text: "Trotz" }, { id: "c", text: "Anstatt" }], correctAnswer: "a" },
          { id: 24, label: "Lücke 24", options: [{ id: "a", text: "erhalten" }, { id: "b", text: "erhalten zu" }, { id: "c", text: "erhaltend" }], correctAnswer: "a" },
          { id: 25, label: "Lücke 25", options: [{ id: "a", text: "erhalten" }, { id: "b", text: "erhielt" }, { id: "c", text: "erhaltend" }], correctAnswer: "a" },
          { id: 26, label: "Lücke 26", options: [{ id: "a", text: "inakzeptabel" }, { id: "b", text: "akzeptabel" }, { id: "c", text: "angemessen" }], correctAnswer: "a" },
          { id: 27, label: "Lücke 27", options: [{ id: "a", text: "erstatten" }, { id: "b", text: "erstattet" }, { id: "c", text: "erstattend" }], correctAnswer: "a" },
          { id: 28, label: "Lücke 28", options: [{ id: "a", text: "wenden" }, { id: "b", text: "wenden zu" }, { id: "c", text: "gewandt" }], correctAnswer: "a" },
          { id: 29, label: "Lücke 29", options: [{ id: "a", text: "Stellungnahme" }, { id: "b", text: "Meinung" }, { id: "c", text: "Ansicht" }], correctAnswer: "a" },
          { id: 30, label: "Lücke 30", options: [{ id: "a", text: "Anlagen" }, { id: "b", text: "Zusatz" }, { id: "c", text: "Kopie" }], correctAnswer: "a" }
        ]
      },
      {
        part: "Teil 2",
        title: "Sprachbausteine (Wortschatz / Zuordnung)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort aus der Liste (A-O) in die jeweilige Lücke passt. Jedes Wort darf nur einmal verwendet werden. Fünf Wörter bleiben übrig.",
        passage: "Liebe Sarah,\n\nich hoffe, dir und deiner Familie geht es gut. Ich schreibe dir heute, ___31___ ich deine Unterstützung bei der Planung eines großen Sommerfests in unserer Nachbarschaft brauche. Wir haben uns im Bewohnerbeirat ___32___ verständigt, das Fest am ersten Juli-Wochenende im Park zu veranstalten.\n\nDas Programm soll für Jung und Alt attraktiv ___33___. Neben einer Hüpfburg für Kinder planen wir Live-Musik und ein internationales Buffet. Ich habe mich bereits ___34___ die Genehmigung bei der Stadtverwaltung gekümmert, ___35___ bisher noch keine offizielle Bestätigung vorliegt.\n\nKönntest du dir vorstellen, die Organisation des Kuchenbuffets zu ___36___? Du hast so tolle Kontakte zu den Nachbarn und weißt genau, wer gerne backt. Wir würden uns sehr freuen, ___37___ du dabei wärst.\n\nBitte gib mir bis Ende der Woche Bescheid, ___38___ du mitmachen möchtest. Gerne können wir uns am Freitag auf einen Kaffee treffen, um alle Einzelheiten zu ___39___.\n\nVielen Dank ___40___ deine Hilfe!\n\nLiebe Grüße\nNina",
        options: [
          { id: "A", text: "weil" },
          { id: "B", text: "darauf" },
          { id: "C", text: "sein" },
          { id: "D", text: "um" },
          { id: "E", text: "obwohl" },
          { id: "F", text: "übernehmen" },
          { id: "G", text: "wenn" },
          { id: "H", text: "ob" },
          { id: "I", text: "besprechen" },
          { id: "J", text: "für" },
          { id: "K", text: "damit" },
          { id: "L", text: "seit" },
          { id: "M", text: "vor" },
          { id: "N", text: "übernommen" },
          { id: "O", text: "wäre" }
        ],
        items: [
          { id: 31, correctAnswer: "A" }, // weil
          { id: 32, correctAnswer: "B" }, // darauf (verständigen auf)
          { id: 33, correctAnswer: "C" }, // sein
          { id: 34, correctAnswer: "D" }, // um (kümmern um)
          { id: 35, correctAnswer: "E" }, // obwohl
          { id: 36, correctAnswer: "F" }, // übernehmen
          { id: 37, correctAnswer: "G" }, // wenn
          { id: 38, correctAnswer: "H" }, // ob
          { id: 39, correctAnswer: "I" }, // besprechen
          { id: 40, correctAnswer: "J" }  // für
        ]
      }
    ]
  },

  // ==================== TEST SET 15 ====================
  {
    setId: 15,
    parts: [
      {
        part: "Teil 1",
        title: "Sprachbausteine (Multiple-Choice)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke passt.",
        passage: "Sehr geehrte Damen und Herren,\n\nmit großem Interesse habe ich Ihre Stellenanzeige im Online-Portal der Bundesagentur für Arbeit gelesen. Da ich mein Studium des Bauingenieurwesens vor kurzem erfolgreich ___21___ habe, bewerbe ich mich hiermit um die ausgeschriebene Position als Tragwerksplaner.\n\n___22___ meines Studiums habe ich mich intensiv mit moderner Statik und nachhaltigen Holzbauweisen beschäftigt. Während eines sechsmonatigen Praktikums in einem renommierten Ingenieurbüro konnte ich bereits praktische Erfahrungen bei der Erstellung von Schal- und Bewehrungsplänen ___23___.\n\nIch verfüge über verhandlungssichere Deutsch- und Englischkenntnisse und arbeite mich schnell in neue CAD-Software ___24___. Teamarbeit und Verantwortungsbewusstsein zeichnen mich ___25___.\n\nIch bin ab dem 1. November einsatzbereit und freue mich über die Gelegenheit, mich Ihnen in einem persönlichen Vorstellungsgespräch ___26___.\n\nÜber Ihr Interesse an meiner Bewerbung ___27___ ich mich sehr freuen.\n\nMit freundlichen Grüßen\nDaniela Meyer\n\n___28___: Lebenslauf, Zeugnisse, Gutachten.\n___29___: Telefonisch erreichbar ab 17:00 Uhr.\n___30___: Gehaltsvorstellung: 48.000 â‚¬ p.a.",
        questions: [
          { id: 21, label: "Lücke 21", options: [{ id: "a", text: "abgeschlossen" }, { id: "b", text: "beschlossen" }, { id: "c", text: "entschlossen" }], correctAnswer: "a" },
          { id: 22, label: "Lücke 22", options: [{ id: "a", text: "Während" }, { id: "b", text: "Wegen" }, { id: "c", text: "Trotz" }], correctAnswer: "a" },
          { id: 23, label: "Lücke 23", options: [{ id: "a", text: "sammeln" }, { id: "b", text: "gesammelt" }, { id: "c", text: "sammelnd" }], correctAnswer: "a" },
          { id: 24, label: "Lücke 24", options: [{ id: "a", text: "ein" }, { id: "b", text: "an" }, { id: "c", text: "aus" }], correctAnswer: "a" },
          { id: 25, label: "Lücke 25", options: [{ id: "a", text: "aus" }, { id: "b", text: "ab" }, { id: "c", text: "vor" }], correctAnswer: "a" },
          { id: 26, label: "Lücke 26", options: [{ id: "a", text: "vorzustellen" }, { id: "b", text: "vorstellen" }, { id: "c", text: "vorgestellt" }], correctAnswer: "a" },
          { id: 27, label: "Lücke 27", options: [{ id: "a", text: "würde" }, { id: "b", text: "wäre" }, { id: "c", text: "hätte" }], correctAnswer: "a" },
          { id: 28, label: "Lücke 28", options: [{ id: "a", text: "Anlagen" }, { id: "b", text: "Kopie" }, { id: "c", text: "Anhang" }], correctAnswer: "a" },
          { id: 29, label: "Lücke 29", options: [{ id: "a", text: "Hinweis" }, { id: "b", text: "Zusatz" }, { id: "c", text: "Notiz" }], correctAnswer: "a" },
          { id: 30, label: "Lücke 30", options: [{ id: "a", text: "Angabe" }, { id: "b", text: "Wunsch" }, { id: "c", text: "Ziel" }], correctAnswer: "a" }
        ]
      },
      {
        part: "Teil 2",
        title: "Sprachbausteine (Wortschatz / Zuordnung)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort aus der Liste (A-O) in die jeweilige Lücke passt. Jedes Wort darf nur einmal verwendet werden. Fünf Wörter bleiben übrig.",
        passage: "Das Phänomen des lebenslangen Lernens hat in den letzten Jahren rasant an Bedeutung gewonnen. In einer sich schnell verändernden Arbeitswelt reicht das in Schule oder Ausbildung erworbene Wissen oft nicht mehr ___31___, um bis zur Rente im Beruf erfolgreich zu sein. Technologischer Fortschritt und Digitalisierung zwingen Beschäftigte dazu, sich kontinuierlich ___32___.\n\nViele Unternehmen haben diese Notwendigkeit erkannt und unterstützen ihre Mitarbeiter ___33___ durch die Finanzierung von Weiterbildungskursen. Arbeitnehmer schätzen diese Angebote, ___34___ sie dadurch ihre Karrierechancen spürbar verbessern können.\n\nAllerdings fällt es vielen Erwachsenen schwer, neben dem Berufsalltag noch Zeit und Energie für das Lernen ___35___. Psychologen empfehlen daher, Lerninhalte in kleine, überschaubare Einheiten zu ___36___. Wer sich realistische Ziele setzt und regelmäßig lernt, erzielt oft größere Erfolge als jemand, der vor Prüfungen versucht, den gesamten Stoff in wenigen Nächten ___37___.\n\nBildungsexperten fordern die Politik ___38___ auf, den Zugang zu Bildungsurlaub bundesweit zu vereinheitlichen. Nur wenn Weiterbildung für alle Schichten bezahlbar und zeitlich machbar bleibt, kann der Fachkräftemangel in Deutschland nachhaltig ___39___ werden.\n\nLernen bleibt somit der Schlüssel ___40___ beruflichen Zukunft.",
        options: [
          { id: "A", text: "aus" },
          { id: "B", text: "weiterzubilden" },
          { id: "C", text: "aktiv" },
          { id: "D", text: "weil" },
          { id: "E", text: "aufzubringen" },
          { id: "F", text: "unterteilen" },
          { id: "G", text: "nachzuholen" },
          { id: "H", text: "dazu" },
          { id: "I", text: "bekämpft" },
          { id: "J", text: "zur" },
          { id: "K", text: "obwohl" },
          { id: "L", text: "über" },
          { id: "M", text: "seit" },
          { id: "N", text: "gemacht" },
          { id: "O", text: "darauf" }
        ],
        items: [
          { id: 31, correctAnswer: "A" }, // aus (ausreichen)
          { id: 32, correctAnswer: "B" }, // weiterzubilden
          { id: 33, correctAnswer: "C" }, // aktiv
          { id: 34, correctAnswer: "D" }, // weil
          { id: 35, correctAnswer: "E" }, // aufzubringen
          { id: 36, correctAnswer: "F" }, // unterteilen
          { id: 37, correctAnswer: "G" }, // nachzuholen
          { id: 38, correctAnswer: "H" }, // dazu (auffordern zu)
          { id: 39, correctAnswer: "I" }, // bekämpft
          { id: 40, correctAnswer: "J" }  // zur (Schlüssel zur Zukunft)
        ]
      }
    ]
  },

  // ==================== TEST SET 16 ====================
  {
    setId: 16,
    parts: [
      {
        part: "Teil 1",
        title: "Sprachbausteine (Multiple-Choice)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort (a, b oder c) in die jeweilige Lücke passt.",
        passage: "Sehr geehrte Damen und Herren,\n\nich wende mich an Sie, ___21___ ich mich über den Ablauf meiner letzten Flugreise mit Ihrer Fluggesellschaft von Frankfurt nach Wien beschweren möchte. Mein Flug hatte ohne vorherige Ankündigung mehr als vier Stunden ___22___.\n\nVor Ort am Flughafen wurden die Fluggäste weder mit Getränken noch mit Mahlzeiten ___23___. Auch gab es keinerlei Informationen über den Grund der Verzögerung. Gemäß der EU-Fluggastrechte-Verordnung steht mir bei einer Verspätung dieser Dauer eine finanzielle Entschädigung von 250 Euro ___24___.\n\nIch bitte Sie daher, mir diesen Betrag innerhalb von 14 Tagen ___25___ mein unten angegebenes Bankkonto zu überweisen. Sollten Sie sich weigern, den Betrag zu zahlen, werde ich den Fall an die Schlichtungsstelle für den öffentlichen Personenverkehr ___26___.\n\nIch hoffe auf eine unkomplizierte und schnelle ___27___ meines Anliegens.\n\nFür Rückfragen stehe ich Ihnen jederzeit gerne ___28___ Verfügung.\n\nMit freundlichen Grüßen\nMaximilian Wolf\n\nIBAN: DE89 3704 0044 0532 0130 00\n___29___: Bordkarten und Buchungsbestätigung.\n___30___: Frist bis zum 30. September.",
        questions: [
          { id: 21, label: "Lücke 21", options: [{ id: "a", text: "weil" }, { id: "b", text: "denn" }, { id: "c", text: "deshalb" }], correctAnswer: "a" },
          { id: 22, label: "Lücke 22", options: [{ id: "a", text: "Verspätung" }, { id: "b", text: "Verzögerung" }, { id: "c", text: "Wartezeit" }], correctAnswer: "a" },
          { id: 23, label: "Lücke 23", options: [{ id: "a", text: "versorgt" }, { id: "b", text: "versorgend" }, { id: "c", text: "versorgen" }], correctAnswer: "a" },
          { id: 24, label: "Lücke 24", options: [{ id: "a", text: "zu" }, { id: "b", text: "an" }, { id: "c", text: "ab" }], correctAnswer: "a" },
          { id: 25, label: "Lücke 25", options: [{ id: "a", text: "auf" }, { id: "b", text: "an" }, { id: "c", text: "in" }], correctAnswer: "a" },
          { id: 26, label: "Lücke 26", options: [{ id: "a", text: "übergeben" }, { id: "b", text: "abgeben" }, { id: "c", text: "eingeben" }], correctAnswer: "a" },
          { id: 27, label: "Lücke 27", options: [{ id: "a", text: "Bearbeitung" }, { id: "b", text: "Entscheidung" }, { id: "c", text: "Korrektur" }], correctAnswer: "a" },
          { id: 28, label: "Lücke 28", options: [{ id: "a", text: "zur" }, { id: "b", text: "an" }, { id: "c", text: "in" }], correctAnswer: "a" },
          { id: 29, label: "Lücke 29", options: [{ id: "a", text: "Anlagen" }, { id: "b", text: "Kopie" }, { id: "c", text: "Zusatz" }], correctAnswer: "a" },
          { id: 30, label: "Lücke 30", options: [{ id: "a", text: "Hinweis" }, { id: "b", text: "Notiz" }, { id: "c", text: "Zusatz" }], correctAnswer: "a" }
        ]
      },
      {
        part: "Teil 2",
        title: "Sprachbausteine (Wortschatz / Zuordnung)",
        description: "Lesen Sie den folgenden Text und entscheiden Sie, welches Wort aus der Liste (A-O) in die jeweilige Lücke passt. Jedes Wort darf nur einmal verwendet werden. Fünf Wörter bleiben übrig.",
        passage: "Liebe Vereinsmitglieder,\n\nwir laden Sie herzlich zu unserer diesjährigen ordentlichen Mitgliederversammlung ___31___. Das Treffen findet am 18. November um 19:30 Uhr im Vereinsheim ___32___. \n\nAuf der Tagesordnung stehen wichtige Entscheidungen ___33___ die Zukunft unseres Vereins. Unter anderem werden wir über die Anschaffung neuer Trainingsgeräte abstimmen und einen neuen Kassenwart ___34___. Wir bitten Sie ___35___ zahlreiches Erscheinen, da wichtige Beschlüsse eine Zweidrittelmehrheit der anwesenden Mitglieder ___36___. \n\nSollten Sie an diesem Tag verhindert sein, können Sie Ihre Stimme schriftlich auf ein anderes Mitglied ___37___. Entsprechende Vollmachtsformulare finden Sie ___38___ unserer Webseite zum Download.\n\nWir freuen uns ___39___, Sie persönlich begrüßen zu dürfen, und laden im Anschluss an die Versammlung ___40___ einem kleinen Imbiss ein.\n\nMit sportlichen Grüßen\nDer Vorstand",
        options: [
          { id: "A", text: "ein" },
          { id: "B", text: "statt" },
          { id: "C", text: "über" },
          { id: "D", text: "wählen" },
          { id: "E", text: "um" },
          { id: "F", text: "erfordern" },
          { id: "G", text: "übertragen" },
          { id: "H", text: "auf" },
          { id: "I", text: "darauf" },
          { id: "J", text: "zu" },
          { id: "K", text: "weil" },
          { id: "L", text: "seit" },
          { id: "M", text: "vor" },
          { id: "N", text: "gewählt" },
          { id: "O", text: "damit" }
        ],
        items: [
          { id: 31, correctAnswer: "A" }, // ein (einladen)
          { id: 32, correctAnswer: "B" }, // statt (stattfinden)
          { id: 33, correctAnswer: "C" }, // über (Entscheidungen über)
          { id: 34, correctAnswer: "D" }, // wählen (Kassenwart wählen)
          { id: 35, correctAnswer: "E" }, // um (bitten um)
          { id: 36, correctAnswer: "F" }, // erfordern
          { id: 37, correctAnswer: "G" }, // übertragen (Stimme übertragen)
          { id: 38, correctAnswer: "H" }, // auf (auf unserer Webseite)
          { id: 39, correctAnswer: "I" }, // darauf (freuen auf)
          { id: 40, correctAnswer: "J" }  // zu (einladen zu)
        ]
      }
    ]
  }
];

