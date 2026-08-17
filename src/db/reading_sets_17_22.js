// Telc B2 Reading Comprehension (Leseverstehen) Database - Sets 17 to 22
(function() {
  window.readingQuestionsSets = window.readingQuestionsSets || [];

  const newReadingSets = [
    // ==================== TEST SET 17 ====================
    {
      setId: 17,
      parts: [
        {
          part: "Teil 1",
          title: "Rekonstruktion von Texten / Zuordnung von Überschriften",
          description: "Lesen Sie die fünf Texte (1-5) und entscheiden Sie, welche Überschrift (A-J) am besten zu welchem Text passt. Es gibt für jeden Text nur eine passende Überschrift. Fünf Überschriften bleiben übrig.",
          options: [
            { id: "A", text: "Fassadenbegrünung als natürlicher Hitzeschutz im Sommer" },
            { id: "B", text: "Das Schwammstadt-Konzept: Regenwasser nachhaltig speichern" },
            { id: "C", text: "Trinkwasserpreise in Ballungsräumen steigen drastisch" },
            { id: "D", text: "Klimagerechter Umbau: Mehr Grünflächen statt Asphalt" },
            { id: "E", text: "Städtische Parks: Zufluchtsorte für bedrohte Tierarten" },
            { id: "F", text: "Schattenspendende Architektur in modernen Neubauvierteln" },
            { id: "G", text: "Hochwasserschutz an Flüssen stößt an seine Grenzen" },
            { id: "H", text: "Hitzewellen belasten vor allem ältere Stadtbewohner" },
            { id: "I", text: "Dachgärten zur Selbstversorgung mit Gemüse und Kräutern" },
            { id: "J", text: "Klimaanlagen im Dauerbetrieb: Stromnetze überlastet" }
          ],
          items: [
            { id: 1, text: "Immer mehr Metropolen setzen auf das Prinzip der wassersensiblen Stadtentwicklung. Anstatt Regenwasser über die Kanalisation schnell abzuleiten, wird es vor Ort in Gründächern, Zisternen und Versickerungsbecken aufgefangen. In Hitzeperioden verdunstet dieses Wasser langsam und kühlt so die Umgebungsluft spürbar ab.", correctAnswer: "B" },
            { id: 2, text: "Dicht bebaute Innenstädte heizen sich im Sommer extrem auf, da Beton und Teer die Sonnenwärme speichern. Um diesen Hitzeinseln entgegenzuwirken, wandeln Kommunen Parkplätze in Mini-Parks um, pflanzen hitzeresistente Laubbäume und legen Frischluftschneisen an, durch die kühle Winde aus dem Umland strömen können.", correctAnswer: "D" },
            { id: 3, text: "Bepflanzte Hauswände sind weit mehr als nur ein optischer Blickfang. Die dichte Blätterschicht verhindert, dass das Mauerwerk direkter Sonnenstrahlung ausgesetzt ist, wodurch die Innenräume im Sommer angenehm kühl bleiben. Im Winter wirkt die Pflanzenschicht zudem als natürliche Wärmedämmung.", correctAnswer: "A" },
            { id: 4, text: "Tropische Nächte mit Temperaturen über 20 Grad nehmen in Großstädten rapide zu. Medizinische Untersuchungen belegen, dass Senioren und chronisch kranke Menschen unter der fehlenden nächtlichen Abkühlung besonders leiden. Notaufnahmen melden an heißen Sommertagen einen deutlichen Anstieg hitzebedingter Kreislaufzusammenbrüche.", correctAnswer: "H" },
            { id: 5, text: "Architekten experimentieren zunehmend mit weit auskragenden Dächern, Lamellenfassaden und Sonnensegeln über Fußgängerzonen. Durch die geschickte Ausrichtung von Gebäuden und Balkonen wird direkte Sonneneinstrahlung auf Fensterfronten minimiert, ohne das Tageslicht in den Wohnungen einzuschränken.", correctAnswer: "F" }
          ]
        },
        {
          part: "Teil 2",
          title: "Leseverstehen (Detailverstehen)",
          description: "Lesen Sie den folgenden Text und wählen Sie bei den Aufgaben 6-10 die richtige Antwort (a, b oder c).",
          passage: "Künstliche Intelligenz in der Kreativwirtschaft: Chance oder Bedrohung?\n\nGenerative KI-Systeme, die auf Knopfdruck fotorealistische Bilder malen, Musikstücke komponieren oder anspruchsvolle Texte verfassen, haben die Kreativbranche in eine tiefe Debatte gestürzt. Während Technikbegeisterte die neuen Werkzeuge als Revolution feiern, die Schaffensprozesse beschleunigt und kreative Blockaden löst, wächst bei vielen Kunstschaffenden die Existenzangst.\n\nIm Zentrum der Kritik steht die Frage des Urheberrechts. KI-Modelle werden mit Millionen von Kunstwerken, Texten und Fotografien aus dem Internet trainiert – meist ohne Wissen, Einwilligung oder finanzielle Entschädigung der ursprünglichen Urheber. Verlage, Illustratoren und Musiklabels fordern daher strengere gesetzliche Vorgaben: Wer kreative Werke für das Training von Algorithmen nutzt, müsse eine faire Lizenzgebühr an die Schöpfer zahlen.\n\nEin weiteres Problem ist die drohende Entwertung menschlicher Arbeit. Werbeagenturen und Medienhäuser setzen generative Programme bereits ein, um Hintergrundgrafiken, Produktfotos oder einfache Werbetexte in Sekundenschnelle zu erstellen. Zwar betonen Branchenkenner, dass echte künstlerische Tiefe, Emotion und unverwechselbarer Stil weiterhin eine menschliche Handschrift erfordern. Dennoch dürften einfache Routineaufträge für Freiberufler in den kommenden Jahren drastisch zurückgehen.",
          questions: [
            { id: 6, question: "Warum stehen viele Kreativschaffende generativer KI skeptisch gegenüber?", options: [{ id: "a", text: "Sie befürchten finanzielle Einbußen und den Verlust ihrer Lebensgrundlage." }, { id: "b", text: "Sie halten die Qualität von KI-generierten Bildern für absolut unbrauchbar." }, { id: "c", text: "Sie lehnen jegliche digitale Technik aus Prinzip ab." }], correctAnswer: "a" },
            { id: 7, question: "Was wird im Text bezüglich des Urheberrechts kritisiert?", options: [{ id: "a", text: "KI-Systeme kopieren ausschließlich gemeinfreie historische Kunstwerke." }, { id: "b", text: "Algorithmen wurden ungefragt mit urheberrechtlich geschützten Werken trainiert." }, { id: "c", text: "Künstler erhalten zu hohe Lizenzgebühren von den Softwareentwicklern." }], correctAnswer: "b" },
            { id: 8, question: "Welche Forderung stellen Künstler und Verlage an die Politik?", options: [{ id: "a", text: "Ein weltweites Verbot von Computern in der Kunstbranche." }, { id: "b", text: "Verpflichtende Lizenzzahlungen für das Training von KI-Modellen." }, { id: "c", text: "Kostenlose Software für alle freiberuflichen Grafiker." }], correctAnswer: "b" },
            { id: 9, question: "In welchen Bereichen wird KI in Agenturen bereits aktiv eingesetzt?", options: [{ id: "a", text: "Für komplexe Regieführung bei großen Spielfilmen." }, { id: "b", text: "Zur schnellen Erstellung von einfachen Werbetexten und Grafiken." }, { id: "c", text: "Ausschließlich für die Buchhaltung und Steuererklärung." }], correctAnswer: "b" },
            { id: 10, question: "Welche Prognose stellen Branchenexperten für die Zukunft auf?", options: [{ id: "a", text: "Menschliche Künstler werden in zwei Jahren komplett ausgestorben sein." }, { id: "b", text: "Einfache Standardaufträge für Freiberufler werden deutlich abnehmen." }, { id: "c", text: "KI wird niemals in der Lage sein, menschliche Emotionen nachzuahmen." }], correctAnswer: "b" }
          ]
        },
        {
          part: "Teil 3",
          title: "Selektives Lesen (Zuordnung)",
          description: "Lesen Sie die Situationen (11-20) und die Anzeigen (A-L). Finden Sie für jede Situation die passende Anzeige. Für eine Situation gibt es keine passende Anzeige. Kennzeichnen Sie diese mit einem 'X'.",
          options: [
            { id: "A", text: "SolarTech Rhein-Main - Professionelle Beratung und Montage von Photovoltaikanlagen auf Einfamilienhäusern. Förderberatung inklusive." },
            { id: "B", text: "Sprachschule Lingua - Intensivkurse Wirtschaftsdeutsch für Mediziner und Pflegekräfte. Flexible Abendtermine." },
            { id: "C", text: "Tierpension Waldfrieden - Liebevolle Urlaubsbetreuung für Hunde und Katzen in familiärer Umgebung mit großem Auslauf." },
            { id: "D", text: "Rechtsanwaltskanzlei Schulz - Fachanwalt für Mietrecht: Beratung bei Kündigung, Eigenbedarf und Mietminderung." },
            { id: "E", text: "Bio-Hofladen Apfelbaum - Frisches Obst, Gemüse und Käse direkt vom Erzeuger. Lieferservice im Stadtgebiet jeden Freitag." },
            { id: "F", text: "Fahrrad-Manufaktur Custom - Individuelle Maßanfertigung von hochwertigen Reiserädern und E-Bikes nach Kundenwunsch." },
            { id: "G", text: "Schlüsseldienst Blitz - 24-Stunden-Notdienst bei Türöffnungen zum fairen Festpreis. Keine versteckten Anfahrtskosten." },
            { id: "H", text: "Fitness-Club Vitalis - Yoga-, Pilates- und Rückenschulkurse speziell für Schwangere und junge Mütter." },
            { id: "I", text: "IT-Service Pro - Professionelle Datenrettung von defekten Festplatten, SSDs und USB-Sticks für Geschäftskunden." },
            { id: "J", text: "Kletterwald Abenteuer - Hochseilgarten für Schulklassen, Familien und Firmenevents. Teamtraining mit professionellen Trainern." },
            { id: "K", text: "Nachhilfe-Zentrum Plus - Individueller Einzelunterricht in Mathematik und Physik für Gymnasialschüler der Oberstufe." },
            { id: "L", text: "Catering Gourmet - Fingerfood und exklusive Buffets für Hochzeiten, Geburtstage und Firmenfeiern ab 20 Personen." },
            { id: "X", text: "Für diese Situation gibt es keine passende Anzeige (X)" }
          ],
          items: [
            { id: 11, situation: "Ein Hausbesitzer möchte auf seinem Dach Solarzellen installieren lassen und sucht fachkundige Hilfe bei der Beantragung staatlicher Zuschüsse.", correctAnswer: "A" },
            { id: 12, situation: "Eine ausländische Ärztin möchte ihre berufsbezogenen Deutschkenntnisse in einem Abendkurs verbessern.", correctAnswer: "B" },
            { id: 13, situation: "Eine Familie fährt für zwei Wochen in den Urlaub und sucht eine zuverlässige Betreuung mit viel Freilauf für ihren Hund.", correctAnswer: "C" },
            { id: 14, situation: "Ein Mieter hat von seinem Vermieter eine Kündigung wegen Eigenbedarfs erhalten und möchte sich juristisch beraten lassen.", correctAnswer: "D" },
            { id: 15, situation: "Jemand möchte wöchentlich frische Bio-Lebensmittel direkt von einem Bauernhof nach Hause geliefert bekommen.", correctAnswer: "E" },
            { id: 16, situation: "Ein passionierter Radreisender sucht eine Werkstatt, die ihm ein robustes Fahrrad genau nach seinen Körpermaßen baut.", correctAnswer: "F" },
            { id: 17, situation: "Jemand hat sich spät abends aus der Wohnung ausgesperrt und benötigt schnelle Hilfe zu transparenten Preisen.", correctAnswer: "G" },
            { id: 18, situation: "Eine werdende Mutter sucht einen passenden Sportkurs zur Vorbereitung auf die Geburt und zur Stärkung des Rückens.", correctAnswer: "H" },
            { id: 19, situation: "Eine Agentur kann nicht mehr auf eine externe Firmenfestplatte zugreifen und braucht sofortige Datenwiederherstellung.", correctAnswer: "I" },
            { id: 20, situation: "Ein Hobbykoch sucht einen Spezialkurs zum Thema Molekularküche in seiner Region.", correctAnswer: "X" }
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
          title: "Rekonstruktion von Texten / Zuordnung von Überschriften",
          description: "Lesen Sie die fünf Texte (1-5) und entscheiden Sie, welche Überschrift (A-J) am besten zu welchem Text passt. Es gibt für jeden Text nur eine passende Überschrift. Fünf Überschriften bleiben übrig.",
          options: [
            { id: "A", text: "Seilbahnen als innovative Ergänzung im städtischen Nahverkehr" },
            { id: "B", text: "Autofreie Sonntage: Beliebt bei Familien, umstritten im Handel" },
            { id: "C", text: "Das Deutschlandticket: Erfolge und Finanzierungsstreit" },
            { id: "D", text: "E-Busse im Dauereinsatz: Reichweitenprobleme im Winter" },
            { id: "E", text: "Bürgerbusse schließen Lücken im ländlichen Raum" },
            { id: "F", text: "Radinfrastruktur: Radschnellwege für Pendler boomen" },
            { id: "G", text: "Kostenloser Nahverkehr für Senioren und Schüler" },
            { id: "H", text: "On-Demand-Shuttles ersetzen feste Fahrpläne" },
            { id: "I", text: "Park-and-Ride-Plätze am Stadtrand oft überlastet" },
            { id: "J", text: "Streiks im Nahverkehr belasten Millionen Berufspendler" }
          ],
          items: [
            { id: 1, text: "Um Hindernisse wie Flüsse oder dichte Bebauung ohne langwierigen Tunnelbau zu überwinden, planen immer mehr Städte Luftseilbahnen. Die lautlosen Kabinen schweben im Minutentakt über Staus hinweg und können tausende Passagiere pro Stunde emissionsfrei von Außenbezirken zu zentralen U-Bahn-Knotenpunkten transportieren.", correctAnswer: "A" },
            { id: 2, text: "Die Einführung eines bundesweit gültigen Pauschaltickets für den Regional- und Nahverkehr hat zu einem spürbaren Anstieg der Fahrgastzahlen geführt. Doch zwischen Bund und Ländern tobt ein harter Streit über die dauerhafte Kostenübernahme, da Einnahmeausfälle der Verkehrsbetriebe in Milliardenhöhe ausgeglichen werden müssen.", correctAnswer: "C" },
            { id: 3, text: "In vielen Dörfern fährt der reguläre Linienbus nur noch zweimal am Tag. Ehrenamtlich engagierte Bürger haben deshalb eigene Fahrdienste organisiert. Mit Kleinbussen bringen sie ältere Menschen ohne eigenes Auto zum Arzt oder zum Wocheneinkauf in die nächste Kleinstadt und sichern so die Mobilität auf dem Land.", correctAnswer: "E" },
            { id: 4, text: "Statt leerer Großbusse zu festen Zeiten testen Verkehrsunternehmen flexible Rufbusse per Smartphone-App. Ein intelligenter Algorithmus bündelt ähnliche Fahrtwünsche mehrerer Fahrgäste in Echtzeit und berechnet die schnellste Route, wodurch unnötige Leerfahrten vermieden und Ressourcen geschont werden.", correctAnswer: "H" },
            { id: 5, text: "Breite, kreuzungsfreie Fahrradtrassen mit Asphaltbelag und Beleuchtung verbinden Vororte direkt mit den Stadtzentren. Dank leistungsstarker E-Bikes nutzen immer mehr Angestellte diese Schnellwege für Arbeitswege von 15 bis 20 Kilometern und lassen das Auto im Stau stehen.", correctAnswer: "F" }
          ]
        },
        {
          part: "Teil 2",
          title: "Leseverstehen (Detailverstehen)",
          description: "Lesen Sie den folgenden Text und wählen Sie bei den Aufgaben 6-10 die richtige Antwort (a, b oder c).",
          passage: "Betriebliches Gesundheitsmanagement: Investition in die Zukunft\n\nFehlzeiten durch psychische Erkrankungen und Muskel-Skelett-Beschwerden haben in den vergangenen Jahren neue Höchststände erreicht. Für Unternehmen bedeutet jeder Krankheitstag nicht nur personelle Engpässe, sondern auch erhebliche finanzielle Verluste. Immer mehr Arbeitgeber erkennen daher, dass betriebliche Gesundheitsförderung (BGM) weit über den Obstkorb in der Teeküche hinausgehen muss.\n\nModerne BGM-Konzepte setzen auf eine ganzheitliche Strategie. Dazu gehören ergonomisch gestaltete Arbeitsplätze mit höhenverstellbaren Schreibtischen ebenso wie betriebseigene Sportkurse, Stressbewältigungs-Workshops und anonyme Beratungsangebote bei persönlichen Krisen. Führungskräfte werden gezielt geschult, um Überlastungssignale bei Mitarbeitern frühzeitig zu erkennen und durch wertschätzende Kommunikation gegenzusteuern.\n\nEin zentraler Baustein ist das Betriebliche Eingliederungsmanagement (BEM) für Langzeiterkrankte. In gemeinsamen Gesprächen zwischen Arbeitgeber, Betroffenem und Betriebsrat wird ein individueller Stufenplan erarbeitet, um eine schrittweise Rückkehr an den Arbeitsplatz zu ermöglichen. Studien zeigen: Jeder in Prävention investierte Euro zahlt sich für Betriebe durch höhere Produktivität, geringere Fluktuation und sinkende Krankenstände mehrfach aus.",
          questions: [
            { id: 6, question: "Warum investieren Unternehmen verstärkt in betriebliches Gesundheitsmanagement?", options: [{ id: "a", text: "Weil hohe Fehlzeiten der Mitarbeiter große finanzielle Schäden verursachen." }, { id: "b", text: "Weil sie gesetzlich verpflichtet sind, Fitnessstudios zu betreiben." }, { id: "c", text: "Weil die Krankenkassen keine Leistungen mehr für Angestellte zahlen." }], correctAnswer: "a" },
            { id: 7, question: "Was gehört zu einem modernen ganzheitlichen BGM-Konzept?", options: [{ id: "a", text: "Ausschließlich das Aufstellen von kostenlosen Obstkörben." }, { id: "b", text: "Ergonomische Arbeitsmittel, Sportangebote und psychologische Beratung." }, { id: "c", text: "Strikte Überwachung der Arbeitszeiten mit Kameras." }], correctAnswer: "b" },
            { id: 8, question: "Welche Rolle spielen Führungskräfte im Gesundheitsmanagement?", options: [{ id: "a", text: "Sie sollen kranke Mitarbeiter zu Hause kontrollieren." }, { id: "b", text: "Sie lernen, Überlastungsanzeichen im Team rechtzeitig wahrzunehmen." }, { id: "c", text: "Sie müssen alle medizinischen Diagnosen der Angestellten archivieren." }], correctAnswer: "b" },
            { id: 9, question: "Was ist das Ziel des Betrieblichen Eingliederungsmanagements (BEM)?", options: [{ id: "a", text: "Die schnelle Kündigung von chronisch kranken Arbeitnehmern." }, { id: "b", text: "Die stufenweise und begleitete Rückkehr langzeiterkrankter Mitarbeiter." }, { id: "c", text: "Die Reduzierung des Jahresurlaubs für kranke Angestellte." }], correctAnswer: "b" },
            { id: 10, question: "Welches Fazit ziehen wissenschaftliche Studien zum BGM?", options: [{ id: "a", text: "Gesundheitsförderung ist für Betriebe eine reine Geldverschwendung." }, { id: "b", text: "Investitionen in die Mitarbeitergesundheit zahlen sich wirtschaftlich aus." }, { id: "c", text: "Die Mitarbeiterzufriedenheit sinkt durch betriebliche Sportkurse." }], correctAnswer: "b" }
          ]
        },
        {
          part: "Teil 3",
          title: "Selektives Lesen (Zuordnung)",
          description: "Lesen Sie die Situationen (11-20) und die Anzeigen (A-L). Finden Sie für jede Situation die passende Anzeige. Für eine Situation gibt es keine passende Anzeige. Kennzeichnen Sie diese mit einem 'X'.",
          options: [
            { id: "A", text: "Malerbetrieb Farbenfroh - Fachgerechte Tapezier-, Anstrich- und Lackierarbeiten für Innenräume und Fassaden. Schnelle Termine." },
            { id: "B", text: "Tanzschule Rythmus - Standard- und Lateintanzkurse für Paare und Singles. Anfängerkurse starten jeden ersten Montag im Monat." },
            { id: "C", text: "Steuerhilfe e.V. - Erstellung der Einkommensteuererklärung für Arbeitnehmer und Rentner im Rahmen einer Mitgliedschaft." },
            { id: "D", text: "Sprachstudio Japanisch - Konversations- und Schriftzeichenkurse für Anfänger und Fortgeschrittene in Kleingruppen." },
            { id: "E", text: "Gartenbau Gründaumen - Baumpflege, Rodungen und professioneller Heckenschnitt mit fachgerechter Entsorgung." },
            { id: "F", text: "Fotostudio Lichtblick - Professionelle Bewerbungs- und Businessfotos inklusive digitaler Bildbearbeitung und Sofortausdruck." },
            { id: "G", text: "Musikschule Notenblatt - Saxophon-, Trompeten- und Klarinettenunterricht für Jugendliche und Erwachsene. Leihinstrumente vorhanden." },
            { id: "H", text: "Umzugsservice Blitztransport - Komplettumzüge nah und fern, Möbelmontage und Bereitstellung von Packmaterial." },
            { id: "I", text: "Yoga-Zentrum Prana - Traditionelles Hatha-Yoga und Meditation zur Tiefenentspannung am Abend. Krankenkassenzertifiziert." },
            { id: "J", text: "Autowerkstatt Karosserie-Profi - Beseitigung von Hagel- und Unfallschäden, Smart-Repair und Dellenentfernung ohne Lackieren." },
            { id: "K", text: "Schneiderei Nadelöhr - Maßänderungen, Reparatur von Reißverschlüssen und Neuanfertigung von Vorhängen und Bezügen." },
            { id: "L", text: "Tierarztpraxis Kleintier-Care - Vorsorgeuntersuchungen, Impfungen und chirurgische Eingriffe für Hunde, Katzen und Nager." },
            { id: "X", text: "Für diese Situation gibt es keine passende Anzeige (X)" }
          ],
          items: [
            { id: 11, situation: "Ein Wohnungseigentümer möchte sein Wohnzimmer neu tapezieren und die Wände streichen lassen.", correctAnswer: "A" },
            { id: 12, situation: "Ein Paar möchte vor seiner Hochzeit Grundschritte für Walzer und Discofox in einem Kurs lernen.", correctAnswer: "B" },
            { id: 13, situation: "Ein Angestellter sucht einen günstigen Verein, der ihm bei der jährlichen Steuererklärung hilft.", correctAnswer: "C" },
            { id: 14, situation: "Jemand plant eine Reise nach Tokio und möchte vorab Grundlagen der japanischen Sprache und Schrift erlernen.", correctAnswer: "D" },
            { id: 15, situation: "Ein Grundstücksbesitzer muss zwei morsche Bäume im Garten fällen und den Grünschnitt abtransportieren lassen.", correctAnswer: "E" },
            { id: 16, situation: "Eine Hochschulabsolventin benötigt hochwertige Portraitfotos für ihre anstehenden Bewerbungen.", correctAnswer: "F" },
            { id: 17, situation: "Ein Musikbegeisterter möchte Saxophon spielen lernen, besitzt aber noch kein eigenes Instrument.", correctAnswer: "G" },
            { id: 18, situation: "Eine Familie zieht in eine andere Stadt und sucht ein Unternehmen für Transport und Küchenmontage.", correctAnswer: "H" },
            { id: 19, situation: "Ein Berufstätiger sucht einen zertifizierten Abendkurs zur Stressreduktion, den seine Krankenkasse bezuschusst.", correctAnswer: "I" },
            { id: 20, situation: "Jemand sucht einen professionellen Tauchkurs für den nächsten Sommerurlaub am Roten Meer.", correctAnswer: "X" }
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
          title: "Rekonstruktion von Texten / Zuordnung von Überschriften",
          description: "Lesen Sie die fünf Texte (1-5) und entscheiden Sie, welche Überschrift (A-J) am besten zu welchem Text passt. Es gibt für jeden Text nur eine passende Überschrift. Fünf Überschriften bleiben übrig.",
          options: [
            { id: "A", text: "Baugemeinschaften: Zusammen planen, kostengünstiger wohnen" },
            { id: "B", text: "Co-Living: Gemeinschaftliches Wohnen für junge Berufstätige" },
            { id: "C", text: "Denkmalschutzauflagen verteuern historische Altbausanierungen" },
            { id: "D", text: "Wohnungstausch: Eine Lösung gegen den Mangel an Großwohnungen" },
            { id: "E", text: "Generationenhof auf dem Land: Jung und Alt unter einem Dach" },
            { id: "F", text: "Mietpreisbremse: Experten streiten über Wirksamkeit" },
            { id: "G", text: "Wohnen zur Miete oder Kaufen? Der langfristige Vergleich" },
            { id: "H", text: "Modulares Bauen: Häuser aus der Fabrik in Rekordzeit" },
            { id: "I", text: "Barrierefreier Umbau: Zuschüsse für Senioren im Eigenheim" },
            { id: "J", text: "Energieberater decken versteckte Wärmelecks auf" }
          ],
          items: [
            { id: 1, text: "Private Gruppen schließen sich zusammen, um gemeinsam ein Mehrfamilienhaus zu errichten. Da kein kommerzieller Bauträger zwischengeschaltet ist, sparen die zukünftigen Eigentümer viel Geld. Zudem bestimmen die Bewohner schon in der Entwurfsphase über Grundrisse und Gemeinschaftsräume wie Werkstätten oder Dachgärten mit.", correctAnswer: "A" },
            { id: 2, text: "Voll möblierte Privatzimmer mit eigenem Bad, kombiniert mit großzügigen Gemeinschaftsküchen, Lounges und Coworking-Spaces: Dieses Wohnkonzept spricht vor allem digitale Nomaden und Berufsanfänger an, die zeitlich flexibel bleiben und sofort soziale Kontakte in einer neuen Stadt knüpfen möchten.", correctAnswer: "B" },
            { id: 3, text: "Ein alter Bauernhof wird zum lebendigen Lebensmittelpunkt für mehrere Generationen: Junge Familien profitieren von der liebevollen Kinderbetreuung durch rüstige Rentner, während die Jüngeren im Gegenzug Einkäufe erledigen oder schwere Gartenarbeiten übernehmen. So entsteht ein enges soziales Netz abseits der Anonymität.", correctAnswer: "E" },
            { id: 4, text: "Vorgefertigte Raummodule aus Holz oder Beton werden in Werkshallen witterungsunabhängig präzise produziert und per Tieflader zur Baustelle transportiert. Innerhalb weniger Tage wird das Gebäude montiert. Das spart enorme Bauzeit, reduziert Lärmbelästigungen für Nachbarn und senkt die Gesamtbaukosten deutlich.", correctAnswer: "H" },
            { id: 5, text: "Ältere Menschen, deren Kinder ausgezogen sind, bewohnen oft viel zu große Wohnungen, während junge Familien händeringend nach mehr Platz suchen. Digitale Plattformen ermöglichen es Mietern, ihre Wohnungen unkompliziert miteinander zu tauschen, wobei die bestehenden günstigen Altverträge erhalten bleiben.", correctAnswer: "D" }
          ]
        },
        {
          part: "Teil 2",
          title: "Leseverstehen (Detailverstehen)",
          description: "Lesen Sie den folgenden Text und wählen Sie bei den Aufgaben 6-10 die richtige Antwort (a, b oder c).",
          passage: "Globale Wasserknappheit: Technologien für das blaue Gold\n\nSauberes Trinkwasser wird in vielen Regionen der Erde zu einem immer knapperen Gut. Klimawandel, Dürreperioden und eine wachsende Weltbevölkerung verstärken den Druck auf die natürlichen Grundwasservorkommen dramatisch. Um die Versorgung von Millionenstädten und der Landwirtschaft in Trockengebieten sicherzustellen, investieren Staaten weltweit Milliarden in innovative Entsalzungstechnologien.\n\nDas dominierende Verfahren ist heute die sogenannte Umkehrosmose. Dabei wird Meerwasser mit hohem Druck durch mikroskopisch feine Membranen gepresst, die Salzkristalle und Schadstoffe zuverlässig zurückhalten. Noch vor wenigen Jahrzehnten galten Entsalzungsanlagen als enorme Energieschleudern. Durch moderne Energierückgewinnungssysteme und die direkte Koppelung an riesige Solarparks und Windkraftanlagen arbeitet die Meerwasserentsalzung heute jedoch weitaus effizienter und klimafreundlicher.\n\nDennoch warnen Meeresbiologen vor ökologischen Schattenseiten. Bei der Entsalzung entsteht als Nebenprodukt hochkonzentrierte Salzlauge, die oft zusammen mit chemischen Reinigungsmitteln ungefiltert ins Meer zurückgeleitet wird. Diese dichten Salzwolken sinken auf den Meeresboden und zerstören dort empfindliche Korallenriffe und Seegraswiesen. Forscher arbeiten daher mit Hochdruck an Verfahren, um aus der Restlauge wertvolle Mineralien wie Lithium und Magnesium für die Industrie zu gewinnen.",
          questions: [
            { id: 6, question: "Welche Faktoren führen weltweit zu einer Zuspitzung der Trinkwasserkrise?", options: [{ id: "a", text: "Die zunehmende Begrünung von Wüstengebieten." }, { id: "b", text: "Klimawandel, Dürren und das Wachstum der Weltbevölkerung." }, { id: "c", text: "Ein weltweiter Rückgang des Meeresspiegels." }], correctAnswer: "b" },
            { id: 7, question: "Wie funktioniert das Verfahren der Umkehrosmose?", options: [{ id: "a", text: "Das Meerwasser wird durch feine Membranen gefiltert, die das Salz zurückhalten." }, { id: "b", text: "Das Wasser wird kochend erhitzt, bis nur noch reines Salz übrigbleibt." }, { id: "c", text: "Spezielle Algen entziehen dem Meerwasser auf natürlichem Weg das Salz." }], correctAnswer: "a" },
            { id: 8, question: "Warum arbeiten moderne Entsalzungsanlagen heute umweltfreundlicher als früher?", options: [{ id: "a", text: "Weil sie ausschließlich mit Kohlekraftwerken betrieben werden." }, { id: "b", text: "Weil sie mit Solarenergie kombiniert werden und weniger Energie verbrauchen." }, { id: "c", text: "Weil man überhaupt keine Elektrizität mehr für die Pumpen benötigt." }], correctAnswer: "b" },
            { id: 9, question: "Welches ökologische Problem verursachen Entsalzungsanlagen im Meer?", options: [{ id: "a", text: "Sie kühlen die Wassertemperatur der Ozeane dramatisch ab." }, { id: "b", text: "Die zurückgeleitete konzentrierte Salzlauge schädigt das marine Ökosystem." }, { id: "c", text: "Fische werden von den Filtern angezogen und vermehren sich zu stark." }], correctAnswer: "b" },
            { id: 10, question: "Was versuchen Forscher aus der anfallenden Restlauge zu gewinnen?", options: [{ id: "a", text: "Industriell nutzbare Rohstoffe wie Lithium und Magnesium." }, { id: "b", text: "Kraftstoffe für Automobile und Flugzeuge." }, { id: "c", text: "Baumaterialien für den Straßenbau." }], correctAnswer: "a" }
          ]
        },
        {
          part: "Teil 3",
          title: "Selektives Lesen (Zuordnung)",
          description: "Lesen Sie die Situationen (11-20) und die Anzeigen (A-L). Finden Sie für jede Situation die passende Anzeige. Für eine Situation gibt es keine passende Anzeige. Kennzeichnen Sie diese mit einem 'X'.",
          options: [
            { id: "A", text: "Sprachschule Espanol - Spanisch-Kompaktkurse für den Urlaub und Beruf. Einstufungstest und Probestunde kostenlos." },
            { id: "B", text: "Auto-Aufbereitung Glanz - Professionelle Innen- und Außenreinigung, Lackpolitur und Geruchsbeseitigung für alle KFZ." },
            { id: "C", text: "Tierärztlicher Notdienst - 24h-Bereitschaft bei akuten Verletzungen und Vergiftungen von Haustieren. Mit eigener Tierklinik." },
            { id: "D", text: "Bautischlerei Holzwerk - Maßgefertigte Holztreppen, Fenster und Türen aus nachhaltiger Forstwirtschaft." },
            { id: "E", text: "Finanzberatung Zukunftsplan - Unabhängige Honorarberatung zu ETFs, privater Altersvorsorge und Immobilienfinanzierung." },
            { id: "F", text: "Kreativ-Werkstatt Ton - Töpferkurse an der Drehscheibe für Anfänger und Fortgeschrittene am Wochenende." },
            { id: "G", text: "PC-Service Vor-Ort - Schnelle Hilfe bei Netzwerkproblemen, Router-Einrichtung und WLAN-Optimierung zu Hause." },
            { id: "H", text: "Goldschmiede Unikat - Trauringkurse für Paare: Schmieden Sie Ihre eigenen Eheringe unter professioneller Anleitung." },
            { id: "I", text: "Catering Bella Italia - Original italienische Steinofenpizza und Pasta-Buffets für Partys und Firmenveranstaltungen." },
            { id: "J", text: "Schädlingsbekämpfung Pro - Diskrete und umweltverträgliche Beseitigung von Wespen, Ameisen, Mäusen und Bettwanzen." },
            { id: "K", text: "Karriere-Coaching Impuls - Vorbereitung auf Vorstellungsgespräche, Gehaltsverhandlungen und berufliche Neuorientierung." },
            { id: "L", text: "Bootsschule Wellengang - Sportbootführerschein Binnen und See. Theorie- und Praxisausbildung an Wochenenden." },
            { id: "X", text: "Für diese Situation gibt es keine passende Anzeige (X)" }
          ],
          items: [
            { id: 11, situation: "Ein Urlauber möchte vor seiner Reise nach Südamerika grundlegende Spanischkenntnisse erwerben.", correctAnswer: "A" },
            { id: 12, situation: "Ein Autobesitzer möchte sein Fahrzeug vor dem Verkauf gründlich von innen und außen aufbereiten lassen.", correctAnswer: "B" },
            { id: 13, situation: "Ein Hundebesitzer benötigt am Sonntagabend dringend Hilfe, weil sein Hund Schokolade gefressen hat.", correctAnswer: "C" },
            { id: 14, situation: "Ein Bauherr sucht einen Schreiner für individuelle Massivholztüren in seinem Neubau.", correctAnswer: "D" },
            { id: 15, situation: "Eine Angestellte sucht eine unabhängige Beratung zum langfristigen Vermögensaufbau mit Aktienfonds.", correctAnswer: "E" },
            { id: 16, situation: "Ein kreativer Mensch möchte am Samstag lernen, wie man Vasen und Schalen auf der Töpferscheibe formt.", correctAnswer: "F" },
            { id: 17, situation: "Eine Familie hat in ihrem Neubau ständige WLAN-Abbrüche und sucht Unterstützung bei der Einrichtung des Netzwerks.", correctAnswer: "G" },
            { id: 18, situation: "Ein Verlobungspaar möchte seine Trauringe aus Gold selbst von Hand anfertigen.", correctAnswer: "H" },
            { id: 19, situation: "Ein Hausbesitzer hat ein Wespennest direkt am Schlafzimmerfenster und sucht professionelle Hilfe.", correctAnswer: "J" },
            { id: 20, situation: "Jemand sucht einen professionellen Schneider für maßgeschneiderte Maßanzüge aus Seide.", correctAnswer: "X" }
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
          title: "Rekonstruktion von Texten / Zuordnung von Überschriften",
          description: "Lesen Sie die fünf Texte (1-5) und entscheiden Sie, welche Überschrift (A-J) am besten zu welchem Text passt. Es gibt für jeden Text nur eine passende Überschrift. Fünf Überschriften bleiben übrig.",
          options: [
            { id: "A", text: "Fast Fashion: Die verheerenden Umweltfolgen der Billigmode" },
            { id: "B", text: "Kleidertausch-Partys: Nachhaltige Mode ganz ohne Geld" },
            { id: "C", text: "Textilrecycling: Aus alten Fasern neue Garne spinnen" },
            { id: "D", text: "Upcycling: Aus Alttextilien werden kreative Designerstücke" },
            { id: "E", text: "Mode mieten statt kaufen: Das Modell für besondere Anlässe" },
            { id: "F", text: "Öko-Siegel im Textilbereich: Verbraucher oft verunsichert" },
            { id: "G", text: "Leder aus Pilzen und Äpfeln: Vegane Alternativen erobern den Markt" },
            { id: "H", text: "Die Rückkehr der Nähmaschine: Selbst nähen im Trend" },
            { id: "I", text: "Kinderkleidung weitergeben: Second-Hand-Börsen für Eltern" },
            { id: "J", text: "Arbeitsbedingungen in der globalen Bekleidungsindustrie" }
          ],
          items: [
            { id: 1, text: "Jede Woche neue Kollektionen zu extrem niedrigen Preisen: Die Wegwerfmentalität in der Bekleidungsbranche verschlingt gigantische Mengen an Wasser, Chemikalien und Erdöl für synthetische Fasern. Riesige Mengen unverkaufter Neuware landen jedes Jahr ungetragen auf Müllkippen in der Wüste oder in Verbrennungsanlagen.", correctAnswer: "A" },
            { id: 2, text: "Anstatt gut erhaltene Hosen oder Jacken im Schrank verstauben zu lassen, treffen sich modebewusste Menschen in Bars oder Gemeindezentren. Jeder bringt fünf bis zehn saubere Kleidungsstücke mit und darf sich dafür kostenlos andere Teile aussuchen. Das schont den Geldbeutel und vermeidet Müll.", correctAnswer: "B" },
            { id: 3, text: "Ingenieure entwickeln Verfahren, um Altkleider aus Mischgeweben chemisch in ihre molekularen Grundbausteine zu zerlegen. Daraus entstehen hochwertige recycelte Fasern, die erneut zu reißfesten Garnen versponnen werden können, was den Bedarf an neuer Baumwolle oder Neupolyester massiv senkt.", correctAnswer: "C" },
            { id: 4, text: "Abgetragene Jeans werden zu trendigen Rucksäcken, alte Segeltücher zu wasserdichten Umhängetaschen: Kreative Schneider verwandeln scheinbaren Abfall in einzigartige Unikate. Dieser Prozess wertet das Ausgangsmaterial auf und setzt ein bewusstes Statement gegen industrielle Massenware.", correctAnswer: "D" },
            { id: 5, text: "Smoking für die Gala oder Brautkleid für den schönsten Tag im Leben: Viele Kleidungsstücke werden im Schnitt nur ein einziges Mal getragen. Online-Plattformen und Boutiquen verleihen hochwertige Designermode gegen eine Leihgebühr inklusive Reinigung, was Ressourcen schont und Schränke entlastet.", correctAnswer: "E" }
          ]
        },
        {
          part: "Teil 2",
          title: "Leseverstehen (Detailverstehen)",
          description: "Lesen Sie den folgenden Text und wählen Sie bei den Aufgaben 6-10 die richtige Antwort (a, b oder c).",
          passage: "Social Media und Kaufrausch: Der Einfluss von Influencern\n\nSoziale Netzwerke wie Instagram und TikTok haben das Konsumverhalten insbesondere von Jugendlichen und jungen Erwachsenen revolutioniert. Klassische Werbeformate wie Fernsehspots oder Plakate erreichen die junge Generation kaum noch. An ihre Stelle sind sogenannte Influencer getreten – digitale Meinungsführer, die ihren Followern täglich Einblicke in ihr Privatleben gewähren und dabei geschickt Produkte präsentieren.\n\nDie psychologische Wirkung dieses Marketings ist enorm. Da Influencer als nahbar, authentisch und wie 'gute Freunde' wahrgenommen werden, ist das Vertrauen in ihre Kaufempfehlungen ungleich höher als in traditionelle Werbespots. Hinzu kommt der Mechanismus der künstlichen Verknappung: Rabattcodes, die angeblich 'nur heute' gültig sind, und limitierte Sondereditionen erzeugen einen starken Kaufdruck (FOMO – Fear of Missing Out).\n\nVerbraucherschützer warnen vor den gravierenden Folgen dieser Dauerbeschallung. Viele Jugendliche verlieren den Überblick über ihre Ausgaben, kaufen Produkte, die sie eigentlich nicht benötigen, und verschulden sich durch 'Buy-now-pay-later'-Zahlungsdienste schon in jungen Jahren. Experten fordern daher mehr Medienkompetenz in Lehrplänen und eine strengere Kennzeichnungspflicht für bezahlte Kooperationen.",
          questions: [
            { id: 6, question: "Warum erreichen klassische Werbeformen junge Menschen kaum noch?", options: [{ id: "a", text: "Weil traditionelle Werbung gesetzlich verboten wurde." }, { id: "b", text: "Weil sich der Medienkonsum auf soziale Plattformen verlagert hat." }, { id: "c", text: "Weil Jugendliche über keinerlei Taschengeld mehr verfügen." }], correctAnswer: "b" },
            { id: 7, question: "Warum wirken Empfehlungen von Influencern so verkaufsfördernd?", options: [{ id: "a", text: "Weil Influencer als vertrauenswürdig und wie Freunde wahrgenommen werden." }, { id: "b", text: "Weil alle beworbenen Produkte vom Staat geprüft wurden." }, { id: "c", text: "Weil die Produkte in Geschäften überhaupt nicht erhältlich sind." }], correctAnswer: "a" },
            { id: 8, question: "Welche Strategie nutzen Influencer, um Kaufdruck zu erzeugen?", options: [{ id: "a", text: "Sie drohen mit der Löschung ihrer Benutzerkonten." }, { id: "b", text: "Sie verwenden zeitlich befristete Rabattcodes und limitierte Editionen." }, { id: "c", text: "Sie verschenken alle Produkte bedingungslos an jeden Follower." }], correctAnswer: "b" },
            { id: 9, question: "Welche Gefahr sehen Verbraucherschützer bei jungen Käufern?", options: [{ id: "a", text: "Dass Jugendliche ihre Smartphones komplett abschalten." }, { id: "b", text: "Finanzielle Überschuldung durch unüberlegte Spontankäufe auf Raten." }, { id: "c", text: "Dass junge Menschen überhaupt keine Markenkleidung mehr tragen." }], correctAnswer: "b" },
            { id: 10, question: "Welche Gegenmaßnahme fordern Bildungsexperten?", options: [{ id: "a", text: "Die Vermittlung von Medienkompetenz und strikte Werbekennzeichnung." }, { id: "b", text: "Ein generelles Internetverbot für Jugendliche unter 18 Jahren." }, { id: "c", text: "Die Abschaffung des bargeldlosen Zahlungsverkehrs an Schulen." }], correctAnswer: "a" }
          ]
        },
        {
          part: "Teil 3",
          title: "Selektives Lesen (Zuordnung)",
          description: "Lesen Sie die Situationen (11-20) und die Anzeigen (A-L). Finden Sie für jede Situation die passende Anzeige. Für eine Situation gibt es keine passende Anzeige. Kennzeichnen Sie diese mit einem 'X'.",
          options: [
            { id: "A", text: "Sprachakademie Nord - Deutschkurse für Beruf und Alltag. Niveau B2 und C1 mit telc-Prüfungsvorbereitung." },
            { id: "B", text: "Elektro-Fachbetrieb Watt - Installation von Wallboxen für E-Autos, Smart-Home-Systemen und Photovoltaik-Speichern." },
            { id: "C", text: "Hundepension Sonnenschein - Große Freilaufwiesen, beheizte Schlafplätze und qualifizierte Betreuung für Hunde." },
            { id: "D", text: "Möbel-Restaurierung Antik - Fachgerechte Aufarbeitung alter Holzmöbel, Schellackpolitur und Polsterarbeiten." },
            { id: "E", text: "Bio-Imkerei Honigtraum - Führungen für Schulklassen, Bienenpatenschaften und Verkauf von Sortenhonig." },
            { id: "F", text: "Eventlocation Schlossberg - Romantische Räumlichkeiten für Hochzeiten und Jubiläen bis 120 Personen mit Park." },
            { id: "G", text: "Buchhaltungsbüro Ziffer - Laufende Lohn- und Finanzbuchhaltung für Handwerksbetriebe und Freiberufler." },
            { id: "H", text: "Segelschule Wind & Meer - Segelkurse für Kinder und Erwachsene. Bootsverleih und Praxistraining an Wochenenden." },
            { id: "I", text: "Fahrrad-Verleih City-Bike - E-Bikes, Lastenräder und Kindersitze für Touren in der Region. Lieferservice zum Hotel." },
            { id: "J", text: "Schlüsseldienst Express - Schnelle Türöffnungen rund um die Uhr. Schlosswechsel und Sicherheitsberatung." },
            { id: "K", text: "Physiotherapie Beweglich - Krankengymnastik, manuelle Therapie und Lymphdrainage. Hausbesuche möglich." },
            { id: "L", text: "Kochschule Aromawelt - Thailändische und indische Kochkurse in modernen Küchen. Termine am Wochenende." },
            { id: "X", text: "Für diese Situation gibt es keine passende Anzeige (X)" }
          ],
          items: [
            { id: 11, situation: "Ein ausländischer Ingenieur möchte sich gezielt auf die telc B2 Deutschprüfung vorbereiten.", correctAnswer: "A" },
            { id: 12, situation: "Ein E-Auto-Besitzer sucht einen Elektriker, der ihm eine Ladestation in der Garage installiert.", correctAnswer: "B" },
            { id: 13, situation: "Ein Hundehalter sucht für seinen Urlaub einen Pensionsplatz mit Auslauf für seinen Vierbeiner.", correctAnswer: "C" },
            { id: 14, situation: "Jemand hat einen antiken Esstisch von den Großeltern geerbt und möchte ihn fachmännisch restaurieren lassen.", correctAnswer: "D" },
            { id: 15, situation: "Eine Lehrerin möchte mit ihrer 6. Klasse einen Imker besuchen und mehr über Bienenhaltung lernen.", correctAnswer: "E" },
            { id: 16, situation: "Ein Brautpaar sucht einen festlichen Festsaal mit Garten für eine Hochzeitsfeier mit 100 Gästen.", correctAnswer: "F" },
            { id: 17, situation: "Ein selbstständiger Tischler möchte seine monatliche Lohnabrechnung an ein externes Büro abgeben.", correctAnswer: "G" },
            { id: 18, situation: "Touristen möchten für einen Tagesausflug am Fluss zwei hochwertige E-Bikes mit Kindersitz mieten.", correctAnswer: "I" },
            { id: 19, situation: "Ein Patient nach einer Knieoperation benötigt Krankengymnastik bei sich zu Hause.", correctAnswer: "K" },
            { id: 20, situation: "Jemand möchte einen professionellen Pilotenschein für Hubschrauber erwerben.", correctAnswer: "X" }
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
          title: "Rekonstruktion von Texten / Zuordnung von Überschriften",
          description: "Lesen Sie die fünf Texte (1-5) und entscheiden Sie, welche Überschrift (A-J) am besten zu welchem Text passt. Es gibt für jeden Text nur eine passende Überschrift. Fünf Überschriften bleiben übrig.",
          options: [
            { id: "A", text: "Moorschutz als unverzichtbarer Baustein im Klimaschutz" },
            { id: "B", text: "Renaturierung von Flüssen schafft Schutz vor Hochwasser" },
            { id: "C", text: "Waldsterben in den Mittelgebirgen: Ursachen und Folgen" },
            { id: "D", text: "Totholz im Wald: Lebensraum für tausende Insektenarten" },
            { id: "E", text: "Invasive Tier- und Pflanzenarten verdrängen heimische Arten" },
            { id: "F", text: "Wiederaufforstung mit Mischwäldern trotzt dem Klimawandel" },
            { id: "G", text: "Nationalparks als Wirtschaftsfaktor für den Tourismus" },
            { id: "H", text: "Lichtverschmutzung gefährdet nachtaktive Tiere" },
            { id: "I", text: "Bienenweiden im Siedlungsraum: Hilfe für Wildbienen" },
            { id: "J", text: "Gewässerverschmutzung durch Düngemittel aus der Landwirtschaft" }
          ],
          items: [
            { id: 1, text: "Obwohl Moore weltweit nur etwa drei Prozent der Landfläche bedecken, speichern sie doppelt so viel Kohlenstoff wie alle Wälder der Erde zusammen. Durch die Wiedervernässung trockengelegter Moorflächen wird verhindert, dass gebundenes CO2 in die Atmosphäre entweicht, während gleichzeitig seltene Vögel und Amphibien neuen Lebensraum finden.", correctAnswer: "A" },
            { id: 2, text: "Begradigte Flussläufe wurden jahrzehntelang durch Betonmauern eingeengt, was bei Starkregen zu verheerenden Flutwellen führte. Durch den Rückbau von Deichen und das Anlegen von breiten Auenwäldern erhält der Fluss wieder Raum, sich gefahrlos auszubreiten, was das Hochwasserrisiko flussabwärts enorm verringert.", correctAnswer: "B" },
            { id: 3, text: "Monokulturen aus Fichten haben sich in trockenen Sommern als extrem anfällig für Schädlingsbefall erwiesen. Forstwirte setzen deshalb auf den Umbau zu artenreichen Mischwäldern aus Eichen, Buchen und Tannen. Diese tiefwurzelnden Baumarten widerstehen Stürmen besser und halten den Waldboden feucht.", correctAnswer: "F" },
            { id: 4, text: "Umgestürzte Baumstämme und morsche Äste wurden früher als unordentlich aus dem Wald entfernt. Heute wissen Ökologen, dass zerfallendes Holz das Fundament des Waldökosystems ist. Es bietet Nahrung und Nistplätze für hunderte Käferarten, seltene Pilze und Vögel wie den Specht.", correctAnswer: "D" },
            { id: 5, text: "Künstliche Straßenbeleuchtung und Leuchtreklamen erhellen die Nacht in Ballungsräumen immer stärker. Diese Helligkeit irritiert Zugvögel bei der Orientierung und lockt Millionen nachtaktiver Insekten an Straßenlaternen, wo sie vor Erschöpfung sterben, was empfindliche Nahrungsketten unterbricht.", correctAnswer: "H" }
          ]
        },
        {
          part: "Teil 2",
          title: "Leseverstehen (Detailverstehen)",
          description: "Lesen Sie den folgenden Text und wählen Sie bei den Aufgaben 6-10 die richtige Antwort (a, b oder c).",
          passage: "Finanzbildung für die Generation Z: Altersvorsorge neu gedacht\n\nFrüher verließen sich junge Berufseinsteiger auf die gesetzliche Rente und klassische Sparbücher. Doch im Zeitalter des demografischen Wandels und langanhaltender Niedrigzinsphasen ist der jüngeren Generation bewusst, dass die staatliche Rente allein im Alter kaum für einen auskömmlichen Lebensstandard reichen wird. Gleichzeitig erlebt die private Vermögensbildung durch Smartphone-Apps eine ungeahnte Demokratisierung.\n\nSogenannte Neo-Broker ermöglichen es heute jedem, schon ab monatlich 10 oder 25 Euro weltweit gestreute Aktien-ETFs im Sparplan zu kaufen – ganz ohne teure Bankberater oder hohe Depotgebühren. Finanz-Influencer auf YouTube und Podcasts vermitteln komplexes Wirtschaftswissen in verständlicher Sprache und nehmen jungen Menschen die Berührungsängste vor dem Aktienmarkt.\n\nVerbraucherschützer begrüßen das gestiegene Interesse an Finanzen, mahnen jedoch zur Vorsicht. Auf Plattformen wie TikTok kursieren oft fragwürdige Ratschläge zu hochspekulativen Krypto-Währungen oder riskantem Daytrading mit dem Versprechen auf schnellen Reichtum. Eine solide Altersvorsorge erfordert jedoch langfristiges Denken, Disziplin und das Durchhalten bei unvermeidlichen Börsenschwankungen.",
          questions: [
            { id: 6, question: "Warum sorgt sich die junge Generation um ihre spätere Rente?", options: [{ id: "a", text: "Weil das Renteneintrittsalter gesetzlich auf 50 Jahre gesenkt wurde." }, { id: "b", text: "Weil die staatliche Rente wegen des demografischen Wandels künftig nicht ausreichen dürfte." }, { id: "c", text: "Weil Banken das Führen von Sparkonten verboten haben." }], correctAnswer: "b" },
            { id: 7, question: "Welche Neuerung haben Smartphone-Broker für Kleinanleger gebracht?", options: [{ id: "a", text: "Man kann bereits mit sehr kleinen Beträgen unkompliziert an den Kapitalmärkten investieren." }, { id: "b", text: "Sie garantieren eine feste staatliche Rendite von 10 Prozent." }, { id: "c", text: "Käufe von Aktien sind ausschließlich älteren Menschen gestattet." }], correctAnswer: "a" },
            { id: 8, question: "Welche Rolle spielen Finanz-Influencer im Internet?", options: [{ id: "a", text: "Sie verwalten das Geld der Nutzer direkt auf ihren Privatkonten." }, { id: "b", text: "Sie bereiten Wirtschaftsthemen verständlich auf und bauen Ängste vor Aktien ab." }, { id: "c", text: "Sie verkaufen ausschließlich gedruckte Fachbücher." }], correctAnswer: "b" },
            { id: 9, question: "Wovor warnen Verbraucherschützer in den sozialen Medien?", options: [{ id: "a", text: "Vor dem Kauf von Schulbüchern über Wirtschaft." }, { id: "b", text: "Vor unseriösen Heilsversprechen zu riskanten Spekulationen und Kryptowährungen." }, { id: "c", text: "Dass Aktien langfristig immer ihren gesamten Wert verlieren." }], correctAnswer: "b" },
            { id: 10, question: "Was zeichnet laut Text eine solide private Altersvorsorge aus?", options: [{ id: "a", text: "Tägliches Kaufen und Verkaufen von Aktien im Minutentakt." }, { id: "b", text: "Ein langfristiger Anlagehorizont und Durchhaltevermögen bei Schwankungen." }, { id: "c", text: "Die ausschließliche Anlage des gesamten Vermögens in Goldmünzen." }], correctAnswer: "b" }
          ]
        },
        {
          part: "Teil 3",
          title: "Selektives Lesen (Zuordnung)",
          description: "Lesen Sie die Situationen (11-20) und die Anzeigen (A-L). Finden Sie für jede Situation die passende Anzeige. Für eine Situation gibt es keine passende Anzeige. Kennzeichnen Sie diese mit einem 'X'.",
          options: [
            { id: "A", text: "Sprachschule Dialog - Deutsch als Fremdsprache für den Beruf. Kleingruppen mit max. 8 Teilnehmern, auch online." },
            { id: "B", text: "Solaranlagen Express - Photovoltaik-Komplettsysteme mit Batteriespeicher für Ein- und Mehrfamilienhäuser." },
            { id: "C", text: "Haustierbetreuung Pfötchen - Liebevolle Tages- und Urlaubsbetreuung für Katzen und Kleintiere bei Ihnen vor Ort." },
            { id: "D", text: "Kanzlei Dr. Hoffmann - Fachanwältin für Familienrecht: Scheidung, Unterhalt, Sorgerecht und Eheverträge." },
            { id: "E", text: "Biokiste Landluft - Wöchentliche Lieferung von frischem Obst, Gemüse, Milch und Brot aus 100% ökologischem Anbau." },
            { id: "F", text: "Malerfachbetrieb Meisterhand - Maler-, Lackier- und Tapezierarbeiten sowie Schimmelbeseitigung mit Garantie." },
            { id: "G", text: "Schlüsseldienst 24h - Notöffnungen von Haus- und Autotüren rund um die Uhr zu Festpreisen." },
            { id: "H", text: "Personal Trainer Fit & Vital - Individuelle Trainingspläne und Ernährungsberatung zur Gewichtsreduktion." },
            { id: "I", text: "Computer-Notdienst Byte - Reparatur von PCs, Laptops und Druckern sowie Virenentfernung vor Ort." },
            { id: "J", text: "Klettergarten Waldabenteuer - Hochseilparcours für Kinder und Erwachsene. Teamevents und Geburtstagsfeiern." },
            { id: "K", text: "Nachhilfeinstitut Schlau - Einzelunterricht in Englisch, Französisch und Deutsch für alle Klassenstufen." },
            { id: "L", text: "Party-Catering Delikato - Kalte und warme Buffets für Geburtstage, Hochzeiten und Firmenfeiern ab 15 Personen." },
            { id: "X", text: "Für diese Situation gibt es keine passende Anzeige (X)" }
          ],
          items: [
            { id: 11, situation: "Ein spanischer Ingenieur möchte seine Deutschkenntnisse in einer kleinen Gruppe online vertiefen.", correctAnswer: "A" },
            { id: 12, situation: "Ein Hausbesitzer sucht einen Anbieter, der ihm eine Solaranlage inklusive Stromspeicher montiert.", correctAnswer: "B" },
            { id: 13, situation: "Eine Katzenbesitzerin fährt für eine Woche auf Geschäftsreise und sucht eine Betreuung für ihre Katze zu Hause.", correctAnswer: "C" },
            { id: 14, situation: "Ein Ehepaar möchte sich einvernehmlich scheiden lassen und sucht eine erfahrene Rechtsanwältin für Familienrecht.", correctAnswer: "D" },
            { id: 15, situation: "Eine Familie möchte wöchentlich mit regionalen Bio-Lebensmitteln direkt an die Haustür beliefert werden.", correctAnswer: "E" },
            { id: 16, situation: "Ein Mieter hat Schimmel an der Schlafzimmerwand und sucht einen Fachbetrieb zur nachhaltigen Beseitigung.", correctAnswer: "F" },
            { id: 17, situation: "Jemand hat am Sonntag seinen Hausschlüssel im Flur vergessen und braucht eine schnelle Türöffnung.", correctAnswer: "G" },
            { id: 18, situation: "Ein Berufstätiger sucht einen privaten Fitnesstrainer, der ihn beim Abnehmen und Sport im Alltag unterstützt.", correctAnswer: "H" },
            { id: 19, situation: "Der Laptop einer Studentin ist von einem Computervirus befallen und fährt nicht mehr hoch.", correctAnswer: "I" },
            { id: 20, situation: "Ein Gourmet sucht ein Restaurant, das Menüs mit seltenem Trüffel und Kaviar anbietet.", correctAnswer: "X" }
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
          title: "Rekonstruktion von Texten / Zuordnung von Überschriften",
          description: "Lesen Sie die fünf Texte (1-5) und entscheiden Sie, welche Überschrift (A-J) am besten zu welchem Text passt. Es gibt für jeden Text nur eine passende Überschrift. Fünf Überschriften bleiben übrig.",
          options: [
            { id: "A", text: "Internationale Fachkräfte: Bürokratie bremst Zuwanderung" },
            { id: "B", text: "Willkommenslotsen unterstützen Betriebe bei der Integration" },
            { id: "C", text: "Duale Ausbildung: Beliebtes Modell auch für ausländische Bewerber" },
            { id: "D", text: "Sprachbarrieren am Arbeitsplatz durch interne Kurse abbauen" },
            { id: "E", text: "Anerkennung ausländischer Berufsabschlüsse wird digitalisiert" },
            { id: "F", text: "Gehaltsunterschiede zwischen In- und Ausland verringern sich" },
            { id: "G", text: "Fachkräftemangel zwingt Unternehmen zur Reduzierung von Öffnungszeiten" },
            { id: "H", text: "Rückkehrwillige Auswanderer beleben den Arbeitsmarkt" },
            { id: "I", text: "Mentoring-Programme im Betrieb erleichtern den Berufseinstieg" },
            { id: "J", text: "Wohnraummangel erschwert die Anwerbung von Mitarbeitern" }
          ],
          items: [
            { id: 1, text: "Viele mittelständische Betriebe suchen händeringend nach IT-Spezialisten, Pflegekräften und Handwerkern aus dem Ausland. Doch monatelange Wartezeiten auf Visa-Termine bei Botschaften und komplizierte behördliche Dokumentenprüfungen führen oft dazu, dass qualifizierte Bewerber das Interesse verlieren und in andere Länder abwandern.", correctAnswer: "A" },
            { id: 2, text: "Um neuen Mitarbeitern aus dem Ausland das Einleben zu erleichtern, stellen viele Firmen erfahrene Kollegen als persönliche Begleiter zur Seite. Diese unterstützen nicht nur bei der fachlichen Einarbeitung, sondern helfen auch bei Behördengängen, der Wohnungssuche und der Anmeldung von Kindern in Schulen.", correctAnswer: "I" },
            { id: 3, text: "Die Kombination aus betrieblicher Praxis und theoretischem Berufsschulunterricht spricht immer mehr junge Menschen aus europäischen Nachbarländern an. Unternehmen bieten im Vorfeld oft bezahlte Praktika und begleitende Sprachkurse an, um die Auszubildenden erfolgreich zum Abschluss zu führen.", correctAnswer: "C" },
            { id: 4, text: "Fachliche Kompetenz ist vorhanden, doch im Arbeitsalltag fehlen oft branchenspezifische Fachbegriffe oder der sichere Austausch mit Kunden. Immer mehr Arbeitgeber finanzieren daher berufsbezogene Deutschkurse direkt im Unternehmen während der regulären Arbeitszeit.", correctAnswer: "D" },
            { id: 5, text: "Bisher mussten ausländische Fachkräfte ihre Zeugnisse und Diplome oft über Monate per Post bei verschiedenen Landesbehörden prüfen lassen. Ein neues bundesweites Online-Portal ermöglicht nun die vollständige digitale Einreichung und beschleunigt die Gleichwertigkeitsprüfung erheblich.", correctAnswer: "E" }
          ]
        },
        {
          part: "Teil 2",
          title: "Leseverstehen (Detailverstehen)",
          description: "Lesen Sie den folgenden Text und wählen Sie bei den Aufgaben 6-10 die richtige Antwort (a, b oder c).",
          passage: "Die Kultur des Scheiterns: Warum Fehler Unternehmen stark machen\n\nIn vielen traditionsbewussten Unternehmen herrscht noch immer eine Kultur der Fehlervermeidung: Wer einen Fehler macht, muss mit Kritik oder gar beruflichen Konsequenzen rechnen. Das Resultat ist oft ein Klima der Vorsicht, in dem Mitarbeiter keine Risiken eingehen und innovative Ideen gar nicht erst vorschlagen. Doch in der dynamischen Wirtschaftswelt setzt sich zunehmend ein Umdenken durch.\n\nModerne Führungskonzepte betonen, dass Innovation ohne das Risiko des Scheiterns schlicht unmöglich ist. Wer Pionierarbeit leistet – etwa bei der Entwicklung neuer digitaler Produkte –, betritt Neuland und muss Hypothesen am Markt testen. Wichtig ist dabei nicht, Fehler um jeden Preis zu verhindern, sondern frühzeitig aus ihnen zu lernen. Agiles Projektmanagement setzt daher auf kurze Entwicklungszyklen: Wenn eine Idee nicht funktioniert, wird das Projekt schnell beendet, bevor hohe Kosten entstehen (sogenanntes 'Fast Failing').\n\nUm eine offene Fehlerkultur zu etablieren, braucht es vor allem psychologische Sicherheit im Team. Führungskräfte müssen mit gutem Beispiel vorangehen, eigene Fehlentscheidungen transparent ansprechen und Misserfolge in konstruktiven Retrospektiven analysieren. Nur wenn Fehler als wertvolle Lernchancen begriffen werden, entsteht der nötige Freiraum für echten Fortschritt.",
          questions: [
            { id: 6, question: "Welche Folge hat eine Kultur der strikten Fehlervermeidung in Unternehmen?", options: [{ id: "a", text: "Mitarbeiter arbeiten viel kreativer und entwickeln mehr Patente." }, { id: "b", text: "Angestellte vermeiden Risiken und halten innovative Ideen zurück." }, { id: "c", text: "Die Unternehmensgewinne steigen in allen Abteilungen kontinuierlich an." }], correctAnswer: "b" },
            { id: 7, question: "Was ist laut modernen Führungskonzepten für Innovationen unverzichtbar?", options: [{ id: "a", text: "Die strikte Einhaltung jahrzehntealter Arbeitsabläufe." }, { id: "b", text: "Die Bereitschaft, kalkulierte Risiken einzugehen und Neuland zu betreten." }, { id: "c", text: "Die Entlassung von Mitarbeitern nach dem ersten Fehlversuch." }], correctAnswer: "b" },
            { id: 8, question: "Was versteht man unter dem Begriff 'Fast Failing' im agilen Arbeiten?", options: [{ id: "a", text: "Das absichtliche Zerstören von Firmencomputern." }, { id: "b", text: "Das frühzeitige Beenden nicht funktionierender Ideen zur Kostenminimierung." }, { id: "c", text: "Das Verschweigen von Fehlern vor dem Management." }], correctAnswer: "b" },
            { id: 9, question: "Was bedeutet 'psychologische Sicherheit' für ein Team?", options: [{ id: "a", text: "Dass Mitarbeiter ohne Angst vor Bestrafung offen über Probleme sprechen können." }, { id: "b", text: "Dass alle Angestellten täglich von einem Therapeuten betreut werden." }, { id: "c", text: "Dass im Büro niemals Meinungsverschiedenheiten entstehen dürfen." }], correctAnswer: "a" },
            { id: 10, question: "Welche Vorbildfunktion haben Führungskräfte bei einer offenen Fehlerkultur?", options: [{ id: "a", text: "Sie dürfen selbst niemals zugeben, wenn sie sich geirrt haben." }, { id: "b", text: "Sie sprechen transparent über eigene Fehler und leiten Lernprozesse an." }, { id: "c", text: "Sie delegieren alle unangenehmen Aufgaben an Praktikanten." }], correctAnswer: "b" }
          ]
        },
        {
          part: "Teil 3",
          title: "Selektives Lesen (Zuordnung)",
          description: "Lesen Sie die Situationen (11-20) und die Anzeigen (A-L). Finden Sie für jede Situation die passende Anzeige. Für eine Situation gibt es keine passende Anzeige. Kennzeichnen Sie diese mit einem 'X'.",
          options: [
            { id: "A", text: "Sprachinstitut Global - Deutsch Intensivkurse C1 für akademische Berufe. Anerkanntes Prüfungszentrum." },
            { id: "B", text: "Solarzentrum Süd - Beratung, Wirtschaftlichkeitsberechnung und Montage von Photovoltaik und Speichern." },
            { id: "C", text: "Hundeschule Pfotenteam - Welpenspielgruppen, Alltagstraining und Einzeltraining bei Problemverhalten." },
            { id: "D", text: "Rechtsanwälte Arbeitsrecht - Vertretung bei Kündigungsklagen, Aufhebungsverträgen und Abfindungen." },
            { id: "E", text: "Bio-Lieferservice Frischekiste - Täglich frisches Obst, Gemüse und Backwaren aus der Region direkt ins Büro." },
            { id: "F", text: "Malerwerkstatt Kreativ - Hochwertige Wandgestaltung, Spachteltechniken und fugenlose Bäder." },
            { id: "G", text: "Schlüsseldienst Sicher24 - 24h-Türöffnung, Einbruchschutzberatung und Montage von Schließanlagen." },
            { id: "H", text: "Tanzschule StepByStep - Salsa-, Tango- und Swingkurse für alle Altersgruppen am Wochenende." },
            { id: "I", text: "EDV-Service RepCom - Schnelle Reparatur von PCs, Notebooks und Displays aller bekannten Marken." },
            { id: "J", text: "Hochseilgarten Abenteuerwald - Outdoor-Kletterparcours für Betriebsausflüge, Vereine und Kindergeburtstage." },
            { id: "K", text: "Steuerberatung Kanzlei Plus - Umfassende Steuerberatung für GmbHs, Freiberufler und Privatpersonen." },
            { id: "L", text: "Event-Catering Gaumenfreude - Exklusives Bio-Catering für Familienfeiern, Hochzeiten und Firmenjubiläen." },
            { id: "X", text: "Für diese Situation gibt es keine passende Anzeige (X)" }
          ],
          items: [
            { id: 11, situation: "Ein ausländischer Wissenschaftler möchte seine Deutschkenntnisse auf C1-Niveau für die universitäre Forschung ausbauen.", correctAnswer: "A" },
            { id: 12, situation: "Ein Hausbesitzer möchte wissen, ob sich eine Solaranlage auf seinem Westdach wirtschaftlich rechnet.", correctAnswer: "B" },
            { id: 13, situation: "Der Besitzer eines jungen Hundes sucht eine professionelle Gruppe zur Sozialisierung seines Welpen.", correctAnswer: "C" },
            { id: 14, situation: "Ein Angestellter hat eine fristlose Kündigung erhalten und möchte innerhalb von drei Wochen Kündigungsschutzklage einreichen.", correctAnswer: "D" },
            { id: 15, situation: "Eine Firma möchte ihren Mitarbeitern zweimal pro Woche frisches Bio-Obst in die Kaffeeküche liefern lassen.", correctAnswer: "E" },
            { id: 16, situation: "Jemand möchte sein Badezimmer mit einer modernen, fugenlosen Spachteltechnik renovieren lassen.", correctAnswer: "F" },
            { id: 17, situation: "Eine Familie möchte ihr Eigenheim durch moderne Sicherheitsschlösser gegen Einbrüche absichern lassen.", correctAnswer: "G" },
            { id: 18, situation: "Ein Student möchte am Wochenende Salsa und lateinamerikanische Tänze lernen.", correctAnswer: "H" },
            { id: 19, situation: "Der Bildschirm eines Laptops ist nach einem Sturz gebrochen und muss kurzfristig ausgetauscht werden.", correctAnswer: "I" },
            { id: 20, situation: "Jemand sucht eine Ausbildung zum professionellen Rennradmechaniker für Profiteams.", correctAnswer: "X" }
          ]
        }
      ]
    }
  ];

  // Append new sets to global array
  newReadingSets.forEach(s => window.readingQuestionsSets.push(s));
})();
