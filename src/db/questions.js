// Telc B2 Exam Trainer Test Generator Logic
(function() {
  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  window.generateTest = function(totalQuestions) {
    const test = {
      totalQuestions,
      timeLimitMinutes: totalQuestions === 105 ? 150 : totalQuestions === 60 ? 90 : 45,
      sections: {
        Leseverstehen: [],
        Sprachbausteine: [],
        Hörverstehen: []
      }
    };

    // Grab the database sets from the window namespace
    const rSets = shuffleArray(window.readingQuestionsSets).map(clone);
    const laSets = shuffleArray(window.languageQuestionsSets).map(clone);
    const liSets = shuffleArray(window.listeningQuestionsSets).map(clone);

    if (totalQuestions === 30) {
      // FAST TEST: 10 Reading, 10 Language, 10 Listening
      const readBlock = rSets[0].parts.find(p => p.part === "Teil 3");
      test.sections.Leseverstehen = [readBlock];

      const langBlock = laSets[0].parts[Math.random() > 0.5 ? 0 : 1];
      test.sections.Sprachbausteine = [langBlock];

      const listBlock = liSets[0].parts.find(p => p.part === "Teil 2");
      test.sections.Hörverstehen = [listBlock];

    } else if (totalQuestions === 60) {
      // REDUCED TEST: 20 Reading, 20 Language, 20 Listening (1 complete random Set)
      const setIdx = Math.floor(Math.random() * window.readingQuestionsSets.length);
      test.sections.Leseverstehen = clone(window.readingQuestionsSets[setIdx].parts);
      test.sections.Sprachbausteine = clone(window.languageQuestionsSets[setIdx].parts);
      test.sections.Hörverstehen = clone(window.listeningQuestionsSets[setIdx].parts);

    } else {
      // ORIGINAL TEST: 35 Reading, 35 Language, 35 Listening
      const readPart1_a = rSets[0].parts.find(p => p.part === "Teil 1");
      const readPart1_b = rSets[1].parts.find(p => p.part === "Teil 1");
      const readPart2_a = rSets[0].parts.find(p => p.part === "Teil 2");
      const readPart3_a = rSets[0].parts.find(p => p.part === "Teil 3");
      const readPart3_b = rSets[1].parts.find(p => p.part === "Teil 3");
      
      test.sections.Leseverstehen = [
        { ...readPart1_a, part: "Teil 1 (Set A)" },
        { ...readPart1_b, part: "Teil 1 (Set B)" },
        { ...readPart2_a, part: "Teil 2" },
        { ...readPart3_a, part: "Teil 3 (Set A)" },
        { ...readPart3_b, part: "Teil 3 (Set B)" }
      ];

      const langBlock1 = laSets[0].parts[0];
      const langBlock2 = laSets[0].parts[1];
      const langBlock3 = laSets[1].parts[0];
      const langBlock4Full = laSets[1].parts[1];
      const langBlock4Partial = {
        ...langBlock4Full,
        items: langBlock4Full.items ? langBlock4Full.items.slice(0, 5) : []
      };

      test.sections.Sprachbausteine = [
        { ...langBlock1, part: "Teil 1 (Set A)" },
        { ...langBlock2, part: "Teil 2 (Set A)" },
        { ...langBlock3, part: "Teil 1 (Set B)" },
        { ...langBlock4Partial, part: "Teil 2 (Set B)" }
      ];

      const listPart1_a = liSets[0].parts.find(p => p.part === "Teil 1");
      const listPart2_a = liSets[0].parts.find(p => p.part === "Teil 2");
      const listPart2_b = liSets[1].parts.find(p => p.part === "Teil 2");
      const listPart3_a = liSets[0].parts.find(p => p.part === "Teil 3");
      const listPart3_b = liSets[1].parts.find(p => p.part === "Teil 3");

      test.sections.Hörverstehen = [
        { ...listPart1_a, part: "Teil 1" },
        { ...listPart2_a, part: "Teil 2 (Set A)" },
        { ...listPart2_b, part: "Teil 2 (Set B)" },
        { ...listPart3_a, part: "Teil 3 (Set A)" },
        { ...listPart3_b, part: "Teil 3 (Set B)" }
      ];
    }

    let questionCounter = 1;
    const renumberSection = (sectionParts) => {
      sectionParts.forEach(part => {
        if (part.items) {
          part.items.forEach(item => {
            const oldId = item.id;
            item.displayId = questionCounter++;
            if (part.passage) {
              part.passage = part.passage.replace(new RegExp(`___${oldId}___`, 'g'), `___${item.displayId}___`);
            }
          });
        }
        if (part.questions) {
          part.questions.forEach(q => {
            const oldId = q.id;
            q.displayId = questionCounter++;
            if (part.passage) {
              part.passage = part.passage.replace(new RegExp(`___${oldId}___`, 'g'), `___${q.displayId}___`);
            }
          });
        }
      });
    };


    renumberSection(test.sections.Leseverstehen);
    renumberSection(test.sections.Sprachbausteine);
    renumberSection(test.sections.Hörverstehen);

    return test;
  };
})();
