// Telc B2 Listening Comprehension (Hörverstehen) Database - Sets 17 to 22
(function() {
  window.listeningQuestionsSets = window.listeningQuestionsSets || [];

  const newListeningSets = [
    // ==================== TEST SET 17 ====================
    {
      setId: 17,
      parts: [
        {
          part: "Teil 1",
          title: "Globalverstehen (Kurze Durchsagen)",
          description: "Sie hören fünf kurze Durchsagen. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 41-45, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
          items: [
            {
              id: 41,
              topic: "Durchsage am Hauptbahnhof",
              audioScript: "Achtung an Gleis 4: Der Intercity nach Dresden, planmäßige Abfahrt um 15 Uhr 40, hat heute voraussichtlich 25 Minuten Verspätung. Grund dafür ist eine behördliche Sperrung auf der Zulaufstrecke. Wir bitten alle Reisenden um Verständnis.",
              statement: "Der Intercity nach Dresden fährt heute mit einer Verspätung von etwa 25 Minuten ab.",
              correctAnswer: "Richtig"
            },
            {
              id: 42,
              topic: "Durchsage im Supermarkt",
              audioScript: "Liebe Kundinnen und Kunden: An unserer Frischetheke erhalten Sie heute ab 16 Uhr einen Sonderrabatt von 30 Prozent auf alle frischen Fischspezialitäten und Grillmarinaden. Greifen Sie zu, solange der Vorrat reicht.",
              statement: "Der Sonderrabatt an der Frischetheke gilt nur für vorverpackte Tiefkühlwaren.",
              correctAnswer: "Falsch"
            },
            {
              id: 43,
              topic: "Durchsage am Flughafen",
              audioScript: "Eine wichtige Durchsage: Im Wartebereich am Gate C15 wurde ein schwarzer Lederrucksack mit Reisedokumenten gefunden. Der Eigentümer wird gebeten, sich umgehend bei der Bundespolizei an Schalter 3 zu melden.",
              statement: "Ein gefundener Rucksack kann bei der Bundespolizei abgeholt werden.",
              correctAnswer: "Richtig"
            },
            {
              id: 44,
              topic: "Durchsage in der U-Bahn-Station",
              audioScript: "Achtung Fahrgäste: Wegen technischer Wartungsarbeiten ist der Fahrstuhl zur Bahnsteigebene der Linie U2 heute bis Betriebsschluss außer Betrieb. Rollstuhlfahrer nutzen bitte den Ausgang über die Rampe am Südeingang.",
              statement: "Der Aufzug zur U2 steht den Fahrgästen heute uneingeschränkt zur Verfügung.",
              correctAnswer: "Falsch"
            },
            {
              id: 45,
              topic: "Durchsage im Schauspielhaus",
              audioScript: "Verehrte Theatergäste, der zweite Gong hat soeben geschlagen. Bitte nehmen Sie Ihre Plätze im Parkett und auf den Rängen ein. Die Vorstellung beginnt in genau zwei Minuten.",
              statement: "Die Zuschauer werden aufgefordert, ihre Plätze im Theatersaal einzunehmen.",
              correctAnswer: "Richtig"
            }
          ]
        },
        {
          part: "Teil 2",
          title: "Detailverstehen (Interview / Bericht)",
          description: "Sie hören ein Gespräch/Interview. Sie hören den Text einmal. Entscheiden Sie bei den Aufgaben 46-55, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
          topic: "Interview mit einem Ernährungswissenschaftler über pflanzliche Proteine",
          audioScript: "Moderator: Herzlich willkommen zu unserer Gesundheitssendung. Heute im Studio: Dr. Thomas Sommer, Ernährungswissenschaftler am Institut für Sporternährung in Köln. Herr Dr. Sommer, immer mehr Freizeitsportler verzichten ganz oder teilweise auf Fleisch und greifen zu pflanzlichen Proteinquellen wie Erbsen, Lupinen oder Soja. Kann man mit rein pflanzlicher Nahrung genauso effektiv Muskeln aufbauen wie mit tierischen Produkten?\n\nDr. Sommer: Guten Tag. Die klare Antwort lautet: Ja, absolut. Jahrelang hielt sich der Mythos, dass tierisches Eiweiß von Natur aus überlegen sei. Zwar besitzen Fleisch und Eier eine etwas höhere biologische Wertigkeit, aber durch die geschickte Kombination verschiedener Pflanzenproteine – beispielsweise Hülsenfrüchte mit Getreide oder Nüssen – erreicht man ein vollständiges Aminosäureprofil, das dem von Fleisch in nichts nachsteht.\n\nModerator: Viele Sportler greifen täglich zu teuren Proteinpulvern und Riegeln. Sind diese Nahrungsergänzungsmittel wirklich notwendig?\n\nDr. Sommer: Für 95 Prozent der Breitensportler sind solche Präparate reine Geldverschwendung. Ein Erwachsener, der drei- bis viermal pro Woche joggt oder ins Fitnessstudio geht, kann seinen Eiweißbedarf problemlos über eine ausgewogene Alltagskost mit Linsen, Tofu, Haferflocken und Nüssen decken. Zudem liefern natürliche Lebensmittel wichtige Ballaststoffe, Vitamine und sekundäre Pflanzenstoffe, die in isolierten Pulvern komplett fehlen.\n\nModerator: Gibt es Nährstoffe, auf die Veganer besonders achten müssen?\n\nDr. Sommer: Ja, wer sich rein pflanzlich ernährt, muss Vitamin B12 dauerhaft über Nahrungsergänzungsmittel zuführen, da dieses Vitamin fast ausschließlich in tierischen Produkten vorkommt. Auch Eisen, Zink und Omega-3-Fettsäuren sollte man im Blick behalten, wobei diese bei bewusster Lebensmittelauswahl gut pflanzlich abgedeckt werden können.",
          items: [
            { id: 46, statement: "Dr. Thomas Sommer forscht im Bereich der Sporternährung.", correctAnswer: "Richtig" },
            { id: 47, statement: "Mit rein pflanzlicher Kost ist ein effektiver Muskelaufbau unmöglich.", correctAnswer: "Falsch" },
            { id: 48, statement: "Durch die Kombination verschiedener pflanzlicher Lebensmittel entsteht ein vollwertiges Eiweißprofil.", correctAnswer: "Richtig" },
            { id: 49, statement: "Alle Freizeitsportler müssen täglich Proteinpulver zu sich nehmen.", correctAnswer: "Falsch" },
            { id: 50, statement: "Natürliche Lebensmittel enthalten wertvolle Ballaststoffe und Vitamine.", correctAnswer: "Richtig" },
            { id: 51, statement: "Linsen und Haferflocken sind ungeeignet, um den Eiweißbedarf zu decken.", correctAnswer: "Falsch" },
            { id: 52, statement: "Veganer sollten Vitamin B12 regelmäßig supplementieren.", correctAnswer: "Richtig" },
            { id: 53, statement: "Vitamin B12 ist in großen Mengen in allen Getreidearten enthalten.", correctAnswer: "Falsch" },
            { id: 54, statement: "Dr. Sommer rät von einer bewussten Lebensmittelauswahl ab.", correctAnswer: "Falsch" },
            { id: 55, statement: "Pflanzliche Ernährung kann den Nährstoffbedarf bei guter Planung decken.", correctAnswer: "Richtig" }
          ]
        },
        {
          part: "Teil 3",
          title: "Selektives Verstehen (Gespräche / Alltägliche Situationen)",
          description: "Sie hören fünf kurze Gespräche. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 56-60, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
          items: [
            {
              id: 56,
              topic: "Gespräch im Fotofachgeschäft",
              audioScript: "Kunde: Ich möchte gerne dieses Foto auf Leinwand im Format 60 mal 90 Zentimeter drucken lassen.\nVerkäufer: Sehr gerne! Die Auflösung Ihrer Bilddatei auf dem USB-Stick ist hervorragend. Der Leinwanddruck ist in drei Werktagen fertig und kostet inklusive Holzkeilrahmen 39 Euro.",
              statement: "Das Bild auf Leinwand kann nach drei Werktagen abgeholt werden.",
              correctAnswer: "Richtig"
            },
            {
              id: 57,
              topic: "Gespräch mit dem Handwerker",
              audioScript: "Kundin: Können Sie mir sagen, warum auf der Rechnung 50 Euro mehr stehen als im Kostenvoranschlag?\nElektriker: Wir mussten zusätzlich ein altes Stromkabel im Flur austauschen, das brüchig war. Ich habe das im Montagebericht vermerkt und ziehe Ihnen als Kulanz die Anfahrtskosten ab.",
              statement: "Der Handwerker erläutert die Ursache für die höheren Kosten auf der Rechnung.",
              correctAnswer: "Richtig"
            },
            {
              id: 58,
              topic: "Gespräch in der Stadtbibliothek",
              audioScript: "Leser: Ich würde gerne diese drei Hörbücher für meinen Urlaub für vier Wochen ausleihen.\nBibliothekarin: Hörbücher und DVDs haben bei uns eine verkürzte Leihfrist von zwei Wochen. Sie können die Frist aber vor Ablauf bequem online um weitere zwei Wochen verlängern.",
              statement: "Hörbücher können von Beginn an direkt für vier Wochen ausgeliehen werden.",
              correctAnswer: "Falsch"
            },
            {
              id: 59,
              topic: "Gespräch bei der Autovermietung",
              audioScript: "Mieter: Ist im Mietpreis ein zweiter Fahrer bereits inbegriffen?\nMitarbeiter: Für einen zusätzlichen Fahrer berechnen wir eine Pauschale von 5 Euro pro Miettag. Der Zusatzfahrer muss bei der Abholung seinen Führerschein im Original vorlegen.",
              statement: "Ein zweiter Fahrer ist im Grundpreis der Autovermietung kostenlos enthalten.",
              correctAnswer: "Falsch"
            },
            {
              id: 60,
              topic: "Gespräch an der Hotelrezeption",
              audioScript: "Gast: Bis wann müssen wir morgen früh aus dem Zimmer auschecken?\nRezeptionist: Der reguläre Check-out ist bis 11 Uhr. Gegen einen Aufpreis von 20 Euro bieten wir aber auch einen Late-Check-out bis 14 Uhr inklusive Nutzung des Spa-Bereichs an.",
              statement: "Das Hotelzimmer muss regulär bis 11 Uhr vormittags verlassen werden.",
              correctAnswer: "Richtig"
            }
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
          title: "Globalverstehen (Kurze Durchsagen)",
          description: "Sie hören fünf kurze Durchsagen. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 41-45, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
          items: [
            {
              id: 41,
              topic: "Durchsage im Kunstmuseum",
              audioScript: "Werte Museumsgäste: In zehn Minuten beginnt im Foyer die kostenlose Führung durch unsere Sonderausstellung zeitgenössischer Skulpturen. Unser Kurator Herr Dr. Wagner führt Sie durch die Galerie.",
              statement: "Die Sonderführung durch die Skulpturenausstellung ist für Besucher kostenfrei.",
              correctAnswer: "Richtig"
            },
            {
              id: 42,
              topic: "Verkehrsfunk im Radio",
              audioScript: "Achtung Autofahrer auf der A7 Kassel Richtung Hannover: Zwischen Hildesheim und Laatzen gibt es nach einem LKW-Unfall aktuell 6 Kilometer Stau. Bitte bilden Sie eine Rettungsgasse und umfahren Sie das Gebiet ab der Ausfahrt Derneburg.",
              statement: "Auf der A7 wird wegen eines Unfalls vor Stau gewarnt.",
              correctAnswer: "Richtig"
            },
            {
              id: 43,
              topic: "Wetterbericht im Radio",
              audioScript: "Der Deutsche Wetterdienst warnt für den heutigen Abend vor schweren Sturmböen im gesamten Küstenbereich der Nordsee. Bitte sichern Sie lose Gegenstände und meiden Sie Strandpromenaden.",
              statement: "An der Nordseeküste wird vor windstillem, sonnigem Wetter gewarnt.",
              correctAnswer: "Falsch"
            },
            {
              id: 44,
              topic: "Durchsage im Baumarkt",
              audioScript: "Kundeninformation im Holzzuschnitt: Aus personellen Gründen schließt der Holzzuschnitt heute bereits um 18 Uhr. Zuschnittaufträge nach 18 Uhr können erst am folgenden Werktag bearbeitet werden.",
              statement: "Holzzuschnitte können heute bis 22 Uhr durchgeführt werden.",
              correctAnswer: "Falsch"
            },
            {
              id: 45,
              topic: "Durchsage im Bürgerbüro",
              audioScript: "Sehr geehrte Bürgerinnen und Bürger: Wegen einer internen Schulung bleibt das Bürgerbüro am kommenden Mittwochnachmittag für den Publikumsverkehr geschlossen. Vormittags sind wir von 8 bis 12 Uhr für Sie da.",
              statement: "Das Bürgerbüro hat am kommenden Mittwochnachmittag geöffnet.",
              correctAnswer: "Falsch"
            }
          ]
        },
        {
          part: "Teil 2",
          title: "Detailverstehen (Interview / Bericht)",
          description: "Sie hören ein Gespräch/Interview. Sie hören den Text einmal. Entscheiden Sie bei den Aufgaben 46-55, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
          topic: "Interview mit einer Architektin über Holzhochhäuser",
          audioScript: "Moderator: Willkommen zu unserem Architekturmagazin. Heute zu Gast: Dipl.-Ing. Katrin Lindner, Expertin für nachhaltiges Bauen. Frau Lindner, Holz galt lange Zeit als Baustoff für kleine Landhäuser. In Metropolen wie Hamburg, Wien oder Berlin entstehen nun aber Hochhäuser aus Holz mit über zwanzig Stockwerken. Ist Holz tatsächlich die Zukunft des Bauens?\n\nKatrin Lindner: Guten Abend. Holz erlebt eine echte Revolution. Der Bausektor ist weltweit für fast 40 Prozent der CO2-Emissionen verantwortlich, vor allem durch die energieintensive Herstellung von Beton und Stahl. Ein Baum hingegen entzieht der Atmosphäre während seines Wachstums CO2 und speichert den Kohlenstoff dauerhaft im Holz. Wenn wir mit Holz bauen, schaffen wir quasi riesige Kohlenstoffspeicher mitten in unseren Städten.\n\nModerator: Doch viele Bürger haben instinktiv Angst vor Brandgefahr. Wie sicher ist ein Holzhochhaus im Brandfall?\n\nKatrin Lindner: Diese Sorge ist verständlich, aber unbegründet. Massives Brettsperrholz brennt im Ernstfall extrem kontrolliert und langsam ab. An der Oberfläche bildet sich eine Verkohlungsschicht, die das Innere des Holzes vor Sauerstoff und Hitze schützt. Die Tragfähigkeit bleibt bei einem Brand länger stabil als bei ungeschütztem Stahl, der sich bei hohen Temperaturen schlagartig verbiegt.\n\nModerator: Gibt es denn überhaupt genug Holz in unseren Wäldern für diesen Bauboom?\n\nKatrin Lindner: In Deutschland und Mitteleuropa gilt seit Jahrhunderten das Prinzip der nachhaltigen Forstwirtschaft: Es wird nie mehr Holz geschlagen als gleichzeitig nachwächst. Wichtig ist, dass wir regionales Holz aus zertifizierten Wäldern nutzen und Gebäude so konstruieren, dass alle Bauteile nach Jahrzehnten rückgebaut und wiederverwendet werden können.",
          items: [
            { id: 46, statement: "Katrin Lindner ist Architektin und Expertin für ökologisches Bauen.", correctAnswer: "Richtig" },
            { id: 47, statement: "Die traditionelle Baubranche verursacht weltweit kaum Treibhausgase.", correctAnswer: "Falsch" },
            { id: 48, statement: "Holz speichert Kohlenstoff und entlastet so das Klima.", correctAnswer: "Richtig" },
            { id: 49, statement: "Holzhochhäuser gelten im Brandfall als extrem unberechenbar und gefährlich.", correctAnswer: "Falsch" },
            { id: 50, statement: "Massivholz behält bei einem Feuer seine Tragfähigkeit länger als Stahl.", correctAnswer: "Richtig" },
            { id: 51, statement: "Die Verkohlungsschicht schützt das Innere des Holzes vor der Hitze.", correctAnswer: "Richtig" },
            { id: 52, statement: "In Mitteleuropa wird mehr Holz gerodet als nachwachsen kann.", correctAnswer: "Falsch" },
            { id: 53, statement: "Frau Lindner fordert die Verwendung von zertifiziertem Holz aus der Region.", correctAnswer: "Richtig" },
            { id: 54, statement: "Bauteile aus Holz können nach dem Rückbau nicht recycelt werden.", correctAnswer: "Falsch" },
            { id: 55, statement: "Moderne Holzhochhäuser werden heute in vielen Großstädten errichtet.", correctAnswer: "Richtig" }
          ]
        },
        {
          part: "Teil 3",
          title: "Selektives Verstehen (Gespräche / Alltägliche Situationen)",
          description: "Sie hören fünf kurze Gespräche. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 56-60, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
          items: [
            {
              id: 56,
              topic: "Gespräch in der Fahrradwerkstatt",
              audioScript: "Kunde: Hallo, die Gangschaltung an meinem Mountainbike schaltet nicht mehr sauber in den dritten Gang.\nMechaniker: Das liegt meist an einem gedehnten Schaltzug. Wir stellen die Schaltung neu ein und ölen die Kette. Das kostet 25 Euro und Sie können das Rad heute um 17 Uhr wieder abholen.",
              statement: "Das Fahrrad kann am selben Tag um 17 Uhr repariert abgeholt werden.",
              correctAnswer: "Richtig"
            },
            {
              id: 57,
              topic: "Gespräch in der Tanzschule",
              audioScript: "Interessent: Wir suchen einen Salsa-Kurs für Anfänger am Wochenende.\nTanzlehrerin: Unser neuer Grundkurs startet am Sonntag um 18 Uhr. Der Kurs umfasst sechs Termine à 90 Minuten. Die Kursgebühr beträgt 75 Euro pro Person.",
              statement: "Der Salsa-Anfängerkurs findet sonntags um 18 Uhr statt.",
              correctAnswer: "Richtig"
            },
            {
              id: 58,
              topic: "Gespräch in der Arztpraxis",
              audioScript: "Patient: Ich brauche eine Krankschreibung für meinen Arbeitgeber wegen einer starken Grippe.\nArzthelferin: Der Arzt hat Sie untersucht und schreibt Sie bis einschließlich Freitag krank. Ich drucke Ihnen die Arbeitsunfähigkeitsbescheinigung sofort aus.",
              statement: "Der Patient wird für die laufende Woche bis Freitag krankgeschrieben.",
              correctAnswer: "Richtig"
            },
            {
              id: 59,
              topic: "Gespräch beim Optiker",
              audioScript: "Kundin: Können Sie überprüfen, ob sich meine Sehstärke verändert hat?\nOptikerin: Sehr gerne. Wir führen einen kostenlosen Sehtest durch und messen die genauen Dioptrienwerte. Das dauert etwa 15 Minuten.",
              statement: "Der Sehtest beim Optiker ist mit hohen Kosten verbunden.",
              correctAnswer: "Falsch"
            },
            {
              id: 60,
              topic: "Gespräch im Fitnessstudio",
              audioScript: "Sportler: Kann ich meine Mitgliedschaft während meines dreimonatigen Praktikums im Ausland pausieren?\nStudioleiter: Ja, gegen Vorlage des Praktikumsvertrags können Sie den Vertrag für bis zu drei Monate beitragsfrei ruhen lassen.",
              statement: "Das Fitnessstudio erlaubt eine beitragsfreie Ruhezeit während des Auslandspraktikums.",
              correctAnswer: "Richtig"
            }
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
          title: "Globalverstehen (Kurze Durchsagen)",
          description: "Sie hören fünf kurze Durchsagen. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 41-45, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
          items: [
            {
              id: 41,
              topic: "Durchsage im Regionalzug",
              audioScript: "Sehr geehrte Fahrgäste, wegen einer unvorhergesehenen Weichenstörung endet dieser Zug heute außerplanmäßig in Fulda. Fahrgäste nach Würzburg nutzen bitte den ICE 783 auf Gleis 3.",
              statement: "Der Regionalzug fährt heute nicht bis zu seinem regulären Endziel weiter.",
              correctAnswer: "Richtig"
            },
            {
              id: 42,
              topic: "Durchsage an der Universität",
              audioScript: "Achtung Studierende: Während der Klausurenphase im Juli erweitert die Universitätsbibliothek ihre Öffnungszeiten. Die Lesesäle bleiben montags bis samstags bis 24 Uhr geöffnet.",
              statement: "Die Universitätsbibliothek schließt im Juli bereits um 16 Uhr.",
              correctAnswer: "Falsch"
            },
            {
              id: 43,
              topic: "Durchsage im Freizeitpark",
              audioScript: "Aufgrund eines herannahenden Gewitters müssen die Außenachterbahnen vorübergehend stillgelegt werden. Unsere Indoor-Shows und Restaurants stehen Ihnen wie gewohnt zur Verfügung.",
              statement: "Die Achterbahnen im Freien werden wegen eines Gewitters vorübergehend gestoppt.",
              correctAnswer: "Richtig"
            },
            {
              id: 44,
              topic: "Durchsage im Einkaufszentrum",
              audioScript: "Liebe Kunden: Die ersten zwei Stunden Parken im Parkhaus sind für Kunden unseres Einkaufszentrums bei einem Einkaufswert ab 20 Euro komplett kostenfrei. Bitte entwerten Sie Ihr Ticket an der Information.",
              statement: "Kunden können unter bestimmten Bedingungen zwei Stunden kostenlos parken.",
              correctAnswer: "Richtig"
            },
            {
              id: 45,
              topic: "Durchsage im Hallenbad",
              audioScript: "Achtung Badegäste: Wegen eines Schwimmwettkampfs ist das 50-Meter-Sportbecken heute ab 14 Uhr für den allgemeinen Badebetrieb gesperrt.",
              statement: "Das Sportbecken ist heute den ganzen Tag für alle Schwimmer geöffnet.",
              correctAnswer: "Falsch"
            }
          ]
        },
        {
          part: "Teil 2",
          title: "Detailverstehen (Interview / Bericht)",
          description: "Sie hören ein Gespräch/Interview. Sie hören den Text einmal. Entscheiden Sie bei den Aufgaben 46-55, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
          topic: "Interview mit einem Psychologen über Einsamkeit im Alter",
          audioScript: "Moderator: Herzlich willkommen zu unserer Sendung 'Gesellschaft heute'. Bei uns zu Gast: Prof. Dr. Ulrich Meyer, Alterspsychologe an der Universität Leipzig. Herr Professor Meyer, Einsamkeit wird von Medizinern mittlerweile als ernsthafte Volkskrankheit eingestuft. Wie viele ältere Menschen in Deutschland sind davon betroffen?\n\nProf. Meyer: Guten Tag. Untersuchungen zeigen, dass sich fast jeder vierte Mensch über 75 Jahren häufig oder ständig einsam fühlt. Der Verlust des Partners, das Nachlassen der Mobilität und das Fehlen familiärer Kontakte führen oft zu einem schleichenden Rückzug aus dem gesellschaftlichen Leben. Chronische Einsamkeit ist dabei genauso schädlich für die Gesundheit wie starkes Rauchen oder Fettleibigkeit, da sie das Risiko für Herzinfarkte, Depressionen und Demenz massiv erhöht.\n\nModerator: Welche Gegenmaßnahmen und Projekte erweisen sich in der Praxis als besonders wirksam?\n\nProf. Meyer: Herausragende Erfolge sehen wir bei sogenannten Mehrgenerationen-Projekten. Wenn Studenten in Seniorenwohnheimen gegen günstige Miete einziehen und dafür Zeit mit den Senioren verbringen – etwa beim gemeinsamen Kochen, Vorlesen oder bei Spaziergängen –, profitieren beide Seiten enorm. Ältere Menschen fühlen sich wieder gebraucht und wertgeschätzt, während junge Menschen von den Lebenserfahrungen der Älteren lernen.\n\nModerator: Was kann die Nachbarschaft im Alltag tun?\n\nProf. Meyer: Es sind oft die kleinen Gesten: Ein kurzes Gespräch im Hausflur, das Angebot, einen Einkauf mitzubringen, oder eine Einladung zum Kaffee. Niemand sollte sich scheuen, aktiv auf alleinlebende Nachbarn zuzugehen.",
          items: [
            { id: 46, statement: "Prof. Dr. Ulrich Meyer forscht über die Psychologie des Alterns.", correctAnswer: "Richtig" },
            { id: 47, statement: "Nur sehr wenige Menschen über 75 Jahren leiden unter Einsamkeit.", correctAnswer: "Falsch" },
            { id: 48, statement: "Chronische Einsamkeit kann schwerwiegende körperliche Krankheiten begünstigen.", correctAnswer: "Richtig" },
            { id: 49, statement: "Einsamkeit hat laut Experten keinerlei Einfluss auf das Demenzrisiko.", correctAnswer: "Falsch" },
            { id: 50, statement: "In Mehrgenerationenhäusern wohnen Studenten und Senioren unter einem Dach.", correctAnswer: "Richtig" },
            { id: 51, statement: "Studenten zahlen in diesen Wohnprojekten extrem hohe Mieten.", correctAnswer: "Falsch" },
            { id: 52, statement: "Senioren profitieren vom sozialen Austausch mit jüngeren Generationen.", correctAnswer: "Richtig" },
            { id: 53, statement: "Prof. Meyer rät Nachbarn davon ab, älteren Menschen Hilfe anzubieten.", correctAnswer: "Falsch" },
            { id: 54, statement: "Kleine alltägliche Aufmerksamkeiten können Einsamkeit im Wohnumfeld lindern.", correctAnswer: "Richtig" },
            { id: 55, statement: "Prof. Meyer hält Einsamkeit für ein rein medizinisches, nicht soziales Problem.", correctAnswer: "Falsch" }
          ]
        },
        {
          part: "Teil 3",
          title: "Selektives Verstehen (Gespräche / Alltägliche Situationen)",
          description: "Sie hören fünf kurze Gespräche. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 56-60, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
          items: [
            {
              id: 56,
              topic: "Gespräch über Umzugshilfe",
              audioScript: "Freund 1: Kannst du mir am Samstag beim Tragen meiner Waschmaschine helfen?\nFreund 2: Klar, ab 10 Uhr habe ich Zeit. Ich bringe auch noch eine Sackkarre mit, damit wir das schwere Gerät nicht über die Treppe schleppen müssen.",
              statement: "Der Freund sagt seine Hilfe für Samstagvormittag mit einer Sackkarre zu.",
              correctAnswer: "Richtig"
            },
            {
              id: 57,
              topic: "Gespräch beim Kochkurs",
              audioScript: "Teilnehmerin: Benötigen wir für den Kurs eigene Messer oder Schürzen?\nKochdozent: Nein, alle Utensilien, Schürzen und Zutaten werden von der Kochschule gestellt. Sie müssen lediglich Appetit und gute Laune mitbringen.",
              statement: "Die Teilnehmer müssen Kochmesser und Schürzen von zu Hause mitbringen.",
              correctAnswer: "Falsch"
            },
            {
              id: 58,
              topic: "Gespräch in der Tierarztpraxis",
              audioScript: "Hundehalterin: Mein Hund benötigt seine jährliche Tollwut- und Kombi-Impfung.\nTierarzt: Wir untersuchen das Tier zuerst gründlich. Wenn er fieberfrei ist, bekommt er die Impfung sofort und wir tragen alles in den EU-Heimtierausweis ein.",
              statement: "Der Tierarzt impft den Hund nach einer kurzen Untersuchung und trägt es in den Pass ein.",
              correctAnswer: "Richtig"
            },
            {
              id: 59,
              topic: "Gespräch im Reparaturcafé",
              audioScript: "Besucher: Mein Toaster wirft das Brot nicht mehr automatisch aus.\nHelfer: Lassen Sie uns den Mechanismus mal aufschrauben. Oft ist nur eine Feder verklemmt. Wir reparieren das gemeinsam und testen es gleich aus.",
              statement: "Im Reparaturcafé reparieren Helfer und Besucher defekte Geräte gemeinsam.",
              correctAnswer: "Richtig"
            },
            {
              id: 60,
              topic: "Gespräch bei der Rechtsberatung",
              audioScript: "Mieter: Mein Vermieter weigert sich, die defekte Heizung im Winter zu reparieren.\nAnwalt: Sie sollten dem Vermieter eine schriftliche Mängelrüge mit einer Frist von 7 Tagen setzen und eine Mietminderung androhen.",
              statement: "Der Anwalt empfiehlt dem Mieter, dem Vermieter eine schriftliche Frist zu setzen.",
              correctAnswer: "Richtig"
            }
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
          title: "Globalverstehen (Kurze Durchsagen)",
          description: "Sie hören fünf kurze Durchsagen. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 41-45, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
          items: [
            {
              id: 41,
              topic: "Durchsage am Flughafen",
              audioScript: "Achtung Fluggäste des Fluges LH 204 aus Madrid: Das Gepäck wird auf Gepäckband 7 ausgegeben. Wir bitten um Ihre Geduld.",
              statement: "Die Koffer des Fluges aus Madrid kommen auf Gepäckband 7 an.",
              correctAnswer: "Richtig"
            },
            {
              id: 42,
              topic: "Durchsage auf der Bildungsmesse",
              audioScript: "Sehr geehrte Messebesucher: In Halle 4 beginnt in wenigen Minuten der Vortrag zum Thema 'Duales Studium in der Praxis'. Der Eintritt ist mit Messeausweis frei.",
              statement: "Der Vortrag über das duale Studium findet in Halle 4 statt.",
              correctAnswer: "Richtig"
            },
            {
              id: 43,
              topic: "Durchsage in der Straßenbahn",
              audioScript: "Fahrgäste bitte beachten: Wegen Bauarbeiten an den Schienen ist zwischen Hauptbahnhof und Südfriedhof ein Schienenersatzverkehr mit Bussen eingerichtet.",
              statement: "Die Straßenbahnen fahren auf der gesamten Strecke ohne Einschränkungen.",
              correctAnswer: "Falsch"
            },
            {
              id: 44,
              topic: "Durchsage im Tierpark",
              audioScript: "Liebe Besucher: Die kommentierte Fütterung der Pinguine beginnt um 15 Uhr am großen Wasserbecken. Unsere Tierpfleger beantworten gerne Ihre Fragen.",
              statement: "Die Pinguinfütterung mit Tierpflegern startet um 15 Uhr.",
              correctAnswer: "Richtig"
            },
            {
              id: 45,
              topic: "Durchsage im Konzertsaal",
              audioScript: "Wir weisen alle Gäste darauf hin, dass die Garderobe im Untergeschoss kostenlos genutzt werden kann. Das Mitnehmen von Rucksäcken in den Saal ist untersagt.",
              statement: "Große Rucksäcke dürfen mit in den Konzertsaal genommen werden.",
              correctAnswer: "Falsch"
            }
          ]
        },
        {
          part: "Teil 2",
          title: "Detailverstehen (Interview / Bericht)",
          description: "Sie hören ein Gespräch/Interview. Sie hören den Text einmal. Entscheiden Sie bei den Aufgaben 46-55, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
          topic: "Interview mit einer Soziologin über flexible Arbeitszeitmodelle",
          audioScript: "Moderator: Willkommen zu unserem Wirtschaftsmagazin. Heute zu Gast: Dr. Sabine Keller, Arbeitssoziologin am Institut für Arbeitsmarkt- und Berufsforschung. Frau Dr. Keller, hybrides Arbeiten – also die Mischung aus Präsenz im Büro und mobilem Arbeiten von zu Hause – ist für Millionen Beschäftigte zur Normalität geworden. Welche Chancen und Risiken sehen Sie in dieser Entwicklung?\n\nDr. Keller: Guten Abend. Die Vorteile liegen auf der Hand: Arbeitnehmer sparen wertvolle Pendelzeit, haben mehr Freiraum für Familie und Freizeit und berichten oft von einer höheren Produktivität bei konzentrierten Aufgaben. Allerdings birgt die Flexibilität auch erhebliche Gefahren: Die Grenze zwischen Arbeit und Freizeit verschwimmt zusehends. Viele Beschäftigte neigen dazu, auch am späten Abend oder am Wochenende dienstliche E-Mails zu lesen und abzuschalten fällt vielen schwer.\n\nModerator: Welche Rolle spielt dabei die Unternehmenskultur?\n\nDr. Keller: Eine entscheidende! Arbeitgeber müssen klare Regeln für die digitale Nichterreichbarkeit vereinbaren. Führungskräfte dürfen nicht erwarten, dass Mitarbeiter außerhalb der regulären Arbeitszeit sofort reagieren. Wichtig ist auch, dass Tage im Büro nicht zur reinen Pflichterfüllung verkommen, sondern gezielt für Team-Meetings, kreatives Brainstorming und informellen Austausch an der Kaffeemaschine genutzt werden.\n\nModerator: Ist das Homeoffice für alle Berufsgruppen gleichermaßen geeignet?\n\nDr. Keller: Nein, keineswegs. Im Handwerk, in der Pflege, im Einzelhandel oder in der Produktion ist Präsenz vor Ort zwingend erforderlich. Hier müssen Arbeitgeber andere Modelle wie flexible Schichtpläne oder Arbeitszeitkonten anbieten, um attraktiv zu bleiben.",
          items: [
            { id: 46, statement: "Dr. Sabine Keller forscht über die moderne Arbeitswelt.", correctAnswer: "Richtig" },
            { id: 47, statement: "Hybrides Arbeiten führt dazu, dass Arbeitnehmer mehr Zeit im Stau verbringen.", correctAnswer: "Falsch" },
            { id: 48, statement: "Beim Arbeiten im Homeoffice verschwimmen oft die Grenzen zwischen Beruf und Freizeit.", correctAnswer: "Richtig" },
            { id: 49, statement: "Viele Beschäftigte lesen auch am Wochenende berufliche Nachrichten.", correctAnswer: "Richtig" },
            { id: 50, statement: "Dr. Keller fordert feste Absprachen zur digitalen Nichterreichbarkeit.", correctAnswer: "Richtig" },
            { id: 51, statement: "Führungskräfte sollten ständige Erreichbarkeit rund um die Uhr verlangen.", correctAnswer: "Falsch" },
            { id: 52, statement: "Präsenztage im Büro sind wichtig für den persönlichen Austausch im Team.", correctAnswer: "Richtig" },
            { id: 53, statement: "In handwerklichen und pflegerischen Berufen ist Homeoffice problemlos machbar.", correctAnswer: "Falsch" },
            { id: 54, statement: "In Produktionsbetrieben können flexible Schichtmodelle eine Alternative sein.", correctAnswer: "Richtig" },
            { id: 55, statement: "Dr. Keller hält flexible Arbeitsmodelle für komplett überflüssig.", correctAnswer: "Falsch" }
          ]
        },
        {
          part: "Teil 3",
          title: "Selektives Verstehen (Gespräche / Alltägliche Situationen)",
          description: "Sie hören fünf kurze Gespräche. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 56-60, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
          items: [
            {
              id: 56,
              topic: "Gespräch in der Kletterhalle",
              audioScript: "Sportlerin: Ich möchte meine Klettertechnik verbessern. Bieten Sie Einzelstunden mit Trainer an?\nTrainer: Ja, eine Einzelstunde kostet 45 Euro inklusive Leihschuhen und Sicherungsmaterial. Wir können gerne für Donnerstag um 17 Uhr einen Termin vereinbaren.",
              statement: "Die Kletter-Einzelstunde mit Trainer findet am Donnerstag um 17 Uhr statt.",
              correctAnswer: "Richtig"
            },
            {
              id: 57,
              topic: "Gespräch im Reisebüro",
              audioScript: "Kundin: Wir möchten für August einen Familienurlaub auf Kreta buchen.\nReiseverkehrskaufmann: Ich habe hier ein schönes 4-Sterne-Familienhotel mit Pool und direkter Strandlage. Bei Buchung bis Freitag erhalten Sie einen Frühbucherrabatt von 15 Prozent.",
              statement: "Das Reisebüro bietet bis Freitag einen Frühbuchernachlass von 15 Prozent an.",
              correctAnswer: "Richtig"
            },
            {
              id: 58,
              topic: "Gespräch im Restaurant",
              audioScript: "Gast: Könnten wir an den Tisch am Fenster wechseln, da es hier an der Tür zieht?\nKellner: Selbstverständlich, der Ecktisch am Fenster ist gerade frei geworden. Ich bringe Ihnen Ihre Getränke gleich dorthin.",
              statement: "Der Kellner ermöglicht den Gästen den Wechsel an einen ruhigeren Tisch am Fenster.",
              correctAnswer: "Richtig"
            },
            {
              id: 59,
              topic: "Gespräch im Bürgeramt",
              audioScript: "Bürger: Ich möchte meinen Reisepass verlängern lassen.\nSachbearbeiter: Reisepässe können nicht verlängert, sondern müssen neu beantragt werden. Mit Ihrem biometrischen Foto dauert die Ausstellung etwa 4 Wochen.",
              statement: "Der bestehende Reisepass kann direkt vor Ort um fünf Jahre verlängert werden.",
              correctAnswer: "Falsch"
            },
            {
              id: 60,
              topic: "Gespräch in der Autowerkstatt",
              audioScript: "Autofahrerin: Wann ist mein Wagen mit der Inspektion fertig?\nMeister: Wir wechseln noch die Bremsflüssigkeit und das Motoröl. Das Fahrzeug steht ab 16 Uhr abholbereit auf unserem Kundenparkplatz.",
              statement: "Das Auto ist nach der Inspektion ab 16 Uhr abholbereit.",
              correctAnswer: "Richtig"
            }
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
          title: "Globalverstehen (Kurze Durchsagen)",
          description: "Sie hören fünf kurze Durchsagen. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 41-45, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
          items: [
            {
              id: 41,
              topic: "Durchsage im ICE-Zug",
              audioScript: "Sehr geehrte Fahrgäste: Wegen eines Defekts an der Kaffeemaschine können wir im Bordbistro heute leider keine Heißgetränke anbieten. Kaltgetränke und Snacks stehen uneingeschränkt zur Verfügung.",
              statement: "Im Bordbistro gibt es heute vorübergehend keine warmen Heißgetränke.",
              correctAnswer: "Richtig"
            },
            {
              id: 42,
              topic: "Durchsage im Botanischen Garten",
              audioScript: "Liebe Gartenfreunde: Um 14 Uhr 30 findet im Schaugewächshaus eine Führung zu seltenen tropischen Orchideen statt. Die Teilnahme ist im regulären Eintrittspreis enthalten.",
              statement: "Die Orchideenführung im Gewächshaus erfordert keinen zusätzlichen Eintritt.",
              correctAnswer: "Richtig"
            },
            {
              id: 43,
              topic: "Durchsage im Möbelhaus",
              audioScript: "Kundeninformation zur Warenausgabe: Kunden mit den Abholnummern 420 bis 435 begeben sich bitte zur Laderampe 2. Ihre Pakete sind abholbereit.",
              statement: "Die Möbel für die Abholnummern 420 bis 435 stehen an Laderampe 2 bereit.",
              correctAnswer: "Richtig"
            },
            {
              id: 44,
              topic: "Radiomeldung Verkehr",
              audioScript: "Vorsicht auf der B27 Tübingen Richtung Stuttgart: Wegen Bergungsarbeiten nach einem Auffahrunfall ist die rechte Fahrspur blockiert. Es staut sich auf 3 Kilometern.",
              statement: "Auf der B27 ist nach einem Unfall die rechte Spur blockiert.",
              correctAnswer: "Richtig"
            },
            {
              id: 45,
              topic: "Durchsage in der Volkshochschule",
              audioScript: "Liebe Kursteilnehmer: Für den Spanischkurs A2 am Dienstagabend sind kurzfristig zwei Plätze frei geworden. Anmeldungen nimmt das Sekretariat im 1. Stock entgegen.",
              statement: "Der Spanischkurs A2 ist vollständig ausgebucht und geschlossen.",
              correctAnswer: "Falsch"
            }
          ]
        },
        {
          part: "Teil 2",
          title: "Detailverstehen (Interview / Bericht)",
          description: "Sie hören ein Gespräch/Interview. Sie hören den Text einmal. Entscheiden Sie bei den Aufgaben 46-55, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
          topic: "Interview mit einem Kriminalisten über Cyberkriminalität",
          audioScript: "Moderator: Herzlich willkommen zu unserem Ratgeber 'Sicherheit im Netz'. Unser Gast heute: Kriminalhauptkommissar Frank Weidner vom Landeskriminalamt. Herr Weidner, immer mehr Menschen werden Opfer von Betrug im Internet. Was sind derzeit die häufigsten Betrugsmaschen?\n\nFrank Weidner: Guten Abend. An erster Stelle stehen nach wie vor sogenannte Phishing-Mails und gefälschte SMS. Kriminelle versenden täuschend echt aussehende Nachrichten im Namen von Banken, Paketdiensten oder Behörden mit der Aufforderung, auf einen Link zu klicken und Passwörter oder Kreditkartendaten einzugeben. Eine weitere wachsende Masche ist der Enkeltrick über Messenger-Dienste wie WhatsApp: Betrüger schreiben älteren Menschen von unbekannten Nummern 'Hallo Mama, mein Handy ist kaputt, das ist meine neue Nummer' und fordern kurz darauf dringende Geldüberweisungen.\n\nModerator: Wie können sich Bürger effektiv vor solchen Angriffen schützen?\n\nFrank Weidner: Die wichtigste Regel lautet: Niemals unter Zeitdruck handeln! Banken und Behörden fordern Kunden niemals per E-Mail oder SMS zur Eingabe von PINs oder Passwörtern auf. Wenn Sie eine verdächtige Nachricht erhalten, klicken Sie auf keinen Fall auf enthaltene Links. Rufen Sie im Zweifel Ihre Bank über die offizielle Telefonnummer an. Zudem sollte man für jeden Online-Dienst ein eigenes, komplexes Passwort nutzen und wo immer möglich die Zwei-Faktor-Authentifizierung aktivieren.\n\nModerator: Was sollte man tun, wenn man bereits Geld überwiesen hat?\n\nFrank Weidner: Sofort die eigene Bank anrufen und versuchen, die Überweisung stoppen zu lassen! Bei Kreditkarten die Karte umgehend über den Sperr-Notruf sperren. Anschließend sollte man unbedingt Strafanzeige bei der Polizei erstatten und Screenshots der Nachrichten sichern.",
          items: [
            { id: 46, statement: "Frank Weidner arbeitet als Kriminalhauptkommissar beim Landeskriminalamt.", correctAnswer: "Richtig" },
            { id: 47, statement: "Phishing-Mails sehen heutzutage oft täuschend echt aus.", correctAnswer: "Richtig" },
            { id: 48, statement: "Betrüger nutzen Messenger-Dienste, um sich als Verwandte in Not auszugeben.", correctAnswer: "Richtig" },
            { id: 49, statement: "Banken fordern Kunden regelmäßig per SMS auf, geheime PINs preiszugeben.", correctAnswer: "Falsch" },
            { id: 50, statement: "Herr Weidner rät dazu, bei verdächtigen E-Mails sofort auf die Links zu klicken.", correctAnswer: "Falsch" },
            { id: 51, statement: "Die Zwei-Faktor-Authentifizierung erhöht die Sicherheit von Benutzerkonten.", correctAnswer: "Richtig" },
            { id: 52, statement: "Man sollte für alle Webseiten dasselbe einfache Passwort verwenden.", correctAnswer: "Falsch" },
            { id: 53, statement: "Wer auf Betrüger hereingefallen ist, sollte sofort seine Bank kontaktieren.", correctAnswer: "Richtig" },
            { id: 54, statement: "Kreditkarten können im Notfall über eine Sperr-Hotline gesperrt werden.", correctAnswer: "Richtig" },
            { id: 55, statement: "Die Polizei rät davon ab, Beweise wie Screenshots von betrügerischen Chats aufzubewahren.", correctAnswer: "Falsch" }
          ]
        },
        {
          part: "Teil 3",
          title: "Selektives Verstehen (Gespräche / Alltägliche Situationen)",
          description: "Sie hören fünf kurze Gespräche. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 56-60, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
          items: [
            {
              id: 56,
              topic: "Gespräch im Gartencenter",
              audioScript: "Kundin: Ich suche pflegeleichte Kübelpflanzen für meine sonnige Terrasse.\nGärtner: Für vollsonnige Lagen empfehle ich Ihnen Lavendel und Oleander. Diese Pflanzen vertragen Hitze hervorragend und müssen nur mäßig gegossen werden.",
              statement: "Lavendel und Oleander sind für sonnige Terrassen gut geeignet.",
              correctAnswer: "Richtig"
            },
            {
              id: 57,
              topic: "Gespräch über ein Nachbarschaftsfest",
              audioScript: "Nachbarin: Bringst du am Samstag deinen Kartoffelsalat zum Straßenfest mit?\nNachbar: Sehr gerne! Ich mache eine große Schüssel mit frischen Kräutern und bringe auch noch ein paar Baguettes mit.",
              statement: "Der Nachbar steuert Kartoffelsalat und Baguettes zum Straßenfest bei.",
              correctAnswer: "Richtig"
            },
            {
              id: 58,
              topic: "Gespräch in der Musikschule",
              audioScript: "Vater: Kann meine Tochter bei Ihnen eine Probestunde am Klavier machen?\nKlavierlehrer: Natürlich! Jeden Mittwoch um 15 Uhr bieten wir kostenlose Schnupperstunden für Kinder ab 6 Jahren an.",
              statement: "Die Schnupperstunde am Klavier findet mittwochs um 15 Uhr statt.",
              correctAnswer: "Richtig"
            },
            {
              id: 59,
              topic: "Gespräch in der Buchhandlung",
              audioScript: "Kunde: Ist das bestellte Lehrbuch für Wirtschaftsdeutsch schon da?\nBuchhändlerin: Ja, die Lieferung ist heute Vormittag eingetroffen. Das Buch liegt an der Kasse für Sie bereit. Das macht 24,90 Euro.",
              statement: "Das bestellte Buch liegt abholbereit in der Buchhandlung.",
              correctAnswer: "Richtig"
            },
            {
              id: 60,
              topic: "Gespräch zur Solarenergie",
              audioScript: "Hausbesitzer: Wie lange dauert die Montage einer Photovoltaikanlage auf unserem Dach?\nSolarberater: Die reine Dachmontage und Elektroinstallation durch unsere Handwerker dauert in der Regel nur zwei bis drei Werktage.",
              statement: "Die Installation der Solaranlage dauert gewöhnlich zwei bis drei Werktage.",
              correctAnswer: "Richtig"
            }
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
          title: "Globalverstehen (Kurze Durchsagen)",
          description: "Sie hören fünf kurze Durchsagen. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 41-45, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
          items: [
            {
              id: 41,
              topic: "Durchsage am Flughafen",
              audioScript: "Achtung Fluggäste: An den Sicherheitskontrollen im Terminal 2 steht ab sofort eine zusätzliche Fast-Lane für Reisende nur mit Handgepäck zur Verfügung. Bitte halten Sie Ihre Bordkarten bereit.",
              statement: "Reisende nur mit Handgepäck können eine schnellere Sicherheitskontrolle nutzen.",
              correctAnswer: "Richtig"
            },
            {
              id: 42,
              topic: "Durchsage im Theater",
              audioScript: "An der Abendkasse sind für die heutige Vorstellung von 'Faust' noch Stehplatzkarten zum Sonderpreis von 10 Euro für Schüler und Studenten erhältlich.",
              statement: "Schüler und Studenten können an der Abendkasse ermäßigte Stehplatzkarten kaufen.",
              correctAnswer: "Richtig"
            },
            {
              id: 43,
              topic: "Durchsage im Supermarkt",
              audioScript: "Werte Kundschaft: Wegen technischer Wartungsarbeiten ist unser Leergutautomat für die nächsten 15 Minuten außer Betrieb. Pfandflaschen können vorübergehend an Kasse 2 abgegeben werden.",
              statement: "Pfandflaschen können während der Wartung an Kasse 2 abgegeben werden.",
              correctAnswer: "Richtig"
            },
            {
              id: 44,
              topic: "Durchsage in der S-Bahn",
              audioScript: "Sehr geehrte Fahrgäste: Wegen einer Signalstörung im Bereich Hauptbahnhof verkehrt die Linie S3 heute nur im 20-Minuten-Takt. Wir bitten um Ihr Verständnis.",
              statement: "Die S3 fährt heute ohne jegliche Taktänderungen im Minutentakt.",
              correctAnswer: "Falsch"
            },
            {
              id: 45,
              topic: "Durchsage im Freibad",
              audioScript: "Liebe Badegäste: Wegen eines herannahenden schweren Gewitters fordern wir alle Schwimmer auf, das Wasser unverzüglich zu verlassen und die Umkleidebereiche aufzusuchen.",
              statement: "Alle Badegäste sollen das Wasser wegen eines Gewitters sofort verlassen.",
              correctAnswer: "Richtig"
            }
          ]
        },
        {
          part: "Teil 2",
          title: "Detailverstehen (Interview / Bericht)",
          description: "Sie hören ein Gespräch/Interview. Sie hören den Text einmal. Entscheiden Sie bei den Aufgaben 46-55, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
          topic: "Interview mit einer Agrarwissenschaftlerin über Vertical Farming",
          audioScript: "Moderator: Herzlich willkommen zu unserem Zukunftsmagazin. Heute bei uns im Studio: Prof. Dr. Elena Bauer, Agrarwissenschaftlerin an der TU München. Frau Professor Bauer, die Weltbevölkerung wächst und fruchtbares Ackerland wird weltweit knapper. Eine viel diskutierte Lösung ist das sogenannte 'Vertical Farming' – der Anbau von Gemüse und Kräutern in mehrstöckigen Hochhäusern mitten in Großstädten. Wie funktioniert dieses Konzept?\n\nProf. Bauer: Guten Tag. Beim Vertical Farming bauen wir Pflanzen in geschlossenen, klimatisierten Hallen in etagenförmigen Regalen übereinander an. Statt in Erde wachsen die Pflanzen in speziellen Nährstofflösungen – man nennt das Hydroponik. Das Licht stammt von energieeffizienten LED-Lampen, die genau das Lichtspektrum abstrahlen, das die Pflanzen für die Photosynthese benötigen. Da das Klima im Inneren vollkommen kontrolliert wird, können wir das ganze Jahr über ernten, völlig unabhängig von Jahreszeiten, Frost oder Dürren.\n\nModerator: Welche ökologischen Vorteile bietet diese Anbaumethode?\n\nProf. Bauer: Der größte Vorteil ist der minimale Ressourcenverbrauch. In geschlossenen Kreislaufsystemen verdunstet kein Wasser: Wir benötigen bis zu 95 Prozent weniger Wasser als die traditionelle Landwirtschaft auf dem Feld. Zudem werden überhaupt keine chemischen Pestizide oder Herbizide benötigt, da in den sterilen Hallen keine Schädlinge existieren. Und durch den Anbau direkt in den Städten entfallen lange Transportwege aus Südeuropa oder Übersee.\n\nModerator: Gibt es auch kritische Punkte?\n\nProf. Bauer: Die größte Hürde ist derzeit der hohe Strombedarf für die LED-Beleuchtung und die Klimaanlagen. Vertical Farming ist ökologisch nur dann sinnvoll, wenn der gesamte Strom zu 100 Prozent aus erneuerbaren Energien wie Solar- oder Windkraft stammt. Zudem lassen sich bisher vor allem Blattgemüse, Kräuter und Erdbeeren wirtschaftlich anbauen, während kalorienreiche Grundnahrungsmittel wie Weizen oder Kartoffeln auf dem Feld bleiben.",
          items: [
            { id: 46, statement: "Prof. Dr. Elena Bauer lehrt Agrarwissenschaften an einer Universität.", correctAnswer: "Richtig" },
            { id: 47, statement: "Beim Vertical Farming wachsen die Pflanzen im Freien auf traditionellen Äckern.", correctAnswer: "Falsch" },
            { id: 48, statement: "LED-Lampen versorgen die Pflanzen mit dem nötigen Licht für das Wachstum.", correctAnswer: "Richtig" },
            { id: 49, statement: "In vertikalen Farmen kann zu jeder Jahreszeit kontinuierlich geerntet werden.", correctAnswer: "Richtig" },
            { id: 50, statement: "Vertical Farming verbraucht bis zu 95 Prozent weniger Wasser als der Ackerbau.", correctAnswer: "Richtig" },
            { id: 51, statement: "In den Hallen müssen große Mengen chemischer Pflanzenschutzmittel gespritzt werden.", correctAnswer: "Falsch" },
            { id: 52, statement: "Der Anbau in der Stadt verkürzt die Transportwege der Lebensmittel zum Verbraucher.", correctAnswer: "Richtig" },
            { id: 53, statement: "Der hohe Energiebedarf für Licht und Belüftung ist eine zentrale Herausforderung.", correctAnswer: "Richtig" },
            { id: 54, statement: "Weizen und Kartoffeln werden heute bereits überwiegend in Hochhäusern angebaut.", correctAnswer: "Falsch" },
            { id: 55, statement: "Frau Bauer hält Vertical Farming nur bei Nutzung von Ökostrom für sinnvoll.", correctAnswer: "Richtig" }
          ]
        },
        {
          part: "Teil 3",
          title: "Selektives Verstehen (Gespräche / Alltägliche Situationen)",
          description: "Sie hören fünf kurze Gespräche. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 56-60, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
          items: [
            {
              id: 56,
              topic: "Gespräch beim Roten Kreuz",
              audioScript: "Teilnehmer: Ich brauche einen Erste-Hilfe-Kurs für den Führerschein.\nMitarbeiterin: Unser nächster Kurs findet am Samstag von 9 bis 16 Uhr 30 statt. Bitte bringen Sie Ihren Personalausweis und 45 Euro Kursgebühr mit.",
              statement: "Der Erste-Hilfe-Kurs findet am Samstag von 9 bis 16 Uhr 30 statt.",
              correctAnswer: "Richtig"
            },
            {
              id: 57,
              topic: "Gespräch im Fahrradgeschäft",
              audioScript: "Kunde: Kann ich dieses E-Trekkingrad für eine kurze Probefahrt ausleihen?\nVerkäufer: Selbstverständlich! Hinterlegen Sie bitte kurz Ihren Personalausweis an der Kasse. Sie können das Rad gerne 15 Minuten im Stadtverkehr testen.",
              statement: "Der Kunde darf das E-Bike für eine Viertelstunde im Stadtverkehr Probe fahren.",
              correctAnswer: "Richtig"
            },
            {
              id: 58,
              topic: "Gespräch bei der Wohnungsübergabe",
              audioScript: "Mieter: Wann erhalte ich meine Mietkaution nach dem Auszug zurück?\nVermieter: Wir haben das Übergabeprotokoll ohne Mängel unterschrieben. Die Kaution von 1.500 Euro überweise ich Ihnen innerhalb von zwei Wochen auf Ihr Konto.",
              statement: "Der Vermieter überweist die Kaution innerhalb von zwei Wochen zurück.",
              correctAnswer: "Richtig"
            },
            {
              id: 59,
              topic: "Gespräch in der Notarkanzlei",
              audioScript: "Bürgerin: Wir möchten ein Testament beurkunden lassen. Welche Unterlagen benötigen Sie vorab?\nNotariatsfachwirtin: Bitte füllen Sie unseren Mandantenfragebogen aus und bringen Sie gültige Personalausweise zum Beurkundungstermin mit.",
              statement: "Für die Testamentsbeurkundung müssen Personalausweise und ein Fragebogen vorgelegt werden.",
              correctAnswer: "Richtig"
            },
            {
              id: 60,
              topic: "Gespräch mit dem Kundendienst",
              audioScript: "Kundin: Meine Waschmaschine pumpt das Wasser nicht mehr ab.\nServicetechniker: Unser Techniker kann morgen zwischen 8 und 12 Uhr bei Ihnen vorbeikommen. Die Anfahrtspauschale beträgt 35 Euro.",
              statement: "Der Servicetechniker kommt am folgenden Vormittag zur Reparatur der Waschmaschine.",
              correctAnswer: "Richtig"
            }
          ]
        }
      ]
    }
  ];

  // Append new sets to global array
  newListeningSets.forEach(s => window.listeningQuestionsSets.push(s));
})();
