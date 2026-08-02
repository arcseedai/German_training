// Telc B2 Reading Comprehension (Leseverstehen) Database
window.readingQuestionsSets = [
  // ==================== TEST SET 1 ====================
  {
    setId: 1,
    parts: [
      {
        part: "Teil 1",
        title: "Rekonstruktion von Texten / Zuordnung von Überschriften",
        description: "Lesen Sie die fünf Texte (1-5) und entscheiden Sie, welche Überschrift (A-J) am besten zu welchem Text passt. Es gibt für jeden Text nur eine passende Überschrift. Fünf Überschriften bleiben übrig.",
        options: [
          { id: "A", text: "Homeoffice als Karrierebremse?" },
          { id: "B", text: "Sport am Arbeitsplatz fördert die Produktivität" },
          { id: "C", text: "Fachkräftemangel in der IT-Branche verschärft sich" },
          { id: "D", text: "Die Vorteile der Vier-Tage-Woche für die Gesundheit" },
          { id: "E", text: "Pendeln zur Arbeit: Stressfaktor Nummer eins" },
          { id: "F", text: "Warum Großraumbüros wieder im Trend liegen" },
          { id: "G", text: "Wie künstliche Intelligenz den Berufsalltag verändert" },
          { id: "H", text: "Lebenslanges Lernen: Weiterbildung im Alter" },
          { id: "I", text: "Die Renaissance des klassischen Handwerks" },
          { id: "J", text: "Gesunde Ernährung in der Betriebskantine" }
        ],
        items: [
          { id: 1, text: "Immer mehr Unternehmen testen Arbeitszeitmodelle, bei denen die wöchentliche Arbeitszeit auf vier Tage komprimiert wird. Erste Studien zeigen, dass Arbeitnehmer nicht nur seltener wegen Überlastung krankgeschrieben sind, sondern auch eine deutlich höhere Motivation an den Tag legen. Die freie Zeit wird meist für Familie, Erholung und Hobbys genutzt, was langfristig die Work-Life-Balance massiv verbessert.", correctAnswer: "D" },
          { id: 2, text: "Viele Beschäftigte klagen über die stundenlange Anreise zu ihrem Arbeitsplatz. Staus auf den Autobahnen oder Zugausfälle im öffentlichen Nahverkehr führen täglich zu Frustration und erheblichem Zeitverlust schon vor Dienstbeginn. Experten warnen, dass diese Belastung langfristig zu chronischer Erschöpfung und verminderter Leistungsfähigkeit im Job führen kann.", correctAnswer: "E" },
          { id: 3, text: "Die Digitalisierung schreitet unaufhaltsam voran. Intelligente Algorithmen und Automatisierungsprozesse übernehmen zunehmend Routineaufgaben im Büro, von der automatischen Rechnungsstellung bis hin zur Beantwortung einfacher Kundenanfragen. Für Arbeitnehmer bedeutet das, dass sie sich verstärkt auf kreative und strategische Aufgaben konzentrieren müssen, während repetitive Tätigkeiten wegfallen.", correctAnswer: "G" },
          { id: 4, text: "Obwohl das Arbeiten von zu Hause aus viel Flexibilität bietet, berichten manche Angestellte von unerwarteten Nachteilen. Wer selten im Büro präsent ist, wird von Führungskräften bei Beförderungen oder der Vergabe von prestigeträchtigen Projekten häufiger übersehen. Der Mangel an informellen Gesprächen an der Kaffeemaschine kann dazu führen, dass man im firmeninternen Netzwerk unsichtbar wird.", correctAnswer: "A" },
          { id: 5, text: "Der technologische und gesellschaftliche Wandel verlangt von Arbeitnehmern ständige Anpassung. Wer heute eine Ausbildung abschließt, kann nicht mehr darauf vertrauen, dass dieses Wissen bis zur Rente ausreicht. Kurse zur Digitalisierung, Sprachkurse oder Seminare zur Mitarbeiterführung sind auch für erfahrene Arbeitskräfte im fortgeschrittenen Alter unerlässlich geworden, um auf dem Markt attraktiv zu bleiben.", correctAnswer: "H" }
        ]
      },
      {
        part: "Teil 2",
        title: "Leseverstehen (Detailverstehen)",
        description: "Lesen Sie den folgenden Text und wählen Sie bei den Aufgaben 6-10 die richtige Antwort (a, b oder c).",
        passage: "Die Zukunft der E-Mobilität: Herausforderungen und Chancen\n\nElektroautos gewinnen weltweit immer mehr an Bedeutung. Angesichts des Klimawandels setzen Regierungen und Automobilhersteller verstärkt auf emissionsfreie Antriebe. Dennoch gibt es in der Bevölkerung nach wie vor Vorbehalte, die einer flächendeckenden Verbreitung im Wege stehen. Die Hauptsorge vieler potenzieller Käufer betrifft die sogenannte Reichweitenangst sowie die Infrastruktur der Ladestationen.\n\nZwar hat sich die Batteriekapazität moderner Fahrzeuge in den letzten Jahren drastisch verbessert, sodass Reichweiten von über 400 Kilometern keine Seltenheit mehr sind. Dennoch ist das Ladenetzwerk, insbesondere in ländlichen Regionen, oft noch lückenhaft. Wer keine eigene Garage mit Wallbox besitzt, ist auf öffentliche Ladepunkte angewiesen, was im Alltag oft Geduld erfordert, da die Ladezeiten je nach Leistung der Station stark variieren.\n\nEin weiterer kritischer Aspekt sind die Anschaffungskosten. Obwohl E-Autos im Unterhalt und durch staatliche Prämien oft günstiger sind, liegt der Kaufpreis für Neuwagen meist deutlich über dem vergleichbarer Verbrennermodelle. Experten gehen jedoch davon aus, dass durch die Massenproduktion von Batterien und den technologischen Fortschritt die Preise in den kommenden Jahren sinken werden, sodass E-Mobilität bald für breitere Bevölkerungsschichten erschwinglich sein wird.",
        questions: [
          { id: 6, question: "Was hindert viele Menschen derzeit noch daran, ein Elektroauto zu kaufen?", options: [{ id: "a", text: "Die Sorge über zu geringe Reichweiten und fehlende Lademöglichkeiten." }, { id: "b", text: "Der Mangel an staatlichen Förderungen beim Kauf." }, { id: "c", text: "Das schlechte Image von Elektrofahrzeugen in den Medien." }], correctAnswer: "a" },
          { id: 7, question: "Wie steht es um die Ladeinfrastruktur?", options: [{ id: "a", text: "Sie ist bereits in allen Gebieten perfekt ausgebaut." }, { id: "b", text: "Auf dem Land gibt es teilweise noch zu wenige Ladestationen." }, { id: "c", text: "Man kann E-Autos ausschließlich in privaten Garagen laden." }], correctAnswer: "b" },
          { id: 8, question: "Warum sind die Anschaffungskosten für E-Autos derzeit noch hoch?", options: [{ id: "a", text: "Weil der Unterhalt im Vergleich zu Verbrennern sehr teuer ist." }, { id: "b", text: "Weil Batterien in der Herstellung noch kostenintensiv sind." }, { id: "c", text: "Weil Hersteller keine Rabatte gewähren dürfen." }], correctAnswer: "b" },
          { id: 9, question: "Welche Prognose stellen Experten für die Zukunft auf?", options: [{ id: "a", text: "Die Preise für E-Autos werden durch Massenproduktion sinken." }, { id: "b", text: "Verbrennungsmotoren werden komplett verboten." }, { id: "c", text: "Die Reichweiten werden sich in Zukunft verringern." }], correctAnswer: "a" },
          { id: 10, question: "Welcher Faktor wird im Text als positiver Aspekt von E-Autos genannt?", options: [{ id: "a", text: "Sie sind im laufenden Betrieb (Unterhalt) oft kostengünstiger." }, { id: "b", text: "Die Batterien halten lebenslang." }, { id: "c", text: "Man muss sie nie wieder laden." }], correctAnswer: "a" }
        ]
      },
      {
        part: "Teil 3",
        title: "Selektives Lesen (Zuordnung)",
        description: "Lesen Sie die Situationen (11-20) und die Anzeigen (A-L). Finden Sie für jede Situation die passende Anzeige. Für eine Situation gibt es keine passende Anzeige. Kennzeichnen Sie diese mit einem 'X'.",
        options: [
          { id: "A", text: "Sprachschule Global - Intensivkurse für Deutsch B1/B2. Perfekt für den Berufseinstieg. Abendkurse ab 18:00 Uhr." },
          { id: "B", text: "Auto-Klinik Schmidt - Reparaturen aller Marken, schneller Reifenservice und günstige HU/AU-Abnahme. Terminvereinbarung online." },
          { id: "C", text: "Wohnungstraum GmbH - Barrierefreie Wohnungen zur Miete im Stadtzentrum. Ideal für Senioren oder Rollstuhlfahrer." },
          { id: "D", text: "Fit & Fun Fitnessstudio - Trainieren rund um die Uhr. Günstige Tarife für Studenten und Azubis ab 19,90 € im Monat." },
          { id: "E", text: "PC-Doktor Notdienst - Schnelle Hilfe bei Viren, Datenverlust oder Hardwareproblemen. Wir kommen direkt zu Ihnen nach Hause." },
          { id: "F", text: "Kreative Küche - Vegane und vegetarische Kochkurse für Anfänger und Fortgeschrittene. Samstags von 10:00 bis 14:00 Uhr." },
          { id: "G", text: "Ihr Steuerberater Maier - Professionelle Steuererklärungen für Privatpersonen und Kleinunternehmer. Erstberatung kostenlos." },
          { id: "H", text: "Gartenparadies - Professionelle Gartenpflege, Heckenschnitt und Teichbau. Zuverlässig und preiswert." },
          { id: "I", text: "Hundeschule Pfötchen - Welpenkurse, Einzeltraining und Verhaltensberatung für Ihren Vierbeiner." },
          { id: "J", text: "Musikschule Klang - Klavier-, Gitarren- und Gesangsunterricht für Kinder und Erwachsene. Schnupperstunde gratis." },
          { id: "K", text: "Bio-Bäckerei Müller - Täglich frisches Brot und Gebäck aus 100% ökologischem Anbau. Besuchen Sie uns im Zentrum." },
          { id: "L", text: "Handy-Werkstatt Express - Display- und Akkutausch für alle gängigen Smartphones innerhalb von 30 Minuten." }
        ],
        items: [
          { id: 11, situation: "Ein Student sucht eine günstige Gelegenheit, um auch nachts Sport treiben zu können.", correctAnswer: "D" },
          { id: 12, situation: "Ein älteres Ehepaar sucht eine Wohnung ohne Treppen in zentraler Lage.", correctAnswer: "C" },
          { id: 13, situation: "Ein Berufstätiger möchte abends Deutsch lernen, um sich beruflich zu verbessern.", correctAnswer: "A" },
          { id: 14, situation: "Jemand sucht einen Experten, der am Wochenende den Rasen mäht und die Hecke schneidet.", correctAnswer: "H" },
          { id: 15, situation: "Der Laptop eines Selbstständigen startet nicht mehr und er braucht sofortige Hilfe vor Ort.", correctAnswer: "E" },
          { id: 16, situation: "Eine junge Frau möchte lernen, wie man ohne Fleisch und tierische Produkte kocht.", correctAnswer: "F" },
          { id: 17, situation: "Ein Autobesitzer sucht eine Werkstatt, in der er kurzfristig seine Reifen wechseln lassen kann.", correctAnswer: "B" },
          { id: 18, situation: "Jemand möchte für sein Kind eine Probestunde für Klavierunterricht vereinbaren.", correctAnswer: "J" },
          { id: 19, situation: "Ein Besitzer eines jungen Hundes sucht Unterstützung bei der Erziehung.", correctAnswer: "I" },
          { id: 20, situation: "Jemand sucht ein maßgeschneidertes Angebot für die professionelle Reinigung seines Büros am Abend.", correctAnswer: "X" }
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
        title: "Rekonstruktion von Texten / Zuordnung von Überschriften",
        description: "Lesen Sie die fünf Texte (1-5) und entscheiden Sie, welche Überschrift (A-J) am besten zu welchem Text passt. Es gibt für jeden Text nur eine passende Überschrift. Fünf Überschriften bleiben übrig.",
        options: [
          { id: "A", text: "Radwege-Ausbau spaltet die Stadtgemeinschaft" },
          { id: "B", text: "Chancen und Risiken des autonomen Fahrens" },
          { id: "C", text: "Kostenloser Nahverkehr: Ein gescheitertes Experiment?" },
          { id: "D", text: "Warum Carsharing auf dem Land nicht funktioniert" },
          { id: "E", text: "E-Scooter: Praktisch, aber gefährlich im Stadtverkehr" },
          { id: "F", text: "Flugscham: Sinkende Passagierzahlen auf Inlandsflügen" },
          { id: "G", text: "Wie das Lastenrad das Lieferfahrzeug ersetzt" },
          { id: "H", text: "Die Rückkehr der Nachtzüge in Europa" },
          { id: "I", text: "Mehr Sicherheit für Fußgänger in Wohngebieten" },
          { id: "J", text: "Benzinpreise erreichen neuen historischen Höchststand" }
        ],
        items: [
          { id: 1, text: "Klimabewusstes Reisen liegt voll im Trend. Immer mehr Menschen verzichten bewusst auf Kurzstreckenflüge innerhalb des eigenen Landes. Die Bahn meldet auf diesen Routen einen deutlichen Anstieg der Fahrgastzahlen, während Fluggesellschaften ihre Kapazitäten verringern müssen, da viele Geschäftsreisende und Touristen die längere, aber umweltfreundlichere Zugfahrt vorziehen.", correctAnswer: "F" },
          { id: 2, text: "In vielen Großstädten stehen sie an fast jeder Straßenecke: Leih-Tretroller mit Elektroantrieb. Sie bieten eine schnelle Möglichkeit, kurze Strecken flexibel zurückzulegen. Doch die Unfallzahlen steigen dramatisch. Oft werden die Roller rücksichtslos auf Gehwegen gefahren oder versperren nach der Nutzung als Stolperfallen die Wege für Fußgänger und Rollstuhlfahrer.", correctAnswer: "E" },
          { id: 3, text: "Um den Ausstoß von Abgasen zu verringern, setzen Lieferdienste in Innenstädten vermehrt auf pedalbetriebene Fahrzeuge mit großen Ladeboxen. Diese wendigen Vehikel kommen problemlos durch enge Gassen, müssen nicht im Stau stehen und benötigen keine Parkplätze in zweiter Reihe. Erste Tests zeigen, dass Pakete in Ballungsräumen so sogar schneller ausgeliefert werden können als mit Transportern.", correctAnswer: "G" },
          { id: 4, text: "Während Mobilitäts-Sharingdienste in städtischen Zentren florieren, bleibt das Angebot in dünn besiedelten Regionen unrentabel. Aufgrund der weiten Entfernungen und des unregelmäßigen Bedarfs stehen die Fahrzeuge dort die meiste Zeit ungenutzt herum. Die Bewohner sind daher weiterhin fast ausschließlich auf den eigenen Pkw angewiesen, um zur Arbeit oder zum Einkaufen zu gelangen.", correctAnswer: "D" },
          { id: 5, text: "Nach jahrzehntelanger Stilllegung erleben Schlaf- und Liegewagenverbindungen zwischen europäischen Metropolen ein echtes Comeback. Reisende schätzen die Möglichkeit, abends in Berlin, Wien oder Zürich einzusteigen und morgens entspannt am Zielort anzukommen, ohne wertvolle Urlaubszeit im Stau oder bei Sicherheitskontrollen am Flughafen zu verlieren.", correctAnswer: "H" }
        ]
      },
      {
        part: "Teil 2",
        title: "Leseverstehen (Detailverstehen)",
        description: "Lesen Sie den folgenden Text und wählen Sie bei den Aufgaben 6-10 die richtige Antwort (a, b oder c).",
        passage: "In-vitro-Fleisch: Die Zukunft unserer Ernährung?\n\nDie weltweite Fleischnachfrage steigt kontinuierlich, was die traditionelle Massentierhaltung vor enorme ökologische und ethische Probleme stellt. Eine vielversprechende Alternative ist sogenanntes In-vitro-Fleisch, auch bekannt als Laborfleisch. Dabei werden tierische Stammzellen entnommen und in einer Nährlösung in Bioreaktoren kultiviert, wo sie zu Muskelgewebe heranwachsen. Für die Produktion muss also kein Tier geschlachtet werden.\n\nBefürworter betonen die ökologischen Vorteile: Die Herstellung im Labor benötigt im Vergleich zur herkömmlichen Rinderzucht bis zu 90 Prozent weniger Landfläche und verbraucht deutlich weniger Wasser. Zudem sinkt der Ausstoß von Treibhausgasen drastisch. Auch gesundheitliche Vorteile werden genannt, da das Fleisch in einer sterilen Umgebung wächst, wodurch Krankheitserreger und der Einsatz von Antibiotika ausgeschlossen werden können.\n\nAllerdings steht die Technologie noch vor großen Hürden. Die Produktion is derzeit extrem energieintensiv und die Herstellungskosten sind so hoch, dass Laborfleisch noch nicht konkurrenzfähig ist. Zudem ist die Akzeptanz in der Bevölkerung geteilt. Während jüngere Verbraucher der Innovation offen gegenüberstehen, reagieren viele ältere Menschen skeptisch auf künstlich erzeugte Nahrungsmittel. Bis Laborfleisch in Supermarktregalen alltäglich wird, dürften daher noch einige Jahre vergehen.",
        questions: [
          { id: 6, question: "Wie wird In-vitro-Fleisch hergestellt?", options: [{ id: "a", text: "Aus rein pflanzlichen Proteinen, die wie Fleisch schmecken." }, { id: "b", text: "Durch die Vermehrung von tierischen Zellen in einer Nährlösung." }, { id: "c", text: "In traditionellen Schlachthöfen unter sterilen Bedingungen." }], correctAnswer: "b" },
          { id: 7, question: "Welcher ökologische Vorteil wird im Text genannt?", options: [{ id: "a", text: "Es wird absolut kein Strom für die Herstellung benötigt." }, { id: "b", text: "Die Produktion schont Wasserressourcen und spart sehr viel Landfläche ein." }, { id: "c", text: "Es entstehen bei der Züchtung überhaupt keine Abfälle." }], correctAnswer: "b" },
          { id: 8, question: "Warum gilt Laborfleisch als gesundheitlich sicherer?", options: [{ id: "a", text: "Weil es überhaupt kein Fett enthält." }, { id: "b", text: "Weil es ohne den Einsatz von Antibiotika und in steriler Umgebung produziert wird." }, { id: "c", text: "Weil es Krankheiten beim Menschen heilen kann." }], correctAnswer: "b" },
          { id: 9, question: "Was ist ein aktuelles Problem bei der Produktion von Laborfleisch?", options: [{ id: "a", text: "Die Herstellung verbraucht sehr viel Energie und ist extrem teuer." }, { id: "b", text: "Es gibt weltweit keine Erlaubnis, daran zu forschen." }, { id: "c", text: "Es schmeckt überhaupt nicht nach echtem Fleisch." }], correctAnswer: "a" },
          { id: 10, question: "Wie reagieren die Verbraucher auf das Laborfleisch?", options: [{ id: "a", text: "Alle Altersgruppen lehnen das Produkt bisher strikt ab." }, { id: "b", text: "Jüngere Menschen zeigen sich aufgeschlossener als ältere Generationen." }, { id: "c", text: "Es ist bereits das beliebteste Fleisch in den Supermärkten." }], correctAnswer: "b" }
        ]
      },
      {
        part: "Teil 3",
        title: "Selektives Lesen (Zuordnung)",
        description: "Lesen Sie die Situationen (11-20) und die Anzeigen (A-L). Finden Sie für jede Situation die passende Anzeige. Für eine Situation gibt es keine passende Anzeige. Kennzeichnen Sie diese mit einem 'X'.",
        options: [
          { id: "A", text: "Fortbildungsinstitut Apex - Wochenendkurs: Grundlagen des Projektmanagements für Berufstätige. Zertifikat inklusive." },
          { id: "B", text: "Pflegeschule Herz - Umschulung zur Pflegefachkraft. Staatlich gefördert, garantierte Übernahme nach der Ausbildung." },
          { id: "C", text: "Excel-Akademie - Online-Kompaktkurs für Fortgeschrittene: Datenanalyse, Pivot-Tabellen und Makros. Flexibler Start." },
          { id: "D", text: "Spracheninstitut Dialog - Wirtschaftsenglisch für den Beruf. Abendkurse zweimal wöchentlich ab 19:00 Uhr." },
          { id: "E", text: "Handwerkskammer - Ausbildung zum Schreiner/Tischler. Informationsabend am kommenden Donnerstag." },
          { id: "F", text: "Medien-Design-Schule - Fernstudium Grafikdesign und Webentwicklung. Keine Vorkenntnisse erforderlich." },
          { id: "G", text: "Finanz-Seminar - Steuerrecht für Existenzgründer und Selbstständige. Tagesworkshop am Samstag." },
          { id: "H", text: "Akademie für Kommunikation - Ausbildung zum Social Media Manager. Vollzeitkurs (3 Monate), Start im Oktober." },
          { id: "I", text: "Rednerschule - Rhetorik- und Präsentationstraining für Führungskräfte. Einzelcoaching nach Vereinbarung." },
          { id: "J", text: "Schreibwerkstatt - Kreatives Schreiben für Anfänger. Wöchentliche Treffen am Dienstagnachmittag." },
          { id: "K", text: "Berufsberatung Aktiv - Bewerbungstraining und Lebenslauf-Check für Berufseinsteiger. Kostenlos für Arbeitssuchende." },
          { id: "L", text: "Tech-Akademie - Einführung in Python und Data Science. Intensivkurs für Anfänger am Wochenende." }
        ],
        items: [
          { id: 11, situation: "Ein Angestellter möchte seine Karrierechancen verbessern, indem er ein offizielles Zertifikat im Projektmanagement erwirbt.", correctAnswer: "A" },
          { id: 12, situation: "Eine Verkäuferin möchte sich beruflich komplett verändern und sucht eine geförderte Umschulung im sozialen Bereich.", correctAnswer: "B" },
          { id: 13, situation: "Ein Buchhalter muss in seinem Job komplexe Tabellen analysieren und möchte seine Excel-Kenntnisse online vertiefen.", correctAnswer: "C" },
          { id: 14, situation: "Eine Exportleiterin möchte ihre mündliche Ausdrucksweise im internationalen Geschäftsverkehr verbessern.", correctAnswer: "D" },
          { id: 15, situation: "Ein Schulabgänger interessiert sich für die handwerkliche Arbeit mit Holz und sucht nähere Informationen dazu.", correctAnswer: "E" },
          { id: 16, situation: "Ein Hobbyfotograf möchte flexibel von zu Hause aus lernen, wie man Webseiten gestaltet und Grafiken erstellt.", correctAnswer: "F" },
          { id: 17, situation: "Ein frischgebackener Gründer sucht Hilfe, um die steuerlichen Pflichten seines neuen Unternehmens zu verstehen.", correctAnswer: "G" },
          { id: 18, situation: "Eine Marketing-Assistentin möchte sich in Vollzeit auf die Betreuung von Instagram- und Facebook-Kanälen spezialisieren.", correctAnswer: "H" },
          { id: 19, situation: "Ein Manager bereitet eine wichtige Rede vor und sucht ein persönliches Einzeltraining, um selbstbewusster aufzutreten.", correctAnswer: "I" },
          { id: 20, situation: "Jemand sucht eine Ausbildung zum professionellen Automechaniker in seiner Nähe.", correctAnswer: "X" }
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
        title: "Rekonstruktion von Texten / Zuordnung von Überschriften",
        description: "Lesen Sie die fünf Texte (1-5) und entscheiden Sie, welche Überschrift (A-J) am besten zu welchem Text passt. Es gibt für jeden Text nur eine passende Überschrift. Fünf Überschriften bleiben übrig.",
        options: [
          { id: "A", text: "Meditation als Ausgleich zum stressigen Alltag" },
          { id: "B", text: "Warum gesunder Schlaf für den Körper überlebenswichtig ist" },
          { id: "C", text: "Die Risiken von Extremdiäten ohne ärztliche Aufsicht" },
          { id: "D", text: "Digitale Entgiftung: Ein Wochenende ohne Internet und Handy" },
          { id: "E", text: "Die steigende Beliebtheit von Wellness- und Kuraufenthalten" },
          { id: "F", text: "Sport im Fitnessstudio: Verletzungsgefahr wird unterschätzt" },
          { id: "G", text: "Yoga im Trend: Mehr als nur körperliche Dehnungen" },
          { id: "H", text: "Kräutertees: Natürliche Helfer bei Erkältungskrankheiten" },
          { id: "I", text: "Die Bedeutung von regelmäßigen Vorsorgeuntersuchungen" },
          { id: "J", text: "Lachen ist die beste Medizin: Lachyoga im Test" }
        ],
        items: [
          { id: 1, text: "Diese uralte indische Philosophie hat längst den Westen erobert. In fast jeder Stadt gibt es zahlreiche Studios, die Kurse anbieten. Dabei geht es den Praktizierenden meist nicht nur um die körperliche Fitness oder Flexibilität, sondern vor allem um die geistige Ruhe und die bewusste Atmung, die dabei helfen, den Geist zu fokussieren und Stress abzubauen.", correctAnswer: "G" },
          { id: 2, text: "Viele Menschen verbringen ihre Freizeit permanent erreichbar vor Bildschirmen. Immer mehr Hotels bieten deshalb bewusste Auszeiten an, bei denen Gäste ihre Mobiltelefone beim Check-in abgeben müssen. Ohne E-Mails, soziale Medien und ständige Benachrichtigungen sollen die Teilnehmer lernen, sich wieder auf die reale Umwelt und ihre eigene mentale Erholung zu konzentrieren.", correctAnswer: "D" },
          { id: 3, text: "Während der Nachtruhe leistet unser Gehirn Schwerstarbeit. Es verarbeitet die Erlebnisse des Tages, sortiert Informationen und stärkt das Gedächtnis. Gleichzeitig laufen im Körper wichtige Reparaturprozesse der Zellen und des Immunsystems ab. Chronischer Mangel an dieser Erholungsphase kann zu schweren gesundheitlichen Problemen wie Herz-Kreislauf-Erkrankungen führen.", correctAnswer: "B" },
          { id: 4, text: "Immer mehr Menschen sehnen sich nach einer Auszeit vom hektischen Berufsleben und buchen Aufenthalte in Thermalbädern oder spezialisierten Kurorten. Die Kombination aus warmem Heilwasser, Massagen und Schlammpackungen hilft nachweislich, Muskelverspannungen zu lösen und chronische Gelenkschmerzen zu lindern, weshalb auch Krankenkassen solche Reisen oft bezuschussen.", correctAnswer: "E" },
          { id: 5, text: "Um Geist und Körper zur Ruhe zu bringen, nutzen viele Menschen die Praxis des stillen Sitzens. Indem man sich auf den Atem oder ein bestimmtes Wort konzentriert, lernt man, aufkommende Gedanken vorbeiziehen zu lassen, ohne sie zu bewerten. Wissenschaftler konnten nachweisen, dass diese tägliche Routine den Blutdruck senkt und das Stresshormon Cortisol im Blut reduziert.", correctAnswer: "A" }
        ]
      },
      {
        part: "Teil 2",
        title: "Leseverstehen (Detailverstehen)",
        description: "Lesen Sie den folgenden Text und wählen Sie bei den Aufgaben 6-10 die richtige Antwort (a, b oder c).",
        passage: "Der Boom des E-Commerce: Wandel im Konsumverhalten\n\nDer Online-Handel verzeichnet seit Jahren ein enormes Wachstum. Bequem vom Sofa aus Kleidung, Elektronik oder sogar Lebensmittel zu bestellen, gehört für die meisten Menschen längst zum Alltag. Dieser Trend hat das Konsumverhalten nachhaltig verändert. Paketboten prägen das Straßenbild und die Logistikzentren arbeiten rund um die Uhr. Doch dieser Komfort hat auch Schattenseiten, insbesondere für die Umwelt.\n\nDer ständige Transport von Waren führt zu einem hohen Verkehrsaufkommen in den Städten und damit zu erheblichen CO2-Emissionen. Ein weiteres ökologisches Problem sind die Retouren. Da der Rückversand für Kunden oft kostenlos ist, wird viel mehr bestellt, als tatsächlich benötigt wird. Ein beachtlicher Teil der zurückgeschickten Ware, vor allem im Textilbereich, wird aus Kostengründen nicht wieder in den Verkauf gebracht, sondern vernichtet, was massive Ressourcenverschwendung bedeutet.\n\nGleichzeitig leidet der traditionelle Einzelhandel in den Innenstädten. Viele inhabergeführte Geschäfte müssen schließen, da sie preislich und bei der Auswahl nicht mit den großen Online-Plattformen mithalten können. Die Folge sind verödete Fußgängerzonen und ein Verlust an Attraktivität der Stadtzentren. Experten fordern daher neue Konzepte, um den stationären Handel zu unterstützen und die Innenstädte wieder mit kulturellen und gastronomischen Angeboten zu beleben.",
        questions: [
          { id: 6, question: "Welche Auswirkung hat der Boom des E-Commerce auf das Konsumverhalten?", options: [{ id: "a", text: "Die Menschen kaufen heute fast ausschließlich in Einkaufszentren ein." }, { id: "b", text: "Online-Shopping ist für viele Menschen zu einer alltäglichen Gewohnheit geworden." }, { id: "c", text: "Das Konsumverhalten hat sich in den letzten Jahren kaum verändert." }], correctAnswer: "b" },
          { id: 7, question: "Warum sind Retouren im Online-Handel ein großes Problem für die Umwelt?", options: [{ id: "a", text: "Weil der Rückversand für die Kunden sehr teuer ist." }, { id: "b", text: "Weil zurückgesendete Waren oft vernichtet statt weiterverkauft werden." }, { id: "c", text: "Weil die Kunden die Pakete selbst zur Müllkippe bringen müssen." }], correctAnswer: "b" },
          { id: 8, question: "Was führt zu hohen CO2-Emissionen im E-Commerce?", options: [{ id: "a", text: "Die Verbrennung von Verpackungsmüll." }, { id: "b", text: "Der ständige Transport der bestellten Waren in den Städten." }, { id: "c", text: "Die Herstellung der Online-Webseiten." }], correctAnswer: "b" },
          { id: 9, question: "Wie betrifft die Entwicklung den klassischen Einzelhandel?", options: [{ id: "a", text: "Er verzeichnet Rekordgewinne durch weniger Konkurrenz." }, { id: "b", text: "Viele Geschäfte müssen schließen, weil sie nicht mithalten können." }, { id: "c", text: "Er hat sich vollständig ins Internet verlagert." }], correctAnswer: "b" },
          { id: 10, question: "Was schlagen Experten vor, um verödeten Innenstädten entgegenzuwirken?", options: [{ id: "a", text: "Den Online-Handel komplett gesetzlich zu verbieten." }, { id: "b", text: "Die Stadtzentren durch Kultur und Gastronomie wieder attraktiver zu machen." }, { id: "c", text: "Die Parkgebühren in den Städten drastisch zu erhöhen." }], correctAnswer: "b" }
            ]
          },
          {
            part: "Teil 3",
            title: "Selektives Lesen (Zuordnung)",
            description: "Lesen Sie die Situationen (11-20) und die Anzeigen (A-L). Finden Sie für jede Situation die passende Anzeige. Für eine Situation gibt es keine passende Anzeige. Kennzeichnen Sie diese mit einem 'X'.",
            options: [
              { id: "A", text: "Hotel Seeblick - Praktikumsplätze im Hotel- und Restaurantfach für die Sommermonate. Unterkunft wird gestellt." },
              { id: "B", text: "Naturschutzbund - Ehrenamtliche Helfer für Artenschutzprojekte gesucht. Ideal für naturbegeisterte Schüler." },
              { id: "C", text: "Software-Schmiede - Sommerpraktikum in der App-Entwicklung. Mindestens 3 Semester Informatikstudium erforderlich." },
              { id: "D", text: "Stadtbibliothek - Ferienjob für Schüler ab 16 Jahren: Sortieren von Büchern und Kundenberatung. 12 €/Std." },
              { id: "E", text: "Tierheim Pfote - Wir suchen tierliebe Praktikanten für die Sommerferien zur Unterstützung bei der Tierpflege." },
              { id: "F", text: "Kanzlei Dr. Weber - Praktikum im Bereich Wirtschaftsrecht. Nur für Studenten der Rechtswissenschaften nach dem Vordiplom." },
              { id: "G", text: "Bäckerei Krumme - Ferienjob in der Backstube. Arbeitsbeginn täglich ab 4:00 Uhr morgens. Attraktiver Stundenlohn." },
              { id: "H", text: "Museum für Kunst - Praktikum im Bereich Museums-Pädagogik und Ausstellungs-Organisation im Sommer." },
              { id: "I", text: "Supermarkt Express - Aushilfen für die Regale im Juli und August gesucht. Flexible Zeiteinteilung." },
              { id: "J", text: "Event-Agentur Star - Bezahlte Ferienjobs als Servicekraft auf Musikfestivals im Sommer. Mindestalter 18 Jahre." },
              { id: "K", text: "Fahrrad-Verleih Velo - Werkstattpraktikum im Sommer. Erste Erfahrungen mit Fahrradreparaturen von Vorteil." },
              { id: "L", text: "Reisebüro Sonne - Praktikum im Bereich Tourismusmarketing und Reiseberatung für Studenten." }
            ],
            items: [
              { id: 11, situation: "Ein Schüler (17) sucht eine bezahlte Ferienarbeit in einer Bibliothek, um Bücher einzusortieren.", correctAnswer: "D" },
              { id: 12, situation: "Eine Informatikstudentin sucht ein anspruchsvolles Praktikum im Bereich der Softwareentwicklung während der Semesterferien.", correctAnswer: "C" },
              { id: 13, situation: "Eine Schülerin möchte sich im Sommer ehrenamtlich für Tiere engagieren und sucht ein unbezahltes Praktikum.", correctAnswer: "E" },
              { id: 14, situation: "Ein Jurastudent sucht ein Praktikum, um praktische Erfahrungen im Wirtschaftsrecht zu sammeln.", correctAnswer: "F" },
              { id: 15, situation: "Ein Schüler sucht einen Ferienjob als Bäckerhelfer, bei dem er sehr früh am Morgen arbeiten kann.", correctAnswer: "G" },
              { id: 16, situation: "Eine Studentin der Kunstgeschichte möchte im Sommer lernen, wie Ausstellungen im Museum konzipiert werden.", correctAnswer: "H" },
              { id: 17, situation: "Ein Schüler sucht eine bezahlte Aushilfsstelle im Supermarkt, um Regale einzuräumen.", correctAnswer: "I" },
              { id: 18, situation: "Ein junger Mann (19) sucht einen Job im Servicebereich bei großen Musikveranstaltungen im Freien.", correctAnswer: "J" },
              { id: 19, situation: "Ein Student der Geografie sucht ein Praktikum im Tourismussektor, bei dem er Reisen mitgestalten kann.", correctAnswer: "L" },
              { id: 20, situation: "Jemand sucht ein Praktikum, um den Beruf des Zahntechnikers kennenzulernen.", correctAnswer: "X" }
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
            title: "Rekonstruktion von Texten / Zuordnung von Überschriften",
            description: "Lesen Sie die fünf Texte (1-5) und entscheiden Sie, welche Überschrift (A-J) am besten zu welchem Text passt. Es gibt für jeden Text nur eine passende Überschrift. Fünf Überschriften bleiben übrig.",
            options: [
              { id: "A", text: "Die Vor- und Nachteile von Smart Homes" },
              { id: "B", text: "Tiny Houses: Minimalistisches Wohnen im Trend" },
              { id: "C", text: "Steigende Mieten verdrängen Familien aus den Städten" },
              { id: "D", text: "Wohnprojekte: Gemeinsam statt einsam im Alter" },
              { id: "E", text: "Die Wiederentdeckung des Lebens auf dem Land" },
              { id: "F", text: "Energieautarke Häuser: Unabhängig von Stromanbietern" },
              { id: "G", text: "Denkmalschutz: Sanierung historischer Gebäude" },
              { id: "H", text: "Barrierefreies Bauen wird gesetzliche Pflicht" },
              { id: "I", text: "Hausboote: Wohnen auf dem Wasser als Lebensentwurf" },
              { id: "J", text: "Schimmelpilz in der Wohnung: Richtiges Lüften hilft" }
            ],
            items: [
              { id: 1, text: "Kleine Häuser auf Rädern oder festem Fundament mit einer Wohnfläche von oft weniger als 30 Quadratmetern erfreuen sich wachsender Beliebtheit. Die Besitzer schätzen die Reduzierung auf das Wesentliche, die geringen Bau- und Betriebskosten sowie die ökologische Nachhaltigkeit. Dieses Konzept zieht vor allem Singles und umweltbewusste Menschen an.", correctAnswer: "B" },
              { id: 2, text: "Um den steigenden Immobilienpreisen in den Ballungsräumen zu entfliehen, ziehen immer mehr junge Familien in ländliche Regionen. Dank flexibler Arbeitszeiten und Homeoffice-Möglichkeiten müssen sie nicht mehr täglich in die Stadt pendeln. Sie schätzen die Ruhe, die Nähe zur Natur und die deutlich günstigeren Grundstückspreise für das eigene Haus.", correctAnswer: "E" },
              { id: 3, text: "In Mehrgenerationenhäusern oder Senioren-WGs wohnen ältere Menschen bewusst in einer Gemeinschaft. Jeder hat seine eigene kleine Wohnung als Rückzugsort, aber Gemeinschaftsräume, Küchen und Gärten werden geteilt. So unterstützt man sich gegenseitig im Alltag, kocht zusammen oder organisiert Freizeitaktivitäten, was sozialer Isolation vorbeugt.", correctAnswer: "D" },
              { id: 4, text: "Moderne Gebäude können heute so konzipiert werden, dass sie ihren gesamten Energiebedarf für Heizung, Warmwasser und Strom durch Solaranlagen, Erdwärme und moderne Speichertechnologien selbst decken. Überschüssige Energie kann ins öffentliche Netz eingespeist werden, was den Eigentümern maximale Unabhängigkeit von fossilen Brennstoffen garantiert.", correctAnswer: "F" },
              { id: 5, text: "Die Vernetzung von Haushaltsgeräten, Heizungen und Beleuchtungsanlagen verspricht mehr Komfort und Energieersparnis. Per Smartphone lässt sich die Raumtemperatur von unterwegs regeln oder das Licht steuern. Datenschützer warnen jedoch vor Sicherheitslücken, da Hacker Zugriff auf persönliche Profile im Heimnetzwerk erhalten könnten.", correctAnswer: "A" }
            ]
          },
          {
            part: "Teil 2",
            title: "Leseverstehen (Detailverstehen)",
            description: "Lesen Sie den folgenden Text und wählen Sie bei den Aufgaben 6-10 die richtige Antwort (a, b oder c).",
            passage: "Plastikmüll in den Ozeanen: Eine globale Umweltkrise\n\nMillionen Tonnen Plastikmüll landen jedes Jahr in den Weltmeeren. Strömungen treiben den Abfall zu riesigen Müllstrudeln zusammen. Der größte von ihnen, der 'Great Pacific Garbage Patch', hat mittlerweile die mehrfache Fläche Deutschlands erreicht. Dieser Müll gefährdet die marine Tierwelt massiv, da Tiere den Plastikabfall mit Nahrung verwechseln oder sich in alten Fischernetzen verfangen.\n\nBesonders tückisch ist das sogenannte Mikroplastik. Durch Sonneneinstrahlung und Wellenbewegung zerfallen größere Plastikteile im Laufe der Zeit in winzige Partikel, die kleiner als fünf Millimeter sind. Diese Partikel werden von Plankton und Fischen aufgenommen und gelangen so über die Nahrungskette schließlich auch auf die Teller der Menschen. Die gesundheitlichen Langzeitfolgen für den menschlichen Organismus sind noch weitgehend ungelöst.\n\nUm die Krise zu bewältigen, sind internationale Anstrengungen nötig. Viele Länder haben Verbote für Einwegplastik erlassen. Dennoch betonen Umweltschützer, dass dies bei weitem nicht ausreicht. Nötig sei eine Kreislaufwirtschaft, bei der Kunststoffe vollständig recycelt oder biologisch abgebaut werden können. Zudem müssen Technologien zur Reinigung der Meere gefördert werden, um den bereits vorhandenen Müll wieder aus dem Wasser zu holen.",
            questions: [
              { id: 6, question: "Welche Dimensionen hat der größte Müllstrudel im Pazifik erreicht?", options: [{ id: "a", text: "Er ist so groß wie eine deutsche Kleinstadt." }, { id: "b", text: "Er ist um ein Vielfaches größer als die Fläche Deutschlands." }, { id: "c", text: "Er ist im letzten Jahr vollständig verschwunden." }], correctAnswer: "b" },
              { id: 7, question: "Warum ist Plastikmüll für Meerestiere lebensgefährlich?", options: [{ id: "a", text: "Weil sie das Plastik fressen oder sich darin verfangen." }, { id: "b", text: "Weil das Plastik das Wasser stark erhitzt." }, { id: "c", text: "Weil sie wegen des Plastiks keine Verstecke mehr finden." }], correctAnswer: "a" },
              { id: 8, question: "Wie entsteht Mikroplastik?", options: [{ id: "a", text: "Es wird in speziellen Fabriken künstlich hergestellt." }, { id: "b", text: "Durch den Zerfall von Plastikmüll durch Sonne und Wellen." }, { id: "c", text: "Durch chemische Abfälle aus Atomkraftwerken." }], correctAnswer: "b" },
              { id: 9, question: "Wie gelangt Mikroplastik in den menschlichen Körper?", options: [{ id: "a", text: "Ausgeschlossen, es gelangt niemals zum Menschen." }, { id: "b", text: "Über die marine Nahrungskette (Fischkonsum)." }, { id: "c", text: "Ausschließlich durch das Einatmen von Meeresluft." }], correctAnswer: "b" },
              { id: 10, question: "Welche Maßnahme fordern Umweltschützer zur Bekämpfung der Krise?", options: [{ id: "a", text: "Den vollständigen Verzicht auf jegliche Schifffahrt." }, { id: "b", text: "Eine echte Kreislaufwirtschaft mit vollständigem Recycling." }, { id: "c", text: "Das Verbrennen aller Kunststoffe direkt am Strand." }], correctAnswer: "b" }
            ]
          },
          {
            part: "Teil 3",
            title: "Selektives Lesen (Zuordnung)",
            description: "Lesen Sie die Situationen (11-20) und die Anzeigen (A-L). Finden Sie für jede Situation die passende Anzeige. Für eine Situation gibt es keine passende Anzeige. Kennzeichnen Sie diese mit einem 'X'.",
            options: [
              { id: "A", text: "Alpen-Tours - Geführte Bergwanderungen und Klettertouren in den Allgäuer Alpen für Anfänger. Ausrüstung wird gestellt." },
              { id: "B", text: "Wein & Genuss - Exklusive Weinverkostung und Kellerführungen am Bodensee. Samstags ab 15:00 Uhr. Anmeldung erforderlich." },
              { id: "C", text: "Stadtgeschichte Erleben - Historische Stadtführungen in Berlin. Täglich ab Brandenburger Tor, auch auf Englisch." },
              { id: "D", text: "Foto-Safari - Wochenend-Workshop für Landschafts- und Naturfotografie in der sächsischen Schweiz." },
              { id: "E", text: "Wellness-Oase - Verwöhntag für Körper und Geist: Sauna, Thermalbad und klassische Ganzkörpermassagen im Paket." },
              { id: "F", text: "Fahrrad-Touren Rhein - Geführte Radtouren entlang des Rheins mit Mietrad und Gepäcktransport von Hotel zu Hotel." },
              { id: "G", text: "Kochstudio International - Sushi-Kochkurs für Liebhaber der japanischen Küche unter Anleitung eines Profi-Chefs." },
              { id: "H", text: "Segelschule Wind - Grundkurs Segeln und Windsurfen am Chiemsee. Wochenkurse im Juli und August." },
              { id: "I", text: "Kreativ-Atelier - Malkurs für Öl- und Aquarellmalerei am Wochenende im Allgäu. Materialien inklusive." },
              { id: "J", text: "Konzert-Agentur Klassik - Eintrittskarten für die sommerlichen Schlosskonzerte in Dresden. Online-Buchung." },
              { id: "K", text: "Reitstall Wiese - Reitstunden für Kinder und Erwachsene, geführte Ausritte in die Natur. Täglich geöffnet." },
              { id: "L", text: "Kreuzfahrt Kontraste - 7 Tage Donaukreuzfahrt von Passau nach Budapest. All-inclusive-Verpflegung an Bord." }
            ],
            items: [
              { id: 11, situation: "Ein Urlauber möchte eine geführte Wandertour in den Bergen machen, hat aber keine eigene Ausrüstung.", correctAnswer: "A" },
              { id: 12, situation: "Ein Ehepaar interessiert sich für ein Seminar über Weinbau und möchte verschiedene Weine verkosten.", correctAnswer: "B" },
              { id: 13, situation: "Ein Tourist in Berlin möchte an einer deutsch- oder englischsprachigen Führung zur Stadtgeschichte teilnehmen.", correctAnswer: "C" },
              { id: 14, situation: "Eine Hobbyfotografin sucht einen zweitägigen Kurs, um ihre Kenntnisse in der Naturfotografie zu verbessern.", correctAnswer: "D" },
              { id: 15, situation: "Jemand sucht einen entspannten Tag mit Sauna und Massagen zur Erholung vom Stress.", correctAnswer: "E" },
              { id: 16, situation: "Ein Radfahrer möchte eine mehrtägige Radtour machen, ohne sich um sein Gepäck kümmern zu müssen.", correctAnswer: "F" },
              { id: 17, situation: "Eine junge Frau möchte lernen, wie man professionell Sushi zubereitet.", correctAnswer: "G" },
              { id: 18, situation: "Ein Student möchte in den Semesterferien segeln lernen und sucht einen einwöchigen Grundkurs.", correctAnswer: "H" },
              { id: 19, situation: "Eine Freizeitkünstlerin möchte an einem Wochenende lernen, mit Ölfarben Landschaften zu malen.", correctAnswer: "I" },
              { id: 20, situation: "Jemand möchte einen Flug nach Mallorca buchen.", correctAnswer: "X" }
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
            title: "Rekonstruktion von Texten / Zuordnung von Überschriften",
            description: "Lesen Sie die fünf Texte (1-5) und entscheiden Sie, welche Überschrift (A-J) am besten zu welchem Text passt. Es gibt für jeden Text nur eine passende Überschrift. Fünf Überschriften bleiben übrig.",
            options: [
              { id: "A", text: "Online-Shopping verdrängt zunehmend den Wochenmarkt" },
              { id: "B", text: "Unverpackt-Läden: Konsum ohne Plastikmüll" },
              { id: "C", text: "Die Renaissance des Second-Hand-Kaufs bei Jugendlichen" },
              { id: "D", text: "Warum Supermärkte auf künstliche Intelligenz setzen" },
              { id: "E", text: "Die steigende Nachfrage nach regionalen Bio-Produkten" },
              { id: "F", text: "Kauf auf Raten: Die Schuldenfalle für junge Verbraucher" },
              { id: "G", text: "Wie das Smartphone den klassischen Einkaufszettel ersetzt" },
              { id: "H", text: "Das Aussterben von Traditionsgeschäften in Kleinstädten" },
              { id: "I", text: "Lebensmittel retten: Initiativen gegen die Verschwendung" },
              { id: "J", text: "Möbel-Sharing: Mieten statt Kaufen liegt im Trend" }
            ],
            items: [
              { id: 1, text: "Das Bewusstsein für Umweltschutz verändert das Kaufverhalten grundlegend. In vielen Städten etablieren sich spezielle Geschäfte, in denen Mehl, Nudeln oder Waschmittel in mitgebrachte Behälter abgefüllt werden. Die Kunden schätzen die Möglichkeit, genau die Menge zu kaufen, die sie tatsächlich benötigen, und gleichzeitig aktiv zur Reduzierung des Verpackungsmülls beizutragen.", correctAnswer: "B" },
              { id: 2, text: "Gebrauchte Kleidung und Retromöbel sind heute beliebter denn je. Vor allem Schüler und Studenten durchstöbern gezielt Flohmärkte und Online-Plattformen nach alten Schätzen. Was früher als Zeichen von Geldmangel galt, wird heute als individueller Modestil und bewusster Beitrag zur Ressourcenschonung zelebriert.", correctAnswer: "C" },
              { id: 3, text: "Tonnenweise genießbares Obst, Gemüse und Brot landen täglich im Müll. Dem wirken engagierte Vereine entgegen, indem sie überschüssige Lebensmittel bei Supermärkten abholen und kostenlos an soziale Einrichtungen verteilen oder in öffentlich zugänglichen Verteilerkühlschränken für jedermann bereitstellen.", correctAnswer: "I" },
              { id: 4, text: "DieDigitalisierung vereinfacht den Einkauf im Supermarkt. Viele Kunden nutzen Apps, um Einkaufslisten mit der Familie zu teilen, Sonderangebote in Echtzeit zu vergleichen oder Treuepunkte direkt an der Kasse zu scannen. Der klassische Zettel aus Papier gehört damit in den meisten Haushalten der Vergangenheit an.", correctAnswer: "G" },
              { id: 5, text: "Kurzfristige Konsumwünsche lassen sich im Internet schnell erfüllen. Doch Verbraucherschützer warnen vor den Angeboten, Elektronik oder Kleidung sofort zu bestellen und erst Monate später zu bezahlen. Viele junge Menschen verlieren dabei den Überblick über ihre monatlichen Verpflichtungen und geraten in eine Schuldenspirale.", correctAnswer: "F" }
            ]
          },
          {
            part: "Teil 2",
            title: "Leseverstehen (Detailverstehen)",
            description: "Lesen Sie den folgenden Text und wählen Sie bei den Aufgaben 6-10 die richtige Antwort (a, b oder c).",
            passage: "Die Zukunft des Bargelds: Auf dem Weg zur kartenbasierten Gesellschaft?\n\nIn vielen europäischen Ländern wie Schweden oder den Niederlanden ist das Bezahlen mit Münzen und Scheinen fast vollständig aus dem Alltag verschwunden. Auch in Deutschland gewinnt das kontaktlose Bezahlen per Karte, Smartphone oder Smartwatch zunehmend an Beliebtheit. Die Corona-Pandemie hat diese Entwicklung nochmals beschleunigt, da viele Händler aus hygienischen Gründen darum baten, bargeldlos zu zahlen.\n\nBefürworter des bargeldlosen Zahlungsverkehrs betonen die Bequemlichkeit und Schnelligkeit an der Kasse. Zudem entfallen für Unternehmen die Kosten und Risiken, die mit dem Transport und der Aufbewahrung von Bargeld verbunden sind. Auch die Bekämpfung von Schwarzarbeit und Steuerhinterziehung wird als Argument angeführt, da elektronische Transaktionen lückenlos nachvollziehbar sind.\n\nKritiker hingegen äußern ernsthafte Bedenken hinsichtlich des Datenschutzes. Mit jeder elektronischen Zahlung hinterlassen Verbraucher digitale Spuren, die von Unternehmen zu Werbezwecken genutzt werden könnten – der gläserne Kunde droht. Zudem besteht die Sorge, dass ältere Generationen, die mit der digitalen Technologie nicht vertraut sind, vom gesellschaftlichen Leben ausgeschlossen werden könnten. Auch bei Stromausfällen oder Cyberangriffen erweist sich Bargeld nach wie vor als das einzig krisensichere Zahlungsmittel.",
            questions: [
              { id: 6, question: "Welche Auswirkung hatte die Corona-Pandemie auf das Bezahlverhalten?", options: [{ id: "a", text: "Sie führte zu einer verstärkten Nutzung von Bargeld." }, { id: "b", text: "Sie beschleunigte den Trend zum kontaktlosen Bezahlen aus Hygienegründen." }, { id: "c", text: "Sie veränderte das Bezahlverhalten überhaupt nicht." }], correctAnswer: "b" },
              { id: 7, question: "Welcher Vorteil wird für Unternehmen genannt, wenn bargeldlos bezahlt wird?", options: [{ id: "a", text: "Die Steuererklärung wird überflüssig." }, { id: "b", text: "Der Transport und die Lagerung von Bargeld entfallen." }, { id: "c", text: "Die Kunden kaufen dadurch doppelt so viel ein." }], correctAnswer: "b" },
              { id: 8, question: "Warum hilft bargeldloser Zahlungsverkehr bei der Kriminalitätsbekämpfung?", options: [{ id: "a", text: "Weil digitale Transaktionen dokumentiert und nachvollziehbar sind." }, { id: "b", text: "Weil Diebe keine Geldbörsen mehr stehlen können." }, { id: "c", text: "Weil elektronisches Geld nicht gefälscht werden kann." }], correctAnswer: "a" },
              { id: 9, question: "Welches Datenschutz-Risiko sehen Kritiker bei digitalen Zahlungen?", options: [{ id: "a", text: "Die Banken könnten das gesamte Geld verlieren." }, { id: "b", text: "Verbraucher hinterlassen Spuren, wodurch sie als Kunden völlig transparent werden." }, { id: "c", text: "Die Passwörter der Kunden werden immer im Internet veröffentlicht." }], correctAnswer: "b" },
              { id: 10, question: "Warum gilt Bargeld als krisensicher?", options: [{ id: "a", text: "Weil es bei Stromausfällen und IT-Störungen trotzdem funktioniert." }, { id: "b", text: "Weil Münzen aus wertvollem Gold hergestellt werden." }, { id: "c", text: "Weil der Wert von Bargeld niemals sinken kann." }], correctAnswer: "a" }
            ]
          },
          {
            part: "Teil 3",
            title: "Selektives Lesen (Zuordnung)",
            description: "Lesen Sie die Situationen (11-20) und die Anzeigen (A-L). Finden Sie für jede Situation die passende Anzeige. Für eine Situation gibt es keine passende Anzeige. Kennzeichnen Sie diese mit einem 'X'.",
            options: [
              { id: "A", text: "Kletterwald Abenteuer - Kletterspaß für die ganze Familie. Gut gesicherte Parcours für Kinder ab 6 Jahren und Erwachsene." },
              { id: "B", text: "Kanutouren Tauber - Verleih von Kanus und Kajaks für Eintages- oder Mehrtagestouren auf dem Fluss. Inklusive Schwimmwesten." },
              { id: "C", text: "Thermalbad Quell - Entspannen Sie in unseren heißen Schwefelquellen und der großzügigen Saunalandschaft. Täglich bis 22 Uhr." },
              { id: "D", text: "Escape Room Exit - Lösen Sie im Team knifflige Rätsel, um innerhalb von 60 Minuten aus dem Raum zu entkommen. Ab 3 Personen." },
              { id: "E", text: "Alpaka-Hof Wiese - Geführte Wanderungen mit unseren sanftmütigen Alpakas durch den Schwarzwald. Voranmeldung nötig." },
              { id: "F", text: "E-Bike Verleih Radler - Mieten Sie moderne E-Bikes für Radtouren im Umland. Inklusive Helm und Radkarte." },
              { id: "G", text: "Erlebnishof Pony - Reitunterricht für Kleinkinder und Ponyreiten am Wochenende. Ideal für Kindergeburtstage." },
              { id: "H", text: "Kino Palast - Die neuesten Blockbuster auf riesigen Leinwänden mit Dolby Atmos Sound. Popcorn frisch zubereitet." },
              { id: "I", text: "Museum für Luftfahrt - Entdecken Sie historische Flugzeuge und Hubschrauber. Interaktive Simulatoren für Besucher." },
              { id: "J", text: "Stadtrundfahrt Express - Entdecken Sie die historischen Sehenswürdigkeiten der Stadt bequem vom Doppeldeckerbus aus." },
              { id: "K", text: "Bogenarena - Einführungskurs im traditionellen Bogenschießen unter Anleitung erfahrener Trainer. Ab 12 Jahren." },
              { id: "L", text: "Kreativwerkstatt Ton - Töpferkurse für Anfänger. Gestalten Sie Ihre eigenen Tassen und Teller aus Ton." }
            ],
            items: [
              { id: 11, situation: "Eine Familie mit einem 8-jährigen Kind sucht eine sportliche Aktivität im Wald.", correctAnswer: "A" },
              { id: 12, situation: "Ein Paar möchte einen Fluss mit dem Boot erkunden und sucht eine Mietmöglichkeit für Kajaks.", correctAnswer: "B" },
              { id: 13, situation: "Jemand sucht eine Indoor-Aktivität für eine Gruppe von 4 Personen, bei der man Rätsel lösen muss.", correctAnswer: "D" },
              { id: 14, situation: "Eine Tierfreundin möchte an einer geführten Wanderung mit sanften Tieren teilnehmen.", correctAnswer: "E" },
              { id: 15, situation: "Ein Tourist möchte die Sehenswürdigkeiten der Stadt kennenlernen, ohne viel laufen zu müssen.", correctAnswer: "J" },
              { id: 16, situation: "Ein Vater sucht eine Reitmöglichkeit für seine 4-jährige Tochter an einem Samstagnachmittag.", correctAnswer: "G" },
              { id: 17, situation: "Ein technikinteressierter Jugendlicher möchte historische Flugzeuge sehen und einen Flugsimulator ausprobieren.", correctAnswer: "I" },
              { id: 18, situation: "Jemand möchte sich an einem kühlen Herbsttag in einer Sauna und warmem Wasser erholen.", correctAnswer: "C" },
              { id: 19, situation: "Ein 14-Jähriger möchte das traditionelle Schießen mit Pfeil und Bogen erlernen.", correctAnswer: "K" },
              { id: 20, situation: "Ein Urlauber möchte sich für einen Tag ein Motorboot ohne Führerschein ausleihen.", correctAnswer: "X" }
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
            title: "Rekonstruktion von Texten / Zuordnung von Überschriften",
            description: "Lesen Sie die fünf Texte (1-5) und entscheiden Sie, welche Überschrift (A-J) am besten zu welchem Text passt. Es gibt für jeden Text nur eine passende Überschrift. Fünf Überschriften bleiben übrig.",
            options: [
              { id: "A", text: "Die Bedeutung von Bienen für das weltweite Ökosystem" },
              { id: "B", text: "Vogelbeobachtung im eigenen Garten: Tipps für Anfänger" },
              { id: "C", text: "Insektenhotels: Nisthilfen selbst bauen" },
              { id: "D", text: "Warum Stadtgärten (Urban Gardening) so erfolgreich sind" },
              { id: "E", text: "Die Gefahren des Klimawandels für den deutschen Wald" },
              { id: "F", text: "Wassersparen im Haushalt: Die besten Techniken" },
              { id: "G", text: "Warum der Igel im Winter unsere Hilfe braucht" },
              { id: "H", text: "Mülltrennung: Plastikmüll richtig entsorgen" },
              { id: "I", text: "Wie künstliche Beleuchtung nachtaktive Insekten stört" },
              { id: "J", text: "Renaturierung von Flüssen: Schutz vor Hochwasser" }
            ],
            items: [
              { id: 1, text: "Das Gärtnern mitten in der Großstadt erfreut sich wachsender Beliebtheit. Auf Brachflächen, Dächern oder in Hinterhöfen bauen Bürger gemeinsam Gemüse, Kräuter und Blumen an. Neben der Ernte frischer Lebensmittel schätzen die Teilnehmer vor allem den sozialen Austausch und die Möglichkeit, der Hektik des Alltags für einige Stunden zu entfliehen.", correctAnswer: "D" },
              { id: 2, text: "Viele Wildbienen und andere nützliche Insekten finden in unseren aufgeräumten Gärten keine natürlichen Brutstätten mehr. Einfache Holzkonstruktionen, gefüllt mit hohlen Schilfrohren, angebohrten Holzstücken oder Ziegelsteinen, bieten den Tieren sichere Nistplätze und tragen so aktiv zum Erhalt der Artenvielfalt bei.", correctAnswer: "C" },
              { id: 3, text: "Durch das ständige Wachstum von Städten und den Einsatz von Straßenlaternen wird es nachts nie mehr richtig dunkel. Diese Lichtverschmutzung hat fatale Folgen für Motten und andere Insekten. Sie kreisen stundenlang um die Lampen, bis sie vor Erschöpfung sterben, was die Nahrungskette für Vögel und Fledermäuse empfindlich stört.", correctAnswer: "I" },
              { id: 4, text: "Hitzewellen und lang anhaltende Dürreperioden in den Sommermonaten setzen den Bäumen in Deutschland stark zu. Besonders Fichten- und Kiefernbestände sind durch den Mangel an Feuchtigkeit geschwächt, was sie extrem anfällig für Schädlinge wie den Borkenkäfer macht. Forstexperten fordern den dringenden Umbau zu Mischwäldern.", correctAnswer: "E" },
              { id: 5, text: "Wenn Flüsse in enge Betonbetten gezwungen werden, steigt bei Starkregen die Gefahr von Überschwemmungen dramatisch. Durch die Wiederherstellung natürlicher Auenlandschaften und Kurven bekommt das Wasser wieder mehr Raum, um sich gefahrlos auszubreiten, was gleichzeitig neuen Lebensraum für seltene Pflanzen und Tiere schafft.", correctAnswer: "J" }
            ]
          },
          {
            part: "Teil 2",
            title: "Leseverstehen (Detailverstehen)",
            description: "Lesen Sie den folgenden Text und wählen Sie bei den Aufgaben 6-10 die richtige Antwort (a, b oder c).",
            passage: "Die Rückkehr des Wolfes nach Deutschland: Konfliktstoff für Natur und Gesellschaft\n\nSeit rund 25 Jahren breiten sich Wölfe in Deutschland wieder aus, nachdem sie im 19. Jahrhundert vollständig ausgerottet worden waren. Was Naturschützer als großen Erfolg für den Artenschutz feiern, sorgt bei Nutztierhaltern, insbesondere bei Schaf- und Ziegenzüchtern, für große Sorge und heftige Proteste. Immer wieder kommt es zu Rissen von Nutztieren auf Weiden.\n\nUm Schäden zu minimieren, setzen Weidetierhalter zunehmend auf Schutzmaßnahmen wie Elektrozäune und den Einsatz von Herdenschutzhunden. Diese Hunde wachsen mit den Nutztieren auf und verteidigen sie instinktiv gegen Angreifer. Der Staat unterstützt die Anschaffung solcher Schutzsysteme finanziell. Dennoch argumentieren viele Züchter, dass der Arbeitsaufwand und die laufenden Kosten für die Haltung der Hunde auf Dauer nicht wirtschaftlich tragbar seien.\n\nDie Debatte wird auch politisch hitzig geführt. Während einige Parteien fordern, das Jagdrecht zu lockern, um Wölfe in Gebieten mit vielen Nutztieren leichter abschießen zu können, betonen Biologen, dass der Wolf eine wichtige Rolle im Waldökosystem spielt. Er jagt vor allem kranke und schwache Wildtiere, was den Wildbestand gesund hält und den Verbiss von Jungbäumen im Wald verringert. Ein friedliches Zusammenleben erfordert daher weiterhin Kompromisse und eine sachliche Diskussion.",
            questions: [
              { id: 6, question: "Warum regt sich in der Bevölkerung Widerstand gegen die Wölfe?", options: [{ id: "a", text: "Weil sie Menschen in Städten angreifen." }, { id: "b", text: "Weil Nutztierhalter den Verlust ihrer Weidetiere fürchten." }, { id: "c", text: "Weil Wölfe den gesamten Fischbestand in Flüssen fressen." }], correctAnswer: "b" },
              { id: 7, question: "Welche Schutzmaßnahme für Weidetiere wird im Text genannt?", options: [{ id: "a", text: "Die Tiere nachts ausschließlich in Ställen im Dorf einzusperren." }, { id: "b", text: "Der Einsatz von Elektrozäunen und speziellen Herdenschutzhunden." }, { id: "c", text: "Das Aufstellen von Vogelscheuchen auf den Wiesen." }], correctAnswer: "b" },
              { id: 8, question: "Welches Problem sehen Züchter bei den Schutzhunden?", options: [{ id: "a", text: "Die Hunde sind oft aggressiv gegenüber den Schafen." }, { id: "b", text: "Der Arbeitsaufwand und die Unterhaltskosten sind wirtschaftlich schwer tragbar." }, { id: "c", text: "Es gibt in Deutschland keine Ausbildung für diese Hunde." }], correctAnswer: "b" },
              { id: 9, question: "Welche Funktion hat der Wolf im Wald laut Biologen?", options: [{ id: "a", text: "Er vertreibt andere Raubtiere wie Füchse." }, { id: "b", text: "Er reguliert den Wildbestand durch die Jagd auf schwache und kranke Tiere." }, { id: "c", text: "Er hilft Förstern beim Pflanzen neuer Bäume." }], correctAnswer: "b" },
              { id: 10, question: "Welche politische Forderung wird bezüglich der Wölfe erhoben?", options: [{ id: "a", text: "Die Wölfe wieder komplett aus Deutschland zu vertreiben." }, { id: "b", text: "Das Jagdrecht zu lockern, um bestimmte Wölfe abschießen zu dürfen." }, { id: "c", text: "Wölfe ausschließlich in Zoos zu halten." }], correctAnswer: "b" }
            ]
          },
          {
            part: "Teil 3",
            title: "Selektives Lesen (Zuordnung)",
            description: "Lesen Sie die Situationen (11-20) und die Anzeigen (A-L). Finden Sie für jede Situation die passende Anzeige. Für eine Situation gibt es keine passende Anzeige. Kennzeichnen Sie diese mit einem 'X'.",
            options: [
              { id: "A", text: "Rede-Talent - Rhetorikkurs für Berufstätige. Lernen Sie, vor großem Publikum sicher und überzeugend zu sprechen." },
              { id: "B", text: "Kreativ-Schreiben - Online-Workshop am Abend. Finden Sie Ihren eigenen Schreibstil für Kurzgeschichten und Romane." },
              { id: "C", text: "Spanisch Express - Intensivkurs für Anfänger vor der Urlaubsreise. Samstags von 9 bis 13 Uhr." },
              { id: "D", text: "Finanz-Fokus - Grundlagen der privaten Geldanlage, Aktien und Altersvorsorge für Einsteiger." },
              { id: "E", text: "Fotokunst - Porträtfotografie für Fortgeschrittene. Umgang mit Studiolicht und Bildbearbeitung." },
              { id: "F", text: "Fit-im-Büro - Rückenschule und Entspannungstechniken für Schreibtischarbeiter. Immer dienstags um 17 Uhr." },
              { id: "G", text: "Web-Design - Grundlagenkurs HTML, CSS und WordPress. Erstellen Sie Ihre eigene Webseite." },
              { id: "H", text: "Erste-Hilfe-Kurs - Notfalltraining für Führerscheinbewerber und Betriebshelfer. Tageskurs am Samstag." },
              { id: "I", text: "Gärtnern-Leicht - Tipps für die Gestaltung von Balkonen und kleinen Nutzgärten im Frühling." },
              { id: "J", text: "Malatelier - Acrylmalerei für Einsteiger. Experimentieren Sie mit Farben und Leinwänden am Wochenende." },
              { id: "K", text: "Auto-Check - Wochenendkurs: Einfache Autoreparaturen, Reifenwechsel und Flüssigkeitskontrolle selbst durchführen." },
              { id: "L", text: "Kochen-Asien - Die Geheimnisse der thailändischen und vietnamesischen Küche im Abendkurs." }
            ],
            items: [
              { id: 11, situation: "Ein Mitarbeiter im Vertrieb möchte lernen, wie er Vorträge vor Kunden freier und sicherer halten kann.", correctAnswer: "A" },
              { id: 12, situation: "Eine Schreibkraft klagt über Verspannungen im Nacken und sucht einen Gymnastikkurs nach der Arbeit.", correctAnswer: "F" },
              { id: 13, situation: "Ein Student möchte lernen, wie man eine eigene Homepage programmiert und gestaltet.", correctAnswer: "G" },
              { id: 14, situation: "Eine Autofahrerin möchte lernen, wie sie im Pannenfall das Rad selbst wechseln kann.", correctAnswer: "K" },
              { id: 15, situation: "Jemand plant einen Urlaub in Südamerika und möchte vorher schnell die wichtigsten Vokabeln lernen.", correctAnswer: "C" },
              { id: 16, situation: "Ein Hobbykoch möchte lernen, wie man original thailändische Suppen und Currygerichte zubereitet.", correctAnswer: "L" },
              { id: 17, situation: "Ein junger Berufstätiger möchte sich über den klugen Aufbau einer privaten Altersvorsorge informieren.", correctAnswer: "D" },
              { id: 18, situation: "Eine Hobbykünstlerin möchte an einem Samstag lernen, mit Acrylfarben Bilder zu malen.", correctAnswer: "J" },
              { id: 19, situation: "Ein zukünftiger Autofahrer benötigt die Bescheinigung über einen lebensrettenden Sofortmaßnahmenkurs.", correctAnswer: "H" },
              { id: 20, situation: "Jemand sucht einen Kurs, um das Spielen der Akustikgitarre zu lernen.", correctAnswer: "X" }
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
            title: "Rekonstruktion von Texten / Zuordnung von Überschriften",
            description: "Lesen Sie die fünf Texte (1-5) und entscheiden Sie, welche Überschrift (A-J) am besten zu welchem Text passt. Es gibt für jeden Text nur eine passende Überschrift. Fünf Überschriften bleiben übrig.",
            options: [
              { id: "A", text: "Die zunehmende Bedeutung von Remote Work weltweit" },
              { id: "B", text: "Warum Großraumbüros die Produktivität senken" },
              { id: "C", text: "Die Einführung der 35-Stunden-Woche im Handwerk" },
              { id: "D", text: "Wie Pflanzen im Büro das Raumklima verbessern" },
              { id: "E", text: "Arbeitsplatzgestaltung: Ergonomie schont den Rücken" },
              { id: "F", text: "Der Mangel an qualifizierten Führungskräften in Europa" },
              { id: "G", text: "Warum Pausen im Arbeitsalltag unverzichtbar sind" },
              { id: "H", text: "Die Vorzüge von flexiblen Gleitzeitmodellen" },
              { id: "I", text: "Burnout: Psychische Belastungen im Beruf nehmen zu" },
              { id: "J", text: "Warum Hunde am Arbeitsplatz Stress reduzieren" }
            ],
            items: [
              { id: 1, text: "Das stundenlange Sitzen vor dem Bildschirm führt bei vielen Büroangestellten zu chronischen Nackenschmerzen. Arbeitsmediziner raten dringend dazu, Schreibtische und Stühle individuell an die Körpergröße anzupassen. Auch die Anschaffung von höhenverstellbaren Tischen, die ein Arbeiten im Stehen ermöglichen, leistet einen wichtigen Beitrag zur langfristigen Gesundheit der Mitarbeiter.", correctAnswer: "E" },
              { id: 2, text: "Wer acht Stunden ohne Unterbrechung durcharbeitet, schadet seiner Leistungsfähigkeit. Studien belegen, dass das Gehirn nach etwa 90 Minuten konzentrierter Arbeit eine kurze Regeneration benötigt. Ein kurzer Gang an die frische Luft oder Dehnübungen reichen aus, um die Energiespeicher wieder aufzuladen und Fehler bei der Arbeit zu minimieren.", correctAnswer: "G" },
              { id: 3, text: "Einige moderne Unternehmen erlauben es ihren Angestellten, ihre Vierbeiner mit ins Büro zu bringen. Die Anwesenheit von Haustieren sorgt nachweislich für eine entspanntere Atmosphäre und fördert den informellen Austausch unter den Kollegen. Das Streicheln eines Hundes senkt zudem nachweislich den Blutdruck und mindert das Stressempfinden im hektischen Alltag.", correctAnswer: "J" },
              { id: 4, text: "Feste Arbeitszeiten von 9 bis 17 Uhr verlieren in vielen Branchen an Bedeutung. Zeitgemäße Arbeitszeitmodelle erlauben es den Beschäftigten, den Beginn und das Ende ihres Arbeitstages im Rahmen bestimmter Kernarbeitszeiten selbst zu bestimmen. Dies erleichtert die Vereinbarkeit von Beruf und Familie erheblich, da Eltern ihre Kinder flexibler abholen können.", correctAnswer: "H" },
              { id: 5, text: "Grüne Büros liegen im Trend. Das Aufstellen von Farnen, Efeu oder Einblatt in Büroräumen hat nicht nur ästhetische Gründe. Die Pflanzen filtern Schadstoffe aus der Luft, regulieren die Luftfeuchtigkeit und produzieren Sauerstoff. Dies führt bei den Mitarbeitern zu weniger Kopfschmerzen und erhöht nachweislich die allgemeine Zufriedenheit am Arbeitsplatz.", correctAnswer: "D" }
            ]
          },
          {
            part: "Teil 2",
            title: "Leseverstehen (Detailverstehen)",
            description: "Lesen Sie den folgenden Text und wählen Sie bei den Aufgaben 6-10 die richtige Antwort (a, b oder c).",
            passage: "Arbeiten im hohen Alter: Freiwillige Beschäftigung oder finanzielle Notwendigkeit?\n\nDie Zahl der Menschen in Deutschland, die auch nach dem Erreichen des gesetzlichen Rentenalters einer Erwerbstätigkeit nachgehen, ist in den letzten Jahren kontinuierlich gestiegen. Diese Entwicklung hat sowohl gesellschaftliche als auch wirtschaftliche Gründe. Experten diskutieren leidenschaftlich darüber, ob dieser Trend positiv zu bewerten ist oder ob er auf ein scheiterndes Rentensystem hinweist.\n\nFür einen Teil der Senioren steht der soziale Aspekt im Vordergrund. Nach Jahrzehnten im strukturierten Berufsalltag fällt es vielen schwer, plötzlich ohne feste Aufgaben zu Hause zu sitzen. Sie suchen den Kontakt zu jüngeren Menschen und möchten ihr über Jahre erworbenes Fachwissen weiterhin produktiv einbringen. Oft arbeiten sie in Teilzeit oder auf Minijob-Basis, um geistig und körperlich fit zu bleiben.\n\nAuf der anderen Seite steht jedoch eine wachsende Gruppe von Rentnern, für die das Weiterarbeiten keine freie Entscheidung ist, sondern eine nackte finanzielle Notwendigkeit. Die steigenden Lebenshaltungskosten, insbesondere für Miete und Energie in den Großstädten, führen dazu, dass die gesetzliche Rente oft nicht mehr ausreicht, um den Lebensunterhalt zu sichern. Diese Altersarmut betrifft vor allem Frauen, die wegen Kindererziehung oder Teilzeitbeschäftigung geringere Rentenansprüche erworben haben. Die Politik steht vor der großen Aufgabe, das Rentensystem so zu reformieren, dass ein würdiger Lebensabend ohne Erwerbsdruck für alle möglich ist.",
            questions: [
              { id: 6, question: "Wie hat sich die Zahl erwerbstätiger Rentner in Deutschland entwickelt?", options: [{ id: "a", text: "Sie ist in den letzten Jahren deutlich gestiegen." }, { id: "b", text: "Sie ist stark zurückgegangen." }, { id: "c", text: "Sie ist seit Jahrzehnten absolut stabil geblieben." }], correctAnswer: "a" },
              { id: 7, question: "Warum arbeiten manche Senioren freiwillig weiter?", options: [{ id: "a", text: "Weil sie sonst keine Rente ausgezahlt bekommen." }, { id: "b", text: "Um soziale Kontakte zu pflegen und eine sinnvolle Beschäftigung zu haben." }, { id: "c", text: "Weil sie eine neue Ausbildung beginnen möchten." }], correctAnswer: "b" },
              { id: 8, question: "Welcher finanzielle Faktor zwingt viele Rentner zum Weiterarbeiten?", options: [{ id: "a", text: "Die hohen Steuern auf Rentenbezüge." }, { id: "b", text: "Die gestiegenen Kosten für Miete und Energie im Alltag." }, { id: "c", text: "Die Gebühren für die Nutzung öffentlicher Verkehrsmittel." }], correctAnswer: "b" },
              { id: 9, question: "Warum sind besonders Frauen von Altersarmut betroffen?", options: [{ id: "a", text: "Weil sie statistisch weniger sparsam sind." }, { id: "b", text: "Wegen niedrigerer Rentenansprüche durch Teilzeitarbeit und Kindererziehungszeiten." }, { id: "c", text: "Weil Frauen in Deutschland keine gesetzliche Rente erhalten." }], correctAnswer: "b" },
              { id: 10, question: "Welche Aufgabe hat die Politik laut Text in der Zukunft?", options: [{ id: "a", text: "Das Arbeiten im Alter gesetzlich komplett zu verbieten." }, { id: "b", text: "Das Rentensystem so anzupassen, dass Altersarmut verhindert wird." }, { id: "c", text: "Das gesetzliche Rentenalter auf 75 Jahre anzuheben." }], correctAnswer: "b" }
            ]
          },
          {
            part: "Teil 3",
            title: "Selektives Lesen (Zuordnung)",
            description: "Lesen Sie die Situationen (11-20) und die Anzeigen (A-L). Finden Sie für jede Situation die passende Anzeige. Für eine Situation gibt es keine passende Anzeige. Kennzeichnen Sie diese mit einem 'X'.",
            options: [
              { id: "A", text: "Sprachschule Latino - Spanischkurse für Fortgeschrittene (B1/B2) mit muttersprachlichen Lehrkräften. Mittwochs ab 19:30 Uhr." },
              { id: "B", text: "Klavierstudio Tastenklang - Einzelunterricht für Erwachsene, auch ohne Vorkenntnisse. Flexible Termingestaltung." },
              { id: "C", text: "Schachclub Matt - Wöchentliche Spielabende und Training für Einsteiger jeden Alters. Kostenloses Probetraining." },
              { id: "D", text: "Tanzschule Rhythmus - Salsa- und Bachatakurse für Paare. Einstieg jederzeit möglich. Freitags ab 20:00 Uhr." },
              { id: "E", text: "Kreativwerkstatt Holz - Holzschnitzkurse am Wochenende. Gestalten Sie eigene Skulpturen unter Anleitung." },
              { id: "F", text: "Lauftreff Aktiv - Gemeinsames Lauftraining für Anfänger und Fortgeschrittene zur Marathonvorbereitung. Dienstags 18 Uhr." },
              { id: "G", text: "Foto-Club Blende - Workshops zur digitalen Fotobearbeitung mit Photoshop. Eigener Laptop erforderlich." },
              { id: "H", text: "Kochschule Aromen - Indische Küche für Genießer. Abendkurs am Freitag, inklusive Zutaten und Getränke." },
              { id: "I", text: "Yogastudio Shanti - Sanfte Yoga- und Meditationskurse für Senioren zur Verbesserung der Beweglichkeit." },
              { id: "J", text: "Nähstube Faden - Nähkurse für Anfänger. Lernen Sie den Umgang mit der Nähmaschine und fertigen Sie eigene Kleidung." },
              { id: "K", text: "Segelverein See - Wochenendkurse zum Erwerb des Sportbootführerscheins Binnen im Sommer." },
              { id: "L", text: "Malkurs Aquarell - Entspannte Aquarellmalerei für Senioren am Vormittag. Materialien werden gestellt." }
            ],
            items: [
              { id: 11, situation: "Eine Seniorin sucht einen sanften Yoga- und Meditationskurs in ihrer Nähe zur Entspannung.", correctAnswer: "I" },
              { id: 12, situation: "Ein Mann möchte am Wochenende das Schnitzen und Bearbeiten von Holz erlernen.", correctAnswer: "E" },
              { id: 13, situation: "Ein Ehepaar möchte gemeinsam Salsa tanzen lernen und sucht einen passenden Abendkurs.", correctAnswer: "D" },
              { id: 14, situation: "Eine Studentin möchte lernen, wie man mit Photoshop Bilder professionell am Laptop nachbearbeitet.", correctAnswer: "G" },
              { id: 15, situation: "Ein vielbeschäftigter Arzt möchte flexibel lernen, Klavier zu spielen, und sucht Einzelunterricht.", correctAnswer: "B" },
              { id: 16, situation: "Ein Rentner möchte vormittags lernen, mit Wasserfarben Landschaften zu malen.", correctAnswer: "L" },
              { id: 17, situation: "Eine junge Frau möchte lernen, wie man Kleidung mit der Nähmaschine selbst näht.", correctAnswer: "J" },
              { id: 18, situation: "Ein Berufstätiger sucht einen fortgeschrittenen Spanischkurs am späten Abend unter der Woche.", correctAnswer: "A" },
              { id: 19, situation: "Ein Läufer sucht Gleichgesinnte zur gemeinsamen Vorbereitung auf einen Marathon.", correctAnswer: "F" },
              { id: 20, situation: "Jemand sucht eine Ausbildung zum professionellen Hubschrauberpiloten.", correctAnswer: "X" }
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
            title: "Rekonstruktion von Texten / Zuordnung von Überschriften",
            description: "Lesen Sie die fünf Texte (1-5) und entscheiden Sie, welche Überschrift (A-J) am besten zu welchem Text passt. Es gibt für jeden Text nur eine passende Überschrift. Fünf Überschriften bleiben übrig.",
            options: [
              { id: "A", text: "Warum Carsharing die Umwelt weniger schont als gedacht" },
              { id: "B", text: "Die Zukunft der E-Mobilität: Reichweiten verdoppeln sich" },
              { id: "C", text: "Warum Großstädte vermehrt auf autofreie Zonen setzen" },
              { id: "D", text: "Die Renaissance der Straßenbahn in europäischen Metropolen" },
              { id: "E", text: "Helmpflicht für Radfahrer: Ein sinnvolles Gesetz?" },
              { id: "F", text: "Wie das Lastenrad den innerstädtischen Lieferverkehr revolutioniert" },
              { id: "G", text: "Warum das Fliegen innerhalb Deutschlands teurer werden soll" },
              { id: "H", text: "Die Vorteile von Tempo-30-Zonen in Wohngebieten" },
              { id: "I", text: "Mit dem Nachtzug durch Europa: Der Trend zum langsamen Reisen" },
              { id: "J", text: "Warum immer mehr Jugendliche auf den Führerschein verzichten" }
            ],
            items: [
              { id: 1, text: "Um die Lebensqualität der Bewohner zu verbessern und die Luftverschmutzung zu reduzieren, sperren immer mehr Verwaltungen zentrale Straßenabschnitte komplett für den privaten Autoverkehr. Fußgänger und Radfahrer erhalten dadurch mehr Raum, während der Einzelhandel durch die belebten Fußgängerzonen oft sogar Umsatzzuwächse verzeichnet.", correctAnswer: "C" },
              { id: 2, text: "Wirtschaftlichkeit und Schnelligkeit sprechen für moderne Transporträder in der Stadt. Paketdienste setzen zunehmend auf dreirädrige Lastenräder mit Elektromotor, um Waren auf der sogenannten letzten Meile zuzustellen. Sie benötigen keine Parkplätze in zweiter Reihe und können Staus in engen Straßen mühelos umfahren.", correctAnswer: "F" },
              { id: 3, text: "Die Einführung von niedrigen Geschwindigkeitsgrenzen in Innenstädten sorgt für kontroverse Debatten. Befürworter betonen, dass dadurch die Unfallzahlen drastisch sinken und die Lärmbelastung für die Anwohner halbiert wird. Kritiker bemängeln hingegen den verlangsamten Verkehrsfluss und mögliche Verzögerungen für Rettungskräfte.", correctAnswer: "H" },
              { id: 4, text: "Während das eigene Auto früher als wichtiges Statussymbol und Zeichen von Unabhängigkeit galt, zeigt die Statistik heute ein anderes Bild. Junge Menschen in Großstädten nutzen lieber das dichte Netz von U-Bahnen, Carsharing und Leihrädern. Die hohen Kosten für Anschaffung, Versicherung und Parkplätze schrecken viele ab.", correctAnswer: "J" },
              { id: 5, text: "Reisen als Erlebnis gewinnt an Bedeutung. Das Angebot an Schlaf- und Liegewagenverbindungen zwischen europäischen Metropolen wächst stetig. Reisende schätzen die umweltfreundliche Alternative zum Flugzeug, bei der man abends einsteigt und morgens ausgeruht im Zentrum von Paris, Wien oder Mailand ankommt.", correctAnswer: "I" }
            ]
          },
          {
            part: "Teil 2",
            title: "Leseverstehen (Detailverstehen)",
            description: "Lesen Sie den folgenden Text und wählen Sie bei den Aufgaben 6-10 die richtige Antwort (a, b oder c).",
            passage: "Das Geheimnis des guten Schlafs: Warum die Nachtruhe für uns lebenswichtig ist\n\nSchlaf ist kein passiver Zustand, sondern ein hochaktiver Prozess, bei dem sich Körper und Geist regenerieren. Während wir schlafen, arbeitet unser Gehirn auf Hochtouren: Es sortiert die Eindrücke des Tages, speichert Gelerntes im Langzeitgedächtnis und baut schädliche Stoffwechselprodukte ab. Ein dauerhafter Mangel an gesundem Schlaf kann schwerwiegende gesundheitliche Folgen haben.\n\nChronischer Schlafentzug schwächt nachweislich das Immunsystem, wodurch die Anfälligkeit für Infekte steigt. Zudem erhöht sich das Risiko für Herz-Kreislauf-Erkrankungen, Bluthochdruck und Übergewicht, da Schlafmangel den Hormonhaushalt stört und Heißhungerattacken begünstigt. Auch die psychische Verfassung leidet: Gereiztheit, Konzentrationsstörungen und ein erhöhtes Risiko für Depressionen sind häufige Folgen einer gestörten Nachtruhe.\n\nUm die Schlafqualität zu verbessern, empfehlen Mediziner eine gute Schlafhygiene. Dazu gehört es, feste Aufsteh- und Zubettgehzeiten einzuhalten – auch am Wochenende. Der Schlafraum sollte kühl, dunkel und ruhig sein. Zudem sollte man in den letzten Stunden vor dem Schlafen auf schwere Mahlzeiten, Alkohol und vor allem auf die Nutzung von Smartphones verzichten, da das blaue Bildschirmlicht die Produktion des Schlafhormons Melatonin hemmt.",
            questions: [
              { id: 6, question: "Was passiert im Gehirn während des Schlafs?", options: [{ id: "a", text: "Es schaltet sich komplett ab, um Energie zu sparen." }, { id: "b", text: "Es verarbeitet die Tageseindrücke und speichert Gelerntes ab." }, { id: "c", text: "Es produziert neue Muskelzellen für den Körper." }], correctAnswer: "b" },
              { id: 7, question: "Welche körperliche Folge kann chronischer Schlafmangel haben?", options: [{ id: "a", text: "Eine verbesserte Immunabwehr." }, { id: "b", text: "Ein erhöhtes Risiko für Herz-Kreislauf-Erkrankungen und Übergewicht." }, { id: "c", text: "Ein dauerhaft niedriges Blutdruckniveau." }], correctAnswer: "b" },
              { id: 8, question: "Wie wirkt sich Schlafentzug auf die psychische Gesundheit aus?", options: [{ id: "a", text: "Er führt zu besserer Konzentrationsfähigkeit im Beruf." }, { id: "b", text: "Er begünstigt Gereiztheit und steigert das Risiko für Depressionen." }, { id: "c", text: "Er hat keine Auswirkungen auf die Gefühle eines Menschen." }], correctAnswer: "b" },
              { id: 9, question: "Welche Empfehlung geben Mediziner für eine gute Schlafhygiene?", options: [{ id: "a", text: "Jeden Tag zu völlig unterschiedlichen Zeiten ins Bett zu gehen." }, { id: "b", text: "Feste Schlafenszeiten einzuhalten und den Raum kühl und dunkel zu halten." }, { id: "c", text: "Vor dem Einschlafen Sport zu treiben." }], correctAnswer: "b" },
              { id: 10, question: "Warum sollte man das Smartphone vor dem Einschlafen nicht nutzen?", options: [{ id: "a", text: "Weil der Akku im Dunkeln explodieren könnte." }, { id: "b", text: "Weil das blaue Licht die Bildung des Schlafhormons Melatonin stört." }, { id: "c", text: "Weil man nachts keine Nachrichten empfangen darf." }], correctAnswer: "b" }
            ]
          },
          {
            part: "Teil 3",
            title: "Selektives Lesen (Zuordnung)",
            description: "Lesen Sie die Situationen (11-20) und die Anzeigen (A-L). Finden Sie für jede Situation die passende Anzeige. Für eine Situation gibt es keine passende Anzeige. Kennzeichnen Sie diese mit einem 'X'.",
            options: [
              { id: "A", text: "Tierpension Waldblick - Liebevolle Betreuung für Hunde und Katzen während Ihres Urlaubs. Großer Auslauf im Garten." },
              { id: "B", text: "Hundesalon Bello - Professionelle Fellpflege, Waschen, Schneiden und Krallenschneiden für alle Hunderassen. Termin online." },
              { id: "C", text: "Tierarztpraxis Dr. Hein - Moderne Diagnostik, Impfungen und Notdienst für Kleintiere. Parkplätze vor der Tür." },
              { id: "D", text: "Hundeschule Pfote - Welpenkurse, Einzeltraining bei Problemverhalten und Vorbereitung auf den Hundeführerschein." },
              { id: "E", text: "Tierbedarf Müller - Futter, Spielzeug und Körbchen für Hunde, Katzen und Nager. Große Auswahl an Bio-Tierfutter." },
              { id: "F", text: "Katzenbetreuung Miau - Mobiler Service: Wir füttern und beschäftigen Ihre Katze direkt bei Ihnen zu Hause." },
              { id: "G", text: "Reitstall Eichenhof - Reitunterricht für Anfänger, geführte Ausritte und Pferdeboxen zur Miete." },
              { id: "H", text: "Hunde-Physio - Professionelle Krankengymnastik und Hydrotherapie für Hunde nach Operationen oder bei Gelenkschmerzen." },
              { id: "I", text: "Vogelwelt - Alles für Ziervögel und Wellensittiche: Käfige, Spezialfutter und Spielzeug." },
              { id: "J", text: "Hunde-Taxi - Sicherer Transport Ihres Haustieres zum Tierarzt oder Hundefriseur in Spezialfahrzeugen." },
              { id: "K", text: "Tierfotografie Schmidt - Professionelle Fotoshootings für Ihr Haustier im Studio oder in der Natur." },
              { id: "L", text: "Aquaristik-Center - Beratung, Verkauf und Einrichtung von Süß- und Meerwasseraquarien. Fische und Pflanzen vorrätig." }
            ],
            items: [
              { id: 11, situation: "Ein Hundebesitzer fährt für zwei Wochen in den Urlaub und sucht eine Unterkunft für seinen Hund.", correctAnswer: "A" },
              { id: 12, situation: "Eine Katzenbesitzerin sucht jemanden, der ihre Katze während ihrer Abwesenheit in ihrer eigenen Wohnung füttert.", correctAnswer: "F" },
              { id: 13, situation: "Der Hund eines Rentners lahmt nach einer Operation und benötigt Krankengymnastik zur Genesung.", correctAnswer: "H" },
              { id: 14, situation: "Eine Hundehalterin möchte das Fell ihres Hundes professionell waschen und schneiden lassen.", correctAnswer: "B" },
              { id: 15, situation: "Ein neuer Hundebesitzer sucht einen Trainingskurs zur Erziehung seines jungen Welpen.", correctAnswer: "D" },
              { id: 16, situation: "Jemand sucht hochwertiges biologisches Futter und ein neues Spielzeug für seine Katze.", correctAnswer: "E" },
              { id: 17, situation: "Eine Tierbesitzerin sucht ein professionelles Fotostudio, um schöne Porträtaufnahmen von ihrer Katze machen zu lassen.", correctAnswer: "K" },
              { id: 18, situation: "Der Hund einer berufstätigen Frau muss dringend zum Tierarzt gebracht werden, sie hat jedoch kein Auto.", correctAnswer: "J" },
              { id: 19, situation: "Ein Tierfreund möchte sich ein farbenfrohes Aquarium für sein Wohnzimmer einrichten lassen.", correctAnswer: "L" },
              { id: 20, situation: "Jemand sucht eine Urlaubsbetreuung für seine Schlange während der Sommerferien.", correctAnswer: "X" }
            ]
          }
        ]
      }
    ];

