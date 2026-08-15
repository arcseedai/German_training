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
          { id: 41, speaker: "Sprecher 1", audioScript: "Ein generelles Tempolimit von 130 km/h auf Autobahnen ist längst überfällig. Es würde nicht nur die Zahl der schweren Unfälle drastisch reduzieren, sondern auch einen wichtigen Beitrag zum Klimaschutz leisten, weil weniger CO2 ausgestoßen wird. Fast alle anderen europäischen Länder haben das schon längst.", statement: "Sprecher 1 fordert ein Tempolimit aus Gründen der Sicherheit und des Klimaschutzes.", correctAnswer: "Richtig" },
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
        audioScript: "Moderator: Guten Tag zu unserem wöchentlichen Magazin 'Ernährung Heute'. Wir sprechen heute mit dem Ernährungsberater Herrn Jan Becker. Herr Becker, immer mehr Menschen kaufen Bio-Produkte. Sind diese tatsächlich gesünder?\n\nBecker: Guten Tag. Die kurze Antwort lautet: Ja, aber man muss differenzieren. Bio-Lebensmittel enthalten nachweislich weniger Pestizidrückstände und oft mehr sekundäre Pflanzenstoffe. Allerdings macht allein der Stempel 'Bio' ein Produkt noch nicht gesund. Ein Bio-Keks enthält immer noch viel Zucker und Fett und ist nicht gesünder als ein normaler Apfel.\n\nModerator: Bio-Produkte sind oft erheblich teurer. Lohnt sich der Aufpreis denn wirklich?\n\nBecker: Für die Umwelt lohnt es sich in jedem Fall, da die ökologische Landwirtschaft den Boden schont und die Artenvielfalt fördert. Wer Geld sparen möchte, sollte vor allem regional und saisonal einkaufen. Ein heimischer Apfel aus konventionellem Anbau in der Saison hat oft eine bessere Ökobilanz als eine Bio-Erdbeere, die im Winter aus Südamerika eingeflogen werden muss.\n\nModerator: Viele Verbraucher sind verwirrt durch die Vielzahl an verschiedenen Bio-Siegeln. Worauf sollte man achten?\n\nBecker: Das stimmt, es ist unübersichtlich. Das EU-Bio-Siegel ist der gesetzliche Mindeststandard. Deutlich strengere Kriterien bezüglich Tierhaltung und Düngung haben jedoch die Verbände wie Demeter, Bioland oder Naturland. Wer also Wert auf maximalen Umweltschutz legt, sollte auf diese Logos achten.\n\nModerator: Herr Becker, vielen Dank für das informative Gespräch.",
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
          { id: 59, speaker: "Ansage 4", audioScript: "Sehr geehrte Fluggäste des Lufthansa-Fluges LH 250 nach Rom. Wir bitten Sie, beim Boarding am Gate A12 Ihren Reisepass sowie das ausgefüllte Einreiseformular bereitzuhalten. Ohne dieses Formular kann kein Zutritt zum Flugzeug gewährt werden.", statement: "Für den Flug nach Rom wird kein Einreiseformular benötigt.", correctAnswer: "Falsch" },
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
          { id: 43, speaker: "Sprecher 3", audioScript: "Ich fahre selbst ab und zu E-Scooter, aber die Leihgebühren sind mittlerweile viel zu hoch geworden. Für zehn Minuten Fahrt zahlt man oft fast vier Euro. Das ist teurer als ein Einzelticket für Bus und Bahn. Deshalb nutze ich sie nur noch in Ausnahmefällen, wenn ich es eilig habe.", statement: "Sprecher 3 meint, dass E-Scooter-Fahren eine günstige Alternative zum Nahverkehr ist.", correctAnswer: "Falsch" },
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
          { id: 44, speaker: "Sprecher 4", audioScript: "Unser Arbeitgeber hat die Fleischgerichte in der Kantine komplett gestrichen. Seitdem gehen viele Kollegen in den Pausen lieber zum Dönerladen oder Bäcker um die Ecke. Die Kantine macht jetzt viel weniger Umsatz, das Konzept ist also nach hinten losgegangen.", statement: "Sprecher 4 berichtet von sinkenden Kundenzahlen in der Kantine nach der Umstellung.", correctAnswer: "Richtig" },
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
        topic: "Thema: Homeschooling im Distanzunterricht",
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
  ,
  // ==================== TEST SET 9 ====================
  {
    setId: 9,
    parts: [
      {
        part: "Teil 1",
        title: "Globalverstehen (Kurze Durchsagen)",
        description: "Sie hören fünf kurze Durchsagen. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 41-45, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
        items: [
          {
            id: 41,
            topic: "Durchsage am Hauptbahnhof",
            audioScript: "Achtung an Gleis 7: Der Intercity-Express 582 nach Hamburg-Altona über Bremen, planmäßige Abfahrt um 14 Uhr 25, fährt heute nicht von Gleis 7 ab. Wegen einer kurzfristigen Weichenstörung verkehrt dieser Zug heute von Gleis 11. Reisende nach Bremen und Hamburg werden gebeten, den Übergang zu Gleis 11 zu nutzen.",
            statement: "Der ICE nach Hamburg fährt heute von einem anderen Bahnsteig als gewohnt ab.",
            correctAnswer: "Richtig"
          },
          {
            id: 42,
            topic: "Durchsage im Flughafen",
            audioScript: "Letzter Aufruf für Fluggäste nach Barcelona mit Flugnummer LH 1840. Das Boarding für diesen Flug wird in wenigen Minuten am Gate A12 geschlossen. Passagiere, die ihr Gepäck bereits aufgegeben haben, begeben sich bitte unverzüglich zur Bordkartenkontrolle.",
            statement: "Die Fluggäste nach Barcelona haben noch ausreichend Zeit zum Einsteigen.",
            correctAnswer: "Falsch"
          },
          {
            id: 43,
            topic: "Durchsage im Einkaufszentrum",
            audioScript: "Liebe Kundinnen und Kunden: Feiern Sie mit uns unser 10-jähriges Jubiläum! Nur heute erhalten Sie in allen Modeabteilungen im ersten und zweiten Obergeschoss einen Sonderrabatt von 20 Prozent auf die gesamte Sommerkollektion. Ausgenommen von der Aktion sind reduzierte Markenartikel.",
            statement: "Der Jubiläumsrabatt von 20 Prozent gilt ausnahmslos für alle Artikel im Geschäft.",
            correctAnswer: "Falsch"
          },
          {
            id: 44,
            topic: "Durchsage in der U-Bahn",
            audioScript: "Sehr geehrte Fahrgäste, wegen einer Signalstörung im Bereich Hauptwache kommt es auf den Linien U1 und U3 derzeit zu Verzögerungen von bis zu 15 Minuten. Wir bitten Sie, alternativ die parallel verkehrenden Straßenbahnlinien 14 und 16 zu nutzen. Wir bitten um Ihr Verständnis.",
            statement: "Fahrgästen wird geraten, wegen der Verzögerungen auf die Straßenbahn auszuweichen.",
            correctAnswer: "Richtig"
          },
          {
            id: 45,
            topic: "Durchsage im Kulturzentrum",
            audioScript: "Wir begrüßen alle Besucher zum heutigen Theaterabend. Wir möchten Sie darauf hinweisen, dass das Fotografieren und Filmen während der gesamten Vorstellung aus urheberrechtlichen Gründen strengstens untersagt ist. Bitte schalten Sie Ihre Mobiltelefone vor Beginn lautlos.",
            statement: "Zuschauer dürfen während des Theaterstücks ohne Blitz fotografieren.",
            correctAnswer: "Falsch"
          }
        ]
      },
      {
        part: "Teil 2",
        title: "Detailverstehen (Interview / Bericht)",
        description: "Sie hören ein Gespräch/Interview. Sie hören den Text einmal. Entscheiden Sie bei den Aufgaben 46-55, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
        topic: "Interview mit einer Meeresbiologin über Meeresschutz",
        audioScript: "Moderator: Herzlich willkommen zu unserer Wissenschaftssendung. Heute bei uns im Studio: Dr. Claudia Bergmann, Meeresbiologin am Institut für Meeresforschung. Frau Dr. Bergmann, Sie leiten seit drei Jahren ein großes Forschungsprojekt zum Zustand der europäischen Meere. Wie steht es um Nord- und Ostsee?\n\nDr. Bergmann: Guten Tag. Leider müssen wir feststellen, dass der Druck auf die Meeresökosysteme weiter zunimmt. Besonders besorgniserregend ist die Belastung durch Plastikmüll und Mikroplastik. Jährlich gelangen Millionen Tonnen Kunststoffe in die Ozeane. Was viele nicht wissen: Ein großer Teil des Mikroplastiks in europäischen Gewässern stammt nicht von Kosmetikprodukten, sondern entsteht durch den Abrieb von Autoreifen auf Straßen.\n\nModerator: Welche Folgen hat diese Verschmutzung für die Meeresbewohner?\n\nDr. Bergmann: Die winzigen Partikel werden von Muscheln, Fischen und Planktonorganismen mit Nahrung verwechselt. Die Tiere können das Plastik nicht abbauen. Es führt zu Entzündungen im Magen-Darm-Trakt und vermindert die Fortpflanzungsfähigkeit. Über die Nahrungskette landen diese Giftstoffe schließlich auch auf den Tellern der Verbraucher.\n\nModerator: Gibt es auch positive Entwicklungen zu vermelden?\n\nDr. Bergmann: Ja, durchaus. Durch strengere Fangquoten der Europäischen Union konnten sich einige Fischbestände in der Nordsee, wie beispielsweise der Hering, in den letzten Jahren wieder spürbar erholen. Allerdings bereitet uns die rasche Erwärmung des Wassers neue Sorgen. Kaltwasserliebende Arten wandern nach Norden ab, während sich neue, wärmeliebende Arten unkontrolliert ausbreiten.\n\nModerator: Was kann die Politik und was kann der Einzelne tun?\n\nDr. Bergmann: Die Politik muss vor allem die Errichtung wirksamer Meeresschutzgebiete vorantreiben, in denen industrielle Fischerei komplett verboten ist. Der Einzelne kann durch den bewussten Verzicht auf Einwegverpackungen und den Kauf regionaler Produkte einen wichtigen Beitrag leisten.",
        items: [
          { id: 46, statement: "Dr. Claudia Bergmann leitet seit fünf Jahren ein Meeresforschungsprojekt.", correctAnswer: "Falsch" },
          { id: 47, statement: "Der Zustand der europäischen Meeresökosysteme hat sich zuletzt verschlechtert.", correctAnswer: "Richtig" },
          { id: 48, statement: "Reifenabrieb ist eine der Hauptursachen für Mikroplastik in europäischen Gewässern.", correctAnswer: "Richtig" },
          { id: 49, statement: "Plastikpartikel werden von Meeresbewohnern problemlos verdaut und ausgeschieden.", correctAnswer: "Falsch" },
          { id: 50, statement: "Die Schadstoffe aus dem Plastik können über die Fische in den menschlichen Körper gelangen.", correctAnswer: "Richtig" },
          { id: 51, statement: "Alle Fischarten in der Nordsee sind vom Aussterben bedroht.", correctAnswer: "Falsch" },
          { id: 52, statement: "Strengere Fangquoten haben dazu beigetragen, dass sich der Heringsbestand erholt hat.", correctAnswer: "Richtig" },
          { id: 53, statement: "Die Erwärmung der Meere führt dazu, dass Kaltwasserfische nach Norden abwandern.", correctAnswer: "Richtig" },
          { id: 54, statement: "Dr. Bergmann fordert Zonen, in denen industrielle Fischerei komplett untersagt ist.", correctAnswer: "Richtig" },
          { id: 55, statement: "Dr. Bergmann glaubt, dass das Verhalten einzelner Verbraucher keinen Einfluss auf den Meeresschutz hat.", correctAnswer: "Falsch" }
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
            audioScript: "Kunde: Guten Tag, ich würde gerne mein Fahrrad zur Inspektion abgeben. Die Vorderbremse quietscht und die Kette springt immer ab.\nMechaniker: Gerne. Für die Jahresinspektion inklusive Bremseneinstellung und Kettenspannung berechnen wir 65 Euro. Wenn wir neue Teile brauchen, rufen wir Sie vorher an. Das Rad wäre übermorgen ab 16 Uhr abholbereit.",
            statement: "Die Reparatur des Fahrrads wird noch am selben Tag fertiggestellt.",
            correctAnswer: "Falsch"
          },
          {
            id: 57,
            topic: "Gespräch bei der Wohnungsbesichtigung",
            audioScript: "Interessent: Die Wohnung gefällt mir wirklich sehr gut. Wie hoch sind denn die Nebenkosten im Monat?\nVermieterin: Die Kaltmiete beträgt 750 Euro und die monatlichen Nebenkostenvorauszahlungen liegen bei 180 Euro. Darin sind Heizung und Warmwasser bereits enthalten, nur Strom und Internet müssen Sie selbst anmelden.",
            statement: "In den Nebenkosten von 180 Euro sind die Heizkosten bereits inbegriffen.",
            correctAnswer: "Richtig"
          },
          {
            id: 58,
            topic: "Gespräch in der Volkshochschule",
            audioScript: "Teilnehmerin: Hallo, ich interessiere mich für den Spanisch-Intensivkurs am Samstagvormittag. Gibt es da noch freie Plätze?\nMitarbeiter: Einen Moment bitte... Ja, für den Anfängerkurs A1 sind aktuell noch zwei Plätze frei. Der Kurs beginnt nächsten Samstag und umfasst acht Termine. Die Kursgebühr beträgt 120 Euro.",
            statement: "Der Spanischkurs für Anfänger ist bereits restlos ausgebucht.",
            correctAnswer: "Falsch"
          },
          {
            id: 59,
            topic: "Gespräch bei der Autovermietung",
            audioScript: "Kundin: Ich möchte meinen gebuchten Mietwagen abholen. Mein Name ist Hoffmann.\nMitarbeiter: Guten Tag, Frau Hoffmann. Ihr Kombi steht bereit. Bitte denken Sie daran, dass das Fahrzeug bei Rückgabe vollgetankt sein muss, da wir sonst eine zusätzliche Servicegebühr für das Betanken erheben müssen.",
            statement: "Die Kundin muss das Fahrzeug vor der Rückgabe wieder volltanken.",
            correctAnswer: "Richtig"
          },
          {
            id: 60,
            topic: "Gespräch in der Arztpraxis",
            audioScript: "Patient: Guten Tag, ich brauche ein Folgerezept für meine Blutdrucktabletten.\nSprechstundenhilfe: Gerne, Herr Schneider. Ihre Versicherungskarte liegt uns für dieses Quartal bereits vor. Ich drucke das Rezept sofort aus, der Arzt muss es nur noch unterschreiben. Nehmen Sie bitte kurz im Wartezimmer Platz.",
            statement: "Der Patient muss vor dem Rezeptausdruck zuerst seine Krankenkassenkarte einlesen lassen.",
            correctAnswer: "Falsch"
          }
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
        title: "Globalverstehen (Kurze Durchsagen)",
        description: "Sie hören fünf kurze Durchsagen. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 41-45, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
        items: [
          {
            id: 41,
            topic: "Durchsage im Kunstmuseum",
            audioScript: "Liebe Besucherinnen und Besucher: In zehn Minuten beginnt im Foyer die kostenlose Sonderführung durch unsere Sonderausstellung 'Meister des Expressionismus'. Unser Kurator Dr. Wagner wird Sie durch die Galerien begleiten. Die Teilnehmerzahl ist auf 25 Personen begrenzt.",
            statement: "Für die Sonderführung im Museum muss eine zusätzliche Gebühr bezahlt werden.",
            correctAnswer: "Falsch"
          },
          {
            id: 42,
            topic: "Verkehrsfunk im Radio",
            audioScript: "Achtung Autofahrer auf der A3 Frankfurt Richtung Würzburg: Zwischen Aschaffenburg und Weibersbrunn gibt es nach einem LKW-Unfall aktuell 8 Kilometer Stau. Die Bergungsarbeiten dauern an. Autofahrern wird empfohlen, ab der Ausfahrt Stockstadt die ausgeschilderte Umleitung U42 zu nutzen.",
            statement: "Autofahrer auf der A3 werden gebeten, die ausgeschilderte Umleitungsstrecke zu fahren.",
            correctAnswer: "Richtig"
          },
          {
            id: 43,
            topic: "Wetterwarnung im Radio",
            audioScript: "Der Deutsche Wetterdienst warnt für den heutigen Nachmittag vor schweren Unwettern im gesamten Alpenvorland. Ab 16 Uhr ist mit Starkregen, Sturmböen bis 100 km/h und lokalem Hagel zu rechnen. Bitte sichern Sie lose Gegenstände im Garten und meiden Sie Aufenthalte im Freien.",
            statement: "Für das Alpenvorland wird vor stürmischem Unwetter mit Hagel gewarnt.",
            correctAnswer: "Richtig"
          },
          {
            id: 44,
            topic: "Durchsage im Baumarkt",
            audioScript: "Herr Meier von der Sanitärabteilung bitte an Information 2. Ein Kunde wartet auf Beratung zum Einbau einer barrierefreien Dusche. Herr Meier bitte an Information 2.",
            statement: "In der Durchsage wird ein Mitarbeiter zu einer Kundenberatung gerufen.",
            correctAnswer: "Richtig"
          },
          {
            id: 45,
            topic: "Durchsage in der Stadtbibliothek",
            audioScript: "Verehrte Besucher, die Stadtbibliothek schließt in 15 Minuten um 19 Uhr. Bitte schließen Sie Ihre Recherchen an den Computern ab und leihen Sie Ihre ausgewählten Medien an den Selbstverbuchungsautomaten im Erdgeschoss aus. Ab morgen früh um 9 Uhr sind wir wieder für Sie da.",
            statement: "Bücher können nur bis 18 Uhr an den Automaten ausgeliehen werden.",
            correctAnswer: "Falsch"
          }
        ]
      },
      {
        part: "Teil 2",
        title: "Detailverstehen (Interview / Bericht)",
        description: "Sie hören ein Gespräch/Interview. Sie hören den Text einmal. Entscheiden Sie bei den Aufgaben 46-55, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
        topic: "Interview über Elektromobilität und die Zukunft des Verkehrs",
        audioScript: "Moderator: Willkommen zu unserem Wirtschaftsmagazin. Heute sprechen wir mit Dipl.-Ing. Stefan Holzinger vom Bundesverband für Elektromobilität. Herr Holzinger, die Verkaufszahlen von reinen Elektroautos sind im vergangenen Jahr weiter gestiegen. Ist der Verbrennungsmotor bald Geschichte?\n\nStefan Holzinger: Guten Abend. Wir sehen in der Tat einen unumkehrbaren Wandel. Fast alle großen Automobilhersteller investieren inzwischen den Großteil ihrer Entwicklungsgelder in batterieelektrische Plattformen. Die Batterietechnologie macht enorme Fortschritte: Moderne Fahrzeuge bieten heute Reichweiten von über 500 Kilometern, und an Schnellladesäulen lässt sich der Akku in unter 20 Minuten auf achtzig Prozent aufladen.\n\nModerator: Doch viele Bürger klagen nach wie vor über eine unzureichende Ladeinfrastruktur, besonders Mieter in Großstädten.\n\nStefan Holzinger: Das ist ein berechtigter Kritikpunkt. Wer ein eigenes Haus mit Garage besitzt, kann bequem über Nacht an der eigenen Wallbox laden. Für Mieter in Mehrfamilienhäusern ohne festen Stellplatz ist die Situation schwieriger. Hier müssen die Kommunen den Ausbau von öffentlichen Ladesäulen am Straßenrand und auf Supermarktparkplätzen massiv beschleunigen.\n\nModerator: Wie sieht es mit den Kosten aus? E-Autos sind in der Anschaffung meist teurer als vergleichbare Benziner.\n\nStefan Holzinger: Der Kaufpreis liegt derzeit noch höher, das stimmt. Allerdings sind die laufenden Kosten – also Wartung, Reparaturen und Treibstoff – bei E-Autos deutlich niedriger. Da ein Elektromotor aus viel weniger beweglichen Teilen besteht, fallen teure Ölwechsel oder Reparaturen an Auspuff und Getriebe komplett weg. Über die gesamte Lebensdauer gerechnet ist ein E-Auto heute oft schon günstiger.\n\nModerator: Welche Rolle spielt Wasserstoff im Individualverkehr?\n\nStefan Holzinger: Für normale PKW hat sich die Batterie durchgesetzt, da der Wirkungsgrad von Wasserstoffautos viel schlechter ist. Im Schwerlastverkehr, bei LKW, Bussen und Schiffen, wird grüner Wasserstoff jedoch eine entscheidende Rolle spielen.",
        items: [
          { id: 46, statement: "Stefan Holzinger vertritt den Bundesverband für Elektromobilität.", correctAnswer: "Richtig" },
          { id: 47, statement: "Automobilhersteller investieren kaum noch Gelder in die Entwicklung von Elektrofahrzeugen.", correctAnswer: "Falsch" },
          { id: 48, statement: "Moderne Elektroautos erreichen heutzutage Reichweiten von mehr als 500 Kilometern.", correctAnswer: "Richtig" },
          { id: 49, statement: "Hausbesitzer können ihre Fahrzeuge unkompliziert zu Hause aufladen.", correctAnswer: "Richtig" },
          { id: 50, statement: "Für Mieter in Großstädten gibt es bereits ausreichend öffentliche Ladepunkte.", correctAnswer: "Falsch" },
          { id: 51, statement: "Der Anschaffungspreis von E-Autos ist zurzeit meist noch höher als bei Benzinern.", correctAnswer: "Richtig" },
          { id: 52, statement: "Elektromotoren benötigen regelmäßige und aufwendige Ölwechsel.", correctAnswer: "Falsch" },
          { id: 53, statement: "Bei den Gesamtkosten über die Nutzungsdauer können Elektroautos schon heute günstiger sein.", correctAnswer: "Richtig" },
          { id: 54, statement: "Wasserstoffantriebe haben sich bei normalen PKW gegen batterieelektrische Autos durchgesetzt.", correctAnswer: "Falsch" },
          { id: 55, statement: "Experten sehen die Zukunft von Wasserstoff vor allem im Schwerlast- und Güterverkehr.", correctAnswer: "Richtig" }
        ]
      },
      {
        part: "Teil 3",
        title: "Selektives Verstehen (Gespräche / Alltägliche Situationen)",
        description: "Sie hören fünf kurze Gespräche. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 56-60, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
        items: [
          {
            id: 56,
            topic: "Gespräch im Reisebüro",
            audioScript: "Kunde: Wir planen einen Wanderurlaub in den Dolomiten für Anfang September. Können Sie uns ein Hotel mit Wellnessbereich empfehlen?\nReiseberaterin: Da hätte ich das Berghotel Alpenblick in Südtirol. Es verfügt über eine tolle Saunalandschaft und bietet geführte Wandertouren an. Wenn Sie bis Ende der Woche buchen, erhalten Sie zehn Prozent Frühbucherrabatt.",
            statement: "Das empfohlene Berghotel verfügt über eine Sauna und bietet geführte Wanderungen an.",
            correctAnswer: "Richtig"
          },
          {
            id: 57,
            topic: "Gespräch im Fitnessstudio",
            audioScript: "Interessent: Ich würde gerne wissen, welche Kündigungsfristen bei Ihrem Jahresvertrag gelten.\nTrainer: Unser Jahresvertrag verlängert sich nach Ablauf der zwölf Monate automatisch um jeweils einen Monat, sofern nicht mit einer Frist von vier Wochen gekündigt wird. Die Kündigung kann bequem online über unser Mitgliederportal eingereicht werden.",
            statement: "Nach Ablauf des ersten Jahres verlängert sich der Vertrag automatisch um ein weiteres volles Jahr.",
            correctAnswer: "Falsch"
          },
          {
            id: 58,
            topic: "Gespräch beim Kochkurs",
            audioScript: "Kursleiterin: Willkommen zu unserem veganen Kochkurs. Heute bereiten wir ein Drei-Gänge-Menü ohne tierische Produkte zu. Bevor wir mit dem Schneiden des Gemüses beginnen, waschen sich bitte alle gründlich die Hände und binden die Schürzen um.",
            statement: "Im Kochkurs werden heute Fleisch- und Fischgerichte zubereitet.",
            correctAnswer: "Falsch"
          },
          {
            id: 59,
            topic: "Gespräch in der Tierarztpraxis",
            audioScript: "Hundehalter: Mein Hund kratzt sich seit Tagen ständig an den Ohren.\nTierärztin: Lassen Sie mich mal nachsehen... Ja, im linken Ohr hat er eine leichte Entzündung durch Ohrmilben. Ich gebe Ihnen spezielle Tropfen mit. Die müssen Sie ihm zweimal täglich für eine Woche ins Ohr träufeln.",
            statement: "Der Hund muss die Ohrentropfen zweimal täglich über einen Zeitraum von einer Woche bekommen.",
            correctAnswer: "Richtig"
          },
          {
            id: 60,
            topic: "Gespräch beim Möbelkauf",
            audioScript: "Kundin: Liefern Sie das Sofa auch in den vierten Stock ohne Aufzug?\nVerkäufer: Ja, unser Zwei-Mann-Lieferservice bringt das Möbelstück direkt in Ihr Wohnzimmer. Der Aufpreis für Etagenlieferungen ohne Aufzug beträgt pauschal 25 Euro.",
            statement: "Die Lieferung des Sofas in den vierten Stock ist komplett kostenfrei.",
            correctAnswer: "Falsch"
          }
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
        title: "Globalverstehen (Kurze Durchsagen)",
        description: "Sie hören fünf kurze Durchsagen. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 41-45, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
        items: [
          {
            id: 41,
            topic: "Durchsage im ICE Zug",
            audioScript: "Sehr geehrte Fahrgäste, wir informieren Sie darüber, dass unser Bordrestaurant auf der heutigen Fahrt wegen eines technischen Defekts an der Kühlanlage leider geschlossen bleiben muss. Heiß- und Kaltgetränke sowie kleine Snacks sind jedoch weiterhin am Bistro-Tresen in Wagen 5 erhältlich.",
            statement: "Im Zug können die Fahrgäste heute überhaupt keine Getränke kaufen.",
            correctAnswer: "Falsch"
          },
          {
            id: 42,
            topic: "Durchsage im Theater",
            audioScript: "Meine Damen und Herren, die Vorstellung beginnt in drei Minuten. Bitte nehmen Sie Ihre Plätze im Saal ein und beenden Sie private Gespräche. Nach Beginn der Vorstellung ist ein Einlass erst wieder zur Pause nach dem zweiten Akt möglich.",
            statement: "Verspätete Zuschauer können nach Beginn des Stücks erst zur Pause in den Saal.",
            correctAnswer: "Richtig"
          },
          {
            id: 43,
            topic: "Durchsage im Zoo",
            audioScript: "Liebe Zoobesucher, in wenigen Minuten um 14 Uhr 30 findet die kommentierte Fütterung der Seelöwen am großen Becken statt. Unsere Tierpfleger erklären spannende Fakten über das Verhalten und die Lebensweise der Tiere. Der Treffpunkt ist direkt an der Aussichtsplattform.",
            statement: "Die Seelöwenfütterung mit Tierpflegern beginnt um halb drei.",
            correctAnswer: "Richtig"
          },
          {
            id: 44,
            topic: "Durchsage im Hallenbad",
            audioScript: "Achtung Badegäste: Das Sportbecken ist in der Zeit von 16 bis 18 Uhr wegen des Trainings des städtischen Schwimmvereins für den öffentlichen Badebetrieb gesperrt. Das Erlebnisbecken und die Saunalandschaft stehen Ihnen uneingeschränkt zur Verfügung.",
            statement: "Das gesamte Hallenbad ist am Nachmittag für alle Besucher geschlossen.",
            correctAnswer: "Falsch"
          },
          {
            id: 45,
            topic: "Durchsage im Supermarkt",
            audioScript: "Werte Kundschaft, an Kasse 3 eröffnet ab sofort eine zusätzliche Bedienkasse für Kunden mit einem schnellen Einkauf von bis zu zehn Artikeln. Bitte nutzen Sie diese Kasse für eine zügige Bezahlung.",
            statement: "Kasse 3 ist als Schnellkasse für kleine Einkäufe geöffnet worden.",
            correctAnswer: "Richtig"
          }
        ]
      },
      {
        part: "Teil 2",
        title: "Detailverstehen (Interview / Bericht)",
        description: "Sie hören ein Gespräch/Interview. Sie hören den Text einmal. Entscheiden Sie bei den Aufgaben 46-55, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
        topic: "Interview mit einem Schlafforscher über Schlafqualität",
        audioScript: "Moderator: Herzlich willkommen zu unserer Gesundheitssendung. Heute bei uns zu Gast: Prof. Dr. Martin Weiland, Leiter des Zentrums für Schlafmedizin an der Universitätsklinik Heidelberg. Herr Professor Weiland, laut aktuellen Studien klagt fast jeder dritte Erwachsene in Deutschland über regelmäßige Ein- oder Durchschlafstörungen. Warum schlafen wir heute so schlecht?\n\nProf. Weiland: Guten Abend. Die Ursachen sind vielfältig, doch der Hauptgrund liegt in unserem modernen, digitalisierten Lebensstil. Früher folgte der Tagesablauf dem natürlichen Rhythmus von Sonnenauf- und -untergang. Heute verlängern wir den Tag künstlich durch elektrisches Licht und Bildschirme. Das blaue Licht von Smartphones, Tablets und Laptops hemmt im Gehirn die Produktion des Schlafhormons Melatonin, das dem Körper signalisiert, dass es Zeit zur Ruhe ist.\n\nModerator: Welche gesundheitlichen Folgen hat dauerhafter Schlafmangel?\n\nProf. Weiland: Die Auswirkungen werden oft dramatisch unterschätzt. Wer über Monate hinweg weniger als sechs Stunden pro Nacht schläft, schwächt sein Immunsystem massiv. Das Risiko für Herz-Kreislauf-Erkrankungen, Bluthochdruck und Diabetes Typ 2 steigt signifikant. Zudem leidet die kognitive Leistungsfähigkeit: Konzentration, Reaktionszeit und Gedächtnisbildung sind stark beeinträchtigt.\n\nModerator: Viele Menschen greifen bei Schlafproblemen zu Schlaftabletten. Was halten Sie davon?\n\nProf. Weiland: Von frei verkäuflichen oder verschreibungspflichtigen Schlafmitteln als Dauerlösung rate ich dringend ab. Sie erzeugen oft eine schnelle psychische und körperliche Abhängigkeit und verändern die natürliche Schlafarchitektur – man schläft zwar ein, verbringt aber weniger Zeit in den erholsamen Tiefschlaf- und Traumphasen.\n\nModerator: Welche natürlichen Regeln für eine gute Schlafhygiene empfehlen Sie?\n\nProf. Weiland: Regelmäßigkeit ist das oberste Gebot: Versuchen Sie, jeden Tag zur gleichen Zeit ins Bett zu gehen und aufzustehen – auch am Wochenende. Das Schlafzimmer sollte kühl sein, ideal sind 16 bis 18 Grad. Mindestens eine Stunde vor dem Schlafen sollten alle Bildschirme ausgeschaltet werden. Und wer nachts wachliegt, sollte nicht frustriert auf die Uhr schauen, sondern aufstehen, bei gedimmtem Licht etwas Beruhigendes lesen und erst wieder ins Bett gehen, wenn die Müdigkeit zurückkehrt.",
        items: [
          { id: 46, statement: "Prof. Dr. Martin Weiland leitet ein schlafmedizinisches Zentrum.", correctAnswer: "Richtig" },
          { id: 47, statement: "Nur ein sehr kleiner Teil der Erwachsenen in Deutschland leidet unter Schlafstörungen.", correctAnswer: "Falsch" },
          { id: 48, statement: "Blaues Bildschirmlicht fördert die natürliche Bildung des Hormons Melatonin.", correctAnswer: "Falsch" },
          { id: 49, statement: "Dauerhafter Schlafmangel kann das Risiko für Diabetes und Bluthochdruck erhöhen.", correctAnswer: "Richtig" },
          { id: 50, statement: "Schlafmangel hat keinerlei Einfluss auf die Konzentrationsfähigkeit im Alltag.", correctAnswer: "Falsch" },
          { id: 51, statement: "Prof. Weiland empfiehlt Schlaftabletten als ideale langfristige Lösung.", correctAnswer: "Falsch" },
          { id: 52, statement: "Medikamente können die natürlichen Tiefschlafphasen des Körpers stören.", correctAnswer: "Richtig" },
          { id: 53, statement: "Feste Schlaf- und Aufstehzeiten sind wichtig für einen gesunden Biorhythmus.", correctAnswer: "Richtig" },
          { id: 54, statement: "Die optimale Raumtemperatur im Schlafzimmer liegt laut Experte zwischen 16 und 18 Grad.", correctAnswer: "Richtig" },
          { id: 55, statement: "Wer nachts aufwacht, sollte unbedingt ständig auf die Uhr blicken.", correctAnswer: "Falsch" }
        ]
      },
      {
        part: "Teil 3",
        title: "Selektives Verstehen (Gespräche / Alltägliche Situationen)",
        description: "Sie hören fünf kurze Gespräche. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 56-60, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
        items: [
          {
            id: 56,
            topic: "Gespräch im Elektronikfachmarkt",
            audioScript: "Kunde: Ich suche einen neuen Laptop für die Universität. Er sollte leicht sein und eine lange Akkulaufzeit haben.\nVerkäufer: Da empfehle ich Ihnen dieses 14-Zoll-Modell. Es wiegt nur 1,2 Kilogramm und der Akku hält bei Textverarbeitung und Webrecherche bis zu 12 Stunden durch. Zudem erhalten Studenten aktuell 50 Euro Rabatt gegen Vorlage des Studienausweises.",
            statement: "Studenten erhalten beim Kauf des empfohlenen Laptops einen Preisnachlass von 50 Euro.",
            correctAnswer: "Richtig"
          },
          {
            id: 57,
            topic: "Gespräch in der Buchhandlung",
            audioScript: "Kundin: Haben Sie den neuen Kriminalroman von Charlotte Link vorrätig?\nBuchhändler: Leider ist das Buch im Laden gerade vergriffen. Ich kann es Ihnen aber gerne zur Ansicht bestellen. Wenn ich die Bestellung jetzt aufgebe, liegt das Buch morgen ab 11 Uhr für Sie zur Abholung bereit.",
            statement: "Das gewünschte Buch ist sofort im Regal der Buchhandlung verfügbar.",
            correctAnswer: "Falsch"
          },
          {
            id: 58,
            topic: "Gespräch im Rathaus / Bürgeramt",
            audioScript: "Bürgerin: Ich möchte meinen neuen Personalausweis beantragen. Ich habe ein biometrisches Passfoto und meine Geburtsurkunde dabei.\nSachbearbeiter: Sehr gut, die Unterlagen sind vollständig. Die Bearbeitungszeit bei der Bundesdruckerei beträgt aktuell etwa drei bis vier Wochen. Sie erhalten eine Benachrichtigung per Post, sobald das Dokument abholbereit ist.",
            statement: "Der neue Personalausweis kann nach 3 bis 4 Wochen abgeholt werden.",
            correctAnswer: "Richtig"
          },
          {
            id: 59,
            topic: "Gespräch beim Autokauf",
            audioScript: "Käufer: Ist bei dem Gebrauchtwagen der Zahnriemen schon gewechselt worden?\nVerkäufer: Ja, der Vorbesitzer hat den Zahnriemen und die Wasserpumpe bei der letzten großen Inspektion vor 5.000 Kilometern in einer Vertragswerkstatt erneuern lassen. Das Scheckheft ist lückenlos gepflegt.",
            statement: "Der Zahnriemen des Fahrzeugs muss dringend erneuert werden.",
            correctAnswer: "Falsch"
          },
          {
            id: 60,
            topic: "Gespräch im Gartencenter",
            audioScript: "Kundin: Ich suche winterharte Pflanzen für meinen Nordbalkon, auf den kaum direkte Sonne fällt.\nGärtner: Für schattige Lagen eignen sich Funkien, Farne und Efeu hervorragend. Diese Pflanzen gedeihen auch ohne Sonnenlicht prächtig und überstehen Frost im Winter problemlos im Topf.",
            statement: "Die empfohlenen Pflanzen sind für schattige Standorte geeignet und frostresistent.",
            correctAnswer: "Richtig"
          }
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
        title: "Globalverstehen (Kurze Durchsagen)",
        description: "Sie hören fünf kurze Durchsagen. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 41-45, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
        items: [
          {
            id: 41,
            topic: "Durchsage im Regionalzug",
            audioScript: "Sehr geehrte Fahrgäste, wegen dringender Bauarbeiten an der Strecke endet dieser Zug heute vorzeitig in Kassel-Wilhelmshöhe. Für die Weiterfahrt in Richtung Göttingen und Hannover ist ein Schienenersatzverkehr mit Bussen eingerichtet. Die Busse warten auf dem Bahnhofsvorplatz.",
            statement: "Die Fahrgäste müssen in Kassel-Wilhelmshöhe auf Busse umsteigen.",
            correctAnswer: "Richtig"
          },
          {
            id: 42,
            topic: "Durchsage an der Universität",
            audioScript: "Achtung Studierende: Die Vorlesung 'Einführung in die Volkswirtschaftslehre' von Prof. Dr. Schuster findet heute nicht im Hörsaal 3, sondern im Audimax im Hauptgebäude statt. Der Beginn verschiebt sich um 15 Minuten auf 10 Uhr 15.",
            statement: "Die Vorlesung findet heute im Audimax statt und beginnt eine Viertelstunde später.",
            correctAnswer: "Richtig"
          },
          {
            id: 43,
            topic: "Durchsage im Kaufhaus",
            audioScript: "Eine wichtige Durchsage: An unserer Information im Erdgeschoss wurde ein schwarzes Portemonnaie mit Personalausweis und Bargeld abgegeben. Der rechtmäßige Eigentümer wird gebeten, sich unter Vorlage eines Nachweises an der Hauptkasse zu melden.",
            statement: "Im Kaufhaus wurde eine gefundene Geldbörse abgegeben.",
            correctAnswer: "Richtig"
          },
          {
            id: 44,
            topic: "Durchsage im Möbelhaus",
            audioScript: "Kunden mit der Abholnummer 348 begeben sich bitte zur Warenausgabe Tor 4. Ihre bestellten Möbelstücke sind zur Verladung bereitgestellt. Kunden mit der Nummer 348 bitte an Tor 4.",
            statement: "Die Waren für die Abholnummer 348 stehen zur Abholung bereit.",
            correctAnswer: "Richtig"
          },
          {
            id: 45,
            topic: "Durchsage im Schwimmbad",
            audioScript: "Aufgrund von Reinigungsarbeiten schließt die Saunalandschaft heute bereits um 20 Uhr, zwei Stunden früher als gewöhnlich. Das Hallenbad bleibt regulär bis 22 Uhr geöffnet.",
            statement: "Das Hallenbad schließt heute ebenfalls um 20 Uhr.",
            correctAnswer: "Falsch"
          }
        ]
      },
      {
        part: "Teil 2",
        title: "Detailverstehen (Interview / Bericht)",
        description: "Sie hören ein Gespräch/Interview. Sie hören den Text einmal. Entscheiden Sie bei den Aufgaben 46-55, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
        topic: "Interview mit einer Stadt-Imkerin über Bienenhaltung",
        audioScript: "Moderator: Herzlich willkommen zu unserem Umweltmagazin. Heute im Studio: Susanne Krause, passionierte Imkerin und Vorsitzende des Vereins 'Bienen in der Stadt'. Frau Krause, Imkern mitten in der Großstadt liegt voll im Trend. Auf Dächern von Rathäusern, Banken und Privathäusern summt es immer lauter. Warum fühlen sich Bienen in der Stadt oft wohler als auf dem Land?\n\nSusanne Krause: Guten Tag. Das klingt auf den ersten Blick paradox, hat aber handfeste ökologische Gründe. In der modernen industriellen Landwirtschaft gibt es oft riesige Monokulturen wie Raps- oder Maisfelder. Wenn diese verblüht sind, finden Bienen auf dem Land ab Hochsommer kaum noch Nahrung. Zudem werden auf den Feldern viele chemische Pflanzenschutzmittel eingesetzt. In der Stadt hingegen gibt es von März bis Oktober ein durchgehendes Blütenangebot durch Parks, Gärten, Balkone und Friedhöfe. Außerdem ist der Einsatz von Pestiziden im städtischen Raum weitgehend verboten.\n\nModerator: Schmeckt Stadthonig denn anders als Landhonig und ist er durch Abgase belastet?\n\nSusanne Krause: Regelmäßige Laboruntersuchungen zeigen erfreulicherweise, dass Stadthonig von herausragender Reinheit ist. Feinstaub und Schwermetalle lagern sich in den Wurzeln und Blättern der Pflanzen ab, gelangen aber praktisch nicht in den Nektar der Blüten. Durch die enorme Vielfalt an Blüten ist Stadthonig oft besonders aromatisch und komplex im Geschmack.\n\nModerator: Was muss man beachten, wenn man selbst in der Stadt Bienen halten möchte?\n\nSusanne Krause: Man sollte unbedingt vor der Anschaffung eines Bienenvolks einen Imker-Grundkurs besuchen. Bienenhaltung bedeutet Verantwortung für Lebewesen und erfordert Fachwissen über Krankheiten wie die gefürchtete Varroamilbe. Zudem muss die Haltung beim Veterinäramt gemeldet und mit den Nachbarn abgesprochen werden.",
        items: [
          { id: 46, statement: "Susanne Krause ist Vorsitzende eines Vereins für urbane Imkerei.", correctAnswer: "Richtig" },
          { id: 47, statement: "In Städten finden Bienen über viele Monate hinweg ein vielfältiges Blütenangebot.", correctAnswer: "Richtig" },
          { id: 48, statement: "Auf dem Land gibt es für Bienen bis zum Spätherbst immer reichlich Nahrung.", correctAnswer: "Falsch" },
          { id: 49, statement: "In städtischen Parks werden mehr chemische Pestizide eingesetzt als auf Äckern.", correctAnswer: "Falsch" },
          { id: 50, statement: "Laboranalysen belegen, dass Stadthonig stark mit Schwermetallen und Abgasen belastet ist.", correctAnswer: "Falsch" },
          { id: 51, statement: "Stadthonig zeichnet sich durch ein besonders aromatisches Geschmacksprofil aus.", correctAnswer: "Richtig" },
          { id: 52, statement: "Jeder Bürger darf ohne Vorkenntnisse und ohne Kurs sofort Bienen halten.", correctAnswer: "Falsch" },
          { id: 53, statement: "Die Varroamilbe ist eine bekannte Bienenkrankheit, die Imker bekämpfen müssen.", correctAnswer: "Richtig" },
          { id: 54, statement: "Eine Bienenhaltung in der Stadt muss bei den Behörden angemeldet werden.", correctAnswer: "Richtig" },
          { id: 55, statement: "Frau Krause rät davon ab, vor der Bienenhaltung mit den Nachbarn zu sprechen.", correctAnswer: "Falsch" }
        ]
      },
      {
        part: "Teil 3",
        title: "Selektives Verstehen (Gespräche / Alltägliche Situationen)",
        description: "Sie hören fünf kurze Gespräche. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 56-60, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
        items: [
          {
            id: 56,
            topic: "Gespräch im Büro",
            audioScript: "Kollege: Hast du schon die Präsentation für das Kundentreffen morgen fertiggestellt?\nKollegin: Fast. Die Folien zu den Finanzdaten sind fertig, mir fehlen nur noch die aktuellen Grafiken aus der Marketingabteilung. Herr Weber wollte sie mir bis 16 Uhr per E-Mail schicken.",
            statement: "Die Kollegin wartet noch auf Unterlagen aus der Marketingabteilung.",
            correctAnswer: "Richtig"
          },
          {
            id: 57,
            topic: "Gespräch bei der Autopanne",
            audioScript: "Autofahrerin: Hallo Pannendienst, mein Wagen springt nach dem Tanken nicht mehr an. Die Batterie scheint komplett leer zu sein.\nDisponent: Wir schicken Ihnen sofort einen Pannenhelfer mit einem Überbrückungskabel vorbei. Er sollte in etwa 25 Minuten bei Ihnen an der Autobahnraststätte sein.",
            statement: "Der Pannenhelfer wird in ungefähr 25 Minuten bei der Autofahrerin eintreffen.",
            correctAnswer: "Richtig"
          },
          {
            id: 58,
            topic: "Gespräch in der Musikschule",
            audioScript: "Mutter: Ich möchte meinen 8-jährigen Sohn für Gitarrenunterricht anmelden.\nMusikschulleiter: Sehr gerne. Wir haben dienstags um 15 Uhr einen Platz im Gruppenunterricht frei, maximal vier Kinder pro Gruppe. Die monatliche Unterrichtsgebühr beträgt 48 Euro.",
            statement: "Der angebotene Gitarrenunterricht findet als Einzelunterricht statt.",
            correctAnswer: "Falsch"
          },
          {
            id: 59,
            topic: "Gespräch beim Tierarzt",
            audioScript: "Katzenbesitzerin: Meine Katze frisst seit zwei Tagen kaum noch und schläft nur.\nTierarzt: Wir messen zuerst Fieber. Ihre Temperatur ist leicht erhöht. Ich nehme ihr jetzt etwas Blut ab, um eine Infektion auszuschließen. Die Ergebnisse haben wir in einer halben Stunde.",
            statement: "Die Blutwerte der Katze liegen erst nach mehreren Tagen vor.",
            correctAnswer: "Falsch"
          },
          {
            id: 60,
            topic: "Gespräch in der Autowaschanlage",
            audioScript: "Kunde: Ich hätte gerne das Komplettprogramm mit Unterbodenwäsche und Heißwachs.\nMitarbeiter: Sehr gerne, das macht 16,50 Euro. Bitte klappen Sie vor der Einfahrt die Außenspiegel ein und schrauben Sie die Dachantenne ab.",
            statement: "Der Kunde soll vor der Wäsche Antenne und Spiegel anpassen.",
            correctAnswer: "Richtig"
          }
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
        title: "Globalverstehen (Kurze Durchsagen)",
        description: "Sie hören fünf kurze Durchsagen. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 41-45, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
        items: [
          {
            id: 41,
            topic: "Durchsage am Flughafen",
            audioScript: "Achtung Fluggäste des Lufthansa-Fluges LH 450 aus New York: Ihr Gepäck wird auf Gepäckband 4 ausgegeben, nicht wie ursprünglich angezeigt auf Band 2. Wir bitten die Unannehmlichkeit zu entschuldigen.",
            statement: "Das Gepäck des Fluges aus New York kommt auf Gepäckband 4 an.",
            correctAnswer: "Richtig"
          },
          {
            id: 42,
            topic: "Durchsage auf der Messe",
            audioScript: "Sehr geehrte Messebesucher, in Halle 3 beginnt um 11 Uhr das Expertenforum zum Thema 'Künstliche Intelligenz im Mittelstand'. Fachreferenten stellen praxisnahe Anwendungen vor. Die Teilnahme ist für alle Messebesucher kostenfrei.",
            statement: "Das Expertenforum in Halle 3 ist für Messebesucher ohne Aufpreis zugänglich.",
            correctAnswer: "Richtig"
          },
          {
            id: 43,
            topic: "Durchsage in der Straßenbahn",
            audioScript: "Fahrgäste bitte beachten: Wegen eines Falschparkers in der Fußgängerzone kann die Linie 12 aktuell nicht bis zur Endhaltestelle Zoo fahren. Die Bahn wendet vorzeitig am Theaterplatz. Fahrgäste zum Zoo nutzen bitte die Buslinie 30.",
            statement: "Die Straßenbahnlinie 12 fährt heute regulär bis zum Zoo.",
            correctAnswer: "Falsch"
          },
          {
            id: 44,
            topic: "Durchsage im Freizeitpark",
            audioScript: "Liebe Parkgäste, wegen routinemäßiger Sicherheitsüberprüfungen bleibt die Wildwasserbahn in den nächsten zwei Stunden vorübergehend außer Betrieb. Alle anderen Attraktionen im Park stehen Ihnen wie gewohnt zur Verfügung.",
            statement: "Die Wildwasserbahn ist für etwa zwei Stunden vorübergehend geschlossen.",
            correctAnswer: "Richtig"
          },
          {
            id: 45,
            topic: "Durchsage im Konzertsaal",
            audioScript: "Wir bitten um Ihre Aufmerksamkeit: Das Mitbringen von Glasflaschen, Dosen und großen Taschen über DIN-A4-Größe in den Konzertsaal ist aus Sicherheitsgründen untersagt. Bitte nutzen Sie unsere kostenlose Garderobe im Foyer.",
            statement: "Besucher dürfen eigene Glasflaschen mit in den Saal nehmen.",
            correctAnswer: "Falsch"
          }
        ]
      },
      {
        part: "Teil 2",
        title: "Detailverstehen (Interview / Bericht)",
        description: "Sie hören ein Gespräch/Interview. Sie hören den Text einmal. Entscheiden Sie bei den Aufgaben 46-55, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
        topic: "Interview mit einem Stadtplaner über die autofreie Stadt",
        audioScript: "Moderator: Herzlich willkommen zu unserem Stadtmagazin. Heute im Gespräch: Dr. Thomas Weimann, Stadtentwickler und Mobilitätsforscher. Herr Dr. Weimann, immer mehr europäische Metropolen wie Paris, Barcelona oder Kopenhagen verbannen Autos schrittweise aus ihren Innenstädten. Ist die autofreie Stadt auch in Deutschland ein Zukunftsmodell?\n\nDr. Weimann: Guten Tag. Die Idee einer stadtverträglichen Mobilität gewinnt auch bei uns massiv an Unterstützung. Jahrzehntelang war die Stadtplanung fast ausschließlich auf den Autoverkehr ausgerichtet. Das Resultat sind verstopfte Straßen, Lärm, schlechte Luft und ein enormer Flächenverbrauch für Parkplätze. Wenn wir Straßenabschnitte für Autos sperren und begrünen, schaffen wir Raum für Fußgänger, spielende Kinder, Außengastronomie und sichere Radwege.\n\nModerator: Viele Einzelhändler befürchten jedoch drastische Umsatzeinbrüche, wenn Kunden nicht mehr mit dem Auto vor die Geschäfte fahren können.\n\nDr. Weimann: Diese Sorge hören wir bei fast jedem Projekt, doch internationale Studien und Erfahrungen aus Städten wie Wien oder Gent belegen das genaue Gegenteil. Fußgängerzonen und verkehrsberuhigte Boulevards laden zum Verweilen ein. Menschen, die zu Fuß oder mit dem Rad unterwegs sind, kaufen häufiger und insgesamt für mehr Geld in lokalen Geschäften ein als Autofahrer, die nur schnell einen Parkplatz suchen.\n\nModerator: Aber was ist mit älteren Menschen oder Bewohnern aus dem Umland, die auf das Auto angewiesen sind?\n\nDr. Weimann: Eine autofreie Innenstadt bedeutet ja nicht, dass überhaupt keine Mobilität mehr möglich ist. Lieferverkehr, Handwerker, Rettungsdienste und Menschen mit Schwerbehinderung erhalten selbstverständlich Sondergenehmigungen. Zudem müssen am Stadtrand große Park-and-Ride-Parkplätze mit direkter, schneller Bahnanbindung entstehen, damit Pendler bequem umsteigen können.",
        items: [
          { id: 46, statement: "Dr. Thomas Weimann forscht im Bereich der Stadt- und Verkehrsplanung.", correctAnswer: "Richtig" },
          { id: 47, statement: "In den letzten Jahrzehnten wurden Städte vor allem für Fußgänger und Radfahrer geplant.", correctAnswer: "Falsch" },
          { id: 48, statement: "Verkehrsberuhigte Zonen schaffen mehr Platz für Gastronomie und Grünflächen.", correctAnswer: "Richtig" },
          { id: 49, statement: "Einzelhändler begrüßen von Anfang an jede Sperrung von Straßen für den Autoverkehr.", correctAnswer: "Falsch" },
          { id: 50, statement: "Internationale Studien zeigen, dass Fußgängerzonen dem lokalen Einzelhandel wirtschaftlich schaden.", correctAnswer: "Falsch" },
          { id: 51, statement: "Menschen, die zu Fuß oder mit dem Rad einkaufen, kaufen oft mehr in lokalen Geschäften ein.", correctAnswer: "Richtig" },
          { id: 52, statement: "In autofreien Innenstädten dürfen auch Rettungskräfte und Handwerker niemals fahren.", correctAnswer: "Falsch" },
          { id: 53, statement: "Menschen mit körperlichen Behinderungen können Ausnahmegenehmigungen erhalten.", correctAnswer: "Richtig" },
          { id: 54, statement: "Park-and-Ride-Plätze am Stadtrand sollen den Umstieg auf öffentliche Verkehrsmittel erleichtern.", correctAnswer: "Richtig" },
          { id: 55, statement: "Dr. Weimann fordert, dass niemand mehr außerhalb der Innenstadt parken darf.", correctAnswer: "Falsch" }
        ]
      },
      {
        part: "Teil 3",
        title: "Selektives Verstehen (Gespräche / Alltägliche Situationen)",
        description: "Sie hören fünf kurze Gespräche. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 56-60, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
        items: [
          {
            id: 56,
            topic: "Gespräch unter Freunden über einen Umzug",
            audioScript: "Freund 1: Wann ziehst du denn genau in deine neue Wohnung um?\nFreund 2: Am Samstag in zwei Wochen. Wir haben für den Vormittag einen großen Transporter gemietet. Es wäre super, wenn du beim Tragen der Waschmaschine und der Kisten helfen könntest. Für Pizza und Getränke ist natürlich gesorgt.",
            statement: "Der Umzug soll an einem Samstag in zwei Wochen stattfinden.",
            correctAnswer: "Richtig"
          },
          {
            id: 57,
            topic: "Gespräch im Yoga-Studio",
            audioScript: "Interessentin: Bieten Sie auch Probestunden für absolute Anfänger an?\nTrainerin: Ja, jeden Mittwoch um 17 Uhr haben wir einen Einführungskurs. Eine Probestunde kostet 10 Euro und wird bei Abschluss einer Zehnerkarte voll angerechnet. Matten stellen wir kostenlos zur Verfügung.",
            statement: "Die Teilnehmer müssen ihre eigenen Yogamatten zur Probestunde mitbringen.",
            correctAnswer: "Falsch"
          },
          {
            id: 58,
            topic: "Gespräch im Elektrofachgeschäft",
            audioScript: "Kunde: Ich habe diese Kaffeemaschine vor drei Monaten gekauft, und jetzt heizt sie das Wasser nicht mehr auf. Ich habe den Kassenbon dabei.\nVerkäuferin: Kein Problem, das Gerät hat zwei Jahre Herstellergarantie. Wir schicken die Maschine zur kostenlosen Reparatur an das Serviceteam ein. Sie erhalten ein Ersatzgerät für die Übergangszeit.",
            statement: "Der Kunde erhält für die Dauer der Garantiereparatur ein Ersatzgerät.",
            correctAnswer: "Richtig"
          },
          {
            id: 59,
            topic: "Gespräch am Fahrkartenschalter",
            audioScript: "Fahrgast: Ich möchte ein Ticket nach München für heute Nachmittag kaufen.\nBahnmitarbeiterin: Mit der BahnCard 25 kostet das Ticket in der 2. Klasse inklusive Sitzplatzreservierung 44 Euro. Der Zug fährt um 15 Uhr 18 ohne Umsteigen durch.",
            statement: "Der Fahrgast muss auf der Fahrt nach München zweimal umsteigen.",
            correctAnswer: "Falsch"
          },
          {
            id: 60,
            topic: "Gespräch im Buchclub",
            audioScript: "Mitglied 1: Welches Buch lesen wir denn für das nächste Treffen im September?\nMitglied 2: Wir haben uns auf den historischen Roman von Daniel Kehlmann geeinigt. Das Buch hat etwa 350 Seiten, und wir treffen uns am letzten Donnerstag im Monat zur Diskussion.",
            statement: "Das nächste Treffen des Buchclubs findet Ende September statt.",
            correctAnswer: "Richtig"
          }
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
        title: "Globalverstehen (Kurze Durchsagen)",
        description: "Sie hören fünf kurze Durchsagen. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 41-45, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
        items: [
          {
            id: 41,
            topic: "Durchsage im Botanischen Garten",
            audioScript: "Liebe Gartenbesucher, in den Tropenhäusern beginnt in 15 Minuten eine Führung zu seltenen Heil- und Nutzpflanzen des Regenwaldes. Unsere Botanikerin Frau Dr. Klein führt Sie durch die Schauhäuser. Treffpunkt ist am Eingang zum Palmenhaus.",
            statement: "Die Führung über tropische Nutzpflanzen beginnt am Palmenhaus.",
            correctAnswer: "Richtig"
          },
          {
            id: 42,
            topic: "Durchsage im Regionalexpress",
            audioScript: "Achtung Fahrgäste: Wegen einer kurzfristigen Streckensperrung nach einem Blitzeinschlag verzögert sich unsere Weiterfahrt um voraussichtlich 20 Minuten. Wir bitten um Ihre Geduld, das Zugteam informiert Sie über Anschlusszüge.",
            statement: "Der Zug hat eine Verspätung von etwa 20 Minuten.",
            correctAnswer: "Richtig"
          },
          {
            id: 43,
            topic: "Durchsage im Bürgeramt",
            audioScript: "Werte Bürgerinnen und Bürger: Aus technischen Gründen können heute an Schalter 4 keine Passanträge bearbeitet werden. Bürger mit Terminen für Schalter 4 wenden sich bitte an Schalter 1 und 2.",
            statement: "Bürger mit Terminen für Schalter 4 werden an andere Schalter verwiesen.",
            correctAnswer: "Richtig"
          },
          {
            id: 44,
            topic: "Durchsage im Möbelhaus",
            audioScript: "Das Möbellager informiert: Der Transporter-Verleih für Großmöbel ist für den heutigen Samstag vollständig ausgebucht. Reservierungen für den kommenden Montag nehmen wir am Kundenservice entgegen.",
            statement: "Kunden können heute noch spontan einen Transporter mieten.",
            correctAnswer: "Falsch"
          },
          {
            id: 45,
            topic: "Radiomeldung Verkehr",
            audioScript: "Vorsicht auf der A8 München Richtung Salzburg: Zwischen Holzkirchen und Weyarn liegen Gegenstände auf der mittleren Fahrspur. Bitte fahren Sie in diesem Bereich besonders vorsichtig und überholen Sie nicht.",
            statement: "Auf der A8 wird vor verlorenen Gegenständen auf der Fahrbahn gewarnt.",
            correctAnswer: "Richtig"
          }
        ]
      },
      {
        part: "Teil 2",
        title: "Detailverstehen (Interview / Bericht)",
        description: "Sie hören ein Gespräch/Interview. Sie hören den Text einmal. Entscheiden Sie bei den Aufgaben 46-55, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
        topic: "Interview mit einer Medienpsychologin über Digital Detox",
        audioScript: "Moderator: Herzlich willkommen zu unserer Sendung 'Mensch und Medien'. Unser heutiger Gast ist Dr. Laura Seidel, Medienpsychologin und Autorin des Buches 'Offline leben lernen'. Frau Dr. Seidel, fast jeder Smartphone-Besitzer schaut mehrmals pro Stunde auf sein Gerät. Ab wann sprechen Sie von einer problematischen Nutzung?\n\nDr. Laura Seidel: Guten Abend. Eine problematische Nutzung beginnt dann, wenn das Smartphone das reale Leben und Wohlbefinden spürbar dominiert. Wenn man beispielsweise beim Essen mit Freunden ständig aufs Display blickt, morgens als Erstes und abends als Letztes Nachrichten checkt oder innere Unruhe verspürt, sobald der Akku leer ist. Wir Psychologen nennen das 'Nomophobie' – die Angst, nicht erreichbar zu sein.\n\nModerator: Was bewirkt diese ständige digitale Reizüberflutung in unserem Gehirn?\n\nDr. Laura Seidel: Jede neue Benachrichtigung, jedes 'Like' in sozialen Netzwerken schüttet im Gehirn das Belohnungshormon Dopamin aus. Das führt zu einer Art digitaler Konditionierung. Das Problem dabei: Unsere Aufmerksamkeit wird extrem fragmentiert. Tiefes, konzentriertes Arbeiten oder ungestörtes Lesen fällt vielen Menschen dadurch zunehmend schwerer.\n\nModerator: Ist ein radikaler Ausstieg – also das Smartphone komplett abzuschaffen – die Lösung?\n\nDr. Laura Seidel: Für die allermeisten Menschen ist ein Totalverzicht im Berufs- und Privatalltag unrealistisch und auch gar nicht notwendig. Digitale Medien bieten ja enorme Vorteile. Es geht vielmehr um einen bewussten, selbstbestimmten Umgang. Ich empfehle einfache Regeln: Schalten Sie unnötige Push-Benachrichtigungen stumm. Verbannen Sie das Smartphone nachts aus dem Schlafzimmer – ein klassischer Wecker leistet denselben Dienst. Und vereinbaren Sie feste handyfreie Zonen am Tag, etwa während der Mahlzeiten oder beim Spaziergang in der Natur.",
        items: [
          { id: 46, statement: "Dr. Laura Seidel ist Autorin eines Buches über Medienpsychologie.", correctAnswer: "Richtig" },
          { id: 47, statement: "Innere Unruhe bei leerem Handy-Akku kann ein Anzeichen für übermäßige Nutzung sein.", correctAnswer: "Richtig" },
          { id: 48, statement: "Der Begriff 'Nomophobie' beschreibt die Angst vor schlechtem Internetempfang.", correctAnswer: "Falsch" },
          { id: 49, statement: "Benachrichtigungen auf dem Smartphone lösen die Ausschüttung von Dopamin aus.", correctAnswer: "Richtig" },
          { id: 50, statement: "Ständige digitale Reize verbessern nachweislich die Konzentrationsfähigkeit.", correctAnswer: "Falsch" },
          { id: 51, statement: "Dr. Seidel hält einen vollständigen Verzicht auf das Smartphone für realistisch und notwendig.", correctAnswer: "Falsch" },
          { id: 52, statement: "Push-Benachrichtigungen sollten laut Expertin stummgeschaltet werden.", correctAnswer: "Richtig" },
          { id: 53, statement: "Dr. Seidel rät dazu, das Mobiltelefon nachts neben dem Kopfkissen zu laden.", correctAnswer: "Falsch" },
          { id: 54, statement: "Ein klassischer Wecker kann helfen, das Smartphone aus dem Schlafzimmer zu verbannen.", correctAnswer: "Richtig" },
          { id: 55, statement: "Handyfreie Phasen während des Essens fördern laut Expertin das Wohlbefinden.", correctAnswer: "Richtig" }
        ]
      },
      {
        part: "Teil 3",
        title: "Selektives Verstehen (Gespräche / Alltägliche Situationen)",
        description: "Sie hören fünf kurze Gespräche. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 56-60, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
        items: [
          {
            id: 56,
            topic: "Gespräch im Café",
            audioScript: "Gast: Ich hätte gerne ein großes Stück Käsekuchen und einen Cappuccino mit Hafermilch.\nKellner: Den Käsekuchen bringe ich Ihnen sofort. Für den Cappuccino mit Hafermilch berechnen wir einen kleinen Aufpreis von 40 Cent. Möchten Sie noch ein Glas Wasser dazu?",
            statement: "Für die Hafermilch im Cappuccino fällt ein geringer Aufpreis an.",
            correctAnswer: "Richtig"
          },
          {
            id: 57,
            topic: "Gespräch bei der Berufsberatung",
            audioScript: "Berater: Um Ihre Chancen auf dem Arbeitsmarkt zu verbessern, empfehle ich Ihnen einen zertifizierten Kurs im Projektmanagement.\nKundin: Werden die Kosten dafür von der Agentur für Arbeit übernommen?\nBerater: Wenn Sie arbeitssuchend gemeldet sind, können die Lehrgangskosten zu 100 Prozent über einen Bildungsgutschein finanziert werden.",
            statement: "Die Weiterbildung kann über einen Bildungsgutschein voll finanziert werden.",
            correctAnswer: "Richtig"
          },
          {
            id: 58,
            topic: "Gespräch beim Autoverleih",
            audioScript: "Mieter: Ich gebe den Mietwagen zurück. Der Tank ist voll und das Auto steht auf Parkplatz 12.\nMitarbeiterin: Wunderbar, ich prüfe kurz den Kilometerstand und den Zustand auf Kratzer. Die Kaution von 300 Euro wird Ihrer Kreditkarte innerhalb von zwei Werktagen wieder gutgeschrieben.",
            statement: "Die Kaution wird dem Kunden sofort in bar ausgezahlt.",
            correctAnswer: "Falsch"
          },
          {
            id: 59,
            topic: "Gespräch im Repair-Café",
            audioScript: "Besucher: Mein Föhn bläst nur noch kalte Luft. Können Sie sich den mal ansehen?\nHelfer: Sicher! Meistens ist nur das Heizelement verstaubt oder ein Kontakt gelöst. Wir schrauben das Gehäuse gemeinsam auf und messen die Kontakte durch. Die Reparaturhilfe ist kostenlos, wir freuen uns aber über eine kleine Spende für unsere Vereinskasse.",
            statement: "Die Unterstützung bei der Gerätereparatur im Repair-Café ist kostenfrei.",
            correctAnswer: "Richtig"
          },
          {
            id: 60,
            topic: "Gespräch beim Handwerker",
            audioScript: "Hausbesitzer: Wann könnten Sie das Geländer an unserem Balkon montieren?\nSchlosser: Wir haben das Metallgeländer fertig geschweißt und feuerverzinkt. Unser Montageteam könnte nächsten Dienstag um 8 Uhr morgens bei Ihnen sein. Die Montage dauert etwa vier Stunden.",
            statement: "Die Handwerker kommen am kommenden Dienstagvormittag zur Montage.",
            correctAnswer: "Richtig"
          }
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
        title: "Globalverstehen (Kurze Durchsagen)",
        description: "Sie hören fünf kurze Durchsagen. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 41-45, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
        items: [
          {
            id: 41,
            topic: "Durchsage im Zoo",
            audioScript: "Liebe Zoobesucher: Heute Abend findet ab 19 Uhr unsere exklusive Dämmerungsführung durch den nächtlichen Tierpark statt. Erleben Sie Fledermäuse, Eulen und Wölfe bei der Fütterung. Die Teilnahme ist ab 12 Jahren möglich, Restkarten gibt es noch an der Hauptkasse.",
            statement: "An der Abendführung im Zoo dürfen auch Kleinkinder unter 12 Jahren teilnehmen.",
            correctAnswer: "Falsch"
          },
          {
            id: 42,
            topic: "Durchsage im Kaufhaus",
            audioScript: "Sehr geehrte Kundinnen und Kunden: Im dritten Stock in unserer Sportabteilung findet heute ein großer Räumungsverkauf für Winter- und Skibekleidung statt. Alle Skijacken und Hosen sind um mindestens 40 Prozent reduziert. Das Angebot gilt nur, solange der Vorrat reicht.",
            statement: "Auf Skibekleidung gibt es heute mindestens 40 Prozent Nachlass.",
            correctAnswer: "Richtig"
          },
          {
            id: 43,
            topic: "Durchsage am Bahnhof",
            audioScript: "Wichtiger Hinweis für Fahrgäste mit Mobilitätseinschränkungen: Der Aufzug zu den Gleisen 4 und 5 ist wegen Wartungsarbeiten bis morgen früh außer Betrieb. Rollstuhlfahrer und Reisende mit Kinderwagen werden gebeten, sich an die Mobilitätszentrale in der Bahnhofshalle zu wenden.",
            statement: "Der Aufzug zu den Gleisen 4 und 5 funktioniert heute einwandfrei.",
            correctAnswer: "Falsch"
          },
          {
            id: 44,
            topic: "Durchsage im Theater",
            audioScript: "An der Theaterkasse sind für die heutige Abendpremiere von 'Hamlet' noch wenige Restkarten an der Abendkasse verfügbar. Schüler und Studierende erhalten gegen Vorlage ihres Ausweises 50 Prozent Ermäßigung.",
            statement: "Studenten erhalten an der Abendkasse ermäßigte Eintrittskarten.",
            correctAnswer: "Richtig"
          },
          {
            id: 45,
            topic: "Durchsage im Baumarkt",
            audioScript: "Achtung Kundschaft: Unser Farbmisch-Service im Gang 12 schließt heute ausnahmsweise bereits um 17 Uhr. Kunden, die individuelle Wandfarben anmischen lassen möchten, wenden sich bitte vor 17 Uhr an unsere Fachberater.",
            statement: "Wandfarben können heute bis zum Geschäftsschluss um 20 Uhr gemischt werden.",
            correctAnswer: "Falsch"
          }
        ]
      },
      {
        part: "Teil 2",
        title: "Detailverstehen (Interview / Bericht)",
        description: "Sie hören ein Gespräch/Interview. Sie hören den Text einmal. Entscheiden Sie bei den Aufgaben 46-55, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
        topic: "Interview über Fernstudium und berufsbegleitende Weiterbildung",
        audioScript: "Moderator: Willkommen zu unserem Bildungsmagazin 'Karriere und Zukunft'. Heute sprechen wir mit Marion Hoffmann, Bildungsberaterin an der Fernuniversität Hagen. Frau Hoffmann, immer mehr Menschen in Deutschland entscheiden sich für ein Studium neben dem Beruf. Wer sind die typischen Fernstudierenden?\n\nMarion Hoffmann: Guten Abend. Der klassische Fernstudent ist kein 19-jähriger Schulabgänger, sondern meist zwischen 28 und 45 Jahre alt, steht mitten im Berufsleben und hat oft schon eine abgeschlossene Berufsausbildung und Familie. Viele möchten sich für Führungsaufgaben qualifizieren oder eine fachliche Spezialisierung erwerben, ohne ihr festes Gehalt aufzugeben.\n\nModerator: Welche Vorteile bietet das Fernstudium im Vergleich zur Präsenzuniversität?\n\nMarion Hoffmann: Der größte Vorteil ist die maximale zeitliche und örtliche Flexibilität. Unsere Vorlesungen, Lernmaterialien und Übungsaufgaben stehen rund um die Uhr auf digitalen Plattformen bereit. Man kann morgens in der Bahn, abends nach Feierabend oder am Wochenende lernen. Auch Prüfungen können heute zu großen Teilen online absolviert werden.\n\nModerator: Doch viele Studieninteressierte unterschätzen die Belastung. Die Abbrecherquote ist bei Fernstudiengängen traditionell recht hoch.\n\nMarion Hoffmann: Das ist in der Tat die größte Hürde. Ein Fernstudium erfordert enormes Durchhaltevermögen und striktes Zeitmanagement. Wenn nach einem anstrengenden 8-Stunden-Arbeitstag noch zwei Stunden Lehrbuchtexte anstehen, verlangt das eiserne Disziplin. Wir raten Studienanfängern daher, von Beginn an feste Lernfenster im Wochenplan zu reservieren und auch die Familie aktiv in die Planung einzubinden.\n\nModerator: Wie stehen Arbeitgeber zu Bewerbern mit einem Fernstudienabschluss?\n\nMarion Hoffmann: Personalchefs bewerten einen Abschluss im Fernstudium außerordentlich positiv. Er beweist nicht nur Fachwissen, sondern vor allem herausragende Selbstorganisation, Belastbarkeit und Leistungsbereitschaft.",
        items: [
          { id: 46, statement: "Marion Hoffmann arbeitet als Bildungsberaterin an einer Fernuniversität.", correctAnswer: "Richtig" },
          { id: 47, statement: "Die meisten Fernstudierenden sind 19-jährige Schulabgänger ohne Berufserfahrung.", correctAnswer: "Falsch" },
          { id: 48, statement: "Ein Fernstudium ermöglicht es, weiter Vollzeit zu arbeiten und Gehalt zu beziehen.", correctAnswer: "Richtig" },
          { id: 49, statement: "Lernmaterialien im Fernstudium sind nur zu festen Vorlesungszeiten online zugänglich.", correctAnswer: "Falsch" },
          { id: 50, statement: "Prüfungen im Fernstudium können heutzutage teilweise digital abgelegt werden.", correctAnswer: "Richtig" },
          { id: 51, statement: "Die Abbrecherquote ist bei Fernstudiengängen sehr gering.", correctAnswer: "Falsch" },
          { id: 52, statement: "Für ein erfolgreiches Fernstudium sind Disziplin und Zeitmanagement unverzichtbar.", correctAnswer: "Richtig" },
          { id: 53, statement: "Frau Hoffmann rät dazu, spontan ohne festen Wochenplan zu lernen.", correctAnswer: "Falsch" },
          { id: 54, statement: "Unternehmen schätzen Absolventen von Fernstudiengängen wegen ihrer Belastbarkeit.", correctAnswer: "Richtig" },
          { id: 55, statement: "Personalchefs halten Abschlüsse aus dem Fernstudium für minderwertig.", correctAnswer: "Falsch" }
        ]
      },
      {
        part: "Teil 3",
        title: "Selektives Verstehen (Gespräche / Alltägliche Situationen)",
        description: "Sie hören fünf kurze Gespräche. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 56-60, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
        items: [
          {
            id: 56,
            topic: "Gespräch im Fotostudio",
            audioScript: "Kundin: Ich brauche neue biometrische Passfotos für meinen Reisepass.\nFotograf: Sehr gerne. Wir machen vier Aufnahmen zur Auswahl. Sie können sich das beste Bild am Bildschirm aussuchen, und wir drucken die Vierer-Serie innerhalb von fünf Minuten aus. Die Kosten betragen 15 Euro.",
            statement: "Die fertigen Passfotos können nach wenigen Minuten mitgenommen werden.",
            correctAnswer: "Richtig"
          },
          {
            id: 57,
            topic: "Gespräch in der Kletterhalle",
            audioScript: "Interessent: Ich würde gerne klettern lernen. Brauche ich dafür eigene Kletterschuhe?\nTrainer: Für unseren Anfängerkurs stellen wir die komplette Ausrüstung inklusive Schuhen, Klettergurt und Sicherungsgeräten kostenlos zur Verfügung. Sie brauchen nur bequeme Sportkleidung mitzubringen.",
            statement: "Teilnehmer müssen sich eigene Kletterschuhe vor dem Kurs kaufen.",
            correctAnswer: "Falsch"
          },
          {
            id: 58,
            topic: "Gespräch im Restaurant",
            audioScript: "Gast: Wir möchten gerne einen Tisch für vier Personen für morgen Abend um 19 Uhr reservieren.\nKellner: Morgen Abend sind wir im Innenbereich leider komplett ausgebucht. Auf unserer überdachten und beheizten Terrasse hätte ich um 19 Uhr aber noch einen schönen Vierertisch frei.",
            statement: "Im Innenbereich des Restaurants ist morgen um 19 Uhr noch ein Tisch frei.",
            correctAnswer: "Falsch"
          },
          {
            id: 59,
            topic: "Gespräch bei der Energieberatung",
            audioScript: "Hausbesitzer: Lohnt sich die Installation einer Solaranlage auf unserem Süddach?\nEnergieberater: Auf jeden Fall. Bei einer Dachfläche von 40 Quadratmetern erzeugen Sie jährlich rund 6.000 Kilowattstunden Strom. In Kombination mit einem Batteriespeicher können Sie bis zu 70 Prozent Ihres Strombedarfs selbst decken.",
            statement: "Mit der geplanten Photovoltaikanlage und einem Speicher lässt sich der Großteil des Strombedarfs decken.",
            correctAnswer: "Richtig"
          },
          {
            id: 60,
            topic: "Gespräch in der Autowerkstatt",
            audioScript: "Kunde: Ist bei meinem Wagen die Hauptuntersuchung (TÜV) ohne Mängel durchgekommen?\nMeister: Ja, die Plakette für die nächsten zwei Jahre ist erteilt. Wir mussten lediglich eine Glühbirne am Rücklicht austauschen. Sie können den Wagen sofort mitnehmen.",
            statement: "Das Fahrzeug hat die Hauptuntersuchung erfolgreich bestanden.",
            correctAnswer: "Richtig"
          }
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
        title: "Globalverstehen (Kurze Durchsagen)",
        description: "Sie hören fünf kurze Durchsagen. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 41-45, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
        items: [
          {
            id: 41,
            topic: "Durchsage am Flughafen",
            audioScript: "Achtung Fluggäste: An den Sicherheitskontrollen im Terminal 1 kommt es derzeit zu Wartezeiten von bis zu 30 Minuten. Fluggäste mit Abflügen in den nächsten 45 Minuten nutzen bitte die bevorzugte Fast-Lane-Spur an Kontrollstelle B.",
            statement: "Passagiere mit knapper Abflugzeit können eine beschleunigte Kontrollspur nutzen.",
            correctAnswer: "Richtig"
          },
          {
            id: 42,
            topic: "Durchsage im Kaufhaus",
            audioScript: "Sehr geehrte Kundinnen und Kunden: An unseren Kassen akzeptieren wir ab heute neben Barzahlung und EC-Karte auch alle gängigen Kreditkarten sowie kontaktlose Bezahlung per Smartphone und Smartwatch ohne Mindestbestellwert.",
            statement: "Kunden können an den Kassen jetzt auch kontaktlos mit dem Smartphone bezahlen.",
            correctAnswer: "Richtig"
          },
          {
            id: 43,
            topic: "Durchsage am Hauptbahnhof",
            audioScript: "Achtung am Gleis 3: Der Regionalexpress nach Stuttgart Hbf, geplante Abfahrt 16 Uhr 10, fällt heute wegen eines technischen Defekts am Triebfahrzeug ersatzlos aus. Bitte nutzen Sie die nachfolgende Regionalbahn um 16 Uhr 35 von Gleis 5.",
            statement: "Der Regionalexpress nach Stuttgart fährt mit 10 Minuten Verspätung ab.",
            correctAnswer: "Falsch"
          },
          {
            id: 44,
            topic: "Durchsage im Schwimmbad",
            audioScript: "Liebe Badegäste: Wegen eines aufziehenden Gewitters bitten wir alle Schwimmer im Außenbereich, das Außenbecken umgehend zu verlassen und sich in die Innenhalle zu begeben. Das Schwimmen im Freien ist bei Gewitter lebensgefährlich.",
            statement: "Alle Badegäste im Außenbereich sollen wegen eines Gewitters nach drinnen gehen.",
            correctAnswer: "Richtig"
          },
          {
            id: 45,
            topic: "Durchsage im Supermarkt",
            audioScript: "Werte Kunden: Unser Leergutautomat im Eingangsbereich ist vorübergehend außer Betrieb. Bitte geben Sie Ihre Pfandflaschen und Kästen an Kasse 1 beim Kassenpersonal ab. Vielen Dank für Ihr Verständnis.",
            statement: "Pfandflaschen können während des Defekts an Kasse 1 abgegeben werden.",
            correctAnswer: "Richtig"
          }
        ]
      },
      {
        part: "Teil 2",
        title: "Detailverstehen (Interview / Bericht)",
        description: "Sie hören ein Gespräch/Interview. Sie hören den Text einmal. Entscheiden Sie bei den Aufgaben 46-55, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
        topic: "Interview mit einem Schreinermeister über moderne Handwerksberufe",
        audioScript: "Moderator: Herzlich willkommen zu unserem Handwerksmagazin. Heute im Studio: Schreinermeister Michael Bachmann, Vizepräsident der Handwerkskammer. Herr Bachmann, viele Menschen denken beim Schreiner an Hobelspäne und Handarbeit wie vor hundert Jahren. Wie sieht der Arbeitsalltag in einer modernen Schreinerei heute tatsächlich aus?\n\nMichael Bachmann: Guten Tag. Das klassische Bild hat sich radikal verändert. Natürlich gehören Holzkenntnis und handwerkliches Geschick weiterhin zum Fundament unseres Berufs. Doch heute verbringen unsere Gesellen und Auszubildenden einen großen Teil ihrer Arbeitszeit am Computer. Wir planen Möbel in 3D-CAD-Programmen und übertragen die Daten direkt an computergesteuerte CNC-Fräsen, die die Bauteile auf den Zehntelmillimeter genau zuschneiden.\n\nModerator: Welche Vorteile bringt diese Digitalisierung für Ihren Betrieb?\n\nMichael Bachmann: Sie erlaubt uns maximale Präzision und enorme Flexibilität bei individuellen Kundenwünschen. Wir können komplexe Einbauschränke für Dachschrägen oder Spezialtüren in kürzester Zeit maßgenau fertigen. Und die schwere körperliche Arbeit – etwa das Heben schwerer Holzplatten – wird heute von Vakuumhebern und Hebekränen übernommen, was die Gesundheit der Mitarbeiter schont.\n\nModerator: Wie steht es um den Nachwuchs? Das Handwerk klagt ja seit Jahren über Bewerbermangel.\n\nMichael Bachmann: Die Lage ist herausfordernd, aber wir sehen positive Signale. Immer mehr Abiturienten und auch Studienabbrecher erkennen, dass das Handwerk hervorragende Karrierechancen und sichere Einkommen bietet. Besonders erfreulich: Der Frauenanteil in den Tischler- und Schreinerlehren hat sich in den letzten zehn Jahren verdreifacht. Frauen bringen oft ein hervorragendes Gespür für Design und große Präzision mit.\n\nModerator: Welche Zukunftsaussichten haben Handwerker nach der Ausbildung?\n\nMichael Bachmann: Glänzende! Wer seinen Meisterbrief macht oder sich zum Restaurator oder Betriebswirt des Handwerks weiterbildet, kann schon mit Mitte zwanzig einen eigenen Betrieb leiten oder einen traditionsreichen Familienbetrieb übernehmen. Handwerk hat im wahrsten Sinne wieder goldenen Boden.",
        items: [
          { id: 46, statement: "Michael Bachmann ist Schreinermeister und Funktionär der Handwerkskammer.", correctAnswer: "Richtig" },
          { id: 47, statement: "In modernen Schreinereien spielt Computertechnik heutzutage kaum eine Rolle.", correctAnswer: "Falsch" },
          { id: 48, statement: "Moderne Möbel werden mit 3D-Programmen geplant und von CNC-Fräsen zugeschnitten.", correctAnswer: "Richtig" },
          { id: 49, statement: "Vakuumheber und Kräne entlasten Handwerker heute bei schwerer körperlicher Arbeit.", correctAnswer: "Richtig" },
          { id: 50, statement: "Handwerksbetriebe haben überhaupt keine Probleme mehr, Auszubildende zu finden.", correctAnswer: "Falsch" },
          { id: 51, statement: "Immer mehr Abiturienten und Studienabbrecher beginnen eine handwerkliche Lehre.", correctAnswer: "Richtig" },
          { id: 52, statement: "Der Anteil von Frauen in Schreinerlehren ist in den letzten Jahren stark gesunken.", correctAnswer: "Falsch" },
          { id: 53, statement: "Herr Bachmann lobt das Designgespür und die Präzision vieler weiblicher Auszubildender.", correctAnswer: "Richtig" },
          { id: 54, statement: "Nach der Meisterprüfung gibt es Möglichkeiten zur Weiterbildung und Betriebsübernahme.", correctAnswer: "Richtig" },
          { id: 55, statement: "Herr Bachmann hält die Zukunftsaussichten im Handwerk für schlecht.", correctAnswer: "Falsch" }
        ]
      },
      {
        part: "Teil 3",
        title: "Selektives Verstehen (Gespräche / Alltägliche Situationen)",
        description: "Sie hören fünf kurze Gespräche. Sie hören jeden Text einmal. Entscheiden Sie bei den Aufgaben 56-60, ob die Aussage dazu richtig (+) oder falsch (-) ist.",
        items: [
          {
            id: 56,
            topic: "Gespräch im Fahrradgeschäft",
            audioScript: "Kunde: Ich interessiere mich für dieses Trekking-E-Bike. Kann ich damit eine kurze Probefahrt auf der Straße machen?\nVerkäufer: Sehr gerne! Bitte hinterlegen Sie kurz Ihren Personalausweis an der Kasse und setzen Sie einen unserer Leihhelme auf. Sie können das Rad gerne 15 Minuten im Stadtverkehr testen.",
            statement: "Der Kunde darf das E-Bike für eine Viertelstunde Probe fahren.",
            correctAnswer: "Richtig"
          },
          {
            id: 57,
            topic: "Gespräch im Hausflur",
            audioScript: "Nachbarin: Hallo Herr Schulz, wir planen für nächsten Monat ein Hoffest mit allen Mietern im Haus. Haben Sie Lust, Salate oder Grillgut beizusteuern?\nNachbar: Eine tolle Idee! Ich kann gerne meinen großen Schwenkgrill mitbringen und mich um die Bratwürste kümmern.",
            statement: "Der Nachbar möchte beim Hoffest beim Grillen mithelfen.",
            correctAnswer: "Richtig"
          },
          {
            id: 58,
            topic: "Gespräch beim Roten Kreuz",
            audioScript: "Teilnehmer: Ich brauche einen Erste-Hilfe-Kurs für meinen Führerscheinantrag.\nMitarbeiterin: Unser nächster Ganztageskurs 'Lebensrettende Sofortmaßnahmen' findet am kommenden Samstag von 9 bis 16 Uhr 30 statt. Die Gebühr beträgt 45 Euro inklusive offizieller Bescheinigung.",
            statement: "Der Erste-Hilfe-Kurs dauert einen ganzen Samstag von morgens bis nachmittags.",
            correctAnswer: "Richtig"
          },
          {
            id: 59,
            topic: "Gespräch beim Mobilfunkanbieter",
            audioScript: "Kunde: Ich möchte meinen Vertrag kündigen, weil mir die monatlichen Gebühren zu hoch sind.\nKundenberater: Wenn Sie bei uns bleiben, kann ich Ihnen ab sofort einen Treuetarif anbieten: 20 Gigabyte Datenvolumen und Allnet-Flat für nur 14,99 Euro statt bisher 29,99 Euro im Monat.",
            statement: "Der Berater bietet dem Kunden einen günstigeren Tarif mit 20 GB Datenvolumen an.",
            correctAnswer: "Richtig"
          },
          {
            id: 60,
            topic: "Gespräch bei der Schlichtungsstelle",
            audioScript: "Schlichter: Wir haben den Termin für das Schlichtungsgespräch mit Ihrem Nachbarn wegen des Zaunstreits auf nächsten Freitag um 14 Uhr festgelegt.\nBürger: Vielen Dank. Ich bringe den Grundbuchauszug und die Fotos der Grundstücksgrenze mit.",
            statement: "Das Schlichtungsgespräch findet am kommenden Freitag um 14 Uhr statt.",
            correctAnswer: "Richtig"
          }
        ]
      }
    ]
  }
];

