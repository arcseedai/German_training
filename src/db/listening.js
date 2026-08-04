// Telc B2 Listening Comprehension (Hörverstehen) Database
window.listeningQuestionsSets = [
  // ==================== TEST SET 1 ====================
  {
    setId: 1,
    parts: [
      {
        part: "Teil 1",
        title: "Hörverstehen (Globalverstehen)",
        description: "Sie hören fünf kurze Aussagen von verschiedenen Personen zu einem Thema. Entscheiden Sie bei den Aufgaben 41-45, ob die jeweilige Aussage Richtig oder Falsch ist. Sie hören die Aussagen nur einmal.",
        topic: "Thema: Nutzung von Smartphones an Schulen",
        items: [
          { id: 41, speaker: "Sprecher 1", audioScript: "Meiner Meinung nach haben Smartphones im Unterricht absolut nichts verloren. Sie lenken die Schüler nur ab. Ständig summt oder vibriert ein Gerät, und die Jugendlichen konzentrieren sich überhaupt nicht mehr auf das, was der Lehrer an der Tafel erklärt. Schulen sollten handyfreie Zonen sein.", statement: "Sprecher 1 fordert ein komplettes Verbot von Smartphones an Schulen.", correctAnswer: "Richtig" },
          { id: 42, speaker: "Sprecher 2", audioScript: "Man kann die Technologie doch nicht einfach ignorieren! Smartphones sind Teil unserer Lebensrealität. Wir sollten Schülern lieber beibringen, wie man diese Geräte sinnvoll für Recherchen und zum Lernen nutzt, anstatt sie einfach nur zu verbieten.", statement: "Sprecher 2 ist der Ansicht, dass Smartphones im Unterricht als Lernwerkzeug dienen sollten.", correctAnswer: "Richtig" },
          { id: 43, speaker: "Sprecher 3", audioScript: "Klar, in den Pausen ist es okay, wenn die Kids auf ihr Handy schauen, um Musik zu hören oder ihren Eltern eine Nachricht zu schreiben. Aber im Klassenzimmer während des Unterrichts? Nein, das geht gar nicht. Da muss das Handy in der Tasche bleiben und stummgeschaltet sein.", statement: "Sprecher 3 möchte, dass Handys auch in den Schulpausen verboten werden.", correctAnswer: "Falsch" },
          { id: 44, speaker: "Sprecher 4", audioScript: "Bei uns an der Schule gibt es strenge Regeln, aber niemand hält sich daran. Die Lehrer haben gar keine Zeit, ständig zu kontrollieren, ob jemand unter dem Tisch chattet. Ein Verbot nützt also überhaupt nichts, weil es in der Praxis gar nicht kontrolliert werden kann.", statement: "Sprecher 4 findet Verbote sinnvoll, weil sie leicht durchzusetzen sind.", correctAnswer: "Falsch" },
          { id: 45, speaker: "Sprecher 5", audioScript: "Meine Kinder nutzen an ihrer Schule spezielle Lern-Apps auf dem Tablet. Das finde ich super. Aber das private Smartphone lenkt einfach zu sehr ab, besonders wegen der sozialen Medien. Deshalb bin ich dafür, private Geräte im Schulgebäude komplett zu verbieten.", statement: "Sprecher 5 befürwortet die Nutzung von Schul-Tablets, ist aber gegen private Smartphones im Unterricht.", correctAnswer: "Richtig" }
        ]
      },
      {
        part: "Teil 2",
        title: "Hörverstehen (Detailverstehen)",
        description: "Sie hören ein Gespräch oder Interview. Entscheiden Sie bei den Aufgaben 46-55, ob die jeweilige Aussage Richtig oder Falsch ist. Sie hören den Text nur einmal.",
        topic: "Interview: Nachhaltiges Reisen und Ökotourismus",
        audioScript: "Moderator: Herzlich willkommen zu unserer Sendung 'Grüner Leben'. Heute im Studio zu Gast ist Dr. Claudia Weber, Expertin für Tourismusforschung. Frau Dr. Weber, das Thema nachhaltiges Reisen wird immer beliebter. Aber was genau versteht man eigentlich unter Ökotourismus?\n\nDr. Weber: Guten Tag. Ökotourismus bedeutet im Wesentlichen, so zu reisen, dass die Natur geschont und die lokale Bevölkerung vor Ort wirtschaftlich unterstützt wird. Es geht nicht darum, gar nicht mehr zu verreisen, sondern bewusster zu wählen. Zum Beispiel sollte man Flüge vermeiden, wo es geht, und stattdessen die Bahn nutzen.\n\nModerator: Viele Menschen argumentieren aber, dass Bahnreisen viel teurer und unzuverlässiger sind als Flüge. Ist Umweltschutz also ein Luxus?\n\nDr. Weber: Das stimmt leider teilweise, wenn man nur auf den Ticketpreis schaut. Aber wir müssen langfristig denken. Außerdem kann man auch am Urlaubsort viel sparen, indem man in lokalen Pensionen statt in riesigen Hotelketten übernachtet und regionale Produkte kauft. Das schont den Geldbeutel und hilft den Menschen vor Ort direkt.\n\nModerator: Ein großes Problem ist ja auch der sogenannte Massentourismus an beliebten Orten wie Venedig oder Mallorca. Haben Sie da einen Tipp?\n\nDr. Weber: Ja, absolut. Man sollte antizyklisch reisen, also außerhalb der Hauptsaison. Oder man wählt Reiseziele, die noch nicht vom Massentourismus überlaufen sind. Deutschland und die Nachbarländer bieten wunderschöne Ecken, die kaum jemand auf dem Schirm hat. Man muss nicht immer elf Stunden im Flugzeug sitzen, um ein Abenteuer zu erleben.\n\nModerator: Frau Dr. Weber, vielen Dank für diese Ratschläge.",
        items: [
          { id: 46, statement: "Der heutige Gast in der Sendung ist eine Expertin für Tourismusforschung.", correctAnswer: "Richtig" },
          { id: 47, statement: "Ökotourismus soll vor allem die lokale Bevölkerung unterstützen und die Natur schonen.", correctAnswer: "Richtig" },
          { id: 48, statement: "Dr. Weber empfiehlt, Kurzstreckenreisen vorzugsweise mit dem Flugzeug zu machen.", correctAnswer: "Falsch" },
          { id: 49, statement: "Der Moderator gibt zu bedenken, dass Zugreisen oft teurer und unzuverlässiger als Flüge sind.", correctAnswer: "Richtig" },
          { id: 50, statement: "Um im Urlaub Geld zu sparen, schlägt die Expertin vor, in großen Hotelketten zu übernachten.", correctAnswer: "Falsch" },
          { id: 51, statement: "Ein großes Problem an bekannten Urlaubsorten ist der extreme Massentourismus.", correctAnswer: "Richtig" },
          { id: 52, statement: "Unter 'antizyklisch reisen' versteht man das Verreisen genau zur Hauptsaison.", correctAnswer: "Falsch" },
          { id: 53, statement: "Dr. Weber schlägt vor, auch in Deutschland und Nachbarländer Urlaub zu machen.", correctAnswer: "Richtig" },
          { id: 54, statement: "Laut Dr. Weber muss man für ein Abenteuer nicht unbedingt eine lange Flugreise machen.", correctAnswer: "Richtig" },
          { id: 55, statement: "Die Expertin empfiehlt, beim Buchen nur auf den aktuellen Ticketpreis zu schauen.", correctAnswer: "Falsch" }
        ]
      },
      {
        part: "Teil 3",
        title: "Hörverstehen (Selektives Verstehen)",
        description: "Sie hören fünf kurze Ansagen (z.B. im Radio oder an Bahnhöfen). Entscheiden Sie bei den Aufgaben 56-60, ob die Aussage Richtig oder Falsch ist. Sie hören die Ansagen nur einmal.",
        items: [
          { id: 56, speaker: "Ansage 1", audioScript: "Meine Damen und Herren an Gleis 11. Bitte beachten Sie: Der Regionalexpress RE 4 nach Stuttgart Hauptbahnhof, Abfahrt 16:30 Uhr, fällt heute wegen einer technischen Störung am Zug komplett aus. Fahrgäste nach Stuttgart nutzen bitte die S-Bahn-Linie S1 auf Gleis 2, Abfahrt um 16:45 Uhr.", statement: "Der Regionalexpress nach Stuttgart hat heute eine erhebliche Verspätung.", correctAnswer: "Falsch" },
          { id: 57, speaker: "Ansage 2", audioScript: "Achtung an alle Besucher des Einkaufszentrums. Im Erdgeschoss wurde ein kleiner Junge im Alter von ca. vier Jahren gefunden. Er trägt eine blaue Jeans und eine rote Jacke und sucht seine Eltern. Die Eltern werden gebeten, ihren Sohn an der Information im ersten Obergeschoss abzuholen.", statement: "Die Eltern des gefundenen Kindes sollen zur Information im ersten Stock kommen.", correctAnswer: "Richtig" },
          { id: 58, speaker: "Ansage 3", audioScript: "Liebe Kunden, aufgrund des heutigen Feiertags schließen wir unser Geschäft ausnahmsweise bereits um 18:00 Uhr statt wie gewohnt um 20:00 Uhr. Wir bitten um Ihr Verständnis und wünschen Ihnen einen schönen Abend. Morgen sind wir wieder ab 8:00 Uhr für Sie da.", statement: "Das Geschäft schließt heute zwei Stunden früher als sonst.", correctAnswer: "Richtig" },
          { id: 59, speaker: "Ansage 4", audioScript: "Achtung Fahrgäste auf der U-Bahn-Linie U3. Wegen kurzfristiger Bauarbeiten an den Schienen ist der Zugverkehr zwischen den Stationen Hauptbahnhof und Westend unterbrochen. Ein Ersatzverkehr mit Bussen ist eingerichtet. Bitte planen Sie etwa 15 Minuten mehr Fahrzeit ein.", statement: "Für die gesperrte U-Bahn-Strecke gibt es keinen Ersatzverkehr.", correctAnswer: "Falsch" },
          { id: 60, speaker: "Ansage 5", audioScript: "Sehr geehrte Fluggäste des Fluges LH 180 nach Paris. Aufgrund von schlechtem Wetter am Zielflughafen verschiebt sich der Abflug um voraussichtlich eine Stunde auf 14:15 Uhr. Der Check-in und die Sicherheitskontrollen finden wie geplant statt.", statement: "Der Flug nach Paris startet wegen des Wetters erst später.", correctAnswer: "Richtig" }
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
        title: "Hörverstehen (Globalverstehen)",
        description: "Sie hören fünf kurze Aussagen von verschiedenen Personen zu einem Thema. Entscheiden Sie bei den Aufgaben 41-45, ob die jeweilige Aussage Richtig oder Falsch ist. Sie hören die Aussagen nur einmal.",
        topic: "Thema: Tempolimit auf deutschen Autobahnen",
        items: [
          { id: 41, speaker: "Sprecher 1", audioScript: "Ein generelles Tempolimit von 130 km/h auf Autobahnen ist längst überfällig. Es würde nicht nur die Zahl der schweren Unfälle drastisch reduzieren, sondern auch einen wichtigen Beitrag zum Klimaschutz leisten, weil weniger CO2 ausgstoßen wird. Fast alle anderen europäischen Länder haben das schon längst.", statement: "Sprecher 1 fordert ein Tempolimit aus Gründen der Sicherheit und des Klimaschutzes.", correctAnswer: "Richtig" },
          { id: 42, speaker: "Sprecher 2", audioScript: "Ich halte ein Tempolimit für völlig unnötig. Deutschland hat ohnehin sehr sichere Autobahnen im weltweiten Vergleich. Außerdem schränken solche Verbote die persönliche Freiheit der Autofahrer ein. Wer schnell fahren möchte, sollte das auch weiterhin tun dürfen, solange es die Verkehrslage erlaubt.", statement: "Sprecher 2 lehnt ein Tempolimit ab, weil er darin eine Einschränkung der Freiheit sieht.", correctAnswer: "Richtig" },
          { id: 43, speaker: "Sprecher 3", audioScript: "Klar, Rasen ist gefährlich. Aber bringt ein Limit wirklich so viel für die Umwelt? Die modernen Autos werden immer sauberer, und der Anteil der Autobahnen am gesamten CO2-Ausstoß ist doch relativ gering. Da sollte man lieber an anderen Stellen ansetzen, zum Beispiel beim Ausbau des Schienenverkehrs.", statement: "Sprecher 3 bezweifelt den großen ökologischen Nutzen eines Tempolimits.", correctAnswer: "Richtig" },
          { id: 44, speaker: "Sprecher 4", audioScript: "Ich fahre beruflich sehr viel auf der Autobahn und stelle fest, dass die meisten Unfälle nicht durch hohe Geschwindigkeiten entstehen, sondern durch Unachtsamkeit, zu dichtes Auffahren oder weil die Leute während der Fahrt auf ihr Handy schauen. Daran würde auch ein Tempolimit nichts ändern.", statement: "Sprecher 4 meint, dass Handynutzung und zu geringer Abstand die Hauptunfallursachen sind.", correctAnswer: "Richtig" },
          { id: 45, speaker: "Sprecher 5", audioScript: "Vielleicht wäre ein Kompromiss gut: Kein starres Limit von 130, sondern eine intelligente, digitale Verkehrsführung, die die Geschwindigkeit je nach Wetter, Stau oder Uhrzeit flexibel anpasst. Bei Regen oder starkem Verkehr ist schnelles Fahren sowieso unverantwortlich.", statement: "Sprecher 5 plädiert für ein starres, unveränderliches Tempolimit bei jedem Wetter.", correctAnswer: "Falsch" }
        ]
      },
      {
        part: "Teil 2",
        title: "Hörverstehen (Detailverstehen)",
        description: "Sie hören ein Gespräch oder Interview. Entscheiden Sie bei den Aufgaben 46-55, ob die jeweilige Aussage Richtig oder Falsch ist. Sie hören den Text nur einmal.",
        topic: "Interview: Gesunde Ernährung und Bio-Lebensmittel",
        audioScript: "Moderator: Guten Tag zu unserem wöchentlichen Magazin 'Ernährung Heute'. Wir sprechen heute mit dem Ernährungsberater Herrn Jan Becker. Herr Becker, immer mehr Menschen kaufen Bio-Produkte. Sind diese tatsächlich gesünder?\n\nBecker: Guten Tag. Die kurze Antwort lautet: Ja, aber man muss differenzieren. Bio-Lebensmittel enthalten nachweislich weniger Pestizidrückstände und oft mehr sekundäre Pflanzenstoffe. Allerdings macht allein der Stempel 'Bio' ein produkt noch nicht gesund. Ein Bio-Keks enthält immer noch viel Zucker und Fett und ist nicht gesünder als ein normaler Apfel.\n\nModerator: Bio-Produkte sind oft erheblich teurer. Lohnt sich der Aufpreis denn wirklich?\n\nBecker: Für die Umwelt lohnt es sich in jedem Fall, da die ökologische Landwirtschaft den Boden schont und die Artenvielfalt fördert. Wer Geld sparen möchte, sollte vor allem regional und saisonal einkaufen. Ein heimischer Apfel aus konventionellem Anbau in der Saison hat oft eine bessere Ökobilanz als eine Bio-Erdbeere, die im Winter aus Südamerika eingeflogen werden muss.\n\nModerator: Viele Verbraucher sind verwirrt durch die Vielzahl an verschiedenen Bio-Siegeln. Worauf sollte man achten?\n\nBecker: Das stimmt, es ist unübersichtlich. Das EU-Bio-Siegel ist der gesetzliche Mindeststandard. Deutlich strengere Kriterien bezüglich Tierhaltung und Düngung haben jedoch die Verbände wie Demeter, Bioland oder Naturland. Wer also Wert auf maximalen Umweltschutz legt, sollte auf diese Logos achten.\n\nModerator: Herr Becker, vielen Dank für das informative Gespräch.",
        items: [
          { id: 46, statement: "Jan Becker arbeitet hauptberuflich als Ernährungsberater.", correctAnswer: "Richtig" },
          { id: 47, statement: "Laut Herrn Becker sind Bio-Lebensmittel in jedem Fall kalorienarm und fettfrei.", correctAnswer: "Falsch" },
          { id: 48, statement: "Der Kauf von Bio-Produkten schont den Boden und fördert die Artenvielfalt.", correctAnswer: "Richtig" },
          { id: 49, statement: "Wer Geld sparen will, sollte vor allem regional und saisonal einkaufen.", correctAnswer: "Richtig" },
          { id: 50, statement: "Ein heimischer Apfel aus konventionellem Anbau hat im Winter oft eine schlechtere Ökobilanz als eingeflogenes Bio-Obst.", correctAnswer: "Falsch" },
          { id: 51, statement: "Die Vielzahl unterschiedlicher Bio-Siegel sorgt bei vielen Verbrauchern für Verwirrung.", correctAnswer: "Richtig" },
          { id: 52, statement: "Das EU-Bio-Siegel stellt den absolut strengsten Standard auf dem Markt dar.", correctAnswer: "Falsch" },
          { id: 53, statement: "Deutsche Anbauverbände wie Bioland oder Demeter haben strengere Kriterien als das EU-Siegel.", correctAnswer: "Richtig" },
          { id: 54, statement: "Ein Bio-Keks ist automatisch gesund, weil er ein Bio-Siegel trägt.", correctAnswer: "Falsch" },
          { id: 55, statement: "Die strengeren Richtlinien der Verbände beziehen sich unter anderem auf die Tierhaltung und Düngung.", correctAnswer: "Richtig" }
        ]
      },
      {
        part: "Teil 3",
        title: "Hörverstehen (Selektives Verstehen)",
        description: "Sie hören fünf kurze Ansagen (z.B. im Radio oder an Bahnhöfen). Entscheiden Sie bei den Aufgaben 56-60, ob die Aussage Richtig oder Falsch ist. Sie hören die Ansagen nur einmal.",
        items: [
          { id: 56, speaker: "Ansage 1", audioScript: "Sehr geehrte Fahrgäste der Deutschen Bahn. Aufgrund von dringenden Reparaturarbeiten an den Oberleitungen ist die Strecke zwischen Frankfurt und Mannheim für die nächsten zwei Stunden gesperrt. Züge werden über eine Nebenstrecke umgeleitet und verspäten sich um etwa 30 Minuten.", statement: "Die Züge zwischen Frankfurt und Mannheim fallen heute komplett aus.", correctAnswer: "Falsch" },
          { id: 57, speaker: "Ansage 2", audioScript: "Achtung an alle Badegäste am Wannsee. Der Wetterdienst warnt vor einem schweren Gewitter mit Hagel und Sturmböen, das in Kürze den Bereich erreichen wird. Bitte verlassen Sie sofort das Wasser und suchen Sie Schutz in den festen Gebäuden.", statement: "Wegen eines herannahenden Gewitters sollen die Badegäste das Wasser verlassen.", correctAnswer: "Richtig" },
          { id: 58, speaker: "Ansage 3", audioScript: "Liebe Museumsbesucher, wir weisen darauf hin, dass das Fotografieren in der aktuellen Sonderausstellung 'Meisterwerke der Moderne' aus urheberrechtlichen Gründen strengstens untersagt ist. In den anderen Sälen des Museums ist das Fotografieren ohne Blitzlicht erlaubt.", statement: "In der Sonderausstellung darf man Fotos machen, aber ohne Blitz.", correctAnswer: "Falsch" },
          { id: 59, speaker: "Ansage 4", audioScript: "Sehr geehrte Fluggäste, wir bitten um Ihre Aufmerksamkeit. Für den Flug LH 450 nach New York hat soeben das Boarding an Gate B22 begonnen. Bitte halten Sie Ihre Bordkarte und Ihren Reisepass zur Kontrolle bereit.", statement: "Die Fluggäste nach New York sollen sich zum Gate B22 begeben.", correctAnswer: "Richtig" },
          { id: 60, speaker: "Ansage 5", audioScript: "Achtung im Supermarkt. Wegen einer technischen Störung an unseren Kassen ist derzeit nur eine Barzahlung möglich. Wir können vorübergehend keine EC- oder Kreditkarten annehmen. Ein Geldautomat befindet sich direkt neben dem Haupteingang.", statement: "Im Supermarkt kann man momentan nicht mit Karte bezahlen.", correctAnswer: "Richtig" }
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
        title: "Hörverstehen (Globalverstehen)",
        description: "Sie hören fünf kurze Aussagen von verschiedenen Personen zu einem Thema. Entscheiden Sie bei den Aufgaben 41-45, ob die jeweilige Aussage Richtig oder Falsch ist. Sie hören die Aussagen nur einmal.",
        topic: "Thema: Homeoffice — Segen oder Fluch?",
        items: [
          { id: 41, speaker: "Sprecher 1", audioScript: "Für mich ist Homeoffice ein absoluter Segen. Ich spare mir täglich zwei Stunden Pendelzeit und kann mich zu Hause viel besser konzentrieren, weil niemand spontan ins Büro kommt, um zu quatschen. Zudem lässt sich die Arbeit viel flexibler mit dem Familienleben vereinbaren.", statement: "Sprecher 1 schätzt das Homeoffice wegen der Zeitersparnis und der besseren Konzentration.", correctAnswer: "Richtig" },
          { id: 42, speaker: "Sprecher 2", audioScript: "Ich finde Homeoffice schrecklich. Mir fehlt der direkte, persönliche Austausch mit den Kollegen beim Kaffee oder in der Mittagspause enorm. Am Telefon oder per Video-Call ist das einfach nicht dasselbe. Zudem fällt es mir schwer, zu Hause Feierabend zu machen.", statement: "Sprecher 2 hat Schwierigkeiten, im Homeoffice eine klare Grenze zwischen Arbeit und Freizeit zu ziehen.", correctAnswer: "Richtig" },
          { id: 43, speaker: "Sprecher 3", audioScript: "Grundsätzlich finde ich die Möglichkeit gut, aber mein Arbeitgeber stellt uns überhaupt keine vernünftige Ausrüstung zur Verfügung. Ich sitze am Küchentisch auf einem unbequemen Stuhl und mein privater Laptop ist viel zu langsam. So macht das Arbeiten keinen Spaß.", statement: "Sprecher 3 beklagt die mangelnde technische und ergonomische Ausstattung durch den Arbeitgeber.", correctAnswer: "Richtig" },
          { id: 44, speaker: "Sprecher 4", audioScript: "Homeoffice spart zwar Zeit, aber man wird von den Vorgesetzten auch viel leichter übersehen, wenn es um Beförderungen oder interessante Projekte geht. Wer physisch im Büro präsent ist, hat einfach bessere Karrierechancen. 'Aus den Augen, aus dem Sinn' stimmt leider oft.", statement: "Sprecher 4 meint, dass dauerhaftes Homeoffice Nachteile für die Karriere haben kann.", correctAnswer: "Richtig" },
          { id: 45, speaker: "Sprecher 5", audioScript: "Die Mischung macht's! Zwei Tage Homeoffice für konzentriertes Arbeiten und drei Tage im Büro für Meetings und Teamarbeit ist für mich die perfekte Lösung. Reine Präsenzpflicht ist veraltet, aber komplett zu Hause zu arbeiten führt zu Vereinsamung.", statement: "Sprecher 5 befürwortet ein reines, ausschließliches Homeoffice-Modell.", correctAnswer: "Falsch" }
        ]
      },
      {
        part: "Teil 2",
        title: "Hörverstehen (Detailverstehen)",
        description: "Sie hören ein Gespräch oder Interview. Entscheiden Sie bei den Aufgaben 46-55, ob die jeweilige Aussage Richtig oder Falsch ist. Sie hören den Text nur einmal.",
        topic: "Interview: Klimafreundliche Stadtentwicklung",
        audioScript: "Moderator: Willkommen zu unserem Forum 'Stadt der Zukunft'. Bei uns ist heute Herr Thomas Lang, Stadtplaner aus Hamburg. Herr Lang, Großstädte leiden im Sommer zunehmend unter extremer Hitze. Wie können wir das Problem lösen?\n\nLang: Guten Tag. Das Hauptproblem ist die sogenannte 'Versiegelung': Asphalt und Beton speichern die Hitze und lassen kein Wasser versickern. Wir müssen Städte grüner machen. Das bedeutet nicht nur Parks anzulegen, sondern auch Dächer und Fassaden von Gebäuden systematisch zu bepflanzen. Pflanzen kühlen die Luft durch Verdunstung massiv ab.\n\nModerator: Klingt gut, aber Hausbesitzer klagen oft über die hohen Kosten einer Fassadenbegrünung und die Gefahr von Bauschäden. Ist das berechtigt?\n\nLang: Moderne Systeme sind bautechnisch absolut sicher, wenn sie vom Fachmann installiert werden. Die Kosten sind anfangs hoch, ja. Aber man spart langfristig Energiekosten für Klimaanlagen im Sommer und Heizkosten im Winter, da die Pflanzen wie eine natürliche Dämmschicht wirken. Zudem bieten viele Städte finanzielle Förderprogramme an.\n\nModerator: Ein weiteres Thema ist der Verkehr. Wie sieht eine klimafreundliche Mobilität in der Stadt aus?\n\nLang: Wir müssen den Autoverkehr drastisch reduzieren. Das gelingt nur, wenn wir den ÖPNV und das Radwegenetz massiv ausbauen und attraktiver machen. Radwege müssen baulich von der Straße getrennt sein, damit sich auch Kinder und ältere Menschen sicher fühlen. In Kopenhagen funktioniert das seit Jahrzehnten vorbildlich.\n\nModerator: Herr Lang, vielen Dank für Ihre Ausführungen.",
        items: [
          { id: 46, statement: "Thomas Lang arbeitet als selbstständiger Architekt für Einfamilienhäuser.", correctAnswer: "Falsch" },
          { id: 47, statement: "Asphalt und Beton in Großstädten speichern die Hitze und verhindern das Versickern von Wasser.", correctAnswer: "Richtig" },
          { id: 48, statement: "Gegen die sommerliche Hitze schlägt der Experte vor, alle Straßen weiß anzumalen.", correctAnswer: "Falsch" },
          { id: 49, statement: "Hausbesitzer haben oft Bedenken wegen hoher Kosten und möglicher Bauschäden bei Fassadenbegrünung.", correctAnswer: "Richtig" },
          { id: 50, statement: "Bepflanzungen an Gebäuden wirken wie eine natürliche Dämmschicht im Sommer und Winter.", correctAnswer: "Richtig" },
          { id: 51, statement: "Die Kommunen unterstützen Hausbesitzer durch finanzielle Förderprogramme.", correctAnswer: "Richtig" },
          { id: 52, statement: "Der Experte fordert, den öffentlichen Personennahverkehr (ÖPNV) komplett abzuschaffen.", correctAnswer: "Falsch" },
          { id: 53, statement: "Radwege müssen laut Lang baulich von der Autostraße getrennt sein, um die Sicherheit zu garantieren.", correctAnswer: "Richtig" },
          { id: 54, statement: "Als Vorbild für eine gelungene Fahrrad-Infrastruktur wird die Stadt Kopenhagen genannt.", correctAnswer: "Richtig" },
          { id: 55, statement: "Neben der Dämmung kühlen Pflanzen an Gebäuden das Umfeld durch die Verdunstung von Wasser ab.", correctAnswer: "Richtig" }
        ]
      },
      {
        part: "Teil 3",
        title: "Hörverstehen (Selektives Verstehen)",
        description: "Sie hören fünf kurze Ansagen (z.B. im Radio oder an Bahnhöfen). Entscheiden Sie bei den Aufgaben 56-60, ob die Aussage Richtig oder Falsch ist. Sie hören die Ansagen nur einmal.",
        items: [
          { id: 56, speaker: "Ansage 1", audioScript: "Wichtige Durchsage für alle Fahrgäste der U-Bahn-Linie U1. Wegen einer Stellwerksstörung ist die Strecke zwischen Hauptbahnhof und Südbahnhof derzeit voll gesperrt. Bitte weichen Sie auf die Straßenbahnlinie 16 aus, die parallel verkehrt. Ihre Fahrkarten sind dort ebenfalls gültig.", statement: "Fahrgäste der gesperrten U-Bahn sollen die Straßenbahnlinie 16 nutzen.", correctAnswer: "Richtig" },
          { id: 57, speaker: "Ansage 2", audioScript: "Achtung an alle Besucher der Gemäldegalerie. Wegen einer geschlossenen Abendveranstaltung schließt das Museum heute bereits um 17:00 Uhr. Wir bitten alle Besucher, die Ausstellungsräume bis spätestens 16:45 Uhr zu verlassen. Vielen Dank für Ihr Verständnis.", statement: "Das Museum schließt heute wegen einer Veranstaltung früher als gewöhnlich.", correctAnswer: "Richtig" },
          { id: 58, speaker: "Ansage 3", audioScript: "Achtung im Baumarkt. Eine Information für unsere Heimwerker: Wegen des nassen Wetters findet der geplante Outdoor-Workshop zum Thema 'Terrassenbau' heute im überdachten Innenbereich der Gartenabteilung statt. Beginn bleibt unverändert 15:00 Uhr.", statement: "Der Terrassenbau-Workshop fällt wegen des schlechten Wetters heute aus.", correctAnswer: "Falsch" },
          { id: 59, speaker: "Ansage 4", audioScript: "Fluggäste des Fluges DE 220 nach Mallorca werden gebeten, die kurzfristige Änderung des Abflug-Gates zu beachten. Der Einlass erfolgt nun an Gate C18 statt C05. Das Boarding beginnt in Kürze um 11:30 Uhr.", statement: "Das Gate für den Flug nach Mallorca hat sich geändert.", correctAnswer: "Richtig" },
          { id: 60, speaker: "Ansage 5", audioScript: "Liebe Kunden unserer Drogerie. Zur Feier unseres zehnjährigen Bestehens erhalten Sie heute an all unseren Kassen einen Rabatt von 10 Prozent auf das gesamte Sortiment ausgenommen bereits reduzierte Artikel und Säuglingsnahrung.", statement: "Der Jubiläumsrabatt gilt uneingeschränkt für alle Produkte im Sortiment.", correctAnswer: "Falsch" }
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
        title: "Hörverstehen (Globalverstehen)",
        description: "Sie hören fünf kurze Aussagen von verschiedenen Personen zu einem Thema. Entscheiden Sie bei den Aufgaben 41-45, ob die jeweilige Aussage Richtig oder Falsch ist. Sie hören die Aussagen nur einmal.",
        topic: "Thema: Nutzung und Preise des öffentlichen Nahverkehrs (ÖPNV)",
        items: [
          { id: 41, speaker: "Sprecher 1", audioScript: "Ich finde die Ticketpreise für Bus und Bahn in unserer Stadt eine absolute Frechheit. Eine Einzelfahrkarte kostet mittlerweile über drei Euro. Für eine vierköpfige Familie ist eine Fahrt in die Innenstadt und zurück im ÖPNV deutlich teurer als die Parkgebühren für das Auto. Da braucht man sich nicht zu wundern, dass viele das Auto vorziehen.", statement: "Sprecher 1 meint, dass der ÖPNV für Familien eine günstige Alternative zum Auto darstellt.", correctAnswer: "Falsch" },
          { id: 42, speaker: "Sprecher 2", audioScript: "Wir haben seit kurzem das Deutschlandticket für 49 Euro. Für mich als Pendlerin ist das eine riesige Erleichterung und eine enorme Ersparnis. Ich lasse mein Auto jetzt fast immer in der Garage stehen. Allerdings müsste das Angebot auf dem Land dringend ausgebaut werden, dort bringt das Ticket mangels Verbindungen wenig.", statement: "Sprecher 2 kritisiert das unzureichende Nahverkehrsangebot in ländlichen Regionen.", correctAnswer: "Richtig" },
          { id: 43, speaker: "Sprecher 3", audioScript: "Was nützen günstige Tickets, wenn die Bahnen ständig unpünktlich oder dreckig sind und man im Winter auf kalten Bahnhöfen warten muss? Ich wäre gerne bereit, auch mehr für mein Ticket zu bezahlen, wenn dafür der Service und die Zuverlässigkeit stimmen würden. So ist das einfach unattraktiv.", statement: "Sprecher 3 fordert einen kostenlosen Nahverkehr für alle Bürger.", correctAnswer: "Falsch" },
          { id: 44, speaker: "Sprecher 4", audioScript: "Meiner Meinung nach sollte der öffentliche Nahverkehr komplett kostenlos sein, finanziert durch Steuern. Nur so schaffen wir eine echte Verkehrswende und entlasten die verstopften Straßen in den Innenstädten. Viele Städte in Europa zeigen bereits, dass dieses Modell funktioniert und die Lebensqualität massiv verbessert.", statement: "Sprecher 4 plädiert für einen steuerfinanzierten, kostenfreien Nahverkehr.", correctAnswer: "Richtig" },
          { id: 45, speaker: "Sprecher 5", audioScript: "Ich nutze den ÖPNV nur selten und fahre meistens mit dem Rad. Aber wenn ich mal ein Ticket brauche, finde ich den Preis okay. Man spart sich ja schließlich auch die Parkplatzsuche und die teuren Benzinpreise. Da zahle ich gerne vier Euro für eine Einzelfahrt.", statement: "Sprecher 5 meint, dass Autofahren in der Stadt billiger ist als die Nutzung öffentlicher Verkehrsmittel.", correctAnswer: "Falsch" }
        ]
      },
      {
        part: "Teil 2",
        title: "Hörverstehen (Detailverstehen)",
        description: "Sie hören ein Gespräch oder Interview. Entscheiden Sie bei den Aufgaben 46-55, ob die jeweilige Aussage Richtig oder Falsch ist. Sie hören den Text nur einmal.",
        topic: "Interview: Die Zukunft des Buchmarkts und E-Books",
        audioScript: "Moderator: Herzlich willkommen bei 'Kultur Aktuell'. Heute sprechen wir mit Dr. Jürgen Schulz, Branchenanalyst und Experte für die Buchindustrie. Herr Dr. Schulz, verdrängen E-Books das gedruckte Buch in naher Zukunft komplett?\n\nDr. Schulz: Guten Tag. Das wurde vor zehn Jahren oft prophezeit, hat sich aber nicht bewahrheitet. Der E-Book-Markt hat sich in Deutschland bei einem Anteil von etwa 5 bis 8 Prozent stabilisiert. Das gedruckte Buch ist nach wie vor der klare Favorit der Leser. Die Menschen lieben das haptische Gefühl, ein echtes Buch in den Händen zu halten.\n\nModerator: Welche Vorteile schätzen denn die Käufer von E-Books besonders?\n\nDr. Schulz: Vor allem das geringe Gewicht und die Platzersparnis, was besonders auf Reisen unschlagbar ist. Zudem kann man die Schriftgröße anpassen, was älteren Menschen sehr hilft. Auch der Kauf geht in Sekundenschnelle per Download.\n\nModerator: Der Buchhandel vor Ort steht dennoch unter Druck, vor allem durch den Online-Giganten Amazon. Wie können kleine Buchhandlungen überleben?\n\nDr. Schulz: Sie müssen sich spezialisieren und auf persönliche Beratung setzen. Ein Online-Algorithmus kann ein persönliches Gespräch nicht ersetzen. Viele Buchhändler organisieren Lesungen, Weinabende oder bieten gemütliche Cafés an, um den Laden zu einem sozialen Treffpunkt zu machen. Kunden schätzen diese Atmosphäre und kaufen dann auch bewusst lokal.\n\nModerator: Herr Dr. Schulz, vielen Dank für das Gespräch.",
        items: [
          { id: 46, statement: "Dr. Jürgen Schulz arbeitet als Branchenanalyst und Experte für die Buchindustrie.", correctAnswer: "Richtig" },
          { id: 47, statement: "Der Marktanteil von E-Books in Deutschland liegt stabil bei über 50 Prozent.", correctAnswer: "Falsch" },
          { id: 48, statement: "Leser schätzen am gedruckten Buch vor allem das haptische Gefühl beim Halten.", correctAnswer: "Richtig" },
          { id: 49, statement: "Auf Reisen bieten E-Books durch ihr geringes Gewicht und Platzersparnis einen großen Vorteil.", correctAnswer: "Richtig" },
          { id: 50, statement: "Ältere Menschen profitieren bei E-Readern von der Möglichkeit, die Schriftgröße anzupassen.", correctAnswer: "Richtig" },
          { id: 51, statement: "Große Online-Händler wie Amazon setzen den lokalen Buchhandel stark unter Druck.", correctAnswer: "Richtig" },
          { id: 52, statement: "Kleine Buchhandlungen können überleben, indem sie sich spezialisieren und auf persönliche Beratung setzen.", correctAnswer: "Richtig" },
          { id: 53, statement: "Ein Online-Algorithmus kann das persönliche Beratungsgespräch im Buchladen gut ersetzen.", correctAnswer: "Falsch" },
          { id: 54, statement: "Autorenlesungen, Weinabende und kleine Cafés helfen Buchhandlungen, soziale Treffpunkte zu werden.", correctAnswer: "Richtig" },
          { id: 55, statement: "Kunden kaufen bewusst lokal, um die besondere Atmosphäre zu genießen und den Handel vor Ort zu unterstützen.", correctAnswer: "Richtig" }
        ]
      },
      {
        part: "Teil 3",
        title: "Hörverstehen (Selektives Verstehen)",
        description: "Sie hören fünf kurze Ansagen (z.B. im Radio oder an Bahnhöfen). Entscheiden Sie bei den Aufgaben 56-60, ob die Aussage Richtig oder Falsch ist. Sie hören die Ansagen nur einmal.",
        items: [
          { id: 56, speaker: "Ansage 1", audioScript: "Fahrgäste des Metronom-Zuges ME 350 nach Göttingen. Abfahrt planmäßig um 17:10 Uhr auf Gleis 4. Bitte beachten Sie: Wegen einer kurzfristigen Zugbereitstellung fährt der Zug heute ausnahmsweise von Gleis 7 ab. Wir wiederholen: Abfahrt heute von Gleis 7.", statement: "Der Zug nach Göttingen fährt heute von einem anderen Gleis ab.", correctAnswer: "Richtig" },
          { id: 57, speaker: "Ansage 2", audioScript: "Achtung an alle Besucher des Stadtfestes. Der Deutsche Wetterdienst hat soeben eine Unwetterwarnung für die Region herausgegeben. Es wird vor heftigem Starkregen und Sturmböen gewarnt. Alle Konzerte auf den Open-Air-Bühnen werden hiermit abgebrochen.", statement: "Das Stadtfest wird wegen einer Unwetterwarnung unterbrochen.", correctAnswer: "Richtig" },
          { id: 58, speaker: "Ansage 3", audioScript: "Werte Kunden unseres Möbelhauses. Aufgrund von Renovierungsarbeiten in unserer Küchenabteilung im zweiten Obergeschoss bleibt dieser Bereich heute für Besucher gesperrt. Beratungen finden stattdessen im Erdgeschoss neben dem Info-Point statt.", statement: "Die Küchenabteilung ist heute wegen Renovierung geschlossen.", correctAnswer: "Richtig" },
          { id: 59, speaker: "Ansage 4", audioScript: "Sehr geehrte Fluggäste des Lufthansa-Fluges LH 250 nach Rom. Wir bitten Sie, beim Boarding am Gate A12 Ihren Reisepass sowie das ausgefüllte Einreiseformular bereitgehalten. Ohne dieses Formular kann kein Zutritt zum Flugzeug gewährt werden.", statement: "Für den Flug nach Rom wird kein Einreiseformular benötigt.", correctAnswer: "Falsch" },
          { id: 60, speaker: "Liebe Bibliotheksbesucher, wir erinnern daran, dass die Rückgabefrist für alle vor den Ferien ausgeliehenen Bücher am kommenden Freitag abläuft. Nach diesem Datum müssen wir leider die regulären Verspätungsgebühren berechnen.", statement: "Bücher müssen bis kommenden Freitag zurückgegeben werden, um Gebühren zu vermeiden.", correctAnswer: "Richtig" }
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
        title: "Hörverstehen (Globalverstehen)",
        description: "Sie hören fünf kurze Aussagen von verschiedenen Personen zu einem Thema. Entscheiden Sie bei den Aufgaben 41-45, ob die jeweilige Aussage Richtig oder Falsch ist. Sie hören die Aussagen nur einmal.",
        topic: "Thema: E-Scooter in Großstädten — Fortschritt oder Plage?",
        items: [
          { id: 41, speaker: "Sprecher 1", audioScript: "Ich finde E-Scooter superpraktisch. Man kann sie einfach überall per App ausleihen und ist in der verstopften Innenstadt oft schneller als mit der U-Bahn oder dem Auto. Für kurze Strecken, die sogenannte 'letzte Meile' vom Bahnhof nach Hause, sind sie einfach perfekt.", statement: "Sprecher 1 schätzt E-Scooter als praktische Lösung für kurze Wege in der Stadt.", correctAnswer: "Richtig" },
          { id: 42, speaker: "Sprecher 2", audioScript: "Diese Dinger sind eine absolute Katastrophe! Sie stehen überall auf den Gehwegen im Weg herum, blockieren Rollstuhlfahrer und Kinderwagen. Die Nutzer fahren oft rücksichtslos mit hoher Geschwindigkeit über Bürgersteige und gefährden Fußgänger. Ich wäre für ein komplettes Verbot.", statement: "Sprecher 2 fordert das Verbot von E-Scootern wegen der Blockierung von Fußwegen und Gefährdung anderer.", correctAnswer: "Richtig" },
          { id: 43, speaker: "Sprecher 3", audioScript: "Ich fahre selbst ab und zu E-Scooter, aber die Leihgebühren sind mittlerweile viel zu hoch geworden. Für zehn Minuten Fahrt zahlt man oft fast vier Euro. Das ist teurer als ein Einzelticket für Bus und Bahn. Deshalb nutze ich sie nur noch in Ausnahmefällen, wenn ich es eilig habe.", statement: "Sprecher 3 meint, dass E-Scooter-Fahren eine günstige Alternative zum Nahverkehr is.", correctAnswer: "Falsch" },
          { id: 44, speaker: "Sprecher 4", audioScript: "Ökologisch gesehen bringen diese E-Scooter doch überhaupt nichts. Die meisten Fahrten ersetzen nicht das Auto, sondern Fußwege oder Fahrten mit der Straßenbahn. Zudem müssen die Akkus nachts mit Transportern eingesammelt werden, was wieder Abgase erzeugt.", statement: "Sprecher 4 bezweifelt den positiven Umweltnutzen von E-Scootern.", correctAnswer: "Richtig" },
          { id: 45, speaker: "Sprecher 5", audioScript: "Die Infrastruktur in unseren Städten ist einfach nicht für diese Fahrzeuge ausgelegt. Wir bräuchten viel bretere Radwege, auf denen sowohl Fahrräder als auch E-Scooter sicher aneinander vorbeikommen. Solange es diese Wege nicht gibt, bleibt die Unfallgefahr extrem hoch.", statement: "Sprecher 5 meint, dass E-Scooter-Fahrer unter allen Umständen Helme tragen sollten.", correctAnswer: "Falsch" }
        ]
      },
      {
        part: "Teil 2",
        title: "Hörverstehen (Detailverstehen)",
        description: "Sie hören ein Gespräch oder Interview. Entscheiden Sie bei den Aufgaben 46-55, ob die jeweilige Aussage Richtig oder Falsch ist. Sie hören den Text nur einmal.",
        topic: "Interview: Die Rolle des Sports im Alltag",
        audioScript: "Moderator: Herzlich willkommen bei 'Gesund und Fit'. Heute im Studio ist der Sportwissenschaftler Dr. Marc Brand. Herr Dr. Brand, viele Menschen bewegen sich im Alltag viel zu wenig. Welchen Mindestaufwand empfehlen Sie?\n\nDr. Brand: Guten Tag. Die Weltgesundheitsorganisation empfiehlt mindestens 150 Minuten moderate Bewegung pro Woche. Das klingt viel, lässt sich aber leicht aufteilen: Zum Beispiel fünfmal pro Woche 30 Minuten zügiges Gehen oder Radfahren. Es geht nicht um Leistungssport, sondern um regelmäßige Aktivität.\n\nModerator: Viele klagen jedoch, dass sie nach der Arbeit keine Zeit oder Energie für Sport haben. Haben Sie da einen Tipp?\n\nDr. Brand: Absolut. Man muss Bewegung in den Alltag integrieren. Nehmen Sie die Treppe statt des Aufzugs, steigen Sie eine Station früher aus dem Bus aus oder machen Sie in der Mittagspause einen kleinen Spaziergang. Jedes bisschen Bewegung zählt und baut nachweislich Stress ab.\n\nModerator: Wie wichtig ist Sport eigentlich für das geistige Wohlbefinden?\n\nDr. Brand: Enorm wichtig! Bei körperlicher Aktivität schüttet der Körper Glückshormone wie Endorphine und Serotonin aus, während das Stresshormon Cortisol abgebaut wird. Sport hilft bei Schlafstörungen, beugt Depressionen vor und steigert die Konzentrationsfähigkeit im Beruf.\n\nModerator: Herr Dr. Brand, vielen Dank für diese Ratschläge.",
        items: [
          { id: 46, statement: "Herr Dr. Marc Brand arbeitet als Kardiologe in einer großen Klinik.", correctAnswer: "Falsch" },
          { id: 47, statement: "Die Weltgesundheitsorganisation empfiehlt mindestens 150 Minuten moderate Bewegung pro Woche.", correctAnswer: "Richtig" },
          { id: 48, statement: "Man kann die Bewegung aufteilen, indem man sich z.B. fünfmal pro Woche für 30 Minuten zügig bewegt.", correctAnswer: "Richtig" },
          { id: 49, statement: "Für Schreibtischarbeiter empfiehlt der Experte, Treppen statt Aufzüge zu nutzen.", correctAnswer: "Richtig" },
          { id: 50, statement: "Sportliche Aktivität hilft dem Körper, das Stresshormon Cortisol abzubauen.", correctAnswer: "Richtig" },
          { id: 51, statement: "Körperliche Bewegung hat laut Dr. Brand keinerlei Auswirkungen auf psychische Leiden wie Depressionen.", correctAnswer: "Falsch" },
          { id: 52, statement: "Zügiges Gehen oder Radfahren werden im Interview als gute Beispiele für moderate Bewegung genannt.", correctAnswer: "Richtig" },
          { id: 53, statement: "Viele Menschen treiben nach der Arbeit keinen Sport, weil Fitnessstudios zu teuer sind.", correctAnswer: "Falsch" },
          { id: 54, statement: "Sport im Alltag steigert nachweislich die Konzentrationsfähigkeit im Beruf.", correctAnswer: "Richtig" },
          { id: 55, statement: "Laut Fazit ist Sport nur dann gesund, wenn man ihn als Leistungssport betreibt.", correctAnswer: "Falsch" }
        ]
      },
      {
        part: "Teil 3",
        title: "Hörverstehen (Selektives Verstehen)",
        description: "Sie hören fünf kurze Ansagen (z.B. im Radio oder an Bahnhöfen). Entscheiden Sie bei den Aufgaben 56-60, ob die Aussage Richtig oder Falsch ist. Sie hören die Ansagen nur einmal.",
        items: [
          { id: 56, speaker: "Ansage 1", audioScript: "Fahrgäste des Nahverkehrs nach Bremen. Der Regionalexpress RE 9, Abfahrt 14:15 Uhr von Gleis 5, verspätet sich heute wegen einer Weichenstörung um voraussichtlich 20 Minuten. Der Zug steht bereits an Gleis 5 und ist zum Einsteigen freigegeben.", statement: "Der Zug nach Bremen startet heute pünktlich.", correctAnswer: "Falsch" },
          { id: 57, speaker: "Ansage 2", audioScript: "Sehr geehrte Besucher der Messe. Wir weisen darauf hin, dass die Halle 4 wegen einer Sonderveranstaltung heute ab 15 Uhr für das allgemeine Publikum geschlossen bleibt. Bitte besuchen Sie die anderen Hallen, die bis 18 Uhr geöffnet sind.", statement: "Messebesucher können heute Nachmittag nicht mehr in Halle 4 gehen.", correctAnswer: "Richtig" },
          { id: 58, speaker: "Ansage 3", audioScript: "Achtung auf dem Autobahnring A10. Zwischen den Anschlussstellen West und Süd befindet sich eine ungesicherte Unfallstelle auf der linken Spur. Bitte fahren Sie vorsichtig und überholen Sie nicht. Ein Abschleppwagen ist bereits unterwegs.", statement: "Autofahrer sollen an der Unfallstelle besonders vorsichtig fahren.", correctAnswer: "Richtig" },
          { id: 59, speaker: "Ansage 4", audioScript: "Werte Hotelgäste, eine wichtige Information zum Frühstück: Aufgrund einer technischen Störung im Hauptspeisesaal servieren wir das Frühstücksbuffet heute ausnahmsweise im Gartensaal im Erdgeschoss. Die Frühstückszeiten bleiben unverändert.", statement: "Das Frühstück findet heute in einem anderen Raum statt.", correctAnswer: "Richtig" },
          { id: 60, speaker: "Achtung Fahrgäste am Bahnhof Zoo. Wegen des Verdachts auf ein herrenloses Gepäckstück ist der Bahnsteig 3 derzeit polizeilich gesperrt. Alle Züge in Richtung Ostbahnhof halten vorübergehend an Bahnsteig 4. Bitte achten Sie auf die Durchsagen.", statement: "Alle Züge fahren weiterhin wie gewohnt von Bahnsteig 3 ab.", correctAnswer: "Falsch" }
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
        title: "Hörverstehen (Globalverstehen)",
        description: "Sie hören fünf kurze Aussagen von verschiedenen Personen zu einem Thema. Entscheiden Sie bei den Aufgaben 41-45, ob die jeweilige Aussage Richtig oder Falsch ist. Sie hören die Aussagen nur einmal.",
        topic: "Thema: Vegetarisches Angebot in Kantinen",
        items: [
          { id: 41, speaker: "Sprecher 1", audioScript: "Ich finde es absolut richtig, dass unsere Kantine jetzt täglich mindestens zwei vegetarische Gerichte anbietet. Das ist nicht nur gesünder, sondern auch viel besser für das Klima. Früher gab es fast jeden Tag nur Fleisch, das ist einfach nicht mehr zeitgemäß. Ich hoffe, das Angebot wird noch weiter ausgebaut.", statement: "Sprecher 1 begrüßt das erweiterte vegetarische Angebot der Kantine.", correctAnswer: "Richtig" },
          { id: 42, speaker: "Sprecher 2", audioScript: "Mich stört dieser Bevormundungs-Trend gewaltig. Wenn ich in der Mittagspause ein Schnitzel essen möchte, dann will ich das auch tun können, ohne ein schlechtes Gewissen eingeredet zu bekommen. Vegetarische Gerichte schmecken mir meistens nicht und machen mich auch nicht richtig satt.", statement: "Sprecher 2 fühlt sich durch vegetarische Kantinenangebote bevormundet und isst lieber Fleisch.", correctAnswer: "Richtig" },
          { id: 43, speaker: "Sprecher 3", audioScript: "Ich esse zwar Fleisch, aber mir ist es ehrlich gesagt völlig egal. Die Kantine bietet jeden Tag so viele verschiedene Gerichte an, dass immer etwas Leckeres dabei ist, egal ob mit oder ohne Fleisch. Man muss daraus doch kein Politikum machen.", statement: "Sprecher 3 ist die Debatte um das Essensangebot in der Kantine gleichgültig.", correctAnswer: "Richtig" },
          { id: 44, speaker: "Sprecher 4", audioScript: "Unser Arbeitgeber hat die Fleischgerichte in der Kantine komplett gestrichen. Seitdem gehen viele Kollegen in den Pausen lieber zum Dönerladen oder Bäcker um die Ecke. Die Kantine macht jetzt viel weniger Umsatz, das konzept ist also nach hinten losgegangen.", statement: "Sprecher 4 berichtet von sinkenden Kundenzahlen in der Kantine nach der Umstellung.", correctAnswer: "Richtig" },
          { id: 45, speaker: "Sprecher 5", audioScript: "Es geht doch vor allem um die Qualität. Wenn das Fleisch billig produziert wird, schmeckt es ohnehin nicht. Ich wäre bereit, mehr Geld für Fleisch aus artgerechter Haltung zu bezahlen. Ein generelles Verbot in der Kantine halte ich aber für den falschen Weg.", statement: "Sprecher 5 wünscht sich qualitativ hochwertiges Fleisch aus guter Tierhaltung statt eines Verbots.", correctAnswer: "Richtig" }
        ]
      },
      {
        part: "Teil 2",
        title: "Hörverstehen (Detailverstehen)",
        description: "Sie hören ein Gespräch oder Interview. Entscheiden Sie bei den Aufgaben 46-55, ob die jeweilige Aussage Richtig oder Falsch ist. Sie hören den Text nur einmal.",
        topic: "Interview: Digitalisierung an Schulen",
        audioScript: "Moderator: Herzlich willkommen zu unserem wöchentlichen Magazin 'Bildung im Fokus'. Wir sprechen heute mit der Schulleiterin Frau Dr. Sabine Fischer über das Thema Digitalisierung an Schulen. Frau Dr. Fischer, wie steht es um den Einsatz digitaler Medien an Ihrer Schule?\n\nDr. Fischer: Guten Tag. Wir haben in den letzten drei Jahren große Fortschritte gemacht. Dank staatlicher Fördermittel konnten wir alle Klassenzimmer mit interaktiven Smartboards ausstatten und Schülern der höheren Klassen Leih-Tablets zur Verfügung stellen. Die klassische Tafel aus Kreide gibt es bei uns kaum noch.\n\nModerator: Viele Kritiker warnen jedoch, dass die ständige Bildschirmnutzung die Konzentrationsfähigkeit der Kinder verringert. Wie sehen Sie das?\n\nDr. Fischer: Diese Sorge ist nicht ganz unberechtigt. Es kommt auf das richtige Maß an. Tablets dürfen kein Ersatz für das eigene Denken und Schreiben sein. Wir nutzen sie gezielt für Recherchen, das Lösen von interaktiven Geometrie-Aufgaben oder zum Lernen von Vokabeln über Apps. Das klassische Schulbuch aus Papier hat bei uns nach wie vor seinen festen Platz.\n\nModerator: Ein weiteres Problem ist oft, dass die Lehrkräfte technisch nicht ausreichend geschult sind. Wie haben Sie das gelöst?\n\nDr. Fischer: Das war anfangs in der Tat eine Hürde. Wir haben daher ein internes Fortbildungsprogramm gestartet. Jüngere Kollegen, die technisch sehr versiert sind, unterstützen ältere Dozenten im Alltag. Das funktioniert im Team hervorragend.\n\nModerator: Frau Dr. Fischer, vielen Dank für das Gespräch.",
        items: [
          { id: 46, statement: "Frau Dr. Sabine Fischer ist Schulleiterin einer digitalisierten Schule.", correctAnswer: "Richtig" },
          { id: 47, statement: "Dank staatlicher Fördermittel wurden alle Klassenzimmer mit interaktiven Smartboards ausgestattet.", correctAnswer: "Richtig" },
          { id: 48, statement: "Dr. Fischer sieht in der Bildschirmnutzung überhaupt kein Risiko für die Schüler.", correctAnswer: "Falsch" },
          { id: 49, statement: "Die Tablets werden an der Schule unter anderem für Vokabel-Apps und Recherchen genutzt.", correctAnswer: "Richtig" },
          { id: 50, statement: "Das klassische Schulbuch aus Papier wurde an Fischers Schule komplett abgeschafft.", correctAnswer: "Falsch" },
          { id: 51, statement: "Ein anfängliches Problem war die mangelnde technische Schulung mancher Lehrkräfte.", correctAnswer: "Richtig" },
          { id: 52, statement: "Um das Schulungsproblem zu lösen, wurden teure externe IT-Berater engagiert.", correctAnswer: "Falsch" },
          { id: 53, statement: "Smartboards und Leih-Tablets wurden durch staatliche Fördermittel finanziert.", correctAnswer: "Richtig" },
          { id: 54, statement: "Die klassische Kreidetafel hat an der Schule weiterhin eine zentrale Bedeutung.", correctAnswer: "Falsch" },
          { id: 55, statement: "Die Schulleiterin schätzt die Digitalisierung als gescheitertes Experiment ein.", correctAnswer: "Falsch" }
        ]
      },
      {
        part: "Teil 3",
        title: "Hörverstehen (Selektives Verstehen)",
        description: "Sie hören fünf kurze Ansagen (z.B. im Radio oder an Bahnhöfen). Entscheiden Sie bei den Aufgaben 56-60, ob die Aussage Richtig oder Falsch ist. Sie hören die Ansagen nur einmal.",
        items: [
          { id: 56, speaker: "Ansage 1", audioScript: "Fahrgäste des Flugs DE 550 nach London werden gebeten, sich wegen einer technischen Überprüfung der Maschine für den Abflug bereit zu halten. Der neue voraussichtliche Abflugtermin verschiebt sich um 40 Minuten auf 15 Uhr. Das Boarding beginnt um 14:35 Uhr an Gate A08.", statement: "Der Flug nach London startet heute mit einer Verspätung.", correctAnswer: "Richtig" },
          { id: 57, speaker: "Ansage 2", audioScript: "Achtung an alle Einkäufer in unserem Center. Zur Eröffnung der neuen Etage verlängern wir heute unsere Öffnungszeiten bis 22 Uhr statt wie gewohnt bis 20 Uhr. Nutzen Sie die Gelegenheit und shoppen Sie entspannt zwei Stunden länger. Zudem gibt es an vielen Ständen Sekt gratis.", statement: "Das Center schließt heute zur Feier des Tages erst um 22:00 Uhr.", correctAnswer: "Richtig" },
          { id: 58, speaker: "Ansage 3", audioScript: "Sehr geehrte Fahrgäste an Gleis 2. Bitte beachten Sie: Der ICE 88 nach Berlin, planmäßige Abfahrt um 11:15 Uhr, fällt heute aus. Grund dafür ist ein Streik des Bahnpersonals in ganz Deutschland. Reisende nach Berlin nutzen bitte die IC-Züge über Hannover.", statement: "Der ICE nach Berlin fährt heute planmäßig ab.", correctAnswer: "Falsch" },
          { id: 59, speaker: "Ansage 4", audioScript: "Achtung im Baumarkt. Eine Information für unsere Gartenfreunde: Der für morgen geplante Workshop zum Thema 'Rasenpflege und Bewässerung' muss leider entfallen. Grund ist die plötzliche Erkrankung unseres Experten. Ein Ersatztermin wird nächste Woche bekannt gegeben.", statement: "Der Garten-Workshop findet wie geplant morgen statt.", correctAnswer: "Falsch" },
          { id: 60, speaker: "Fahrgäste der Buslinie 200 in Richtung Zoo. Wegen einer Baustelle in der Altstadt wird der Verkehr ab sofort über den Nordring umgeleitet. Die Haltestellen Markt und Rathaus können daher heute nicht angefahren werden. Nutzen Sie alternativ die Haltestelle Parkallee.", statement: "Die Buslinie 200 kann heute manche Haltestellen in der Altstadt nicht anfahren.", correctAnswer: "Richtig" }
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
        title: "Hörverstehen (Globalverstehen)",
        description: "Sie hören fünf kurze Aussagen von verschiedenen Personen zu einem Thema. Entscheiden Sie bei den Aufgaben 41-45, ob die jeweilige Aussage Richtig oder Falsch ist. Sie hören die Aussagen nur einmal.",
        topic: "Thema: E-Books versus gedruckte Bücher",
        items: [
          { id: 41, speaker: "Sprecher 1", audioScript: "Ich liebe gedruckte Bücher über alles. Für mich gehört das Umblättern der Seiten, der Geruch des Papiers und das Gefühl, ein Buch in der Hand zu halten, einfach zum Lesen dazu. Ein E-Reader fühlt sich kalt und unpersönlich an, das kommt mir nicht ins Haus.", statement: "Sprecher 1 liest seine Bücher am liebsten auf einem digitalen E-Reader.", correctAnswer: "Falsch" },
          { id: 42, speaker: "Sprecher 2", audioScript: "E-Reader sind auf Reisen unschlagbar. Früher musste ich immer drei dicke Wälzer im Koffer mitschleppen, was viel Gewicht gekostet hat. Jetzt habe ich Hunderte von Büchern auf einem kleinen, leichten Gerät dabei. Das ist extrem komfortabel.", statement: "Sprecher 2 schätzt das geringe Gewicht und die Kapazität von E-Readern auf Reisen.", correctAnswer: "Richtig" },
          { id: 43, speaker: "Sprecher 3", audioScript: "Ich finde E-Books toll, weil man die Schriftgröße individuell anpassen kann. Da ich nicht mehr ganz so gut sehe, ist das für mich eine enorme Erleichterung. Auch die integrierte Wörterbuchfunktion nutze ich sehr oft für fremdsprachige Romane.", statement: "Sprecher 3 nutzt E-Reader vor allem wegen praktischer Funktionen wie Schriftgrößenanpassung.", correctAnswer: "Richtig" },
          { id: 44, speaker: "Sprecher 4", audioScript: "Es ist ein großer Vorteil, dass man E-Books sofort herunterladen und lesen kann, ohne das Haus zu verlassen oder auf die Post zu warten. Zudem sind sie oft etwas günstiger als die gedruckten Ausgaben. Das spart Zeit und Geld.", statement: "Sprecher 4 hebt die schnelle Verfügbarkeit und den Preisvorteil von E-Books hervor.", correctAnswer: "Richtig" },
          { id: 45, speaker: "Sprecher 5", audioScript: "Ich mache mir Sorgen um den Datenschutz bei diesen Geräten. Die Anbieter wissen genau, wann ich welches Buch lese, wie schnell ich umblättere und welche Passagen ich markiere. Diese totale Überwachung gefällt mir überhaupt nicht.", statement: "Sprecher 5 lehnt E-Reader ab, weil er sich um die Aufzeichnung seines Leseverhaltens sorgt.", correctAnswer: "Richtig" }
        ]
      },
      {
        part: "Teil 2",
        title: "Hörverstehen (Detailverstehen)",
        description: "Sie hören ein Gespräch oder Interview. Entscheiden Sie bei den Aufgaben 46-55, ob die jeweilige Aussage Richtig oder Falsch ist. Sie hören den Text nur einmal.",
        topic: "Interview: Carsharing in Großstädten",
        audioScript: "Moderator: Willkommen bei 'Urbane Mobilität'. Heute sprechen wir mit Frau Julia Krüger vom Verband für Carsharing. Frau Krüger, Carsharing boomt in deutschen Städten. Wer nutzt dieses Angebot hauptsächlich?\n\nFrau Krüger: Guten Tag. Die Hauptnutzer sind jüngere Erwachsene zwischen 25 und 40 Jahren, die in Ballungsräumen leben. Viele von ihnen haben sich bewusst gegen ein eigenes Auto entschieden, da die Fixkosten für Versicherung, Steuer und Stellplätze in Großstädten einfach zu hoch sind.\n\nModerator: Welche Vorteile bietet Carsharing im Vergleich zum eigenen Pkw?\n\nFrau Krüger: Neben der Kostenersparnis ist es vor allem die Flexibilität. Man bucht das Auto per App nur für den Zeitraum, in dem man es tatsächlich benötigt. Zudem entfallen lästige Aufgaben wie Wartung, Reifenwechsel oder TÜV-Besuche. Das übernimmt alles der Anbieter.\n\nModerator: Kritiker bemängeln allerdings, dass Carsharing-Autos oft nicht sauber sind oder im entscheidenden Moment kein Fahrzeug in der Nähe verfügbar ist. Was sagen Sie dazu?\n\nFrau Krüger: Das Sauberkeitsproblem existiert leider manchmal, da wir auf die Rücksichtnahme der Kunden angewiesen sind. Zur Verfügbarkeit: Wir erweitern unsere Flotten stetig, aber in Stoßzeiten wie am Freitagnachmittag kann es tatsächlich eng werden. Hier empfiehlt sich eine frühzeitige Reservierung.\n\nModerator: Frau Krüger, vielen Dank für das informative Gespräch.",
        items: [
          { id: 46, statement: "Frau Julia Krüger arbeitet als Verkehrsplanerin für die Stadt.", correctAnswer: "Falsch" },
          { id: 47, statement: "Die Hauptnutzer von Carsharing-Angeboten sind Senioren, die auf dem Land leben.", correctAnswer: "Falsch" },
          { id: 48, statement: "Carsharing-Nutzer sparen sich die hohen Fixkosten für Versicherung, Steuer und Stellplätze eines eigenen Autos.", correctAnswer: "Richtig" },
          { id: 49, statement: "Der Carsharing-Anbieter übernimmt Aufgaben wie Wartung, Reifenwechsel und TÜV für die Fahrzeuge.", correctAnswer: "Richtig" },
          { id: 50, statement: "Manche Kunden beklagen die Sauberkeit der Autos, weil manche Nutzer das Auto schmutzig hinterlassen.", correctAnswer: "Richtig" },
          { id: 51, statement: "Laut Krüger kann es am Freitagnachmittag zu Engpässen bei der Verfügbarkeit kommen.", correctAnswer: "Richtig" },
          { id: 52, statement: "Um sicher ein freies Fahrzeug zu Stoßzeiten zu bekommen, empfiehlt sich eine frühzeitige Reservierung.", correctAnswer: "Richtig" },
          { id: 53, statement: "Die Buchung eines Carsharing-Autos erfolgt kompliziert per schriftlichem Formular.", correctAnswer: "Falsch" },
          { id: 54, statement: "Viele Großstädter verzichten auf ein eigenes Auto wegen der hohen Fixkosten und des Parkplatzmangels.", correctAnswer: "Richtig" },
          { id: 55, statement: "Die Flexibilität von Carsharing besteht darin, dass man das Auto nur für die tatsächliche Nutzungszeit bezahlt.", correctAnswer: "Richtig" }
        ]
      },
      {
        part: "Teil 3",
        title: "Hörverstehen (Selektives Verstehen)",
        description: "Sie hören fünf kurze Ansagen (z.B. im Radio oder an Bahnhöfen). Entscheiden Sie bei den Aufgaben 56-60, ob die Aussage Richtig oder Falsch ist. Sie hören die Ansagen nur einmal.",
        items: [
          { id: 56, speaker: "Ansage 1", audioScript: "Fahrgäste des Nahverkehrs in Richtung Hamburg. Der Regionalbahn RB 8, Abfahrt 08:15 Uhr an Gleis 2, fällt heute wegen einer technischen Störung an den Schienen komplett aus. Bitte weichen Sie auf den Metronom-Zug ME 10 um 08:35 Uhr auf Gleis 4 aus.", statement: "Die Regionalbahn nach Hamburg fährt heute planmäßig ab.", correctAnswer: "Falsch" },
          { id: 57, speaker: "Ansage 2", audioScript: "Achtung an alle Besucher der Gartenschau. Aufgrund der hohen Temperaturen im Freien bieten wir heute Nachmittag unsere Führungen durch die kühlen tropischen Gewächshäuser gratis an. Treffpunkt ist der Haupteingang jeweils zur vollen Stunde.", statement: "Führungen durch die Gewächshäuser kosten heute keinen Eintritt.", correctAnswer: "Richtig" },
          { id: 58, speaker: "Ansage 3", audioScript: "Werte Kunden unserer Apotheke. Aus technischen Gründen ist unsere Notdienst-Klingel derzeit außer Betrieb. Falls Sie dringend Medikamente benötigen, klopfen Sie bitte kräftig an die Fensterscheibe rechts neben der Tür. Der Dienstapotheker öffnet Ihnen.", statement: "Kunden sollen bei Bedarf an das Fenster klopfen, da die Klingel defekt ist.", correctAnswer: "Richtig" },
          { id: 59, speaker: "Durchsage für Fluggäste des Fluges AF 140 nach Berlin. Der Einlass für das Boarding am Gate B12 verschiebt sich um ca. 20 Minuten auf 10:15 Uhr. Der Grund dafür ist die verspätete Ankunft des Flugzeugs aus München. Wir bitten um Geduld.", statement: "Das Boarding des Fluges nach Berlin verzögert sich wegen eines verspäteten Flugzeugs.", correctAnswer: "Richtig" },
          { id: 60, speaker: "Achtung im Supermarkt. Zum Schutz der Umwelt bieten wir ab heute an unseren Obst- und Gemüseständen keine kostenlosen dünnen Plastiktüten mehr an. Bitte nutzen Sie unsere wiederverwendbaren Baumwollnetze, die Sie für 50 Cent erwerben können.", statement: "Kunden erhalten Obsttüten aus Plastik ab heute kostenlos an der Kasse.", correctAnswer: "Falsch" }
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
        title: "Hörverstehen (Globalverstehen)",
        description: "Sie hören fünf kurze Aussagen von verschiedenen Personen zu einem Thema. Entscheiden Sie bei den Aufgaben 41-45, ob die jeweilige Aussage Richtig oder Falsch ist. Sie hören die Aussagen nur einmal.",
        topic: "Theme: Homeschooling im Distanzunterricht",
        items: [
          { id: 41, speaker: "Sprecher 1", audioScript: "Für meine Kinder war der Distanzunterricht eine Katastrophe. Ihnen fehlte der direkte Kontakt zu den Mitschülern und Lehrern enorm. Zudem war es technisch oft sehr schwierig, da unsere Internetverbindung ständig abbrach und wir nicht genug Laptops hatten.", statement: "Sprecher 1 berichtet von technischen und sozialen Problemen beim Homeschooling.", correctAnswer: "Richtig" },
          { id: 42, speaker: "Sprecher 2", audioScript: "Ich fand das Homeschooling eigentlich ganz entspannend. Man konnte länger schlafen, da der Schulweg wegfiel, und sich die Lernzeit flexibler einteilen. Für mich hat das selbstständige Arbeiten mit den digitalen Aufgabenplattformen super funktioniert.", statement: "Sprecher 2 empfand den Distanzunterricht als flexibel und stressfreier.", correctAnswer: "Richtig" },
          { id: 43, speaker: "Sprecher 3", audioScript: "Die Lehrer waren völlig überfordert! Manche haben nur Aufgabenlisten per Mail geschickt, ohne sie jemals zu besprechen. Andererseits gab es Lehrer, die stundenlange Videokonferenzen abgehalten haben, bei denen die Kinder kaum etwas verstanden haben. Es gab kein einheitliches Konzept.", statement: "Sprecher 3 kritisiert das unkoordinierte Vorgehen der Lehrkräfte beim Homeschooling.", correctAnswer: "Richtig" },
          { id: 44, speaker: "Sprecher 4", audioScript: "Als berufstätige Mutter war das eine enorme Belastung. Man musste gleichzeitig im Homeoffice arbeiten und die Kinder beim Lernen betreuen, da sie sich allein nicht konzentrieren konnten. Ich bin an meine Grenzen gestoßen und hoffe, dass die Schulen immer offen bleiben.", statement: "Sprecher 4 sah im Homeschooling eine extreme Doppelbelastung für berufstätige Eltern.", correctAnswer: "Richtig" },
          { id: 45, speaker: "Sprecher 5", audioScript: "Man hat deutlich gesehen, wie sozial ungerecht dieses System ist. Kinder aus einkommensschwachen Familien, die kein eigenes Zimmer oder keinen PC haben, wurden komplett abgehängt. Die Politik hätte viel schneller für kostenlose Leihgeräte sorgen müssen.", statement: "Sprecher 5 meint, dass alle Kinder die gleichen technischen Voraussetzungen zu Hause hatten.", correctAnswer: "Falsch" }
        ]
      },
      {
        part: "Teil 2",
        title: "Hörverstehen (Detailverstehen)",
        description: "Sie hören ein Gespräch oder Interview. Entscheiden Sie bei den Aufgaben 46-55, ob die jeweilige Aussage Richtig oder Falsch ist. Sie hören den Text nur einmal.",
        topic: "Interview: Nachhaltiger Tourismus",
        audioScript: "Moderator: Herzlich willkommen zu 'Reisen und Zukunft'. Heute im Studio sprechen wir mit Herrn Christian Becker vom Verein für sanften Tourismus. Herr Becker, was versteht man eigentlich unter nachhaltigem Reisen?\n\nDr. Becker: Guten Tag. Nachhaltiger Tourismus bedeutet, so zu reisen, dass die Natur geschont und die lokale Bevölkerung wirtschaftlich unterstützt wird. Es geht darum, den ökologischen Fußabdruck zu minimieren und die Kultur des Reiselandes zu respektieren.\n\nModerator: Viele Menschen fliegen mehrmals im Jahr in den Urlaub. Ist Fliegen mit nachhaltigem Tourismus überhaupt vereinbar?\n\nDr. Becker: Das ist in der Tat das größte Problem. Flugreisen verursachen enorme CO2-Emissionen. Wer nachhaltig reisen möchte, sollte auf Kurzstreckenflüge verzichten und stattdessen die Bahn nutzen. Für Fernreisen gilt die Regel: seltener fliegen, dafür aber länger am Urlaubsort bleiben, anstatt für eine Woche nach Übersee zu reisen.\n\nModerator: Welche Kriterien sollten Urlauber bei der Wahl ihrer Unterkunft beachten?\n\nDr. Becker: Man sollte Unterkünfte wählen, die umweltfreundlich geführt werden – zum Beispiel durch die Nutzung von Solarenergie, regionale Bio-Lebensmittel beim Frühstück und den Verzicht auf Plastikverpackungen. Zudem sollte das Hotel faire Löhne an die einheimischen Mitarbeiter zahlen.\n\nModerator: Herr Dr. Becker, vielen Dank für diese Ratschläge.",
        items: [
          { id: 46, statement: "Herr Christian Becker ist der Besitzer einer großen Hotelkette.", correctAnswer: "Falsch" },
          { id: 47, statement: "Das Hauptziel von nachhaltigem Tourismus ist es, möglichst billige Urlaubsreisen anzubieten.", correctAnswer: "Falsch" },
          { id: 48, statement: "Für Kurzstrecken empfiehlt Becker, auf Flugreisen zu verzichten und die Bahn zu nutzen.", correctAnswer: "Richtig" },
          { id: 49, statement: "Bei unvermeidbaren Fernreisen rät Becker, seltener zu fliegen, dafür aber länger vor Ort zu bleiben.", correctAnswer: "Richtig" },
          { id: 50, statement: "Eine nachhaltige Unterkunft zeichnet sich unter anderem durch regionale Bio-Lebensmittel aus.", correctAnswer: "Richtig" },
          { id: 51, statement: "Laut Becker sollten nachhaltige Hotels ihren einheimischen Mitarbeitern faire Löhne zahlen.", correctAnswer: "Richtig" },
          { id: 52, statement: "Flugreisen gelten wegen ihrer hohen CO2-Emissionen als problematisch für den Tourismus.", correctAnswer: "Richtig" },
          { id: 53, statement: "Sanfter Tourismus bedeutet auch, die Sitten und Bräuche des Gastlandes zu respektieren.", correctAnswer: "Richtig" },
          { id: 54, statement: "Nachhaltig geführte Unterkünfte sollten vorzugsweise Solarenergie oder andere erneuerbare Energien nutzen.", correctAnswer: "Richtig" },
          { id: 55, statement: "Die Kernaussage von Herrn Becker ist, dass umweltfreundliches Reisen unmöglich ist.", correctAnswer: "Falsch" }
        ]
      },
      {
        part: "Teil 3",
        title: "Hörverstehen (Selektives Verstehen)",
        description: "Sie hören fünf kurze Ansagen (z.B. im Radio oder an Bahnhöfen). Entscheiden Sie bei den Aufgaben 56-60, ob die Aussage Richtig oder Falsch ist. Sie hören die Ansagen nur einmal.",
        items: [
          { id: 56, speaker: "Ansage 1", audioScript: "Fahrgäste auf Gleis 4, eine wichtige Durchsage zum Intercity-Zug IC 20 nach Köln. Die Abfahrt verzögert sich heute um ca. 15 Minuten. Der Grund dafür ist eine Stellwerksstörung. Der Einlass beginnt in Kürze, bitte halten Sie Ihre Fahrkarten bereit.", statement: "Der Intercity nach Köln verspätet sich heute.", correctAnswer: "Richtig" },
          { id: 57, speaker: "Ansage 2", audioScript: "Achtung an alle Zoobesucher. Wegen starker Unwetterwarnung schließt der Zoo heute bereits um 16 Uhr statt wie gewohnt um 18 Uhr. Wir bitten Sie, das Zoogelände unverzüglich zu verlassen. Die Abendführungen fallen komplett aus.", statement: "Der Zoo schließt heute wegen eines Unwetters zwei Stunden früher.", correctAnswer: "Richtig" },
          { id: 58, speaker: "Ansage 3", audioScript: "Werte Kunden unserer Apotheke. Aus Krankheitsgründen bleibt unsere Filiale heute Nachmittag geschlossen. Die nächste geöffnete Notdienst-Apotheke befindet sich in der Hauptstraße 45, etwa zehn Gehminuten von hier entfernt.", statement: "Die Apotheke hat heute Nachmittag geschlossen.", correctAnswer: "Richtig" },
          { id: 59, speaker: "Ansage 4", audioScript: "Fahrgäste des Flugs LH 180 nach Barcelona. Das Boarding an Gate A12 hat begonnen. Reisende mit Kindern sowie Passagiere der Business Class dürfen zuerst an Bord. Bitte halten Sie Ihren Pass zur Kontrolle bereit.", statement: "Passagiere nach Barcelona können ab sofort einsteigen.", correctAnswer: "Richtig" },
          { id: 60, speaker: "Liebe Museumsbesucher, wir weisen darauf hin, dass die Mitnahme von großen Rucksäcken und Taschen in die Ausstellungsräume nicht gestattet ist. Bitte nutzen Sie unsere kostenlosen Garderobenschränke im Untergeschoss.", statement: "Besucher müssen große Taschen vor dem Museumsbesuch an der Garderobe abgeben.", correctAnswer: "Richtig" }
        ]
      }
    ]
  }
];
